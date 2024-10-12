import { VStack, Box, Button, Text, Flex } from "@chakra-ui/react";

export default function WalletStatus({ balance, currency }) {
  return (
    <VStack
      spacing={{ base: 4, md: 6 }} // Responsive spacing
      p={{ base: 4, md: 8 }}
      className="wallet-status"
      borderRadius="lg"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      bg="linear-gradient(135deg, #1a1a2e, #16213e)"
      w="100%"
    >
      <Box textAlign="center">
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400">
          Current Balance
        </Text>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
          {balance} {currency}
        </Text>
      </Box>

      <Flex
        justify={{ base: "center", md: "space-around" }}
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        <Button
          className="action-button"
          bg="linear-gradient(90deg, #00d4ff, #0072ff)"
          color="white"
          size="lg"
          _hover={{ bg: "linear-gradient(90deg, #0072ff, #00d4ff)" }}
          mb={{ base: 2, md: 0 }}
        >
          Deposit
        </Button>
        <Button
          className="action-button"
          bg="linear-gradient(90deg, #ff6b81, #e94560)"
          color="white"
          size="lg"
          _hover={{ bg: "linear-gradient(90deg, #e94560, #ff6b81)" }}
          mb={{ base: 2, md: 0 }}
          ml={{ md: 4 }}
        >
          Withdraw
        </Button>
        <Button
          className="action-button"
          bg="gray.700"
          color="white"
          size="lg"
          _hover={{ bg: "gray.600" }}
          ml={{ md: 4 }}
        >
          View Transactions
        </Button>
      </Flex>
    </VStack>
  );
}
