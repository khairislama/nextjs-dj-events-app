import { Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <>
      <Heading size="2xl">About Page</Heading>
      <Text>This is an app to find the latest DJ and other musical events</Text>
      <Text>Version: 1.0.0</Text>
    </>
  );
};

export default AboutPage;
