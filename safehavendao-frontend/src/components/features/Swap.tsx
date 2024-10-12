import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
} from "@coinbase/onchainkit/swap";
import {
  Wallet,
  ConnectWallet,
} from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import { type Token } from "@coinbase/onchainkit/token";
import { Flex, VStack, Spinner, Text, useToast } from "@chakra-ui/react";
import { setOnchainKitConfig } from "@coinbase/onchainkit";
import { getTokens } from "@coinbase/onchainkit/api";
import { useCallback, useEffect, useState } from "react";

// Token Fetching Hook
const useFetchTokens = (setTokensSelect: (tokens: Token[]) => void) => {
  const toast = useToast(); // For displaying errors
  const fetchTokens = async () => {
    try {
      const tokens = await getTokens();
      if ("error" in tokens) {
        toast({
          title: "Error fetching tokens.",
          description: tokens.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      setTokensSelect(tokens);
    } catch (error) {
      toast({
        title: "Error.",
        description: "Failed to fetch tokens.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchTokens();
  }, []);
};

export default function SwapComponents() {
  const API_KEY = import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY;

  const [tokenSelect, setTokensSelect] = useState<Token[]>([]);
  const { address } = useAccount();
  const [loading, setLoading] = useState<boolean>(true);

  setOnchainKitConfig({ apiKey: API_KEY });

  // Fetch tokens using the custom hook
  useFetchTokens(setTokensSelect);

  const handleChange = useCallback((value: string) => {
    const getData = async (value: string) => {
      const response = await getTokens({ search: value });
      if ("error" in response) {
        console.error(response.error);
        return;
      }
      setTokensSelect(response); // Update tokens based on search
    };
    getData(value);
  }, []);

  // Map tokens for swapping
  const swappableTokens: Token[] =
    tokenSelect.length > 0
      ? tokenSelect.map((token) => ({
          name: token.name,
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals,
          image: token.image,
          chainId: token.chainId,
        }))
      : [
          {
            name: "Ethereum",
            address: "",
            symbol: "ETH",
            decimals: 18,
            image:
              "https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png",
            chainId: 8453,
          },
        ];

  return address ? (
    <VStack align="left">
      {/* Check if tokens are being fetched */}
      {tokenSelect.length === 0 && (
        <Spinner size="lg" label="Fetching tokens..." />
      )}

      <Swap>
        <SwapAmountInput
          label="Sell"
          swappableTokens={swappableTokens}
          type="from"
        />
        <SwapToggleButton />
        <SwapAmountInput
          label="Buy"
          swappableTokens={swappableTokens}
          type="to"
        />
        <SwapButton />
        <SwapMessage />
      </Swap>
    </VStack>
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
    </Wallet>
  );
}
