
import React from 'react';

export const Services: React.FC = () => {
  const serviceTypes = [
    { title: 'Landing Page', desc: 'Halaman promosi produk/jasa biar jualan makin laris.', img: 'https://picsum.photos/400/300?random=10' },
    { title: 'Company Profile', desc: 'Profile bisnis biar terlihat profesional di mata klien.', img: 'https://picsum.photos/400/300?random=11' },
    { title: 'Portfolio Pribadi', desc: 'Pamerin karya atau CV online biar makin dilirik recruiter.', img: 'https://picsum.photos/400/300?random=12' },
    { title: 'Katalog Produk', desc: 'List produk jualanmu biar customer gampang milih.', img: 'https://picsum.photos/400/300?random=13' },
    { title: 'Microsite / Link Bio', desc: 'Alternatif Linktree yang lebih eksklusif & branded.', img: 'https://picsum.photos/400/300?random=14' },
    { title: 'Promo Page', desc: 'Halaman khusus event atau promo terbatas bisnismu.', img: 'https://picsum.photos/400/300?random=15' },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Jenis Website yang Bisa Dibuat</h2>
          <p className="mt-4 text-slate-500">Semua tipe website di bawah cuma Rp 99.000!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceTypes.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
