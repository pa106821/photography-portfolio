import React from 'react';
import { Mail, Instagram } from 'lucide-react';


export default function Contact({ email, instagram }) {
return (
<section id="contact" className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-white to-pink-50 rounded-3xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div>
<h3 className="text-3xl font-bold">Let's work together</h3>
<p className="mt-4 text-slate-700">Interested in a session, a collaboration, or a photoshoot? Send a message and I’ll get back to you within 48 hours.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3"><Mail /> <a href={`mailto:${email}`}>{email}</a></div>
<div className="flex items-center gap-3"><Instagram /> <a href={`https://instagram.com/${instagram}`}>@{instagram}</a></div>
</div>
</div>
<div>
<form onSubmit={(e)=>{e.preventDefault(); const fm=new FormData(e.target); const name=fm.get('name'); const email=fm.get('email'); const message=fm.get('message'); const subject=encodeURIComponent('Booking inquiry from website'); const body=encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`); window.location.href=`mailto:${email}?subject=${subject}&body=${body}`}} className="space-y-3 bg-white p-6 rounded-xl shadow">
<div><label className="text-sm">Your name</label><input name="name" required className="w-full mt-1 p-3 rounded-lg border"/></div>
<div><label className="text-sm">Email</label><input name="email" type="email" required className="w-full mt-1 p-3 rounded-lg border"/></div>
<div><label className="text-sm">Message</label><textarea name="message" required className="w-full mt-1 p-3 rounded-lg border h-28"/></div>
<div className="flex justify-end"><button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-rose-300 text-white">Send message</button></div>
</form>
</div>
</div>
</section>
);
}