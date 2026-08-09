import React from 'react';
import AnimatedSection from './AnimatedSection';
import MaskedReveal from './MaskedReveal';

export default function Features() {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>

      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-center mt-32 mb-16 px-4 flex justify-center">
        <MaskedReveal text="Operate with Absolute Authority" />
      </div>

      <section className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 px-4 md:px-0">
        
        {/* Left Info Panel */}
        <AnimatedSection className="relative w-full h-full rounded-[24px] p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent overflow-hidden">
          <div className="relative w-full h-full bg-[#0a0a0f] rounded-[23px] p-8 md:p-10 flex flex-col justify-center overflow-hidden z-10">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg" 
              alt="Abstract Wave" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10"></div>
            
            <div className="relative z-20 flex flex-col gap-6">
              <h3 className="text-3xl font-semibold tracking-tight leading-tight">
                <MaskedReveal text="Execute with precision." />
              </h3>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-white/50 uppercase bg-white/5 w-max px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <span>Logic Models</span>
                <span className="text-white/20">+</span>
                <span className="text-white">Neural.Q</span>
                <span className="text-white/20">=</span>
                <iconify-icon icon="solar:bolt-linear" class="text-[#ff6b00] text-lg"></iconify-icon>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-[250px]">
                Set your operational parameters and let our core manage execution latency and slip analytics automatically.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Trades List */}
        <AnimatedSection delay={200} className="relative w-full rounded-[24px] p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent">
          <div className="w-full h-full bg-gradient-to-b from-[#12111a] to-[#0a0a0f] rounded-[23px] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] p-6 flex flex-col gap-4 relative overflow-hidden">
            
            {/* Vertical Track Line */}
            <div className="absolute left-10 top-12 bottom-24 w-px bg-white/[0.05]"></div>

            <TradeItem 
              action="Short 250 USD (0.08 BTC)" 
              status="Filled in 1.2s" 
              value="24,150" 
              color="bg-cyan-400" 
              shadow="shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
              delay={0}
            />
            <TradeItem 
              action="Short 250 USD (0.09 BTC)" 
              status="Filled in 0.8s" 
              value="26,800" 
              color="bg-cyan-400" 
              shadow="shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
              delay={100}
            />
            <TradeItem 
              action="Take profit 500 USD (0.17 BTC)" 
              status="Pending Sync" 
              value="41,200" 
              color="bg-[#ff6b00]" 
              shadow="shadow-[0_0_8px_rgba(255,107,0,0.5)]"
              isHighlight 
              delay={200}
            />

            {/* Profit Summary Card */}
            <AnimatedSection delay={400} className="relative mt-2 p-[1px] rounded-xl bg-gradient-to-r from-[#ff6b00]/40 to-transparent ml-4 shadow-[0_10px_30px_rgba(255,107,0,0.1)] hover:shadow-[0_10px_40px_rgba(255,107,0,0.2)] transition-shadow">
              <div className="relative flex items-center justify-between p-4 md:p-5 rounded-[11px] bg-[#0a120e] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/10 to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00]">
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-white">58.40%</span>
                    <span className="text-[10px] font-semibold tracking-widest text-[#ff6b00]/60 uppercase mt-1">Net Realized Delta</span>
                  </div>
                </div>
                <button className="relative z-10 flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 transition-colors">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#ff6b00] hidden sm:block"></iconify-icon>
                  COMMIT
                </button>
              </div>
            </AnimatedSection>

          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

function TradeItem({ action, status, value, color, shadow, isHighlight, delay }) {
  return (
    <AnimatedSection delay={delay} yOffset={20} className="relative flex items-center justify-between p-4 rounded-xl bg-[#161520] shadow-[0_4px_15px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.03)] border border-white/[0.02] ml-4 hover:bg-[#1a1926] transition-colors group">
      <div className={`absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${color} ${shadow} group-hover:scale-125 transition-transform`}></div>
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-px bg-white/[0.05]"></div>
      <div className="flex flex-col">
        <span className={`text-xs font-semibold ${isHighlight ? 'text-[#ff6b00]' : 'text-white/90'}`}>{action}</span>
        <span className={`text-[10px] font-semibold tracking-widest uppercase mt-1 ${isHighlight ? 'text-[#ff6b00]/50' : 'text-white/30'}`}>{status}</span>
      </div>
      <span className="text-lg font-semibold text-white">{value}</span>
    </AnimatedSection>
  );
}