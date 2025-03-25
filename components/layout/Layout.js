import Footer from "./Footer";
import MobileFixedMenu from "./MobileFixedMenu";
import NoSSR from "./NoSSR";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <NoSSR>
      <Head>
        <link rel="icon" href="/logo_bubble_max.png" />
      </Head>
      <Header />
      {children}
      <Footer />
      <MobileFixedMenu />
    </NoSSR>
  );
}