import React from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Footer from "components/Footer";

const AboutUs = () => {
  return (
    <Box bg="gray.50" py={10} px={6}>
      {/* Hero Section */}
      <Box
        bg="#6b46c1"
        color="white"
        textAlign="center"
        py={16}
        px={6}
        borderRadius="lg"
        shadow="lg"
        mb={10}
      >
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="md" maxW="10000px" mx="auto">
          GetThumb is a revolutionary standalone YouTube thumbnail maker, designed to help creators craft stunning thumbnails in minutes. Our goal is to empower content creators with easy-to-use tools for professional results.
        </Text>
      </Box>

      {/* Content Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={8}
        align="center"
        mb={16}
      >
        <Box flex={1}>
          <Image
            src="/about-hero-image.jpg"
            alt="Thumbnail Creation"
            borderRadius="lg"
            shadow="lg"
          />
        </Box>
        <VStack flex={1} spacing={6} align="start">
          <Heading as="h2" size="lg" color="#6b46c1">
            Our Mission
          </Heading>
          <Text fontSize="md" color="gray.700">
            At GetThumb, our mission is to make thumbnail creation effortless and accessible for everyone. Whether you’re a new YouTuber or an established creator, our tools are built to meet your needs.
          </Text>
          <Text fontSize="md" color="gray.700">
            With features like automated design suggestions, drag-and-drop editing, and access to a rich library of templates, GetThumb helps your videos stand out and attract more viewers.
          </Text>
        </VStack>
      </Flex>

      {/* Team Section */}
      <Box textAlign="center" mb={12}>
        <Heading as="h2" size="lg" mb={4}>
          Meet the Creator
        </Heading>
        <Text fontSize="md" color="gray.600">
          Behind GetThumb is a passionate creator dedicated to simplifying thumbnail design for everyone.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8} mb={12}>
        <Box
          textAlign="center"
          bg="white"
          borderRadius="lg"
          shadow="lg"
          p={6}
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image
            src="/creator.jpg"
            alt="Creator"
            borderRadius="full"
            boxSize="120px"
            mx="auto"
            mb={4}
          />
          <Heading as="h3" size="md" mb={2}>
            Prerna Madhyan
          </Heading>
          <Text color="gray.500">Full-Stack Web Designer</Text>
        </Box>
      </SimpleGrid>

      {/* Stats Section */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="center">
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            1M+
          </Heading>
          <Text color="gray.600">Thumbnails Created</Text>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            500k
          </Heading>
          <Text color="gray.600">Creators Helped</Text>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            10M+
          </Heading>
          <Text color="gray.600">Views Boosted</Text>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            100%
          </Heading>
          <Text color="gray.600">User Satisfaction</Text>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export default AboutUs;
