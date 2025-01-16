import React from 'react';
import { Box, Container, SimpleGrid, Text, VStack, HStack, Icon, Divider } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.100" py={10} color="gray.700">
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* About Section */}
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              GetThumb
            </Text>
            <Text>
              GetThumb is your standalone YouTube thumbnail maker designed to create eye-catching
              and engaging thumbnails effortlessly. Whether you're a content creator, marketer, or
              a YouTube enthusiast, we've got you covered.
            </Text>
            <HStack spacing={4} fontSize="xl">
              <Icon as={FaFacebook} cursor="pointer" />
              <Icon as={FaTwitter} cursor="pointer" />
              <Icon as={FaLinkedin} cursor="pointer" />
              <Icon as={FaInstagram} cursor="pointer" />
            </HStack>
          </VStack>

          {/* Features Section */}
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" fontWeight="bold">
              Features
            </Text>
            <Text>Customizable Templates</Text>
            <Text>High-Resolution Thumbnails</Text>
            <Text>Easy-to-Use Editor</Text>
            <Text>Export Options</Text>
          </VStack>

          {/* Use Cases Section */}
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" fontWeight="bold">
              Use Cases
            </Text>
            <Text>YouTube Creators</Text>
            <Text>Digital Marketers</Text>
            <Text>Online Educators</Text>
            <Text>Businesses & Agencies</Text>
          </VStack>
        </SimpleGrid>

        <Divider my={8} />

        {/* Footer Bottom Section */}
        <VStack spacing={2} textAlign="center">
          <Text>Made with ❤️ for creators worldwide</Text>
          <Text fontSize="sm">
            All Rights Reserved By GetThumb | Simplifying YouTube thumbnail creation for everyone.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
