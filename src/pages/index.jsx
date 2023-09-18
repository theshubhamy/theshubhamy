import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/components/home/Hero';
import SocialMediaArround from '@/components/Home/SocialMediaArround';
import About from '@/components/Home/About';
export default function Home() {
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Hero />
      <SocialMediaArround />
      <About />
    </div>
  );
}
