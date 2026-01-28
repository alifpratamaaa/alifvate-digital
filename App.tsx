
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Pricing } from './components/Pricing';
import { Services } from './components/Services';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

/**
 * App Component
 * Struktur utama halaman landing page Alifvate Digital.
 * Menggabungkan semua section dalam satu halaman (Single Page Application).
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigasi Utama */}
      <Navbar />
      
      <main>
        {/* Section Utama / Headline */}
        <Hero />
        
        {/* Section Tentang Kami */}
        <section id="tentang">
          <About />
        </section>
        
        {/* Keunggulan Layanan */}
        <section id="kenapa-kami">
          <WhyUs />
        </section>
        
        {/* Detail Harga & Paket */}
        <section id="paket-99rb">
          <Pricing />
        </section>
        
        {/* Daftar Jenis Website */}
        <section id="layanan">
          <Services />
        </section>
        
        {/* Ajakan Terakhir */}
        <section id="kontak">
          <CTA />
        </section>
      </main>

      {/* Bagian Bawah */}
      <Footer />
    </div>
  );
};

export default App;
