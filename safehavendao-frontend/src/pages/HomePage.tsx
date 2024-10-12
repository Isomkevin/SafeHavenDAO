import { Box, Heading } from "@chakra-ui/react";
import WalletStatusComponent from "../components/features/WalletStatus";

export default function HomePage() {
  return (
    <Box>
      <Heading>Welcome to SafeHavenDAO</Heading>
      <WalletStatusComponent balance={0} currency="ETH"/>
    </Box>
  );
}
