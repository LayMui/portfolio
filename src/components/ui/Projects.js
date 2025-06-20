import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Project One: Advanced React",
    description: "Advanced React techniques and tools by Meta",
    link: "https://github.com/LayMui/reactlab",
  },
  {
    title: "Project Two: React Native",
    description: "Little Lemon App using React Native (Meta).",
    link: "https://github.com/LayMui/LittleLemonApp",
  },
  {
    title: "Project Three: Healenium",
    description: "To Demo Healenium, another cool test automation plugin tool",
    link: "https://github.com/LayMui/todomvc-react",
  },
];

const cardBackgrounds = ["purple.50", "teal.50", "orange.50"]; // Customize as needed

export default function Projects() {
  return (
    <Box id="projects" py={16} px={6} maxW="container.lg" mx="auto">
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="teal.600">
        Featured Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {projects.map(({ title, description, link }, index) => (
          <Card
            key={title}
            bg={cardBackgrounds[index % cardBackgrounds.length]}
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
          >
            <CardHeader>
              <Heading size="md">{title}</Heading>
            </CardHeader>

            <CardBody>
              <Text color="gray.700">{description}</Text>
            </CardBody>

            <CardFooter>
              <Button
                as="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="teal"
                size="sm"
              >
                View on GitHub
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
