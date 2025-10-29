import React from "react";
import { Camera } from "lucide-react";

export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      {/* Camera Icon with gradient background */}
      <div className="rounded-2xl p-2 bg-gradient-to-tr from-teal-400 via-rose-300 to-indigo-400 shadow-lg">
        <Camera className="w-6 h-6 text-white" />
      </div>

      {/* Text */}
      <div>
        <div className="font-extrabold text-lg tracking-tight">
          Rosette Victory
        </div>
        <div className="text-xs text-slate-600">Freelance Photographer</div>
      </div>
    </a>
  );
}
