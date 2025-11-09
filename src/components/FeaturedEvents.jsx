import React from 'react';

const events = [
  {
    city: 'Monaco',
    date: 'May 25–26, 2025',
    headline: 'Armand Van Helden — Grand Prix Edition',
    venue: 'Port Hercule | Yacht & Club Experience',
    image:
      'https://images.unsplash.com/photo-1606248896938-9d2ee13f54ae?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Singapore',
    date: 'Sep 20–21, 2025',
    headline: 'Clifford Pier Takeover — Marina Bay Nights',
    venue: 'The Fullerton Bay — Waterfront Pavilion',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Abu Dhabi',
    date: 'Nov 29–30, 2025',
    headline: 'Yas Island Finale — Champagne & Superyachts',
    venue: 'Yas Marina Circuit — Trackside Terrace',
    image:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Las Vegas',
    date: 'Nov 14–15, 2025',
    headline: 'The Strip Edition — Neon & Nightfall',
    venue: 'Private Sky Suite & Club Lounge',
    image:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function FeaturedEvents() {
  return (
    <section id="events" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured Events</h2>
            <p className="mt-2 text-white/70">
              Upcoming dates, venues, and headlining acts across the calendar.
            </p>
          </div>
          <a
            href="#book"
            className="hidden rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-2 text-sm font-semibold text-black shadow-md md:inline-block"
          >
            Reserve VIP Access
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article key={e.city} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={e.image}
                alt={`${e.city} Amber Lounge`}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="space-y-2 p-5">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>{e.city}</span>
                  <span>{e.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{e.headline}</h3>
                <p className="text-sm text-white/70">{e.venue}</p>
                <div className="pt-2">
                  <a href="#book" className="text-sm text-amber-300 hover:underline">
                    Book Your Table →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
