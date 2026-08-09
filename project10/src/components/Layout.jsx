import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="relative z-10 w-full max-w-[1200px] mx-auto min-h-screen border-x border-white/[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDE1KSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAyMEwyMCAwIi8+PC9nPjwvc3ZnPg==')] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-[#030305]/80 before:to-[#030305] before:z-[-1]">
      
      {/* Progressive Blur Top */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 -translate-x-[1px] -translate-y-[1px]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 translate-x-[1px] -translate-y-[1px]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 -translate-x-[1px] translate-y-[1px]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 translate-x-[1px] translate-y-[1px]"></div>

      {/* Vertical Guide Lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/[0.02] pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 bottom-0 left-2/4 w-px bg-white/[0.02] pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/[0.02] pointer-events-none hidden md:block"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-24 flex items-center justify-between px-8 border-b border-white/[0.04] animate-[fadeInDown_1s_ease-out]">
        <div className="hidden md:flex gap-12 text-xs font-semibold tracking-widest text-white/50 uppercase">
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Products</a>
        </div>
        <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[#ff6b00]">
          <iconify-icon icon="solar:cpu-linear" width="24" height="24"></iconify-icon>
          NEURAL.Q
        </div>
        <div className="hidden md:flex gap-12 text-xs font-semibold tracking-widest text-white/50 uppercase">
          <a href="#" className="hover:text-white transition-colors">Company</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="md:hidden text-white/70 hover:text-white">
           <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
        </button>
      </header>

      <main>
        {children}
      </main>

      {/* Footer Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mt-12"></div>

      {/* Footer */}
      <footer className="w-full pt-16 pb-8 px-8 bg-[#030305]/80 backdrop-blur-md flex flex-col gap-16 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand & Status */}
          <div className="flex flex-col gap-6 md:col-span-5 pr-0 md:pr-12">
            <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[#ff6b00]">
              <iconify-icon icon="solar:cpu-linear"></iconify-icon>
              NEURAL.Q
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Advanced quantum execution engine utilizing historical vector analysis for automated, latency-optimized digital asset deployment across decentralized and centralized markets.
            </p>
            <div className="flex items-center gap-2 mt-4 inline-flex w-max px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_8px_rgba(255,107,0,0.6)] animate-pulse"></div>
              <span className="text-[10px] font-semibold tracking-widest text-[#ff6b00]/80 uppercase">All Systems Operational</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-2">Products</h4>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Quantum Engine</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Yield Optimizer</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Institutional Nodes</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors flex items-center gap-2">
              API Access
              <span className="text-[8px] bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 px-1.5 py-0.5 rounded font-bold uppercase">Beta</span>
            </a>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-2">Resources</h4>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Documentation</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Research Papers</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">System Architecture</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Open Source</a>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-2">Company</h4>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">About Neural.Q</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Careers</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Contact</a>
            <a href="#" className="text-xs font-medium text-white/60 hover:text-[#ff6b00] transition-colors">Risk Disclosures</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 pt-6 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-semibold tracking-widest text-white/30 uppercase">
              <span>©2024 Neural.Q Systems. All rights reserved.</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-white/10"></span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#ff6b00] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#ff6b00] transition-colors">Terms of Service</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#ff6b00] hover:bg-[#ff6b00]/10 hover:border-[#ff6b00]/20 transition-all duration-300">
                <iconify-icon icon="simple-icons:x" width="14"></iconify-icon>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#ff6b00] hover:bg-[#ff6b00]/10 hover:border-[#ff6b00]/20 transition-all duration-300">
                <iconify-icon icon="simple-icons:discord" width="16"></iconify-icon>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#ff6b00] hover:bg-[#ff6b00]/10 hover:border-[#ff6b00]/20 transition-all duration-300">
                <iconify-icon icon="simple-icons:github" width="16"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}