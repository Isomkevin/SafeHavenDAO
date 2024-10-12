import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  Wallet,
  ConnectWallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
// import { Flex, useMediaQuery} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export default function WalletSection() {
  // const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex align="center" justify="space-between">
      <Wallet>
        {/* Preventing default behavior on button click */}
        <ConnectWallet>
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </Flex>
  );
}
