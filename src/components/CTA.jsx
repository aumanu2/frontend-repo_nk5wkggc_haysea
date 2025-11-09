import React from 'react';

export default function CTA() {
  return (
    <section id="book" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-amber-400/30 bg-gradient-to-br from-white/[0.06] to-white/[0.03] px-8 py-10 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold md:text-3xl">
          Your Invitation to Formula 1’s Finest Afterparty
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Champagne flows. Legendary moments. Stunning views. Secure your place among the world’s elite across Monaco, Singapore, Abu Dhabi, and Las Vegas.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#packages"
            className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-6 py-2 text-sm font-semibold text-black shadow-md transition-transform hover:scale-[1.03]"
          >
            Reserve VIP Access
          </a>
          <a
            href="#events"
            className="rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white/90 transition-colors hover:border-amber-300 hover:text-amber-300"
          >
            Discover Upcoming Events
          </a>
        </div>
      </div>
    </section>
  );
}
