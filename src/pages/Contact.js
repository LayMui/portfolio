import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      enquiryType: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Message is required"),
      enquiryType: Yup.string().required("Please select an enquiry type"),
    }),
    onSubmit: (values, actions) => {
      console.log("Form submitted:", values);
      actions.resetForm();
      alert("Thank you for reaching out!");
    },
  });

  return (
    <Box id="contact" py={16} px={6} maxW="container.sm" mx="auto">
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="teal.600">
        Contact Me
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4} isInvalid={formik.touched.name && formik.errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            placeholder="your@email.com"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formik.touched.enquiryType && formik.errors.enquiryType}>
          <FormLabel>Type of Enquiry</FormLabel>
          <Select
            name="enquiryType"
            placeholder="Select enquiry type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.enquiryType}
          >
            <option value="QA automation">QA automation</option>
            <option value="speaking engagement">Speaking engagement</option>
            <option value="freelance web development">Freelance web development</option>
            <option value="mobile app automation">Mobile app automation</option>
            <option value="MCP">Chatbot using MCP</option>
          </Select>
          <FormErrorMessage>{formik.errors.enquiryType}</FormErrorMessage>
        </FormControl>

        <FormControl mb={6} isInvalid={formik.touched.message && formik.errors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            placeholder="Your message"
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="teal" width="full">
          Submit
        </Button>
      </form>
    </Box>
  );
}
