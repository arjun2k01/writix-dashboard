import React from 'react';
import { Select } from '@chakra-ui/react';
import { categories } from '../utils/mockData'; // Ensure this path is correct

// Define the CategoriesDropdownProps interface
interface CategoriesDropdownProps {
  onSelectCategory: (category: string) => void; // Define type for onSelectCategory
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({ onSelectCategory }) => {
  return (
    <Select placeholder="Select category" onChange={(e) => onSelectCategory(e.target.value)}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default CategoriesDropdown;
