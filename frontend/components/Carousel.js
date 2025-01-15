import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCarousel = () => {
  const slides = [
    { id: 1, image: '/slide1.jpg', heading: 'Welcome to MyWebsite', text: 'Explore ideas and more!' },
    { id: 2, image: '/slide2.jpg', heading: 'Discover New Ideas', text: 'Be inspired every day.' },
    { id: 3, image: '/slide3.jpg', heading: 'Let’s Connect', text: 'We’re here to help you grow.' },
  ];

  return (
    <Carousel controls={false} indicators={false} fade>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Box
            bgImage={`url(${slide.image})`}
            bgSize="cover"
            bgPos="center"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
          >
            <Box bg="rgba(0, 0, 0, 0.5)" p={6} borderRadius="md">
            <Heading size="2xl" mb={4} color="purple.600" textTransform="uppercase">
              {slide.heading}
            </Heading>

              
            </Box>
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
