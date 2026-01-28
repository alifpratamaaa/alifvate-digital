
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider animate-bounce">
            Promo Launching: Cuma Rp 99.000!
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-tight mb-6">
            Punya Website <span className="text-blue-600">Profesional</span> <br className="hidden md:block" /> Gak Harus Mahal.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Bantu UMKM, Personal Brand, dan Bisnis pemula go digital dengan landing page modern, cepat, dan terjangkau.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Alifvate%20Digital,%20saya%20tertarik%20pesan%20website%2099rb"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
            >
              Pesan Website 99rb Sekarang
            </a>
            <a
              href="#paket-99rb"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Lihat Contoh Paket
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-6 text-slate-400">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span className="text-sm font-medium">Bisa Online 1-2 Hari</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span className="text-sm font-medium">Tanpa Biaya Hosting Bulanan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
