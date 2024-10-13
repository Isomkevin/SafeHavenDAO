import { Box, Text, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import TopNavbar from "./Header";
import { ReactNode } from "react";
import { useMediaQuery } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex direction="column" height="100vh">
      <TopNavbar />
      <Flex flexGrow={1} direction="row">
        <Sidebar />
        <Box
          as="main"
          mt="1em"
          ml={isMobile ? 0 : "64px"} // No sidebar on mobile, margin for desktop
          flexGrow={1}
          p={isMobile ? 3 : 5} // Adjust padding based on screen size
          bg="#141E30"
          color="white"
          overflow="auto"
        >
          {children}
        </Box>
      </Flex>
      {/* Footer */}
      
      <Box as="footer" mb="4em" bg="gray.700" color="white" py={4} textAlign="center">
        <Text>SafeHavenDAO &copy; {new Date().getFullYear()}. All rights reserved.</Text>
      </Box>
    </Flex>
  );
}
