import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv } from 'uuid';
import Header from '@/components/Header';
export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Header />
      <Component {...pageProps} key={uuidv()} />
    </AnimatePresence>
  );
}
