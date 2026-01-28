
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Tunggu Apa Lagi? <br /> Go Online Hari Ini Juga!
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Promo Rp 99.000 hanya untuk 50 klien pertama bulan ini. Jangan biarkan kompetitormu lebih dulu dikenal di internet!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/6289663084201?text=Halo%20Alifvate%20Digital,%20saya%20tertarik%20pesan%20website%2099rb"
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 rounded-2xl font-extrabold text-xl shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95"
              >
                Mulai Website 99rb Sekarang
              </a>
              <p className="text-white/80 text-sm font-medium">
                Pengerjaan cepat & revisi sampai oke!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
