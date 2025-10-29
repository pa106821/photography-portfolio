import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xanljddd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      } else {
        const data = await response.json();
        setStatus("❌ Failed to send message. Please try again.");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-white to-pink-50 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-3xl font-bold">Let's work together</h3>
          <p className="mt-4 text-slate-700">
            Interested in a session or collaboration? Send a message and I’ll get back to you within 48 hours.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Mail /> <a href="mailto:hello@rosette.photo">hello@rosette.photo</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 bg-white p-6 rounded-xl shadow">
          <div>
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full mt-1 p-3 rounded-lg border"
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full mt-1 p-3 rounded-lg border"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              placeholder="Message"
              className="w-full mt-1 p-3 rounded-lg border h-28"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-rose-300 text-white disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send message"}
            </button>
          </div>
          {status && <p className="mt-2 text-sm text-slate-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
