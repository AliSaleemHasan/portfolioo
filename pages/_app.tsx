import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  // use router to get url path and use it as animatePresence key
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
export default MyApp;
