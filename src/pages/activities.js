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
import { Particles } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../components/particlesjs-config.json";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Activities() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const router = useRouter();
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
  }, []);

  const activities = [
    {
      title: "Romantic Dinner",
      image: "/dinner.jpg",
      description:
        "Enjoy a cozy and intimate dinner at Pope and Co, where every bite feels like a celebration of us.",
    },
    {
      title: "Movie Night",
      image: "/movienight.jpg", // Updated image to better match the activity
      description:
        "Snuggle up on the couch with popcorn and our favorite films for a night of laughter, tears, and love.",
    },
    {
      title: "Game Night",
      image: "/games.jpg", // Updated image to better match the activity
      description:
        "Team up in Overcooked 2 for a chaotic yet hilarious kitchen adventure that's sure to bring us closer together.",
    },
    {
      title: "Cooking Date",
      image: "/cooking.jpg", // Fixed typo in file extension
      description:
        "Whisk, chop, and laugh together as we create delicious meals from scratch—a recipe for love and fun!",
    },
    {
      title: "Jogging",
      image: "/jogging.jpg", // Suggested new image to better fit jogging
      description:
        "A refreshing jog through our favorite spots, reliving cherished memories while creating new ones along the way.",
    },
    {
      title: "Sexy Time",
      image: "/hug.jpg", // Suggested new image to better fit the theme
      description:
        "Let’s slow down and savor the magic of being together, celebrating our connection in the most intimate way.",
    },
  ];

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    onOpen();
  };

  const handleNavigate = (activity) => {
    switch (activity.title) {
      case "Romantic Dinner":
        router.push("/romanticDinner");
        break;
      case "Movie Night":
        router.push("/movieNight");
        break;
      case "Game Night":
        router.push("/gameNight");
        break;
      default:
        break;
    }
  };

  if (!isMounted) {
    return null;
  }

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
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </Box>
      <Text
        color="whiteAlpha.900"
        fontSize="xl"
        fontWeight="bold"
        mb={8}
        textAlign="center"
        position="relative"
      >
        Activities Prepared:
      </Text>
      <Flex wrap="wrap" justify="center" gap={6}>
        {activities.map((activity, index) => (
          <Box
            key={index}
            w="300px"
            h="200px"
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            onClick={() => handleActivityClick(activity)}
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              objectFit="cover"
              w="full"
              h="full"
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg="#e36aa5"
              p={2}
            >
              <Text color="white" fontSize="lg" textAlign="center">
                {activity.title}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>

      <Button colorScheme="pink" mt={4} onClick={() => router.push("/home")}>
        <FaArrowAltCircleLeft />
        <Text ml={2}>Back to home</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedActivity?.title}</ModalHeader>
          <ModalBody>
            <Image
              src={selectedActivity?.image}
              alt={selectedActivity?.title}
              mb={4}
            />
            <Text>{selectedActivity?.description}</Text>
          </ModalBody>
          <ModalFooter>
            {["Romantic Dinner", "Movie Night", "Game Night"].includes(
              selectedActivity?.title
            ) && (
              <Button
                colorScheme="pink"
                bg="#f295be"
                _hover={{ bg: "#e36aa5" }}
                onClick={() => handleNavigate(selectedActivity)}
                mr={3}
              >
                Go to {selectedActivity?.title}
              </Button>
            )}
            <Button
              colorScheme="pink"
              bg="#e36aa5"
              _hover={{ bg: "#f295be" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Activities;
