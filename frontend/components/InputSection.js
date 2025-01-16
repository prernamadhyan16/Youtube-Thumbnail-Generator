import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  VStack,
  Image,
  useToast,
  Heading,
  Text,
  Stack,
  Card,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import axios from 'axios';

const templates = [
  { id: 'template1', name: 'Modern Style', image: '/template1.png' },
  { id: 'template2', name: 'Classic Design', image: '/template2.png' },
  { id: 'template3', name: 'Minimalist Look', image: '/template3.png' },
];

const InputSection = ({ onThumbnailsGenerated }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!text || !selectedTemplate) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('text', text);
    formData.append('image', image);
    formData.append('template', selectedTemplate);

    try {
      const response = await axios.post('http://localhost:5000/api/generate-thumbnail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { thumbnails } = response.data;

      if (thumbnails) {
        onThumbnailsGenerated(thumbnails);
        toast({
          title: 'Success!',
          description: 'Thumbnails generated successfully.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error('Failed to generate thumbnails.');
      }
    } catch (error) {
      console.error('Error generating thumbnails:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate thumbnails. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="800px" mx="auto" p={8} bg="white" boxShadow="lg" borderRadius="md">
      <Heading size="lg" mb={6} textAlign="center" color="purple.600">
        LETS HELP YOU CREATE!
      </Heading>
      <VStack align="stretch" spacing={6}>
        <FormControl>
          <FormLabel fontSize="lg" color="gray.700">Enter The Caption</FormLabel>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your title or text"
            size="lg"
            focusBorderColor="purple.500"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg" color="gray.700">Upload Image (optional)</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            focusBorderColor="purple.500"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg" color="gray.700">Choose a Template</FormLabel>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {templates.map((template) => (
              <Card
                key={template.id}
                borderColor={selectedTemplate === template.id ? 'purple.500' : 'gray.200'}
                borderWidth="2px"
                borderRadius="md"
                cursor="pointer"
                _hover={{ borderColor: 'purple.500', transform: 'scale(1.05)' }}
                onClick={() => setSelectedTemplate(template.id)}
                transition="all 0.2s"
              >
                <CardBody>
                  <Image
                    src={template.image}
                    alt={template.name}
                    borderRadius="md"
                    boxSize="150px"
                    objectFit="cover"
                    mx="auto"
                  />
                  <Text mt={4} textAlign="center" fontWeight="bold" color="purple.600">
                    {template.name}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </FormControl>

        <Button
          colorScheme="purple"
          size="lg"
          onClick={handleSubmit}
          isLoading={loading}
          isDisabled={!selectedTemplate}
          width="full"
        >
          Generate Thumbnail
        </Button>
      </VStack>
    </Box>
  );
};

export default InputSection;
