import React from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Footer from "../components/Footer";
import { siteData } from "../data/siteData";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <section id="home" className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold">{siteData.tagline}</h1>
            <p className="mt-6 text-lg text-slate-700 max-w-xl">
              I photograph portraits, events, and travel stories. I love color, natural light, and honest moments.
            </p>
          </div>
          <div className="flex-1">
            <img src={siteData.heroImage} alt="hero" className="w-full h-96 object-cover rounded-3xl shadow-2xl"/>
          </div>
        </section>

        <Portfolio />
        <About />
        <Blog />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
