import { Box, Grid, GridItem, Heading, Text, VStack, Button } from '@chakra-ui/react'
import Image from 'next/image'

const Hero1= () => {
  return (
    <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} height="100vh">
      <GridItem position="relative">
        <Image
          src="/images/hero-image.jpg"
          alt="CB Cares community impact"
          layout="fill"
          objectFit="cover"
          objectPosition="center 20%"
        />
      </GridItem>
      <GridItem bg="brand.100" p={8}>
        <VStack spacing={6} alignItems="flex-start" justifyContent="center" height="100%">
          <Heading as="h1" size="2xl" color="brand.700">
            Empowering Our Community
          </Heading>
          <Text fontSize="xl" color="brand.600">
            CB Cares: Building a stronger, more inclusive future together
          </Text>
          <Button bg="brand.903"  color='brand.300'   size="lg">
            Get Involved
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default Hero1