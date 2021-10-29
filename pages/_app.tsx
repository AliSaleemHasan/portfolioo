import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  // use router to get url path and use it as animatePresence key
  const router = useRouter();
  return (
    <div>
      {/* header */}
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
export default MyApp;
