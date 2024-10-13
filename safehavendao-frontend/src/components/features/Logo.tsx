import { Box, Text, BoxProps } from "@chakra-ui/react";

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Text
        ml={['4', '6', '8', '10']}
        fontSize={['sm', 'md', 'lg', 'xl']}
        fontWeight="bold"
      >
        SafeHaven
      </Text>
    </Box>
  );
}