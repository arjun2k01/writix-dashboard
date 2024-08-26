import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface FeatureCardProps {
  title: string;
  description: string;
  isHighlighted?: boolean;
  category: string; // Add category
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, isHighlighted = false, category }) => {
  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      p={4}
      bg={isHighlighted ? 'blue.50' : 'white'}
      borderColor={isHighlighted ? 'blue.300' : 'gray.200'}
      boxShadow={isHighlighted ? 'md' : 'none'}
    >
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={2}>{description}</Text>
      <Text color="gray.500">{category}</Text> {/* Display the category */}
    </Box>
  );
};

export default FeatureCard;
