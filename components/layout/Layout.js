import Footer from "./Footer";
import MobileFixedMenu from "./MobileFixedMenu";
import NoSSR from "./NoSSR";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <NoSSR>
      <Header/>
      {children}
      <Footer/>
      <MobileFixedMenu />
    </NoSSR>
  );
}