'use client';

import { Box, Container, Stack, Text, Link } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer" bg="brand.100" color="brand.700" py={10}>
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} spacing={8} justify="space-between">
          <Text>&copy; {new Date().getFullYear()} CB Cares. All rights reserved.</Text>
          <Stack direction="row" spacing={6}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/contact">Contact Us</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
