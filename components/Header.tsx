import { Box, Flex, Link, Stack } from '@chakra-ui/react'
import logo from '../public/images/logo.png'
import Image from 'next/image';
import NextLink from 'next/link'

// const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <NextLink href={href} passHref>
//     <Link p={2}>
//       {children}
//     </Link>
//   </NextLink>
// )

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link as={NextLink} href={href} p={2}>
      {children}
    </Link>
  )


export const Header = () => {
  return (
    <Box as="header" bg="brand.903"  color='brand.300' px={4}>
      <Flex h={40} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto"> 
      <Box height="200px" mt={16}>
          <Image src={logo.src} alt="CB Cares Logo" layout="fixed" width={150} height={150}  />
        </Box>
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
