import React from 'react';

const partners = [
  { name: 'Moët & Chandon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Moet_%26_Chandon_logo.svg/512px-Moet_%26_Chandon_logo.svg.png' },
  { name: 'Don Julio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Don_Julio_logo.svg/512px-Don_Julio_logo.svg.png' },
  { name: 'GlobeAir', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/GlobeAir_logo.svg/512px-GlobeAir_logo.svg.png' },
  { name: 'Richard Bavion', logo: 'https://dummyimage.com/300x120/000/fff&text=Richard+Bavion' },
  { name: 'Penrose Bar', logo: 'https://dummyimage.com/300x120/000/fff&text=Penrose+Bar' },
  { name: 'ICON1C Group', logo: 'https://dummyimage.com/300x120/000/fff&text=ICON1C+Group' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Partners & Sponsors</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Celebrating excellence with our global luxury partners.
          </p>
        </div>
        <div className="grid items-center justify-center gap-8 sm:grid-cols-2 md:grid-cols-3">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6">
              <img src={p.logo} alt={p.name} className="max-h-16 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
