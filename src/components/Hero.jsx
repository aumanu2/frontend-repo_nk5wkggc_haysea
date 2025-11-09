import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white" id="top">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette & gradient to improve text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Header / Navigation */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 shadow-lg" />
            <span className="text-lg font-semibold tracking-wider">Amber Lounge</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#events" className="hover:text-amber-300 transition-colors">Events</a>
            <a href="#packages" className="hover:text-amber-300 transition-colors">Hospitality Packages</a>
            <a href="#partners" className="hover:text-amber-300 transition-colors">Partners</a>
            <a href="#book" className="hover:text-amber-300 transition-colors">Book Now</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.03]"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 md:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          The Ultimate F1 Afterparty
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Experience the Unrivalled Luxury of
          <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 bg-clip-text text-transparent"> Amber Lounge</span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Where the world’s elite celebrate after the chequered flag. Legendary race weekend entertainment, couture hospitality, and unforgettable nights in Monaco, Singapore, Abu Dhabi, and Las Vegas.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#packages"
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
          >
            Explore Packages
          </a>
          <a
            href="#events"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium backdrop-blur transition-colors hover:border-amber-300 hover:text-amber-300"
          >
            Discover Upcoming Events
          </a>
        </div>
      </div>
    </section>
  );
}
