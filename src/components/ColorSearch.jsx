import React, { useMemo, useState } from "react";
import { colorPieces } from "../data/catalog";

function hueDistance(a, b) {
  const d = Math.abs(a - b) % 360;
  return Math.min(d, 360 - d);
}

export default function ColorSearch() {
  const [hue, setHue] = useState(22);
  const color = `hsl(${hue} 42% 38%)`;

  const ranked = useMemo(
    () =>
      [...colorPieces]
        .map((item) => ({ ...item, dist: hueDistance(item.hue, hue) }))
        .sort((a, b) => a.dist - b.dist),
    [hue]
  );

  const matches = ranked.filter((item) => item.dist < 40).slice(0, 8);

  return (
    <section id="color" className="scroll-mt-24 bg-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-[12px] font-semibold tracking-[0.2em] text-muted">
            02 — PRECISION COLOR SEARCH
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
            You know the color.
            <br />
            Forget what they call it.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
            Pick the exact shade. Moda finds the clothes — not a keyword guess.
            The color you want, from stores everywhere.
          </p>

          <div className="mt-8 max-w-md">
            <div
              className="mb-4 h-28 w-full rounded-2xl shadow-inner"
              style={{ background: color }}
            />
            <input
              type="range"
              min="0"
              max="359"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="hue-slider w-full"
              aria-label="Pick a color"
            />
            <p className="mt-3 text-sm tracking-wide text-muted">
              Drag to pick a shade. Matching pieces update instantly.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {matches.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative aspect-[3/4] bg-[#eee9e0]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                  <span
                    className="absolute left-2 top-2 h-4 w-4 rounded-full ring-2 ring-white"
                    style={{ background: item.color }}
                  />
                </div>
                <div className="p-2.5">
                  <p className="text-[11px] tracking-wide text-muted">{item.brand}</p>
                  <p className="truncate text-sm font-medium">{item.name}</p>
                  <p className="text-sm">${item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
