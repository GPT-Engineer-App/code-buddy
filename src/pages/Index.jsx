import { Box, Container, Heading, Text, Button, VStack, Image, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTasks } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="center">
        <IconButton aria-label="Toggle theme" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} isRound={true} />
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1668554245893-2430d0077217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJ8ZW58MHx8fHwxNzEzMzU1NzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer" />
        <Heading as="h1" size="2xl" textAlign="center" color={textColor}>
          Internal Projects Coding Assistant
        </Heading>
        <Text fontSize="xl" color={textColor}>
          Welcome to your go-to assistant for managing and coding internal projects!
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} w="full" rounded="md">
          <Heading fontSize="xl">Project Management</Heading>
          <Text mt={4}>Easily manage your projects, track progress, and collaborate with your team.</Text>
          <Button leftIcon={<FaTasks />} colorScheme="blue" mt={3}>
            Manage Projects
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} w="full" rounded="md">
          <Heading fontSize="xl">GitHub Integration</Heading>
          <Text mt={4}>Connect your GitHub repositories to streamline development workflows.</Text>
          <Button leftIcon={<FaGithub />} colorScheme="teal" mt={3}>
            Connect to GitHub
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
