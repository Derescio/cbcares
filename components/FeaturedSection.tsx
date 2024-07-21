import { Box, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react';

interface Feature {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface FeaturedSectionProps {
  features: Feature[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ features }) => {
  return (
    <Box p={4}>
      {/* <Text fontSize="2xl" mb={4} textAlign="center">Featured Section</Text> */}
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {features.map((feature, index) => (
          <GridItem key={index} bg="white" p={4} borderRadius="md" shadow="md">
            <Image src={feature.image} alt={feature.title} mb={4} borderRadius="md" objectFit="cover" boxSize="300px" />
            <Text fontSize="xl" fontWeight="bold">{feature.title}</Text>
            <Text mt={2}>{feature.description}</Text>
            <Button as="a" href={feature.ctaLink} bg="brand.903"  color='brand.300'>
              {feature.ctaText}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
