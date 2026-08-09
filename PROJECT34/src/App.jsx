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
    "src": "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js",
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
    "content": "\n/*\nSequence animation on scroll when visible. Requires Animation Keyframe. Usage:\n1) Insert this code in the <head> along with the Animation Keyframe code.\n2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll\n*/\n(function () {\n// Inject CSS for paused/running states\nconst style = document.createElement(\"style\");\nstyle.textContent = `\n/* Default: paused */\n.animate-on-scroll { animation-play-state: paused !important; }\n/* Activated by JS */\n.animate-on-scroll.animate { animation-play-state: running !important; }\n`;\ndocument.head.appendChild(style);\nconst once = true;\nif (!window.__inViewIO) {\nwindow.__inViewIO = new IntersectionObserver((entries) => {\nentries.forEach((entry) => {\nif (entry.isIntersecting) {\nentry.target.classList.add(\"animate\");\nif (once) window.__inViewIO.unobserve(entry.target);\n}\n});\n}, { threshold: 0.2, rootMargin: \"0px 0px -10% 0px\" });\n}\nwindow.initInViewAnimations = function (selector = \".animate-on-scroll\") {\ndocument.querySelectorAll(selector).forEach((el) => {\nwindow.__inViewIO.observe(el); // observing twice is a no-op\n});\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => initInViewAnimations());\n})();\n"
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
    "content": "\n        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js\";i.onload=function(){if(document.readyState===\"loading\"){document.addEventListener(\"DOMContentLoaded\",function(){UnicornStudio.init();window.UnicornStudio.isInitialized=!0})}else{UnicornStudio.init();window.UnicornStudio.isInitialized=!0}};(document.head||document.body).appendChild(i)}else if(!window.UnicornStudio.isInitialized&&window.UnicornStudio.init){UnicornStudio.init();window.UnicornStudio.isInitialized=!0}}();\n      "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n          function switchUseCase(index) {\n        // Handle Tabs\n        document.querySelectorAll('.uc-tab').forEach((tab, i) => {\n            const isTarget = (i + 1) === index;\n            const icon = tab.querySelector('.tab-icon');\n            const title = tab.querySelector('.tab-title');\n\n            if (isTarget) {\n                // Active State\n                tab.classList.remove('border-transparent', 'hover:border-white/10');\n                tab.classList.add('border-indigo-500');\n                \n                title.classList.remove('text-slate-500');\n                title.classList.add('text-white');\n                \n                icon.classList.remove('text-slate-500');\n                icon.classList.add('text-indigo-400');\n            } else {\n                // Inactive State\n                tab.classList.add('border-transparent', 'hover:border-white/10');\n                tab.classList.remove('border-indigo-500');\n                \n                title.classList.add('text-slate-500');\n                title.classList.remove('text-white');\n                \n                icon.classList.add('text-slate-500');\n                icon.classList.remove('text-indigo-400');\n            }\n        });\n\n        // Handle Visuals\n        document.querySelectorAll('.uc-visual').forEach((visual, i) => {\n            const isTarget = (i + 1) === index;\n            if (isTarget) {\n                visual.classList.remove('hidden');\n            } else {\n                visual.classList.add('hidden');\n            }\n        });\n    }\n        "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    (function() {\n            const container = document.getElementById('testimonials-container');\n            if (!container) return;\n            \n            const cards = [\n              document.getElementById('testimonial-card-1'),\n              document.getElementById('testimonial-card-2'),\n              document.getElementById('testimonial-card-3')\n            ];\n            \n            const btns = container.querySelectorAll('button');\n            \n            let isAnimating = false;\n            let positions = [0, 1, 2]; // Initial layout maps: card1 -> 0(left), card2 -> 1(center), card3 -> 2(right)\n            \n            const posClasses = {\n              0: [\"md:w-[400px]\", \"md:-translate-x-[125%]\", \"md:-translate-y-[60%]\", \"md:-rotate-[6deg]\", \"md:scale-75\", \"z-10\", \"md:opacity-50\", \"hover:md:opacity-100\", \"hover:z-40\"],\n              1: [\"md:w-[480px]\", \"md:-translate-x-1/2\", \"md:-translate-y-[65%]\", \"z-30\", \"opacity-100\", \"md:rotate-0\", \"md:scale-110\"],\n              2: [\"md:w-[400px]\", \"md:translate-x-[25%]\", \"md:-translate-y-[60%]\", \"md:rotate-[6deg]\", \"md:scale-75\", \"z-10\", \"md:opacity-50\", \"hover:md:opacity-100\", \"hover:z-40\"]\n            };\n            \n            function updateCards() {\n              cards.forEach((card, i) => {\n                if (!card) return;\n                Object.values(posClasses).forEach(clsArray => {\n                  card.classList.remove(...clsArray);\n                });\n                card.classList.add(...posClasses[positions[i]]);\n              });\n            }\n            \n            window.handleTestimonialSwipe = function(direction) {\n              if (isAnimating) return;\n              isAnimating = true;\n              \n              btns.forEach(b => b.disabled = true);\n              \n              if (direction === 1) {\n                // Next / Right Arrow\n                positions = positions.map(p => (p === 0 ? 2 : p - 1));\n              } else {\n                // Prev / Left Arrow\n                positions = positions.map(p => (p === 2 ? 0 : p + 1));\n              }\n              \n              updateCards();\n              \n              setTimeout(() => {\n                isAnimating = false;\n                btns.forEach(b => b.disabled = false);\n              }, 500);\n            };\n            \n            let touchStartX = 0;\n            let touchEndX = 0;\n            \n            container.addEventListener('touchstart', e => {\n              touchStartX = e.changedTouches[0].screenX;\n            }, {passive: true});\n            \n            container.addEventListener('touchend', e => {\n              touchEndX = e.changedTouches[0].screenX;\n              if (touchEndX < touchStartX - 50) window.handleTestimonialSwipe(1);\n              if (touchEndX > touchStartX + 50) window.handleTestimonialSwipe(-1);\n            }, {passive: true});\n            \n            // Initialization is handled natively by initial HTML classes, \n            // ensuring no FOUC (Flash of Unstyled Content).\n          })();\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        if (window.UnicornStudio) {\n          window.UnicornStudio.init();\n        }\n      "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "antialiased overflow-x-hidden min-h-screen text-slate-300 bg-[#000000] relative";
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
    <div className="aura-source-body antialiased overflow-x-hidden min-h-screen text-slate-300 bg-[#000000] relative">
      <div className="flex flex-col overflow-hidden min-h-[850px] w-full max-w-7xl mr-auto ml-auto relative items-center">

        <div className="aura-background-component z-0 w-full h-full absolute top-0 left-0" style={{"maskImage": "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", "WebkitMaskImage": "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"}}>
          <div className="aura-background-component top-0 w-full z-0 absolute h-full">
            <div data-us-project="U7tLRvdF7ikcfxcCHs65" className="absolute w-full h-full left-0 top-0 z-0">


            </div>

          </div>
        </div>

        <nav className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] z-50 w-full pt-8 pr-8 pb-4 pl-8 relative items-center justify-between">
          <div className="flex-1">
            <span className="text-white font-manrope font-light text-2xl tracking-[0.2em]">NODEX</span>
          </div>

          <div className="hidden md:flex items-center gap-8 px-10 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black">
            <a href="#" className="text-xs uppercase tracking-widest text-white font-medium">Platform</a>
            <a href="#" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors font-medium">Solutions</a>
            <a href="#" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors font-medium">Enterprise</a>
            <a href="#" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors font-medium">Developers</a>
          </div>

          <div className="flex-1 flex justify-end">
            <button className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </nav>

        <div className="flex flex-col flex-1 z-10 text-center w-full max-w-5xl pr-6 pl-6 items-center justify-center">

          <div className="inline-flex [animation:animationIn_0.8s_ease-out_0.2s_both] bg-white/5 border-white/10 border rounded-full mb-10 pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-sm gap-x-3 gap-y-3 items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] text-neutral-300 uppercase font-bold tracking-[0.2em]">Enterprise AI Workforce • Now Live</span>
          </div>

          <h1 className="md:text-7xl lg:text-[100px] leading-[0.95] [animation:animationIn_0.8s_ease-out_0.3s_both] text-5xl font-light text-white tracking-tighter font-manrope mb-8">
            The Operating System<br />
            <span className="opacity-60">for Your AI Workforce</span>
          </h1>

          <p className="leading-relaxed md:text-xl [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg font-light text-slate-300 max-w-2xl mr-auto mb-12 ml-auto">
            NODEX deploys autonomous AI agents that execute complex workflows, optimize decisions, and scale across your
            enterprise infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">


            <button className="group inline-flex transition-all duration-300 active:scale-95 [animation:animationIn_0.8s_ease-out_0.5s_both] relative items-center justify-center">

        <div className="-inset-2 group-hover:opacity-100 transition-opacity duration-700 group-active:opacity-20 bg-gradient-to-r from-blue-500/40 via-cyan-400/30 to-blue-500/40 opacity-40 rounded-full absolute blur-2xl"></div>

        <div className="relative overflow-hidden rounded-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl px-12 py-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),inset_0_2px_2px_rgba(255,255,255,0.6),inset_0_-4px_8px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(255,255,255,0.05)] border border-white/20 transition-all duration-300 ease-out group-hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.8),inset_0_2px_2px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(255,255,255,0.1)] group-hover:bg-gradient-to-b group-hover:from-white/25 group-hover:to-white/10 group-active:shadow-[0_5px_15px_-5px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)]">

          <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent w-[150%]"></div>

          <span className="relative z-10 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            DEPLOY YOUR AGENTS
          </span>
        </div>

        <div className="absolute -inset-1 group-hover:-inset-2 rounded-full border border-white/10 opacity-30 group-hover:opacity-100 transition-all duration-700 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>

      </button>
          </div>
        </div>
      </div>


          <main className="flex flex-col z-10 w-full relative items-center">

        <div className="flex flex-col -translate-y-4 [animation:animationIn_0.8s_ease-out_0.6s_both] w-full max-w-[1280px] mr-auto ml-auto pt-0 pr-4 pb-4 pl-4 items-center justify-center">

        <div className="w-full relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group/window">

          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-50 pointer-events-none">
          </div>

          <div className="overflow-hidden flex text-[13px] leading-normal antialiased text-slate-400 font-sans bg-[#0B1120] w-full h-[850px] ring-white/5 ring-1 rounded-[2rem] relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none z-0">
            </div>
            <div className="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none z-0">
            </div>

            <div className="w-[260px] bg-white/[0.02] backdrop-blur-md flex flex-col border-r border-white/5 shadow-[10px_0_30px_-15px_rgba(0,0,0,0.5)] flex-shrink-0 relative z-10">

              <div className="flex h-16 border-white/5 border-b pr-4 pl-4 items-center justify-between">
                <div className="flex items-center gap-3 text-slate-200 font-bold text-sm tracking-wide group cursor-pointer">

                  <span className="">Nodex_OS</span>
                  <iconify-icon icon="lucide:chevron-down" width="12" className="text-slate-500 group-hover:text-white transition-colors"></iconify-icon>
                </div>
              </div>

              <div className="px-3 py-4 space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-b from-indigo-500/[0.1] to-transparent border border-indigo-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-indigo-100 cursor-pointer relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]"></div>
                  <iconify-icon icon="lucide:layout-dashboard" width="16" className="text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]"></iconify-icon>
                  <span className="font-semibold text-shadow-sm">Command Center</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
                  <iconify-icon icon="lucide:activity" width="16" className=""></iconify-icon>
                  <span className="font-medium">Live Monitoring</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
                  <iconify-icon icon="lucide:network" width="16" className=""></iconify-icon>
                  <span className="font-medium">Neural Topology</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-all hover:text-slate-200 border border-transparent hover:border-white/5">
                  <iconify-icon icon="lucide:database" width="16"></iconify-icon>
                  <span className="font-medium">Memory Store</span>
                </div>
              </div>

              <div className="mt-4 px-4 mb-2 flex items-center justify-between group cursor-pointer">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-shadow-sm">Clusters</span>
                <div className="w-5 h-5 rounded bg-white/[0.05] border border-white/5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors">
                  <iconify-icon icon="lucide:plus" width="10" className="text-slate-400"></iconify-icon>
                </div>
              </div>

              <div className="px-3 space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-300 transition-colors border border-transparent hover:border-white/5">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[2px]"></div>
                    <div className="relative w-2 h-2 rounded-full bg-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-emerald-600">
                    </div>
                  </div>
                  <span className="">Production-East</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-colors border border-transparent hover:border-white/5">
                  <div className="relative w-2 h-2">
                    <div className="relative w-2 h-2 rounded-full bg-yellow-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-yellow-800">
                    </div>
                  </div>
                  <span className="">Staging-Beta</span>
                </div>
              </div>

              <div className="mt-6 px-4 mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-shadow-sm">Active Agents</span>
              </div>

              <div className="px-3 space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.05] text-white cursor-pointer border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
                  <iconify-icon icon="lucide:bot" width="14" className="text-indigo-400"></iconify-icon>
                  <span className="text-xs font-medium tracking-wide">Data-Pipeline-04</span>
                  <div className="ml-auto w-1 h-1 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,1)]"></div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] cursor-pointer text-slate-400 transition-colors border border-transparent hover:border-white/5">
                  <iconify-icon icon="lucide:shield-alert" width="14"></iconify-icon>
                  <span className="text-xs">Security-Sentinel</span>
                </div>
              </div>

              <div className="mt-auto border-t border-white/5 p-4 bg-white/[0.02]">
                <div className="flex items-center gap-3 px-2 py-1 cursor-pointer group">
                  <div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ae8587a-051a-4cf8-b727-f61e05474f40_320w.webp)] bg-cover bg-center border-white/20 border rounded-full ring-[#0B1120] ring-2 shadow-md">
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-200 font-bold group-hover:text-white">Admin User</span>
                    <span className="text-[10px] text-slate-500">admin@nodex.ai</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">

              <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0B1120]/80 backdrop-blur-md z-20 sticky top-0 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <span className="hover:text-slate-300 cursor-pointer transition-colors">Production</span>
                  <iconify-icon icon="lucide:chevron-right" width="12" className="opacity-50"></iconify-icon>
                  <span className="text-slate-200 text-shadow-sm">Data-Pipeline-04</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 ml-3 shadow-[inset_0_0_5px_rgba(16,185,129,0.1)]">
                    <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-emerald-400 text-[10px] font-bold tracking-wider">RUNNING</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 shadow-[0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-[1px] active:shadow-none transition-all">
                    <iconify-icon icon="lucide:pause" width="12" className="text-slate-400 group-hover:text-slate-200"></iconify-icon>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200">Pause</span>
                  </button>
                  <button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-b from-indigo-500/20 to-indigo-500/5 border border-indigo-500/30 hover:border-indigo-500/50 shadow-[0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-[1px] active:shadow-none transition-all">
                    <iconify-icon icon="lucide:terminal" width="12" className="text-indigo-400"></iconify-icon>
                    <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">Console</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="px-8 py-8 max-w-5xl mx-auto">

                  <div className="mb-8 flex items-end justify-between">
                    <div className="">
                      <h1 className="text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-md">Ingest &amp; Transform</h1>
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-slate-400 border border-white/5">ID: AGT-9928</span>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <span className="">Last active: 2s ago</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/5 shadow-inner">
                      <iconify-icon icon="lucide:cpu" width="14" className="text-indigo-400"></iconify-icon>
                      <span className="text-xs font-mono text-slate-300">24% Load</span>
                    </div>
                  </div>

                  <div className="w-full h-64 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 mb-8 relative overflow-hidden group shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
                    </div>

                    <div className="flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between">


        <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span className="">Throughput (events/sec)</span>
          <span className="">Last 1h</span>
        </div>

        <div className="flex items-end h-40 gap-3 px-2 relative z-10">
          <div className="flex-1 bg-gradient-to-t from-teal-900/20 to-cyan-500/20 border-t border-cyan-500/30 h-[40%] rounded-t-sm" style={{"animation": "bar1 2s ease-in-out infinite", "animationDelay": "0s"}}>
          </div>
          <div className="flex-1 bg-gradient-to-t from-teal-900/20 to-cyan-500/20 border-t border-cyan-500/30 h-[55%] rounded-t-sm" style={{"animation": "bar2 2s ease-in-out infinite", "animationDelay": "0.1s"}}>
          </div>
          <div className="flex-1 bg-gradient-to-t from-teal-900/20 to-cyan-500/20 border-t border-cyan-500/30 h-[45%] rounded-t-sm" style={{"animation": "bar3 2s ease-in-out infinite", "animationDelay": "0.2s"}}>
          </div>
          <div className="flex-1 bg-gradient-to-t from-teal-900/30 to-cyan-500/40 border-t border-cyan-400/50 h-[60%] rounded-t-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]" style={{"animation": "bar4 2s ease-in-out infinite", "animationDelay": "0.3s"}}>
          </div>
          <div className="flex-1 bg-gradient-to-t from-teal-900/40 to-cyan-500/60 border-t border-cyan-400/60 h-[75%] rounded-t-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]" style={{"animation": "bar5 2s ease-in-out infinite", "animationDelay": "0.4s"}}>
          </div>

          <div className="flex-1 bg-gradient-to-t from-teal-600/50 to-cyan-400 border-t border-white/50 h-[90%] rounded-t-sm relative group cursor-help shadow-[0_0_30px_rgba(6,182,212,0.4)]" style={{"animation": "bar6 2s ease-in-out infinite", "animationDelay": "0.5s"}}>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0B1120] border border-white/10 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-20 pointer-events-none">
              2,401 eps
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0B1120] border-r border-b border-white/10 rotate-45">
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-t from-teal-900/40 to-cyan-500/60 border-t border-cyan-400/60 h-[65%] rounded-t-sm" style={{"animation": "bar7 2s ease-in-out infinite", "animationDelay": "0.6s"}}>
          </div>
          <div className="flex-1 bg-gradient-to-t from-teal-900/30 to-cyan-500/40 border-t border-cyan-400/50 h-[50%] rounded-t-sm" style={{"animation": "bar8 2s ease-in-out infinite", "animationDelay": "0.7s"}}>
          </div>
          <div className="flex-1 bg-gradient-to-t from-teal-900/20 to-cyan-500/20 border-t border-cyan-500/30 h-[40%] rounded-t-sm" style={{"animation": "bar9 2s ease-in-out infinite", "animationDelay": "0.8s"}}>
          </div>
        </div>
      </div>
                    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none">
                    </div>
                  </div>

                  <div className="text-sm font-bold text-slate-200 mb-6 flex items-center gap-2">
                    Execution Logs
                    <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-slate-400 font-normal text-[10px] uppercase">Live</span>
                    </div>
                  </div>

                  <div className="border-white/5 border-l ml-2 pl-3 relative space-y-8">


        <div className="relative pl-8 group" style={{"animation": "seqFade 6s ease-in-out infinite both", "animationDelay": "0s"}}>
          <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-[#0B1120] border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] flex items-center justify-center" style={{"animation": "seqDot 6s ease-in-out infinite both", "animationDelay": "0s"}}>
          </div>
          <div className="flex flex-col gap-2" style={{"animation": "seqShift 6s ease-in-out infinite both", "animationDelay": "0s"}}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-200 text-xs">Batch Process Completed</span>
              <span className="text-[10px] text-slate-600 font-mono">Just now</span>
            </div>
            <div className="text-slate-400 font-mono text-xs bg-white/[0.03] backdrop-blur-sm p-3 rounded-lg border border-white/5 shadow-inner">
              Processed 14,020 records in 450ms. <span className="text-emerald-400 font-bold">Success</span>.
            </div>
          </div>
        </div>

        <div className="relative pl-8 group" style={{"animation": "seqFade 6s ease-in-out infinite both", "animationDelay": "2s"}}>
          <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-[#0B1120] border border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)] flex items-center justify-center" style={{"animation": "seqDot 6s ease-in-out infinite both", "animationDelay": "2s"}}>
          </div>
          <div className="flex flex-col gap-2" style={{"animation": "seqShift 6s ease-in-out infinite both", "animationDelay": "2s"}}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-200 text-xs">Auto-Scaling Triggered</span>
              <span className="text-[10px] text-slate-600 font-mono">2m ago</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Load threshold exceeded (85%). Spawning 2 worker nodes.
            </p>
          </div>
        </div>

        <div className="relative pl-8 group" style={{"animation": "seqFade 6s ease-in-out infinite both", "animationDelay": "4s"}}>
          <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-[#0B1120] border border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)] flex items-center justify-center" style={{"animation": "seqDot 6s ease-in-out infinite both", "animationDelay": "4s"}}>
          </div>
          <div className="flex flex-col gap-2" style={{"animation": "seqShift 6s ease-in-out infinite both", "animationDelay": "4s"}}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-200 text-xs">Schema Update Detected</span>
              <span className="text-[10px] text-slate-600 font-mono">15m ago</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              New field
              <code className="bg-indigo-500/10 text-indigo-300 px-1 py-0.5 rounded text-[10px] border border-indigo-500/20">user_segment</code>
              found in stream. Adapting transformation logic automatically.
            </p>
          </div>
        </div>

      </div>
                </div>
              </div>
            </div>

            <div className="w-[300px] border-l border-white/5 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.5)] bg-white/[0.02] backdrop-blur-md flex-shrink-0 flex flex-col relative z-10">

              <div className="h-16 px-6 flex items-center justify-between border-b border-white/5">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">Configuration</span>
                <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                  <iconify-icon icon="lucide:settings" width="14" className="text-slate-400"></iconify-icon>
                </div>
              </div>

              <div className="p-6 space-y-8">
                <div className="space-y-4">
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">Runtime</div>

                  <div className="group bg-white/[0.03] rounded-xl p-3 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-white/10 transition-colors">
                    <div className="grid grid-cols-[20px_1fr] gap-3 items-center">
                      <iconify-icon icon="lucide:hard-drive" width="14" className="text-slate-500"></iconify-icon>
                      <div className="flex justify-between w-full text-xs">
                        <span className="text-slate-400 font-medium">Memory</span>
                        <span className="text-slate-200 font-mono text-shadow-sm">2.4 GB</span>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white/[0.03] rounded-xl p-3 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-white/10 transition-colors">
                    <div className="grid grid-cols-[20px_1fr] gap-3 items-center">
                      <iconify-icon icon="lucide:zap" width="14" className="text-slate-500"></iconify-icon>
                      <div className="flex justify-between w-full text-xs">
                        <span className="text-slate-400 font-medium">Latency</span>
                        <span className="text-emerald-400 font-mono text-shadow-sm">12ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">Model Parameters</div>

                  <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-medium">Temperature</span>
                      <span className="text-white font-mono">0.7</span>
                    </div>
                    <div className="w-full bg-[#0B1120] h-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] overflow-visible relative">
                      <div className="absolute left-0 top-0 h-full w-[70%] bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]">
                      </div>
                      <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-200 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-white cursor-pointer hover:scale-110 transition-transform">
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs pt-2">
                    <span className="text-slate-400 font-medium">Context Window</span>
                    <span className="text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-mono shadow-[0_0_10px_rgba(99,102,241,0.1)]">128k</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">Integration Points</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-center gap-1.5 shadow-sm hover:border-white/20 cursor-pointer transition-colors">
                      <iconify-icon icon="simple-icons:snowflake" width="12" className="text-blue-300"></iconify-icon> Snowflake
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-center gap-1.5 shadow-sm hover:border-white/20 cursor-pointer transition-colors">
                      <iconify-icon icon="simple-icons:slack" width="12" className="text-yellow-500"></iconify-icon> Slack
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex flex-col overflow-hidden z-50 bg-[#0B1120]/90 w-[420px] border-white/10 border ring-white/5 ring-1 rounded-xl absolute right-8 bottom-8 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">


        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-white/10 to-transparent border-b border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400">
            <iconify-icon icon="lucide:terminal-square" width="14" className="text-indigo-400"></iconify-icon>
            nodex-cli
          </div>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-inner"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-inner"></div>
          </div>
        </div>

        <div className="text-[11px] leading-relaxed overflow-y-auto text-slate-300 font-mono bg-black/60 h-[200px] pt-5 pr-5 pb-5 pl-5 shadow-inner">
          <div className="mb-3" style={{"animation": "loginFade 12s infinite"}}>
            Last login: Wed Oct 11 09:23:01 on ttys001
          </div>
          <div className="mb-3" style={{"animation": "cmd1Fade 12s infinite"}}>
            <span className="text-emerald-400 font-semibold">➜</span> <span className="text-indigo-400 font-semibold">~</span> 
            <span className="inline-block overflow-hidden whitespace-nowrap align-bottom" style={{"animation": "typeCmd1 12s infinite"}}>agent status --verbose</span>
          </div>
          <div className="text-slate-400 mb-3 pl-4 border-l border-white/10" style={{"animation": "out1Fade 12s infinite"}}>
            Retrieving telemetry... <br />
            <span className="text-emerald-500">[INFO]</span> Connection established (4ms) <br />
            <span className="text-emerald-500">[INFO]</span> Node health: 99.8% <br />
            <span className="text-yellow-500">[WARN]</span> Memory pressure detected in region us-east-1a
          </div>
          <div className="mb-3" style={{"animation": "cmd2Fade 12s infinite"}}>
            <span className="text-emerald-400 font-semibold">➜</span> <span className="text-indigo-400 font-semibold">~</span> 
            <span className="inline-block overflow-hidden whitespace-nowrap align-bottom" style={{"animation": "typeCmd2 12s infinite"}}>optimize --target=memory</span>
          </div>
          <div className="text-slate-100" style={{"animation": "out2Fade 12s infinite"}}>
            Initiating garbage collection protocol...
            <span className="inline-block w-2 h-4 bg-slate-400 align-middle animate-pulse ml-1"></span>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
        <section className="sm:py-24 fade-in fade-in-delay-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 pt-8 pb-8 relative" style={{"opacity": "1", "transform": "translateY(0px)"}}>
          <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
            <div className="text-center mb-12">
              <p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">
                Trusted by teams at
              </p>
            </div>


            <div className="overflow-hidden relative" style={{"maskImage": "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", "WebkitMaskImage": "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"}}>

              <div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{"visibility": "hidden"}}></div>


              <div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

                <div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-normal tracking-tighter">
                          TechFlow
                        </span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-bold tracking-tighter font-bricolage">
                          Nexus Labs
                        </span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-semibold tracking-tighter font-merriweather">
                          DataSync
                        </span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-normal tracking-tighter font-instrument-serif">
                          VisionCorp
                        </span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-semibold tracking-tighter font-playfair">
                          CloudBase
                        </span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-normal tracking-tighter">
                          InnovateTech
                        </span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg font-bold tracking-tighter">
                          FlowState
                        </span>
                  </div>
                </div>


                <div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">

                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:zap" width="24" height="24" className="text-zinc-500 group-hover:text-blue-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-bold tracking-tight font-manrope">
                          TechFlow
                        </span>
                  </div>


                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:atom" width="24" height="24" className="text-zinc-500 group-hover:text-purple-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-semibold tracking-tight font-manrope">
                          Nexus Labs
                        </span>
                  </div>


                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:database" width="24" height="24" className="text-zinc-500 group-hover:text-emerald-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-medium tracking-tight font-manrope">
                          DataSync
                        </span>
                  </div>


                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:scan-face" width="24" height="24" className="text-zinc-500 group-hover:text-indigo-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-bold tracking-tight font-manrope">
                          VisionCorp
                        </span>
                  </div>


                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:cloud" width="24" height="24" className="text-zinc-500 group-hover:text-cyan-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-semibold tracking-tight font-manrope">
                          CloudBase
                        </span>
                  </div>


                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:cpu" width="24" height="24" className="text-zinc-500 group-hover:text-orange-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-medium tracking-tight font-manrope">
                          InnovateTech
                        </span>
                  </div>


                  <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 group cursor-default">
                    <iconify-icon icon="lucide:infinity" width="24" height="24" className="text-zinc-500 group-hover:text-teal-500 transition-colors duration-300"></iconify-icon>
                    <span className="text-xl font-bold tracking-tight italic font-manrope">
                          FlowState
                        </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>



        <section className="z-10 overflow-hidden w-full pt-32 pr-6 pb-32 pl-6 relative">
          <div className="flex flex-col max-w-7xl mr-auto ml-auto relative items-center">
            <div className="mb-28 relative w-full">
              <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">

                <div className="flex items-center gap-8 mb-16">
                  <span className="text-xs text-indigo-400 tracking-[0.4em] font-mono">
                        01
                      </span>

                  <div className="h-px w-20 bg-gradient-to-r from-indigo-500/60 to-transparent"></div>

                  <span className="text-xs uppercase font-semibold text-white/60 tracking-[0.35em]">
                        Architecture
                      </span>
                </div>


                <div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">

                  <div className="flex-1 space-y-8">
                    <h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope max-w-3xl">
                      How NODEX Deploys
                      <br />
                      <span className="bg-clip-text font-medium text-transparent bg-gradient-to-b from-white to-white/40">
                            Autonomous Intelligence
                          </span>
                    </h2>
                  </div>


                  <div className="flex-1 max-w-xl space-y-10">
                    <p className="leading-relaxed text-lg font-light text-neutral-400 font-manrope">
                      From raw data to resolved action. Our pipeline ensures
                      secure integration, precise configuration, and supervised
                      autonomous execution across your enterprise stack.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 [animation:animationIn_0.8s_ease-out_0.1s_both] w-full pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">

              <div className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
                </div>

                <div className="h-64 m-2 rounded-[1.5rem] bg-[#0B1120] relative overflow-hidden flex flex-col p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none">
                  </div>

                  <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-t border-white/10 border-b border-black/50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] group-hover:-translate-y-0.5 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00A1E0] to-[#005f85] flex items-center justify-center shadow-lg text-white shadow-blue-900/50">
                          <iconify-icon icon="solar:cloud-bold" className="text-lg"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-200 shadow-black drop-shadow-sm">Salesforce CRM</span>
                          <span className="text-[10px] text-slate-400 font-medium">Connected</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse">
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-t border-white/10 border-b border-black/50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] group-hover:-translate-y-0.5 transition-transform duration-300 delay-75">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF9900] to-[#cc7a00] flex items-center justify-center shadow-lg text-white shadow-orange-900/50">
                          <iconify-icon icon="solar:server-bold" className="text-lg"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-200">AWS Cluster</span>
                          <span className="text-[10px] text-slate-400 font-medium">us-east-1</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border-t border-white/5 border-b border-black/50 opacity-80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-inner border border-white/5">
                          <iconify-icon icon="solar:database-linear" className="text-slate-400"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-400">PostgreSQL</span>
                          <span className="text-[10px] text-slate-500">Syncing...</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-white mb-1 shadow-black drop-shadow-md">System Integration</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Secure connections with zero-trust protocols.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
                </div>

                <div className="h-64 m-2 rounded-[1.5rem] bg-[#0B1120] relative overflow-hidden flex flex-col justify-center p-6 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none">
                  </div>

                  <div className="z-10 relative space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                        <span>Reasoning</span>
                        <span className="text-purple-300 text-shadow-glow">Max</span>
                      </div>
                      <div className="h-3 w-full bg-black/60 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] border-b border-white/10 relative">
                        <div className="absolute left-0 top-0 bottom-0 w-[75%] rounded-full bg-gradient-to-r from-purple-900/50 to-purple-500/50">
                        </div>
                        <div className="absolute left-[75%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 border border-white shadow-[0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.5)_inset] cursor-pointer group-hover:scale-110 transition-transform">
                          <div className="absolute inset-[30%] rounded-full bg-purple-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] border border-white/5">
                      <span className="text-sm font-medium text-slate-300">Safety Guardrails</span>
                      <div className="w-10 h-6 rounded-full bg-purple-900/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-purple-500/20 relative">
                        <div className="absolute right-1 top-1 bottom-1 w-4 rounded-full bg-gradient-to-b from-purple-300 to-purple-500 shadow-md">
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] border border-white/5">
                      <span className="text-sm font-medium text-slate-300">Auto-Approval</span>
                      <div className="w-10 h-6 rounded-full bg-slate-900/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-white/5 relative">
                        <div className="absolute left-1 top-1 bottom-1 w-4 rounded-full bg-gradient-to-b from-slate-400 to-slate-600 shadow-md">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-white mb-1">Agent Configuration</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Define parameters and reasoning models.</p>
                </div>
              </div>

              <div className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
                </div>

                <div className="h-64 m-2 rounded-[1.5rem] bg-[#0B1120] relative overflow-hidden flex items-center justify-center p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none">
                  </div>

                  <div className="w-full h-full rounded-xl bg-black/80 backdrop-blur-sm border border-white/10 shadow-2xl flex flex-col overflow-hidden relative">
                    <div className="h-7 bg-gradient-to-b from-white/10 to-transparent border-b border-white/5 flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border-t border-red-300/50">
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border-t border-yellow-300/50">
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border-t border-green-300/50">
                      </div>
                    </div>

                    <div className="p-4 font-mono text-[10px] leading-loose text-slate-300 relative z-10">
                      <div className="opacity-50">Last login: Tue Oct 24 14:02:11</div>
                      <div className="mt-2"><span className="text-teal-400">➜</span> <span className="text-purple-400">~</span> agent
                        start
                        --mode=auto</div>
                      <div className="text-teal-500/80">&gt; Initializing neural engine... OK</div>
                      <div className="text-teal-500/80">&gt; Connecting to mesh... OK</div>
                      <div className="flex gap-2 bg-teal-500/10 -mx-4 px-4 py-1 mt-1 border-y border-teal-500/10">
                        <span className="text-teal-300 font-bold">EXEC</span>
                        <span className="text-white">Processing Batch #4922</span>
                      </div>
                      <div className="mt-1"><span className="animate-pulse">_</span></div>
                    </div>

                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none">
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-white mb-1">Autonomous Execution</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Self-correcting tasks with full auditability.
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
                </div>

                <div className="h-64 m-2 rounded-[1.5rem] bg-[#0B1120] relative overflow-hidden flex items-center justify-center p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]">
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] group-hover:bg-pink-500/20 transition-colors duration-700">
                  </div>

                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-700 shadow-[0_0_30px_rgba(236,72,153,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] relative z-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out border border-pink-300/20">
                      <iconify-icon icon="solar:brain-bold" className="text-2xl text-white drop-shadow-md"></iconify-icon>
                    </div>

                    <div className="absolute w-40 h-40 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
                      <div className="w-4 h-4 rounded-full bg-slate-700 border border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.5)] absolute -top-2 left-1/2 -translate-x-1/2">
                      </div>
                    </div>
                    <div className="absolute w-56 h-56 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                      <div className="w-3 h-3 rounded-full bg-pink-900/80 border border-pink-500/50 shadow-[0_0_10px_rgba(236,72,153,0.5)] absolute top-1/2 -right-1.5 -translate-y-1/2">
                      </div>
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="url(#pinkGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-50"></line>
                      <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="url(#pinkGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-50"></line>
                      <defs>
                        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(236, 72, 153, 0)"></stop>
                          <stop offset="50%" stopColor="rgba(236, 72, 153, 0.5)"></stop>
                          <stop offset="100%" stopColor="rgba(236, 72, 153, 0)"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="p-6 pt-2 relative z-10">
                  <div className="flex items-center gap-3 mb-2">

                    <h3 className="text-lg font-semibold text-white">Neural Memory</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Persistent context retention allows agents to
                    learn
                    from every interaction and adapt over time.</p>
                </div>
              </div>

              <div className="md:col-span-3 group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50">
                </div>

                <div className="h-64 m-2 rounded-[1.5rem] bg-[#0B1120] relative overflow-hidden flex flex-col items-center justify-center p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none">
                  </div>

                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-700/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.05)]">
                    </div>

                    <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-[spin_3s_linear_infinite] shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    </div>

                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 to-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center border border-white/5">
                      <iconify-icon icon="solar:shield-check-bold" className="text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"></iconify-icon>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
                    <span className="text-[10px] font-mono font-bold text-cyan-300 tracking-wider">SOC2 COMPLIANT</span>
                  </div>
                </div>

                <div className="p-6 pt-2 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[inset_0_0_10px_rgba(34,211,238,0.1)]">
                      <iconify-icon icon="solar:lock-password-linear" className="text-cyan-400"></iconify-icon>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Enterprise Security</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Bank-grade encryption, role-based access
                    control,
                    and comprehensive audit logs.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="overflow-hidden w-full z-10 pt-32 pr-6 pb-32 pl-6 relative">
          <div className="flex flex-col max-w-7xl mr-auto ml-auto relative items-center">
            <div className="mb-28 relative w-full">
              <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">

                <div className="flex items-center gap-8 mb-16">
                  <span className="text-xs text-indigo-400 tracking-[0.4em] font-mono">
                        02
                      </span>

                  <div className="h-px w-20 bg-gradient-to-r from-indigo-500/60 to-transparent"></div>

                  <span className="text-xs uppercase font-semibold text-white/60 tracking-[0.35em]">
                        Use Cases
                      </span>
                </div>


                <div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">

                  <div className="flex-1 space-y-8">
                    <h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope max-w-3xl">
                      AI Workforce
                      <br />
                      <span className="bg-clip-text font-medium text-transparent bg-gradient-to-b from-white to-white/40">
                            In Action
                          </span>
                    </h2>
                  </div>


                  <div className="flex-1 max-w-xl space-y-10">
                    <p className="leading-relaxed text-lg font-light text-neutral-400 font-manrope">
                      Instantly deploy specialized agents for any department. From
                      tier-1 support to complex financial modeling, NODEX agents
                      adapt to your business logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6 items-center">

              <div className="group/device w-full relative perspective-distant">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none">
                </div>

                <div className="overflow-hidden flex flex-col bg-gradient-to-b from-slate-800 to-slate-900 w-full h-[520px] border-white/10 border rounded-[2.5rem] relative shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]">

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-50">
                  </div>

                  <div className="absolute inset-2 rounded-[2rem] bg-[#0B1120] ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] overflow-hidden">

                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
                    </div>
                    <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none">
                    </div>

                    <div className="w-full h-full relative">

                      <div id="uc-visual-1" className="uc-visual w-full h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
                        <div className="flex h-16 border-white/5 border-b pr-8 pl-8 backdrop-blur-md items-center justify-between rounded-t-[2rem]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-indigo-400 to-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center border border-white/20">
                              <iconify-icon icon="lucide:sparkles" className="text-white text-sm"></iconify-icon>
                            </div>
                            <span className="text-sm font-bold text-white tracking-wide text-shadow-sm">Sense AI</span>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse">
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">

                          <div className="flex justify-end">
                            <div className="relative max-w-[80%]">
                              <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-white/10 text-slate-100 text-sm px-5 py-3 rounded-2xl rounded-tr-sm shadow-lg">
                                Summarize the key blockers for Project X launch.
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-4 max-w-[90%]">
                            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex-shrink-0 flex items-center justify-center">
                              <iconify-icon icon="lucide:bot" className="text-indigo-400 text-lg drop-shadow-[0_0_5px_rgba(99,102,241,0.8)]"></iconify-icon>
                            </div>

                            <div className="flex-1 space-y-3">
                              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/5 text-slate-300 text-sm p-6 rounded-2xl rounded-tl-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                                <p className="mb-4 text-slate-200 font-medium">Based on recent updates from Jira and Slack, here
                                  are the
                                  top 3 blockers:</p>

                                <ul className="space-y-3">
                                  <li className="flex gap-3 items-start group">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Engineering team waiting for enterprise quota approval from AWS.</span>
                                  </li>
                                  <li className="flex gap-3 items-start group">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]">
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Final review pending from @Sarah on the mobile flow.</span>
                                  </li>
                                  <li className="flex gap-3 items-start group">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">SOC2 report generation is at 85% completion.</span>
                                  </li>
                                </ul>
                              </div>

                              <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all text-xs text-slate-300 shadow-md active:translate-y-0.5">
                            <iconify-icon icon="lucide:mail"></iconify-icon> Draft update email
                          </button>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all text-xs text-slate-300 shadow-md active:translate-y-0.5">
                            <iconify-icon icon="lucide:calendar"></iconify-icon> Schedule meeting
                          </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 pt-0">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500">
                            </div>
                            <input type="text" placeholder="Ask anything..." className="relative w-full bg-black/40 border border-white/10 rounded-xl pl-5 pr-12 py-4 text-sm text-white placeholder-slate-600 shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] focus:outline-none focus:border-indigo-500/50 transition-all" />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all border border-indigo-500/30">
                        <iconify-icon icon="lucide:arrow-up" className="text-base"></iconify-icon>
                      </button>
                          </div>
                        </div>
                      </div>

                      <div id="uc-visual-2" className="uc-visual hidden w-full h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-20 px-8 flex items-center justify-between border-b border-white/5 rounded-t-[2rem]">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                              <iconify-icon icon="lucide:monitor" className="text-slate-400 text-lg"></iconify-icon>
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-lg tracking-tight text-shadow-sm">Project X</h3>
                              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 shadow-inner">
                            <div className="flex -space-x-3">
                              <div className="w-8 h-8 rounded-full bg-red-900/50 border border-black flex items-center justify-center text-[10px] text-red-200 shadow-md">
                                JD</div>
                              <div className="w-8 h-8 rounded-full bg-blue-900/50 border border-black flex items-center justify-center text-[10px] text-blue-200 shadow-md">
                                AS</div>
                              <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-black flex items-center justify-center text-[10px] text-purple-200 shadow-md">
                                MK</div>
                            </div>
                            <iconify-icon icon="lucide:plus" className="text-slate-500 text-xs"></iconify-icon>
                          </div>
                        </div>

                        <div className="flex-1 p-8 grid grid-cols-1 gap-4 overflow-y-auto">
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Knowledge Base</div>

                          <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/5 hover:border-white/10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            </div>
                            <div className="flex items-center gap-5">
                              <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/5 shadow-inner">
                                <iconify-icon icon="simple-icons:notion" className="text-white text-xl"></iconify-icon>
                              </div>
                              <div>
                                <h4 className="text-slate-200 font-bold text-sm">Requirements v1</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                  <iconify-icon icon="lucide:clock" className="text-[10px]"></iconify-icon> Edited 2h ago
                                </div>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-black/50 border border-white/5 text-xs text-slate-400">
                              Notion
                            </div>
                          </div>

                          <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/5 hover:border-white/10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1">
                            <div className="flex items-center gap-5">
                              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-white/5 shadow-inner">
                                <span className="text-[#F24E1E] font-black text-lg">P</span>
                              </div>
                              <div>
                                <h4 className="text-slate-200 font-bold text-sm">ProjectX Pitch Deck</h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/10 text-[9px] font-bold uppercase">Important</span>
                                </div>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-black/50 border border-white/5 text-xs text-slate-400">
                              Slides
                            </div>
                          </div>

                          <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/5 hover:border-white/10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1">
                            <div className="flex items-center gap-5">
                              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-white/5 shadow-inner">
                                <iconify-icon icon="lucide:table-2" className="text-[#20C073] text-xl"></iconify-icon>
                              </div>
                              <div>
                                <h4 className="text-slate-200 font-bold text-sm">Delivery Schedule</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                  <iconify-icon icon="lucide:users" className="text-[10px]"></iconify-icon> 16 Viewers
                                </div>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-black/50 border border-white/5 text-xs text-slate-400">
                              Sheets
                            </div>
                          </div>

                        </div>
                      </div>

                      <div id="uc-visual-3" className="uc-visual hidden w-full h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-16 px-8 flex items-center justify-between border-b border-white/5 rounded-t-[2rem]">
                          <h3 className="text-white font-bold text-lg tracking-tight">Live Synapse</h3>
                          <div className="flex items-center gap-2 px-2 py-1 bg-emerald-900/20 border border-emerald-500/20 rounded text-emerald-400 text-[10px] font-mono uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Connecting... OK
                          </div>
                        </div>

                        <div className="flex-1 p-0 overflow-y-auto">
                          <div className="relative pl-8 pr-6 py-6">
                            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent">
                            </div>

                            <div className="relative pl-8 pb-8 group">
                              <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-slate-900 border border-[#5865F2] shadow-[0_0_10px_rgba(88,101,242,0.5)] z-10">
                              </div>
                              <div className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-[#5865F2]/10 flex items-center justify-center border border-[#5865F2]/20 flex-shrink-0 shadow-inner">
                                  <iconify-icon icon="simple-icons:discord" className="text-[#5865F2]"></iconify-icon>
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-bold text-slate-200">Design Team</span>
                                    <span className="text-[10px] text-slate-500">2m ago</span>
                                  </div>
                                  <p className="text-xs text-slate-400">Alex M. posted new mockups for
                                    <span className="text-[#5865F2] font-medium">#mobile-app</span>.
                                  </p>
                                  <div className="flex gap-2 mt-3">
                                    <div className="h-12 w-16 bg-black/50 rounded border border-white/10 overflow-hidden relative group-hover:border-white/30 transition-colors">
                                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                                    </div>
                                    <div className="h-12 w-16 bg-black/50 rounded border border-white/10 overflow-hidden relative group-hover:border-white/30 transition-colors">
                                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="relative pl-8 pb-8 group">
                              <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-slate-900 border border-[#2DA44E] shadow-[0_0_10px_rgba(45,164,78,0.5)] z-10">
                              </div>
                              <div className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-[#2DA44E]/10 flex items-center justify-center border border-[#2DA44E]/20 flex-shrink-0 shadow-inner">
                                  <iconify-icon icon="simple-icons:github" className="text-[#2DA44E]"></iconify-icon>
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-bold text-slate-200">nodex-core-api</span>
                                    <span className="text-[10px] text-slate-500">14m ago</span>
                                  </div>
                                  <p className="text-xs text-slate-400">
                                    <span className="text-white font-mono bg-white/10 px-1 rounded">v1.2.0</span> deployed to
                                    production.
                                  </p>
                                  <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                                    <iconify-icon icon="lucide:git-commit" className="text-slate-600"></iconify-icon> 8f3d2a1
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div id="uc-visual-4" className="uc-visual hidden w-full h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-20 px-8 flex items-center justify-between border-b border-white/5 rounded-t-[2rem]">
                          <h3 className="text-white font-bold text-lg tracking-tight">Priority Matrix</h3>
                          <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 shadow hover:bg-white/[0.08] transition-colors">Filter</button>
                            <button className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 shadow hover:bg-white/[0.08] transition-colors">Sort</button>
                          </div>
                        </div>

                        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

                          <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-red-500/20 to-transparent p-[1px]">
                            <div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            </div>
                            <div className="relative bg-white/[0.03] rounded-[15px] p-4 flex items-center gap-5 border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                              <div className="w-14 h-14 rounded-xl bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute bottom-0 w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]">
                                </div>
                                <span className="text-[9px] text-slate-600 font-bold uppercase">Critical</span>
                                <span className="text-xl font-bold text-white tracking-tighter">98</span>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="text-slate-200 font-bold text-sm">DB Latency Spike</h4>
                                  <span className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)]">US-EAST-1</span>
                                </div>
                                <p className="text-xs text-slate-400">Detected 400ms spike. Auto-scaling recommended.</p>
                              </div>

                              <button className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all text-red-500">
                              <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                          </button>
                            </div>
                          </div>

                          <div className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
                            <div className="relative bg-white/[0.03] rounded-[15px] p-4 flex items-center gap-5 border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                              <div className="w-14 h-14 rounded-xl bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute bottom-0 w-full h-1 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,1)]">
                                </div>
                                <span className="text-[9px] text-slate-600 font-bold uppercase">High</span>
                                <span className="text-xl font-bold text-white tracking-tighter">72</span>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="text-slate-200 font-bold text-sm">Q4 Budget Review</h4>
                                  <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] text-yellow-400 font-bold">FINANCE</span>
                                </div>
                                <p className="text-xs text-slate-400">Approvals pending for SaaS spend.</p>
                              </div>

                              <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-slate-400">
                              <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                          </button>
                            </div>
                          </div>

                          <div className="relative p-[1px] rounded-2xl bg-white/5 opacity-70">
                            <div className="relative bg-white/[0.03] rounded-[15px] p-4 flex items-center gap-5 border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                              <div className="w-14 h-14 rounded-xl bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute bottom-0 w-full h-1 bg-blue-500"></div>
                                <span className="text-[9px] text-slate-600 font-bold uppercase">Info</span>
                                <span className="text-xl font-bold text-white tracking-tighter">45</span>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="text-slate-200 font-bold text-sm">Weekly Digest</h4>
                                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold">SYSTEM</span>
                                </div>
                                <p className="text-xs text-slate-400">Team performance summary generated.</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-4 border-t border-white/5 pt-0 gap-0">

                <div id="uc-tab-1" data-aura-onclick="switchUseCase(1)" className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.02] transition-colors border-t-2 border-indigo-500">
                  <div className="flex items-center gap-3 mb-2">
                    <iconify-icon icon="lucide:sparkles" className="text-indigo-400 text-base tab-icon"></iconify-icon>
                    <h4 className="text-sm font-semibold text-white tab-title">Ask Sense</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Natural Language Interface for operational
                    data.</p>
                </div>

                <div id="uc-tab-2" data-aura-onclick="switchUseCase(2)" className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.02] transition-colors border-t-2 border-transparent hover:border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <iconify-icon icon="lucide:layers" className="text-slate-500 text-base tab-icon group-hover:text-slate-300"></iconify-icon>
                    <h4 className="text-sm font-semibold text-slate-500 tab-title group-hover:text-white">Resources</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">Centralized context aggregation.</p>
                </div>

                <div id="uc-tab-3" data-aura-onclick="switchUseCase(3)" className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.02] transition-colors border-t-2 border-transparent hover:border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <iconify-icon icon="lucide:zap" className="text-slate-500 text-base tab-icon group-hover:text-slate-300"></iconify-icon>
                    <h4 className="text-sm font-semibold text-slate-500 tab-title group-hover:text-white">Live Feed</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">Real-time event synchronization.</p>
                </div>

                <div id="uc-tab-4" data-aura-onclick="switchUseCase(4)" className="uc-tab group relative p-6 cursor-pointer hover:bg-white/[0.02] transition-colors border-t-2 border-transparent hover:border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <iconify-icon icon="lucide:bar-chart-3" className="text-slate-500 text-base tab-icon group-hover:text-slate-300"></iconify-icon>
                    <h4 className="text-sm font-semibold text-slate-500 tab-title group-hover:text-white">Prioritization</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">AI-driven predictive signaling.</p>
                </div>

              </div>


            </div>
          </div>
        </section>
        <section className="overflow-hidden z-10 font-sans w-full pt-24 pb-32 relative">


          <div className="z-10 max-w-7xl mx-auto px-6 relative">

            <div className="mb-28 relative w-full">
              <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">

                <div className="flex items-center gap-8 mb-16">
                  <span className="text-xs text-indigo-400 tracking-[0.4em] font-mono">
                        03
                      </span>
                  <div className="h-px w-20 bg-gradient-to-r from-indigo-500/60 to-transparent"></div>
                  <span className="text-xs uppercase font-semibold text-white/60 tracking-[0.35em]">
                        Investment Models
                      </span>
                </div>


                <div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">

                  <div className="flex-1 space-y-8">
                    <h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope max-w-3xl">
                      Simple, transparent
                      <br />
                      <span className="bg-clip-text font-medium text-transparent bg-gradient-to-b from-white to-white/40">
                            pricing for scale
                          </span>
                    </h2>
                  </div>


                  <div className="flex-1 max-w-xl space-y-10">
                    <p className="leading-relaxed text-lg font-light text-neutral-400 font-manrope">
                      Start small. Scale as your research grows. Choose a plan
                      that fits your current requirements and upgrade as your AI
                      workforce expands across enterprise infrastructure.
                    </p>


                    <div className="flex items-center p-1 w-fit rounded-full border border-white/10 bg-[#0F172A]/40 backdrop-blur-sm">
                      <button className="px-6 py-2 rounded-full text-sm font-medium text-white bg-white/10 shadow-sm border border-white/5 transition-all">
                            Monthly
                          </button>
                      <button className="px-6 py-2 rounded-full text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                            Yearly
                          </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-8 gap-y-8 items-stretch">

              <div className="group relative flex flex-col p-2 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 z-30">
                </div>

                <div className="relative h-full bg-[#0B1120] rounded-[2.25rem] p-8 overflow-hidden flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-500">
                  </div>

                  <div className="relative z-10 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <iconify-icon icon="lucide:scan" width="24" className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Starter</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">For solo projects and small teams needing
                      essential features.</p>
                  </div>

                  <div className="relative z-10 mb-8">
                    <span className="text-5xl font-semibold text-white tracking-tighter text-shadow-sm">$0</span>
                    <span className="text-slate-500 font-medium ml-1">/mo</span>
                  </div>

                  <button className="relative w-full py-4 rounded-xl bg-slate-800 border border-white/5 shadow-[0_2px_5px_rgba(0,0,0,0.2)] text-slate-300 text-sm font-semibold hover:bg-slate-700 hover:text-white hover:border-white/10 active:translate-y-[1px] active:shadow-none transition-all duration-200 mb-10 z-10">
              Try for free
            </button>

                  <div className="space-y-4 relative z-10 mt-auto">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">Limited projects</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">Basic tagging &amp; search</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">Manual highlights</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative flex flex-col p-2 rounded-[2.5rem] border border-indigo-500/30 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2 z-10 md:-my-4">

                <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.5)] z-30">
                </div>

                <div className="relative h-full bg-[#0B1120] rounded-[2.25rem] p-8 overflow-hidden flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/25 transition-colors duration-500">
                  </div>

                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-semibold uppercase tracking-wider text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    Most Popular
                  </div>

                  <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-indigo-600/10 border border-indigo-500/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <iconify-icon icon="lucide:atom" width="28" className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"></iconify-icon>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Team</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">Collaboration, integrations, and unlimited
                      projects for growing teams.</p>
                  </div>

                  <div className="relative z-10 mb-8 p-4 rounded-2xl bg-black/40 border border-white/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] flex items-baseline gap-1">
                    <span className="text-5xl font-semibold text-white tracking-tighter text-shadow-sm">$20</span>
                    <div className="flex flex-col ml-2">
                      <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">Per User</span>
                      <span className="text-xs text-slate-500 font-medium">/month billed annually</span>
                    </div>
                  </div>

                  <button className="relative w-full py-4 rounded-xl bg-gradient-to-b from-indigo-500 to-indigo-700 border-t border-indigo-400 shadow-[0_4px_15px_rgba(99,102,241,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] text-white text-sm font-semibold hover:brightness-110 active:translate-y-[1px] active:shadow-none transition-all duration-200 mb-10 z-10 overflow-hidden group/btn">
              <span className="relative z-10">Start 7-day free trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
            </button>

                  <div className="space-y-4 relative z-10 mt-auto">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-indigo-300 group-hover/item:text-indigo-200 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors">Unlimited projects</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-indigo-300 group-hover/item:text-indigo-200 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors">AI-powered theme detection</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-indigo-300 group-hover/item:text-indigo-200 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors">Advanced search &amp; filters</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-indigo-300 group-hover/item:text-indigo-200 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors">Commenting &amp; collaboration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative flex flex-col p-2 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 z-30">
                </div>

                <div className="relative h-full bg-[#0B1120] rounded-[2.25rem] p-8 overflow-hidden flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border-b border-white/5">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-pink-500/20 transition-colors duration-500">
                  </div>

                  <div className="relative z-10 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <iconify-icon icon="lucide:box" width="24" className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Enterprise</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">Custom volume, SSO, and advanced permissions
                      for large orgs.</p>
                  </div>

                  <div className="relative z-10 mb-8">
                    <span className="text-5xl font-semibold text-white tracking-tighter text-shadow-sm">Custom</span>
                  </div>

                  <button className="relative w-full py-4 rounded-xl bg-slate-800 border border-white/5 shadow-[0_2px_5px_rgba(0,0,0,0.2)] text-slate-300 text-sm font-semibold hover:bg-slate-700 hover:text-white hover:border-white/10 active:translate-y-[1px] active:shadow-none transition-all duration-200 mb-10 z-10">
              Contact sales
            </button>

                  <div className="space-y-4 relative z-10 mt-auto">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.1)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-pink-400 group-hover/item:text-pink-300 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">Single Sign-On (SSO)</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.1)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-pink-400 group-hover/item:text-pink-300 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">Audit logs &amp; activity</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.1)]">
                        <iconify-icon icon="lucide:check" width="12" className="text-pink-400 group-hover/item:text-pink-300 transition-colors"></iconify-icon>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">Priority SLA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="overflow-hidden z-10 font-sans w-full pt-24 pb-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-28 relative w-full">
              <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12">
                <div className="flex items-center gap-8 mb-16">
                  <span className="text-xs text-indigo-400 tracking-[0.4em] font-mono">04</span>
                  <div className="h-px w-20 bg-gradient-to-r from-indigo-500/60 to-transparent"></div>
                  <span className="text-xs uppercase font-semibold text-white/60 tracking-[0.35em]">
                  Customer Stories
                </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end gap-16 justify-between">
                  <div className="flex-1 space-y-8">
                    <h2 className="leading-[1.05] md:text-6xl text-5xl text-white tracking-tight font-manrope max-w-3xl">
                      Loved by developers,
                      <br />
                      <span className="bg-clip-text font-medium text-transparent bg-gradient-to-b from-white to-white/40">
                      trusted by enterprises
                    </span>
                    </h2>
                  </div>

                  <div className="flex-1 max-w-xl space-y-10">
                    <p className="leading-relaxed text-lg font-light text-neutral-400 font-manrope">
                      Join thousands of researchers and engineers building the next generation of autonomous systems.
                      See how teams scale their AI workforce with NODEX.
                    </p>

                    <div className="flex items-center gap-4">
                      <button className="px-6 py-3 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-2 group">
                      <span>Read case studies</span>
                      <iconify-icon icon="lucide:arrow-right" className="text-neutral-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-300"></iconify-icon>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col group/container overflow-hidden md:block md:h-[650px] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-[1200px] mr-auto ml-auto pt-12 pb-12 relative perspective-distant" id="testimonials-container">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/10 blur-[120px] rounded-full z-0 pointer-events-none transition-opacity duration-700">
        </div>

        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-6 z-40">
          <button data-aura-onclick="handleTestimonialSwipe(-1)" className="group w-14 h-14 rounded-full bg-gradient-to-b from-[#23262d] to-[#181a20] border-t border-white/10 border-b border-black shadow-[0_8px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-slate-400 hover:text-white active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:hover:text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" style={{"color": "rgb(255, 255, 255)", "width": "20px", "height": "20px"}}>
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button data-aura-onclick="handleTestimonialSwipe(1)" className="group w-14 h-14 rounded-full bg-gradient-to-b from-[#23262d] to-[#181a20] border-t border-white/10 border-b border-black shadow-[0_8px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center text-slate-400 hover:text-white active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:hover:text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-0.5 transition-transform">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>

        <div id="testimonial-card-1" className="transition-all duration-500 ease-out md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 group cursor-pointer md:w-[400px] md:-translate-x-[125%] md:-translate-y-[60%] md:-rotate-[6deg] md:scale-75 z-10 md:opacity-50 hover:md:opacity-100 hover:z-40">

          <div className="relative flex flex-col bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-30">
            </div>

            <div className="relative h-full bg-[#0B1120]/80 backdrop-blur-lg ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-8 flex flex-col">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
              </div>
              <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none">
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                </div>

                <blockquote className="leading-relaxed text-lg text-slate-300 mb-8 font-normal">
                  "Nodex has completely transformed how we scale our operations. The autonomous reasoning capabilities
                  are
                  unmatched."
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] font-semibold tracking-wider">
                    SJ
                  </div>
                  <div>
                    <div className="text-sm text-white font-semibold tracking-wide">Sarah Jenkins</div>
                    <div className="text-xs text-slate-500 font-normal">CTO at TechFlow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonial-card-2" className="transition-all duration-500 ease-out md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 group cursor-pointer md:w-[480px] md:-translate-x-1/2 md:-translate-y-[65%] z-30 opacity-100 md:rotate-0 md:scale-110">

          <div className="relative flex flex-col bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-[2.5rem] p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_30px_rgba(99,102,241,0.15)]">
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-100 z-30 shadow-[0_0_10px_rgba(99,102,241,0.8)]">
            </div>

            <div className="relative h-full bg-[#0B1120]/90 backdrop-blur-lg ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-10 flex flex-col">

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
              </div>
              <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none">
              </div>

              <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/25 transition-colors duration-700">
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-1 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-semibold uppercase tracking-widest shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    Featured
                  </span>
                </div>

                <blockquote className="text-xl md:text-[1.35rem] text-white mb-10 leading-relaxed font-normal tracking-tight text-shadow-sm flex-1">
                  "The live synapse integration is a game changer. We can monitor our AI workforce in real-time with
                  zero
                  anxiety."
                </blockquote>

                <div className="flex items-center gap-5 pt-6 border-t border-white/10 mt-auto">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-700 p-[2px] shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <div className="w-full h-full rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-white font-semibold tracking-widest shadow-inner">
                        MK
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-emerald-400 w-4 h-4 rounded-full border-[3px] border-[#0B1120] shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                    </div>
                  </div>
                  <div className="">
                    <div className="text-base text-white font-semibold tracking-wide">Michael Klein</div>
                    <div className="text-sm text-indigo-300/80 font-normal">Lead Engineer at Vercel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonial-card-3" className="transition-all duration-500 ease-out md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 group cursor-pointer md:w-[400px] md:translate-x-[25%] md:-translate-y-[60%] md:rotate-[6deg] md:scale-75 z-10 md:opacity-50 hover:md:opacity-100 hover:z-40">

          <div className="relative flex flex-col bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-30">
            </div>

            <div className="relative h-full bg-[#0B1120]/80 backdrop-blur-lg ring-1 ring-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-8 flex flex-col">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none">
              </div>
              <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none">
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                </div>

                <blockquote className="leading-relaxed text-lg text-slate-300 mb-8 font-normal">
                  "Simply the best platform for managing enterprise AI. It helped us automate complex workflows we
                  thought were
                  impossible to scale."
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] font-semibold tracking-wider">
                    EL
                  </div>
                  <div className="">
                    <div className="text-sm text-white font-semibold tracking-wide">Emily Liu</div>
                    <div className="text-xs text-slate-500 font-normal">VP Eng at Stripe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
          </div>
        </section>
        <section className="overflow-hidden z-10 font-sans w-full pt-24 pb-0 relative">


          <div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

        <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll group/cta bg-gradient-to-b from-slate-800 to-slate-900 border-white/10 border rounded-[3.5rem] mb-32 pt-2 pr-2 pb-2 pl-2 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">

          <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-50 pointer-events-none"></div>

          <div className="relative rounded-[3rem] bg-[#0B1120] ring-1 ring-white/5 shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] overflow-hidden pt-32 pb-32">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none z-0"></div>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/20 blur-[120px] pointer-events-none rounded-full z-0 transition-opacity duration-700 group-hover/cta:opacity-100 opacity-70"></div>

            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80 mix-blend-screen">
              <div data-us-project="U7tLRvdF7ikcfxcCHs65" className="absolute w-full h-full left-0 top-0 z-0">

              </div>
            </div>


            <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-500/10 mb-8 shadow-[inset_0_0_10px_rgba(99,102,241,0.1)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-300 drop-shadow-sm">
                  Ready to begin
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl text-white tracking-tight font-manrope font-light leading-[1.1] mb-8 drop-shadow-lg">
                Orchestrate your<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40 font-semibold drop-shadow-sm">
                  AI Workforce
                </span>
              </h2>

              <p className="leading-relaxed text-lg font-light text-slate-400 font-manrope max-w-2xl mr-auto mb-12 ml-auto drop-shadow-md">
                Deploy autonomous agents that learn your business logic and
                execute complex workflows across your entire infrastructure.
                Start your enterprise transformation today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="relative px-8 py-4 rounded-full bg-white text-[#0B1120] text-sm font-bold tracking-wide hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] ring-1 ring-white/50">
                  Get Started Now
                </button>
                <button className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white text-sm font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md active:scale-[0.98]">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#080a0f]/50 border-white/5 rounded-t-[3rem] border-t mt-12 pt-16 pr-8 pb-12 pl-8 relative">

          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 relative z-10">
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-6 relative inline-block">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
                <span className="relative text-2xl text-white font-manrope font-bold tracking-tighter drop-shadow-md">
                  NODEX
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-manrope font-light max-w-[200px]">
                The operating system for enterprise AI autonomy and agent
                orchestration.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <iconify-icon icon="lucide:github" width="18"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold mb-6 tracking-widest uppercase opacity-80">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Agent Runtime</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Memory Engine</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Observability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold mb-6 tracking-widest uppercase opacity-80">Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Financial Ops</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Customer Success</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>DevOps Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold mb-6 tracking-widest uppercase opacity-80">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>About</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Careers</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold mb-6 tracking-widest uppercase opacity-80">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Documentation</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>API Reference</a></li>
                <li><a href="#" className="group flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors font-light"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-indigo-400 opacity-0 group-hover:opacity-100">›</span>Community</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-6 order-2 md:order-1">
              <span className="text-xs text-slate-600 font-medium">
                © 2026 NODEX Technologies Inc. <span className="mx-2 opacity-50">|</span> UI/UX by Sourasith
              </span>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light">Privacy</a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light">Terms</a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light">Cookies</a>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 order-1 md:order-2 shadow-[inset_0_0_10px_rgba(16,185,129,0.1)]">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                All Systems Operational
              </span>
            </div>
          </div>
        </footer>
      </div>
        </section>
      </main>
    </div>
  );
}