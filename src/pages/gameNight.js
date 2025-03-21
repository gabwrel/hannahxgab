import React from "react";
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
import { motion } from "framer-motion";

const games = [
  {
    name: "Overcooked 2",
    image: "/overcooked.jpg",
    description: "",
  },
  {
    name: "Valorant",
    image: "/sage.jpg",
    description: "",
  },
  {
    name: "Chained Together",
    image: "/chained.jpg",
    description: "",
  },
  {
    name: "Tekken 8",
    image: "/tekken.jpg",
    description: "",
  },
];

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

function GameNight() {
  const router = useRouter();
  return (
    <Box minH="100vh" p={8} bg="#f1bcd4">
      <Heading color="whiteAlpha.900" mb={4} size="">
        Game Night Suggestions
      </Heading>
      <VStack spacing={6} align="center">
        {games.map((game, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Flex
              key={index}
              bg="#efafd8"
              w="full"
              maxW="600px"
              minW="326px"
              p={4}
              borderRadius="lg"
              align="center"
              gap={4}
              boxShadow="md"
              variants={cardVariants}
            >
              <Image
                src={game.image}
                alt={game.name}
                boxSize="100px"
                borderRadius="md"
                objectFit="cover"
              />
              <Box>
                <Text fontSize="md" fontWeight="bold" color="whiteAlpha.900">
                  {game.name}
                </Text>
                <Text fontSize="md" color="whiteAlpha.900">
                  {game.description}
                </Text>
              </Box>
            </Flex>
          </motion.div>
        ))}
        <Button colorScheme="pink" onClick={() => router.push("/activities")}>
          Back to activites
        </Button>
      </VStack>
    </Box>
  );
}

export default GameNight;
