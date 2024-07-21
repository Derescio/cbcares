'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  

  return (
    <Box id="contact" maxWidth="500px" margin="auto" padding={8}>
      <Heading as="h2" size="xl" marginBottom={6} textAlign="center">
        Contact Us
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
