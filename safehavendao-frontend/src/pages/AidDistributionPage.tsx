import { VStack, Heading } from "@chakra-ui/react";
import AidDistributionStatus from "../components/features/AidDistributionStatusComponent";

function AidDistributionPage() {
  return (
    <VStack spacing={8}>
        <Heading size="lg">Aid Distribution</Heading>
        <AidDistributionStatus status="In Progress" progress={60} />
        <AidDistributionStatus status="Complete" progress={100} />
    </VStack>
  );
}

export default AidDistributionPage;
