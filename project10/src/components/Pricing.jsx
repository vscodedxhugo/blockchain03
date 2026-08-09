import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Pricing() {
  const tiers = [
    {
      name: 'Casual',
      price: '$29.99',
      period: '/mo',
      description: 'Perfect for retail traders looking to automate simple momentum strategies.',
      features: [
        'Execution latency < 50ms',
        '3 Logic Models available',
        'Up to $10k monthly routed volume',
        'Standard email support',
        '0.08% execution fee'
      ]
    },
    {
      name: 'Pro Node',
      price: '$89.99',
      period: '/mo',
      description: 'Advanced routing and lower latency for serious market participants.',
      isPopular: true,
      features: [
        'Execution latency < 15ms',
        'Unlimited Logic Models',
        'Up to $500k monthly routed volume',
        'Priority API access & Webhooks',
        '0.04% execution fee',
        'Custom slippage tolerance'
      ]
    },
    {
      name: 'Institutional',
      price: '$499',
      period: '/mo',
      description: 'Dedicated hardware and direct market access for funds and whales.',
      features: [
        'Execution latency < 2ms (Colocated)',
        'Bespoke algorithm implementation',
        'Unlimited monthly routed volume',
        '24/7 Dedicated technical account manager',
        '0.01% execution fee',
        'Cross-exchange arbitrage routing'
      ]
    }
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <AnimatedSection className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
          Deploy Your Node
        </h2>
        <p className="text-sm text-white/40 text-center max-w-lg mb-16">
          Choose the execution environment that matches your capital velocity. Upgrade or downgrade instantly as your algorithmic needs evolve.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {tiers.map((tier, index) => (
          <AnimatedSection 
            key={tier.name} 
            delay={index * 150} 
            className={`relative rounded-[24px] p-[1px] ${
              tier.isPopular 
                ? 'bg-gradient-to-b from-[#ff6b00] to-transparent shadow-[0_0_40px_rgba(255,107,0,0.1)] hover:-translate-y-2' 
                : 'bg-gradient-to-b from-white/[0.08] to-transparent hover:-translate-y-1'
            } transition-all duration-500`}
          >
            {tier.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#ff6b00] text-black text-[10px] font-bold uppercase tracking-widest rounded-full z-20 shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                Most Popular
              </div>
            )}
            
            <div className={`w-full h-full bg-[#0a0a0f] rounded-[23px] p-8 flex flex-col relative z-10 overflow-hidden ${
              tier.isPopular ? 'shadow-[inset_0_2px_20px_rgba(255,107,0,0.05)]' : ''
            }`}>
              {tier.isPopular && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/10 blur-[50px] rounded-full pointer-events-none"></div>
              )}

              <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-semibold tracking-tight text-white">{tier.price}</span>
                <span className="text-sm font-medium text-white/40">{tier.period}</span>
              </div>
              
              <p className="text-xs text-white/40 leading-relaxed mb-8 min-h-[40px]">
                {tier.description}
              </p>
              
              <button className={`w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 mb-8 ${
                tier.isPopular
                  ? 'bg-[#ff6b00] text-black shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:bg-[#cc5500]'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}>
                SELECT TIER
              </button>

              <div className="flex flex-col gap-4 mt-auto pt-8 border-t border-white/[0.04]">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <iconify-icon 
                      icon="solar:check-circle-linear" 
                      class={`mt-0.5 text-lg flex-shrink-0 ${tier.isPopular ? 'text-[#ff6b00]' : 'text-white/20'}`}
                    ></iconify-icon>
                    <span className="text-xs font-medium text-white/70 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}