'use client'
import { Box, Flex, Link, Stack, IconButton, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'//import { CloseIcon } from '@chakra-ui/icons/dist/CloseIcon'
// Add other icons as needed
//import { HamburgerIcon } from '@chak'

import logo from '../public/images/logo.png'
import Image from 'next/image';
import NextLink from 'next/link'



const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link as={NextLink} href={href} p={2}>
      {children}
    </Link>
  )


export const Header = () => {
    const { isOpen, onToggle } = useDisclosure()
  return (
    <Box as="header"  bg="brand.903" color='brand.300' px={4} position="relative">
    <Flex h={40} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
      <Box height="200px" mt={4}>
        <Image src={logo.src} alt="CB Cares Logo" layout="fixed" width={150} height={150} />
      </Box>
      <Stack as="nav" direction="row" spacing={4} display={{ base: 'none', md: 'flex' }}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/programs">Programs</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        <NavItem href="/get-involved">Get Involved</NavItem>
      </Stack>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onToggle}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Toggle Navigation"
      />
    </Flex>
    {isOpen && (
  <Box
    pb={4}
    display={{ md: 'none' }}
    position="absolute"
    top="100%"
    left={0}
    right={0}
    bg="linear-gradient(to left, #4a90e2, #50e3c2, 0.8)"
    zIndex={10}
    
  >
    <Stack as="nav" spacing={4} color={'brand.300'}>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/programs">Programs</NavItem>
      <NavItem href="/contact">Contact</NavItem>
      <NavItem href="/get-involved">Get Involved</NavItem>
    </Stack>
  </Box>
)}
  </Box>
  )
}


