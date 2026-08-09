import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import CustomSlider from './CustomSlider';

export default function YieldCalculator() {
  const [tier, setTier] = useState(60);

  // Compute values based on slider visually
  const getTierInfo = () => {
    if (tier < 20) return { name: 'Basic Node', price: 'Free', fee: '0.10%' };
    if (tier < 40) return { name: 'Casual', price: '$29.99/mo', fee: '0.08%' };
    if (tier < 70) return { name: 'Pro Node', price: '$89.99/mo', fee: '0.04%' };
    if (tier < 90) return { name: 'Institutional', price: '$499/mo', fee: '0.01%' };
    return { name: 'Whale', price: 'Custom', fee: '0.00%' };
  };

  const currentTier = getTierInfo();

  return (
    <>
      {/* Divider Line with Gradient */}
      <div className="relative w-full h-px my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff6b00]/30 to-transparent"></div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100px] bg-gradient-to-r from-transparent via-[#ff6b00]/5 to-transparent blur-xl pointer-events-none"></div>
      </div>

      <section className="relative w-full flex flex-col items-center justify-center pb-32 pt-16 px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-8">
            Calculate Yield
          </h2>
          <p className="text-xs font-semibold tracking-widest text-[#ff6b00] uppercase mb-8 text-center">Monthly Volume Estimation</p>
        </AnimatedSection>

        {/* Big Counter */}
        <AnimatedSection delay={200} className="flex items-center gap-1 md:gap-2 mb-12 p-4 md:p-6 rounded-2xl bg-[#08080a] shadow-[inset_0_4px_20px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.02]">
          <span className="text-3xl md:text-5xl font-semibold text-[#ff6b00] mr-2">$</span>
          {['3', '8', '4'].map((digit, i) => <DigitBox key={i} digit={digit} />)}
          <span className="text-3xl md:text-5xl font-semibold text-white/20 -mt-2 md:-mt-4">,</span>
          {['0', '9', '5'].map((digit, i) => <DigitBox key={`d-${i}`} digit={digit} />)}
        </AnimatedSection>

        {/* Tier Slider */}
        <AnimatedSection delay={300} className="w-full max-w-2xl flex flex-col gap-6 mb-16">
          <CustomSlider 
            value={tier} 
            onChange={setTier} 
            colors={{ fill: 'bg-gradient-to-r from-yellow-400 via-[#ff6b00] to-[#cc5500] shadow-[0_0_15px_rgba(255,107,0,0.2)]' }} 
          />
          <div className="flex justify-between text-[10px] text-white/30 font-semibold uppercase tracking-widest px-2 relative">
            <span className={tier < 20 ? 'text-white' : ''}>Basic</span>
            <span className={tier >= 20 && tier < 40 ? 'text-white' : ''}>Casual</span>
            <span className={tier >= 40 && tier < 70 ? 'text-white' : ''}>Pro Node</span>
            <span className={tier >= 70 && tier < 90 ? 'text-white' : ''}>Institutional</span>
            <span className={tier >= 90 ? 'text-white' : ''}>Whale</span>
          </div>
        </AnimatedSection>

        {/* Pricing / CTA Card */}
        <AnimatedSection delay={400} className="relative w-full max-w-2xl p-[1px] rounded-[24px] bg-gradient-to-b from-white/[0.08] to-transparent group">
          <div className="absolute inset-0 bg-[#ff6b00] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
          <div className="w-full bg-gradient-to-b from-[#12111a] to-[#0a0910] rounded-[23px] shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-10 relative z-10">
            
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 border-b border-white/[0.04] pb-8 relative">
              <div className="absolute top-0 bottom-8 left-1/2 w-px bg-white/[0.04]"></div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Optimal Tier</span>
                <span className="text-base md:text-lg font-semibold text-white flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                  {currentTier.name} 
                  <span className="text-xs md:text-sm text-white/40">{currentTier.price}</span>
                </span>
              </div>
              
              <div className="flex flex-col gap-1 pl-4 md:pl-8">
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Execution Fee</span>
                <span className="text-base md:text-lg font-semibold text-white flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                  {currentTier.fee} 
                  <span className="text-xs md:text-sm text-white/40">of routed vol.</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <button className="relative px-10 py-5 rounded-xl bg-gradient-to-b from-[#ff6b00] to-[#cc5500] text-black font-semibold text-sm tracking-wide shadow-[0_0_40px_rgba(255,107,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_50px_rgba(255,107,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-1 w-full md:w-auto text-center">
                ACTIVATE NODE
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-[#ff6b00] blur-[15px] rounded-full"></div>
              </button>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-2xl font-semibold text-white tracking-tight">
                  Retain ${tier > 40 ? '840' : tier > 20 ? '320' : '0'}
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase mt-1">vs. legacy platforms</span>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

function DigitBox({ digit }) {
  return (
    <div className="w-10 h-14 md:w-16 md:h-20 rounded-xl bg-[#121218] border border-white/[0.04] shadow-[inset_0_2px_8px_rgba(0,0,0,0.6),0_4px_10px_rgba(0,0,0,0.4)] flex items-center justify-center text-3xl md:text-5xl font-semibold text-white tracking-tight relative overflow-hidden group">
      <div className="absolute top-1/2 inset-x-0 h-px bg-black/50 w-full shadow-[0_1px_0_rgba(255,255,255,0.05)]"></div>
      <span className="relative z-10 group-hover:-translate-y-[100%] transition-transform duration-500">{digit}</span>
      <span className="absolute z-10 top-[100%] group-hover:-translate-y-[100%] transition-transform duration-500 text-[#ff6b00]">{digit}</span>
    </div>
  );
}