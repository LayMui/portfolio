import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

function Layout({ title = "My App", children }) {
  return (
    <Box bg="gray.50" minHeight="100vh">
      <Box as="header" bg="teal.500" py={4} px={6} color="white">
        <Heading as="h1" size="md">
          {title}
        </Heading>
      </Box>

      <Container as="main" maxW="container.md" py={8}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
