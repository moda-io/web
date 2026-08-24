import React, { useState } from "react";
import { autumnPalette, feedLooks } from "./data/catalog";
import { APP_STORE_URL } from "./config";
import { AppStoreBadge, ArrowIcon, Phone } from "./components/ui";
import OutfitBuilder from "./components/OutfitBuilder";
import ColorSearch from "./components/ColorSearch";

const nav = [
  { href: "#how-it-works", label: "HOW IT WORKS" },
  { href: "#features", label: "FEATURES" },
  { href: "#about", label: "ABOUT" },
];

function FeatureIcon({ name }) {
  const common = {
    width: 28,
    height: 28,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "eye") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (name === "drop") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M12 3s6 6.2 6 11a6 6 0 1 1-12 0c0-4.8 6-11 6-11z" />
      </svg>
    );
  }
  if (name === "hanger") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M12 7a2 2 0 1 0-2-2c0 1.2.8 1.7 2 2.5v1" />
        <path d="M3 18.5 12 11l9 7.5H3z" />
      </svg>
    );
  }
  return (
    <svg {...common} viewBox="0 0 24 24">
      <path d="M7 4h10v16l-5-3-5 3V4z" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="/" className="font-logo text-[28px] font-light tracking-[0.1em]">
          moda
        </a>
        <nav className="hidden items-center gap-8 text-[12px] font-semibold tracking-[0.16em] md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-ink/70 hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-semibold tracking-[0.12em] text-white hover:bg-black/85 md:inline-flex"
        >
          DOWNLOAD APP <ArrowIcon />
        </a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 px-4 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold tracking-[0.12em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-white"
          >
            DOWNLOAD APP <ArrowIcon />
          </a>
        </div>
      )}
    </header>
  );
}

