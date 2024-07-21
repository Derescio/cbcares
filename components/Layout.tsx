'use client';

import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
