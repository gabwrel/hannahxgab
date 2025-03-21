import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../components/particlesjs-config.json";

export default function Home() {
  const router = useRouter();
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-03-23") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box position="relative" minH="100vh" bg="#efafd8">
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </Box>
      <Flex
        position="relative"
        zIndex={1}
        h="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <VStack
          spacing={6}
          textAlign="center"
          bg="#fceaf8"
          p={4}
          borderRadius="lg"
          boxShadow="md"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Heading color="pink.400" fontSize={{ base: "3xl", md: "5xl" }}>
              Hello Love! 💖
            </Heading>
          </motion.div>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="pink.400">
            Countdown to our special day:
          </Text>
          <Heading color="pink.400" fontSize={{ base: "2xl", md: "4xl" }}>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </Heading>
          <Button colorScheme="pink" onClick={() => router.push("/activities")}>
            <Text mr={2}>Check activites</Text>
            <FaArrowAltCircleRight />
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}
