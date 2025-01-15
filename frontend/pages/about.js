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
        <Heading as="h1" size="2xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg" maxW="800px" mx="auto">
          QuickAds is a one-of-its-kind AI-Ad Generator that outperforms its
          competitors in speed, features, and quality. We believe in delivering
          exceptional results.
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
            alt="Team Working"
            borderRadius="lg"
            shadow="lg"
          />
        </Box>
        <VStack flex={1} spacing={6} align="start">
          <Heading as="h2" size="lg" color="#6b46c1">
            Our Vision
          </Heading>
          <Text fontSize="md" color="gray.700">
            QuickAds aims to revolutionize the way businesses approach
            advertising. With cutting-edge AI technology, we empower businesses
            to create high-quality, professional ads in seconds.
          </Text>
          <Text fontSize="md" color="gray.700">
            From virtual product photography to ad translations, QuickAds
            handles it all with ease, helping you focus on what you do best.
          </Text>
        </VStack>
      </Flex>

      {/* Team Section */}
      <Box textAlign="center" mb={12}>
        <Heading as="h2" size="lg" mb={4}>
          Meet the Team
        </Heading>
        <Text fontSize="md" color="gray.600">
          Our team of experts works tirelessly to ensure QuickAds stays ahead
          of the curve.
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
            src="/team-member1.jpg"
            alt="Team Member"
            borderRadius="full"
            boxSize="120px"
            mx="auto"
            mb={4}
          />
          <Heading as="h3" size="md" mb={2}>
            John Doe
          </Heading>
          <Text color="gray.500">CEO & Founder</Text>
        </Box>
      </SimpleGrid>

      {/* Stats Section */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="center">
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            600+
          </Heading>
          <Text color="gray.600">Clients Served</Text>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            700k
          </Heading>
          <Text color="gray.600">Ads Generated</Text>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            1.2M
          </Heading>
          <Text color="gray.600">Hours Saved</Text>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color="#6b46c1">
            110
          </Heading>
          <Text color="gray.600">Certified Projects</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
