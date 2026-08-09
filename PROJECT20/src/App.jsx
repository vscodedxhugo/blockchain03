import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://unpkg.com/lucide@latest/dist/umd/lucide.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.tailwindcss.com",
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
    "content": "\n/*\nSequence animation on scroll when visible. Requires Animation Keyframe. Usage:\n1) Insert this code in the <head> along with the Animation Keyframe code.\n2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll\n*/\n(function () {\n// Inject CSS for paused/running states\nconst style = document.createElement(\"style\");\nstyle.textContent = `\n/* Default: paused */\n.animate-on-scroll { animation-play-state: paused !important; }\n/* Activated by JS */\n.animate-on-scroll.animate { animation-play-state: running !important; }\n`;\ndocument.head.appendChild(style);\nconst once = true;\nif (!window.__inViewIO) {\nwindow.__inViewIO = new IntersectionObserver((entries) => {\nentries.forEach((entry) => {\nif (entry.isIntersecting) {\nentry.target.classList.add(\"animate\");\nif (once) window.__inViewIO.unobserve(entry.target);\n}\n});\n}, { threshold: 0.2, rootMargin: \"0px 0px -10% 0px\" });\n}\nwindow.initInViewAnimations = function (selector = \".animate-on-scroll\") {\ndocument.querySelectorAll(selector).forEach((el) => {\nwindow.__inViewIO.observe(el); // observing twice is a no-op\n});\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => initInViewAnimations());\n})();\n"
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
    "content": "\n      // Initialize Lucide icons\n      lucide.createIcons();\n\n      // Mobile menu toggle\n      const mobileMenuBtn = document.getElementById('mobile-menu-btn');\n      const mobileMenu = document.getElementById('mobile-menu');\n\n      mobileMenuBtn?.addEventListener('click', () => {\n          mobileMenu.classList.toggle('hidden');\n      });\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "min-h-full antialiased selection:bg-black selection:text-white xl:bg-gray-950 text-white bg-gray-950";
