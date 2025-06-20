import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Link,
  Text,
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

export default function Projects() {
  return (
    <Box id="projects" py={16} px={6} maxW="container.lg" mx="auto">
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {projects.map(({ title, description, link }) => (
          <Card key={title} boxShadow="md" borderRadius="md" p={4}>
            <CardHeader>
              <Link href={link} isExternal fontWeight="bold" fontSize="lg">
                {title}
              </Link>
            </CardHeader>
            <CardBody>
              <Text>{description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
