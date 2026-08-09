import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function FeaturesGrid() {
  const features = [
    {
      icon: "solar:routing-2-linear",
      title: "Low Latency Routing",
      description: "Proprietary DMA infrastructure ensuring sub-2ms execution across global Tier-1 order books."
    },
    {
      icon: "solar:database-linear",
      title: "Vector Data Lakes",
      description: "10-year normalized historical microstructure data mapped against live conditions for real-time edge."
    },
    {
      icon: "solar:shield-warning-linear",
      title: "Variance Breakers",
      description: "Automated server-side kill switches halt execution instantly during anomalous liquidity voids."
    },
    {
      icon: "solar:code-circle-linear",
      title: "API-First Architecture",
      description: "Seamlessly integrate our execution core into your proprietary logic via REST and WebSockets."
    },
    {
      icon: "solar:safe-circle-linear",
      title: "Non-Custodial Design",
      description: "Retain complete control of your capital. We operate exclusively via read/trade-only API restrictions."
    },
    {
      icon: "solar:graph-up-linear",
      title: "Alpha Generation",
      description: "Dynamically shift capital allocations before macro market reactions based on predictive modeling."
    }
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-4 md:px-8">
      <AnimatedSection className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
          Infrastructure Built for Scale
        </h2>
        <p className="text-sm text-white/40 text-center max-w-2xl leading-relaxed">
          Enterprise-grade execution modules designed to give quantitative funds and sophisticated retail the definitive edge in digital asset markets.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <AnimatedSection 
            key={index} 
            delay={index * 100} 
            className="relative group p-[1px] rounded-[24px] bg-gradient-to-b from-white/[0.08] to-transparent hover:from-[#ff6b00]/40 transition-all duration-500"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-[#ff6b00]/0 group-hover:bg-[#ff6b00]/5 blur-xl transition-all duration-500 rounded-[24px] pointer-events-none"></div>
            
            <div className="relative w-full h-full bg-[#0a0a0f] rounded-[23px] p-8 flex flex-col gap-4 z-10 overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-3xl pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 group-hover:bg-[#ff6b00]/10 group-hover:border-[#ff6b00]/20 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-500">
                <iconify-icon icon={feature.icon} width="24" height="24"></iconify-icon>
              </div>
              
              <h3 className="text-lg font-semibold text-white tracking-tight mt-4">
                {feature.title}
              </h3>
              
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}