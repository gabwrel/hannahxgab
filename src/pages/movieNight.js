import React, { useCallback } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../components/particlesjs-config.json";
import { motion } from "framer-motion";

const movies = [
  {
    name: "Road Trip (2024)",
    image: "movie1.jpg",
    description: "Comedy",
  },
  {
    name: "The Gorge (2025)",
    image: "movie2.jpg",
    description: "Action, Romance, Drama, Thriller",
  },
  {
    name: "The School for Good and Evil (2022)",
    image: "movie3.jpg",
    description: "Quirky, Imaginative, Exciting",
  },
  {
    name: "Just Like Heaven (2005)",
    image: "movie4.jpg",
    description: "RomCom",
  },
  {
    name: "Wonderland (2024)",
    image: "movie5.jpg",
    description: "Korean Sci-Fi Drama, si Dal-mi",
  },
  {
    name: "50 Shades of Grey",
    image: "movie6.jpg",
    description: "Steamy, Romantic",
  },
];

// Add this animation configuration
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 1.8,
    },
  },
};

function MovieNight() {
  const router = useRouter();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  return (
    <Box
      minH="100vh"
      p={8}
      w="full"
      bg="#f1bcd4"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      </Box>
      <Heading
        color="whiteAlpha.900"
        mb={4}
        size=""
        position="relative"
        zIndex={1}
      >
        Movie Night Suggestions
      </Heading>
      <Flex direction="column"></Flex>
      <Flex
        wrap="wrap"
        justify="center"
        position="relative"
        gap={6}
        zIndex={2}
        mb={4}
      >
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            zIndex={2}
          >
            <Flex
              bg="#efafd8"
              w="full"
              maxW="600px"
              minW="326px"
              p={4}
              borderRadius="lg"
              align="center"
              gap={4}
              boxShadow="md"
            >
              <Image
                src={movie.image}
                alt={movie.name}
                h="150px"
                w="100px"
                borderRadius="md"
                objectFit="cover"
              />
              <Box>
                <Text fontSize="md" fontWeight="bold" color="whiteAlpha.900">
                  {movie.name}
                </Text>
                <Text fontSize="md" color="whiteAlpha.900">
                  {movie.description}
                </Text>
              </Box>
            </Flex>
          </motion.div>
        ))}
      </Flex>
      <Button colorScheme="pink" onClick={() => router.push("/activities")}>
        Back to activites
      </Button>
    </Box>
  );
}

export default MovieNight;
