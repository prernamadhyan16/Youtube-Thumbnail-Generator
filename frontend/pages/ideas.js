import React, { useState } from "react";
import { Container, SimpleGrid, Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import Footer from "components/Footer";

const ideas = [
  { id: 1, title: "Late Night Vibe", image: "/idea1.jpg", description: "Capture the essence of late-night productivity or relaxation with this vibe-enhancing thumbnail idea." },
  { id: 2, title: "BGMI Game", image: "/idea2.jpg", description: "Showcase the thrill and excitement of the popular BGMI game with engaging visuals." },
  { id: 3, title: "Passive Income Ideas", image: "/idea3.jpg", description: "Highlight the best ways to generate passive income and achieve financial freedom." },
  { id: 4, title: "Jazzy Night", image: "/idea4.jpg", description: "Set the stage for an unforgettable jazzy evening with a captivating thumbnail." },
  { id: 5, title: "10 Awesome Books", image: "/idea5.jpg", description: "Share a curated list of 10 amazing books that everyone should read." },
  { id: 6, title: "Income Ideas", image: "/idea6.jpg", description: "Inspire your audience with innovative income ideas to boost their financial growth." },
  { id: 7, title: "Authentic Thailand", image: "/idea7.jpg", description: "Explore the vibrant culture, cuisine, and destinations of authentic Thailand." },
  { id: 8, title: "Books to Change Mindset", image: "/idea8.jpg", description: "Introduce books that can transform perspectives and unlock personal growth." },
  { id: 9, title: "Travel with me to Kolkata", image: "/idea9.jpg", description: "Take your audience on a journey to discover the beauty and culture of Kolkata." },
  { id: 10, title: "India on Trains", image: "/idea10.jpg", description: "Experience the charm of India's railways and the stories they hold." },
  { id: 11, title: "How to become a FreeLancer", image: "/idea11.jpg", description: "Provide insights and tips on how to kickstart a successful freelancing career." },
  { id: 12, title: "Mystery Box Unboxing", image: "/idea12.jpg", description: "Build suspense and excitement with an intriguing mystery box unboxing." },
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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
        {ideas.map((idea) => (
          <Box
            key={idea.id}
            bg="white"
            borderRadius="lg"
            shadow="lg"
            overflow="hidden"
            cursor="pointer"
            onClick={() => handleImageClick(idea)}
          >
            <Image src={idea.image} alt={idea.title} boxSize="100%" objectFit="cover" />
            <Box p={4} textAlign="center">
              <Heading as="h4" size="md">
                {idea.title}
              </Heading>
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
      <Footer/>
    </Container>
    
  );
};

export default Ideas;
