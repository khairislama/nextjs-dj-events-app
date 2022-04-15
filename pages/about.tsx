import { Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout";

const AboutPage: NextPage = () => {
  return (
    <Layout title="About DJ events">
      <Heading size="2xl">About Page</Heading>
      <Text>This is an app to find the latest DJ and other musical events</Text>
      <Text>Version: 1.0.0</Text>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default AboutPage;
