import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { ContactForm } from '../../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl">
          Get in Touch
        </Heading>
      </Box>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
