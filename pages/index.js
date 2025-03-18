import Head from "next/head";
import Layout from "../components/layout/Layout";
import ReOxyHome from "../components/ReOxyHome";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/oxygen-logo.png" />
        <title>OxyBg</title>
      </Head>
      <Layout>
        <ReOxyHome></ReOxyHome>
      </Layout>
    </>
  );
}
