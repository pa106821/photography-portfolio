import React, { useState } from "react";
import { siteData } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = siteData.gallery.filter((g) =>
    activeCategory === "All" ? true : g.category === activeCategory
  );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filtered.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {siteData.categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === c ? "bg-gradient-to-r from-teal-400 to-rose-300 text-white" : "bg-white/60 border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="rounded-xl overflow-hidden shadow-md bg-white"
          >
            <button onClick={() => openLightbox(idx)} className="block w-full text-left">
              <div className="aspect-[4/5] bg-slate-100">
                <LazyLoadImage
                  src={item.srcFallback}
                  alt={item.title}
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="text-xs text-slate-500">{item.category}</div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-4xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) nextImage();
                else if (info.offset.x > 50) prevImage();
              }}
            >
              <button
                onClick={closeLightbox}
                className="absolute right-2 top-2 p-2 rounded-full bg-white hover:bg-gray-100 z-10"
              >
                Close
              </button>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                <LazyLoadImage
                  src={filtered[lightboxIndex].srcFallback}
                  alt={filtered[lightboxIndex].title}
                  effect="blur"
                  className="w-full h-[60vh] object-cover"
                />
                <div className="p-4 flex justify-between items-center">
                  <button onClick={prevImage} className="px-3 py-1 bg-white rounded shadow">Prev</button>
                  <div>
                    <div className="text-lg font-bold">{filtered[lightboxIndex].title}</div>
                    <div className="text-sm text-slate-600">{filtered[lightboxIndex].category}</div>
                  </div>
                  <button onClick={nextImage} className="px-3 py-1 bg-white rounded shadow">Next</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
