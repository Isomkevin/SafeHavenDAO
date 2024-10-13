import { Heading, VStack } from "@chakra-ui/react";
import GovernanceProposals, { Proposal } from "../components/features/GovernanceProposals";

// Sample proposals data
const proposals: Proposal[] = [
  {
    id: "1",
    title: "Increase Rewards for Validators",
    description: "Proposal to increase validator rewards by 5%.",
    votes: 400,
    totalVotes: 1000,
    timeRemaining: "2 days",
  },
  {
    id: "2",
    title: "Add New Governance Token",
    description: "Proposal to add a new governance token to the ecosystem.",
    votes: 600,
    totalVotes: 1000,
    timeRemaining: "5 days",
  },
];

function VotePage() {
  return (
    <VStack spacing={8}>
      <Heading size="lg">Governance Proposals</Heading>
      <GovernanceProposals proposals={proposals} />
    </VStack>
  );
}

export default VotePage;