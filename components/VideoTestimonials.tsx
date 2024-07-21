'use client'
import React, { useState, useEffect } from 'react'
import { Box, Text, AspectRatio, VStack, Button, Flex } from '@chakra-ui/react'
import { Heading} from '@chakra-ui/react'
import testimonials from '@/data/testimonialData'

export const VideoTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Box>
      {/* <Text fontSize="2xl" mb={4} margin="auto"></Text> */}
      <Heading as="h2" size="xl" marginBottom={6} textAlign="center">Client Testimonials</Heading>
      <VStack align="center" spacing={4} p={4}>
      <AspectRatio ratio={16 / 9} width="100%" maxW="600px">
  <iframe
    key={currentIndex}  // Add this line
    src={testimonials[currentIndex].videoUrl}
    title={testimonials[currentIndex].title}
    allowFullScreen
  />
</AspectRatio>
        <Text fontWeight="bold">{testimonials[currentIndex].title}</Text>
        <Flex>
          <Button onClick={handlePrev} mr={2}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </Flex>
      </VStack>
    </Box>
  )
}
