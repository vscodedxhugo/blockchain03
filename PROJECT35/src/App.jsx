import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://cdn.tailwindcss.com",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://unpkg.com/lucide@latest",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        lucide.createIcons();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "antialiased selection:bg-[#4F46E5] selection:text-white";
const sourceBodyStyle = "";
const inlineEventAttributeNames = [
  "click",
  "change",
  "input",
  "submit",
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "keydown",
  "keyup",
  "focus",
  "blur"
];

function applyElementAttributes(element, attributes) {
  const previousId = element.id;
  const previousClassName = element.className;
  const previousStyleAttribute = element.getAttribute("style");

  if (attributes.id) {
    element.id = attributes.id;
  }
  attributes.className
    .split(/\s+/)
    .filter(Boolean)
    .forEach((className) => element.classList.add(className));
  if (attributes.style) {
    element.style.cssText = [element.style.cssText, attributes.style]
      .filter(Boolean)
      .join("; ");
  }

  return () => {
    element.id = previousId;
    element.className = previousClassName;
    if (previousStyleAttribute === null) {
      element.removeAttribute("style");
    } else {
      element.setAttribute("style", previousStyleAttribute);
    }
  };
}

function applySourceRootAttributes() {
  const restoreHtml = applyElementAttributes(document.documentElement, {
    id: sourceHtmlId,
    className: sourceHtmlClassName,
    style: sourceHtmlStyle,
  });
  const restoreBody = applyElementAttributes(document.body, {
    id: sourceBodyId,
    className: sourceBodyClassName,
    style: sourceBodyStyle,
  });

  return () => {
    restoreBody();
    restoreHtml();
  };
}

