import { useState } from 'react';
import { Box, Flex, Grid, VStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import CategoriesDropdown from '../components/CategoriesDropdown';
import FeatureCard from '../components/FeatureCard';
import { featureCardData } from '../utils/mockData';

export default function Home() {
  const [activeOption, setActiveOption] = useState<string>('Dashboard');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredFeatures = featureCardData.filter((feature) => {
    const matchesSearchTerm = feature.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || feature.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar setActiveOption={setActiveOption} />
        <Box flex={1} p={4}>
          <VStack spacing={4} align="stretch">
            <Flex justify="space-between">
              <SearchBar onSearch={setSearchTerm} />
              <CategoriesDropdown onSelectCategory={setSelectedCategory} />
            </Flex>
            <Box>
              <h2>{activeOption}</h2>
              <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
                {filteredFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    isHighlighted={feature.isHighlighted}
                    category={feature.category} // Ensure category is passed
                  />
                ))}
              </Grid>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
