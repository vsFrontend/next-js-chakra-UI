import Head from "next/head";
import Image from "next/image";

import NavBar from "../components/navBar";
import { siteTitle } from "../constants/siteVariables";
import { ReactNode } from "react";
import Footer from "../components/footer";
import { Box, Container, Flex } from "@chakra-ui/layout";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Flex minH="100vh" direction="column">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        {/* <link rel="stylesheet" href="nprogress.css" /> */}
        <meta name="og:title" content={siteTitle} />
        <title>{title}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Box flex="1">
        <main>{children}</main>
      </Box>
      <Footer />
    </Flex>
  );
}
