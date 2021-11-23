import "../styles/global.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingScreen from "../src/components/loading";
import ProgressBar from "../src/components/progressBar";

import { FireBaseAuthProvider } from "../src/context/firebaseContext";
import Toast from "../src/components/toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <FireBaseAuthProvider>
        <Toast />
        <LoadingScreen />
        <ProgressBar />
        <Component {...pageProps} />
      </FireBaseAuthProvider>
    </ChakraProvider>
  );
}
