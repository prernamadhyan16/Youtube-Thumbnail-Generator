import React from 'react';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';

const PreviewSection = ({ thumbnails }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="sm">
      <Text fontSize="xl" mb={4}>
        Thumbnail Previews
      </Text>
      <SimpleGrid columns={[1, 2, 4]} spacing={4}>
        {thumbnails.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            borderRadius="md"
            boxShadow="sm"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PreviewSection;
