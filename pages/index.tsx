import Link from "next/link";
import Layout from "../components/layout";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Home;
