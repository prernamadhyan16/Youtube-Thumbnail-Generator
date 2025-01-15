import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#e9d8fd',
    100: '#d6bcfa',
    200: '#b794f4',
    300: '#9f7aea',
    400: '#805ad5',
    500: '#6b46c1', // Main Primary Color
    600: '#553c9a',
    700: '#44337a',
    800: '#322659',
    900: '#21183c',
  },
  secondary: {
    50: '#ebf8ff',
    100: '#bee3f8',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce', // Accent Color
    600: '#2b6cb0',
    700: '#2c5282',
    800: '#2a4365',
    900: '#1a365d',
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const styles = {
  global: {
    'html, body': {
      backgroundImage: `url('/background-image.jpg')`, // Path to your background image
      backgroundSize: 'cover', // Makes the image cover the entire viewport
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // Ensures the image doesn't scroll with the page
      margin: 0,
      padding: 0,
      height: '100%',
    },
    body: {
      color: 'gray.800',
    },
    a: {
      color: 'primary.500',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
};

const theme = extendTheme({ colors, fonts, styles });

export default theme;
