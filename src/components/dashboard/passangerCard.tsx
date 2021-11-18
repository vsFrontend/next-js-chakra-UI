import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Image,
  Badge,
  Link,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoFlagSharp, IoLinkSharp } from "react-icons/io5";
import { UserDataType } from "../../types/userData";

export default function PassangerCard({ user }: { user: UserDataType }) {
  return (
    <Center py={6} w={300}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.name}
        </Heading>
        <Center mb={4}>
          <Text fontWeight={500} color={"black.500"}>
            Total Trips : {"  "}
          </Text>
          {"  "}
          <Badge
            px={3}
            py={1}
            mx={2}
            bg={useColorModeValue("gray.100", "gray.800")}
            fontWeight={"400"}
            borderRadius={5}
          >
            {user.trips}
          </Badge>
        </Center>

        <Stack mt={8} align={"center"} justifyContent="center">
          <Image h={"100px"} src={user.airline[0].logo} />
          <Text as="h2">{user.airline[0].name}</Text>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={200}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            rounded={"md"}
          >
            {user.airline[0].slogan}
          </Text>
          <Stack
            as={Link}
            target={"_blank"}
            rel="noopener noreferrer"
            href={user.airline[0].website}
            direction={"row"}
            align={"center"}
          >
            <Flex
              w={8}
              h={8}
              align={"center"}
              justify={"center"}
              rounded={"full"}
              bg={useColorModeValue("green.100", "purple.900")}
            >
              {<IoLinkSharp />}
            </Flex>
            <Text fontWeight={600}>{user.airline[0].website}</Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Flex
              w={8}
              h={8}
              align={"center"}
              justify={"center"}
              rounded={"full"}
              bg={useColorModeValue("orange.100", "purple.900")}
            >
              {<IoFlagSharp />}
            </Flex>
            <Text fontWeight={600}>{user.airline[0].country}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
