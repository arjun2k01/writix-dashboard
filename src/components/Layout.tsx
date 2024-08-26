import React from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: React.ReactNode; // Include the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [activeOption, setActiveOption] = React.useState<string | null>(null);

  return (
    <Flex h="100vh" flexDirection={isLargerThan768 ? "row" : "column"}>
      {isLargerThan768 && <Sidebar setActiveOption={setActiveOption} />}
      <Flex flexDirection="column" flex={1}>
        <Navbar />
        <Box as="main" flex={1} p={4} overflowY="auto">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
