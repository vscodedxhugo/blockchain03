import React from 'react';

const Navigation = () => {
  return (
    <div className="fixed flex w-full z-50 pt-6 pr-4 pl-4 top-0 left-0 justify-center">
      <nav 
        className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between relative" 
        style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px' }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-base font-medium tracking-tight text-white font-sans">Nebula</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Product</a>
          <a href="#" className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Docs</a>
          <a href="#" className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Customers</a>
          <a href="#" className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Pricing</a>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a href="#" className="hidden md:block text-xs font-medium text-gray-300 hover:text-white transition-colors font-sans">Sign in</a>
          <button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
            {/* Spinning Border Beam (Visible on Hover) */}
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            
            {/* Default Static Border */}
            <span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute top-0 right-0 bottom-0 left-0"></span>
            
            {/* 3D Button Surface & Content */}
            <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Request Demo</span>
              <iconify-icon icon="lucide:arrow-right" class="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14"></iconify-icon>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;