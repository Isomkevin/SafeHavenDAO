import { Flex, Avatar, useColorMode, IconButton, useMediaQuery, Heading, Box } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import WalletSection from "../features/WalletSection";

export default function TopNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user] = useState({ name: "Kevin", avatar: "https://via.placeholder.com/150" });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      position="fixed"
      top={0}
      left={0} // Always aligned to the left for mobile-first design
      w="100%"
      bg={colorMode === "dark" ? "gray.900" : "white"}
      backdropFilter="blur(10px)"
      zIndex={10}
      height="64px"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      boxShadow="md"
    >
      {/* Left Side - Branding */}
      <Box p='12'>
        <Heading size='md' color={colorMode === "dark" ? "white" : "gray.800"}>SafeHavenDAO</Heading>
      </Box>

      {/* Right Side - Avatar, Theme Toggle, and Wallet Section */}
      <Flex alignItems="center">
        {/* Theme toggle button */}
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
          onClick={toggleColorMode}
          variant="ghost"
          color={colorMode === "dark" ? "white" : "gray.800"}
          mr={2} // Spacing for mobile
        />
        {/* WalletSection - Always visible */}
        <WalletSection />
        {/* Avatar - Hidden on smaller screens */}
        {!isMobile && (
          <Avatar
            name={user.name}
            src={user.avatar}
            ml={4}
          />
        )}
      </Flex>
    </Flex>
  );
}
