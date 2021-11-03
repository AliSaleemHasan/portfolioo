import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  // use router to get url path and use it as animatePresence key
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
