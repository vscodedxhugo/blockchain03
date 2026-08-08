import React from 'react';

const Features = () => {
  return (
    <section className="z-20 w-full max-w-7xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative">
      {/* Main Feature Card: License Benefits */}
      <div 
        className="group overflow-hidden bg-gradient-to-br from-white/10 to-white/0 z-10 rounded-[2.5rem] mb-6 relative backdrop-blur-lg" 
        style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '2.5rem' }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-0 gap-x-0 gap-y-0">
          {/* Text Content */}
          <div className="md:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-2">
              <iconify-icon icon="solar:posts-carousel-horizontal-bold-duotone" width="24" height="24" style={{ color: '#ffffff' }}></iconify-icon>
            </div>
            
            <h2 className="leading-[1.1] md:text-4xl text-3xl font-semibold text-white tracking-tight font-manrope mt-6 mb-6">
              High-Performance API Integration
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-sans leading-relaxed">
              <p>Connect to the decentralized web with Nebula's unified API surface. Designed for speed, reliability, and infinite scale.</p>
              <p>Our SDKs provide type-safe access to over 50+ protocols with a single line of code. Eliminate node maintenance and focus on building your application logic with 99.99% uptime guaranteed.</p>
              <p>Instant global state access — stream events, query historical data, and broadcast transactions with sub-millisecond latency.</p>
            </div>
          </div>

          {/* Visual Content: Code & Connection Status */}
          <div className="relative min-h-[500px] bg-zinc-950/30 border-l border-white/5 overflow-hidden font-geist">
            {/* Abstract Code Editor Background */}
            <div className="absolute inset-0 p-8 text-xs md:text-sm leading-relaxed text-gray-500 select-none opacity-40 pointer-events-none">
              <div className="flex gap-1.5 mb-6 opacity-50">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="font-mono space-y-1">
                <p><span className="text-purple-400">import</span> {'{'} <span className="text-orange-200">Nebula</span> {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@nebula/api"</span>;</p>
                <p className="h-4"></p>
                <p><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-orange-200">Nebula</span>({'{'}</p>
                <p className="pl-4">apiKey: <span className="text-emerald-400">"neb_live_8x92..."</span>,</p>
                <p className="pl-4">region: <span className="text-emerald-400">"us-west"</span>,</p>
                <p className="pl-4">retries: <span className="text-orange-200">3</span></p>
                <p>{'});'}</p>
                <p className="h-4"></p>
                <p><span className="text-purple-400">async function</span> <span className="text-blue-400">syncData</span>() {'{'}</p>
                <p className="pl-4"><span className="text-blue-400">const</span> stream = <span className="text-purple-400">await</span> client.<span className="text-blue-400">subscribe</span>(<span className="text-emerald-400">"new_blocks"</span>);</p>
                <p className="pl-4">stream.<span className="text-blue-400">on</span>(<span className="text-emerald-400">"data"</span>, (block) =&gt; {'{'}</p>
                <p className="pl-8">console.<span className="text-blue-400">log</span>(block.hash);</p>
                <p className="pl-8"><span className="text-gray-500">// Processing real-time events...</span></p>
                <p className="pl-4">{'}'});</p>
                <p>{'}'}</p>
              </div>
            </div>

            {/* Floating Status Card */}
            <div className="-translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-md pt-6 pr-6 pb-6 pl-6 absolute top-1/2 left-1/2">
              <div className="rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 ease-out group-hover:scale-[1.02]">
                {/* Header */}
                <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <div>
                    <h4 className="text-white font-normal font-sans text-sm tracking-wide">API Status</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <p className="text-emerald-500 text-xs font-normal tracking-wide type-writer">
                        Systems Operational
                      </p>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                    <iconify-icon icon="lucide:activity" width="16" height="16"></iconify-icon>
                  </div>
                </div>
                
                {/* Content Rows */}
                <div className="divide-y divide-white/5 text-sm font-sans">
                  <div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default opacity-0" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.2s forwards' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                        <iconify-icon icon="lucide:server" width="14" height="14"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-200 font-normal">REST Gateway</span>
                        <span className="text-gray-500 text-xs mt-0.5 font-normal">us-east-1</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs font-mono">14ms</span>
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
                        <div className="w-1 h-3 bg-emerald-500/50 rounded-full"></div>
                        <div className="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default opacity-0" style={{ animation: 'fadeSlideIn 0.6s ease-out 1.0s forwards' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                        <iconify-icon icon="lucide:box" width="14" height="14"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-200 font-normal">GraphQL</span>
                        <span className="text-gray-500 text-xs mt-0.5 font-normal">global-edge</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs font-mono">28ms</span>
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
                        <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
                        <div className="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default bg-white/[0.02] opacity-0" style={{ animation: 'fadeSlideIn 0.6s ease-out 1.8s forwards' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                        <iconify-icon icon="lucide:loader-2" class="animate-spin" width="14" height="14"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-200 font-normal">Indexer Stream</span>
                        <span className="text-gray-500 text-xs mt-0.5 flex items-center gap-1 font-normal">
                          Syncing blocks
                          <span className="flex gap-0.5 ml-1">
                            <span className="w-0.5 h-0.5 rounded-full bg-orange-400 animate-bounce"></span>
                            <span className="w-0.5 h-0.5 rounded-full bg-orange-400 animate-bounce delay-100"></span>
                            <span className="w-0.5 h-0.5 rounded-full bg-orange-400 animate-bounce delay-200"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-[10px] font-normal bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">
        {/* Mail / Support Card */}
        <div 
          className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg relative" 
          style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '2rem' }}
        >
          {/* Visual Header */}
          <div 
            className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center" 
            style={{ maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)' }}
          >
            <div className="overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.07] via-transparent to-transparent opacity-50 absolute inset-0">
              <div className="[mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] opacity-30 absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute top-10 left-10 w-32 bg-zinc-900/60 border border-white/10 rounded-xl p-3 backdrop-blur-sm -rotate-6 shadow-xl transform transition-transform hover:scale-105 duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="h-1 w-12 bg-white/20 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-[3px] border border-white/20 flex items-center justify-center"><svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/40 opacity-0"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className="h-1 w-16 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-[3px] border border-white/20"></div>
                    <div className="h-1 w-10 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-[3px] border border-white/20"></div>
                    <div className="h-1 w-14 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 right-12 w-20 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg backdrop-blur-sm rotate-12 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 duration-500">
                <span className="font-mono text-[10px] text-orange-200/70 font-medium tracking-wider">05:40</span>
              </div>
              <div className="absolute bottom-8 right-10 w-24 bg-zinc-900/60 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm rotate-3 shadow-xl transform transition-transform hover:scale-105 duration-500">
                <div className="flex justify-between mb-2"><div className="h-1 w-8 bg-white/20 rounded-full"></div></div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="aspect-square rounded-[4px] bg-white/10 border border-white/5"></div>
                  <div className="aspect-square rounded-[4px] bg-white/5 border border-white/5"></div>
                  <div className="aspect-square rounded-[4px] bg-white/10 border border-white/5"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-12 w-14 h-14 border border-dashed border-white/10 rounded-lg -rotate-3 opacity-30"></div>
            </div>
            
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out">
              <div className="w-28 h-24 relative">
                <div className="absolute bottom-0 w-full h-20 bg-zinc-800 rounded-xl border border-white/10 shadow-2xl"></div>
                <div className="absolute bottom-4 left-3 right-3 h-20 bg-zinc-700 rounded-lg border border-white/5 transform -rotate-3 origin-bottom-left shadow-md">
                  <div className="absolute top-3 left-3 right-8 h-1.5 bg-zinc-600 rounded-full w-1/2"></div>
                  <div className="absolute top-6 left-3 right-3 h-1.5 bg-zinc-600 rounded-full w-3/4"></div>
                </div>
                <div className="absolute bottom-0 w-full h-14 bg-gradient-to-b from-zinc-800/50 to-zinc-800 rounded-b-xl border-x border-b border-white/10 backdrop-blur-[2px] overflow-hidden">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800 rotate-45 border-r border-b border-white/10"></span>
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
                  <span className="text-orange-500 font-bold text-base font-manrope tracking-tighter">N</span>
                </div>
              </div>
            </div>
            
            <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none mix-blend-overlay" width="100%" height="100%">
              <defs>
                <pattern id="grid-pattern-mail" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" fill="white"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-mail)"></rect>
            </svg>
          </div>
          
          <div className="mt-auto pt-8 pr-10 pb-10 pl-10">
            <div className="flex items-center gap-3 mb-5">
              <iconify-icon icon="solar:letter-bold-duotone" width="24" height="24" style={{ color: '#fff' }}></iconify-icon>
              <h3 className="text-xl font-semibold text-white tracking-tight font-manrope">Automation</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
              As a license holder requiring confidential assistance, please fill out a support request form or email us.
            </p>
            <a href="mailto:support@nebula.protocol" className="inline-flex items-center gap-2 text-orange-400 hover:text-white transition-colors text-sm font-medium font-sans pb-1 border-b border-transparent hover:border-orange-400/50">
              support@nebula.protocol
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div 
          className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg relative" 
          style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '2rem' }}
        >
          <div 
            className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center" 
            style={{ maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
            
            <div className="flex w-full h-full relative perspective-[1000px] items-center justify-center">
              <div className="absolute w-[260px] h-[260px] border border-dashed border-white/5 rounded-full flex items-center justify-center opacity-60">
                <div className="absolute -top-3 bg-zinc-900 border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400 tracking-tight">active</span>
                </div>
              </div>

              <div className="absolute w-40 h-40 border border-dashed border-white/10 rounded-full flex items-center justify-center"></div>

              <div className="relative z-20 w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]">
                <div className="group-hover:opacity-100 transition-opacity duration-500 bg-white/5 opacity-0 rounded-2xl absolute inset-0"></div>
                <iconify-icon icon="lucide:github" class="transition-colors group-hover:text-white text-white/90" width="32" height="32"></iconify-icon>
              </div>

              <div className="absolute top-[25%] right-[28%] z-10 hover:z-20 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/10 ring-1 ring-white/5">
                  <iconify-icon icon="lucide:git-pull-request" class="text-purple-400" width="16" height="16"></iconify-icon>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 hover:opacity-100 transition-opacity px-2 py-0.5 bg-black border border-white/10 rounded text-[9px] text-white whitespace-nowrap pointer-events-none">Open PR</div>
              </div>

              <div className="absolute bottom-[28%] left-[30%] z-10 hover:z-20 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-9 h-9 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10 ring-1 ring-white/5">
                  <iconify-icon icon="lucide:lock" class="text-emerald-400" width="14" height="14"></iconify-icon>
                </div>
              </div>
              
              <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-zinc-700 rounded-full border border-white/10"></div>
              <div className="absolute bottom-[20%] right-[42%] w-1.5 h-1.5 bg-zinc-700 rounded-full border border-white/10"></div>
            </div>
          </div>
          
          <div className="mt-auto pt-8 pr-10 pb-10 pl-10">
            <div className="flex items-center gap-3 mb-5">
              <iconify-icon icon="simple-icons:github" width="24" height="24" style={{ color: '#fff' }}></iconify-icon>
              <h3 className="text-xl font-semibold text-white tracking-tight font-manrope">Identity</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
              With your Nebula purchase, you receive <span className="text-white font-medium">12 months</span> of technical support and direct repository access.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              License holders gain access to our private <a href="#" className="text-emerald-400/80 hover:text-emerald-300 transition-colors underline decoration-emerald-500/30 hover:decoration-emerald-500 underline-offset-2">GitHub repository</a> to track issues or propose feature requests.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;