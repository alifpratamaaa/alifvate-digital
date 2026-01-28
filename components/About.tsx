
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img
                src="/images/web1.png"
                alt="Tentang Alifvate Digital"
                className="rounded-3xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-xs uppercase font-bold tracking-widest">Solusi Digital</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Solusi Cepat & Simpel <br /> Buat Kamu yang Baru Mau Mulai.
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Di <strong>Alifvate Digital</strong>, kami percaya bahwa setiap UMKM dan personal brand layak memiliki "rumah digital" yang keren tanpa harus menguras kantong jutaan rupiah.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Kami hadir untuk memangkas kerumitan teknis. Gak perlu pusing mikirin server, coding, atau desain yang ribet. Cukup kirim kontenmu, biar kami yang bereskan sisanya dalam hitungan hari.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-extrabold text-blue-600 text-xl mb-1">Cepat</p>
                <p className="text-sm text-slate-500">Online dalam 12-24 jam saja.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-extrabold text-blue-600 text-xl mb-1">Simpel</p>
                <p className="text-sm text-slate-500">Proses order lewat WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
