import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { v4 as uuidv } from "uuid";
import { Suspense } from "react";
import Header from "@/components/Header";

import Loader from "@/components/Icons/Loader";
export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="sync" initial={false}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Component {...pageProps} key={uuidv()} />
      </Suspense>
    </AnimatePresence>
  );
}
