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
    "content": "\n    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js\",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n  function togglePricing() {\n    const checkbox = document.getElementById('toggle-checkbox');\n    const pill = document.getElementById('toggle-pill');\n    const labelMo = document.getElementById('label-mo');\n    const labelYr = document.getElementById('label-yr');\n    const prices = document.querySelectorAll('.price-val');\n\n    if (!checkbox || !pill || !labelMo || !labelYr || !prices.length) return;\n\n    const isYearly = checkbox.checked;\n\n    if (isYearly) {\n      pill.style.transform = 'translateX(100%)';\n\n      labelMo.classList.remove('text-slate-800');\n      labelMo.classList.add('text-slate-400');\n\n      labelYr.classList.remove('text-slate-400');\n      labelYr.classList.add('text-slate-800');\n    } else {\n      pill.style.transform = 'translateX(0)';\n\n      labelMo.classList.remove('text-slate-400');\n      labelMo.classList.add('text-slate-800');\n\n      labelYr.classList.remove('text-slate-800');\n      labelYr.classList.add('text-slate-400');\n    }\n\n    prices.forEach(el => {\n      const targetPrice = isYearly ? el.dataset.yearly : el.dataset.monthly;\n      const end = parseInt(targetPrice, 10);\n      let start = parseInt(el.textContent.trim(), 10);\n\n      if (!Number.isFinite(start) || !Number.isFinite(end) || start === end) {\n        el.textContent = targetPrice;\n        return;\n      }\n\n      const duration = 260;\n      const distance = Math.abs(end - start);\n      const stepTime = Math.max(6, Math.floor(duration / distance));\n\n      const timer = setInterval(() => {\n        start = start < end ? start + 1 : start - 1;\n        el.textContent = start;\n\n        if (start === end) {\n          clearInterval(timer);\n        }\n      }, stepTime);\n    });\n  }\n"
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-[#f3f5f8] text-slate-900 font-['Inter',sans-serif] min-h-screen relative overflow-x-hidden antialiased selection:bg-blue-100 selection:text-blue-900";
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
    <div className="aura-source-body bg-[#f3f5f8] text-slate-900 font-['Inter',sans-serif] min-h-screen relative overflow-x-hidden antialiased selection:bg-blue-100 selection:text-blue-900">
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-80" data-alpha-mask="80" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
        <div data-us-project="ty3N7ZPaIU7KlWixQFIc" className="absolute w-full h-full left-0 top-0 -z-10"></div>

      </div></div>





        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

          <div className="aura-bg-blob-one absolute top-[-12%] left-[-12%] w-[52vw] h-[52vw] rounded-full bg-blue-200/35 blur-[7.5rem] will-change-transform">
          </div>


          <div className="aura-bg-blob-two absolute bottom-[-18%] right-[-10%] w-[62vw] h-[62vw] rounded-full bg-sky-200/22 blur-[8.75rem] will-change-transform">
          </div>


          <div className="aura-bg-blob-three absolute top-[36%] left-[36%] w-[30vw] h-[30vw] rounded-full bg-white/55 blur-[5rem] will-change-transform">
          </div>


          <div className="aura-bg-dots absolute inset-0 opacity-[0.22]" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.09) 1px, transparent 0)", "backgroundSize": "2rem 2rem"}}>
          </div>
        </div>





        <header className="fixed top-0 left-0 right-0 z-50">

          <nav className="max-w-7xl mx-auto px-6 pt-5">

            <div className="relative overflow-hidden rounded-full bg-white/84 backdrop-blur-2xl border border-white/90 shadow-[0_14px_38px_-22px_rgba(15,23,42,0.42),inset_0_1px_0_rgba(255,255,255,1)] px-4 py-3">



              <div className="absolute inset-0 rounded-full bg-white/36 pointer-events-none"></div>



              <div className="relative z-10 flex items-center justify-between">



                <a href="#" className="flex items-center gap-3 group">

                  <span className="w-9 h-9 rounded-full bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.06),inset_0_1px_0_white] flex items-center justify-center">

                    <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.08em] text-blue-600">

                      AU

                    </span>

                  </span>

                  <span className="flex flex-col justify-center leading-none">

                    <span className="font-['JetBrains_Mono',monospace] text-sm font-semibold tracking-[-0.08em] text-slate-950 group-hover:text-blue-600 transition-colors">

                      AURA

                    </span>

                  <span className="mt-0.5 text-[10px] font-light tracking-[-0.03em] text-slate-400">

                      Personal AI

                    </span>

                  </span>

                </a>



                <div className="hidden md:flex items-center gap-7 text-xs text-slate-600 font-normal">

                  <a href="#features" className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">

                    Features

                  </a>

                  <a href="#workflow" className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">

                    Workflow

                  </a>

                  <a href="#built-for" className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">

                    Built For

                  </a>

                  <a href="#privacy" className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">

                    Privacy

                  </a>

                  <a href="#pricing" className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">

                    Pricing

                  </a>

                </div>



                <div className="flex items-center gap-2">

                  <a href="#workflow" className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-xs text-slate-700 bg-white/78 border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_white] hover:bg-white hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300">

                    Explore Workflow

                  </a>

                  <a href="#pricing" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs text-white bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 shadow-[0_5px_14px_rgba(59,130,246,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-300">

                    Try AURA Free

                  </a>

                </div>

              </div>

            </div>

          </nav>

        </header>


        <main className="relative z-10">





          <section className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-20">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">


              <div className="text-center lg:text-left">


                <div className="inline-flex items-center gap-2 rounded-full bg-white/75 border border-white px-3.5 py-2 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.3),inset_0_1px_0_white] mb-8">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-b from-blue-50 to-white border border-blue-100 shadow-[inset_0_1px_0_white] flex items-center justify-center">
                    <iconify-icon icon="solar:stars-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>
                  </span>

                  <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-slate-500">
                    PREMIUM PERSONAL AI
                  </span>
                </div>


                <h1 className="text-[4rem] md:text-[5.2rem] lg:text-[6.4rem] font-light tracking-[-0.075em] leading-[0.92] text-slate-950" style={{"textShadow": "0 1px 1px rgba(255,255,255,0.8)"}}>
                  <span className="block whitespace-nowrap">
                    Think clearer.
                  </span>

                  <span className="block whitespace-nowrap mt-2">
                    Stay organized.
                  </span>

                  <span className="inline-flex whitespace-nowrap mt-4 rounded-[1.35rem] bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 px-4 md:px-5 pb-2.5 pt-1.5 text-white font-normal shadow-[0_18px_38px_-20px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.38)] drop-shadow-[0_1px_1px_rgba(15,23,42,0.18)]">
                    Move faster.
                  </span>
                </h1>

                <p className="mt-8 text-base md:text-lg leading-8 text-slate-600 font-light max-w-2xl mx-auto lg:mx-0">
                  AURA is your personal AI assistant for capturing thoughts,
                  summarizing notes, managing priorities, and turning scattered
                  information into calm, useful action.
                </p>


                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white text-sm font-normal shadow-[0_10px_24px_rgba(59,130,246,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)] transition-all duration-300">
                    Start Free Trial
                    <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-lg"></iconify-icon>
                  </a>

                  <a href="#workflow" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 text-sm font-normal shadow-[0_4px_12px_rgba(15,23,42,0.05),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">
                    <iconify-icon icon="solar:play-circle-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>
                    See How It Works
                  </a>
                </div>


                <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 font-light">
                  <span className="inline-flex items-center gap-2">
                    <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>
                    Private by design
                  </span>

                  <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>

                  <span className="inline-flex items-center gap-2">
                    <iconify-icon icon="solar:devices-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>
                    Works across desktop and mobile
                  </span>

                  <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>

                  <span className="inline-flex items-center gap-2">
                    <iconify-icon icon="solar:bolt-circle-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>
                    Built for busy minds
                  </span>
                </div>
              </div>


              <div className="relative lg:pl-4">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-white/20 to-sky-200/30 blur-3xl">
                </div>

                <div className="relative rounded-[2rem] bg-[#f8fafc] border border-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35),inset_0_2px_0_rgba(255,255,255,1)] p-4 sm:p-5">


                  <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">


                    <div className="aura-float-bubble absolute -right-7 top-10 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white] min-w-[12rem]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                          <iconify-icon icon="solar:bell-bing-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-emerald-500"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-xs text-slate-900 font-normal">
                            Follow-up found
                          </p>
                          <p className="text-xs text-slate-400 font-light">
                            Client reply due today
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="aura-float-bubble absolute -right-7 top-[35%] rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white] min-w-[12rem]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                          <iconify-icon icon="solar:document-text-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-xs text-slate-900 font-normal">
                            Summary ready
                          </p>
                          <p className="text-xs text-slate-400 font-light">
                            18 pages into 9 bullets
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="aura-float-bubble absolute -right-7 bottom-[26%] rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white] min-w-[12rem]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                          <iconify-icon icon="solar:calendar-mark-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-indigo-500"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-xs text-slate-900 font-normal">
                            Focus block saved
                          </p>
                          <p className="text-xs text-slate-400 font-light">
                            10:30–12:00 protected
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="aura-float-bubble absolute left-8 -bottom-6 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white] min-w-[12rem]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                          <iconify-icon icon="solar:chat-round-dots-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-slate-600"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-xs text-slate-900 font-normal">
                            Reply drafted
                          </p>
                          <p className="text-xs text-slate-400 font-light">
                            Ready for review
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="rounded-[1.5rem] bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-[inset_0_1px_0_white] overflow-hidden">


                    <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
                      </div>

                      <div className="font-['JetBrains_Mono',monospace] text-xs text-slate-400 tracking-[-0.05em]">
                        DAILY BRIEF
                      </div>
                    </div>


                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <p className="text-xs text-slate-400 font-light mb-1">
                            Today
                          </p>

                          <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-900">
                            Your priorities are ready.
                          </h2>
                        </div>

                        <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-[inset_0_1px_0_white]">
                          <iconify-icon icon="solar:stars-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>
                        </div>
                      </div>

                      <div className="grid gap-3">


                        <div className="aura-hero-card rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                              <iconify-icon icon="solar:microphone-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>
                            </div>

                            <div>
                              <p className="text-sm font-normal text-slate-800">
                                Captured idea
                              </p>

                              <p className="text-xs leading-5 text-slate-500 mt-1 font-light">
                                “Package last week’s customer calls into a launch
                                positioning memo.”
                              </p>
                            </div>
                          </div>
                        </div>


                        <div className="aura-hero-card rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                              <iconify-icon icon="solar:checklist-minimalistic-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-indigo-500"></iconify-icon>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-normal text-slate-800">
                                  Next actions
                                </p>

                                <span className="text-xs text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2 py-1">
                                  4 found
                                </span>
                              </div>

                              <div className="mt-3 space-y-2">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                  Send founder update by 4 PM
                                </div>

                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                  Prepare notes for strategy review
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="grid sm:grid-cols-2 gap-3">



                          <div className="aura-hero-card relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-200 text-slate-900 border border-blue-100 p-4 shadow-[0_12px_28px_-16px_rgba(59,130,246,0.24),inset_0_1px_0_white]">





                            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-300/30 blur-2xl pointer-events-none"></div>

                            <div className="relative flex items-start justify-between gap-3">

                              <div>

                                <div className="flex items-center gap-2">

                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"></span>

                                  <p className="text-xs text-slate-500 font-light">

                                    Focus window

                                  </p>

                                </div>

                                <p className="mt-2 text-2xl font-light tracking-tight text-slate-950">

                                  10:30–12:00

                                </p>

                              </div>

                              <div className="w-8 h-8 rounded-xl bg-white/80 border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">

                                <iconify-icon icon="solar:lock-keyhole-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                              </div>

                            </div>

                            <div className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/70 border border-white px-2.5 py-1 text-[10px] text-slate-500 shadow-[inset_0_1px_0_white]">

                              <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-xs text-blue-500"></iconify-icon>

                              Protected for deep work

                            </div>

                          </div>


                          <div className="aura-hero-card rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 text-white border border-blue-700 p-4 shadow-[0_10px_24px_-14px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.30)]">
                            <p className="text-xs text-blue-100 font-light">
                              Suggested reply
                            </p>

                            <p className="mt-1 text-sm leading-5 font-light">
                              Drafted from context, ready to edit.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>



          <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="flex flex-col z-10 w-full relative gap-y-16">



              <div className="max-w-3xl">

                <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

                  WHY IT MATTERS

                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl">
                  Your work does not
                  <span className="block text-slate-950">arrive neatly.</span>
                </h2>

                <p className="mt-5 text-base md:text-lg leading-8 text-slate-600 font-light max-w-2xl">

                  It arrives as notes, messages, meetings, documents, half-ideas, and forgotten follow-ups.

                  AURA turns that scattered input into priorities, summaries, reminders, and next actions you can actually use.

                </p>

              </div>



              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">



                <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:lightbulb-bolt-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>

                  </div>

                  <div>

                    <h3 className="text-lg font-normal tracking-tight text-slate-950">

                      Ideas disappear

                    </h3>

                    <p className="mt-3 leading-7 text-sm font-light text-slate-600">

                      Capture rough thoughts before they vanish between calls, commutes, and context switches.

                    </p>

                  </div>

                </div>



                <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:widget-5-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>

                  </div>

                  <div>

                    <h3 className="text-lg font-normal tracking-tight text-slate-950">

                      Tasks scatter

                    </h3>

                    <p className="mt-3 leading-7 text-sm font-light text-slate-600">

                      Turn notes, messages, and meeting details into clear next steps, reminders, and follow-ups.

                    </p>

                  </div>

                </div>



                <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:folder-with-files-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>

                  </div>

                  <div>

                    <h3 className="text-lg font-normal tracking-tight text-slate-950">

                      Context piles up

                    </h3>

                    <p className="mt-3 leading-7 text-sm font-light text-slate-600">

                      Summarize long notes, emails, documents, and links so you can understand what matters quickly.

                    </p>

                  </div>

                </div>



                <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:clock-circle-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>

                  </div>

                  <div>

                    <h3 className="text-lg font-normal tracking-tight text-slate-950">

                      Organizing takes over

                    </h3>

                    <p className="mt-3 leading-7 text-sm font-light text-slate-600">

                      Spend less time sorting work and more time deciding, creating, replying, and shipping.

                    </p>

                  </div>

                </div>

              </div>



              <div className="overflow-hidden min-h-[560px] lg:min-h-[620px] rounded-[2.75rem] bg-gradient-to-b from-[#172033] to-[#101827] text-white border border-white/10 relative shadow-[0_40px_90px_-45px_rgba(15,23,42,0.78),inset_0_1px_0_rgba(255,255,255,0.14)]">



                <div className="absolute inset-0 opacity-[0.10]" style={{"backgroundImage": "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", "backgroundSize": "40px 40px"}}>
                </div>

                <div className="absolute top-[-30%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-blue-400/18 blur-[6rem]"></div>

                <div className="absolute bottom-[-25%] left-[-12%] w-[28rem] h-[28rem] rounded-full bg-sky-300/10 blur-[5rem]"></div>

                <div className="absolute top-[20%] left-[42%] w-[18rem] h-[18rem] rounded-full bg-white/5 blur-[4rem]"></div>

                <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] min-h-[560px] lg:min-h-[620px] h-full">



                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

                    <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-300 mb-4">

                      THE TRANSFORMATION

                    </p>

                    <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-light text-white tracking-tight mb-6">

                      From mental clutter to a clear daily operating system.

                    </h2>

                    <p className="text-base leading-8 text-slate-300 font-light max-w-xl">

                      AURA reads the signals across your day, connects what matters, and turns scattered input into priorities,

                      summaries, follow-ups, and next actions.

                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3">

                      <a href="#workflow" className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-100 transition-all text-slate-900 text-sm font-normal rounded-full px-6 py-3 w-fit shadow-[inset_0_1px_0_white] hover:-translate-y-0.5">

                        <span>Explore Workflow</span>

                        <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>

                      </a>

                      <a href="#pricing" className="group flex items-center justify-center gap-3 bg-white/[0.07] hover:bg-white/[0.1] transition-all text-white text-sm font-normal rounded-full px-6 py-3 w-fit border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                        <span>Try AURA Free</span>

                      </a>

                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">

                      <p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-['JetBrains_Mono',monospace]">

                        Built for focused work

                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">

                          Founders

                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">

                          Executives

                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">

                          Creators

                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">

                          Consultants

                        </span>

                      </div>

                    </div>

                  </div>



                  <div className="relative flex items-center justify-center p-6 md:p-10 lg:pr-14">



                    <div className="relative w-full max-w-2xl rounded-[2.25rem] bg-white/[0.065] border border-white/10 p-4 md:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_70px_-40px_rgba(0,0,0,0.72)] backdrop-blur-sm">



                      <div className="rounded-[1.85rem] bg-gradient-to-b from-white to-slate-100 text-slate-900 border border-white/80 overflow-hidden shadow-[0_18px_50px_-30px_rgba(0,0,0,0.55),inset_0_1px_0_white]">



                        <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200/80">

                          <div className="flex items-center gap-2">

                            <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>

                            <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>

                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>

                          </div>

                          <div className="font-['JetBrains_Mono',monospace] text-xs text-slate-400 tracking-[-0.05em]">

                            INPUT → ACTION

                          </div>

                        </div>



                        <div className="p-5 md:p-6">



                          <div className="flex items-start justify-between gap-4 mb-6">

                            <div>

                              <p className="text-xs text-slate-400 font-light mb-1">

                                AURA has organized your workspace

                              </p>

                              <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-950">

                                Everything became actionable.

                              </h3>

                            </div>

                            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-[inset_0_1px_0_white]">

                              <iconify-icon icon="solar:stars-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>

                            </div>

                          </div>



                          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch">



                            <div className="rounded-[1.5rem] bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">

                              <p className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400 uppercase tracking-widest mb-4">

                                Scattered inputs

                              </p>

                              <div className="space-y-3">



                                <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                                    <iconify-icon icon="solar:microphone-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                                  </div>

                                  <div>

                                    <p className="text-xs font-normal text-slate-900">

                                      Voice note

                                    </p>

                                    <p className="text-[11px] text-slate-400 font-light">

                                      Rough idea captured

                                    </p>

                                  </div>

                                </div>



                                <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                                    <iconify-icon icon="solar:letter-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                                  </div>

                                  <div>

                                    <p className="text-xs font-normal text-slate-900">

                                      Messages

                                    </p>

                                    <p className="text-[11px] text-slate-400 font-light">

                                      Follow-ups buried

                                    </p>

                                  </div>

                                </div>



                                <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                                    <iconify-icon icon="solar:document-text-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                                  </div>

                                  <div>

                                    <p className="text-xs font-normal text-slate-900">

                                      Documents

                                    </p>

                                    <p className="text-[11px] text-slate-400 font-light">

                                      Too much context

                                    </p>

                                  </div>

                                </div>



                                <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                                  <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">

                                    <iconify-icon icon="solar:calendar-mark-linear" style={{"strokeWidth": "1.5"}} className="text-base text-slate-600"></iconify-icon>

                                  </div>

                                  <div>

                                    <p className="text-xs font-normal text-slate-900">

                                      Meetings

                                    </p>

                                    <p className="text-[11px] text-slate-400 font-light">

                                      Decisions scattered

                                    </p>

                                  </div>

                                </div>

                              </div>

                            </div>



                            <div className="hidden md:flex flex-col items-center justify-center gap-3">

                              <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 flex items-center justify-center text-white shadow-[0_10px_24px_rgba(59,130,246,0.28),inset_0_1px_0_rgba(255,255,255,0.35)]">

                                <iconify-icon icon="solar:alt-arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-2xl"></iconify-icon>

                              </div>

                              <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

                            </div>



                            <div className="rounded-[1.5rem] bg-gradient-to-b from-[#172033] to-[#101827] text-white border border-white/10 p-4 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.65),inset_0_1px_0_rgba(255,255,255,0.1)]">

                              <p className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-300 uppercase tracking-widest mb-4">

                                Clear action

                              </p>

                              <div className="space-y-3">

                                <div className="rounded-2xl bg-white/8 border border-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                                  <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-3">

                                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>

                                      <p className="text-xs font-normal text-white">

                                        Priorities ranked

                                      </p>

                                    </div>

                                    <span className="text-[10px] text-blue-200 bg-blue-400/10 border border-blue-300/10 rounded-full px-2 py-1">

                                      3

                                    </span>

                                  </div>

                                </div>

                                <div className="rounded-2xl bg-white/8 border border-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                                  <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-3">

                                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>

                                      <p className="text-xs font-normal text-white">

                                        Follow-ups found

                                      </p>

                                    </div>

                                    <span className="text-[10px] text-blue-200 bg-blue-400/10 border border-blue-300/10 rounded-full px-2 py-1">

                                      5

                                    </span>

                                  </div>

                                </div>

                                <div className="rounded-2xl bg-white/8 border border-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                                  <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-3">

                                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>

                                      <p className="text-xs font-normal text-white">

                                        Summaries ready

                                      </p>

                                    </div>

                                    <span className="text-[10px] text-blue-200 bg-blue-400/10 border border-blue-300/10 rounded-full px-2 py-1">

                                      4

                                    </span>

                                  </div>

                                </div>

                                <div className="rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 px-3 py-3 shadow-[0_10px_22px_-14px_rgba(59,130,246,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]">

                                  <div className="flex items-center gap-3">

                                    <iconify-icon icon="solar:checklist-minimalistic-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-white"></iconify-icon>

                                    <div>

                                      <p className="text-xs font-normal text-white">

                                        Daily brief generated

                                      </p>

                                      <p className="text-[11px] text-blue-100 font-light mt-0.5">

                                        Ready before your first meeting

                                      </p>

                                    </div>

                                  </div>

                                </div>

                              </div>

                            </div>

                          </div>



                          <div className="mt-4 rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                              <div className="flex items-center gap-3">

                                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                                  <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                                </div>

                                <div>

                                  <p className="text-xs font-normal text-slate-900">

                                    Private memory used

                                  </p>

                                  <p className="text-[11px] text-slate-400 font-light">

                                    Only the context you control

                                  </p>

                                </div>

                              </div>

                              <div className="flex items-center gap-2 text-[11px] text-slate-400">

                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>

                                9 actions organized

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>



                      <div className="hidden md:block absolute -right-3 top-16 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]">

                        <div className="flex items-center gap-3">

                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">

                            <iconify-icon icon="solar:bolt-circle-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>

                          </div>

                          <div>

                            <p className="text-xs text-slate-900 font-normal">

                              Signal detected

                            </p>

                            <p className="text-xs text-slate-400 font-light">

                              Follow-up hidden in email

                            </p>

                          </div>

                        </div>

                      </div>



                      <div className="hidden md:block absolute -left-6 -bottom-4 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]">

                        <div className="flex items-center gap-3">

                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">

                            <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>

                          </div>

                          <div>

                            <p className="text-xs text-slate-900 font-normal">

                              Clarity created

                            </p>

                            <p className="text-xs text-slate-400 font-light">

                              Priorities, replies, tasks

                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>



                </div>

              </div>

            </div>

          </section>



          <section id="features" className="max-w-7xl mx-auto px-6 py-20">



            <div className="text-center max-w-5xl mx-auto mb-14">

              <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

                CORE CAPABILITIES

              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">

                AURA turns your day

                <span className="block">into an organized loop.</span>

              </h2>

              <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">

                Capture what happens, understand what matters, and move forward with clear priorities,

                reminders, summaries, and next actions.

              </p>

            </div>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">



              <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">

                <div className="flex items-center justify-between gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">

                    3 priorities ready

                  </span>

                </div>

                <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">

                  Morning Brief

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                  Start with priorities, schedule context, unresolved follow-ups, and the decisions waiting for you.

                </p>

              </div>



              <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">

                <div className="flex items-center justify-between gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:microphone-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-500 bg-white border border-slate-200 rounded-full px-2.5 py-1 shadow-[inset_0_1px_0_white]">

                    Voice note saved

                  </span>

                </div>

                <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">

                  Capture in Motion

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                  Save ideas, voice notes, links, documents, and messages without breaking focus.

                </p>

              </div>



              <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">

                <div className="flex items-center justify-between gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:case-round-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">

                    Context prepared

                  </span>

                </div>

                <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">

                  Meeting Prep

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                  Walk into conversations with summaries, previous context, and reminders already prepared.

                </p>

              </div>



              <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">

                <div className="flex items-center justify-between gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:checklist-minimalistic-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">

                    5 actions found

                  </span>

                </div>

                <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">

                  Action Recovery

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                  Turn messy notes and conversations into tasks, owners, due dates, and suggested next steps.

                </p>

              </div>



              <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">

                <div className="flex items-center justify-between gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:chat-round-dots-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">

                    Reply ready

                  </span>

                </div>

                <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">

                  Suggested Replies

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                  Draft thoughtful replies and updates from the context AURA already understands.

                </p>

              </div>



              <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">

                <div className="flex items-center justify-between gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                    <iconify-icon icon="solar:database-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-slate-600"></iconify-icon>

                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-500 bg-white border border-slate-200 rounded-full px-2.5 py-1 shadow-[inset_0_1px_0_white]">

                    Memory updated

                  </span>

                </div>

                <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">

                  Private Memory

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                  Carry useful context forward without rebuilding your workspace every morning.

                </p>

              </div>



              <div className="md:col-span-2 lg:col-span-3 rounded-[2.25rem] bg-gradient-to-b from-[#1d2a3d] to-[#131c2b] text-white border border-white/10 p-6 md:p-8 shadow-[0_28px_70px_-35px_rgba(15,23,42,0.72),inset_0_1px_0_rgba(255,255,255,0.13)] overflow-hidden relative">



                <div className="absolute top-[-40%] right-[-10%] w-[24rem] h-[24rem] rounded-full bg-blue-400/18 blur-[5rem]"></div>

                <div className="absolute bottom-[-45%] left-[-12%] w-[22rem] h-[22rem] rounded-full bg-sky-300/10 blur-[5rem]"></div>

                <div className="absolute inset-0 opacity-[0.09]" style={{"backgroundImage": "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", "backgroundSize": "36px 36px"}}>
                </div>

                <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">



                  <div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-3 py-1.5 mb-6">

                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>

                      <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[-0.03em] text-blue-200">

                        TOMORROW ORGANIZED

                      </span>

                    </div>

                    <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">

                      End-of-Day Wrap

                    </h3>

                    <p className="mt-4 text-sm md:text-base leading-7 text-slate-300 font-light max-w-xl">

                      Review what moved, what stalled, what needs attention tomorrow, and what AURA should remember.

                    </p>

                  </div>



                  <div className="rounded-[1.75rem] bg-white text-slate-900 border border-white/80 p-4 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.62),inset_0_1px_0_white]">

                    <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">

                      <div>

                        <p className="text-xs text-slate-400 font-light">

                          Today’s wrap

                        </p>

                        <p className="mt-1 text-xl font-normal tracking-tight text-slate-950">

                          Ready for tomorrow.

                        </p>

                      </div>

                      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                        <iconify-icon icon="solar:moon-stars-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                      </div>

                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">

                      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">

                        <p className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400 uppercase tracking-widest">

                          Moved

                        </p>

                        <p className="mt-2 text-2xl font-light tracking-tight text-slate-950">

                          7

                        </p>

                        <p className="mt-1 text-xs text-slate-500 font-light">

                          actions completed

                        </p>

                      </div>

                      <div className="rounded-2xl bg-blue-50 text-slate-900 border border-blue-100 p-4 shadow-[inset_0_1px_0_white]">

                        <p className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 uppercase tracking-widest">

                          Carry

                        </p>

                        <p className="mt-2 text-2xl font-light tracking-tight text-slate-950">

                          3

                        </p>

                        <p className="mt-1 text-xs text-slate-500 font-light">

                          priorities tomorrow

                        </p>

                      </div>

                      <div className="rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 text-white border border-blue-700 p-4 shadow-[0_12px_28px_-18px_rgba(59,130,246,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]">

                        <p className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-100 uppercase tracking-widest">

                          Memory

                        </p>

                        <p className="mt-2 text-2xl font-light tracking-tight text-white">

                          5

                        </p>

                        <p className="mt-1 text-xs text-blue-100 font-light">

                          updates saved

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>



      <section id="workflow" className="max-w-7xl mx-auto px-6 py-20">



        <div className="text-center max-w-5xl mx-auto mb-16">

          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

            HOW IT WORKS

          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">

            Four steps from scattered

            <span className="block">to organized.</span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8 text-slate-600 font-light">

            Capture what happens, let AURA organize the context, then start with priorities,

            summaries, reminders, and next actions already prepared.

          </p>

        </div>



        <div className="relative overflow-hidden rounded-[2.75rem] bg-white/55 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)] px-6 md:px-10 pt-16 pb-12">



          <div className="absolute top-[-35%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-blue-200/35 blur-[6rem] pointer-events-none"></div>

          <div className="absolute bottom-[-35%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-sky-200/22 blur-[6rem] pointer-events-none"></div>



          <div className="absolute inset-0 opacity-[0.16] pointer-events-none" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)", "backgroundSize": "2rem 2rem"}}></div>



          <div className="relative">



            <div className="hidden lg:block absolute left-0 right-0 top-[3.05rem] h-px">

              <div className="absolute inset-x-12 top-0 border-t border-dashed border-blue-300/60"></div>

              <div className="absolute top-[-1px] left-12 h-[2px] w-52 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent rounded-full animate-[auraConnectionFlow_4.5s_linear_infinite]"></div>

            </div>



            <div className="hidden lg:block pointer-events-none absolute top-4 left-1/2 h-20 w-full max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-300/35 to-transparent blur-2xl"></div>

            <div className="hidden lg:block pointer-events-none absolute top-7 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-sky-200/45 to-transparent blur-xl"></div>



            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">



              <div className="group relative flex flex-col items-center text-center">



                <div className="h-24 w-full relative flex items-center justify-center">

                  <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_16px_34px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_white]">

                    <span className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_22px_rgba(59,130,246,0.28)]"></span>

                    <span className="relative font-['JetBrains_Mono',monospace] text-sm font-semibold text-white">

                      01

                    </span>

                  </span>

                </div>



                <div className="mt-4 rounded-[2rem] bg-white/70 border border-white p-6 min-h-[15rem] shadow-[0_16px_36px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] group-hover:-translate-y-1 group-hover:bg-white/85 transition-all duration-300">

                  <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">

                    <iconify-icon icon="solar:inbox-in-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <h3 className="text-xl font-normal tracking-tight text-slate-950">

                    Capture

                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                    Drop in voice notes, links, documents, meeting fragments, messages,

                    and rough ideas before they disappear.

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">

                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

                    Input saved instantly

                  </div>

                </div>

              </div>



              <div className="group relative flex flex-col items-center text-center">



                <div className="h-24 w-full relative flex items-center justify-center">

                  <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_16px_34px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_white]">

                    <span className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_22px_rgba(59,130,246,0.28)]"></span>

                    <span className="relative font-['JetBrains_Mono',monospace] text-sm font-semibold text-white">

                      02

                    </span>

                  </span>

                </div>



                <div className="mt-4 rounded-[2rem] bg-white/70 border border-white p-6 min-h-[15rem] shadow-[0_16px_36px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] group-hover:-translate-y-1 group-hover:bg-white/85 transition-all duration-300">

                  <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">

                    <iconify-icon icon="solar:document-text-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <h3 className="text-xl font-normal tracking-tight text-slate-950">

                    Understand

                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                    AURA summarizes long notes, extracts useful details, connects

                    related context, and identifies what matters.

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">

                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

                    Context organized

                  </div>

                </div>

              </div>



              <div className="group relative flex flex-col items-center text-center">



                <div className="h-24 w-full relative flex items-center justify-center">

                  <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_16px_34px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_white]">

                    <span className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_22px_rgba(59,130,246,0.28)]"></span>

                    <span className="relative font-['JetBrains_Mono',monospace] text-sm font-semibold text-white">

                      03

                    </span>

                  </span>

                </div>



                <div className="mt-4 rounded-[2rem] bg-white/70 border border-white p-6 min-h-[15rem] shadow-[0_16px_36px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] group-hover:-translate-y-1 group-hover:bg-white/85 transition-all duration-300">

                  <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">

                    <iconify-icon icon="solar:target-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <h3 className="text-xl font-normal tracking-tight text-slate-950">

                    Prioritize

                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                    Your tasks, follow-ups, decisions, and focus windows are ranked so

                    you know what needs attention first.

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">

                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

                    3 priorities ready

                  </div>

                </div>

              </div>



              <div className="group relative flex flex-col items-center text-center">



                <div className="h-24 w-full relative flex items-center justify-center">

                  <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_16px_34px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_white]">

                    <span className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_22px_rgba(59,130,246,0.28)]"></span>

                    <span className="relative font-['JetBrains_Mono',monospace] text-sm font-semibold text-white">

                      04

                    </span>

                  </span>

                </div>



                <div className="mt-4 rounded-[2rem] bg-white/70 border border-white p-6 min-h-[15rem] shadow-[0_16px_36px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] group-hover:-translate-y-1 group-hover:bg-white/85 transition-all duration-300">

                  <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">

                    <iconify-icon icon="solar:checklist-minimalistic-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                  </div>

                  <h3 className="text-xl font-normal tracking-tight text-slate-950">

                    Act

                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                    Start with a clear daily brief, suggested replies, reminders,

                    summaries, and next actions already prepared.

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">

                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

                    Daily brief generated

                  </div>

                </div>

              </div>

            </div>

          </div>



          <div className="relative mt-12 flex flex-col sm:flex-row justify-center items-center gap-3">

            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 text-sm font-normal shadow-[0_6px_16px_rgba(15,23,42,0.06),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">

              Explore Capabilities

            </a>

            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white text-sm font-normal shadow-[0_10px_24px_rgba(59,130,246,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-300">

              Try AURA Free

              <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-lg"></iconify-icon>

            </a>

          </div>

        </div>



      </section>



      <section id="built-for" className="max-w-7xl mx-auto px-6 py-20">



        <div className="text-center max-w-5xl mx-auto mb-14">

          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

            BUILT FOR

          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">

            Built for people

            <span className="block">with too much context.</span>

          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">

            AURA is designed for busy minds: people who move between meetings,

            messages, ideas, documents, and decisions all day.

          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

            <a href="#pricing" className="inline-flex items-center gap-2 justify-center rounded-full px-6 py-3.5 text-sm font-normal text-white bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 shadow-[0_10px_24px_rgba(59,130,246,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-300">

              Try AURA Free

              <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-lg"></iconify-icon>

            </a>

            <a href="#workflow" className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-normal text-slate-700 bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-[0_6px_16px_rgba(15,23,42,0.06),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">

              Explore Workflow

            </a>

          </div>

        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">


          <article className="group bg-white/70 rounded-[2rem] border border-white shadow-[0_18px_44px_-28px_rgba(15,23,42,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 hover:bg-white/88 transition-all duration-300">


            <div className="relative isolate mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.28),inset_0_1px_0_white] min-h-[13rem] [clip-path:inset(0_round_1.5rem)]">


              <div className="absolute inset-0 z-0 opacity-[0.16]" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)", "backgroundSize": "1.5rem 1.5rem"}}>
              </div>
              <div className="absolute top-[-35%] right-[-20%] z-0 w-[14rem] h-[14rem] rounded-full bg-blue-200/55 blur-[4rem] pointer-events-none">
              </div>


              <div className="relative z-10 p-5">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400">
                    FOUNDER MODE
                  </span>
                </div>

                <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
                  <p className="text-xs text-slate-400 font-light">
                    Morning priorities
                  </p>

                  <p className="mt-1 text-xl font-normal tracking-tight text-slate-950">
                    Investor update ready.
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Draft weekly founder note
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Follow up with 3 warm leads
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Review product decisions
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                  <iconify-icon icon="solar:rocket-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>
                </div>

                <div>
                  <h3 className="text-xl font-normal tracking-tight text-slate-950">
                    Founders &amp; Builders
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
                    Turn scattered calls, customer notes, investor updates, product ideas,
                    and team decisions into clear priorities and next actions.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Momentum without mental clutter
                  </div>
                </div>
              </div>
            </div>
          </article>



          <article className="group relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-[2rem] border border-blue-700 shadow-[0_24px_60px_-30px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] overflow-hidden hover:-translate-y-1 transition-all duration-300">



            <div className="absolute top-[-35%] right-[-20%] w-[18rem] h-[18rem] rounded-full bg-white/25 blur-[4rem] pointer-events-none"></div>

            <div className="absolute bottom-[-40%] left-[-25%] w-[16rem] h-[16rem] rounded-full bg-sky-200/20 blur-[4rem] pointer-events-none"></div>


            <div className="relative mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[0_18px_42px_-24px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] min-h-[13rem]">


              <div className="absolute top-[-35%] right-[-20%] w-[14rem] h-[14rem] rounded-full bg-white/24 blur-[4rem] pointer-events-none">
              </div>
              <div className="absolute bottom-[-40%] left-[-25%] w-[14rem] h-[14rem] rounded-full bg-blue-900/16 blur-[4rem] pointer-events-none">
              </div>


              <div className="absolute inset-0 opacity-[0.12]" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)", "backgroundSize": "1.35rem 1.35rem"}}>
              </div>


              <div className="relative p-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-100">
                    EXECUTIVE BRIEF
                  </span>

                  <div className="w-9 h-9 rounded-xl bg-white/90 border border-white flex items-center justify-center shadow-[0_8px_18px_-12px_rgba(15,23,42,0.35),inset_0_1px_0_white]">
                    <iconify-icon icon="solar:case-round-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>
                  </div>
                </div>

                <div className="space-y-3">


                  <div className="rounded-[1.35rem] bg-white/95 border border-white p-4 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.26),inset_0_1px_0_white]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-normal text-slate-900">
                          Meeting prep
                        </p>
                        <p className="mt-1 text-xs text-slate-400 font-light">
                          Previous decisions summarized
                        </p>
                      </div>

                      <span className="text-xs text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2 py-1">
                        ready
                      </span>
                    </div>
                  </div>


                  <div className="rounded-[1.35rem] bg-blue-500/32 text-white border border-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs text-blue-100 font-light">
                          Protected focus
                        </p>
                        <p className="mt-1 text-2xl font-light tracking-tight text-white">
                          10:30–12:00
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-white/90 border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">
                        <iconify-icon icon="solar:lock-keyhole-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            <div className="relative p-6 text-white">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 shrink-0 rounded-2xl bg-white/16 border border-white/20 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">

                  <iconify-icon icon="solar:user-check-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-white"></iconify-icon>

                </div>

                <div>

                  <h3 className="text-xl font-normal tracking-tight text-white">

                    Executives &amp; Operators

                  </h3>

                  <p className="mt-3 text-sm leading-6 text-blue-50/90 font-light">

                    Prepare for meetings, track follow-ups, protect focus time,

                    and keep decisions from disappearing across tools and conversations.

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/16 border border-white/20 px-3 py-1.5 text-[11px] text-white">

                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>

                    Your day, already organized

                  </div>

                </div>

              </div>

            </div>

          </article>



          <article className="group bg-white/70 rounded-[2rem] border border-white shadow-[0_18px_44px_-28px_rgba(15,23,42,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 hover:bg-white/88 transition-all duration-300">



            <div className="relative mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.28),inset_0_1px_0_white] min-h-[13rem]">



              <div className="absolute inset-0 opacity-[0.16]" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)", "backgroundSize": "1.5rem 1.5rem"}}></div>

              <div className="absolute top-[-30%] left-[-18%] z-0 w-[14rem] h-[14rem] rounded-full bg-sky-200/42 blur-[3.75rem] pointer-events-none">
              </div>



              <div className="relative p-5">

                <div className="flex items-center justify-between mb-5">

                  <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400">

                    CREATOR SYSTEM

                  </span>

                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                    <iconify-icon icon="solar:pen-new-square-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>

                  </div>

                </div>

                <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                  <p className="text-xs text-slate-400 font-light">

                    Content pipeline

                  </p>

                  <p className="mt-1 text-xl font-normal tracking-tight text-slate-950">

                    5 ideas became outlines.

                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2">

                    <div className="rounded-xl bg-blue-50 border border-blue-100 px-3 py-2 text-center">

                      <p className="text-lg font-light text-blue-600">

                        5

                      </p>

                      <p className="text-[10px] text-blue-500">

                        ideas

                      </p>

                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-center">

                      <p className="text-lg font-light text-slate-900">

                        3

                      </p>

                      <p className="text-[10px] text-slate-400">

                        drafts

                      </p>

                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-center">

                      <p className="text-lg font-light text-slate-900">

                        2

                      </p>

                      <p className="text-[10px] text-slate-400">

                        scripts

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            <div className="p-6">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                  <iconify-icon icon="solar:magic-stick-3-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                </div>

                <div>

                  <h3 className="text-xl font-normal tracking-tight text-slate-950">

                    Creators &amp; Consultants

                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                    Capture ideas, summarize research, draft replies, prepare outlines,

                    and keep project context organized across every client or topic.

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">

                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

                    Ideas turned into output

                  </div>

                </div>

              </div>

            </div>

          </article>

        </div>


        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


          <div className="bg-white/68 border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
              <iconify-icon icon="solar:widget-5-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>
            </div>

            <p className="text-3xl font-normal tracking-tight text-slate-950">
              9+ <span className="text-2xl text-slate-700">signals</span>
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500 font-light">
              Organized from notes, meetings, messages, and documents.
            </p>
          </div>


          <div className="bg-white/68 border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
              <iconify-icon icon="solar:target-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>
            </div>

            <p className="text-3xl font-normal tracking-tight text-slate-950">
              3 <span className="text-2xl text-slate-700">top priorities</span>
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500 font-light">
              Surfaced before your day starts.
            </p>
          </div>


          <div className="bg-white/68 border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
              <iconify-icon icon="solar:bell-bing-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>
            </div>

            <p className="text-3xl font-normal tracking-tight text-slate-950">
              5 <span className="text-2xl text-slate-700">follow-ups</span>
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500 font-light">
              Recovered from scattered context.
            </p>
          </div>


          <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-[2rem] p-6 shadow-[0_16px_38px_-26px_rgba(59,130,246,0.28),inset_0_1px_0_white]">
            <div className="w-10 h-10 rounded-2xl bg-white border border-white flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
              <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>
            </div>

            <p className="text-3xl font-normal tracking-tight text-blue-600">
              Daily <span className="text-2xl text-slate-700">brief</span>
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600 font-light">
              Prepared before your first meeting starts.
            </p>
          </div>
        </div>

      </section>



      <section id="privacy" className="max-w-7xl mx-auto px-6 py-20">



        <div className="text-center max-w-5xl mx-auto mb-14">

          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

            PRIVACY &amp; CONTROL

          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">

            Your assistant should

            <span className="block">know your context.</span>

            <span className="block">Not own it.</span>

          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">

            AURA helps you remember, summarize, and act without turning your workspace into a black box.

            You stay in control of what is saved, used, and carried forward.

          </p>

        </div>



        <div className="relative overflow-hidden rounded-[2.75rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)]">



          <div className="absolute top-[-35%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-blue-200/35 blur-[6rem] pointer-events-none">
          </div>

          <div className="absolute bottom-[-40%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-sky-200/24 blur-[6rem] pointer-events-none">
          </div>



          <div className="absolute inset-0 opacity-[0.16] pointer-events-none" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)", "backgroundSize": "2rem 2rem"}}>
          </div>

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">



            <div className="flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs text-blue-600 font-light w-fit mb-7 shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                Private workspace memory

              </div>

              <h3 className="text-3xl md:text-4xl lg:text-[3.25rem] font-normal tracking-tight text-slate-950 leading-[1.08] max-w-2xl">

                Memory should feel

                <span className="block whitespace-nowrap">useful, not mysterious.</span>

              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600 font-light max-w-xl">

                AURA keeps context helpful by making memory visible, reviewable, and adjustable.

                Save what matters, keep temporary context temporary, and reset outdated information when your work changes.

              </p>



              <div className="mt-9 flex flex-wrap gap-3">

                <span className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">

                  <iconify-icon icon="solar:database-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                  Controlled memory

                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">

                  <iconify-icon icon="solar:tuning-2-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                  Clear boundaries

                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">

                  <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth": "1.5"}} className="text-base text-blue-500"></iconify-icon>

                  Reset anytime

                </span>

              </div>

            </div>



            <div className="relative">



              <div className="relative isolate overflow-hidden rounded-[2.35rem] bg-gradient-to-b from-white to-slate-50 text-slate-900 border border-slate-200/80 p-5 md:p-6 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.42),0_10px_30px_-24px_rgba(15,23,42,0.24),inset_0_1px_0_white] [clip-path:inset(0_round_2.35rem)]">



                <div className="absolute top-[-35%] right-[-20%] z-0 w-[22rem] h-[22rem] rounded-full bg-blue-200/45 blur-[4.5rem] pointer-events-none">
                </div>

                <div className="absolute bottom-[-40%] left-[-20%] z-0 w-[20rem] h-[20rem] rounded-full bg-sky-200/28 blur-[4rem] pointer-events-none">
                </div>

                <div className="relative z-10">



                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">

                    <div className="flex items-center gap-2">

                      <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>

                      <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>

                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>

                    </div>

                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400 tracking-[-0.04em]">

                      PRIVACY CENTER

                    </span>

                  </div>



                  <div className="flex items-start justify-between gap-4 mb-6">

                    <div>

                      <p className="text-xs text-slate-400 font-light mb-1">

                        Workspace memory

                      </p>

                      <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-950">

                        You control what AURA remembers.

                      </h3>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:lock-keyhole-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

                    </div>

                  </div>



                  <div className="grid gap-3">



                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">

                      <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">

                          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                            <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>

                          </div>

                          <div>

                            <p className="text-sm font-normal text-slate-900">

                              Remember project preferences

                            </p>

                            <p className="mt-1 text-xs text-slate-400 font-light">

                              Saved for future briefs and summaries

                            </p>

                          </div>

                        </div>

                        <span className="relative inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">

                          <span className="inline-block h-5 w-5 translate-x-6 rounded-full bg-white shadow-sm"></span>

                        </span>

                      </div>

                    </div>



                    <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                      <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">

                          <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">

                            <iconify-icon icon="solar:clock-circle-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-slate-600"></iconify-icon>

                          </div>

                          <div>

                            <p className="text-sm font-normal text-slate-900">

                              Temporary meeting context

                            </p>

                            <p className="mt-1 text-xs text-slate-400 font-light">

                              Expires after the daily brief

                            </p>

                          </div>

                        </div>

                        <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1">

                          temporary

                        </span>

                      </div>

                    </div>



                    <div className="rounded-2xl bg-gradient-to-b from-blue-50 to-white text-slate-900 border border-blue-100 p-4 shadow-[0_12px_28px_-20px_rgba(59,130,246,0.28),inset_0_1px_0_white]">

                      <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">

                          <div className="w-9 h-9 rounded-xl bg-white border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">

                            <iconify-icon icon="solar:shield-warning-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>

                          </div>

                          <div>

                            <p className="text-sm font-normal text-slate-900">

                              Sensitive notes stay private

                            </p>

                            <p className="mt-1 text-xs text-slate-500 font-light">

                              Clear boundaries for personal context

                            </p>

                          </div>

                        </div>

                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]"></span>

                      </div>

                    </div>

                  </div>



                  <div className="mt-4 rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                      <div>

                        <p className="text-xs font-normal text-slate-900">

                          Memory review available anytime

                        </p>

                        <p className="mt-1 text-[11px] text-slate-400 font-light">

                          Edit, remove, or reset context as your work changes.

                        </p>

                      </div>

                      <button className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs text-blue-600 bg-blue-50 border border-blue-100 shadow-[inset_0_1px_0_white]">

                        Review memory

                      </button>

                    </div>

                  </div>

                </div>

              </div>



            </div>

          </div>



          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 pt-4 md:pt-2">



            <div className="relative overflow-hidden bg-white/78 border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>

              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:database-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

              </div>

              <h3 className="text-lg font-normal tracking-tight text-slate-950">

                Controlled memory

              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                Decide what AURA should remember and what should stay temporary.

              </p>

            </div>



            <div className="relative overflow-hidden bg-white/78 border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>

              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:folder-security-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

              </div>

              <h3 className="text-lg font-normal tracking-tight text-slate-950">

                Private workspace

              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                Notes, summaries, and priorities stay organized around your context.

              </p>

            </div>



            <div className="relative overflow-hidden bg-white/78 border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>

              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:tuning-2-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

              </div>

              <h3 className="text-lg font-normal tracking-tight text-slate-950">

                Clear boundaries

              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

                AURA works from the information you provide and the tools you connect.

              </p>

            </div>



            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-[2rem] p-6 shadow-[0_16px_38px_-26px_rgba(59,130,246,0.28),inset_0_1px_0_white]">

              <div className="w-11 h-11 rounded-2xl bg-white border border-white flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:trash-bin-minimalistic-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-500"></iconify-icon>

              </div>

              <h3 className="text-lg font-normal tracking-tight text-slate-950">

                Reset anytime

              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 font-light">

                Remove outdated context when projects, priorities, or preferences change.

              </p>

            </div>

          </div>

        </div>

      </section>



      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">



        <div className="text-center max-w-5xl mx-auto mb-14">

          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

            PRICING

          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">

            Choose the plan

            <span className="block">that fits your workflow.</span>

          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">

            Start simple, upgrade when your context grows, and keep the same calm workspace

            as your notes, projects, meetings, and priorities expand.

          </p>

        </div>



          <div className="mb-12 flex justify-center">

            <label className="relative flex items-center p-1 bg-[#e2e8f0] rounded-full cursor-pointer w-[16rem] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_1px_1px_rgba(255,255,255,1)] border border-slate-300">



              <input type="checkbox" id="toggle-checkbox" className="sr-only" data-aura-onchange="togglePricing()" />



              <div id="toggle-pill" className="absolute left-1 top-1 bottom-1 w-[calc(50%-0.25rem)] bg-gradient-to-b from-white to-slate-50 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">

              </div>

              <span id="label-mo" className="relative w-1/2 text-center text-xs text-slate-800 font-normal transition-colors duration-300 py-2.5 z-10">

                Monthly

              </span>

              <span id="label-yr" className="relative w-1/2 flex items-center justify-center gap-1.5 text-center text-xs text-slate-400 font-normal transition-colors duration-300 py-2.5 z-10">

                Annually

              </span>

            </label>

          </div>




        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-5xl mx-auto">



          <div className="relative w-full lg:w-1/3 rounded-[2rem] bg-[#f8fafc] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_0_rgba(255,255,255,1)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">

            <div className="p-8 h-full flex flex-col">



              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">

                    Starter

                  </h3>

                  <div className="flex items-baseline text-slate-800">

                    <span className="text-4xl font-normal tracking-tight">$</span>

                    <span className="text-5xl font-normal tracking-tight price-val" data-monthly="15" data-yearly="12">15</span>

                    <span className="text-xs font-light text-slate-400 ml-1">/mo</span>

                  </div>

                  <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">

                    For individuals who want a calmer way to capture ideas, notes, and daily priorities.

                  </p>

                </div>

                <div className="w-11 h-11 min-w-11 min-h-11 shrink-0 rounded-2xl bg-gradient-to-b from-white to-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.08),inset_0_1px_0_white] flex items-center justify-center text-slate-400 border border-slate-200">
                  <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="block text-[22px] leading-none"></iconify-icon>
                </div>

              </div>



              <div className="pt-6 flex flex-col gap-6 flex-1">

                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                <ul className="flex flex-col gap-y-3 flex-grow">

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Personal daily brief

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Voice notes and quick capture

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Basic summaries and reminders

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Private memory controls

                  </li>

                </ul>

                <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 font-normal text-xs shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all">

                  Get Started

                </button>

              </div>

            </div>

          </div>



          <div className="relative w-full lg:w-1/3 rounded-[2rem] bg-gradient-to-b from-blue-50/50 to-[#f8fafc] border border-white shadow-[0_15px_35px_-10px_rgba(59,130,246,0.15),inset_0_2px_0_rgba(255,255,255,1)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.2),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">



            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-b from-blue-400 to-blue-500 text-white text-[0.65rem] font-medium rounded-full shadow-[0_2px_6px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] border border-blue-600 tracking-wide z-10">

              Recommended

            </div>

            <div className="p-8 h-full flex flex-col">



              <div className="flex justify-between items-start pt-2">

                <div>

                  <h3 className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-4">

                    Pro

                  </h3>

                  <div className="flex items-baseline text-slate-800">

                    <span className="text-4xl font-normal tracking-tight">$</span>

                    <span className="text-5xl font-normal tracking-tight price-val" data-monthly="65" data-yearly="45">65</span>

                    <span className="text-xs font-light text-slate-400 ml-1">/mo</span>

                  </div>

                  <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">

                    For busy professionals who want deeper context, faster summaries, and stronger daily execution.

                  </p>

                </div>

                <div className="w-11 h-11 min-w-11 min-h-11 shrink-0 rounded-2xl bg-gradient-to-b from-white to-blue-50 shadow-[0_6px_16px_rgba(59,130,246,0.12),inset_0_1px_0_white] flex items-center justify-center text-blue-500 border border-blue-100">
                  <iconify-icon icon="solar:stars-linear" style={{"strokeWidth": "1.5"}} className="block text-[22px] leading-none"></iconify-icon>
                </div>

              </div>



              <div className="pt-6 flex flex-col gap-6 flex-1">

                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

                <ul className="flex flex-col gap-y-3 flex-grow">

                  <li className="flex items-center gap-3 text-xs font-light text-slate-700">

                    <iconify-icon icon="solar:check-circle-linear" className="text-blue-500 text-lg"></iconify-icon>

                    Everything in Starter

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-700">

                    <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

                    Advanced document summaries

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-700">

                    <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

                    Suggested replies and action recovery

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-700">

                    <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

                    Priority and focus window planning

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-700">

                    <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

                    Extended private memory

                  </li>

                </ul>

                <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white font-normal text-xs shadow-[0_4px_10px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-blue-400 hover:to-blue-500 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all">

                  Start Free Trial

                </button>

              </div>

            </div>

          </div>



          <div className="relative w-full lg:w-1/3 rounded-[2rem] bg-[#f8fafc] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_0_rgba(255,255,255,1)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">

            <div className="p-8 h-full flex flex-col">



              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">

                    Team

                  </h3>

                  <div className="flex items-baseline text-slate-800">

                    <span className="text-4xl font-normal tracking-tight">$</span>

                    <span className="text-5xl font-normal tracking-tight price-val" data-monthly="249" data-yearly="199">249</span>

                    <span className="text-xs font-light text-slate-400 ml-1">/mo</span>

                  </div>

                  <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">

                    For teams that need shared context, stronger controls, and reliable execution across projects.

                  </p>

                </div>

                <div className="w-11 h-11 min-w-11 min-h-11 shrink-0 rounded-2xl bg-gradient-to-b from-white to-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.08),inset_0_1px_0_white] flex items-center justify-center text-slate-400 border border-slate-200">

                  <iconify-icon icon="solar:buildings-2-linear" style={{"strokeWidth": "1.5"}} className="block text-[22px] leading-none"></iconify-icon>

                </div>

              </div>



              <div className="pt-6 flex flex-col gap-6 flex-1">

                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                <ul className="flex flex-col gap-y-3 flex-grow">

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Everything in Pro

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Shared workspace memory

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Team summaries and briefings

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Admin controls and permissions

                  </li>

                  <li className="flex items-center gap-3 text-xs font-light text-slate-600">

                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-blue-400 text-lg"></iconify-icon>

                    Priority support

                  </li>

                </ul>

                <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 font-normal text-xs shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all">

                  Contact Sales

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>



      <section id="faq" className="max-w-7xl mx-auto px-6 py-20">



        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

            FAQ

          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05]">

            Common questions.

            <span className="block">Clear answers.</span>

          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light">

            A few practical answers about how AURA captures context, protects memory,

            and helps turn scattered information into clear action.

          </p>

        </div>



        <div className="relative overflow-hidden rounded-[2.75rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)] p-4 md:p-6 lg:p-8">



          <div className="absolute top-[-35%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-blue-200/35 blur-[6rem] pointer-events-none">
          </div>

          <div className="absolute bottom-[-40%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-sky-200/22 blur-[6rem] pointer-events-none">
          </div>



          <div className="absolute inset-0 opacity-[0.16] pointer-events-none" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)", "backgroundSize": "2rem 2rem"}}>
          </div>

          <div className="relative grid lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-8 items-start">



            <div className="rounded-[2.25rem] bg-gradient-to-b from-[#1d2a3d] to-[#131c2b] text-white border border-white/10 p-6 md:p-8 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.62),inset_0_1px_0_rgba(255,255,255,0.13)] overflow-hidden relative">



              <div className="absolute inset-0 opacity-[0.10]" style={{"backgroundImage": "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", "backgroundSize": "34px 34px"}}>
              </div>



              <div className="absolute top-[-35%] right-[-25%] w-[18rem] h-[18rem] rounded-full bg-blue-400/18 blur-[4.5rem] pointer-events-none">
              </div>

              <div className="absolute bottom-[-35%] left-[-20%] w-[16rem] h-[16rem] rounded-full bg-sky-200/10 blur-[4rem] pointer-events-none">
              </div>

              <div className="relative">

                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] mb-8">

                  <iconify-icon icon="solar:question-circle-linear" style={{"strokeWidth": "1.5"}} className="text-2xl text-blue-200"></iconify-icon>

                </div>

                <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-200 mb-4">

                  STILL DECIDING?

                </p>

                <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.08]">

                  Start simple.

                  <span className="block">Stay in control.</span>

                </h3>

                <p className="mt-5 text-sm md:text-base leading-7 text-slate-300 font-light">

                  AURA is designed to reduce mental clutter without taking over your workflow.

                  You decide what gets saved, what stays temporary, and what becomes part of your daily brief.

                </p>

                <div className="mt-8 grid gap-3">

                  <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                    <div className="flex items-center gap-3">

                      <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-200"></iconify-icon>

                      <span className="text-sm text-white font-normal">

                        Privacy-first memory controls

                      </span>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                    <div className="flex items-center gap-3">

                      <iconify-icon icon="solar:document-text-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-200"></iconify-icon>

                      <span className="text-sm text-white font-normal">

                        Summaries, priorities, and follow-ups

                      </span>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

                    <div className="flex items-center gap-3">

                      <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-200"></iconify-icon>

                      <span className="text-sm text-white font-normal">

                        Review or reset context anytime

                      </span>

                    </div>

                  </div>

                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">

                  <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-white text-slate-950 text-sm font-normal border border-white shadow-[inset_0_1px_0_white] hover:bg-slate-100 hover:-translate-y-0.5 transition-all">

                    Try AURA Free

                    <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-lg"></iconify-icon>

                  </a>

                  <a href="#privacy" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-white/[0.07] text-white text-sm font-normal border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/[0.1] transition-all">

                    Review Privacy

                  </a>

                </div>

              </div>

            </div>



            <div className="space-y-3">



              <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

                <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:chat-round-like-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                    </div>

                    <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                      How is AURA different from a regular chatbot?

                    </h3>

                  </div>

                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

                    <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

                  </div>

                </summary>

                <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

                  <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

                    A regular chatbot waits for prompts. AURA works more like a personal operating layer:

                    it captures context, summarizes what matters, surfaces priorities, finds follow-ups,

                    and helps you start from organized action instead of a blank chat box.

                  </p>

                </div>

              </details>



              <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

                <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:microphone-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                    </div>

                    <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                      What can I capture with AURA?

                    </h3>

                  </div>

                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

                    <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

                  </div>

                </summary>

                <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

                  <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

                    You can capture voice notes, rough ideas, links, documents, meeting fragments,

                    messages, reminders, and follow-ups. The goal is to collect useful context

                    without interrupting your flow.

                  </p>

                </div>

              </details>



              <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

                <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:devices-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                    </div>

                    <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                      Does AURA work across desktop and mobile?

                    </h3>

                  </div>

                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

                    <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

                  </div>

                </summary>

                <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

                  <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

                    Yes. The product story is designed around capturing from wherever you are:

                    quick notes on mobile, deeper review on desktop, and a consistent daily brief

                    that keeps priorities connected.

                  </p>

                </div>

              </details>



              <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

                <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                    </div>

                    <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                      What happens in the daily brief?

                    </h3>

                  </div>

                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

                    <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

                  </div>

                </summary>

                <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

                  <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

                    The daily brief gives you a clear starting point: top priorities, upcoming meetings,

                    unresolved follow-ups, useful summaries, reminders, and suggested next actions.

                    It helps you begin the day with direction instead of searching across tools.

                  </p>

                </div>

              </details>



              <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

                <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                    </div>

                    <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                      Can I delete or reset memory?

                    </h3>

                  </div>

                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

                    <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

                  </div>

                </summary>

                <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

                  <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

                    Yes. Memory should be reviewable, editable, and removable. As your projects,

                    priorities, or preferences change, you can clean up outdated context and keep AURA

                    aligned with how you work now.

                  </p>

                </div>

              </details>



              <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

                <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:user-check-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-blue-500"></iconify-icon>

                    </div>

                    <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                      Who is AURA best for?

                    </h3>

                  </div>

                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

                    <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth": "1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

                  </div>

                </summary>

                <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

                  <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

                    AURA is best for founders, executives, creators, consultants, and busy professionals

                    who manage lots of information and need faster clarity without constantly reorganizing

                    their workspace manually.

                  </p>

                </div>

              </details>

            </div>

          </div>

        </div>

      </section>




      <section id="final-cta" className="max-w-7xl mx-auto px-6 pt-14 pb-20">


        <div className="relative text-center max-w-3xl mx-auto mb-10">
          <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/0 via-blue-100/20 to-transparent blur-2xl pointer-events-none">
          </div>

          <p className="relative font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-3">
            FINAL STEP
          </p>

          <h2 className="relative text-3xl md:text-4xl font-normal tracking-tight text-slate-950 leading-[1.08]">
            Less organizing.
            <span className="block">More moving forward.</span>
          </h2>

          <p className="relative mt-4 text-sm md:text-base leading-7 text-slate-600 font-light">
            Once your context is captured, AURA helps turn it into a calmer tomorrow.
          </p>
        </div>


        <div className="relative isolate overflow-hidden rounded-[2.75rem] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white border border-blue-700 shadow-[0_40px_90px_-45px_rgba(59,130,246,0.72),inset_0_1px_0_rgba(255,255,255,0.34)] [clip-path:inset(0_round_2.75rem)]">


          <div className="absolute inset-0 z-0 opacity-[0.13]" style={{"backgroundImage": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)", "backgroundSize": "2rem 2rem"}}>
          </div>


          <div className="absolute top-[-35%] left-[-12%] z-0 w-[34rem] h-[34rem] rounded-full bg-white/26 blur-[6rem] pointer-events-none">
          </div>
          <div className="absolute bottom-[-40%] right-[-12%] z-0 w-[32rem] h-[32rem] rounded-full bg-blue-900/18 blur-[6rem] pointer-events-none">
          </div>
          <div className="absolute top-[30%] left-[48%] z-0 w-[20rem] h-[20rem] rounded-full bg-sky-200/18 blur-[5rem] pointer-events-none">
          </div>


          <div className="hidden md:block absolute left-10 top-12 z-20 rotate-[-5deg] animate-[auraFinalFloatOne_5.5s_ease-in-out_infinite]">
            <div className="rounded-2xl bg-white border border-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(15,23,42,0.52),inset_0_1px_0_white] min-w-[12.5rem]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                  <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-blue-500"></iconify-icon>
                </div>

                <div>
                  <p className="text-xs text-slate-950 font-normal">
                    Daily brief ready
                  </p>
                  <p className="text-xs text-slate-500 font-light">
                    3 priorities surfaced
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="hidden md:block absolute right-10 bottom-12 z-20 rotate-[5deg] animate-[auraFinalFloatTwo_6.25s_ease-in-out_infinite]">
            <div className="rounded-2xl bg-white border border-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(15,23,42,0.52),inset_0_1px_0_white] min-w-[12.5rem]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                  <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth": "1.5"}} className="text-lg text-emerald-500"></iconify-icon>
                </div>

                <div>
                  <p className="text-xs text-slate-950 font-normal">
                    Follow-ups handled
                  </p>
                  <p className="text-xs text-slate-500 font-light">
                    Work feels lighter
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="relative z-10 px-6 py-24 md:px-12 md:py-28 text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/16 border border-white/20 px-3.5 py-2 mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.14)]"></span>

              <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-50">
                READY WHEN YOUR DAY GETS MESSY
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.05] max-w-5xl mx-auto">
              Start tomorrow with
              <span className="block">less scattered context.</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-blue-50/90 font-light max-w-3xl mx-auto">
              Capture what happens, keep your priorities visible, and let AURA turn messy information
              into summaries, reminders, follow-ups, and next actions you can trust.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-gradient-to-b from-white to-blue-50 border border-white text-blue-600 text-sm font-normal shadow-[0_14px_30px_rgba(15,23,42,0.18),inset_0_1px_0_white] hover:from-white hover:to-white hover:-translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(15,23,42,0.08)] transition-all duration-300">
                Try AURA Free
                <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}} className="text-lg"></iconify-icon>
              </a>

              <a href="#workflow" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-white/14 border border-white/24 text-white text-sm font-normal shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300">
                See Workflow
              </a>
            </div>


            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 text-xs text-blue-50/78 font-light">
              <span className="inline-flex items-center gap-2">
                <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth": "1.5"}} className="text-base text-white"></iconify-icon>
                Private by design
              </span>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40"></span>

              <span className="inline-flex items-center gap-2">
                <iconify-icon icon="solar:database-linear" style={{"strokeWidth": "1.5"}} className="text-base text-white"></iconify-icon>
                Controlled memory
              </span>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40"></span>

              <span className="inline-flex items-center gap-2">
                <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth": "1.5"}} className="text-base text-white"></iconify-icon>
                Reset anytime
              </span>
            </div>
          </div>
        </div>


      </section>



      <footer className="relative z-10 w-full bg-white/72 border-t border-white shadow-[0_-18px_55px_-40px_rgba(15,23,42,0.45),inset_0_1px_0_white] backdrop-blur-xl">



        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-12">



          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-10 lg:gap-16">



            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              <a href="#" className="flex items-center gap-3 group">

                <span className="w-10 h-10 rounded-full bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.06),inset_0_1px_0_white] flex items-center justify-center">

                  <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.08em] text-blue-600">

                    AU

                  </span>

                </span>

                <span className="flex flex-col justify-center leading-none">

                  <span className="font-['JetBrains_Mono',monospace] text-sm font-semibold tracking-[-0.08em] text-slate-950 group-hover:text-blue-600 transition-colors">

                    AURA

                  </span>

                <span className="mt-1 text-[10px] font-light tracking-[-0.03em] text-slate-400">

                    Personal AI

                  </span>

                </span>

              </a>

              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500 font-light">

                A calmer way to capture context, organize priorities, and move through your day with less friction.

              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs text-blue-600 shadow-[inset_0_1px_0_white]">

                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

                Built for busy minds

              </div>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">



              <div>

                <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[-0.04em] text-slate-400 uppercase mb-4">

                  Product

                </p>

                <div className="flex flex-col gap-3 text-sm text-slate-500 font-light">

                  <a href="#features" className="hover:text-blue-600 transition-colors">

                    Features

                  </a>

                  <a href="#workflow" className="hover:text-blue-600 transition-colors">

                    Workflow

                  </a>

                  <a href="#built-for" className="hover:text-blue-600 transition-colors">

                    Built For

                  </a>

                  <a href="#pricing" className="hover:text-blue-600 transition-colors">

                    Pricing

                  </a>

                </div>

              </div>



              <div>

                <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[-0.04em] text-slate-400 uppercase mb-4">

                  Workflow

                </p>

                <div className="flex flex-col gap-3 text-sm text-slate-500 font-light">

                  <a href="#workflow" className="hover:text-blue-600 transition-colors">

                    Capture ideas

                  </a>

                  <a href="#features" className="hover:text-blue-600 transition-colors">

                    Summarize context

                  </a>

                  <a href="#features" className="hover:text-blue-600 transition-colors">

                    Recover follow-ups

                  </a>

                  <a href="#features" className="hover:text-blue-600 transition-colors">

                    Daily brief

                  </a>

                </div>

              </div>



              <div>

                <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[-0.04em] text-slate-400 uppercase mb-4">

                  Trust

                </p>

                <div className="flex flex-col gap-3 text-sm text-slate-500 font-light">

                  <a href="#privacy" className="hover:text-blue-600 transition-colors">

                    Privacy controls

                  </a>

                  <a href="#privacy" className="hover:text-blue-600 transition-colors">

                    Controlled memory

                  </a>

                  <a href="#privacy" className="hover:text-blue-600 transition-colors">

                    Reset anytime

                  </a>

                  <a href="#faq" className="hover:text-blue-600 transition-colors">

                    FAQ

                  </a>

                </div>

              </div>

            </div>

          </div>



          <div className="mt-12 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-xs text-slate-400 font-light">

              © 2026 AURA. All rights reserved.

            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 font-light">

              <a href="#" className="hover:text-blue-600 transition-colors">

                Terms

              </a>

              <span className="w-1 h-1 rounded-full bg-slate-300"></span>

              <a href="#" className="hover:text-blue-600 transition-colors">

                Privacy

              </a>

              <span className="w-1 h-1 rounded-full bg-slate-300"></span>

              <a href="#" className="hover:text-blue-600 transition-colors">

                Contact

              </a>

            </div>

          </div>

        </div>

      </footer>
      </main>
    </div>
  );
}