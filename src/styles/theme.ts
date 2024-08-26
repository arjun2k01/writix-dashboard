import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Define your color modes and styles
const theme = extendTheme({
  styles: {
    global: (props: { colorMode: 'light' | 'dark' }) => ({
      body: {
        bg: mode('neutral.white', 'neutral.darkGray')(props),  // Darker background for dark mode
        color: mode('neutral.black', 'neutral.highContrastWhite')(props),  // Lighter text color for dark mode
      },
    }),
  },
  // Define color palette for better readability
  colors: {
    neutral: {
      white: '#FFFFFF',            // Pure white for light mode background
      lightGray: '#F7FAFC',        // Slightly off-white for light mode background (alternative)
      black: '#1A202C',            // Deep black for light mode text (slightly softer black)
      darkGray: '#181818',         // Darker gray for dark mode background to improve contrast
      highContrastWhite: '#F5F5F5', // Light grayish white for dark mode text, softer than pure white
      darkModeGray: '#2D3748',     // Softer dark gray for elements in dark mode
    },
  },
});

export default theme;
