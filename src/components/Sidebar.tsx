import React from 'react';
import { Box, VStack, Text, Progress } from '@chakra-ui/react';
import { sidebarOptions } from '../utils/mockData'; // Ensure this path and export are correct

// Define the SidebarProps interface
interface SidebarProps {
  setActiveOption: (option: string) => void; // Function to set the active option
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveOption }) => {
  return (
    <Box width="200px" bg="brand.100" p={4} height="100vh">
      <VStack align="stretch" spacing={4}>
        {sidebarOptions.map((option) => (
          <Text
            key={option}
            cursor="pointer"
            onClick={() => setActiveOption(option)}
          >
            {option}
          </Text>
        ))}
      </VStack>
      <Box mt={8}>
        <Text mb={2}>Progress</Text>
        <Progress value={80} size="sm" colorScheme="blue" />
      </Box>
    </Box>
  );
};

export default Sidebar;
