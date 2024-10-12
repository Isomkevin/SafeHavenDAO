import { Box, Button, Flex, Heading, Text, Grid, Icon, VStack, Link } from "@chakra-ui/react";
import { Shield, Users, Banknote, Globe, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <Box minH="100vh" bgGradient="linear(to-b, blue.100, white)">
      {/* Main Section */}
      <Box as="main" px={8} py={16} maxW="1200px" mx="auto">
        {/* Hero Section */}
        <VStack spacing={8} textAlign="center" mb={16}>
          <Heading as="h2" fontSize="4xl" fontWeight="bold">
            Empowering Marginalised Communities Through Decentralized Identity Infrastructure
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Secure, AI-powered solutions for financial autonomy and aid distribution and much more
          </Text>
          <Button size="lg"  color="gray.900" rightIcon={<ArrowRight />}>
            Learn More
          </Button>
        </VStack>

        {/* Features Section */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8} mb={16}>
          {[
            { title: "Secure Identity", icon: Shield, description: "Blockchain-based identity verification and protection" },
            { title: "Community Support", icon: Users, description: "Empowering women and refugees with digital tools" },
            { title: "Financial Independence", icon: Banknote, description: "Access to financial services and resources" },
            { title: "Global Reach", icon: Globe, description: "Connecting communities worldwide for mutual support" },
          ].map((feature, index) => (
            <VStack
              key={index}
              bg="white"
              boxShadow="md"
              borderRadius="lg"
              p={8}
              spacing={4}
              textAlign="center"
            >
              <Icon as={feature.icon} w={10} h={10} color="blue.500" />
              <Heading as="h3" fontSize="lg">
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </VStack>
          ))}
        </Grid>

        {/* Mission Section */}
        <VStack spacing={8} textAlign="center" mb={16}>
          <Heading as="h3" fontSize="3xl" fontWeight="bold" color="gray.400" >
            Our Mission
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="800px" mx="auto">
            SafeHavenDAO is committed to creating a secure, inclusive ecosystem that empowers individuals and communities through decentralized identity solutions. We believe in fostering financial independence and efficient aid distribution for those who need it most.
          </Text>
          <Button variant="outline" size="lg" color="gray.900">
            Join Our Community
          </Button>
        </VStack>

        {/* Call to Action Section */}
        <Box bg="blue.50" borderRadius="lg" p={8} textAlign="center">
          <Heading as="h3" color="gray.400" fontSize="2xl" mb={4}>
            Ready to Make a Difference?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Be part of the movement towards a more inclusive and empowered global community.
          </Text>
          <Button size="lg" color="gray.900">
            Get Involved Now
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.400" py={8}>
        <Box maxW="1200px" mx="auto" px={8}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <Box>
              <Heading as="h4" fontSize="lg" fontWeight="semibold" mb={4}>
                SafeHavenDAO
              </Heading>
              <Text color="gray.600">
                Empowering communities through decentralized identity solutions.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" fontSize="lg" fontWeight="semibold" mb={4}>
                Quick Links
              </Heading>
              <VStack align="flex-start" spacing={2} color="gray.600">
                <Link href="#" _hover={{ color: "blue.600" }}>
                  About Us
                </Link>
                <Link href="#" _hover={{ color: "blue.600" }}>
                  Our Solutions
                </Link>
                <Link href="#" _hover={{ color: "blue.600" }}>
                  Get Involved
                </Link>
                <Link href="#" _hover={{ color: "blue.600" }}>
                  Contact
                </Link>
              </VStack>
            </Box>
            <Box>
              <Heading as="h4" fontSize="lg" fontWeight="semibold" mb={4}>
                Connect With Us
              </Heading>
              <Flex gap={4}>
                {/* Social Icons (Using Chakra IconButton or similar for social media) */}
                {/* Example: */}
                <Link href="#" color="gray.600" _hover={{ color: "blue.600" }}>
                  <Icon viewBox="0 0 24 24" w={6} h={6} fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </Icon>
                </Link>
                {/* Add more icons similarly */}
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
