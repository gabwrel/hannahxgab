import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Heading,
  Image,
  VStack,
  Stack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHeart, FaGift, FaMusic } from "react-icons/fa";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    if (answer.toLowerCase() === "jinja") {
      router
        .push("/home")
        .then(() => window.scrollTo(0, 0))
        .catch((err) => console.error("Navigation failed:", err));
    } else {
      setError("That's the wrong answer Hannah, please try again");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#ffa0ce"
      p={4}
    >
      <VStack spacing={4} textAlign="center" w="full" maxW="md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Heading color="whiteAlpha.900" fontSize={{ base: "2xl", md: "4xl" }}>
            Welcome, Hannah! ❤️
          </Heading>
        </motion.div>
        <Text color="whiteAlpha.900">But are you really Hannah?</Text>
        <Flex gap={2}>
          <Button
            colorScheme="pink"
            bg="#e36aa5"
            _hover={{ bg: "#f295be" }}
            onClick={() => router.push("bleh")}
          >
            No
          </Button>
          <Button
            colorScheme="pink"
            bg="#e36aa5"
            _hover={{ bg: "#f295be" }}
            onClick={onOpen}
          >
            Yes
          </Button>
        </Flex>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
        <ModalOverlay />
        <ModalContent bg="#f1bcd4">
          <ModalHeader textAlign="center" color="whiteAlpha.900">
            Where's our favorite place to eat?
          </ModalHeader>
          <ModalBody>
            <Input
              placeholder="Type here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              bg="whiteAlpha.900"
            />
            {error && (
              <Text color="red.500" mt={2}>
                {error}
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="pink"
              bg="#e36aa5"
              _hover={{ bg: "#f295be" }}
              onClick={handleVerify}
              w="full"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
