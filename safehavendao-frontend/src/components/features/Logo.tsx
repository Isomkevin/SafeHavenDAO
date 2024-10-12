import { Box, Text, BoxProps } from "@chakra-ui/react";

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Text ml='10' fontSize="md" fontWeight="bold">
        SafeHavenDAO
      </Text>
    </Box>
  );
}