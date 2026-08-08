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
    "src": "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js\",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();\n        "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      lucide.createIcons();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      // Initialize Lucide Icons\n      lucide.createIcons();\n\n      // Simple Intersection Observer for scroll animations\n      const observerOptions = {\n          root: null,\n          rootMargin: '0px',\n          threshold: 0.1\n      };\n\n      const observer = new IntersectionObserver((entries) => {\n          entries.forEach(entry => {\n              if (entry.isIntersecting) {\n                  entry.target.style.animationPlayState = 'running';\n                  observer.unobserve(entry.target);\n              }\n          });\n      }, observerOptions);\n\n      document.querySelectorAll('.animate-enter').forEach(el => {\n          el.style.animationPlayState = 'paused';\n          observer.observe(el);\n      });\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "min-h-screen relative selection:bg-emerald-900 selection:text-emerald-50";
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
    <div className="aura-source-body min-h-screen relative selection:bg-emerald-900 selection:text-emerald-50">
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"}}>
            <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
              <div data-us-project="EET25BiXxR2StNXZvAzF" className="absolute w-full h-full left-0 top-0 -z-10"></div>

            </div>
          </div>


          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 grid-bg"></div>

            <div className="container mx-auto h-full relative border-x border-white/[0.03]">
              <div className="grid-line left-1/4"></div>
              <div className="grid-line left-2/4"></div>
              <div className="grid-line left-3/4"></div>


              <div className="absolute bottom-32 left-0 -ml-3 text-[10px] text-gray-700 font-mono">
                01
              </div>
              <div className="absolute bottom-32 left-1/4 -ml-3 text-[10px] text-gray-700 font-mono">
                02
              </div>
              <div className="absolute bottom-32 left-2/4 -ml-3 text-[10px] text-gray-700 font-mono">
                03
              </div>
              <div className="absolute bottom-32 left-3/4 -ml-3 text-[10px] text-gray-700 font-mono">
                04
              </div>
              <div className="absolute bottom-32 right-0 -mr-3 text-[10px] text-gray-700 font-mono">
                05
              </div>
            </div>
          </div>


          <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-2 py-1.5 flex items-center gap-6 shadow-2xl shadow-black/50">

              <a href="#" className="flex items-center gap-2 px-3 group">
                <div className="w-5 h-5 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-md flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-4 group-hover:translate-x-4 transition-transform duration-500"></div>
                </div>
                <span className="text-sm font-semibold text-white tracking-tight">
                  Aura
                </span>
              </a>


              <div className="hidden md:flex items-center gap-1">
                <a href="#" className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
                  Philosophy
                </a>
                <a href="#" className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
                  Ecosystem
                </a>
                <a href="#" className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
                  Rates
                </a>
              </div>


              <a href="#" className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 hover:bg-gray-200 transition-colors shadow-lg shadow-emerald-500/10">
                Start Engine
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-3 h-3 ml-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </nav>


          <main className="flex flex-col z-10 pt-32 pb-16 relative justify-center">
            <div className="container md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

              <div className="flex flex-col order-2 lg:col-span-7 lg:order-1 my-24 relative gap-x-8 gap-y-8">

                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-emerald-500/80 font-semibold uppercase">
                    System Operational
                  </span>
                </div>


                <h1 className="font-serif-italic text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 text-glow">
                    Architect your wealth
                  </span>
                  <br />
                  <span className="text-white">with absolute precision.</span>
                </h1>


                <p className="text-lg md:text-xl text-gray-400 font-normal max-w-xl leading-relaxed">
                  Simulate advanced market conditions to optimize asset allocation
                  strategies.
                </p>


                <div className="flex flex-col sm:flex-row pt-4 gap-x-6 gap-y-6 items-center sm:items-stretch">

                  <div className="btn-wrapper h-[56px] flex items-center">
                    <button className="btn md:px-8 md:py-3 focus:outline-none sm:w-auto w-full h-full pt-3 pr-5 pb-3 pl-5" type="button" aria-label="Initialize" title="Initialize">

                      <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>

                      <div className="txt-wrapper">

                        <div className="txt-1">
                          <span className="btn-letter">L</span>
                          <span className="btn-letter">a</span>
                          <span className="btn-letter">u</span>
                          <span className="btn-letter">n</span>
                          <span className="btn-letter">c</span>
                          <span className="btn-letter">h</span>
                          <span className="btn-letter">&nbsp;</span>
                        </div>

                        <div className="txt-2">
                          <span className="btn-letter">C</span>
                          <span className="btn-letter">a</span>
                          <span className="btn-letter">l</span>
                          <span className="btn-letter">c</span>
                          <span className="btn-letter">u</span>
                          <span className="btn-letter">l</span>
                          <span className="btn-letter">a</span>
                          <span className="btn-letter">t</span>
                          <span className="btn-letter">i</span>
                          <span className="btn-letter">n</span>
                          <span className="btn-letter">g</span>
                        </div>
                      </div>
                    </button>
                  </div>



                  <button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center h-[56px] w-full sm:w-auto">

                    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#10b981_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>


                    <span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>


                    <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-semibold text-gray-300 tracking-widest bg-black/90 backdrop-blur-xl w-full h-full rounded-full px-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <span className="relative z-10">View Ecosystem</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                        <path d="m9 18 6-6-6-6" className=""></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>


              <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" fill="none">
                  <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(16, 185, 129, 0)"></stop>
                      <stop offset="50%" stopColor="#10b981"></stop>
                      <stop offset="100%" stopColor="rgba(16, 185, 129, 0)"></stop>
                    </linearGradient>
                  </defs>


                  <path d="M0,100 C150,100 200,200 300,300" stroke="#1f2937" strokeWidth="1" fill="none"></path>
                  <path className="beam-path beam-path-delay-1" d="M0,100 C150,100 200,200 300,300" stroke="url(#beam-gradient)" strokeWidth="2" fill="none" strokeLinecap="round"></path>


                  <path d="M600,500 C450,500 400,400 300,300" stroke="#1f2937" strokeWidth="1" fill="none"></path>
                  <path className="beam-path beam-path-delay-2" d="M600,500 C450,500 400,400 300,300" stroke="url(#beam-gradient)" strokeWidth="2" fill="none" strokeLinecap="round"></path>


                  <path d="M600,100 C500,100 400,200 300,300" stroke="#1f2937" strokeWidth="1" fill="none"></path>
                  <path className="beam-path beam-path-delay-3" d="M600,100 C500,100 400,200 300,300" stroke="url(#beam-gradient)" strokeWidth="2" fill="none" strokeLinecap="round"></path>


                  <path d="M0,500 C100,500 200,400 300,300" stroke="#1f2937" strokeWidth="1" fill="none"></path>
                </svg>


                <div className="relative w-64 h-64 flex items-center justify-center z-10">

                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/5"></div>


                  <div className="absolute inset-0 rounded-full border border-dashed border-gray-700 animate-[spin_20s_linear_infinite]"></div>

                  <div className="absolute inset-8 rounded-full border border-gray-800"></div>

                  <div className="absolute inset-16 rounded-full border border-gray-700 flex items-center justify-center bg-gray-900 shadow-2xl">

                    <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] relative z-10">
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-50"></div>
                    </div>
                  </div>


                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-700"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-700"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-700"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-700"></div>


                  <div className="absolute -top-12 -left-4 bg-gray-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded shadow-lg">
                    <span className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase">
                      Zero Latency
                    </span>
                  </div>
                  <div className="absolute -bottom-12 -right-4 bg-gray-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded shadow-lg">
                    <span className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase">
                      Defi Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>


          <section className="relative z-20 w-full overflow-hidden border-y border-white/5 bg-black/50 py-10 animate-enter delay-200 border-emerald-500/50" style={{"animationPlayState": "running"}}>
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"></div>
            <div className="marquee-container flex overflow-hidden">

              <div className="animate-marquee flex gap-16 md:gap-24 items-center whitespace-nowrap px-12">

                <div className="flex items-center gap-16 md:gap-24 text-zinc-600">
                  <iconify-icon icon="logos:vercel" width="96" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:stripe" width="80" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="simple-icons:openai" width="96" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:microsoft" width="96" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:google" width="90" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="simple-icons:github" width="80" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:airbnb" width="96" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:linear" width="96" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                </div>

                <div className="flex items-center gap-16 md:gap-24 text-zinc-600">
                  <iconify-icon icon="logos:vercel" width="96" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:stripe" width="80" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="simple-icons:openai" width="96" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:microsoft" width="96" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:google" width="90" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="simple-icons:github" width="80" height="36" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:airbnb" width="96" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                  <iconify-icon icon="logos:linear" width="96" height="30" className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></iconify-icon>
                </div>
              </div>
            </div>
          </section>


          <section className="z-10 bg-black/20 pt-24 pb-24 relative">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">

                <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-300" style={{"animationPlayState": "paused"}}>
                  <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-zinc-100 tracking-tight mb-2">
                        Algorithmic Portfolio Modeling.
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                        A powerful VS Code extension that unlocks a convenient
                        graphical editor.
                      </p>
                    </div>


                    <div className="relative h-48 w-full mt-auto border border-white/5 rounded-xl bg-black/40 p-4 overflow-hidden">

                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{"opacity": "0.3"}}>
                        <path d="M70 120 C 120 120, 120 60, 170 60" stroke="#525252" strokeWidth="1" fill="none"></path>
                        <path d="M260 60 L 320 60" stroke="#525252" strokeWidth="1" fill="none"></path>
                        <path d="M70 120 C 120 120, 120 140, 170 140" stroke="#525252" strokeWidth="1" fill="none"></path>
                      </svg>


                      <div className="absolute top-[40px] left-[170px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
                        <iconify-icon icon="solar:layers-minimalistic-linear" className="text-xs text-emerald-400"></iconify-icon>
                        <span className="text-[10px] text-zinc-300">allocation</span>
                        <div className="ml-auto flex gap-1 opacity-50">
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                        </div>
                      </div>

                      <div className="absolute top-[40px] left-[320px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
                        <iconify-icon icon="solar:layers-minimalistic-linear" className="text-xs text-emerald-400"></iconify-icon>
                        <span className="text-[10px] text-zinc-300">forecast</span>
                        <div className="ml-auto flex gap-1 opacity-50">
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                        </div>
                      </div>

                      <div className="absolute top-[100px] left-[20px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
                        <iconify-icon icon="solar:chip-linear" className="text-blue-400 text-xs"></iconify-icon>
                        <span className="text-[10px] text-zinc-300">my strategy</span>
                        <div className="ml-auto flex gap-1 opacity-50">
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                        </div>
                      </div>

                      <div className="absolute top-[120px] left-[170px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
                        <iconify-icon icon="solar:chip-linear" className="text-blue-400 text-xs"></iconify-icon>
                        <span className="text-[10px] text-zinc-300">ledger</span>
                        <div className="ml-auto flex gap-1 opacity-50">
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                          <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-400" style={{"animationPlayState": "paused"}}>
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                      Yield Harvesting.
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                      Execute harvesting calls at mathematically optimal intervals.
                    </p>


                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-32 h-32 flex items-center justify-center">

                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="64" cy="64" r="60" stroke="#27272a" strokeWidth="4" fill="none"></circle>
                          <circle cx="64" cy="64" r="60" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="377" strokeDashoffset="100" className="transition-all duration-1000 ease-out"></circle>
                        </svg>

                        <div className="absolute inset-4 rounded-full bg-zinc-900 flex flex-col items-center justify-center shadow-inner border border-white/5">
                          <span className="text-2xl font-light text-white tracking-widest font-mono">
                            09:16
                          </span>
                          <div className="flex items-center gap-1 mt-1 text-zinc-500">
                            <iconify-icon icon="solar:bell-linear" className="text-[10px]"></iconify-icon>
                            <span className="text-[10px]">11:51</span>
                          </div>
                        </div>

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1 h-2 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-500" style={{"animationPlayState": "paused"}}>
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                      Interface Customization.
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      Personalize your trading terminal with modular themes and
                      layouts.
                    </p>


                    <div className="flex-1 flex flex-col items-center justify-center gap-4">

                      <div className="bg-zinc-900 border border-white/10 rounded-lg p-2 flex items-center gap-3 w-full max-w-[180px]">
                        <span className="text-[10px] text-zinc-400">Theme</span>
                        <div className="flex gap-2 ml-auto">
                          <div className="w-3 h-3 rounded-full ring-2 ring-white/10 bg-emerald-500"></div>
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                          <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                        </div>
                      </div>

                      <div className="w-full max-w-[180px]">
                        <button className="w-full py-2 rounded-full border border-sky-500/50 text-sky-400 text-xs hover:bg-sky-500/10 transition-colors">
                          Connect
                        </button>
                      </div>

                      <div className="w-full max-w-[180px] bg-zinc-800/50 rounded-lg p-2 border border-white/5 flex items-center justify-between text-xs text-zinc-300">
                        <span>Mainnet</span>
                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-600" style={{"animationPlayState": "paused"}}>
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                      Global Settlement.
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                      Instant finality across liquidity pools with zero latency.
                    </p>


                    <div className="relative flex-1 bg-zinc-900/50 rounded-lg border border-white/5 p-4 text-[10px]">
                      <div className="grid grid-cols-2 gap-y-3 text-zinc-500 mb-2 border-b border-white/5 pb-2">
                        <span>Pair</span>
                        <span>Status</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 text-zinc-300">
                        <div className="py-1">ETH-USDC</div>
                        <div className="py-1 text-emerald-500">Settled</div>
                        <div className="py-1">WBTC-DAI</div>
                        <div className="py-1">Pending</div>
                        <div className="py-1">AURA-ETH</div>
                        <div className="py-1 text-emerald-500">Settled</div>
                        <div className="py-1">SOL-USDT</div>
                        <div className="py-1 text-zinc-500">Failed</div>
                      </div>


                      <div className="absolute top-[60%] left-[-10px] flex items-center z-20 animate-pulse">
                        <div className="text-white text-[9px] px-1.5 py-0.5 rounded-full rounded-tl-none shadow-lg bg-emerald-500">
                          User 1
                        </div>
                        <svg className="w-3 h-3 -ml-1 -mt-3 rotate-12 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                        </svg>
                      </div>

                      <div className="absolute top-[35%] right-[20px] flex items-center z-20 animate-pulse delay-700">
                        <svg className="w-3 h-3 text-sky-500 -mr-1 -mt-3 -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                        </svg>
                        <div className="bg-sky-500 text-white text-[9px] px-1.5 py-0.5 rounded-full rounded-tr-none shadow-lg">
                          User 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-600" style={{"animationPlayState": "paused"}}>
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                      Flash Execution.
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      Run atomic transactions in the background without blocking the
                      UI.
                    </p>


                    <div className="flex-1 flex items-center justify-center relative">

                      <div className="absolute inset-0 blur-3xl rounded-full bg-emerald-500/10"></div>

                      <button className="relative bg-gradient-to-b from-emerald-900/80 to-emerald-950/80 border border-emerald-500/30 text-emerald-100 px-6 py-2.5 rounded-full text-xs font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center gap-2 hover:scale-105 transition-transform">
                        <span>Execute Swap</span>

                        <svg className="absolute -bottom-4 -right-3 w-4 h-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.6z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>


                <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-500" style={{"animationPlayState": "paused"}}>
                  <div className="p-8 h-full flex flex-col relative z-10">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-zinc-100 tracking-tight mb-2">
                        AI-Driven Market Intelligence.
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                        Leverage LLM-based agents to explore on-chain data using plain
                        English.
                      </p>
                    </div>


                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                      <div className="hidden sm:block text-[10px] text-zinc-600 font-mono space-y-2 opacity-30">
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>BLOCK</span>
                          <span>VOLUME</span>
                        </div>
                        <div className="flex justify-between">
                          <span>28768074</span>
                          <span>$234</span>
                        </div>
                        <div className="flex justify-between">
                          <span>31209300</span>
                          <span>$1,040</span>
                        </div>
                        <div className="flex justify-between">
                          <span>45098812</span>
                          <span>$890</span>
                        </div>
                        <div className="flex justify-between">
                          <span>01283391</span>
                          <span>$450</span>
                        </div>
                      </div>


                      <div className="relative bg-zinc-900 border border-white/10 rounded-xl p-4 flex flex-col shadow-2xl">
                        <div className="mb-4">
                          <label className="text-[10px] text-zinc-500 block mb-1.5">
                            Enter your query here
                          </label>
                          <div className="relative">
                            <div className="w-full bg-black/50 border rounded-lg px-3 py-2 text-xs text-zinc-300 flex items-center">
                              analyze liquidity depth for ETH/USDC
                              <span className="ml-0.5 w-0.5 h-3 animate-pulse"></span>
                            </div>
                          </div>
                        </div>


                        <div className="flex-1 bg-black/20 rounded border border-white/5 p-2 relative min-h-[100px]">
                          <div className="text-[9px] text-zinc-500 mb-2">
                            Liquidity Depth
                          </div>

                          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">

                            <line x1="0" y1="10" x2="100" y2="10" stroke="#333" strokeWidth="0.5"></line>
                            <line x1="0" y1="30" x2="100" y2="30" stroke="#333" strokeWidth="0.5"></line>


                            <polyline points="0,45 20,40 40,25 60,35 80,10 100,15" fill="none" stroke="#10b981" strokeWidth="1.5"></polyline>

                            <polyline points="0,40 20,35 40,38 60,25 80,30 100,20" fill="none" stroke="#0ea5e9" strokeWidth="1.5"></polyline>


                            <circle cx="20" cy="40" r="1.5" fill="#10b981"></circle>
                            <circle cx="60" cy="35" r="1.5" fill="#10b981"></circle>
                            <circle cx="60" cy="25" r="1.5" fill="#0ea5e9"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="z-10 overflow-hidden bg-zinc-950/50 border-white/5 border-t pt-32 pb-32 relative">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:200px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                <div className="lg:col-span-2 hidden lg:block">
                  <div className="sticky top-32">
                    <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Protocol Engine
                    </span>
                  </div>
                </div>


                <div className="lg:col-span-10">

                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-zinc-700 tracking-tight leading-[1.1] mb-20 select-none">
                    The execution layer engineered for
                    <span className="text-zinc-100 font-serif-italic font-normal cursor-default transition-colors duration-300">
                      Security
                    </span>
                    ,
                    <span className="hover:text-zinc-500 transition-colors duration-300 cursor-pointer">
                      Velocity
                    </span>
                    ,
                    <span className="hover:text-zinc-500 transition-colors duration-300 cursor-pointer">
                      Liquidity
                    </span>
                    ,
                    <span className="text-zinc-700">&amp;</span>
                    <span className="hover:text-zinc-500 transition-colors duration-300 cursor-pointer">
                      Yield
                    </span>
                    at infinite scale.
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/5 pt-12">

                    <div className="flex flex-col justify-between h-full min-h-[400px]">
                      <div className="">

                        <div className="flex items-center gap-2 mb-10">
                          <button className="w-8 h-8 rounded-full bg-emerald-500 text-black text-xs font-semibold flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-transform hover:scale-110">
                            01
                          </button>
                          <button className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-xs font-medium flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-300 transition-all">
                            02
                          </button>
                          <button className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-xs font-medium flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-300 transition-all">
                            03
                          </button>
                          <button className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-xs font-medium flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-300 transition-all">
                            04
                          </button>
                        </div>


                        <div className="mb-12">
                          <h3 className="text-xl text-white font-medium mb-4 tracking-tight">
                            Deterministic Settlement
                          </h3>
                          <p className="text-base text-zinc-400 leading-relaxed max-w-md">
                            Powered by zero-knowledge proofs and formal verification,
                            ensuring every state transition is mathematically valid
                            before execution. We eliminate probabilistic outcomes in
                            favor of absolute deterministic finality.
                          </p>
                        </div>
                      </div>


                      <div className="pt-10 border-t border-white/5">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-6">
                          Verified by Industry Leaders
                        </p>
                        <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                          <iconify-icon icon="logos:chainlink" width="96" height="30"></iconify-icon>
                          <iconify-icon icon="logos:ethereum" width="96" height="30"></iconify-icon>
                          <iconify-icon icon="logos:consensys" width="96" height="30"></iconify-icon>
                        </div>
                      </div>
                    </div>


                    <div className="relative h-full min-h-[400px] bg-zinc-900/20 rounded-3xl border border-white/5 overflow-hidden group">

                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>


                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">

                          <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse"></div>


                          <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110">
                            <iconify-icon icon="solar:shield-check-linear" className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]" width="160"></iconify-icon>
                          </div>


                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>


                          <div className="absolute -top-16 -right-16 bg-zinc-900 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-2xl animate-bounce delay-700 z-20">
                            <iconify-icon icon="solar:lock-password-broken" className="text-emerald-400 text-sm"></iconify-icon>
                            <span className="text-[10px] text-zinc-300 font-mono uppercase">
                              Audit Complete
                            </span>
                          </div>

                          <div className="absolute -bottom-10 -left-12 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-2xl animate-bounce delay-100 z-20">
                            <iconify-icon icon="solar:code-scan-linear" className="text-blue-400 text-sm"></iconify-icon>
                            <span className="text-[10px] text-zinc-300 font-mono uppercase">
                              On-Chain Verified
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>




          <section className="relative py-32 border-t border-white/5 overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase tracking-widest font-semibold mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Public Access Live
              </div>

              <h2 className="text-5xl md:text-7xl font-serif-italic text-white mb-8 tracking-tight">
                Begin your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 text-glow">
                  ascension.
                </span>
              </h2>

              <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                The protocol is ready. Integrate your assets into the Aura ecosystem
                and experience the friction-less future of liquidity.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Initialize Protocol
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                <button className="px-8 py-4 text-white hover:text-emerald-400 font-medium transition-colors flex items-center gap-2">
                  Read Documentation
                  <iconify-icon icon="solar:book-linear" className="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </section>


          <footer className="z-10 bg-[#050505] border-white/5 border-t pt-20 pb-10 relative">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                <div className="lg:col-span-2">
                  <a href="#" className="flex items-center gap-2 mb-6 group w-fit">
                    <div className="w-6 h-6 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-md flex items-center justify-center relative overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-4 group-hover:translate-x-4 transition-transform duration-500"></div>
                    </div>
                    <span className="text-lg font-semibold text-white tracking-tight">
                      Aura
                    </span>
                  </a>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
                    The definitive interface for next-generation financial protocols.
                    Built for speed, security, and absolute sovereignty.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                      <iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
                    </a>
                    <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                      <iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
                    </a>
                    <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                      <iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
                    </a>
                  </div>
                </div>


                <div>
                  <h4 className="text-white font-medium mb-6">Platform</h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Markets
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Exchange
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Earn
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Governance
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h4 className="text-white font-medium mb-6">Developers</h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        API Reference
                      </a>
                    </li>
                    <li className="">
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Audits
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-6">Company</h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Manifesto
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Careers
                      </a>
                      <span className="text-[9px] bg-emerald-900 text-emerald-300 px-1.5 py-0.5 rounded ml-1">
                        Hiring
                      </span>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-6">Legal</h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-600">
                  © 2024 Aura Protocol. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs text-zinc-400 font-mono">
                    v2.4.0
                    <span className="text-zinc-600">::</span>
                    MAINNET
                  </span>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}