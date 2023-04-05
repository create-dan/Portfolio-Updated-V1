import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Flex flexDirection="column" alignItems="center" px={4} py={16}>
      <Heading as="h1" fontSize={["3xl", "4xl"]} mb={8} textAlign="center">
        Contact Me
      </Heading>
      <Stack direction={["column", "row"]} spacing={4} mb={8}>
        <IconButton
          as={Link}
          href="mailto:yourname@example.com"
          aria-label="Email"
          icon={<Icon as={FaEnvelope} boxSize={6} />}
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
        />
        <IconButton
          as={Link}
          href="tel:+1234567890"
          aria-label="Phone"
          icon={<Icon as={FaPhone} boxSize={6} />}
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
        />
        <IconButton
          as={Link}
          href="https://github.com/yourusername"
          aria-label="GitHub"
          icon={<Icon as={FaGithub} boxSize={6} />}
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
        />
        <IconButton
          as={Link}
          href="https://www.linkedin.com/in/yourname"
          aria-label="LinkedIn"
          icon={<Icon as={FaLinkedin} boxSize={6} />}
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
        />
      </Stack>
      <Stack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Email
        </Text>
        <Link href="mailto:yourname@example.com">yourname@example.com</Link>
        <Text fontSize="xl" fontWeight="bold">
          Phone
        </Text>
        <Link href="tel:+1234567890">+1 (234) 567-890</Link>
      </Stack>
    </Flex>
  );
};

export default SignUp;
