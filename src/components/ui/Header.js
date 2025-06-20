import React from "react";
import {
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/laymui", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/laymui-toh-632a76141", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/laymuitoh/", icon: FaInstagram },
];

export default function Header() {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.900");

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      as="nav"
      position="sticky"
      top="0"
      zIndex="1000"
      bg={bg}
      borderBottom="2px"
      borderColor={borderColor}
      justify="space-between"
      align="center"
      px={8}
      py={4}
      boxShadow="sm"
    >
      {/* Menu Links */}
      <HStack spacing={10}>
        <Link
          href="#projects"
          onClick={scrollToId("projects")}
          fontWeight="bold"
          color="teal.600"
          _hover={{ color: "teal.400", textDecoration: "underline" }}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          onClick={scrollToId("contact")}
          fontWeight="bold"
          color="teal.600"
          _hover={{ color: "teal.400", textDecoration: "underline" }}
        >
          Contact Me
        </Link>
      </HStack>

      {/* Social Icons */}
      <HStack spacing={3}>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <IconButton
            key={label}
            as="a"
            href={href}
            aria-label={label}
            icon={<Icon />}
            size="md"
            variant="ghost"
            color="gray.600"
            _hover={{ color: "teal.500", transform: "scale(1.1)" }}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </HStack>
    </Flex>
  );
}
