import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
const SocialMediaArround = lazy(() =>
  import('@/components/Home/SocialMediaArround')
);
const About = lazy(() => import('@/components/Home/About'));
const Hero = lazy(() => import('@/components/Home/Hero'));
export default function Home() {
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Hero />
      <SocialMediaArround />
      <About />
    </div>
  );
}
