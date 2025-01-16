import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import Footer from "components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    toast({
      title: "Message Sent!",
      description: "We will reach out to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Box bg="gray.50" p={8} borderRadius="lg" maxW="800px" mx="auto" mt={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={8} color="black">
        Contact Us <span style={{ color: "#6b46c1" }}>!</span>
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
        <FormControl>
          <FormLabel color="gray.600" fontSize="lg">
            First Name
          </FormLabel>
          <Input
            name="firstName"
            placeholder="First Name"
            size="lg"
            focusBorderColor="purple.400"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel color="gray.600" fontSize="lg">
            Last Name
          </FormLabel>
          <Input
            name="lastName"
            placeholder="Last Name"
            size="lg"
            focusBorderColor="purple.400"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel color="gray.600" fontSize="lg">
            Email Address
          </FormLabel>
          <Input
            name="email"
            placeholder="Enter Your Email"
            size="lg"
            focusBorderColor="purple.400"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel color="gray.600" fontSize="lg">
            Phone Number
          </FormLabel>
          <Input
            name="phone"
            placeholder="Phone Number"
            size="lg"
            focusBorderColor="purple.400"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </FormControl>
      </SimpleGrid>

      <FormControl mb={6}>
        <FormLabel color="gray.600" fontSize="lg">
          Send A Message
        </FormLabel>
        <Textarea
          name="message"
          placeholder="Type Your Message Here"
          size="lg"
          focusBorderColor="purple.400"
          resize="vertical"
          value={formData.message}
          onChange={handleInputChange}
        />
      </FormControl>

      <Button
        colorScheme="purple"
        size="lg"
        width="full"
        variant="solid"
        loadingText="Sending..."
        onClick={handleSubmit}
      >
        Send Message
      </Button>
      <Footer/>
    </Box>
  );
};

export default ContactUs;
