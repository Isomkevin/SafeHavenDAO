import { Heading, VStack } from "@chakra-ui/react";
import SwapComponent from "../components/features/Swap";

export default function SwapPage() {
  return (
    <VStack w="full" align="center" justify="center" h="90vh">
      <Heading>Swap Tokens</Heading>
      <SwapComponent />
    </VStack>
  );
}
