import React from 'react';

const MobileSuite = () => {
  return (
    <section className="z-20 overflow-hidden w-full max-w-7xl mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">
      
      {/* Background Large Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
        <h2 className="text-[12vw] leading-none font-bold text-white/[0.03] text-center whitespace-nowrap font-manrope tracking-tighter">
          MOBILE SUITE
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10 px-6">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-6 opacity-60">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-xs font-mono text-gray-400 tracking-widest">02/04</span>
          </div>
          
          <h3 className="leading-[1.1] uppercase md:text-7xl text-4xl font-normal text-white tracking-tight font-manrope mb-8">
            Offering<br/>Unmatched<br/>
            <span className="text-gray-500">Control &amp; </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">Insight</span>
          </h3>

          <div className="hidden lg:block h-px w-24 bg-white/10 mt-4"></div>
        </div>

        {/* Center Column: Phone Mockup */}
        <div className="lg:col-span-4 flex order-1 lg:order-2 lg:py-0 pt-12 pb-12 relative justify-center">
          <div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none bg-orange-500/20 w-64 h-96 rounded-full absolute top-1/2 left-1/2"></div>

          <div className="border-[1px] overflow-hidden bg-zinc-950 w-[330px] h-[660px] z-10 border-zinc-800 rounded-[3.5rem] ring-white/10 ring-1 relative shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)]">
            
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 h-[32px] w-[110px] bg-black rounded-full z-50 flex items-center justify-between px-3 transition-all duration-500 hover:w-[140px] hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] group/island">
               <div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="w-1 h-1 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)] animate-pulse"></div>
               </div>
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/5"></div>
               </div>
               <div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100 ml-auto">
                  <div className="w-1 h-1 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
               </div>
            </div>

            {/* Status Bar */}
            <div className="absolute top-4 left-0 w-full px-8 flex justify-between items-center z-40 text-[10px] font-semibold text-white/90 tracking-wide">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                    <iconify-icon icon="solar:signal-bold-duotone"></iconify-icon>
                    <iconify-icon icon="solar:battery-full-bold-duotone"></iconify-icon>
                </div>
            </div>

            {/* App Content */}
            <div className="flex flex-col z-10 bg-gradient-to-b from-zinc-900 to-black w-full h-full pt-16 pr-6 pl-6 relative">
              
              <div className="flex z-10 mb-8 relative items-center justify-between">
                <button 
                  className="flex hover:bg-white/10 transition-colors text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full backdrop-blur-sm items-center justify-center relative" 
                  style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
                >
                    <iconify-icon icon="lucide:arrow-left" width="16" height="16"></iconify-icon>
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
                  <span className="text-sm font-semibold text-white tracking-wide">Nebula Core</span>
                </div>
                <button 
                  className="flex hover:bg-white/10 transition-colors text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full backdrop-blur-sm items-center justify-center relative" 
                  style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
                >
                    <iconify-icon icon="lucide:more-horizontal" width="16" height="16"></iconify-icon>
                </button>
              </div>

              <div className="text-center mb-4">
                <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Total Volume</p>
                <h4 className="text-5xl font-medium text-white tracking-tighter font-geist">$8,245.32</h4>
                <div className="flex gap-1.5 mt-2 gap-x-1.5 gap-y-1.5 items-center justify-center">
                  <div className="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-emerald-500/20">
                    <iconify-icon icon="lucide:trending-up" class="mr-1" width="10" height="10"></iconify-icon>
                    +12.4%
                  </div>
                  <span className="text-xs text-zinc-500 font-medium">this week</span>
                </div>
              </div>

              {/* D3-Style Chart Visualization */}
              <div className="w-full h-40 mb-6 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 280 120" preserveAspectRatio="none">
                  <defs>
                     <pattern id="grid" width="40" height="120" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="120" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" opacity="0.3"></line>
                     </pattern>
                     <linearGradient id="d3Gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"></stop>
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0"></stop>
                     </linearGradient>
                  </defs>
                  
                  <rect width="100%" height="100%" fill="url(#grid)"></rect>
                  <line x1="0" y1="120" x2="280" y2="120" stroke="#3f3f46" strokeWidth="1" opacity="0.5"></line>

                  <path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15 V120 H0 Z" fill="url(#d3Gradient)"></path>
                  <path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  
                  <g transform="translate(150, 45)">
                    <circle r="4" fill="#18181b" stroke="#f97316" strokeWidth="2" className="animate-pulse"></circle>
                    <line x1="0" y1="4" x2="0" y2="75" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"></line>
                  </g>
                </svg>

                <div className="flex pt-2 pr-2 pl-2 justify-between">
                  <button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1H</button>
                  <button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1D</button>
                  <button className="text-[9px] font-semibold text-orange-500 bg-orange-500/10 rounded px-2 py-0.5 border border-orange-500/20">1W</button>
                  <button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1M</button>
                  <button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1Y</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 mt-4 mb-8 gap-x-3 gap-y-3">
                <button className="flex flex-col gap-2 group items-center">
                    <div className="flex shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] transition-transform group-active:scale-95 text-white bg-gradient-to-b from-orange-400 to-orange-600 w-12 h-12 rounded-xl items-center justify-center border border-white/10">
                        <iconify-icon icon="solar:round-arrow-down-bold-duotone" width="18" height="18"></iconify-icon>
                    </div>
                    <span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Deposit</span>
                </button>
                <button className="flex flex-col items-center gap-2 group">
                    <div 
                      className="flex transition-all hover:bg-zinc-800 group-active:scale-95 text-white bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-xl items-center justify-center relative" 
                      style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '12px' }}
                    >
                        <iconify-icon icon="solar:sort-horizontal-bold-duotone" width="18" height="18"></iconify-icon>
                    </div>
                    <span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Swap</span>
                </button>
                <button className="flex flex-col items-center gap-2 group">
                    <div 
                      className="flex transition-all hover:bg-zinc-800 group-active:scale-95 text-white bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-xl items-center justify-center relative" 
                      style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '12px' }}
                    >
                        <iconify-icon icon="solar:file-send-bold-duotone" width="18" height="18"></iconify-icon>
                    </div>
                    <span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Send</span>
                </button>
              </div>

              {/* Bottom Sheet List */}
              <div className="flex-1 bg-zinc-900/60 rounded-t-[2rem] -mx-6 px-6 pt-6 pb-4 backdrop-blur-md border-t border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Active Nodes</p>
                    <div className="flex gap-1">
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                    </div>
                </div>
                <div className="space-y-3">
                  <div 
                    className="flex hover:bg-white/[0.04] transition-colors cursor-pointer group bg-gradient-to-br from-white/10 to-white/0 rounded-xl px-3 py-3 items-center justify-between relative" 
                    style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '12px' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center p-1.5 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                        <iconify-icon icon="simple-icons:ethereum" class="text-indigo-400"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">Ethereum Mainnet</span>
                        <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-emerald-500"></span> Synced
                        </span>
                      </div>
                    </div>
                    <iconify-icon icon="lucide:chevron-right" class="text-zinc-600 group-hover:text-white transition-colors" width="14" height="14"></iconify-icon>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center p-1.5 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                        <iconify-icon icon="simple-icons:solana" class="text-purple-400"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">Solana RPC</span>
                        <span className="text-[10px] text-orange-400 font-medium flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-orange-400 animate-pulse"></span> Connecting...
                        </span>
                      </div>
                    </div>
                    <iconify-icon icon="lucide:chevron-right" class="text-zinc-600 group-hover:text-white transition-colors" width="14" height="14"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Description & Nav */}
        <div className="lg:col-span-4 flex flex-col gap-5 lg:items-end order-3 justify-center relative z-10">
            
            {/* Card 1 */}
            <div 
              className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl relative" 
              style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', '--border-radius-before': '24px' }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-0.5 shadow-lg shadow-orange-500/20">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                             <iconify-icon icon="solar:box-minimalistic-bold-duotone" width="20" height="20" style={{ color: '#f97316' }}></iconify-icon>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight font-manrope">Atlas Network</h3>
                        <p className="text-xs font-medium text-zinc-400 font-sans">Production · US-East</p>
                    </div>
                    <div className="ml-auto">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
                    </div>
                </div>

                <div className="flex justify-between gap-2 mb-5">
                    <div className="flex flex-col flex-1 transition-colors hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative" style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' }}>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">Uptime</span>
                        <span className="text-sm font-semibold text-white font-geist">99.99%</span>
                    </div>
                    <div className="flex flex-col flex-1 transition-colors hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative" style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' }}>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">Latency</span>
                        <span className="text-sm font-semibold text-white font-geist">14ms</span>
                    </div>
                    <div className="flex flex-col flex-1 transition-colors hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative" style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' }}>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">Reqs</span>
                        <span className="text-sm font-semibold text-white font-geist">2.4M</span>
                    </div>
                </div>

                <button 
                  className="hover:bg-white/10 transition-colors duration-300 flex gap-2 group text-xs font-medium text-white bg-gradient-to-br from-white/10 to-white/0 w-full rounded-full pt-2.5 pb-2.5 items-center justify-center relative" 
                  style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
                >
                    <span>View Analytics</span>
                    <iconify-icon icon="lucide:arrow-right" width="12" height="12" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                </button>
            </div>

            {/* Card 2 */}
            <div 
              className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-xl backdrop-blur-xl relative" 
              style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', '--border-radius-before': '24px' }}
            >
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 font-sans">
                    Enterprise-grade infrastructure with automated scaling and zero-knowledge security proofs built-in.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span 
                      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 relative" 
                      style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
                    >
                        <iconify-icon icon="lucide:shield" width="10" height="10"></iconify-icon>
                        zk-SNARKs
                    </span>
                    <span 
                      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 relative" 
                      style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
                    >
                        <iconify-icon icon="lucide:zap" width="10" height="10"></iconify-icon>
                        Auto-scale
                    </span>
                     <span 
                      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 relative" 
                      style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
                    >
                        <iconify-icon icon="lucide:terminal" width="10" height="10"></iconify-icon>
                        CLI Access
                    </span>
                </div>
                
                <div className="flex gap-2">
                     <button className="flex-1 flex items-center justify-between rounded-xl bg-zinc-950/50 border border-white/5 px-3 py-2 hover:border-white/20 transition-colors group">
                        <span className="text-xs text-zinc-300 font-medium font-sans">Documentation</span>
                        <iconify-icon icon="lucide:arrow-up-right" width="12" height="12" class="text-zinc-500 group-hover:text-white transition-colors"></iconify-icon>
                     </button>
                     <button className="flex-1 flex items-center justify-between rounded-xl bg-zinc-950/50 border border-white/5 px-3 py-2 hover:border-white/20 transition-colors group">
                        <span className="text-xs text-zinc-300 font-medium font-sans">API Status</span>
                        <iconify-icon icon="lucide:arrow-up-right" width="12" height="12" class="text-zinc-500 group-hover:text-white transition-colors"></iconify-icon>
                     </button>
                </div>
            </div>

            {/* Card 3 */}
            <div 
              className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur-xl relative" 
              style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', '--border-radius-before': '24px' }}
            >
                <div className="flex items-center justify-between mb-3">
                     <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-sans">Live Logs</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></div>
                     </div>
                     <button className="text-[10px] font-medium text-zinc-400 hover:text-white transition-colors font-sans underline decoration-zinc-700 underline-offset-2">View all</button>
                </div>
                <div className="space-y-2">
                    <div className="group rounded-xl bg-zinc-950/50 border border-white/5 p-2.5 flex items-center gap-3 hover:bg-white/[0.02] hover:border-white/10 transition-colors cursor-default">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                            <iconify-icon icon="lucide:layout-template" width="14" height="14" class="text-blue-400"></iconify-icon>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-medium text-zinc-200 truncate font-geist">Contract Deployed</span>
                            <span className="text-[10px] text-zinc-500 font-mono">0x82...92a1 · 2m ago</span>
                        </div>
                    </div>
                    <div className="group rounded-xl bg-zinc-950/50 border border-white/5 p-2.5 flex items-center gap-3 hover:bg-white/[0.02] hover:border-white/10 transition-colors cursor-default">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                            <iconify-icon icon="lucide:box" width="14" height="14" class="text-purple-400"></iconify-icon>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-medium text-zinc-200 truncate font-geist">New Block Synced</span>
                            <span className="text-[10px] text-zinc-500 font-mono">#18293492 · 120ms</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default MobileSuite;