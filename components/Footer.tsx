
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-extrabold text-white tracking-tight">
              Alifvate<span className="text-blue-500">Digital</span>
            </a>
            <p className="mt-4 text-slate-400 max-w-xs text-sm leading-relaxed">
              Website simpel, cepat, dan terjangkau untuk semua pelaku usaha di Indonesia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Navigasi</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#tentang" className="hover:text-blue-500 transition-colors">Tentang</a></li>
                <li><a href="#kenapa-kami" className="hover:text-blue-500 transition-colors">Kenapa Kami</a></li>
                <li><a href="#layanan" className="hover:text-blue-500 transition-colors">Layanan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Hubungi Kami</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://wa.me/6289663084201" className="hover:text-blue-500 transition-colors">WhatsApp</a></li>
                <li><a href="https://www.instagram.com/alifvate" className="hover:text-blue-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Alifvate Digital. Dibuat dengan semangat membantu UMKM Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};
