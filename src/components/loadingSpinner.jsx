import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

function LoadingSpinner() {
  return (
    <Flex
      position="fixed"
      top="0px"
      zIndex={200}
      w="100vw"
      h="100vh"
      bg="green.50"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color="green.500" size="lg" />
    </Flex>
  );
}

export default LoadingSpinner;