const sourceBodyStyle = "font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
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
    <div className="aura-source-body min-h-full antialiased selection:bg-black selection:text-white xl:bg-gray-950 text-white bg-gray-950" style={{"fontFamily": "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"}}>
      <div className="aura-background-component top-0 w-full h-screen -z-10 hue-rotate-15 absolute">
            <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
              <div data-us-project="vRUeei6AVOtWgmHT28mN" className="absolute w-full h-full left-0 top-0 -z-10"></div>

            </div>
          </div>


          <div className="absolute -z-10 inset-0 overflow-hidden" style={{"visibility": "hidden"}}>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-full blur-3xl opacity-20" style={{"background": "radial-gradient(1200px 600px at 50% 30%, rgb(17, 24, 39) 10%, rgb(156, 163, 175) 40%, transparent 70%)", "visibility": "hidden"}}></div>
          </div>


          <header className="sticky z-50 xl:bg-black [animation:fadeSlideIn_1s_ease-out_0.1s_both] bg-black/70 border-gray-800 border-b top-0 backdrop-blur-xl">
            <div className="sm:px-8 sm:pt-2 sm:pb-2 max-w-7xl mr-auto ml-auto pt-2 pr-6 pb-2 pl-6">
              <div className="flex gap-4 h-16 gap-x-4 gap-y-4 items-center justify-between">

                <div className="flex xl:gap-x-0 gap-x-0 gap-y-3 items-center">
                  <a href="#" className="inline-flex items-center justify-center bg-center mix-blend-screen w-[60px] h-[60px] bg-[url(https://cdn.midjourney.com/3f5c16da-080f-427f-a80d-ee75c8f5a173/0_0.png?w=800&amp;q=80)] bg-cover rounded invert"></a>
                </div>


                <nav className="hidden md:flex items-center gap-8">
                  <a className="text-sm transition text-white/60 hover:text-white" href="#features">
                    Features
                  </a>
                  <a className="text-sm transition text-white/60 hover:text-white" href="#templates">
                    Templates
                  </a>
                  <a className="text-sm transition text-white/60 hover:text-white" href="#pricing">
                    Pricing
                  </a>
                  <a className="text-sm transition text-white/60 hover:text-white" href="#docs">
                    Docs
                  </a>
                </nav>


                <div className="hidden lg:flex flex-1 max-w-xl mx-6">
                  <div className="w-full relative">
                    <input type="text" placeholder="Search documentation..." className="placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition xl:bg-gray-950 text-sm text-white bg-black/70 w-full h-10 border-gray-800 border rounded-xl pr-10 pl-10 backdrop-blur" />
                    <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-white/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-4 h-4" style={{"strokeWidth": "1.5"}}>
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </div>
                    <button className="absolute right-2 inset-y-0 my-auto inline-flex items-center justify-center h-7 px-2 rounded-lg text-xs transition bg-white/5 text-white/60 hover:text-white hover:bg-white/10">
                      ⌘K
                    </button>
                  </div>
                </div>


                <div className="flex gap-3 gap-x-3 gap-y-3 items-center">
        <button className="hidden sm:inline-flex transition hover:bg-white/5 text-sm text-white/70 bg-black h-9 border-white/5 border rounded-lg pr-4 pl-4 items-center justify-center">
          <span>Sign in</span>
        </button>
        <button className="hidden sm:inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-medium text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center group">
        <span className="relative z-10 text-sm font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Start free</span>
        <span className="absolute inset-0 z-10 flex items-center justify-center text-sm font-medium transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 blur-md">Start free</span>
        <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px]"></span>
        <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent"></span>
      </button>
        <button id="mobile-menu-btn" className="md:hidden inline-flex items-center justify-center rounded-lg border h-9 w-9 transition border-white/5 bg-black text-white/70 hover:bg-white/5" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-4 h-4" style={{"strokeWidth": "1.5"}}>
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>
              </div>


              <div className="lg:hidden pb-3">
                <div className="relative">
                  <input type="text" placeholder="Search documentation..." className="w-full h-10 pr-10 pl-10 rounded-xl border backdrop-blur placeholder-white/40 text-sm outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition border-white/5 bg-black/70 text-white" />
                  <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-white/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-4 h-4" style={{"strokeWidth": "1.5"}}>
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>


            <div id="mobile-menu" className="md:hidden hidden border-t backdrop-blur border-white/5 bg-black/80" style={{"display": "none"}}>
              <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
                <nav className="grid grid-cols-2 gap-3">
                  <a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white" href="#features">
                    Features
                  </a>
                  <a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white" href="#templates">
                    Templates
                  </a>
                  <a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white" href="#pricing">
                    Pricing
                  </a>
                  <a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white" href="#docs">
                    Docs
                  </a>
                  <a className="text-sm px-4 py-3 rounded-xl border transition border-violet-800 text-violet-400 hover:bg-violet-950" href="#enterprise">
                    Enterprise
                  </a>
                  <a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white" href="#support">
                    Support
                  </a>
                </nav>
              </div>
            </div>
          </header>


          <section className="sm:px-8 max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">
              <div className="">
                <div className="flex animate-fade-in-delay-3 [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-white/5 w-fit border-white/5 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
                  <span className="text-xs text-white/70">
                    Trusted by 10,000+ teams worldwide
                  </span>
                </div>
                <h1 className="sm:text-7xl lg:text-8xl leading-[1.02] animate-fade-in [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-5xl font-medium text-white tracking-tighter">
                  Where Designers Build Their Legacy
                </h1>
                <p className="sm:text-2xl leading-relaxed animate-fade-in-delay-1 [animation:fadeSlideIn_1s_ease-out_0.4s_both] text-xl font-medium text-white/60 tracking-tight mt-6">
                  A creative platform where your vision becomes timeless. Share your
                  work, inspire others, and shape the future of design.
                </p>

                <div className="flex flex-wrap animate-fade-in-delay-2 [animation:fadeSlideIn_1s_ease-out_0.5s_both] mt-10 gap-x-4 gap-y-4 items-center">
                  <button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center">
                    <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl">
                      Start building
                    </span>
                    <span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-xl absolute top-0 right-0 bottom-0 left-0 blur-md">
                      Start building
                    </span>
                    <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>
                    <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
                  </button>
                  <a href="#demo" className="inline-flex items-center gap-2 transition min-w-[120px] justify-center hover:bg-white/10 hover:text-white font-normal text-white/70 bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px]">
                    Watch demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="play-circle" className="lucide lucide-play-circle w-4 h-4" style={{"strokeWidth": "1.5"}}><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>


          <div className="sm:px-8 sm:gap-y-0 sm:mt-48 max-w-7xl mt-48 mr-auto mb-24 ml-auto pr-6 pl-6 space-y-6 gap-x-y-0 gap-y-0">
            <div className="flex xl:pl-0 xl:pr-0 xl:mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-white/40 max-w-7xl mt-6 mr-auto mb-6 ml-auto pr-0 pl-0 gap-x-2 gap-y-2 items-center">
              <span className="text-base">+</span>
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-base">+</span>
            </div>
            <section className="sm:pl-0 sm:pr-0 max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-x-4 gap-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="sm:text-5xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-medium text-white tracking-tighter">
                    Explore stunning templates
                  </h2>
                  <span className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-lg text-white/50">
                    Explore a growing library of components, sections, and full
                    templates, complete with icons, animations, and images to bring
                    your next project to life.
                  </span>
                </div>
              </div>
            </section>


            <header className="sticky top-0 z-40 -mx-2 mb-6 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"></header>

            <div className="sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll bg-gray-900/60 max-w-7xl border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">

              <section className="mb-5">
                <div className="ring-inset xl:pt-3 xl:pb-3 xl:pl-3 xl:pr-3 bg-gray-950/60 ring-gray-800 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between gap-x-3 gap-y-3">

                    <div className="flex items-center gap-3">
                      <button className="inline-flex ring-inset hover:text-white hover:ring-gray-700 transition text-sm font-medium text-gray-200 bg-gray-900 ring-gray-800 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <line x1="21" y1="4" x2="14" y2="4" className=""></line>
                          <line x1="10" y1="4" x2="3" y2="4"></line>
                          <line x1="21" y1="12" x2="12" y2="12"></line>
                          <line x1="8" y1="12" x2="3" y2="12" className=""></line>
                          <line x1="21" y1="20" x2="16" y2="20"></line>
                          <line x1="12" y1="20" x2="3" y2="20"></line>
                          <circle cx="12" cy="4" r="2"></circle>
                          <circle cx="8" cy="12" r="2" className=""></circle>
                          <circle cx="16" cy="20" r="2"></circle>
                        </svg>
                        Filter
                      </button>
                    </div>


                    <div className="relative flex-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <input type="text" placeholder="Search 1302 components..." className="text-[15px] placeholder-gray-500 outline-none ring-inset focus:ring-gray-700 text-gray-200 bg-gray-900/70 w-full ring-gray-800 ring-1 rounded-xl pt-3 pr-48 pb-3 pl-10" />

                      <div className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2">
                        <div className="inline-flex ring-1 ring-inset ring-gray-800 xl:bg-gray-950 bg-gray-900/60 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center">
                          <button className="inline-flex xl:bg-gray-800/70 text-xs font-medium text-white bg-gray-800/70 border-gray-800 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center">
                            Components
                          </button>
                          <button className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white">
                            Sections
                          </button>
                          <button className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white">
                            Templates
                          </button>
                          <button className="inline-flex hover:text-white text-xs font-medium text-gray-300 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center">
                            Assets
                          </button>
                        </div>
                      </div>
                    </div>


                    <div className="flex items-center gap-3">
                      <button className="inline-flex ring-inset hover:text-white hover:ring-gray-700 transition text-sm font-medium text-gray-200 bg-gray-900 ring-gray-800 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="m6 8 6 6 6-6" className=""></path>
                        </svg>
                        Recommended
                      </button>
                    </div>
                  </div>
                </div>
              </section>


              <section className="mb-6">
                <div className="flex items-center justify-between">
                  <button className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-gray-300 ring-1 ring-inset ring-gray-800 hover:text-white hover:ring-gray-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <div className="flex gap-2 overflow-x-auto scrollbar-none px-2" style={{"scrollbarWidth": "none"}}>
                    <button className="chip active inline-flex ring-inset transition text-sm font-medium text-white bg-gray-900 ring-gray-700 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">
                      Button
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Card
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Section
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Background
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Logo
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Heading
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Header
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Hero
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Feature
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Pricing
                    </button>
                    <button className="chip inline-flex ring-1 ring-inset transition ring-gray-800 text-sm font-medium text-gray-300 bg-gray-900/50 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">
                      Testimonial
                    </button>
                    <button className="chip inline-flex ring-inset transition text-sm font-medium text-gray-300 bg-gray-900/50 ring-gray-800 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">
                      Form
                    </button>
                    <button className="chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800">
                      Footer
                    </button>
                  </div>
                  <button className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-gray-300 ring-1 ring-inset ring-gray-800 hover:text-white hover:ring-gray-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m9 18 6-6-6-6" className=""></path>
                    </svg>
                  </button>
                </div>
              </section>


              <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">

                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-black">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d98c7990-66a7-4e51-b746-3e37a1d353ba_800w.webp" alt="Shiny CTA preview" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-gray-950/70 px-2.5 py-1 text-xs font-medium text-gray-200 ring-1 ring-inset ring-gray-800">
                      button
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Animated Shiny CTA Button
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-gray-900/70 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-800">
                        button
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        animated
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        cta
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71ad0e95-131b-49d0-b467-355dc7813bbb_320w.webp" alt="Author" className="ring-1 ring-gray-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-gray-300">
                          Nancy Lemaire
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          365
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          69
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-white">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05c76ddb-2184-4dd8-8e7d-3465ddde84ea_800w.webp" alt="Gradient CTA preview" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-neutral-950/70 px-2.5 py-1 text-xs font-medium text-neutral-200 ring-1 ring-inset ring-neutral-800">
                      button
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Animated Gradient CTA Button with Flow
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        button
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        cta
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        animated
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp" alt="Author" className="ring-1 ring-neutral-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-neutral-300">
                          Benny To
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          334
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          64
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-black">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39d6bd74-d7eb-4a3c-afb3-43091ef38e3e_800w.webp" alt="Hover CTA" className="transition duration-500 group-hover:scale-[1.02] w-full h-full object-cover" />
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full bg-neutral-100 text-neutral-900 px-2.5 py-1 text-xs font-medium">
                        PRO
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Animated Hover CTA Button with Shadow
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        button
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        tailwind
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        animated
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg" alt="Author" className="ring-1 ring-neutral-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-neutral-300">
                          Benjamin Boulanger
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          294
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          13
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-neutral-950">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ba6f795-44b8-4fb8-8d5e-0e4c4599dc65_800w.webp" alt="Dark Hero Section" className="transition duration-500 group-hover:scale-[1.02] w-full h-full object-cover" />
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full bg-neutral-100 text-neutral-900 px-2.5 py-1 text-xs font-medium">
                        PRO
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Dark Hero Section with AI Product
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        hero
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        feature
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        grid
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp" alt="Author" className="ring-1 ring-neutral-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-neutral-300">
                          Benny To
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          286
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          15
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-black">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b34c34bf-c2b8-4550-af1d-a366851554b1_800w.webp" alt="Aura Background" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full bg-neutral-100 text-neutral-900 px-2.5 py-1 text-xs font-medium">
                        PRO
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Full-Screen Animated Aura Background
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        background
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        animated
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        tailwind
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp" alt="Author" className="ring-1 ring-neutral-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-neutral-300">
                          Benny To
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          246
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          61
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-black">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4df30c23-a097-4c8e-afdf-8e0168abcd6b_800w.webp" alt="Hover CTA with Glow" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Animated CTA Button with Hover Glow
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        button
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        cta
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        tailwind
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg" alt="Author" className="ring-1 ring-neutral-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-neutral-300">
                          Megan Lyn
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          235
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          26
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-neutral-950">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/103e9b5d-1921-4cd5-a80d-9445881f318d_800w.webp" alt="Marquee Testimonials" className="transition duration-500 group-hover:scale-[1.02] w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Animated Marquee Testimonials
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        testimonials
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        carousel
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        marquee
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b476201e-4ebc-447a-b9b9-0c7e4e8302a0_320w.jpg" alt="Author" className="ring-1 ring-neutral-800 w-6 h-6 object-cover rounded-full" />
                        <span className="text-sm font-medium text-neutral-300">
                          Meng To
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          219
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          14
                        </span>
                      </div>
                    </div>
                  </div>
                </article>


                <article className="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden bg-white">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82781526-4ef8-4653-8d37-243d7194d6e5_800w.webp" alt="Market Data Feature" className="transition duration-500 group-hover:scale-[1.02] w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      Real-Time Market Data Feature Showcase
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        hero
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        feature
                      </span>
                      <span className="tag inline-flex items-center rounded-lg bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-800">
                        section
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" alt="Author" className="h-6 w-6 rounded-full object-cover ring-1 ring-neutral-800" />
                        <span className="text-sm font-medium text-neutral-300">
                          Meng To
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          214
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-4 w-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                          9
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </main>


              <footer className="pt-10 pb-10 xl:pt-8 xl:pb-0">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-500">Showing 10 of 1302 components</p>
                  <div className="flex items-center gap-2">
                    <button className="inline-flex gap-2 ring-inset hover:ring-gray-700 hover:text-white transition text-sm font-medium text-gray-300 bg-gray-900 ring-gray-800 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-left" className="lucide lucide-chevron-left h-4 w-4"><path d="m15 18-6-6 6-6"></path></svg>
                      Previous
                    </button>
                    <button className="inline-flex ring-inset hover:ring-gray-700 hover:text-white transition ring-gray-800 ring-1 text-sm font-medium text-gray-300 bg-gray-900 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-right" className="lucide lucide-chevron-right h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="sm:px-8 sm:gap-y-0 sm:mt-48 max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 space-y-6 gap-x-y-0 gap-y-0">
            <div className="flex xl:pl-0 xl:pr-0 xl:mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-white/40 max-w-7xl mt-6 mr-auto mb-6 ml-auto pr-0 pl-0 gap-x-2 gap-y-2 items-center">
              <span className="text-base">+</span>
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-base">+</span>
            </div>
            <section className="sm:pl-0 sm:pr-0 max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-x-4 gap-y-4">
                <div className="flex gap-3 gap-x-3 gap-y-3 items-center">
                  <h2 className="sm:text-5xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-medium text-white tracking-tighter">
                    Show the World Your Creativity.
                  </h2>
                  <span className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-lg text-white/50">
                    Upload and share your best work with the community. Build your
                    portfolio, inspire others, and get discovered by teams and
                    creators around the globe.
                  </span>
                </div>
              </div>
            </section>

            <header className="sticky top-0 z-40 -mx-2 mb-6 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"></header>

            <section className="sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll bg-gray-900/60 max-w-7xl border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

                <div className="flex flex-col min-h-full justify-between">
                  <div className="">
                    <span className="text-sm font-normal text-gray-400">Portfolio</span>
                    <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">
                      Share Your Work with the World.
                    </h2>

                    <div className="mt-8 relative">
                      <div className="hidden sm:flex flex-col gap-4 relative text-gray-300 bg-transparent pr-4 pl-4">
                        <div className="relative">
                          <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-gray-900 border-emerald-400 border-2 rounded-full mt-0.5">
                              <div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-emerald-400 rounded-full"></div>
                            </div>
                            <div className="flex-1 pb-6">
                              <span className="text-sm font-medium text-emerald-300">
                                Build your portfolio
                              </span>
                              <p className="text-xs text-gray-400 mt-1">
                                Showcase your best work in a beautiful gallery
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-indigo-400 bg-gray-900 z-10 relative mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute top-0.5 left-0.5"></div>
                            </div>
                            <div className="flex-1 pb-6">
                              <span className="text-sm font-medium text-indigo-300">
                                Get discovered
                              </span>
                              <p className="text-xs text-gray-400 mt-1">
                                Reach hiring teams and creative communities worldwide
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-purple-400 bg-gray-900 z-10 relative mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-0.5 left-0.5"></div>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-medium text-purple-300">
                                Inspire others
                              </span>
                              <p className="text-xs text-gray-400 mt-1">
                                Connect with designers and share your creative journey
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-10">
                    <div className="">
                      <p className="text-sm font-medium text-white tracking-tight">
                        Upload and shine
                      </p>
                      <p className="text-sm text-gray-300 mt-1 max-w-sm">
                        Upload your projects, add descriptions, and let your
                        creativity speak for itself. Start building your legacy today.
                      </p>
                      <button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-medium text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center mt-4">
                        <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl">
                          Upload your work
                        </span>
                        <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 blur-md rounded-xl">
                          Upload your work
                        </span>
                        <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>
                        <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
                      </button>
                    </div>
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 relative">
                  <article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 9h18"></path>
                          <path d="M9 21V9"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                        Dashboard
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-lg font-medium tracking-tight leading-tight">
                        Cloud Analytics
                      </p>
                    </div>
                  </article>

                  <article className="relative overflow-hidden aspect-[4/3] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60f49edd-2009-43cf-a12a-d82fd91aae5e_800w.jpg)] bg-cover border-white/10 rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                          <circle cx="8" cy="21" r="1"></circle>
                          <circle cx="19" cy="21" r="1"></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                        E-commerce
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-lg font-medium tracking-tight leading-tight">
                        Shop Pro
                      </p>
                    </div>
                  </article>

                  <article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg)]">
                    <div className="bg-gradient-to-b from-black/0 via-black/20 to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                          <path d="M12 2v2"></path>
                          <path d="M12 22v-2"></path>
                          <path d="m17 20.66-1-1.73"></path>
                          <path d="M11 10.27 7 3.34"></path>
                          <path d="m20.66 17-1.73-1"></path>
                          <path d="m3.34 7 1.73 1"></path>
                          <path d="M14 12h8"></path>
                          <path d="M2 12h2"></path>
                          <path d="m20.66 7-1.73 1"></path>
                          <path d="m3.34 17 1.73-1"></path>
                          <path d="m17 3.34-1 1.73"></path>
                          <path d="m11 13.73-4 6.93"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                        Launch
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-lg font-medium tracking-tight leading-tight">
                        Boltshift Launch
                      </p>
                    </div>
                  </article>

                  <article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7df94c66-5d1e-4235-a476-1d2d8881a456_800w.jpg)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                        System
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-lg font-medium tracking-tight leading-tight">
                        Nexus System
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <section className="mb-6"></section>
          </div>
          <div className="max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 space-y-6 gap-x-y-0 gap-y-0 sm:px-8 sm:gap-y-0 sm:mt-48">
            <div className="flex xl:pl-0 xl:pr-0 xl:mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-white/40 max-w-7xl mt-6 mr-auto mb-6 ml-auto pr-0 pl-0 gap-x-2 gap-y-2 items-center">
              <span className="text-base">+</span>
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-base">+</span>
            </div>
            <section className="sm:pl-0 sm:pr-0 max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-x-4 gap-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="sm:text-5xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-medium text-white tracking-tighter">
                    Hire Top Designers.
                  </h2>
                  <span className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-lg text-white/50">
                    Browse top talent from around the world. Whether you need a
                    freelancer or a full-time designer, hire skilled creatives to
                    bring your vision to life.
                  </span>
                </div>
              </div>
            </section>

            <header className="sticky top-0 z-40 -mx-2 mb-6 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"></header>

            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-5 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll gap-x-4 gap-y-4">

              <div className="flex flex-col gap-4 sm:gap-5">
                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg" alt="Cloud Analytics dashboard project" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;h=200&amp;fit=crop" alt="Sarah Chen" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div>
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Sarah Chen
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Product Designer at Stripe
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>

                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60f49edd-2009-43cf-a12a-d82fd91aae5e_800w.jpg" alt="E-commerce platform" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;h=200&amp;fit=crop" alt="Marcus Rodriguez" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div>
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Marcus Rodriguez
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            UX Lead at Shopify
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>

                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27aa90c0-b947-4bfd-b8da-7cf0ab291ab1_800w.jpg" alt="Portfolio website" className="h-48 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;h=200&amp;fit=crop" alt="Elena Popova" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div>
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Elena Popova
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Creative Director at Adobe
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>


              <div className="flex flex-col gap-4 sm:gap-5">
                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg" alt="Product launch landing page" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&amp;h=200&amp;fit=crop" alt="James Park" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div>
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            James Park
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Design System Lead at Vercel
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>

                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a76e4f7e-e0f8-4732-8b99-5b3abe6fd91d_800w.jpg" alt="Mobile app design" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&amp;h=200&amp;fit=crop" alt="Aria Thompson" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div>
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Aria Thompson
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Senior Designer at Apple
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>

                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cac77434-d322-40be-a298-4e2198a61175_800w.jpg" alt="Data visualization" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&amp;h=200&amp;fit=crop" alt="Luca Martinez" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div className="">
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Luca Martinez
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Data Visualization Designer at Google
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>


              <div className="flex flex-col gap-4 sm:gap-5">
                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5162c07d-8a65-4a42-9a8c-c48dbea36297_800w.jpg" alt="Design system" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;h=200&amp;fit=crop" alt="Noah Kim" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div className="">
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Noah Kim
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Design Systems Architect at Figma
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>

                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1350108-f0ef-4f66-83ae-fe50447f6f74_800w.jpg" alt="Brand identity and campaign visuals" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&amp;h=200&amp;fit=crop" alt="Zara Williams" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div className="">
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Zara Williams
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            Brand Designer at Nike
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>

                <a href="#work" className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 rounded-3xl shadow-sm backdrop-blur">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68a7825c-0f07-4225-a8e0-d22929426aa3_800w.jpg" alt="Web application" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&amp;h=200&amp;fit=crop" alt="Oliver Jensen" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                        <div className="">
                          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                            Oliver Jensen
                          </h4>
                          <p className="text-xs text-white/70 font-geist">
                            UI Engineer at Linear
                          </p>
                        </div>
                      </div>
                      <button className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <section className="mb-6 flex justify-end">
              <button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-medium text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center gap-2">
                <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl">
                  Find More Designers
                </span>
                <span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-xl absolute top-0 right-0 bottom-0 left-0 blur-md">
                  Find More Designers
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right relative z-10">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>
                <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
              </button>
            </section>
          </div>
          <div className="max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 space-y-6 gap-x-y-0 gap-y-0 sm:px-8 sm:gap-y-0 sm:mt-48">
            <div className="flex xl:pl-0 xl:pr-0 xl:mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-white/40 max-w-7xl mt-6 mr-auto mb-6 ml-auto pr-0 pl-0 gap-x-2 gap-y-2 items-center">
              <span className="text-base">+</span>
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-base">+</span>
            </div>
            <section className="sm:pl-0 sm:pr-0 max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-x-4 gap-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="sm:text-5xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-medium text-white tracking-tighter">
                    Connect with Other Designers
                  </h2>
                  <span className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-lg text-white/50">
                    Join a vibrant community of creators. Exchange ideas, collaborate
                    on projects, and grow alongside designers who share your passion.
                  </span>
                </div>
              </div>
            </section>

            <header className="sticky top-0 z-40 -mx-2 mb-6 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"></header>

            <section className="sm:px-6 sm:pb-20 lg:px-8 lg:pt-4 lg:pb-12 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-20 pl-4">
              <div className="relative mt-8 sm:mt-12">

                <div className="mx-auto max-w-6xl overflow-hidden" style={{"maskImage": "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)", "WebkitMaskImage": "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)", "maskComposite": "intersect", "WebkitMaskComposite": "destination-in"}}>
                  <div className="flex w-max" style={{"animation": "marquee-left 80s linear infinite", "willChange": "transform"}}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg" alt="Community member" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg" alt="Community member" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg" alt="Community member" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-6 flex justify-end">
              <button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-medium text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center gap-2">
                <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl">
                  Join the Community
                </span>
                <span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-xl absolute top-0 right-0 bottom-0 left-0 blur-md">
                  Join the Community
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right relative z-10">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>
                <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
              </button>
            </section>
          </div>




          <footer className="sm:px-8 sm:mt-48 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-full border-white/5 border-t mt-48 mr-auto ml-auto pt-16 pr-6 pb-12 pl-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                  <h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80">
                    Product
                  </h5>
                  <ul className="space-y-3 text-base text-white/70">
                    <li>
                      <a className="transition hover:text-white" href="#features">
                        Features
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#templates">
                        Templates
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#integrations">
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#pricing">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80">
                    Resources
                  </h5>
                  <ul className="space-y-3 text-base text-white/70">
                    <li>
                      <a className="transition hover:text-white" href="#docs">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#api">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#guides">Guides</a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#support">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80">
                    Company
                  </h5>
                  <ul className="space-y-3 text-base text-white/70">
                    <li>
                      <a className="transition hover:text-white" href="#about">About</a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#careers">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#blog">Blog</a>
                    </li>
                    <li>
                      <a className="transition hover:text-white" href="#customers">
                        Customers
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80">
                    Stay Updated
                  </h5>
                  <p className="text-base text-white/60 mb-4">
                    Get the latest updates and news from BuildX.
                  </p>
                  <form className="space-y-3">
                    <input type="email" required="" placeholder="you@company.com" className="w-full h-10 px-4 rounded-xl border text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 backdrop-blur border-white/20 bg-white/10 text-white" />
                    <button className="w-full group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-medium text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] relative shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center">
                      <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl">
                        Subscribe
                      </span>
                      <span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-xl absolute top-0 right-0 bottom-0 left-0 blur-md">
                        Subscribe
                      </span>
                      <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>
                      <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <a href="#" className="inline-flex items-center justify-center bg-center mix-blend-screen w-[60px] h-[60px] bg-[url(https://cdn.midjourney.com/3f5c16da-080f-427f-a80d-ee75c8f5a173/0_0.png?w=800&amp;q=80)] bg-cover rounded invert"></a>
                  <div className="flex items-center gap-4 text-base text-white/60">
                    <span>© 2025</span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <a href="#privacy" className="transition hover:text-white">Privacy</a>
                    <span className="text-white/20">/</span>
                    <a href="#terms" className="transition hover:text-white">Terms</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-white/5 text-white/70 hover:text-white hover:bg-white/10" href="#" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{"strokeWidth": "1.5"}}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-white/5 text-white/70 hover:text-white hover:bg-white/10" href="#" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{"strokeWidth": "1.5"}}>
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-white/5 text-white/70 hover:text-white hover:bg-white/10" href="#" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{"strokeWidth": "1.5"}}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}