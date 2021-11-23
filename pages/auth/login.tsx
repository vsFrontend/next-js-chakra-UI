import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";

import Router from "next/router";
import { FcGoogle } from "react-icons/fc";
import { toastActions } from "../../src/components/toast";
import { useFireBaseAuth } from "../../src/context/firebaseContext";

export default function SimpleCard() {
  const { signInWithGoogle, loading } = useFireBaseAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toastActions.success("Welcome :)");
        Router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Button
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
                onClick={handleGoogleSignIn}
              >
                <Center>
                  <Text>Login with Google</Text> {loading && <Spinner />}
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
