import React from "react";
import { APP_STORE_URL } from "../config";

export function AppStoreBadge({ dark = false }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl px-4 py-2.5 transition hover:opacity-90 ${
        dark ? "bg-white text-black" : "bg-black text-white"
      }`}
      aria-label="Download on the App Store"
    >
      <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" aria-hidden="true">
        <path d="M18.07 13.76c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.59 1.1-.96 0-2.43-1.07-4-1.04-2.06.03-3.96 1.2-5.02 3.04-2.15 3.73-.55 9.24 1.54 12.26 1.02 1.48 2.24 3.13 3.84 3.07 1.56-.06 2.15-1 4.03-1 1.87 0 2.41.99 4.05.96 1.68-.03 2.74-1.5 3.76-2.98 1.18-1.72 1.66-3.39 1.69-3.48-.04-.02-3.23-1.24-3.26-4.02zM15.07 5.4c.84-1.02 1.41-2.44 1.25-3.86-1.21.05-2.67.81-3.54 1.82-.78.9-1.46 2.35-1.28 3.73 1.35.1 2.73-.69 3.57-1.69z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] tracking-wide opacity-80">Download on the</span>
        <span className="text-[17px] font-semibold -mt-0.5">App Store</span>
      </span>
    </a>
  );
}

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone({ children, className = "", width = 220 }) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{ width }}
    >
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

export function ProductThumb({ item, selected, onClick, size = "md" }) {
  const dim = size === "sm" ? "w-16 h-16" : "w-20 h-24";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${dim} shrink-0 overflow-hidden rounded-lg bg-[#eee9e0] ring-offset-2 ring-offset-black transition ${
        selected ? "ring-2 ring-white" : "ring-1 ring-white/10 hover:ring-white/40"
      }`}
      aria-pressed={selected}
      aria-label={`${item.brand} ${item.name}`}
    >
      <img src={item.img} alt="" className="h-full w-full object-cover" />
    </button>
  );
}
