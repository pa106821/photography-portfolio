import React from "react";
import { motion } from "framer-motion";

// Import local image
import profileImage from "../assets/about/profile.jpg";

export default function About() {
  const skills = [
    { name: "Portrait Photography", level: 90 },
    { name: "Event Coverage", level: 85 },
    { name: "Travel & Landscape", level: 80 },
    { name: "Photo Editing", level: 95 },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Profile Image */}
        <div className="relative group">
          <img
            src={profileImage} // <-- local image
            alt="Rosette Victory"
            className="rounded-3xl shadow-lg w-full object-cover transform transition-transform group-hover:scale-105"
          />
        </div>

        {/* About Text + Skills */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="text-slate-700">
            Hi — I'm Laber, a freelance photographer focused on bright, human stories. 
            I shoot portraits, events, and travel projects. My work blends candid emotion 
            with bold color palettes. I use natural light and creative off-camera flash 
            when needed. I work with brands, couples, and editorial clients across East Africa and beyond.
          </p>

          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm font-medium text-slate-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-2 bg-gradient-to-r from-teal-400 to-rose-300 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Contact CTA */}
      <div className="fixed bottom-4 right-4 md:right-8 z-50">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-rose-300 text-white shadow-lg hover:scale-105 transform transition"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
