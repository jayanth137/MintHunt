import React from 'react';
import { Box, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <div>
      <Box as="nav" bg="gray.800" p={4}>
        <Link color="white" mr={6}>
          Home
        </Link>
        <Link color="white" mr={6}>
          About
        </Link>
        <Link color="white" mr={6}>
          Contact
        </Link>
      </Box>
    </div>
  );
};

export default Header;
