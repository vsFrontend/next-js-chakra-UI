import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Menu,
  MenuButton,
  Avatar,
  Button,
  MenuList,
  MenuDivider,
  MenuItem,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useFireBaseAuth } from "../context/firebaseContext";
import { toastActions } from "./toast";

function UserAvatarLogin() {
  const { authUser: user, loading, signOut } = useFireBaseAuth();

  const handleLogout = () => {
    signOut();
    toastActions.success("Sucessfully Loged Out");
  };

  if (loading) {
    return <Spinner color="green.500" />;
  }

  if (!user) {
    return (
      <Link href={"/auth/login"}>
        <Button>Login</Button>
      </Link>
    );
  }

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar size={"sm"} src={user.photoURL} />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar size={"2xl"} src={user.photoURL} />
          </Center>
          <br />
          <Center>
            <p>{user.displayName}</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default UserAvatarLogin;
