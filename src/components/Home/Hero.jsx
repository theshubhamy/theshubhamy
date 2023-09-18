import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Hero() {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.h4
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 10.4,
            duration: 0.2,
          },
          y: {
            delay: 10.4,
            duration: 0.2,
          },
        }}
        className="text-AAsecondary font-mono"
      >
        Hey, I am
      </motion.h4>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 10.5,
            duration: 0.2,
          },
          y: {
            delay: 10.5,
            duration: 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Shubham Kumar.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 10.6,
            duration: 0.2,
          },
          y: {
            delay: 10.6,
            duration: 0.2,
          },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas & things alive.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 10.7,
            duration: 0.2,
          },
          y: {
            delay: 10.7,
            duration: 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a{' '}
        <span className="text-AAsecondary">Software Developer</span>,
        i possess strong problem-solving skills and specialize in
        crafting exceptional <br className="2xl:block hidden" />
        digital experiences. My current area of focus is in the{' '}
        <span className="text-AAsecondary">web3 domain</span>, where I
        actively engage in developing{' '}
        <br className="2xl:block hidden" />
        and designing immersive{' '}
        <span className="text-AAsecondary">web3 applications</span>.
        This involves working with{' '}
        <span className="text-AAsecondary">Smart Contracts</span> on
        the <span className="text-AAsecondary">Blockchain</span>.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 10.8,
            duration: 0.2,
          },
          y: {
            delay: 10.8,
            duration: 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={'/resume.pdf'} target={'_blank'} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Connect Me!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
