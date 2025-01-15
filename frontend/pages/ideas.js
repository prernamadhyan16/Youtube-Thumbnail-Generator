import React, { useState } from "react";
import { Container, SimpleGrid, Box, Image, Heading, Text, Button } from "@chakra-ui/react";

const ideas = [
  { id: 1, title: "Idea 1", image: "/idea1.jpg", description: "Description for Idea 1" },
  { id: 2, title: "Idea 2", image: "/idea2.jpg", description: "Description for Idea 2" },
  { id: 3, title: "Idea 3", image: "/idea3.jpg", description: "Description for Idea 3" },
  { id: 4, title: "Idea 4", image: "/idea4.jpg", description: "Description for Idea 4" },
  { id: 5, title: "Idea 5", image: "/idea5.jpg", description: "Description for Idea 5" },
  { id: 6, title: "Idea 6", image: "/idea6.jpg", description: "Description for Idea 6" },
  { id: 7, title: "Idea 7", image: "/idea7.jpg", description: "Description for Idea 7" },
  { id: 8, title: "Idea 8", image: "/idea8.jpg", description: "Description for Idea 8" },
  { id: 9, title: "Idea 9", image: "/idea9.jpg", description: "Description for Idea 9" },
  { id: 10, title: "Idea 10", image: "/idea10.jpg", description: "Description for Idea 10" },
  { id: 11, title: "Idea 11", image: "/idea11.jpg", description: "Description for Idea 11" },
  { id: 12, title: "Idea 12", image: "/idea12.jpg", description: "Description for Idea 12" },
];

const Ideas = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);

  const handleImageClick = (idea) => {
    setSelectedIdea(idea);
  };

  const handleClose = () => {
    setSelectedIdea(null);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Our Ideas
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
        {ideas.map((idea) => (
          <Box
            key={idea.id}
            bg="white"
            borderRadius="lg"
            shadow="lg"
            overflow="hidden"
            onClick={() => handleImageClick(idea)}
            cursor="pointer"
          >
            <Image src={idea.image} alt={idea.title} boxSize="100%" objectFit="cover" />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {idea.title}
              </Heading>
              <Text color="gray.600">{idea.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Expanded View */}
      {selectedIdea && (
        <Box
          pos="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="rgba(0, 0, 0, 0.8)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={10}
        >
          <Box
            bg="white"
            borderRadius="lg"
            shadow="lg"
            maxW="600px"
            w="90%"
            p={6}
            textAlign="center"
          >
            <Image
              src={selectedIdea.image}
              alt={selectedIdea.title}
              mb={4}
              borderRadius="lg"
              objectFit="cover"
            />
            <Heading as="h3" size="lg" mb={4}>
              {selectedIdea.title}
            </Heading>
            <Text mb={6}>{selectedIdea.description}</Text>
            <Button colorScheme="purple" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Ideas;
