import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Hero() {
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
            delay: 0.4,
            duration: 0.2,
          },
          y: {
            delay: 0.4,
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
            delay: 0.4,
            duration: 0.2,
          },
          y: {
            delay: 0.4,
            duration: 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Shubham
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 0.6,
            duration: 0.2,
          },
          y: {
            delay: 0.6,
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
            delay: 0.7,
            duration: 0.2,
          },
          y: {
            delay: 0.7,
            duration: 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a{' '}
        <span className="text-AAsecondary">Software Developer</span>,
        with a strong knack for problem-solving and expertise in
        crafting exceptional digital experiences. Currently, my focus
        lies in the{' '}
        <span className="text-AAsecondary">
          MERN (MongoDB, Express, React, Node.js) Stack technology
        </span>
        , where I actively engage in developing and designing
        immersive applications. I'm also deeply involved in the realm
        of{' '}
        <span className="text-AAsecondary">
          Augmented Reality (AR) and Mobile App development,
        </span>{' '}
        &nbsp; contributing to the creation of engaging and innovative
        experiences for users.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 0.8,
            duration: 0.2,
          },
          y: {
            delay: 0.8,
            duration: 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={'/resume.pdf'} target={'_blank'} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Contact Me
          </button>
        </a>
      </motion.div>
    </div>
  );
}
