import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
       <Box position="relative" height="100vh" width="100%">
      <Image
        src="/images/hero-image.jpg"
        alt="CB Cares community impact"
        layout="fill"
        objectFit="cover"
        objectPosition='center 20%'
        priority
      />
      <VStack
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-b, transparent, rgba(0,0,0,0.975))"
        color="white"
        textAlign="center"
        spacing={4}
        p={4}
      >
        <Heading as="h1" size="2xl">
          Empowering Our Community
        </Heading>
        <Text fontSize="xl">
          CB Cares: Building a stronger, more inclusive future together
        </Text>
      </VStack>
    </Box>
    </div>
  )
}

export default Hero
