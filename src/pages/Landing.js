import React from "react";
import { Box, Avatar, Heading, Text } from "@chakra-ui/react";
import avatarImage from "../assets/avatar.png"; // adjust the path as needed

export default function Landing({ name }) {
  return (
    <Box
      id="landing"
      textAlign="center"
      py={16}
      px={6}
      bg="gray.50"
      minH="300px"
      borderRadius="md"
      maxW="container.md"
      mx="auto"
    >
      <Avatar
        size="2xl"
        src={avatarImage}
        alt={`${name} Avatar`}
        mb={4}
        mx="auto"
      />
      <Heading as="h1" size="xl" mb={2}>
        {name}
      </Heading>
      <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
      Hi! I'm an SDET software engineer with a focus in testing, passionate about building quality software and ensuring robust test automation.
      </Text>
    </Box>
  );
}
