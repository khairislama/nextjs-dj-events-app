import Layout from "../../components/layout";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const EventPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
};

export default EventPage;
