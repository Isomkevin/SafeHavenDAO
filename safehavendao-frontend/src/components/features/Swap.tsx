import { useEffect, useState, useCallback } from "react";
import {
  Avatar,
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
import { VStack, Spinner, useToast } from "@chakra-ui/react";
import { setOnchainKitConfig } from "@coinbase/onchainkit";
import { getTokens } from "@coinbase/onchainkit/api";

// Token Fetching Hook
const useFetchTokens = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const toast = useToast();

  const fetchTokens = useCallback(async () => {
    try {
      const fetchedTokens = await getTokens();
      if ("error" in fetchedTokens) {
        toast({
          title: "Error fetching tokens.",
          description: fetchedTokens.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      setTokens(fetchedTokens);
    } catch (error) {
      toast({
        title: "Error.",
        description: `Failed to fetch tokens. ${error}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  return tokens;
};

export default function SwapComponents() {
  const API_KEY = import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY;
  const { address } = useAccount();
  const tokens = useFetchTokens();

  setOnchainKitConfig({ apiKey: API_KEY });

  // Map tokens for swapping
  const swappableTokens: Token[] =
    tokens.length > 0
      ? tokens.map((token) => ({
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
      {tokens.length === 0 && (
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