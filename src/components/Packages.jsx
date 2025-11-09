import React from 'react';

const tiers = [
  {
    name: 'Diamond Suite',
    price: 'POA',
    perks: [
      'Private suite with dedicated host',
      'Champagne towers & premium spirits',
      'Front-row DJ booth proximity',
      'Priority red-carpet entry',
      'Bespoke branding & concierge',
    ],
    highlight: true,
  },
  {
    name: 'DJ Table',
    price: 'From $25,000',
    perks: [
      'Exclusive table adjacent to DJ',
      '3x magnums champagne',
      'Signature cocktails & gourmet bites',
      'Fast-track VIP entry',
    ],
  },
  {
    name: 'Platinum Table',
    price: 'From $15,000',
    perks: ['Premium location', '2x magnums champagne', 'Bottle service', 'Hostess service'],
  },
  {
    name: 'Gold Table',
    price: 'From $8,000',
    perks: ['Prime floor placement', 'Champagne', 'Bottle service'],
  },
  {
    name: 'Silver Table',
    price: 'From $4,000',
    perks: ['Stylish table', 'Bottle service'],
  },
  {
    name: 'Individual Pass',
    price: 'From $600',
    perks: ['VIP entry', 'Open bar access', 'Signature cocktails'],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">VIP Hospitality Packages</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Choose your table or suite. Every tier includes attentive service, crafted cocktails, and a front-row seat to the night’s spectacle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-2xl border bg-white/5 ${
                t.highlight ? 'border-amber-400/40' : 'border-white/10'
              }`}
            >
              {t.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-3 py-1 text-xs font-semibold text-black">
                  Most Exclusive
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-white/70">{t.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a
                    href="#book"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-2 text-sm font-semibold text-black shadow-md transition-transform hover:scale-[1.02]"
                  >
                    Book Your Table
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
