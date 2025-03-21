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

const restaurants = [
  {
    name: "Pope and Co",
    image: "/popeandco.jpg",
    location: "https://maps.app.goo.gl/qJHQWkkYKgDmjn9S6",
  },
  {
    name: "Jinja",
    image: "/jinja.jpg",
    location: "https://maps.app.goo.gl/SpWzK3qQ1cEqpsyu6",
  },
  {
    name: "Tong Yang",
    image: "/tongyang.jpg",
    location: "https://maps.app.goo.gl/zjYJgLEcSA9hQpLSA",
  },
  {
    name: "Muelle Deli and Restaurant",
    image: "/muelle.jpg",
    location: "https://maps.app.goo.gl/iBvgusWs1rgo3JCv6",
  },
  {
    name: "Seoul Korean Grill + Cuisine",
    image: "/seoul.jpg",
    location: "https://maps.app.goo.gl/2Muvsp26ZGeDhj7d7",
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

const RomanticDinner = () => {
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
      {/* Particles Background */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      </Box>

      <Heading color="whiteAlpha.900" mb={4} position="relative" zIndex={1}>
        Romantic Dinner
      </Heading>
      <Text
        color="whiteAlpha.900"
        fontSize="lg"
        mb={6}
        position="relative"
        zIndex={1}
      >
        Suggestions:
      </Text>

      {/* Restaurants List */}
      <Flex wrap="wrap" justify="center" position="relative" gap={6} zIndex={2}>
        {restaurants.map((restaurant, index) => (
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
                src={restaurant.image}
                alt={restaurant.name}
                boxSize="80px"
                borderRadius="md"
                objectFit="cover"
                mr={4}
              />
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="#e36aa5">
                  {restaurant.name}
                </Text>
                <Link href={restaurant.location} color="#e36aa5" isExternal>
                  Location
                </Link>
              </Box>
            </Flex>
          </motion.div>
        ))}

        {/* Back Button */}
      </Flex>
      <Button
        colorScheme="pink"
        mt={4}
        onClick={() => router.push("/activities")}
      >
        Back to Activities
      </Button>
    </Box>
  );
};

export default RomanticDinner;
