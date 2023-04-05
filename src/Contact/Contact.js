import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const handleEmailClick = () => {
    window.open("mailto:youremail@example.com");
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Contact Me
      </Text>
      {/* <Stack direction={["column", "row"]} spacing={4} mb={8}>
        <IconButton
          as={Link}
          href="dnyaneshwars0611@gmail.com"
          aria-label="Email"
          icon={<Icon as={FaEnvelope} boxSize={6} />}
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
          target="__blank"
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
      </Stack> */}

      <Flex alignItems="center">
        <IconButton
          icon={<PhoneIcon />}
          mr={4}
          isRound
          size="lg"
          variant="ghost"
        />
        <Text fontSize="xl" mr={8}>
          (+91) 9370061654
        </Text>
      </Flex>
      <Flex alignItems="center">
        <IconButton
          icon={<EmailIcon />}
          mr={4}
          isRound
          size="lg"
          variant="ghost"
        />
        <Text fontSize="xl" mr={8}>
          dnyaneshwars0611@gmail.com
        </Text>
      </Flex>

      {/* <Box height="50px" my={8}>
        <Link href="dnyaneshwars0611@gmail.com">
          <IconButton
            icon={<EmailIcon />}
            mr={4}
            isRound
            size="lg"
            variant="ghost"
            onClick={handleEmailClick}
          />
        </Link>
        <Text fontSize="xl" display="inline-block" mr={8}>
          dnyaneshwars0611@gmail.com
        </Text>
      </Box> */}

      <Flex>
        <Link href="https://github.com/" isExternal>
          <IconButton
            icon={<i className="fab fa-github fa-2x"></i>}
            mr={4}
            isRound
            size="lg"
            variant="ghost"
          />
        </Link>
        <Link href="https://www.linkedin.com/" isExternal>
          <IconButton
            icon={<i className="fab fa-linkedin fa-2x"></i>}
            mr={4}
            isRound
            size="lg"
            variant="ghost"
          />
        </Link>
        <Link href="https://leetcode.com/" isExternal>
          <IconButton
            icon={<i className="fab fa-leetcode fa-2x"></i>}
            mr={4}
            isRound
            size="lg"
            variant="ghost"
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Contact;
