import React from 'react';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import Packages from './components/Packages';
import Partners from './components/Partners';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <FeaturedEvents />
      <Packages />
      <Partners />
      <CTA />
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Amber Lounge. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
