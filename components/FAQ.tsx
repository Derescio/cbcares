import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react'

const faqData = [
  {
    question: "What services does CB Cares provide?",
    answer: "CB Cares offers a range of services including senior care, disability support, and community outreach programs."
  },
  {
    question: "How can I volunteer with CB Cares?",
    answer: "You can volunteer by filling out our online application form or contacting our volunteer coordinator directly."
  },
  // Add more FAQ items as needed
]

export const FAQAccordion: React.FC = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h2" size="xl" marginBottom={6} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        {faqData.map((faq, index) => (
          <AccordionItem key={index}>
            <h3>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
