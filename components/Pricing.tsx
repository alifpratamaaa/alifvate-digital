
import React from 'react';

export const Pricing: React.FC = () => {
  const inclusions = [
    'Website 1 Halaman',
    'Responsive (Mobile, Tablet, Desktop)',
    'Desain Modern & Clean',
    'Domain Gratis',
    'Keamanan SSL / HTTPS',
    '3x Revisi Ringan',
    'Integrasi Tombol WhatsApp',
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Paket Website 99 Ribu</h2>
          <p className="mt-4 text-slate-500">Harga pas, kualitas berkelas. Gak pake drama.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative p-8 bg-white border-2 border-blue-600 rounded-3xl shadow-2xl">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Terlaris
            </div>
            
            <div className="text-center mb-8">
              <span className="text-slate-500 text-sm font-medium">Paket Starter Digital</span>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-2xl font-bold text-slate-900">Rp</span>
                <span className="text-5xl font-extrabold tracking-tight text-slate-900">99.000</span>
                <span className="ml-1 text-xl font-medium text-slate-500">/sekali bayar</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-slate-600">{item}</p>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6289663084201?text=Halo%20Alifvate%20Digital,%20saya%20mau%20ambil%20Paket%2099rb"
              target="_blank"
              className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-2xl font-extrabold text-lg shadow-lg hover:bg-blue-700 transition-all active:scale-95"
            >
              Order Paket 99rb Sekarang
            </a>
            
            <p className="mt-4 text-center text-xs text-slate-400 italic">
              *Estimasi pengerjaan: 12 - 24 jam setelah data lengkap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
