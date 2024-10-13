import { useState } from "react";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import TransactionModal from "../components/features/TransactionModal"; // Adjust import as needed

function App() {
  const [isDepositOpen, setDepositOpen] = useState(false);
  const [isWithdrawOpen, setWithdrawOpen] = useState(false);

  const handleConfirm = (amount: string) => {
    console.log(`Transaction confirmed: ${amount}`);
  };

  return (
    <ChakraProvider>
      <Box p={4} bg="gray.900" minH="100vh" color="white">
        {/* Buttons to trigger deposit and withdraw modals */}
        <Button
          colorScheme="blue"
          onClick={() => setDepositOpen(true)}
          mb={4}
        >
          Open Deposit Modal
        </Button>
        <Button colorScheme="red" onClick={() => setWithdrawOpen(true)}>
          Open Withdraw Modal
        </Button>

        {/* Transaction modal for deposit */}
        <TransactionModal
          isOpen={isDepositOpen}
          onClose={() => setDepositOpen(false)}
          action="Deposit"
          currency="USD"
          onConfirm={handleConfirm}
        />

        {/* Transaction modal for withdraw */}
        <TransactionModal
          isOpen={isWithdrawOpen}
          onClose={() => setWithdrawOpen(false)}
          action="Withdraw"
          currency="USD"
          onConfirm={handleConfirm}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
