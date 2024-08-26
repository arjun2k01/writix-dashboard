import { Box, Flex, Heading, useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" bg="brand.100" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Heading size="md">Writix AI</Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;