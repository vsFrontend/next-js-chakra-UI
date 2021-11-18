import Head from "next/head";
import HomeFeature from "../src/components/homeFeatures";
import HomeHero from "../src/components/homeHero";
import { siteTitle } from "../src/constants/siteVariables";
import Layout from "../src/layouts/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout title={siteTitle}>
      <HomeHero />
      <HomeFeature />
    </Layout>
  );
}
