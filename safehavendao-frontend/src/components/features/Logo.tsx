import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text ml='10' fontSize="md" fontWeight="bold">
        SafeHavenDAO
      </Text>
    </Box>
  );
}