function HeroPhones() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[520px] md:h-[540px]">
      <div className="absolute left-0 top-16 z-10 hidden origin-bottom -rotate-[14deg] sm:block">
        <Phone width={180}>
          <div className="flex h-full flex-col bg-cream p-3">
            <p className="text-[10px] font-semibold tracking-[0.14em] text-muted">SEARCH COLOR</p>
            <div className="mt-3 h-28 rounded-2xl bg-[#6B3F2A]" />
            <p className="mt-2 text-[11px] text-muted">#6B3F2A · warm brown</p>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {["#8B5E3C", "#3B2A22", "#C4A484", "#B55233"].map((c) => (
                <div key={c} className="aspect-square rounded-lg" style={{ background: c }} />
              ))}
            </div>
          </div>
        </Phone>
      </div>
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
        <Phone width={220}>
          <div className="flex h-full flex-col bg-white">
            <div className="flex justify-around px-2 pt-4 text-[10px] font-semibold tracking-wide">
              <span className="border-b-2 border-black pb-1">For You</span>
              <span className="text-muted">Following</span>
              <span className="text-muted">Saved</span>
            </div>
            <img
              src="/images/photo-1617137968427-85924c800a22.jpg"
              alt="Fashion feed"
              className="mt-2 h-full object-cover"
            />
          </div>
        </Phone>
      </div>
      <div className="absolute right-0 top-20 z-10 hidden origin-bottom rotate-[12deg] sm:block">
        <Phone width={180}>
          <div className="flex h-full flex-col bg-cream p-3">
            <p className="text-[10px] font-semibold tracking-[0.14em] text-muted">BUILD OUTFIT</p>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <div className="aspect-[3/4] rounded-lg bg-[#6B3F2A]" />
              <div className="aspect-[3/4] rounded-lg bg-[#E6D9C8]" />
              <div className="col-span-2 h-16 rounded-lg bg-[#3B2A22]" />
            </div>
            <div className="mt-3 space-y-1 text-[10px] text-muted">
              <p>A&F · $195</p>
              <p>COS · $135</p>
              <p>Vagabond · $160</p>
            </div>
          </div>
        </Phone>
      </div>
      <div className="stamp absolute -right-2 bottom-8 z-30 hidden md:grid">
        ALL STORES
        <br />
        ALL TOGETHER
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24 md:pt-16">
        <div>
          <p className="mb-4 text-[12px] font-semibold tracking-[0.2em] text-muted">
            BETA · AVAILABLE ON IPHONE
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight md:text-6xl lg:text-7xl">
            Find clothes
            <br />
            you'll actually
            <br />
            love.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Discover visually. Search precisely. Build outfits from anywhere.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <AppStoreBadge />
            <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">
              AVAILABLE ON IPHONE
            </p>
          </div>
        </div>
        <HeroPhones />
      </section>

      <section className="border-y border-black/10 bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8 md:py-14">
          {[
            {
              icon: "eye",
              title: "Personalized discovery",
              body: "A personalized fashion feed from hundreds of brands, tailored to your taste.",
            },
            {
              icon: "drop",
              title: "Search exact colors",
              body: "Pick any color or shade and find clothes that match it.",
            },
            {
              icon: "hanger",
              title: "Build outfits",
              body: "Mix pieces from different stores and see what works before committing to a purchase.",
            },
            {
              icon: "save",
              title: "Save & organize",
              body: "Save your favorite looks and come back to them whenever you want.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`md:px-4 ${i > 0 ? "md:border-l md:border-black/10" : ""}`}
            >
              <div className="mb-4 text-ink">
                <FeatureIcon name={item.icon} />
              </div>
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <OutfitBuilder />

      <div id="features">
        <ColorSearch />
      </div>

      <section id="discover" className="bg-cream px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-[12px] font-semibold tracking-[0.2em] text-muted">
            03 — DISCOVERY
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
            Don't know what to search?
            <br />
            We'll show you.
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
            Get a personalized feed instead of blindly looking things up or
            going through every store website's page. We pull hundreds of brands
            into one feed, designed specifically for you.
          </p>
          <div className="mt-10 columns-2 gap-3 md:columns-3">
            {feedLooks.map((look) => (
              <figure key={look.id} className="mb-3 break-inside-avoid overflow-hidden rounded-2xl">
                <img src={look.img} alt={look.label} className="w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 pb-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-[28px] bg-white p-8 md:p-10">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-muted">04</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight">
              Find your colors.
              <br />
              Then actually use them.
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Color analysis that becomes part of how you discover and shop —
              not a quiz you take once and forget.
            </p>
            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-muted">
                DEEP AUTUMN
              </p>
              <div className="flex flex-wrap gap-2">
                {autumnPalette.map((c) => (
                  <span
                    key={c}
                    className="h-12 w-12 rounded-full"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[28px] bg-white p-8 md:p-10">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-muted">05</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight">
              Found the look?
              <br />
              Keep it.
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Save pieces, organize inspiration, and come back when you're
              ready. Outfits, pieces, and collections — in one place.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {["Outfits", "Pieces", "Collections"].map((tab, i) => (
                <div
                  key={tab}
                  className={`rounded-xl p-3 text-center text-xs font-semibold tracking-wide ${
                    i === 0 ? "bg-ink text-white" : "bg-cream"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {feedLooks.slice(0, 3).map((look) => (
                <img
                  key={look.id}
                  src={look.img}
                  alt=""
                  className="aspect-[3/4] rounded-xl object-cover"
                />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="bg-charcoal px-4 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Shopping shouldn't be a chore.
            <br />
            Moda makes it fun and easy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Effortless Style
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <AppStoreBadge dark />
            <p className="text-[11px] font-semibold tracking-[0.16em] text-white/50">
              DOWNLOAD MODA · BETA ON IPHONE
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal px-4 pb-10 text-white/55 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-logo text-2xl font-light tracking-[0.1em] text-white">moda</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/privacy-policy.html" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/support.html" className="hover:text-white">
              Support
            </a>
            <a href="/terms-of-service.html" className="hover:text-white">
              Terms of Service
            </a>
          </nav>
          <p className="text-sm">
            Moda Technologies Inc. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
