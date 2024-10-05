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
import { Flex, useMediaQuery, Text } from "@chakra-ui/react";


  export default function WalletSection() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
      <Flex align="center" justify="space-between">
        <Wallet>
          <ConnectWallet>
            {/* <Avatar className="w-full" /> */}
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
  



  
  export function WalletSection2() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
  
    return (
      <Flex align="center" justify="flex-end" direction="row" wrap="nowrap">
        <Wallet>
          <ConnectWallet>
            {isMobile ? (
              /* On mobile, only display wallet name */
              <Text fontSize="sm" color="gray.600">
                Connect Wallet
              </Text>
            ) : (
              /* On larger screens, show wallet name and avatar */
              <>
                <Avatar size="sm" />
                <Name ml={2} />
              </>
            )}
          </ConnectWallet>
  
          {/* Wallet Dropdown only visible on larger screens */}
          {!isMobile && (
            <WalletDropdown>
              <Identity hasCopyAddressOnClick>
                <Flex direction="column" align="flex-start" p={2}>
                  <Avatar size="md" mb={2} />
                  <Name fontSize="md" />
                  <Address fontSize="sm" color="gray.500" />
                  <EthBalance fontSize="md" />
                </Flex>
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          )}
        </Wallet>
      </Flex>
    );
  }
  