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
    "content": "\n/* Sequence animation on scroll */\n(function () {\nconst style = document.createElement(\"style\");\nstyle.textContent = `\n.animate-on-scroll { animation-play-state: paused !important; }\n.animate-on-scroll.animate { animation-play-state: running !important; }\n`;\ndocument.head.appendChild(style);\nconst once = true;\nif (!window.__inViewIO) {\nwindow.__inViewIO = new IntersectionObserver((entries) => {\nentries.forEach((entry) => {\nif (entry.isIntersecting) {\nentry.target.classList.add(\"animate\");\nif (once) window.__inViewIO.unobserve(entry.target);\n}\n});\n}, { threshold: 0.1, rootMargin: \"0px 0px -5% 0px\" });\n}\nwindow.initInViewAnimations = function (selector = \".animate-on-scroll\") {\ndocument.querySelectorAll(selector).forEach((el) => {\nwindow.__inViewIO.observe(el);\n});\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => {\ninitInViewAnimations();\nlucide.createIcons();\n});\n})();\n"
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js\",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        (function() {\n          const container = document.getElementById('karaoke-text');\n          if (!container) return;\n          \n          const words = container.querySelectorAll('.k-word');\n          let ticking = false;\n\n          const updateWords = () => {\n            // \"Reading line\" at 75% of viewport height\n            const triggerLine = window.innerHeight * 0.75;\n\n            words.forEach((word) => {\n              const rect = word.getBoundingClientRect();\n              \n              // If word is above the trigger line, activate it\n              if (rect.top < triggerLine) {\n                word.classList.add('active');\n              } else {\n                word.classList.remove('active');\n              }\n            });\n            \n            ticking = false;\n          };\n\n          const onScroll = () => {\n            if (!ticking) {\n              window.requestAnimationFrame(updateWords);\n              ticking = true;\n            }\n          };\n\n          window.addEventListener('scroll', onScroll, { passive: true });\n          window.addEventListener('resize', onScroll, { passive: true });\n          \n          // Initial check\n          updateWords();\n        })();\n      "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n            (function() {\n              const wrapper = document.querySelector('.stack-cards-container');\n              const cards = document.querySelectorAll('.stack-card');\n              \n              if (!wrapper || !cards.length) return;\n              \n              const updateStack = () => {\n                cards.forEach((card, index) => {\n                  const nextCard = cards[index + 1];\n                  const cardRect = card.getBoundingClientRect();\n                  \n                  // Sticky positions from classes: 112px, 128px, 144px (top-28, top-32, top-36)\n                  // We can read computed top or approximate.\n                  const stickyTop = 112 + (index * 16); // 7rem + offset\n                  \n                  if (nextCard) {\n                    const nextRect = nextCard.getBoundingClientRect();\n                    // Distance of next card from top of this card\n                    const distance = nextRect.top - cardRect.top;\n                    \n                    // Height of card roughly 500px to 600px.\n                    // If distance is large (scrolled far apart), scale is 1.\n                    // As distance shrinks (next card overlaps), scale down.\n                    \n                    // We want the active front card (the one sticking) to be 1.02\n                    // The one getting covered to shrink.\n                    \n                    // Check if *this* card is stuck\n                    const isStuck = cardRect.top <= (stickyTop + 1); // tolerance\n                    \n                    if (isStuck) {\n                       // Map distance [viewportHeight -> 0] to Scale [1.02 -> 0.9]\n                       // Actually, map distance [cardHeight -> 0]\n                       const overlapStart = window.innerHeight * 0.8; \n                       let progress = 1 - Math.max(0, Math.min(1, distance / overlapStart));\n                       \n                       // Usually when next card is far, scale is 1.02.\n                       // When next card is overlapping (distance ~0), scale is 0.9.\n                       // Wait, if distance is small, progress is high?\n                       // distance / overlapStart: 1 -> 0\n                       \n                       // Let's use simpler logic:\n                       // Scale = 1.02 - (progress * 0.12) => 0.9 at full overlap\n                       // Opacity = 1 - (progress * 0.5) => 0.5 at full overlap\n                       \n                       // Recalculate based on nextRect.top relative to window\n                       const gap = nextRect.top - stickyTop;\n                       const maxGap = window.innerHeight * 0.5; // range of animation\n                       const ratio = Math.max(0, Math.min(1, gap / maxGap));\n                       // ratio 1 = far away (active). ratio 0 = fully covered.\n                       \n                       const scale = 0.92 + (0.1 * ratio); // 0.92 -> 1.02\n                       const opacity = 0.5 + (0.5 * ratio); // 0.5 -> 1.0\n                       const brightness = 50 + (50 * ratio); // darken\n                       \n                       card.style.transform = `scale(${scale})`;\n                       card.style.opacity = `${opacity}`;\n                       card.style.filter = `brightness(${brightness}%)`;\n                    } else {\n                       // Not stuck yet (scrolling into view)\n                       // Should be scale 1.02 if fully in view?\n                       card.style.transform = 'scale(1.02)';\n                       card.style.opacity = '1';\n                       card.style.filter = 'brightness(100%)';\n                    }\n                  } else {\n                    // Last card always active if visible\n                    card.style.transform = 'scale(1.02)';\n                    card.style.opacity = '1';\n                    card.style.filter = 'brightness(100%)';\n                  }\n                });\n              };\n              \n              window.addEventListener('scroll', updateStack, { passive: true });\n              updateStack(); // init\n            })();\n            "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "scroll-smooth";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "selection:bg-blue-500/30 text-white bg-[#000000]";
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
    <div className="aura-source-body selection:bg-blue-500/30 text-white bg-[#000000]">
      <div className="aura-background-component top-0 w-full -z-10 absolute h-screen saturate-200 brightness-125" data-alpha-mask="80" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"}}><div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"}}>
        <div data-us-project="7BChNsgjdoJkLPEpWhX3" className="absolute w-full h-full left-0 top-0 -z-10"></div>

      </div></div>


          <section className="min-h-screen flex flex-col overflow-hidden w-full pt-6 pb-20 relative items-center justify-start">


              <div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px] pointer-events-none" data-alpha-mask="80" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"}}>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-zinc-950/0 to-zinc-950/0 opacity-70"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
              </div>


              <nav className="w-full max-w-6xl px-6 flex items-center justify-between z-50 mb-16 md:mb-24 [animation:animationIn_0.8s_ease-out_0.1s_both]">
                  <div className="flex items-center gap-2 group cursor-pointer">

                      <svg width="420" height="120" viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Looper logo" className="w-[147px] h-[42px]" strokeWidth="2" data-icon-replaced="true" style={{"width": "147px", "height": "42px", "color": "rgb(255, 255, 255)"}}>
        <text x="0" y="80" fill="currentColor" font-size="72" font-weight="600" letter-spacing="-1.5" font-family="Inter, SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" className="">
          Looper
        </text>
      </svg>


                  </div>

                  <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                      <a href="#features" className="hover:text-white transition-colors font-geist">Features</a>
                      <a href="#customers" className="hover:text-white transition-colors font-geist">Customers</a>
                      <a href="#pricing" className="hover:text-white transition-colors font-geist">Pricing</a>
                      <a href="#docs" className="hover:text-white transition-colors font-geist">Docs</a>
                  </div>

                  <div className="">
                       <button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-4 font-medium text-neutral-200 transition-all duration-300 hover:bg-zinc-800 hover:text-white ring-1 ring-white/10 hover:ring-white/20">
                          <span className="text-xs tracking-tight font-geist">Launch App</span>
                      </button>
                  </div>
              </nav>


              <div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.3s_both] text-center w-full max-w-7xl z-10 pr-4 pl-4 items-center">





                  <h1 className="md:text-7xl bg-clip-text text-5xl text-transparent tracking-tight font-geist bg-gradient-to-b from-white via-white to-white/60 max-w-2xl mb-6 pb-2">
                      Automate workflows  like never before
                  </h1>


                  <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light tracking-tight leading-relaxed mb-10 font-geist">
                      Less friction. More flow. Loopra turns complex manual processes into intelligent, self-healing automation loops that scale with your code.
                  </p>


                  <div className="flex flex-col sm:flex-row gap-4 mb-20 gap-x-2 gap-y-2 items-center">

                      <button className="hover:brightness-110 transition-all flex text-sm font-medium text-white bg-white border-transparent border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(59,130,246,0.5)] gap-x-2 gap-y-2 items-center" style={{"background": "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)"}}>
                          <span className="tracking-tight font-geist">Start Building</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </button>


                      <button className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[500ms] hover:-translate-y-[1px] hover:text-white shadow-lg overflow-hidden font-medium text-neutral-400 tracking-tight bg-zinc-900/50 border-zinc-700/50 border rounded-full py-3 px-6 items-center justify-center backdrop-blur-sm">
                        <span className="relative z-10 text-sm transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">View Documentation</span>
                        <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none text-sm font-medium opacity-0 font-geist">View Documentation</span>
                      </button>
                  </div>


                  <div className="group [animation:animationIn_0.8s_ease-out_0.5s_both] w-full relative">

        <div className="flex lg:pl-0 lg:pr-0 font-geist w-full h-[800px] pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">

        <div className="w-full h-full max-w-[1400px] bg-[#07070A] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative">

          <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl"></div>


          <div className="h-11 bg-[#07070A] border-b border-white/5 flex items-center justify-between px-4 select-none relative">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
              </div>

              <div className="ml-4 flex items-center gap-2">
                <button className="text-zinc-500 hover:text-zinc-200 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
                </button>
                <button className="text-zinc-500 hover:text-zinc-200 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </button>
              </div>
            </div>


            <div className="-translate-x-1/2 flex text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-1 absolute left-1/2 gap-x-2 gap-y-2 items-center">
              <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Prod
              </span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-300">nexus.ai</span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-400">builder</span>
            </div>


            <div className="flex items-center gap-2 text-zinc-500">

              <button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
              <button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
              </button>
              <button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </button>
            </div>
          </div>


          <div className="flex flex-1 overflow-hidden">

            <div className="flex flex-col hidden md:flex bg-[#07070A] w-50 border-white/5 border-r">
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/15">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-white tracking-tight">Looper</span>

                </div>
              </div>

              <div className="px-3 pb-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500">
                    <circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input className="bg-transparent outline-none text-xs text-zinc-300 placeholder:text-zinc-600 w-full" placeholder="Search workflows, runs..." />
                  <span className="text-[10px] text-zinc-600 border border-white/10 rounded px-1.5 py-0.5">⌘K</span>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest px-3 mb-2">Workspace</div>
                <nav className="space-y-0.5">
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">

                    Overview
                  </a>
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">

                    Inbox
                    <span className="ml-auto text-[10px] bg-sky-500/15 text-sky-300 px-1.5 py-0.5 rounded-full border border-sky-500/20">4</span>
                  </a>
                </nav>
              </div>

              <div className="px-3 py-2">
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest px-3 mb-2">Automation</div>
                <nav className="space-y-0.5">
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-white bg-white/5 rounded-md transition-colors font-medium border-l-2 border-sky-400">

                    Workflows
                  </a>
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">

                    Integrations
                  </a>
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">

                    Settings
                  </a>
                </nav>
              </div>

              <div className="mt-auto p-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-300">SJ</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white">Sarah Jenkins</span>
                    <span className="text-[10px] text-zinc-500">sarah@nexus.ai</span>
                  </div>
                  <button className="ml-auto text-zinc-500 hover:text-white transition">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                  </button>
                </div>
              </div>
            </div>


            <div className="flex-1 bg-[#050507] relative flex flex-col min-w-0">

              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#07070A]/70 backdrop-blur z-20">
                <div className="flex items-center gap-3 min-w-0">
                  <button className="text-zinc-500 hover:text-white transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"></path></svg>
                  </button>
                  <div className="h-4 w-px bg-white/10"></div>
                  <span className="text-zinc-500 text-sm shrink-0">Workflows</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-white font-medium text-sm truncate">Customer Onboarding v2</span>




                </div>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition border border-white/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    Test run
                  </button>
                  <button className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-sky-500 hover:bg-sky-400 text-black rounded-md shadow-[0_0_18px_rgba(56,189,248,0.25)] transition">
                    Deploy
                  </button>
                </div>
              </div>


              <div className="flex-1 relative overflow-hidden bg-[#050507]">

                <div className="absolute inset-0 opacity-25 pointer-events-none" style={{"backgroundImage": "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", "backgroundSize": "26px 26px"}}>
                </div>


                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>


                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.28)"></polygon>
                    </marker>
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
                      <feMerge>
                        <feMergeNode in="blur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>

                  <path d="M 274 310 C 332 310, 332 215, 390 215" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" filter="url(#softGlow)"></path>
                  <path d="M 274 310 C 332 310, 332 430, 390 430" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" filter="url(#softGlow)"></path>
                  <path d="M 646 215 C 700 215, 700 230, 760 230" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" filter="url(#softGlow)"></path>
                  <path d="M 646 430 C 700 430, 700 390, 760 390" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" filter="url(#softGlow)"></path>
                </svg>



                <div className="absolute left-[50px] top-[250px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-sky-500/10 border border-sky-500/20 rounded text-[10px] font-semibold text-sky-300 uppercase tracking-wide">Trigger</div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className=""><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" className=""></path><circle cx="8.5" cy="7" r="4" className=""></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium text-white">New subscriber</span>
                        <span className="text-[11px] text-zinc-500">Event from Web Form</span>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-400 bg-black/20 p-2 rounded-lg border border-white/10">
                      Source: <span className="text-zinc-200">Newsletter</span>
                      <span className="text-zinc-600">•</span>
                      List: <span className="text-zinc-200">Main</span>
                    </div>
                  </div>

                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-sky-400/80 rounded-full border-4 border-[#050507] shadow-[0_0_0_6px_rgba(56,189,248,0.08)] group-hover:scale-110 transition"></div>
                </div>


                <div className="absolute left-[390px] top-[140px] w-64 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer z-10">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">Action</div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className=""><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" className=""></path></svg>
                        </div>
                        <span className="text-sm font-medium text-white">Send email</span>
                      </div>
                      <button className="text-zinc-600 hover:text-white transition">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                      </button>
                    </div>

                    <div className="bg-black/20 p-3 rounded-xl border border-white/10 mb-2">
                      <div className="text-[10px] text-zinc-500 mb-1">Subject</div>
                      <div className="text-xs text-zinc-200 truncate">Welcome to Nexus — let’s automate your onboarding</div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-sky-300">
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        AI drafted
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-500">Tone: friendly</span>
                    </div>
                  </div>

                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507] group-hover:bg-sky-400/80 group-hover:scale-110 transition"></div>
                </div>


                <div className="absolute left-[390px] top-[370px] w-64 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">Logic</div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className=""><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </div>
                      <span className="text-sm font-medium text-white">Wait</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-300 bg-black/20 p-2 rounded-lg border border-white/10">
                      <span className="text-zinc-400">Duration</span>
                      <span className="font-mono text-sky-300">24h</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507] group-hover:bg-sky-400/80 group-hover:scale-110 transition"></div>
                </div>


                <div className="absolute left-[760px] top-[180px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer opacity-95">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">Integration</div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>
                      </div>
                      <span className="text-sm font-medium text-white">Add tag</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                      Apply: <span className="text-sky-200 bg-sky-500/10 border border-sky-500/20 px-1.5 py-0.5 rounded-md">Onboarded</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                </div>


                <div className="absolute left-[760px] top-[340px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer opacity-95">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">Condition</div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                      </div>
                      <span className="text-sm font-medium text-white">Check activity</span>
                    </div>
                    <div className="text-xs text-zinc-400">If: <span className="text-zinc-200">Clicked link</span></div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                </div>





                <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#07070A]/90 border-t border-white/5 flex items-center justify-between px-4 cursor-pointer hover:bg-white/5 transition backdrop-blur">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"></path></svg>
                    <span className="text-zinc-400">Runs</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-300">Success rate</span>
                    <span className="text-sky-300 font-mono">99.2%</span>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] text-zinc-500">
                    <span className="">Last run: 2m ago</span>
                    <span className="text-emerald-400">● Operational</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="w-80 bg-[#07070A] border-l border-white/5 flex flex-col hidden lg:flex">
              <div className="p-4 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">

                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-white">Send email</span>
                      <span className="text-[10px] text-zinc-500">Node • Action</span>
                    </div>
                  </div>
                  <button className="text-zinc-500 hover:text-white transition">

                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">AI assistant</div>
                  <div className="text-xs text-zinc-300 leading-relaxed mb-3">
                    Describe changes and I’ll update this node.
                  </div>
                  <div className="relative">
                    <textarea className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-xs text-zinc-200 focus:outline-none focus:border-sky-400/40 resize-none h-20 placeholder:text-zinc-600" placeholder="e.g. Make the subject more friendly, add personalization…"></textarea>
                    <button className="absolute bottom-2 right-2 px-2 py-1 bg-sky-500 text-black text-[10px] font-medium rounded-md hover:bg-sky-400 transition">Apply</button>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500">Config</div>
                    <span className="text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Valid</span>
                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-lg p-2">
                    <div className="text-[10px] text-zinc-500 mb-1">Subject</div>
                    <div className="text-xs text-zinc-200">Welcome to Nexus — let’s automate your onboarding</div>
                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-lg p-2">
                    <div className="text-[10px] text-zinc-500 mb-1">From</div>
                    <div className="text-xs text-zinc-200">support@nexus.ai</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-200 transition">Preview</button>
                    <button className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-200 transition">Variables</button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-zinc-500">Flow health</span>
                  <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">1 warning</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                    <div className="text-[10px] text-zinc-500">Nodes</div>
                    <div className="text-xs text-white font-medium">14</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                    <div className="text-[10px] text-zinc-500">Avg runtime</div>
                    <div className="text-xs text-white font-medium">~550ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

              </div>
          </section>


          <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="features">
        <section className="md:px-12 bg-zinc-950 pt-32 pr-6 pb-32 pl-6 relative overflow-hidden rounded-3xl border border-white/5">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="text-center max-w-5xl mr-auto ml-auto relative z-10">



            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-10 font-geist shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              [ The Philosophy ]
            </span>

            <h2 id="karaoke-text" className="text-3xl md:text-5xl leading-tight font-normal text-white mb-12 tracking-tight font-geist flex flex-wrap justify-center gap-x-[0.25em] gap-y-1">
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">We</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">build</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">the</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">nervous</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">system</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">for</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">the</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">autonomous</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">enterprise.</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">Rejecting</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">the</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">friction</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">of</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">manual</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">orchestration,</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">we</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">engineer</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">intelligent</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">loops</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">that</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">blend</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">data</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">precision</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">with</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">infinite</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">scale</span>
              <span className="k-word opacity-20 blur-[1px] text-zinc-500">to</span>
              <span className="italic font-serif inline-flex gap-x-[0.25em]">
                <span className="k-word opacity-20 blur-[1px] text-zinc-400">accelerate</span>
                <span className="k-word opacity-20 blur-[1px] text-zinc-400">and</span>
                <span className="k-word opacity-20 blur-[1px] text-zinc-400">evolve.</span>
              </span>
            </h2>

            <p className="text-xs text-zinc-500 uppercase tracking-[0.15em] mt-12 font-geist font-medium">
              Welcome to the new standard
            </p>


          </div>
        </section>
      </section><section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="features">
                <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)]">




                  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 gap-x-6 gap-y-6 items-start">
        <div className="">
          <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
            Features
          </p>
          <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
            Everything you need to build
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
            Powerful primitives designed for scale. Connect your entire stack with intelligent, self-healing workflows.
          </p>
        </div>
        <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
                      Explore Documentation
                    </button>
      </div>


                  <div className="flex w-full relative gap-x-0 gap-y-x-0 items-center justify-center">


        <div className="hidden lg:block w-[260px] h-[440px] relative translate-x-6">

          <svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" viewBox="0 0 260 440" fill="none" strokeWidth="2" style={{"width": "260px", "height": "440px"}}>
            <defs>
              <linearGradient id="beam-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"></stop>
                <stop offset="50%" stopColor="#60a5fa"></stop>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
              </linearGradient>
            </defs>


            <path d="M 52 144 C 150 144, 150 220, 260 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 52 144 C 150 144, 150 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="2" fill="none" className="animate-beam-path delay-100" strokeLinecap="round"></path>


            <path d="M 52 220 C 120 220, 180 220, 260 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 52 220 C 120 220, 180 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="2" fill="none" className="animate-beam-path" strokeLinecap="round"></path>


            <path d="M 52 296 C 150 296, 150 220, 260 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 52 296 C 150 296, 150 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="2" fill="none" className="animate-beam-path delay-200" strokeLinecap="round"></path>
          </svg>


          <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-blue-400 transition-colors">
                  <polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line>
              </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-blue-400 transition-colors">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line>
              </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-blue-400 transition-colors">
                  <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
              </svg>
            </div>
          </div>
        </div>



        <div className="relative">

          <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 border-2 border-zinc-950"></div>


          <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 border-2 border-zinc-950">
          </div>


          <div className="overflow-hidden flex flex-col group/card bg-[#09090b]/90 w-full h-[440px] max-w-[700px] z-10 rounded-[32px] ring-white/10 ring-1 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-xl">


            <div className="flex justify-center w-full mb-8 relative z-20">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-blue-500/20 ring-1 ring-blue-500/10 shadow-lg backdrop-blur-xl transition-all hover:bg-zinc-800/80 hover:border-blue-500/30 cursor-default group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 animate-pulse"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                    <span className="text-xs font-medium text-blue-100/90 font-geist tracking-wide">Detect anomalies in API latency and auto-scale pods</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse ml-1"></div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full relative z-10 overflow-y-auto md:overflow-hidden">


              <div className="col-span-1 pt-6 flex flex-col gap-4">

                <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-red-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-3 shadow-sm group/item cursor-pointer">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"></div>
                      <span className="text-[11px] font-semibold text-zinc-200 uppercase tracking-wider font-geist">Latency Spike</span>
                    </div>
                    <span className="text-[9px] text-zinc-500 font-mono">500ms</span>
                  </div>
                  <div className="">
                    <div className="text-sm text-white font-medium mb-1 font-geist">API Gateway</div>
                    <div className="text-[10px] text-zinc-400 font-geist">Region: us-east-1</div>
                    <div className="w-full h-1 bg-zinc-700/50 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-red-500 w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-span-1 flex flex-col gap-4">

                <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                    <span className="text-[11px] font-semibold text-white font-geist">Auto-Scaler</span>
                  </div>
                  <div className="">
                    <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Provisioning Nodes</div>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">+2 Instances</span>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-1">
                    <div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite]"></div>
                    <div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite_0.2s]"></div>
                    <div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite_0.4s]"></div>
                  </div>
                </div>


                <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:scale-[1.02] transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm h-full opacity-80 cursor-pointer relative overflow-hidden">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                    <span className="text-[11px] font-semibold text-white font-geist">Log Analysis</span>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Pattern Match</div>
                    <div className="text-[10px] text-zinc-500 font-mono">ERROR_CONNECTION_REFUSED</div>
                  </div>
                </div>
              </div>


              <div className="col-span-1 flex flex-col gap-4 pt-10">

                <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                    <span className="text-[11px] font-semibold text-white font-geist">Incident Report</span>
                  </div>
                  <div className="">
                    <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Generated by AI</div>
                    <div className="text-[10px] text-zinc-500 font-geist">Ticket #8924 created</div>
                  </div>
                  <div className="flex -space-x-2 mt-1">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect width="3" height="8" x="13" y="2" rx="1.5"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect width="3" height="8" x="8" y="14" rx="1.5"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect width="8" height="3" x="14" y="13" rx="1.5"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect width="8" height="3" x="2" y="8" rx="1.5"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm opacity-70 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                    <span className="text-[11px] font-semibold text-white font-geist">Slack Notify</span>
                  </div>
                  <div className="">
                    <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Channel: #ops-alerts</div>
                    <div className="text-[10px] text-zinc-500 font-geist">Sent 2s ago</div>
                  </div>
                </div>
              </div>
            </div>


            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-20">
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">

              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[ping_3s_ease-out_infinite] opacity-50">
                </div>
                <div className="absolute inset-2 rounded-full border border-blue-500/20 animate-[ping_3s_ease-out_1s_infinite] opacity-50">
                </div>

                <div className="relative w-14 h-14 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center group overflow-hidden ring-1 ring-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/20 to-transparent rotate-45 translate-y-full group-hover:translate-y-[-200%] transition-transform duration-1000 ease-in-out">
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                     <path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="relative hidden lg:block w-[260px] h-[440px]">

          <svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" viewBox="0 0 260 440" fill="none" strokeWidth="2" style={{"width": "260px", "height": "440px"}}>
            <defs>
              <linearGradient id="beam-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0"></stop>
                <stop offset="50%" stopColor="#67e8f9"></stop>
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"></stop>
              </linearGradient>
            </defs>


            <path d="M 0 220 C 100 220, 100 68, 208 68" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 0 220 C 100 220, 100 68, 208 68" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-300" strokeLinecap="round"></path>


            <path d="M 0 220 C 100 220, 100 144, 208 144" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 0 220 C 100 220, 100 144, 208 144" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-100" strokeLinecap="round"></path>


            <path d="M 0 220 C 100 220, 100 220, 208 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 0 220 C 100 220, 100 220, 208 220" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-500" strokeLinecap="round"></path>


            <path d="M 0 220 C 100 220, 100 296, 208 296" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 0 220 C 100 220, 100 296, 208 296" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-200" strokeLinecap="round"></path>


            <path d="M 0 220 C 100 220, 100 372, 208 372" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
            <path d="M 0 220 C 100 220, 100 372, 208 372" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-300" strokeLinecap="round"></path>
          </svg>


          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-purple-500/50 hover:shadow-purple-500/20 group/node">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-purple-400 transition-colors">
                  <rect width="3" height="8" x="13" y="2" rx="1.5"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect width="3" height="8" x="8" y="14" rx="1.5"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect width="8" height="3" x="14" y="13" rx="1.5"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect width="8" height="3" x="2" y="8" rx="1.5"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
              </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20 group/node">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-blue-400 transition-colors">
                  <path d="M21 10.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-zinc-500/50 hover:shadow-zinc-500/20 group/node">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-white transition-colors">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-red-500/50 hover:shadow-red-500/20 group/node">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-red-400 transition-colors">
                  <path d="M6 18h12"></path><path d="M6 8v10"></path><path d="M18 8v10"></path><path d="M12 2a5 5 0 0 1 5 5v1"></path><path d="M7 8V7a5 5 0 0 1 5-5"></path>
              </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50 hover:shadow-cyan-500/20 group/node">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover/node:text-cyan-400 transition-colors">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </div>
          </div>
        </div>

      </div>
                </div>
          </section><section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="features">
                <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 rounded-[28px] pt-6 pr-6 pb-6 pl-6 shadow-[0_0px_0px_rgba(0,0,0,0)] ring-1 ring-white/10 relative">


                  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between gap-x-6 gap-y-6 items-start mb-12">
                    <div className="">
                      <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
                        Product capabilities
                      </p>
                      <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
                        One platform, infinite workflows
                      </h2>
                      <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
                        Loopra connects to your stack, learns from your data, and turns repetitive tasks into reusable, intelligent playbooks.
                      </p>
                    </div>
                    <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
                      Explore Features
                    </button>
                  </div>


                  <div className="grid gap-4 md:grid-cols-3 gap-x-4 gap-y-4">


                    <div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">


                      <div className="flex flex-col h-full relative gap-4">
                        <div className="relative flex items-center justify-center rounded-xl h-52 overflow-hidden bg-[#020617] w-full shrink-0 border border-white/5">
                          <div className="absolute inset-0 opacity-20" style={{"backgroundImage": "radial-gradient(#3b82f6 1px, transparent 1px)", "backgroundSize": "20px 20px"}}></div>

                          <div className="relative z-10 w-56 h-56 scale-90">

                            <div className="absolute inset-2 rounded-full border border-zinc-800"></div>
                            <div className="absolute inset-2 rounded-full border-t-2 border-t-blue-500/80 border-l-0 border-r-0 border-b-0" style={{"transform": "rotate(40deg)"}}></div>

                            <div className="absolute inset-10 rounded-full border border-zinc-800"></div>
                            <div className="absolute inset-10 rounded-full border-t-2 border-t-cyan-400/80 border-l-0 border-r-0 border-b-0" style={{"transform": "rotate(-20deg)"}}></div>


                            <div className="absolute inset-[86px] rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center z-20">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="cpu" className="lucide lucide-cpu w-6 h-6 text-white"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>
                            </div>


                            <div className="absolute inset-0 z-10 pointer-events-none" style={{"animation": "orbit 40s linear infinite"}}>
                              <div className="absolute -left-1 top-16 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="database" className="lucide lucide-database w-3 h-3 text-zinc-400"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                              </div>
                              <div className="absolute right-2 top-6 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="cloud" className="lucide lucide-cloud w-3 h-3 text-zinc-400"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                              </div>
                              <div className="absolute -right-1 bottom-10 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="code" className="lucide lucide-code w-3 h-3 text-zinc-400"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative mt-auto pb-2 px-2">
                          <h3 className="text-lg font-medium text-white mb-2 font-geist">Unified Intelligence</h3>
                          <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                            Connect models, databases, and APIs. Manage context and tokens across your entire infrastructure.
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
                      <div className="flex flex-col h-full relative gap-4">
                        <div className="flex overflow-hidden h-52 bg-[#020617] rounded-xl relative items-center justify-center w-full shrink-0 border border-white/5">
                          <div className="grid grid-cols-3 w-full h-full z-10 p-4 gap-3" style={{"maskImage": "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)"}}>



                            <div className="flex flex-col gap-3 animate-col-down">
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="file-json" className="lucide lucide-file-json w-5 h-5 text-blue-400"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="webhook" className="lucide lucide-webhook w-5 h-5 text-purple-400"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="git-branch" className="lucide lucide-git-branch w-5 h-5 text-green-400"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="file-json" className="lucide lucide-file-json w-5 h-5 text-blue-400"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path></svg></div>
                            </div>

                            <div className="flex flex-col gap-3 animate-col-up">
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="slack" className="lucide lucide-slack w-5 h-5 text-white"><rect width="3" height="8" x="13" y="2" rx="1.5"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect width="3" height="8" x="8" y="14" rx="1.5"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect width="8" height="3" x="14" y="13" rx="1.5"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect width="8" height="3" x="2" y="8" rx="1.5"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="github" className="lucide lucide-github w-5 h-5 text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="figma" className="lucide lucide-figma w-5 h-5 text-white"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="slack" className="lucide lucide-slack w-5 h-5 text-white"><rect width="3" height="8" x="13" y="2" rx="1.5"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect width="3" height="8" x="8" y="14" rx="1.5"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect width="8" height="3" x="14" y="13" rx="1.5"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect width="8" height="3" x="2" y="8" rx="1.5"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg></div>
                            </div>

                            <div className="flex flex-col gap-3 animate-col-down">
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap w-5 h-5 text-yellow-400"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="activity" className="lucide lucide-activity w-5 h-5 text-red-400"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="server" className="lucide lucide-server w-5 h-5 text-cyan-400"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div>
                               <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap w-5 h-5 text-yellow-400"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
                            </div>
                          </div>
                        </div>

                        <div className="relative mt-auto pb-2 px-2">
                          <h3 className="text-lg font-medium text-white mb-2 font-geist">Connect Your Stack</h3>
                          <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                            Bring Github, Linear, Stripe, and AWS into a single view. Loopra handles the API glue.
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">

                      <div className="flex flex-col h-full relative gap-4">
                        <div className="relative flex items-center justify-center rounded-xl h-52 overflow-hidden bg-[#020617] w-full shrink-0 border border-white/5">
                          <div className="absolute inset-0 opacity-20" style={{"backgroundImage": "radial-gradient(#6366f1 1px, transparent 1px)", "backgroundSize": "16px 16px"}}></div>


                          <div className="relative z-10">
                              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-2xl animate-pulse-logo z-20 relative">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="workflow" className="lucide lucide-workflow w-8 h-8 text-white"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>
                              </div>

                              <div className="absolute top-1/2 left-1/2 -translate-x-24 -translate-y-12 bg-zinc-900 border border-white/10 p-2 rounded-lg animate-bounce duration-[2000ms]">
                                  <div className="w-8 h-2 rounded bg-zinc-700"></div>
                              </div>
                              <div className="absolute top-1/2 left-1/2 translate-x-16 translate-y-8 bg-zinc-900 border border-white/10 p-2 rounded-lg animate-bounce duration-[3000ms]">
                                  <div className="w-8 h-2 rounded bg-zinc-700"></div>
                              </div>
                          </div>
                        </div>

                        <div className="relative mt-auto pb-2 px-2">
                          <h3 className="text-lg font-medium text-white mb-2 font-geist">Auto-Routing</h3>
                          <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                            Automatically route tasks to the cheapest or smartest model based on complexity and cost.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
          </section><section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="features">
                <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">


                  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
        <div className="">
          <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
            How it works
          </p>
          <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
            Automate in three simple steps
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
            Connect your tools, define your logic, and let Loopra run workflows automatically in the background with AI-powered decisions.
          </p>
        </div>

        <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
          See how it works
        </button>
      </div>


                  <div className="flex flex-col gap-[35vh] pb-[20vh] relative stack-cards-container">


                    <div className="stack-card sticky top-28 overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top" data-card-index="0" style={{"transform": "scale(0.92)", "opacity": "0.5", "filter": "brightness(50%)"}}>

                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>


                      <div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
                        <div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">
                          01
                        </div>
                      </div>


                      <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">

                        <div className="relative flex flex-col items-center justify-center min-h-[420px]">
                          <div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                              <path d="M21 15V6"></path>
                              <path d="M18.5 6H21"></path>
                              <path d="M3 9v9"></path>
                              <path d="M3 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
                              <path d="M7 11h8"></path>
                              <path d="M7 15h6"></path>
                            </svg>
                          </div>

                          <div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
                            <div className="flex items-center justify-between mb-5">
                              <div className="h-3 w-28 rounded-full bg-white/10"></div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="h-2.5 w-16 rounded-full bg-white/10 mb-3"></div>
                                <div className="h-2 w-full rounded-full bg-white/5"></div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="h-2.5 w-20 rounded-full bg-white/10 mb-3"></div>
                                <div className="h-2 w-5/6 rounded-full bg-white/5"></div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="h-2.5 w-14 rounded-full bg-white/10 mb-3"></div>
                                <div className="h-2 w-2/3 rounded-full bg-white/5"></div>
                              </div>
                            </div>
                            <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4">
                              <div className="flex items-center justify-between">
                                <div className="h-2.5 w-28 rounded-full bg-white/10"></div>
                                <div className="h-2.5 w-16 rounded-full bg-white/10"></div>
                              </div>
                              <div className="mt-4 flex items-center gap-3">
                                <div className="flex-1 h-10 rounded-xl bg-white/5 border border-white/10"></div>
                                <div className="h-10 w-36 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.25)] relative overflow-hidden">
                                  <div className="absolute inset-0 bg-white/10"></div>
                                </div>
                              </div>
                              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                              <div className="mt-4 flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></div>
                                <div className="h-2.5 w-44 rounded-full bg-white/10"></div>
                                <div className="ml-auto h-2.5 w-16 rounded-full bg-white/10"></div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="relative flex flex-col justify-center">
                          <h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">Connect your data</h3>
                          <p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">
                            Link your tools (CRM, email, database, spreadsheets). Loopra unifies events and keeps everything in sync.
                          </p>
                          <div className="mt-8 flex flex-wrap gap-2">
                            <span className="text-[12px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">CRM</span>
                            <span className="text-[12px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">Email</span>
                            <span className="text-[12px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">Database</span>
                            <span className="text-[12px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">Sheets</span>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="stack-card sticky top-32 overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top" data-card-index="1" style={{"transform": "scale(0.92)", "opacity": "0.5", "filter": "brightness(50%)"}}>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none"></div>

                      <div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
                        <div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">
                          02
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
                        <div className="relative flex flex-col items-center justify-center min-h-[420px]">
                          <div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                              <path d="M12 2v6"></path>
                              <path d="M12 16v6"></path>
                              <path d="M4 12h6"></path>
                              <path d="M14 12h6"></path>
                              <path d="M7 5l3 3"></path>
                              <path d="M14 16l3 3"></path>
                              <path d="M17 5l-3 3"></path>
                              <path d="M10 16l-3 3"></path>
                            </svg>
                          </div>

                          <div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
                            <div className="flex items-center justify-between mb-5">
                              <div className="h-3 w-36 rounded-full bg-white/10"></div>
                              <div className="h-3 w-20 rounded-full bg-white/10"></div>
                            </div>
                            <div className="grid gap-3">
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10"></div>
                                  <div className="flex-1">
                                    <div className="h-2.5 w-40 rounded-full bg-white/10 mb-2"></div>
                                    <div className="h-2 w-2/3 rounded-full bg-white/5"></div>
                                  </div>
                                  <div className="h-8 w-20 rounded-xl bg-white/5 border border-white/10"></div>
                                </div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10"></div>
                                  <div className="flex-1">
                                    <div className="h-2.5 w-44 rounded-full bg-white/10 mb-2"></div>
                                    <div className="h-2 w-3/4 rounded-full bg-white/5"></div>
                                  </div>
                                  <div className="h-8 w-24 rounded-xl bg-white/5 border border-white/10"></div>
                                </div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 p-4 shadow-[0_0_35px_rgba(59,130,246,0.18)]">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 border border-white/10 shadow-[0_0_28px_rgba(59,130,246,0.25)] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/10"></div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="h-2.5 w-48 rounded-full bg-white/15 mb-2"></div>
                                    <div className="h-2 w-2/3 rounded-full bg-white/10"></div>
                                  </div>
                                  <div className="h-8 w-28 rounded-xl bg-white/10 border border-white/10"></div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-5 flex items-center gap-3">
                              <div className="flex-1 h-10 rounded-xl bg-white/5 border border-white/10"></div>
                              <div className="h-10 w-40 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.25)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/10"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative flex flex-col justify-center">
                          <h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">Build with AI instructions</h3>
                          <p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">
                            Describe your automation. Loopra generates steps, conditions, and routing so your workflow is ready to run.
                          </p>
                          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 max-w-xl">
                            <div className="text-[12px] uppercase tracking-widest text-blue-300/90 font-semibold font-geist mb-2">Example</div>
                            <div className="text-zinc-200 font-geist">
                              “When a lead replies, score it, assign an owner, and send a follow-up email.”
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="stack-card sticky top-36 overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top" data-card-index="2" style={{"transform": "scale(1.02)", "opacity": "1", "filter": "brightness(100%)"}}>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-blue-500/10 blur-[90px] rounded-full pointer-events-none"></div>

                      <div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
                        <div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">
                          03
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
                        <div className="relative flex flex-col items-center justify-center min-h-[420px]">
                          <div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                              <path d="M3 3v18h18"></path>
                              <path d="M7 14l3-3 4 4 6-7"></path>
                            </svg>
                          </div>

                          <div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
                            <div className="flex items-center justify-between mb-5">
                              <div>
                                <div className="h-3 w-28 rounded-full bg-white/10 mb-2"></div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-emerald-400/80"></div>
                                  <div className="h-2.5 w-20 rounded-full bg-white/10"></div>
                                </div>
                              </div>
                              <div className="h-9 w-28 rounded-xl bg-white/5 border border-white/10"></div>
                            </div>
                            <div className="grid gap-3">
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400/80"></div>
                                    <div className="h-2.5 w-40 rounded-full bg-white/10"></div>
                                  </div>
                                  <div className="h-2.5 w-14 rounded-full bg-white/10"></div>
                                </div>
                                <div className="h-2 w-full rounded-full bg-white/5"></div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400/80"></div>
                                    <div className="h-2.5 w-48 rounded-full bg-white/10"></div>
                                  </div>
                                  <div className="h-2.5 w-12 rounded-full bg-white/10"></div>
                                </div>
                                <div className="h-2 w-5/6 rounded-full bg-white/5"></div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-300/80"></div>
                                    <div className="h-2.5 w-44 rounded-full bg-white/10"></div>
                                  </div>
                                  <div className="h-2.5 w-10 rounded-full bg-white/10"></div>
                                </div>
                                <div className="h-2 w-2/3 rounded-full bg-white/5"></div>
                              </div>
                            </div>
                            <div className="mt-5 flex items-center gap-3">
                              <div className="flex-1 h-10 rounded-xl bg-white/5 border border-white/10"></div>
                              <div className="h-10 w-40 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.25)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/10"></div>
                              </div>
                            </div>
                            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                            <div className="mt-4 flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                              <div className="h-2.5 w-48 rounded-full bg-white/10"></div>
                              <div className="ml-auto h-2.5 w-20 rounded-full bg-white/10"></div>
                            </div>
                          </div>
                        </div>

                        <div className="relative flex flex-col justify-center">
                          <h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">Launch, monitor, optimize</h3>
                          <p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">
                            Go live with confidence. Monitor every run, get alerts, and improve performance with clear logs and outcomes.
                          </p>
                          <div className="mt-8 flex items-center gap-3">
                            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">Real-time logs</div>
                            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">Alerts</div>
                            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">Analytics</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>



      </div>
          </section>


          <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6 relative" id="customers">
            <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">


              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
            Testimonials
          </p>
          <h2 className="sm:text-4xl text-3xl text-white font-geist tracking-tight font-semibold">
            Trusted by teams who automate at scale
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
            From startups to growing teams, Loopra helps teams save time, reduce manual work, and ship faster with confidence.
          </p>
        </div>

        <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
          Read customer stories
        </button>
      </div>


              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">


                  <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between h-full">
                      <div className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="quote" className="lucide lucide-quote w-8 h-8 text-zinc-700 fill-current mb-6"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-geist">
                              "Loopra completely changed how we handle deployment incidents. The self-healing workflows saved us 200+ engineering hours last month."
                          </p>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600"></div>
                          <div>
                              <div className="text-sm font-medium text-white font-geist">Alex Chen</div>
                              <div className="text-xs text-zinc-500 font-geist">CTO at Vertex</div>
                          </div>
                      </div>
                  </div>


                  <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/20 to-zinc-900 border border-blue-500/20 flex flex-col justify-between h-full relative overflow-hidden group">
                       <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition"></div>
                       <div className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="quote" className="lucide lucide-quote w-8 h-8 text-blue-500/50 fill-current mb-6"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          <p className="text-xl text-white font-medium leading-relaxed mb-6 font-geist">
                              "The ability to visualize and debug AI agents in real-time is a game changer. We shipped our gen-AI product 3x faster."
                          </p>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>
                          <div className="">
                              <div className="text-sm font-medium text-white font-geist">Sarah Jenkins</div>
                              <div className="text-xs text-blue-200/70 font-geist">VP Engineering, Nova</div>
                          </div>
                      </div>
                  </div>


                  <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between h-full">
                      <div className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="quote" className="lucide lucide-quote w-8 h-8 text-zinc-700 fill-current mb-6"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-geist">
                              "Finally, an automation platform that treats infrastructure as code. The Git integration allows us to version control our entire business logic."
                          </p>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600"></div>
                          <div className="">
                              <div className="text-sm font-medium text-white font-geist">David Kim</div>
                              <div className="text-xs text-zinc-500 font-geist">DevOps Lead, Stripe</div>
                          </div>
                      </div>
                  </div>

              </div>

            </div>
          </section><section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6 relative" id="customers">
            <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">


              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
            Pricing
          </p>
          <h2 className="sm:text-4xl text-3xl text-white font-geist tracking-tight font-semibold">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
            Start small, upgrade when you’re ready. Every plan includes core automations, templates, and secure integrations.
          </p>
        </div>

        <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
          Compare plans
        </button>
      </div>


              <div className="overflow-hidden bg-zinc-950 border-white/10 border rounded-[32px] relative shadow-2xl">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">


              <div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8">




                  <div className="flex items-center gap-4 mb-10">
                      <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-white/5">
                          <button data-billing="monthly" className="billing-tab px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide bg-zinc-800 text-white shadow-sm ring-1 ring-white/10 transition-all font-geist">Monthly</button>
                          <button data-billing="annual" className="billing-tab px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-white transition-all font-geist">Yearly</button>
                      </div>
                      <span className="text-xs text-blue-400 font-medium tracking-tight font-geist">Save 20% on yearly</span>
                  </div>


                  <div className="space-y-3">
                      <button data-plan-select="starter" className="plan-select-btn w-full text-left p-5 rounded-xl border border-blue-500/50 bg-blue-500/10 transition-all flex items-center justify-between group">
                                  <div className="">
                                      <div className="text-white font-semibold text-lg font-geist">Starter</div>
                                      <div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">For side projects</div>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                  </div>
                               </button>

                      <button data-plan-select="pro" className="plan-select-btn w-full text-left p-5 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center justify-between group">
                                  <div className="">
                                      <div className="text-white font-semibold text-lg font-geist">Pro</div>
                                      <div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">For scaling startups</div>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white transition">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                  </div>
                               </button>

                      <button data-plan-select="enterprise" className="plan-select-btn w-full text-left p-5 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center justify-between group">
                                  <div className="">
                                      <div className="text-white font-semibold text-lg font-geist">Business</div>
                                      <div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">For large teams</div>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white transition">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                  </div>
                               </button>
                  </div>
              </div>


              <div className="md:p-12 lg:border-l flex flex-col border-white/5 pt-8 pr-8 pb-8 pl-8 justify-center">
                  <div id="plan-details" className="space-y-8">
                      <div className="">
                          <h3 id="planName" className="text-2xl text-white mb-2 font-geist tracking-tight">Starter</h3>
                          <div className="flex items-baseline gap-1">
                              <span id="planPrice" className="text-6xl text-white font-geist tracking-tight">$0</span>
                              <span id="planPeriod" className="text-zinc-500 text-lg font-geist">/mo</span>
                          </div>
                          <p id="planDesc" className="text-zinc-400 text-sm mt-4 font-geist">Perfect for exploring Loopra
                              capabilities.</p>
                      </div>

                      <ul id="featureList" className="space-y-4">
                          <li className="flex items-center gap-3 text-sm text-zinc-300">
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                              </div>
                              Up to 3 active workflows
                          </li>

                          <li className="flex items-center gap-3 text-sm text-zinc-300">
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                              </div>
                              100 AI runs / month
                          </li>

                          <li className="flex items-center gap-3 text-sm text-zinc-300">
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                              </div>
                              Community Support
                          </li>

                          <li className="flex items-center gap-3 text-sm text-zinc-300">
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                              </div>
                              Basic integrations
                          </li>
                      </ul>

                      <a href="#" className="w-full flex items-center justify-center py-4 text-center rounded-xl text-white font-medium tracking-tight hover:brightness-110 transition-all border border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] font-geist" id="ctaBtn" style={{"background": "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)"}}>Get Started Free</a>
                  </div>
              </div>

          </div>
      </div>

            </div>
          </section>





          <footer className="max-w-7xl mx-auto px-6 pb-8">
              <div className="relative overflow-hidden ring-1 ring-white/5 bg-zinc-900/40 rounded-3xl p-10 md:p-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


                      <div className="">
                          <svg width="420" height="120" viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Looper logo" className="w-[147px] h-[42px]" strokeWidth="2" data-icon-replaced="true" style={{"width": "147px", "height": "42px", "color": "rgb(255, 255, 255)"}}>
        <text x="0" y="80" fill="currentColor" font-size="72" font-weight="600" letter-spacing="-1.5" font-family="Inter, SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" className="">
          Looper
        </text>
      </svg>
                          <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed text-sm font-geist">
                              Building the nervous system for the autonomous enterprise. Connect, automate, and scale with intelligence.
                          </p>

                          <form className="flex items-center gap-2 max-w-sm">
                              <input type="email" placeholder="Enter your email" className="bg-zinc-950 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white w-full focus:outline-none focus:border-blue-500/50 transition" />
                              <button className="bg-white text-black px-4 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition font-geist">Subscribe</button>
                          </form>
                      </div>


                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                          <div className="">
                              <h4 className="text-white font-medium mb-4 font-geist">Product</h4>
                              <ul className="space-y-2 text-sm text-zinc-500">
                                  <li className=""><a href="#" className="hover:text-blue-400 transition font-geist">Features</a></li>
                                  <li className=""><a href="#" className="hover:text-blue-400 transition font-geist">Integrations</a></li>
                                  <li className=""><a href="#" className="hover:text-blue-400 transition font-geist">Pricing</a></li>
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">Changelog</a></li>
                              </ul>
                          </div>
                          <div className="">
                              <h4 className="text-white font-medium mb-4 font-geist">Company</h4>
                              <ul className="space-y-2 text-sm text-zinc-500">
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">About</a></li>
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">Blog</a></li>
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">Careers</a></li>
                                  <li className=""><a href="#" className="hover:text-blue-400 transition font-geist">Contact</a></li>
                              </ul>
                          </div>
                          <div>
                              <h4 className="text-white font-medium mb-4 font-geist">Social</h4>
                              <ul className="space-y-2 text-sm text-zinc-500">
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">Twitter</a></li>
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">GitHub</a></li>
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">Discord</a></li>
                                  <li><a href="#" className="hover:text-blue-400 transition font-geist">LinkedIn</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
                      <p className="font-geist">© 2025 Loopra Inc. All rights reserved.</p>
                      <div className="flex gap-6">
                          <a href="#" className="hover:text-zinc-400 transition font-geist">Privacy Policy</a>
                          <a href="#" className="hover:text-zinc-400 transition font-geist">Terms of Service</a>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  );
}