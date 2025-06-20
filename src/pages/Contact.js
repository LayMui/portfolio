import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message too short")
    .max(500, "Message too long")
    .required("Message is required"),
});

export default function Contact() {
  const toast = useToast();

  return (
    <Box
      id="contact"
      py={16}
      px={6}
      maxW="container.md"
      mx="auto"
      bg="gray.50"
      borderRadius="md"
    >
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Contact Me
      </Heading>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            toast({
              title: "Message sent",
              description: "Thanks for reaching out! I'll get back to you soon.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            actions.setSubmitting(false);
            actions.resetForm();
          }, 1000);
        }}
      >
        {(formik) => (
          <Form>
            <VStack spacing={4} align="stretch">
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    isRequired
                  >
                    <FormLabel>Name</FormLabel>
                    <Input {...field} placeholder="Your name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    isRequired
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="your.email@example.com"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="message">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.message && form.touched.message}
                    isRequired
                  >
                    <FormLabel>Message</FormLabel>
                    <Textarea {...field} placeholder="Your message" rows={6} />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={formik.isSubmitting}
                type="submit"
                alignSelf="flex-start"
              >
                Send Message
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
