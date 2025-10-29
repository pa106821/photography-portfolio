import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "../data/siteData";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]); // Parallax offset

  return (
    <section id="home" className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <motion.h1
          style={{ y }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {siteData.tagline}
        </motion.h1>
        <p className="mt-6 text-lg text-slate-700 max-w-xl">
          I photograph portraits, events, and travel stories. I love color, natural light, and honest moments.
        </p>
      </div>
      <motion.div
        style={{ y }}
        className="flex-1 w-full rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={siteData.heroImage}
          alt="hero"
          className="w-full h-96 object-cover"
        />
      </motion.div>
    </section>
  );
}