function attachInlineEventHandlers(root) {
  const cleanups = [];

  inlineEventAttributeNames.forEach((eventName) => {
    root
      .querySelectorAll(`[data-aura-on${eventName}]`)
      .forEach((element) => {
        const handlerCode = element.getAttribute(`data-aura-on${eventName}`);
        if (!handlerCode) return;

        const listener = function (event) {
          const result = Function("event", handlerCode).call(element, event);
          if (result === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
        element.addEventListener(eventName, listener);
        cleanups.push(() => element.removeEventListener(eventName, listener));
      });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function appendSourceScript(scriptInfo) {
  const script = document.createElement("script");
  if (scriptInfo.id) script.id = scriptInfo.id;
  if (scriptInfo.type) script.type = scriptInfo.type;
  if (scriptInfo.async) script.async = true;
  if (scriptInfo.defer) script.defer = true;
  if (scriptInfo.src) {
    script.src = scriptInfo.src;
  } else if (scriptInfo.content) {
    script.textContent = scriptInfo.content;
  }
  document.body.appendChild(script);
  return script;
}

export default function App() {
  useLayoutEffect(() => applySourceRootAttributes(), []);

  useEffect(() => {
    const detachInlineEventHandlers = attachInlineEventHandlers(document);
    const appendedScripts = sourceScripts
      .filter((scriptInfo) => scriptInfo.src || scriptInfo.content)
      .map(appendSourceScript);

    return () => {
      detachInlineEventHandlers();
      appendedScripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div className="aura-source-body antialiased selection:bg-[#4F46E5] selection:text-white">
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
                  <div className="flex items-center gap-3 cursor-pointer group">

                      <div className="relative w-8 h-8 text-[#4F46E5] group-hover:scale-105 transition-transform duration-300">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
                          </svg>
                      </div>
                      <span className="text-xl tracking-tight font-semibold text-gray-900">IntentStream</span>
                  </div>

                  <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
                      <a href="#" className="hover:text-gray-900 transition-colors">Platform</a>
                      <a href="#" className="hover:text-gray-900 transition-colors">Solutions</a>
                      <a href="#" className="hover:text-gray-900 transition-colors">Customers</a>
                      <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
                  </div>

                  <div className="flex items-center gap-4">
                      <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Log in</a>
                      <button className="px-5 py-2.5 rounded-full bg-[#111111] text-white hover:bg-[#4F46E5] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                          Request Demo
                      </button>
                  </div>
              </div>
          </nav>


          <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">


                  <div className="space-y-8 relative">

                      <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-60"></div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-pulse"></span>
                          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wide">Identity Resolution Live</span>
                      </div>

                      <h1 className="text-6xl md:text-7xl leading-[0.95] tracking-tight font-medium text-gray-900">
                          True 1-to-1 <br />
                          <span className="relative inline-block text-[#4F46E5]">
                              <span className="relative z-10">advertising</span>
                              <svg className="absolute bottom-2 left-0 w-full h-3 text-blue-100 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                              </svg>
                          </span><br />
                          for B2B.
                      </h1>

                      <p className="text-lg md:text-xl text-gray-500 font-light max-w-lg leading-relaxed">
                          Stop shouting into the void. Use first-party data to de-anonymize visitors and retarget them with AI-personalized ads that actually convert.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <button className="px-8 py-4 bg-[#111111] text-white rounded-full text-lg font-medium hover:bg-[#4F46E5] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group">
                              Start Retargeting <i data-lucide="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                          </button>
                          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                              See how it works
                          </button>
                      </div>

                      <p className="text-xs text-gray-400 font-medium pt-2 flex items-center gap-2">
                          <i data-lucide="check-circle-2" className="w-3 h-3 text-[#4F46E5]"></i> GDPR &amp; CCPA Compliant
                      </p>
                  </div>


                  <div className="relative">

                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[3rem] transform rotate-3 scale-95 opacity-80 -z-10"></div>


                      <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 card-shadow float-anim">

                          <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                                      <i data-lucide="globe" className="w-5 h-5 text-gray-400"></i>
                                  </div>
                                  <div className="h-px w-12 bg-gray-200 dashed"></div>
                                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center relative">
                                      <i data-lucide="scan-face" className="w-5 h-5 text-[#4F46E5]"></i>
                                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                  </div>
                                  <div className="h-px w-12 bg-gray-200 dashed"></div>
                                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white">
                                      <i data-lucide="mouse-pointer-2" className="w-5 h-5"></i>
                                  </div>
                              </div>
                              <div className="text-right">
                                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Match Rate</div>
                                  <div className="text-xl font-bold text-gray-900">68.4%</div>
                              </div>
                          </div>


                          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6 relative overflow-hidden group">
                              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide text-gray-400 border border-gray-100">AI Generated Creative</div>
                              <div className="flex gap-4 items-start">
                                  <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex items-center justify-center text-white shrink-0">
                                      <i data-lucide="zap" className="w-6 h-6"></i>
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-gray-900 text-sm mb-1">Scale your ABM efforts, Acme Corp.</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">We noticed you're exploring identity solutions. IntentStream resolves 3x more accounts than clearbit.</p>
                                      <button className="mt-3 px-3 py-1.5 bg-white border border-gray-200 text-xs font-bold rounded-md shadow-sm text-gray-900 hover:text-[#4F46E5]">Book Demo</button>
                                  </div>
                              </div>
                          </div>


                          <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                  <div className="text-xs text-gray-500 mb-1">Identified Accounts</div>
                                  <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                      1,240 <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-bold">+12%</span>
                                  </div>
                              </div>
                              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                  <div className="text-xs text-gray-500 mb-1">Cost Per Lead</div>
                                  <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                      $42 <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-bold">-35%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <div className="border-y border-gray-100 bg-gray-50/50 py-12 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 text-center">
                  <p className="text-xs font-semibold text-gray-400 mb-8 uppercase tracking-widest">Powering growth for modern B2B teams</p>
                  <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 items-center">
                      <span className="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-1"><i data-lucide="triangle" className="fill-black w-5 h-5"></i> Vercel</span>
                      <span className="text-xl font-bold text-gray-900 flex items-center gap-1"><i data-lucide="circle" className="w-5 h-5 fill-black"></i> Linear</span>
                      <span className="text-xl font-bold tracking-tight text-gray-900">LOOM</span>
                      <span className="text-xl font-semibold text-gray-900 flex items-center gap-1"><i data-lucide="box" className="w-5 h-5"></i> Dropbox</span>
                      <span className="text-xl font-bold text-gray-900 italic">Intercom</span>
                  </div>
              </div>
          </div>


          <section className="py-24 bg-white relative">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                      <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">Marketing shouldn't feel like <br /> <span className="text-gray-400 line-through decoration-red-400 decoration-2">interruption</span>.</h2>
                      <p className="text-xl text-gray-500 font-light">Buyers are fatigued by cold outreach. It’s time to move from "spray and pray" to precision.</p>
                  </div>

                  <div className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-gray-100 card-shadow">


                      <div className="p-10 md:p-16 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
                          <div className="flex items-center gap-3 mb-8">
                              <span className="w-2 h-2 rounded-full bg-red-400"></span>
                              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">The Old Way</h3>
                          </div>
                          <ul className="space-y-8">
                              <li className="flex gap-4 opacity-60">
                                  <i data-lucide="x" className="w-6 h-6 text-red-400 shrink-0"></i>
                                  <div>
                                      <strong className="block text-gray-900 text-lg mb-1">Cold Outreach Hell</strong>
                                      <p className="text-sm text-gray-500">Endless emails sent to spam. Calls ignored. Brand reputation damaged.</p>
                                  </div>
                              </li>
                              <li className="flex gap-4 opacity-60">
                                  <i data-lucide="x" className="w-6 h-6 text-red-400 shrink-0"></i>
                                  <div>
                                      <strong className="block text-gray-900 text-lg mb-1">Anonymous Traffic</strong>
                                      <p className="text-sm text-gray-500">98% of your website visitors leave without a trace. Lost revenue.</p>
                                  </div>
                              </li>
                              <li className="flex gap-4 opacity-60">
                                  <i data-lucide="x" className="w-6 h-6 text-red-400 shrink-0"></i>
                                  <div>
                                      <strong className="block text-gray-900 text-lg mb-1">Broad Ad Waste</strong>
                                      <p className="text-sm text-gray-500">Spending thousands to reach people who aren't even in your market.</p>
                                  </div>
                              </li>
                          </ul>
                      </div>


                      <div className="p-10 md:p-16 bg-white relative">
                          <div className="absolute inset-0 bg-blue-50/30 pointer-events-none"></div>
                          <div className="flex items-center gap-3 mb-8 relative z-10">
                              <span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span>
                              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">The IntentStream Way</h3>
                          </div>
                          <ul className="space-y-8 relative z-10">
                              <li className="flex gap-4">
                                  <div className="w-6 h-6 rounded-full bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                                      <i data-lucide="check" className="w-4 h-4 text-[#4F46E5] stroke-[3]"></i>
                                  </div>
                                  <div>
                                      <strong className="block text-gray-900 text-lg mb-1">Precision Targeting</strong>
                                      <p className="text-sm text-gray-500">Ads only shown to identified decision-makers at target accounts.</p>
                                  </div>
                              </li>
                              <li className="flex gap-4">
                                  <div className="w-6 h-6 rounded-full bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                                      <i data-lucide="check" className="w-4 h-4 text-[#4F46E5] stroke-[3]"></i>
                                  </div>
                                  <div>
                                      <strong className="block text-gray-900 text-lg mb-1">Identity Resolved</strong>
                                      <p className="text-sm text-gray-500">Know exactly which companies are visiting and retarget them instantly.</p>
                                  </div>
                              </li>
                              <li className="flex gap-4">
                                  <div className="w-6 h-6 rounded-full bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                                      <i data-lucide="check" className="w-4 h-4 text-[#4F46E5] stroke-[3]"></i>
                                  </div>
                                  <div>
                                      <strong className="block text-gray-900 text-lg mb-1">Account-Level ROI</strong>
                                      <p className="text-sm text-gray-500">Measure revenue influence, not just vanity clicks.</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>


          <section className="py-32 bg-[#111111] text-white rounded-[3rem] mx-2 md:mx-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-24 opacity-10">
                  <svg className="w-96 h-96 text-[#4F46E5]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.06z"></path></svg>
              </div>

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                  <div className="text-center mb-24">
                      <span className="text-[#4F46E5] font-mono text-sm uppercase tracking-widest mb-4 block">The Workflow</span>
                      <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">From anonymous <br /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">account revenue</span>.</h2>
                  </div>

                  <div className="grid lg:grid-cols-4 gap-8">

                      <div className="group relative">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
                              <i data-lucide="scan" className="w-8 h-8 text-white"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">1. Install Pixel</h3>
                          <p className="text-white/50 text-sm leading-relaxed">Place our lightweight AI pixel on your site. It starts identifying companies and decision-makers instantly.</p>
                          <div className="hidden lg:block absolute top-8 left-[60%] w-[60%] h-px bg-gradient-to-r from-white/20 to-transparent dashed-line"></div>
                      </div>


                      <div className="group relative">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
                              <i data-lucide="users" className="w-8 h-8 text-white"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">2. Resolve Identity</h3>
                          <p className="text-white/50 text-sm leading-relaxed">Our graph matches visitors to enriched profiles. Filter by revenue, industry, and role.</p>
                          <div className="hidden lg:block absolute top-8 left-[60%] w-[60%] h-px bg-gradient-to-r from-white/20 to-transparent dashed-line"></div>
                      </div>


                      <div className="group relative">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
                              <i data-lucide="wand-2" className="w-8 h-8 text-white"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">3. AI Creative</h3>
                          <p className="text-white/50 text-sm leading-relaxed">Generative AI builds 1-to-1 personalized ads for each account, served across the open web.</p>
                          <div className="hidden lg:block absolute top-8 left-[60%] w-[60%] h-px bg-gradient-to-r from-white/20 to-transparent dashed-line"></div>
                      </div>


                      <div className="group relative">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
                              <i data-lucide="bar-chart-2" className="w-8 h-8 text-white"></i>
                          </div>
                          <h3 className="text-xl font-bold mb-3">4. Measure</h3>
                          <p className="text-white/50 text-sm leading-relaxed">Track account penetration and revenue influence. See exactly which ads drove the deal.</p>
                      </div>
                  </div>
              </div>
          </section>


          <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div className="space-y-10">
                          <h2 className="text-5xl font-medium tracking-tight text-gray-900">
                              Enterprise power.<br />
                              <span className="text-gray-400">Startup agility.</span>
                          </h2>
                          <p className="text-lg text-gray-500 font-light leading-relaxed">
                              IntentStream democratizes access to sophisticated account-based marketing technology. You don't need a six-figure budget to run targeted campaigns.
                          </p>

                          <div className="space-y-6">
                              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#4F46E5] shrink-0">
                                      <i data-lucide="target" className="w-5 h-5"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-lg font-bold text-gray-900">Precision Retargeting</h4>
                                      <p className="text-sm text-gray-500 mt-1">Don't waste impressions. Only show ads to high-intent accounts that fit your ICP.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#4F46E5] shrink-0">
                                      <i data-lucide="layers" className="w-5 h-5"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-lg font-bold text-gray-900">Cross-Channel Activation</h4>
                                      <p className="text-sm text-gray-500 mt-1">Reach decision makers on LinkedIn, CTV, Display, and Mobile with unified frequency capping.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#4F46E5] shrink-0">
                                      <i data-lucide="dollar-sign" className="w-5 h-5"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-lg font-bold text-gray-900">Cost Efficiency</h4>
                                      <p className="text-sm text-gray-500 mt-1">3x lower CPMs than LinkedIn Ads with higher conversion rates due to data quality.</p>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div className="relative">
                          <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform rotate-3"></div>
                          <div className="relative bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-xl">
                              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                                  <div className="flex items-center gap-3">
                                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white">
                                          <span className="font-bold">IS</span>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-gray-900">Campaign Performance</h3>
                                          <p className="text-xs text-gray-500">Live Dashboard</p>
                                      </div>
                                  </div>
                                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
                              </div>


                              <div className="space-y-6">
                                  <div>
                                      <div className="flex justify-between text-sm mb-2">
                                          <span className="font-medium text-gray-600">Accounts Reached</span>
                                          <span className="font-bold text-gray-900">4,200</span>
                                      </div>
                                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                          <div className="h-full bg-gray-300 w-[75%]"></div>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="flex justify-between text-sm mb-2">
                                          <span className="font-medium text-gray-600">Engaged Decisions Makers</span>
                                          <span className="font-bold text-gray-900">1,850</span>
                                      </div>
                                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                          <div className="h-full bg-[#4F46E5] w-[45%]"></div>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="flex justify-between text-sm mb-2">
                                          <span className="font-medium text-gray-600">Pipeline Generated</span>
                                          <span className="font-bold text-gray-900">$1.2M</span>
                                      </div>
                                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                          <div className="h-full bg-green-500 w-[60%]"></div>
                                      </div>
                                  </div>
                              </div>

                              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex gap-4 items-center">
                                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#4F46E5]">
                                      <i data-lucide="trending-up" className="w-5 h-5"></i>
                                  </div>
                                  <div>
                                      <div className="text-sm font-bold text-gray-900">ROI Positive in 14 Days</div>
                                      <div className="text-xs text-gray-500">Average based on last 50 campaigns</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className="py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="max-w-4xl mx-auto px-6 relative z-10">
                  <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-8">
                      Ready to unmask <br />
                      <span className="text-[#4F46E5] italic">your buyers?</span>
                  </h2>
                  <p className="text-xl text-gray-500 mb-10 font-light max-w-2xl mx-auto">
                      Join the B2B teams generating 40% more pipeline with identity-based advertising.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="px-10 py-5 bg-[#111111] text-white rounded-full text-xl font-medium hover:bg-[#4F46E5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          Get a Demo
                      </button>
                      <button className="px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-full text-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                          View Pricing
                      </button>
                  </div>
              </div>
          </section>


          <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid md:grid-cols-4 gap-12 mb-20 text-sm">
                      <div className="col-span-1 md:col-span-1">
                          <div className="flex items-center gap-2 mb-6">
                              <div className="w-6 h-6 text-[#4F46E5]">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
                                  </svg>
                              </div>
                              <span className="font-bold text-gray-900 text-lg tracking-tight">IntentStream</span>
                          </div>
                          <p className="text-gray-500 leading-relaxed">The operating system for B2B advertising. Identity, Targeting, and Attribution in one platform.</p>
                      </div>

                      <div>
                          <h5 className="font-bold text-gray-900 mb-4">Product</h5>
                          <ul className="space-y-3 text-gray-500">
                              <li><a href="#" className="hover:text-[#4F46E5]">Identity Graph</a></li>
                              <li><a href="#" className="hover:text-[#4F46E5]">Ad Studio</a></li>
                              <li><a href="#" className="hover:text-[#4F46E5]">Analytics</a></li>
                              <li><a href="#" className="hover:text-[#4F46E5]">Integrations</a></li>
                          </ul>
                      </div>

                      <div>
                          <h5 className="font-bold text-gray-900 mb-4">Company</h5>
                          <ul className="space-y-3 text-gray-500">
                              <li><a href="#" className="hover:text-[#4F46E5]">About</a></li>
                              <li><a href="#" className="hover:text-[#4F46E5]">Customers</a></li>
                              <li><a href="#" className="hover:text-[#4F46E5]">Careers</a></li>
                              <li><a href="#" className="hover:text-[#4F46E5]">Contact</a></li>
                          </ul>
                      </div>

                      <div>
                          <h5 className="font-bold text-gray-900 mb-4">Connect</h5>
                          <div className="flex gap-4">
                              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#4F46E5] hover:text-white transition-colors">
                                  <i data-lucide="twitter" className="w-4 h-4"></i>
                              </a>
                              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#4F46E5] hover:text-white transition-colors">
                                  <i data-lucide="linkedin" className="w-4 h-4"></i>
                              </a>
                          </div>
                      </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                      <p>© 2024 IntentStream Inc. All rights reserved.</p>
                      <div className="flex gap-6 mt-4 md:mt-0">
                          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                          <a href="#" className="hover:text-gray-900">Terms of Service</a>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  );
}