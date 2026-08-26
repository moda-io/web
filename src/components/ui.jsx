import React from "react";
import { APP_STORE_URL } from "../config";

export function AppStoreBadge({ dark = false }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label="Download on the App Store"
    >
      <img
        src={
          dark
            ? "/badges/download-on-the-app-store-white.svg"
            : "/badges/download-on-the-app-store-black.svg"
        }
        alt="Download on the App Store"
        className="h-12 w-auto"
        height={48}
        width={144}
      />
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
