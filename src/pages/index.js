import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/components/home/Hero';
import SocialMediaArround from '@/components/Home/SocialMediaArround';
import AboutMe from '@/components/Home/AboutMe';
export default function Home() {
  const router = useRouter();
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Hero />
      <SocialMediaArround />
      <AboutMe />
    </div>
  );
}
