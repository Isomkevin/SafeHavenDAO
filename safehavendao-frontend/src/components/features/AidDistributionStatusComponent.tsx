import { Progress, Badge, VStack, Text } from "@chakra-ui/react";

interface AidDistributionStatusProps {
  status: string;
  progress: number;
}

export default function AidDistributionStatus({ status, progress }: AidDistributionStatusProps) {
  return (
    <VStack
      className="aid-status"
      p={{ base: 4, md: 6 }}
      w="100%"
      bg="linear-gradient(135deg, #0f3460, #1a1a2e)"
      borderRadius="lg"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      spacing={{ base: 3, md: 4 }}
    >
      <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
        Aid Distribution Status
      </Text>
      <Badge
        colorScheme={status === "Complete" ? "green" : "yellow"}
        fontSize={{ base: "sm", md: "md" }}
      >
        {status}
      </Badge>
      <Progress
        colorScheme={status === "Complete" ? "green" : "yellow"}
        size="lg"
        value={progress}
        w="100%"
        borderRadius="lg"
      />
    </VStack>
  );
}
