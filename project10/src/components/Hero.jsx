import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import CustomSlider from './CustomSlider';
import ChartBars from './ChartBars';
import WordRotator from './WordRotator';

export default function Hero() {
  const [horizon, setHorizon] = useState(33);
  const [capital, setCapital] = useState(75);

  return (
    <section className="relative w-full pt-20 pb-32 flex flex-col items-center justify-center px-4 md:px-0">
      
      {/* Hero Image Masked */}
      <AnimatedSection className="relative w-64 h-80 md:w-80 md:h-96 mb-12 flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030305] z-10"></div>
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" 
          alt="Abstract Core" 
          className="w-full h-full object-cover rounded-full opacity-60 mix-blend-screen" 
          style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ff6b00]/20 blur-[60px] rounded-full z-0"></div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center leading-tight mb-4 flex flex-col items-center gap-1" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          Quantum Engine for<br />
          <span className="text-[#ff6b00]">
            <WordRotator />
          </span>
        </h1>
      </AnimatedSection>

      {/* Main Dashboard Widget */}
      <AnimatedSection delay={400} className="relative w-full max-w-4xl mt-16 p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
        <div className="w-full bg-gradient-to-b from-[#12111a] to-[#0a0910] rounded-[23px] shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-2px_10px_rgba(0,0,0,0.5)] overflow-hidden p-6 md:p-8 flex flex-col gap-8">
          
          {/* Controls Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/[0.04] pb-8">
            
            {/* Left Controls */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Asset Class</span>
                <div className="flex items-center justify-between px-4 py-3 bg-[#06050a] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.02)] border border-white/[0.02] cursor-pointer group hover:bg-[#0a0a0f] transition-colors">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:bitcoin-linear" class="text-white/60 text-lg"></iconify-icon>
                    <span className="text-sm font-semibold text-white/90">BTC-USD Pair</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#1a1924] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Horizon (Weeks)</span>
                <CustomSlider 
                  value={horizon} 
                  onChange={setHorizon} 
                  colors={{ fill: 'bg-gradient-to-r from-yellow-400 to-[#ff6b00]' }} 
                />
                <div className="flex justify-between text-[10px] text-white/30 font-semibold px-1 mt-1">
                  <span>1</span><span>12</span><span>24</span>
                </div>
              </div>
            </div>
            
            {/* Right Controls */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Logic Core</span>
                <div className="flex items-center justify-between px-4 py-3 bg-[#06050a] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.02)] border border-white/[0.02] cursor-pointer group hover:bg-[#0a0a0f] transition-colors">
                  <span className="text-sm font-semibold text-white/90">Momentum Scalp v2</span>
                  <div className="w-5 h-5 rounded-full bg-[#1a1924] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Capital allocation ($)</span>
                <CustomSlider 
                  value={capital} 
                  onChange={setCapital} 
                  colors={{ fill: 'bg-gradient-to-r from-[#ff6b00] to-[#cc5500]' }} 
                />
                <div className="flex justify-between text-[10px] text-white/30 font-semibold px-1 mt-1">
                  <span>1K</span><span className="text-white/80">85K</span><span>250K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 text-[10px] font-semibold tracking-widest text-white/40 uppercase">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></div> Base Net</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div> Alpha Gen</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div> Variance</div>
            </div>
            <div className="relative w-full h-40 flex items-end justify-between px-2 pb-2 border-b border-white/[0.04]">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-px bg-white/[0.02]"></div>
                <div className="w-full h-px bg-white/[0.02]"></div>
                <div className="w-full h-px bg-white/[0.02]"></div>
              </div>
              <ChartBars />
            </div>
          </div>

          {/* Results Bar */}
          <div className="w-full mt-4 p-4 md:p-6 rounded-2xl bg-[#0a0a0f] shadow-[inset_0_2px_15px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.03)] flex flex-col md:flex-row items-center justify-between border border-white/[0.02] gap-6 md:gap-0">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase mb-1">Projected Return</span>
              <span className="text-4xl font-semibold tracking-tight text-white" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.1)' }}>
                ${(481920 * (capital / 100) * (horizon / 50 || 0.1)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="text-xs font-semibold text-[#ff6b00] text-center md:text-right hidden sm:block">
                Deploy Parameters<br />to Live Node
              </span>
              <button className="relative w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-b from-[#ff6b00] to-[#cc5500] text-black font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(255,107,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-0.5">
                INITIALIZE
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-[#ff6b00] blur-[10px] rounded-full"></div>
              </button>
            </div>
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}