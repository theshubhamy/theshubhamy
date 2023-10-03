import React, { lazy } from "react";
const SocialMediaArround = lazy(() =>
  import("@/components/Home/SocialMediaArround")
);
const About = lazy(() => import("@/components/Home/About"));
const Hero = lazy(() => import("@/components/Home/Hero"));
const GetInTouch = lazy(() => import("@/components/Home/GetInTouch"));
export default function Home() {
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Hero />
      <SocialMediaArround />
      <About />
      <GetInTouch />
    </div>
  );
}
