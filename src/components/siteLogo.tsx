import { Image } from "@chakra-ui/image";
import Link from "next/link";

const SiteLogo = () => (
  <Link href="/">
    <Image
      boxSize="50px"
      width="150px"
      src="./images/logo.png"
      alt="Segun Adebayo"
      _hover={{
        cursor: "pointer",
      }}
    />
  </Link>
);
export default SiteLogo;
