import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: "Deposit" | "Withdraw";
  currency: string;
  onConfirm: (amount: string) => void;
}

export default function TransactionModal({
  isOpen,
  onClose,
  action,
  currency,
  onConfirm
}: TransactionModalProps) {
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleConfirm = () => {
    if (!amount) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onConfirm(amount);
    setAmount("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{action} {currency}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Input
              placeholder={`Amount to ${action.toLowerCase()}`}
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              type="number"
              variant="filled"
              bg="gray.800"
              color="white"
              size={{ base: "sm", md: "md" }}
            />
            <Button
              colorScheme={action === "Deposit" ? "blue" : "red"}
              size={{ base: "sm", md: "md" }}
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}