import { VStack, HStack, Button, Progress, Text, Box } from "@chakra-ui/react";

// Define the structure of a proposal
interface Proposal {
  id: string;
  title: string;
  description: string;
  votes: number;
  totalVotes: number;
  timeRemaining: string;
}

// Define the props for the GovernanceProposals component
interface GovernanceProposalsProps {
  proposals: Proposal[];
}

export default function GovernanceProposals({ proposals }: GovernanceProposalsProps) {
  // Implement the handleVote function
  const handleVote = (proposalId: string, voteType: 'for' | 'against') => {
    // Implement your voting logic here
    console.log(`Voted ${voteType} for proposal ${proposalId}`);
    alert("This feature is currently under development")
    // You might want to update the state or call an API here
  };

  return (
    <VStack
      className="governance-proposals"
      spacing={{ base: 4, md: 6 }}
      w="100%"
      bg="linear-gradient(135deg, #1a1a2e, #16213e)"
      borderRadius="lg"
      p={{ base: 4, md: 8 }}
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
    >
      {proposals.map((proposal) => (
        <Box
          key={proposal.id}
          w="100%"
          p={{ base: 3, md: 6 }}
          bg="gray.800"
          borderRadius="lg"
          boxShadow="0px 2px 8px rgba(0, 0, 0, 0.15)"
        >
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="white">
            {proposal.title}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.400">
            {proposal.description}
          </Text>

          <Progress
            mt={2}
            value={(proposal.votes / proposal.totalVotes) * 100}
            size="sm"
            colorScheme="blue"
            borderRadius="lg"
          />

          <HStack
            justify="space-between"
            mt={4}
            direction={{ base: "column", md: "row" }} // Stack buttons vertically on mobile
          >
            <Button
              colorScheme="blue"
              variant="outline"
              size={{ base: "sm", md: "md" }}
              onClick={() => handleVote(proposal.id, "for")}
            >
              Vote For
            </Button>
            <Button
              colorScheme="red"
              variant="outline"
              size={{ base: "sm", md: "md" }}
              onClick={() => handleVote(proposal.id, "against")}
            >
              Vote Against
            </Button>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
              {proposal.timeRemaining} remaining
            </Text>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
}