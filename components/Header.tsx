'use client';

import { Box, Flex, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <NextLink href={href} passHref>
    <Link p={2}>
      {children}
    </Link>
  </NextLink>
)

export const Header = () => {
  return (
    <Box as="header" bg="brand.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Stack as="nav" direction="row" spacing={4}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/programs">Programs</NavItem>
          <NavItem href="/get-involved">Get Involved</NavItem>
        </Stack>
      </Flex>
    </Box>
  )
}
