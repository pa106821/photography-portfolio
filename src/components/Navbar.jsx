import React, { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';


export default function Navbar() {
const [open, setOpen] = useState(false);
return (
<header className="fixed w-full z-30 top-0 left-0">
<div className="backdrop-blur-sm bg-white/60 border-b border-white/30">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a href="/" className="flex items-center gap-3">
<div className="rounded-2xl p-2 bg-gradient-to-tr from-teal-400 via-rose-300 to-indigo-400 shadow-lg">
<Camera className="w-6 h-6 text-white" />
</div>
<div>
<div className="font-extrabold text-lg tracking-tight">Rosette Victory Photography</div>
<div className="text-xs text-slate-600">Freelance Photographer</div>
</div>
</a>


<nav className="hidden md:flex items-center gap-6 text-sm">
<a href="/portfolio" className="hover:underline">Portfolio</a>
<a href="/blog" className="hover:underline">Blog</a>
<a href="/about" className="hover:underline">About</a>
<a href="/contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-rose-300 text-white shadow">Contact</a>
</nav>


<div className="md:hidden">
<button aria-label="menu" onClick={() => setOpen(!open)} className="p-2">{open ? <X /> : <Menu />}</button>
</div>
</div>
{open && (
<div className="md:hidden px-6 pb-4">
<div className="flex flex-col gap-3">
<a href="/portfolio" className="py-2 border-b">Portfolio</a>
<a href="/blog" className="py-2 border-b">Blog</a>
<a href="/about" className="py-2 border-b">About</a>
<a href="/contact" className="py-2 rounded-full bg-gradient-to-r from-teal-400 to-rose-300 text-white text-center">Contact</a>
</div>
</div>
)}
</div>
</header>
);
}