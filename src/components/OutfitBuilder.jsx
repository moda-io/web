import React, { useRef, useState } from "react";
import { bottoms, shoes, tops } from "../data/catalog";
import { APP_STORE_URL } from "../config";
import { ArrowIcon, ProductThumb } from "./ui";

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function mixByBrand(items) {
  const buckets = new Map();
  items.forEach((item) => {
    const list = buckets.get(item.brand) ?? [];
    list.push(item);
    buckets.set(item.brand, list);
  });

  const queues = shuffle([...buckets.values()].map(shuffle));
  const mixed = [];
  while (queues.some((queue) => queue.length > 0)) {
    queues.forEach((queue) => {
      if (queue.length) mixed.push(queue.shift());
    });
  }
  return mixed;
}

function Rail({ label, items, selectedId, onSelect }) {
  const scroller = useRef(null);

  const scroll = (dir) => {
    scroller.current?.scrollBy({ left: dir * 88, behavior: "smooth" });
  };

  return (
    <div className="mb-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-white/70">
          {label}
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="grid h-6 w-6 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-white/10"
            aria-label={`Previous ${label.toLowerCase()}`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="grid h-6 w-6 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-white/10"
            aria-label={`Next ${label.toLowerCase()}`}
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <ProductThumb
            key={item.id}
            item={item}
            selected={item.id === selectedId}
            onClick={() => onSelect(item)}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
}

export default function OutfitBuilder() {
  const [{ mixedTops, mixedBottoms, mixedShoes }] = useState(() => ({
    mixedTops: mixByBrand(tops),
    mixedBottoms: mixByBrand(bottoms),
    mixedShoes: mixByBrand(shoes),
  }));
  const [top, setTop] = useState(mixedTops[0]);
  const [bottom, setBottom] = useState(mixedBottoms[0]);
  const [shoe, setShoe] = useState(mixedShoes[0]);
  const look = [top, bottom, shoe];
  const total = look.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="outfit-builder" className="scroll-mt-24 bg-cream px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-charcoal text-white">
        <div className="grid gap-10 p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-8 md:p-12 lg:p-16">
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-white/55">
              <span className="h-px w-8 bg-white/40" />
              OUTFIT BUILDER
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              Build your look.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Swipe pieces from different retailers and see them come together
              before you buy.
            </p>
            <ul className="mt-7 space-y-3 text-[15px] text-white/80">
              {[
                "Swipe pieces from any store",
                "See them together on one canvas",
                "Mix brands without switching tabs",
                "Save the look when it clicks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/35 text-[11px]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-black hover:bg-white/90"
            >
              START BUILDING <ArrowIcon />
            </a>
          </div>

          <div className="relative">
            <Rail
              label="TOPS"
              items={mixedTops}
              selectedId={top.id}
              onSelect={setTop}
            />
            <Rail
              label="BOTTOMS"
              items={mixedBottoms}
              selectedId={bottom.id}
              onSelect={setBottom}
            />
            <Rail
              label="SHOES"
              items={mixedShoes}
              selectedId={shoe.id}
              onSelect={setShoe}
            />

            <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.7fr]">
              <div className="relative rounded-2xl bg-white/5 p-4 md:p-5">
                <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-white/50">
                  YOUR LOOK
                </p>
                <div className="flex flex-col items-stretch gap-3">
                  {look.map((item, i) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 rounded-xl bg-white/[0.04] p-2 pr-4"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className={`w-28 shrink-0 rounded-lg object-cover ${
                          i === 2 ? "h-20" : "h-28"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-white/50">
                          {i === 0 ? "TOP" : i === 1 ? "BOTTOM" : "SHOES"}
                        </p>
                        <p className="truncate font-display text-lg font-bold">
                          {item.brand}
                        </p>
                        <p className="truncate text-sm text-white/60">{item.name}</p>
                        <p className="mt-1 text-base font-semibold">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-sm">
                  <span className="tracking-wide text-white/60">Look total</span>
                  <span className="font-display text-xl font-bold">${total}</span>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="h-full overflow-hidden rounded-2xl bg-[#ebe6dc]">
                  <img
                    src="/images/photo-1617137968427-85924c800a22.jpg"
                    alt="Completed look"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
