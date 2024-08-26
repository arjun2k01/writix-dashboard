import React from 'react';
import { Input } from '@chakra-ui/react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Define onSearch in SearchBarProps
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <Input
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
