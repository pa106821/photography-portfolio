import React from "react";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-600">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
