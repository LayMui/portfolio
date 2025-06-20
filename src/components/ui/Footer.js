import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer({text}) {
  return (
    <Box
      as="footer"
      py={6}
      textAlign="center"
      bg="gray.100"
      color="gray.600"
      mt={16}
    >
      <Text fontSize="sm">{text}</Text>
    </Box>
  );
}
