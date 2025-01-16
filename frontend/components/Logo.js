import React from "react";
import { Box, Icon } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#6b46c1"
      borderRadius="md"
      w="40px"
      h="40px"
      padding={2}
      margin={2}
    >
      <Icon viewBox="0 0 24 24" color="white" boxSize={6}>
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14h-2v-4H8l4-4 4 4h-2v4z"
        />
      </Icon>
    </Box>
  );
};

export default Logo;
