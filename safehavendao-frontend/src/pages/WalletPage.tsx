import { Heading } from "@chakra-ui/react";
import SwapComponent from "../components/features/Swap";
import TransactionsComponent from "../components/features/TransactionsComponent";

export default function WalletPage() {
  return (
    <>
      <Heading>Swap Tokens</Heading>
      <SwapComponent />
      <TransactionsComponent />
      
    </>
  );
}
