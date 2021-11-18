import "../styles/global.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingScreen from "../src/components/loading";
import ProgressBar from "../src/components/progressBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LoadingScreen />
      <ProgressBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
