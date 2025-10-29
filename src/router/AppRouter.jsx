import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import PortfolioPage from '../pages/PortfolioPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';


export default function AppRouter() {
return (
<BrowserRouter>
<div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-pink-50 text-slate-900 antialiased">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/portfolio" element={<PortfolioPage />} />
<Route path="/blog" element={<BlogPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
</Routes>
<Footer />
</div>
</BrowserRouter>
);
}