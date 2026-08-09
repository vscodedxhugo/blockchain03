import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the typical execution latency of Neural.Q?",
      answer: "Our standard nodes operate at < 50ms latency. For Pro and Institutional tiers, we utilize localized nodes and direct market access (DMA) colocation, bringing execution latency down to under 2ms, practically eliminating slip on high-frequency trades."
    },
    {
      question: "How does the Historical Vector Analysis work?",
      answer: "The engine maps current market conditions against a 10-year normalized vector database of order-book microstructures. It identifies highly probable short-term directional setups and dynamically shifts your capital before the wider market reacts."
    },
    {
      question: "Which asset classes and exchanges are supported?",
      answer: "Currently, we support Tier-1 centralized exchanges (Binance, Coinbase, Kraken) for Top 50 liquid digital assets. Beta support for decentralized perpetuals (dYdX, GMX) is available exclusively for Pro and Institutional nodes."
    },
    {
      question: "Do I have to lock my funds within your platform?",
      answer: "No. Neural.Q operates via strict read/trade-only API keys. We never have withdrawal access to your capital. You retain full custody of your assets on your preferred exchange at all times."
    },
    {
      question: "What happens if a flash crash occurs?",
      answer: "All Logic Models have hard-coded, server-side kill switches and variance circuit breakers. If market volatility exceeds your custom threshold or anomalous liquidity voids are detected, the system immediately halts execution and cancels open limit orders."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto py-24 px-4 md:px-0">
      <AnimatedSection className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
          System Inquiries
        </h2>
        <p className="text-xs font-semibold tracking-widest text-white/30 uppercase text-center">
          Frequently Asked Questions
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <AnimatedSection key={index} delay={index * 100}>
              <div 
                className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen 
                    ? 'bg-[#12111a] border-[#ff6b00]/30 shadow-[0_4px_20px_rgba(255,107,0,0.05)]' 
                    : 'bg-[#0a0a0f] border-white/[0.04] hover:bg-[#0c0c12] hover:border-white/10'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between p-5 md:p-6">
                  <h3 className={`text-sm md:text-base font-semibold transition-colors ${isOpen ? 'text-[#ff6b00]' : 'text-white/90'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff6b00]' : 'text-white/40'}`}>
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20"></iconify-icon>
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 md:pb-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 text-sm text-white/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}