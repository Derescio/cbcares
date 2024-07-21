'use client'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
    100: '#f7fafc',
    50: '#e6f2ff',
    101: '#b3d9ff',
    200: '#ee117c',
    300: '#ffffff',
    400: '#1a8cff',
    500: '#0073e6',
    600: '#005ab3',
    700: '#004080',
    800: '#00264d',
    900: '#000d1a',
    901: '#1a202c',
    902: '#19a1ad',
    903: '#23b2ba',
    },
    
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
  },
})

export default theme
