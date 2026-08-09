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
    "content": "\n// Configure Tailwind to include our custom 3D transform utilities\ntailwind.config = {\ntheme: {\nextend: {\n// Add any custom theme extensions here if needed\n}\n},\nplugins: [\nfunction({ addUtilities }) {\nconst rotateXUtilities = {};\nconst rotateYUtilities = {};\nconst rotateZUtilities = {};\nconst rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];\n// Generate rotate-x utilities\nrotateValues.forEach((value) => {\nrotateXUtilities[`.rotate-x-${value}`] = {\n'--tw-rotate-x': `${value}deg`,\ntransform: `\ntranslate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))\nrotateX(var(--tw-rotate-x, 0))\nrotateY(var(--tw-rotate-y, 0))\nrotateZ(var(--tw-rotate-z, 0))\nskewX(var(--tw-skew-x, 0))\nskewY(var(--tw-skew-y, 0))\nscaleX(var(--tw-scale-x, 1))\nscaleY(var(--tw-scale-y, 1))\n`.replace(/\\\\s+/g, ' ').trim(),\n};\nif (value !== 0) {\nrotateXUtilities[`.-rotate-x-${value}`] = {\n'--tw-rotate-x': `-${value}deg`,\ntransform: `\ntranslate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))\nrotateX(var(--tw-rotate-x, 0))\nrotateY(var(--tw-rotate-y, 0))\nrotateZ(var(--tw-rotate-z, 0))\nskewX(var(--tw-skew-x, 0))\nskewY(var(--tw-skew-y, 0))\nscaleX(var(--tw-scale-x, 1))\nscaleY(var(--tw-scale-y, 1))\n`.replace(/\\\\s+/g, ' ').trim(),\n};\n}\n});\n// Generate rotate-y utilities\nrotateValues.forEach((value) => {\nrotateYUtilities[`.rotate-y-${value}`] = {\n'--tw-rotate-y': `${value}deg`,\ntransform: `\ntranslate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))\nrotateX(var(--tw-rotate-x, 0))\nrotateY(var(--tw-rotate-y, 0))\nrotateZ(var(--tw-rotate-z, 0))\nskewX(var(--tw-skew-x, 0))\nskewY(var(--tw-skew-y, 0))\nscaleX(var(--tw-scale-x, 1))\nscaleY(var(--tw-scale-y, 1))\n`.replace(/\\\\s+/g, ' ').trim(),\n};\nif (value !== 0) {\nrotateYUtilities[`.-rotate-y-${value}`] = {\n'--tw-rotate-y': `-${value}deg`,\ntransform: `\ntranslate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))\nrotateX(var(--tw-rotate-x, 0))\nrotateY(var(--tw-rotate-y, 0))\nrotateZ(var(--tw-rotate-z, 0))\nskewX(var(--tw-skew-x, 0))\nskewY(var(--tw-skew-y, 0))\nscaleX(var(--tw-scale-x, 1))\nscaleY(var(--tw-scale-y, 1))\n`.replace(/\\\\s+/g, ' ').trim(),\n};\n}\n});\n// Generate rotate-z utilities\nrotateValues.forEach((value) => {\nrotateZUtilities[`.rotate-z-${value}`] = {\n'--tw-rotate-z': `${value}deg`,\ntransform: `\ntranslate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))\nrotateX(var(--tw-rotate-x, 0))\nrotateY(var(--tw-rotate-y, 0))\nrotateZ(var(--tw-rotate-z, 0))\nskewX(var(--tw-skew-x, 0))\nskewY(var(--tw-skew-y, 0))\nscaleX(var(--tw-scale-x, 1))\nscaleY(var(--tw-scale-y, 1))\n`.replace(/\\\\s+/g, ' ').trim(),\n};\nif (value !== 0) {\nrotateZUtilities[`.-rotate-z-${value}`] = {\n'--tw-rotate-z': `-${value}deg`,\ntransform: `\ntranslate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))\nrotateX(var(--tw-rotate-x, 0))\nrotateY(var(--tw-rotate-y, 0))\nrotateZ(var(--tw-rotate-z, 0))\nskewX(var(--tw-skew-x, 0))\nskewY(var(--tw-skew-y, 0))\nscaleX(var(--tw-scale-x, 1))\nscaleY(var(--tw-scale-y, 1))\n`.replace(/\\\\s+/g, ' ').trim(),\n};\n}\n});\n// Perspective utilities\nconst perspectiveUtilities = {\n\".perspective-none\": { perspective: \"none\" },\n\".perspective-dramatic\": { perspective: \"100px\" },\n\".perspective-near\": { perspective: \"300px\" },\n\".perspective-normal\": { perspective: \"500px\" },\n\".perspective-midrange\": { perspective: \"800px\" },\n\".perspective-distant\": { perspective: \"1200px\" },\n};\n// Transform style utilities\nconst transformStyleUtilities = {\n\".transform-style-preserve-3d\": { \"transform-style\": \"preserve-3d\" },\n\".transform-style-flat\": { \"transform-style\": \"flat\" },\n};\naddUtilities({\n...rotateXUtilities,\n...rotateYUtilities,\n...rotateZUtilities,\n...perspectiveUtilities,\n...transformStyleUtilities,\n});\n}\n]\n};\n"
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
    "content": "\n        lucide.createIcons();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "dark";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-neutral-950 text-white overflow-x-hidden antialiased selection:bg-rose-500/30 selection:text-rose-200";
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
    <div className="aura-source-body bg-neutral-950 text-white overflow-x-hidden antialiased selection:bg-rose-500/30 selection:text-rose-200">
      <div className="aura-background-component top-0 w-full -z-10 absolute hue-rotate-90 saturate-50 brightness-150 h-[800px]" data-alpha-mask="65" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 65%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 65%, transparent)"}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
        <div data-us-project="HzcaAbRLaALMhHJp8gLY" className="absolute w-full h-full left-0 top-0 -z-10"></div>

      </div></div>


          <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                      <a href="#" className="flex items-center gap-2 group">
                          <div className="relative flex items-center justify-center w-6 h-6 rounded bg-gradient-to-tr from-rose-600 to-orange-600 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="bot" className="lucide lucide-bot w-4 h-4"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                          </div>
                          <span className="font-medium tracking-tight text-sm text-neutral-200 group-hover:text-white transition-colors">Nexus</span>
                      </a>
                      <div className="hidden md:flex items-center gap-6">
                          <a href="#" className="text-sm font-normal text-neutral-400 hover:text-white transition-colors">Platform</a>
                          <a href="#" className="text-sm font-normal text-neutral-400 hover:text-white transition-colors">Solutions</a>
                          <a href="#" className="text-sm font-normal text-neutral-400 hover:text-white transition-colors">Developers</a>
                          <a href="#" className="text-sm font-normal text-neutral-400 hover:text-white transition-colors">Pricing</a>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <a href="#" className="hidden sm:block text-sm font-normal text-neutral-400 hover:text-white transition-colors">Log in</a>
                      <a href="#" className="text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10 rounded-full px-4 py-1.5 transition-all text-neutral-200">
                          Get Access
                      </a>
                  </div>
              </div>
          </nav>


          <main className="sm:pt-40 sm:pb-24 flex flex-col pt-32 pb-20 relative items-center justify-center">


              <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none">
                  <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-rose-600/10 blur-[120px] rounded-full opacity-60 mix-blend-screen"></div>
                  <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
              </div>


              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-32">


                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/30 text-rose-300 text-xs font-medium mb-8 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles w-3 h-3"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                      <span className="">Nexus Engine v2.0 is now live</span>
                  </div>


                  <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
                      Intelligent agents <br className="hidden sm:block" />
                      built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-orange-400">Scale</span>
                  </h1>


                  <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                      Leverage our proprietary neural engine to build, train, and deploy complex AI chatbots in milliseconds. Stop writing boilerplate, start creating.
                  </p>


                  <div className="flex flex-col sm:flex-row gap-4 gap-x-2 gap-y-2 items-center justify-center">
          <button className="group relative flex items-center justify-center px-12 h-14 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 text-white text-lg font-medium shadow-[0_0_35px_-5px_rgba(220,38,38,0.7),inset_0_1px_0_0_rgba(255,255,255,0.4)] border-t border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.9),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
              <span className="drop-shadow-md">Get started</span>
          </button>
          <button className="group relative h-14 px-8 rounded-full bg-black border border-white/20 text-white font-semibold text-sm flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/40 shadow-[0_0_30px_-5px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.3),inset_0_0_25px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none"></div>

              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70 pointer-events-none"></div>

              <div className="absolute top-[35%] right-[25%] w-[2px] h-[2px] bg-white rounded-full opacity-60 shadow-[0_0_2px_white] animate-pulse pointer-events-none"></div>
              <div className="absolute bottom-[30%] right-[15%] w-[1px] h-[1px] bg-white rounded-full opacity-40 pointer-events-none"></div>
              <div className="absolute top-[40%] left-[45%] w-[1px] h-[1px] bg-white rounded-full opacity-30 pointer-events-none"></div>

              <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-4 h-4 fill-current"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" className=""></path></svg>
                  Watch Demo
              </span>
          </button>
      </div>
              </div>


              <div className="sm:mt-0 w-full max-w-6xl mt-20 mr-auto ml-auto pr-4 pl-4 relative perspective-1000" role="application">
          <div className="absolute -inset-4 bg-gradient-to-tr from-rose-600/20 via-purple-500/10 to-orange-500/20 rounded-[2rem] blur-3xl opacity-40 -z-10">
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden ring-1 ring-white/5 flex flex-col h-[800px] transform-style-preserve-3d">

              <header className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0A0A0A] shrink-0 justify-between">
                  <div className="flex items-center gap-1.5" aria-label="Window controls">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                  </div>
                  <div className="text-[10px] font-medium text-neutral-500 flex items-center gap-1 opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-2.5 h-2.5" aria-hidden="true">
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      nexus-ai.com
                  </div>
                  <div className="w-10"></div>
              </header>

              <div className="flex flex-1 overflow-hidden">
                  <nav className="w-64 border-r border-white/5 bg-[#080808] hidden md:flex flex-col flex-shrink-0" aria-label="Main Navigation">
                      <div className="p-4 pt-6">
                          <div className="flex items-center gap-3 mb-6 px-1">
                              <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-rose-600 to-orange-600 text-white shadow-lg shadow-rose-900/20">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
                                      <path d="M12 8V4H8"></path>
                                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                      <path d="M2 14h2"></path>
                                      <path d="M20 14h2"></path>
                                      <path d="M15 13v2"></path>
                                      <path d="M9 13v2"></path>
                                  </svg>
                              </div>
                              <span className="text-sm font-semibold text-white tracking-tight">Nexus AI</span>
                          </div>

                          <button aria-label="Start a new conversation" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 bg-gradient-to-r from-rose-600 to-orange-600 text-white hover:from-rose-500 hover:to-orange-500 shadow-md shadow-rose-900/40">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4 text-white">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                              </svg>
                              New Chat
                          </button>
                      </div>

                      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
                          <div className="px-3 py-1.5 text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Recent
                          </div>

                          <a href="#" aria-current="page" className="group flex items-center justify-between px-3 py-2 rounded-lg text-sm text-white bg-white/5 border border-white/5 transition-colors">
                              <span className="flex items-center gap-3 truncate min-w-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4 text-rose-400 shrink-0">
                                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                      <polyline points="14 2 14 8 20 8"></polyline>
                                      <line x1="16" x2="8" y1="13" y2="13"></line>
                                      <line x1="16" x2="8" y1="17" y2="17"></line>
                                      <line x1="10" x2="8" y1="9" y2="9"></line>
                                  </svg>
                                  <span className="truncate">Q4 Financial Report</span>
                              </span>
                              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button aria-label="Edit chat" className="p-0.5 text-neutral-500 hover:text-white">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                                  </button>
                                  <button aria-label="Delete chat" className="p-0.5 text-neutral-500 hover:text-red-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M15 6V4c0-1-1-2-2-2h-2c-1 0-2 1-2 2v2"></path></svg>
                                  </button>
                              </div>
                          </a>

                          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-4 h-4 text-neutral-500">
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                              <span className="truncate">Marketing Strategy</span>
                          </a>

                          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-4 h-4 text-neutral-500">
                                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                  <circle cx="9" cy="9" r="2"></circle>
                                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                              </svg>
                              <span className="truncate">Logo Concepts</span>
                          </a>
                      </div>

                      <footer className="p-4 border-t border-white/5 bg-[#0A0A0A]">
                          <div className="bg-neutral-900/50 rounded-lg p-3 border border-white/5 mb-4" aria-label="Plan Usage">
                              <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] font-medium text-neutral-400">Pro Plan</span>
                                  <span className="text-[10px] text-neutral-500">85% used</span>
                              </div>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                  <div className="h-full bg-gradient-to-r from-rose-500 to-orange-500 rounded-full w-[85%]"></div>
                              </div>
                          </div>

                          <button aria-label="User profile and settings" className="flex items-center gap-3 w-full px-2 py-2 text-sm text-neutral-400 hover:text-white transition-colors group">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-medium shrink-0">JD</div>
                              <div className="flex flex-col items-start flex-1 min-w-0">
                                  <span className="text-xs font-medium text-white truncate w-full text-left">John Doe</span>
                                  <span className="text-[10px] text-neutral-500 truncate w-full text-left">john@nexus.ai</span>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          </button>
                      </footer>
                  </nav>

                  <main className="flex-1 relative bg-[#050505] flex flex-col min-w-0">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden="true">
                      </div>

                      <div className="flex-1 p-6 sm:p-10 overflow-y-auto relative z-10 flex flex-col max-w-4xl mx-auto w-full">

                          <div className="flex-1 flex flex-col justify-center mb-10" role="region" aria-label="Action Templates">
                              <div className="text-center mb-10">
                                  <h2 className="text-3xl font-medium text-white mb-3 tracking-tight">How can I help you today?
                                  </h2>
                                  <p className="text-neutral-500 font-light">Ask anything or start with a template below</p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full" role="list">
                                  <button role="listitem" aria-label="Analyze Document template" className="group p-4 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-white/10 transition-all text-left relative overflow-hidden">
                                              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                                              <div className="flex items-start gap-4">
                                                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-rose-400 group-hover:text-rose-300 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-search"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg>
                                                  </div>
                                                  <div>
                                                      <h3 className="text-sm font-medium text-white mb-1 group-hover:text-rose-200 transition-colors">Analyze Document</h3>
                                                      <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400">Extract insights and sentiment from PDFs.</p>
                                                  </div>
                                              </div>
                                          </button>

                                  <button role="listitem" aria-label="Content Creation template" className="group p-4 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-white/10 transition-all text-left relative overflow-hidden">
                                              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                                              <div className="flex items-start gap-4">
                                                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-orange-400 group-hover:text-orange-300 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                                                  </div>
                                                  <div>
                                                      <h3 className="text-sm font-medium text-white mb-1 group-hover:text-orange-200 transition-colors">Content Creation</h3>
                                                      <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400">Generate blog posts, social media copies.</p>
                                                  </div>
                                              </div>
                                          </button>

                                  <button role="listitem" aria-label="Code Assistant template" className="group p-4 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-white/10 transition-all text-left relative overflow-hidden">
                                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                                              <div className="flex items-start gap-4">
                                                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                                                  </div>
                                                  <div>
                                                      <h3 className="text-sm font-medium text-white mb-1 group-hover:text-purple-200 transition-colors">Code Assistant</h3>
                                                      <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400">Debug, refactor, or write code snippets.</p>
                                                  </div>
                                              </div>
                                          </button>

                                  <button role="listitem" aria-label="Brainstorming template" className="group p-4 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-white/10 transition-all text-left relative overflow-hidden">
                                              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                                              <div className="flex items-start gap-4">
                                                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-teal-400 group-hover:text-teal-300 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z"></path></svg>
                                                  </div>
                                                  <div>
                                                      <h3 className="text-sm font-medium text-white mb-1 group-hover:text-teal-200 transition-colors">Brainstorming</h3>
                                                      <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400">Generate creative ideas and strategies.</p>
                                                  </div>
                                              </div>
                                          </button>
                              </div>
                          </div>

                          <div className="relative mt-auto">
                              <div className="relative rounded-xl border border-white/10 bg-neutral-900/40 shadow-xl overflow-hidden ring-1 ring-white/5">
                                  <input type="text" placeholder="Send a message..." className="w-full h-14 pl-4 pr-14 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-light focus:ring-2 focus:ring-rose-500/50 transition-shadow duration-150" aria-label="Message input" />
                                  <div className="absolute right-2 top-2 bottom-2 flex items-center gap-1">
                                      <button aria-label="Attach file" className="p-2 text-neutral-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                      </button>
                                      <button aria-label="Send message" className="p-2 bg-gradient-to-tr from-rose-500 to-orange-500 text-white rounded-lg hover:from-rose-400 hover:to-orange-400 transition-colors shadow-lg shadow-rose-900/40">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-4 9-2-7-14-3 20-3z"></path></svg>
                                      </button>
                                  </div>
                              </div>
                              <div className="text-center mt-3">
                                  <p className="text-[10px] text-neutral-600">Nexus AI can make mistakes. Consider checking
                                      important information.</p>
                              </div>
                          </div>
                      </div>

                  </main>
              </div>
          </div>

          <aside className="absolute -bottom-12 -right-12 w-[380px] bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 z-50 hidden lg:block animate-in fade-in slide-in-from-bottom-8 duration-700 ring-1 ring-white/5" role="complementary" aria-label="Live Content Analysis">
              <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" aria-hidden="true"></div>
                      <h3 className="text-xs font-medium text-white uppercase tracking-wider">Live Analysis</h3>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">14ms</span>
              </div>

              <div className="space-y-4">
                  <blockquote className="bg-neutral-900/50 rounded-lg p-4 border border-white/5 text-sm text-neutral-300 font-light leading-relaxed">
                      "The user friendliness is
                      <span className="bg-rose-500/10 text-rose-400 border-b border-rose-500/30 pb-0.5" aria-label="exceptional (Positive)">exceptional</span>
                      and customer support is
                      <span className="bg-orange-500/10 text-orange-400 border-b border-orange-500/30 pb-0.5" aria-label="fantastic (Positive)">fantastic</span>.
                      They
                      <span className="bg-purple-500/10 text-purple-400 border-b border-purple-500/30 pb-0.5" aria-label="assisted (Action)">assisted</span>
                      me in setting up the system."
                  </blockquote>

                  <div className="space-y-3">
                      <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-500">Sentiment Score</span>
                          <span className="text-xs font-mono text-emerald-400">98.5% Positive</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-[10px] font-medium text-rose-400">
                                      <span className="w-1 h-1 rounded-full bg-rose-500" aria-hidden="true"></span>
                          Opinion
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-[10px] font-medium text-orange-400">
                                      <span className="w-1 h-1 rounded-full bg-orange-500" aria-hidden="true"></span>
                          Reaction
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-medium text-purple-400">
                                      <span className="w-1 h-1 rounded-full bg-purple-500" aria-hidden="true"></span>
                          Action
                          </span>
                      </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                      <button className="flex items-center gap-3 w-full p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors border border-white/5 group" aria-label="Use suggested reply">
                          <div className="w-8 h-8 rounded bg/5 flex items-center justify-center shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-white">
                                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z">
                                  </path>
                              </svg>
                          </div>
                          <div className="flex flex-col items-start">
                              <span className="text-xs font-medium text-white">Suggested Reply</span>
                              <span className="text-[10px] text-neutral-400">Drafted based on positive sentiment</span>
                          </div>
                          <div className="ml-auto p-1.5 text-neutral-300 group-hover:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                          </div>
                      </button>
                  </div>
              </div>
          </aside>
      </div>


              <section className="z-10 w-full max-w-6xl mt-28 mr-auto mb-28 ml-auto pt-12 pr-6 pl-6 relative">


                  <div className="text-center mb-24 relative">

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-rose-500/10 blur-[90px] rounded-full -z-10 pointer-events-none"></div>

                      <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">Deploy Custom AI Agents Instantly</h2>
                      <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                          Train Nexus on your documents, links, and sitemaps. Create intelligent chatbots that understand your business and delight your customers 24/7.
                      </p>
                  </div>


                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">


                      <div className="relative group rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 h-[420px] flex flex-col justify-between overflow-hidden hover:border-white/15 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>


                          <div className="relative flex-1 w-full flex flex-col items-center pt-8">
                              <div className="flex items-start justify-center gap-12 sm:gap-16 z-10">

                                  <div className="flex flex-col items-center gap-3 group/icon">
                                      <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover/icon:text-white group-hover/icon:border-white/20 transition-all">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="file-text" className="lucide lucide-file-text w-5 h-5"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                                      </div>
                                      <span className="text-xs text-neutral-500 font-medium">Upload docs</span>
                                  </div>

                                  <div className="flex flex-col items-center gap-3 group/icon">
                                      <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover/icon:text-white group-hover/icon:border-white/20 transition-all">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="link" className="lucide lucide-link w-5 h-5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                      </div>
                                      <span className="text-xs text-neutral-500 font-medium">Connect URLs</span>
                                  </div>

                                  <div className="flex flex-col items-center gap-3 group/icon">
                                      <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover/icon:text-white group-hover/icon:border-white/20 transition-all">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="share-2" className="lucide lucide-share-2 w-5 h-5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                                      </div>
                                      <span className="text-xs text-neutral-500 font-medium">Sync sitemap</span>
                                  </div>
                              </div>


                              <div className="relative h-12 w-full max-w-[280px] mt-[-10px]">
                                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-t from-white/10 to-transparent"></div>
                                  <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                  <div className="absolute bottom-0 left-[20%] h-4 w-px bg-white/10"></div>
                                  <div className="absolute bottom-0 right-[20%] h-4 w-px bg-white/10"></div>
                              </div>


                              <div className="w-full max-w-sm mt-8 relative">
                                  <div className="grid grid-cols-4 gap-4 text-[10px] uppercase tracking-wider text-neutral-500 font-medium mb-3 pl-2">
                                      <div>Source</div>
                                      <div>Tokens</div>
                                      <div>Status</div>
                                      <div>Vectors</div>
                                  </div>
                                  <div className="grid grid-cols-4 gap-4 text-xs text-neutral-300 font-mono py-2 pl-2 border-t border-white/5 bg-white/[0.02] rounded-lg">
                                      <div>knowledge.pdf</div>
                                      <div>45K</div>
                                      <div className="text-emerald-500">Ready</div>
                                      <div>1.2K</div>
                                  </div>
                                  <div className="grid grid-cols-4 gap-4 text-xs text-neutral-600 font-mono py-2 pl-2 border-t border-white/5 opacity-50">
                                      <div>help-center</div>
                                      <div>12K</div>
                                      <div className="text-emerald-500">Ready</div>
                                      <div>0.8K</div>
                                  </div>

                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A] pointer-events-none"></div>
                              </div>
                          </div>


                          <div className="relative z-20 mx-2 mb-1 flex items-center justify-between px-5 py-3 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md">
                              <span className="text-sm text-neutral-400 font-light">Knowledge Base</span>
                              <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-up" className="lucide lucide-arrow-up w-4 h-4"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                              </button>
                          </div>
                      </div>


                      <div className="relative group rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 h-[420px] flex flex-col justify-between overflow-hidden hover:border-white/15 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>


                          <div className="relative flex-1 w-full flex items-center justify-center pb-8">

                              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 300">

                                  <path d="M200 150 C 200 100, 120 100, 120 80" stroke="white" fill="none" strokeWidth="1.5"></path>

                                  <path d="M200 150 C 200 100, 280 100, 280 80" stroke="white" fill="none" strokeWidth="1.5"></path>

                                  <path d="M200 150 C 200 150, 80 150, 80 140" stroke="white" fill="none" strokeWidth="1.5"></path>

                                  <path d="M200 150 C 200 150, 320 150, 320 140" stroke="white" fill="none" strokeWidth="1.5"></path>

                                  <path d="M200 150 L 200 90" stroke="white" fill="none" strokeWidth="1.5"></path>
                              </svg>



                              <div className="absolute top-[20%] left-[25%] w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:scale-110 transition-transform duration-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="message-square" className="lucide lucide-message-square w-4 h-4"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                              </div>

                              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:scale-110 transition-transform duration-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="trello" className="lucide lucide-trello w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><rect width="3" height="9" x="7" y="7"></rect><rect width="3" height="5" x="14" y="7"></rect></svg>
                              </div>

                              <div className="absolute top-[20%] right-[25%] w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:scale-110 transition-transform duration-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="message-circle" className="lucide lucide-message-circle w-4 h-4"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                              </div>

                              <div className="absolute top-[40%] left-[15%] w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:scale-110 transition-transform duration-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="slack" className="lucide lucide-slack w-4 h-4"><rect width="3" height="8" x="13" y="2" rx="1.5"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect width="3" height="8" x="8" y="14" rx="1.5"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect width="8" height="3" x="14" y="13" rx="1.5"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect width="8" height="3" x="2" y="8" rx="1.5"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
                              </div>

                              <div className="absolute top-[40%] right-[15%] w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:scale-110 transition-transform duration-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="send" className="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                              </div>


                              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-600/20 to-orange-600/20 flex items-center justify-center border border-white/5">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="blocks" className="lucide lucide-blocks w-6 h-6 text-white"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect x="14" y="2" width="8" height="8" rx="1"></rect></svg>
                                  </div>
                              </div>


                               <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
                          </div>


                          <div className="relative z-20 mx-2 mb-1 flex items-center justify-between px-5 py-3 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md">
                              <span className="text-sm text-neutral-400 font-light">Ecosystem Integrations</span>
                              <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-up" className="lucide lucide-arrow-up w-4 h-4"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                              </button>
                          </div>
                      </div>

                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-2">


                      <div className="flex flex-col gap-5 group">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="smartphone" className="lucide lucide-smartphone w-5 h-5"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                          </div>
                          <div>
                              <h3 className="text-xl font-medium text-white mb-3">Native Mobile Experience</h3>
                              <p className="text-[15px] text-neutral-400 font-light leading-relaxed">
                                  Stay connected to your AI fleet from anywhere. Monitor conversations and intervene in real-time.
                              </p>
                          </div>
                      </div>


                      <div className="flex flex-col gap-5 group">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="terminal-square" className="lucide lucide-terminal-square w-5 h-5"><path d="m7 11 2-2-2-2"></path><path d="M11 13h4"></path><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect></svg>
                          </div>
                          <div className="">
                              <h3 className="text-xl font-medium text-white mb-3">Developer API</h3>
                              <p className="text-[15px] text-neutral-400 font-light leading-relaxed">
                                  Build custom interfaces or workflows using our comprehensive API. Complete control over your data and interactions.
                              </p>
                          </div>
                      </div>


                      <div className="flex flex-col gap-5 group">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="languages" className="lucide lucide-languages w-5 h-5"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
                          </div>
                          <div>
                              <h3 className="text-xl font-medium text-white mb-3">95+ Languages</h3>
                              <p className="text-[15px] text-neutral-400 font-light leading-relaxed">
                                  Automatically detect and translate conversations in real-time. Support global customers without expanding your support team.
                              </p>
                          </div>
                      </div>

                  </div>
              </section>


              <section className="z-10 w-full max-w-6xl mt-28 mr-auto mb-28 ml-auto pt-12 pr-6 pl-6 relative">


                  <div className="text-center mb-24 relative">

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-xs font-medium mb-6 backdrop-blur-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles w-3.5 h-3.5"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                          <span>Plans &amp; Pricing</span>
                      </div>

                      <h2 className="text-5xl sm:text-6xl font-medium tracking-tight text-white mb-6">Simple, transparent pricing</h2>
                  </div>


                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                      <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 flex flex-col relative group h-full">
                          <div className="mb-6">
                              <h3 className="text-lg font-normal text-white mb-2">Starter</h3>
                              <div className="flex items-baseline gap-1">
                                  <span className="text-5xl font-medium text-white tracking-tight">$15</span>
                              </div>
                              <p className="text-sm text-neutral-500 mt-2 font-light">per month</p>
                          </div>


                          <div className="rounded-2xl bg-neutral-900/30 border border-white/5 p-5 mb-8 flex-1 flex flex-col">
                              <h4 className="text-sm font-medium text-white mb-4">Plan Details</h4>
                              <div className="space-y-0 text-sm mb-6">
                                  <div className="flex justify-between py-3 border-b border-white/5">
                                      <span className="text-neutral-400 font-light">Users</span>
                                      <span className="text-white font-light">1</span>
                                  </div>
                                  <div className="flex justify-between py-3 border-b border-white/5">
                                      <span className="text-neutral-400 font-light">Generations</span>
                                      <span className="text-white font-light">20k<span className="text-neutral-500">/mo</span></span>
                                  </div>
                                  <div className="flex justify-between py-3">
                                      <span className="text-neutral-400 font-light">Engine</span>
                                      <span className="text-white font-light"><span className="text-neutral-500 mr-1">Base</span> GPT-3.5</span>
                                  </div>
                              </div>
                              <div className="mt-auto">
                                   <button className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm">
                                      Get Started
                                  </button>
                              </div>
                          </div>


                          <div className="">
                              <h4 className="text-sm font-medium text-white mb-4">Features</h4>
                              <ul className="space-y-4">
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      Basic Chat Assistant
                                  </li>
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      5 Project Workspaces
                                  </li>
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      Standard Editor
                                  </li>
                                   <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      10 Languages
                                  </li>
                              </ul>
                          </div>
                      </div>


                      <div className="rounded-3xl border border-rose-500/20 bg-[#0A0A0A] p-6 flex flex-col relative shadow-[0_0_40px_-20px_rgba(225,29,72,0.15)] h-full">
                          <div className="mb-6">
                              <h3 className="text-lg font-normal text-white mb-2">Growth</h3>
                              <div className="flex items-baseline gap-3">
                                  <span className="text-5xl font-medium text-white tracking-tight">$49</span>
                                  <span className="text-3xl text-neutral-600 line-through decoration-neutral-600 font-light">$69</span>
                              </div>
                              <p className="text-sm text-neutral-500 mt-2 font-light">per month</p>
                          </div>


                          <div className="rounded-2xl bg-neutral-900/30 border border-white/5 p-5 mb-8 flex-1 flex flex-col">
                              <h4 className="text-sm font-medium text-white mb-4">Plan Details</h4>
                              <div className="space-y-0 text-sm mb-6">
                                  <div className="flex justify-between py-3 border-b border-white/5">
                                      <span className="text-neutral-400 font-light">Users</span>
                                      <span className="text-white font-light">Up to 5</span>
                                  </div>
                                  <div className="flex justify-between py-3 border-b border-white/5">
                                      <span className="text-neutral-400 font-light">Generations</span>
                                      <span className="text-white font-light">Unlimited</span>
                                  </div>
                                  <div className="flex justify-between py-3">
                                      <span className="text-neutral-400 font-light">Engine</span>
                                      <span className="text-white font-light"><span className="text-neutral-500 mr-1">Latest</span> GPT-4</span>
                                  </div>
                              </div>
                              <div className="mt-auto">
                                  <button className="w-full py-3 rounded-xl bg-rose-600 text-white font-medium hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/20 text-sm">
                                      Start Growth Trial
                                  </button>
                              </div>
                          </div>


                          <div className="">
                              <h4 className="text-sm font-medium text-white mb-4">Everything in Starter, plus:</h4>
                              <ul className="space-y-4">
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-rose-500"><path d="M20 6 9 17l-5-5"></path></svg>
                                      Advanced Context Window
                                  </li>
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-rose-500"><path d="M20 6 9 17l-5-5"></path></svg>
                                      Priority Generation Queue
                                  </li>
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-rose-500"><path d="M20 6 9 17l-5-5"></path></svg>
                                      AI Canvas Editor Pro
                                  </li>
                                   <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-rose-500"><path d="M20 6 9 17l-5-5"></path></svg>
                                      95+ Languages &amp; Dialects
                                  </li>
                              </ul>
                          </div>
                      </div>


                      <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 flex flex-col relative group h-full">
                          <div className="mb-6">
                              <h3 className="text-lg font-normal text-white mb-2">Scale</h3>
                              <div className="flex items-baseline gap-1">
                                  <span className="text-5xl font-medium text-white tracking-tight">$299</span>
                              </div>
                              <p className="text-sm text-neutral-500 mt-2 font-light">per month</p>
                          </div>


                          <div className="rounded-2xl bg-neutral-900/30 border border-white/5 p-5 mb-8 flex-1 flex flex-col">
                              <h4 className="text-sm font-medium text-white mb-4">Plan Details</h4>
                              <div className="space-y-0 text-sm mb-6">
                                  <div className="flex justify-between py-3 border-b border-white/5">
                                      <span className="text-neutral-400 font-light">Users</span>
                                      <span className="text-white font-light">Unlimited</span>
                                  </div>
                                  <div className="flex justify-between py-3 border-b border-white/5">
                                      <span className="text-neutral-400 font-light">Generations</span>
                                      <span className="text-white font-light">Unlimited</span>
                                  </div>
                                  <div className="flex justify-between py-3">
                                      <span className="text-neutral-400 font-light">Engine</span>
                                      <span className="text-white font-light"><span className="text-neutral-500 mr-1">Fine-tuned</span> GPT-4</span>
                                  </div>
                              </div>
                              <div className="mt-auto">
                                  <button className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm">
                                      Contact Sales
                                  </button>
                              </div>
                          </div>


                          <div className="">
                              <h4 className="text-sm font-medium text-white mb-4">Everything in Growth, plus:</h4>
                              <ul className="space-y-4">
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      Custom Model Training
                                  </li>
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      Dedicated Success Manager
                                  </li>
                                  <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      SSO &amp; Advanced Security
                                  </li>
                                   <li className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-white"><path d="M20 6 9 17l-5-5"></path></svg>
                                      99.9% Uptime SLA
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </section>


              <section className="z-10 w-full max-w-4xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
                   <div className="text-center mb-16 relative">

                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/10 blur-[90px] rounded-full -z-10 pointer-events-none"></div>
                      <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">Everything You Need to Know</h2>
                      <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                          Common questions about billing, features, and enterprise capabilities. If you can't find what you're looking for, our support team is here to help.
                      </p>
                  </div>

                  <div className="space-y-4">

                      <details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/30 transition-all duration-300">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                              <span className="text-base font-medium text-white group-hover:text-rose-200 transition-colors">How does the AI training process work?</span>
                              <span className="transition group-open:rotate-45">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                              </span>
                          </summary>
                          <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                              Simply upload your documents (PDF, CSV, TXT) or connect your website URL. Nexus scans and indexes your content to create a semantic knowledge base, allowing the AI to answer questions accurately based on your specific data.
                          </div>
                      </details>


                      <details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/30 transition-all duration-300">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                              <span className="text-base font-medium text-white group-hover:text-rose-200 transition-colors">Can I customize the chatbot's appearance?</span>
                               <span className="transition group-open:rotate-45">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                              </span>
                          </summary>
                          <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                              Yes, fully. You can customize the chat widget's colors, logo, launcher icon, and welcome messages to match your brand identity perfectly. You can also use our unstyled React component for complete design control.
                          </div>
                      </details>


                       <details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/30 transition-all duration-300">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                              <span className="text-base font-medium text-white group-hover:text-rose-200 transition-colors">Is my data used to train other models?</span>
                               <span className="transition group-open:rotate-45">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                              </span>
                          </summary>
                          <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                              Never. Your data is strictly isolated and encrypted. We do not use your customer interactions or uploaded documents to train our base models or share them with other customers. Your data remains yours.
                          </div>
                      </details>


                      <details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/30 transition-all duration-300">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                              <span className="text-base font-medium text-white group-hover:text-rose-200 transition-colors">What happens when the AI doesn't know the answer?</span>
                               <span className="transition group-open:rotate-45">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                              </span>
                          </summary>
                          <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                              You can configure a 'fallback' behavior. The AI can either admit it doesn't know, provide contact information, or automatically escalate the conversation to a human agent via email, Slack, or your helpdesk software.
                          </div>
                      </details>


                      <details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/30 transition-all duration-300">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                              <span className="text-base font-medium text-white group-hover:text-rose-200 transition-colors">Do you offer an on-premise solution?</span>
                               <span className="transition group-open:rotate-45">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                              </span>
                          </summary>
                          <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                             Yes, for enterprise clients with strict compliance requirements, we offer self-hosted and on-premise deployment options. Contact our sales team to discuss your specific infrastructure needs.
                          </div>
                      </details>
                  </div>
              </section>

          </main>


          <footer className="bg-[#0A0A0A] border-t border-white/10 pt-20 pb-10 relative overflow-hidden font-sans">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                  <div className="lg:col-span-2 flex flex-col items-start">
                      <a href="#" className="flex items-center gap-2 mb-6 group">
                          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-orange-600 text-white shadow-lg shadow-rose-900/20 ring-1 ring-white/10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="bot" className="lucide lucide-bot w-5 h-5"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                          </div>
                          <span className="font-medium tracking-tight text-xl text-white group-hover:text-rose-100 transition-colors">Nexus</span>
                      </a>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
                          Leverage our proprietary neural engine to build, train, and deploy complex AI chatbots in milliseconds.
                      </p>
                      <div className="flex items-center gap-3">
                          <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter transition-transform group-hover/icon:scale-110"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                          </a>
                          <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github transition-transform group-hover/icon:scale-110"><path d="M15 22v-4a4.8 5 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                          </a>
                          <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-transform group-hover/icon:scale-110"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </a>
                          <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord transition-transform group-hover/icon:scale-110"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.2c.3-.4 1-.5 1.4-.2 1.9 1.2 4.3 1.2 6.2 0 .5-.2 1.1-.1 1.4.3l.5.7c.3.4.2 1-.2 1.3-2.3 1.7-5.5 1.7-7.8 0-.4-.3-.5-1-.2-1.4l.5-.7z"></path><path d="M22 12a10 10 0 0 1-20 0c0-1.2.2-2.3.5-3.3.1-.4.5-.6.9-.5l.1.1c.4.1.7.5.6.9-.2.8-.4 1.7-.4 2.6 0 4.6 3.9 8.3 8.7 8.3s8.7-3.7 8.7-8.3c0-.9-.2-1.8-.4-2.6-.1-.4.2-.8.6-.9l.1-.1c.4-.1.8.1.9.5.3 1 .5 2.1.5 3.3Z"></path></svg>
                          </a>
                      </div>
                  </div>


                  <div>
                      <h4 className="text-white font-medium mb-6 text-sm">Product</h4>
                      <ul className="space-y-3">
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Features</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Integrations</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Pricing</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Changelog</a></li>

                      </ul>
                  </div>


                  <div>
                      <h4 className="text-white font-medium mb-6 text-sm">Resources</h4>
                      <ul className="space-y-3">
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Documentation</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">API Reference</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Community</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Help Center</a></li>

                      </ul>
                  </div>


                  <div>
                      <h4 className="text-white font-medium mb-6 text-sm">Company</h4>
                      <ul className="space-y-3">
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">About</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Blog</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Careers</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Contact</a></li>

                      </ul>
                  </div>


                  <div>
                      <h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
                      <ul className="space-y-3">
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Privacy</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Terms</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Security</a></li>
                          <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Cookies</a></li>
                      </ul>
                  </div>
              </div>


              <div className="mb-16 p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex-1 text-center md:text-left">
                          <h3 className="text-lg font-medium text-white mb-2">Subscribe to our newsletter</h3>
                          <p className="text-sm text-neutral-400 font-light">Get the latest updates on AI advancements and Nexus features.</p>
                      </div>
                      <div className="w-full md:w-auto">
                          <form className="flex w-full md:w-96 items-center gap-2">
                              <input type="email" placeholder="Enter your email" className="w-full h-10 px-4 rounded-lg bg-neutral-900 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/5 transition-all" />
                              <button className="h-10 px-5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap">
                                  Subscribe
                              </button>
                          </form>
                      </div>
                  </div>
              </div>


              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-500 font-light">© 2024 Nexus AI Inc. All rights reserved.</p>
                  <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </div>
                          <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">Systems Operational</span>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}