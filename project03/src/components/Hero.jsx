import React from 'react';
import LogoMarquee from './LogoMarquee';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" 
      style={{ maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-zinc-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Grid/Curtain Structure with Column-by-Column Clip Animation */}
      <div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
        <div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-1">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
        </div>
        <div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-2">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
        </div>
        <div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-3">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
        </div>
        <div className="relative h-full border-r border-white/5 md:border-none col-anim delay-4">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[45%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
          <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        </div>
        <div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-5">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
        </div>
        <div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-6">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
        </div>
        <div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-7">
          <div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="text-center max-w-5xl z-10 mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">
        
        {/* Badge */}
        <div 
          className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center relative" 
          style={{ '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px' }}
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:animate-pulse"></span>
          <span className="text-xs font-medium text-orange-100/80 tracking-wide group-hover:text-white transition-colors font-sans">New release: Nebula Protocol v2.0</span>
        </div>

        {/* Heading */}
        <h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">
          <span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">Scale</span>

          {/* Interactive Group */}
          <span className="group inline-flex flex-wrap justify-center gap-x-[0.25em] cursor-pointer select-none">
            {/* Word: your */}
            <span className="inline-flex">
              {['y', 'o', 'u', 'r'].map((char, i) => (
                <span key={i} className="relative inline-block overflow-hidden h-[1.1em]">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{ transitionDelay: `${i * 25}ms` }}>{char}</span>
                  <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{ transitionDelay: `${i * 25}ms` }}>{char}</span>
                </span>
              ))}
            </span>

            {/* Word: protocol */}
            <span className="inline-flex">
              {['p', 'r', 'o', 't', 'o', 'c', 'o', 'l'].map((char, i) => (
                <span key={i} className="relative inline-block overflow-hidden h-[1.1em]">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{ transitionDelay: `${(i + 4) * 25}ms` }}>{char}</span>
                  <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{ transitionDelay: `${(i + 4) * 25}ms` }}>{char}</span>
                </span>
              ))}
            </span>
          </span>

          <span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">with</span>
          <span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">smart</span>
          <span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">infrastructure</span>
        </h1>

        {/* Subtext */}
        <p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl text-xl text-gray-400 tracking-normal max-w-3xl mr-auto mb-12 ml-auto font-manrope font-medium">
          The essential toolkit for deploying secure dApps. From writing your first smart contract to governing a global DAO, build it all on one unified layer.
        </p>

        {/* Animated Shiny CTA Button */}
        <div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
            
            {/* Full Border Beam (Single Beam) */}
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)] animate-[beam-spin_3s_linear_infinite]"></div>
              <div className="absolute inset-[1px] rounded-full bg-black"></div>
            </div>

            {/* Inner Background & Effects */}
            <div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
              
              <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0 animate-[dots-move_8s_linear_infinite]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
            </div>

            {/* Content */}
            <span className="relative z-10 text-white/90 transition-colors group-hover:text-white font-sans">Start Building</span>
            <iconify-icon icon="lucide:arrow-right" class="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" width="16" height="16"></iconify-icon>
          </button>
        </div>

        {/* Secondary Link */}
        <div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col mt-32 mb-20 gap-x-4 gap-y-4 items-center">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest font-sans">Trusted by the modern web3 ecosystem</p>
          <a href="#" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5 group font-sans">
            Read the manifesto
            <iconify-icon icon="lucide:arrow-right" class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" width="24" height="24"></iconify-icon>
          </a>
        </div>
      </div>

      <LogoMarquee />
    </section>
  );
};

export default Hero;