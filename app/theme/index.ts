import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ... other shades
      900: '#1a202c',
    },
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
  },
})

export default theme
