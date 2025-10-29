import React from "react";
import { siteData } from "../data/siteData";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Blog() {
  return (
    <section
      id="blog"
      className="max-w-6xl mx-auto px-6 py-16 bg-white/60 rounded-3xl shadow-inner my-8"
    >
      <h3 className="text-3xl font-bold mb-6">From the Blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteData.posts.map((post, idx) => (
          <motion.article
            key={post.id}
            className="rounded-xl overflow-hidden shadow-sm bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Blog Image */}
            <div className="h-40 bg-slate-100">
              <LazyLoadImage
                src={post.img} // local image
                alt={post.title}
                effect="blur"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Text */}
            <div className="p-4">
              <div className="text-sm text-slate-500">{post.date}</div>
              <h4 className="font-semibold mt-2">{post.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{post.excerpt}</p>
              <a href="#" className="inline-block mt-4 text-sm underline">
                Read more
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
