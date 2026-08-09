import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NexusEngine from './NexusEngine';

export default function Layout() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is NovaChain Protocol?",
      answer: "NovaChain is a high-performance Layer 2 derivatives DEX offering ultra-low latency trading with unified cross-margin capabilities, built specifically for professional and institutional traders."
    },
    {
      question: "How do I start trading?",
      answer: "Simply connect your Web3 wallet, deposit supported collateral (USDC or USDT), and you can instantly start trading perpetual contracts with up to 100x leverage. No KYC is required for standard accounts."
    },
    {
      question: "Are my funds secure?",
      answer: "Yes. Our smart contracts are fully audited by leading security firms. All user funds are held in non-custodial smart contracts or via institutional-grade MPC custody partners with real-time proof of reserves."
    },
    {
      question: "What are the trading fees?",
      answer: "We offer highly competitive fees starting at 0.02% for makers and 0.05% for takers. Staking $NOVA tokens can reduce these fees by up to 50% and unlock additional platform benefits."
    }
  ];

  return (
    <div className="relative antialiased selection:bg-rose-500 selection:text-white min-h-screen">
      {/* Background WebGL Engine & HUD */}
      <NexusEngine />

      {/* Global Grid Lines Container */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-white/[0.03] relative">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/[0.02]"></div>
          <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/[0.02]"></div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <Outlet />
        </main>

        {/* Global FAQ Section */}
        <div className="w-full max-w-3xl px-6 py-24 flex flex-col relative z-10 mt-10">
          <div className="mb-12 w-full text-center flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-4 text-[0.65rem] tracking-widest uppercase text-rose-500 font-medium">
              <span>Support</span>
              <div className="w-12 h-px bg-rose-500/50"></div>
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl text-white font-medium tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="flex flex-col space-y-4 w-full">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-sm transition-all duration-300 overflow-hidden ${
                  openFaq === idx 
                    ? 'skeuo-card-active transform scale-[1.02] z-10' 
                    : 'border border-white/10 skeuo-card hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-medium tracking-wide transition-colors ${openFaq === idx ? 'text-rose-500' : 'text-white/90'}`}>
                    {faq.question}
                  </span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    class={`text-lg transition-transform duration-300 ${openFaq === idx ? 'transform rotate-180 text-rose-500' : 'text-white/50'}`}
                  ></iconify-icon>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}