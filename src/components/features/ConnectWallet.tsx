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
  import { Flex } from "@chakra-ui/react";
  
  export default function ConnectWalletSection() {
    return (
      <Flex align="center" justify="space-between">
        <Wallet>
          <ConnectWallet>
            <Avatar className="w-full" />
            <Name />
          </ConnectWallet>
        </Wallet>
      </Flex>
    );
  }
  