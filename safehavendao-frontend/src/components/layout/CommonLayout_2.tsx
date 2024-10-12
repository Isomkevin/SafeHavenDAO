import { ReactNode } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface CommonLayoutProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <Flex direction="column" minH="100vh">
      {/* Navbar */}
      <Box as="nav" bg="teal.500" color="white" py={4} px={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            SafeHavenDAO
          </Text>
          <Flex gap={6}>
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/swap">Swap</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {/* Add more links as needed */}
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" py={6} px={8}>
        {children}
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4} textAlign="center">
        <Text>SafeHavenDAO &copy; {new Date().getFullYear()}</Text>
      </Box>
    </Flex>
  );
}
