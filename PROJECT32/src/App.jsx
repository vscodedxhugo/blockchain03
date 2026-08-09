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
    "src": "https://code.iconify.design/3/3.1.0/iconify.min.js",
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
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js\",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();\n      "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "dark";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "min-h-screen overflow-x-hidden selection:bg-indigo-900 selection:text-white text-neutral-300 bg-[#000000] relative";
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
    <div className="aura-source-body min-h-screen overflow-x-hidden selection:bg-indigo-900 selection:text-white text-neutral-300 bg-[#000000] relative">
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[800px] saturate-150 hue-rotate-15" data-alpha-mask="82" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 82%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 82%, transparent)"}}>
            <div data-us-project="OGV3DwiIWxPelWFZjtEu" className="absolute w-full h-full left-0 top-0 -z-10"></div>

          </div>

          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>


          <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="glass-card rounded-full p-1.5 pl-2 pr-2 flex items-center gap-1 [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll">

              <div className="flex text-white bg-gradient-to-br from-white/10 to-white/5 w-9 h-9 border-white/10 border rounded-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:infinity-bold-duotone" className="iconify text-lg iconify--solar">
                  <path fill="currentColor" fillRule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" clipRule="evenodd"></path>
                  <path fill="currentColor" d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" opacity=".5" className=""></path>
                </svg>
              </div>


              <div className="hidden md:flex items-center px-4 gap-6">
                <a href="#" className="text-sm font-medium text-white hover:text-neutral-200 transition-colors">
                  Agents
                </a>
                <a href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                  Workflows
                </a>
                <a href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                  Observability
                </a>
                <a href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                  Enterprise
                </a>
              </div>


              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all group">
                <span className="text-sm font-medium text-white">Deploy Agent</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:arrow-right" className="iconify text-white group-hover:translate-x-0.5 transition-transform iconify--lucide">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </button>
            </div>
          </nav>


          <main className="flex flex-col h-[900px] z-10 w-full pt-32 pr-4 pb-20 pl-4 relative items-center justify-center">




            <div className="flex gap-2 glass-card bg-indigo-950/20 border-indigo-500/20 rounded-full mt-8 pt-1.5 pr-4 pb-1.5 pl-4 items-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:cpu" className="iconify text-indigo-400 iconify--lucide">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                  <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                  <rect width="8" height="8" x="8" y="8" rx="1"></rect>
                </g>
              </svg>
              <span className="text-sm font-medium text-indigo-100">
                Self-Healing Workflows
              </span>
            </div>


            <h1 className="mt-10 text-center text-[15vw] md:text-[9rem] font-semibold tracking-[-0.05em] leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 glow-text z-20 relative [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
              <span className="block">NEURAL</span>
              <span className="block mt-2 text-white/80">AUTOMATION</span>
            </h1>




            <p className="mt-8 text-lg md:text-xl text-neutral-400 text-center max-w-2xl leading-relaxed font-normal [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
              Orchestrate autonomous agents that plan, execute, and optimize business
              processes in real-time. Replace manual toil with intelligent logic.
            </p>


            <div className="flex mt-10 gap-x-3 gap-y-3 items-center [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
              <button className="group flex hover:bg-indigo-900/20 transition-all duration-300 bg-gradient-to-b from-blue-500/10 via-blue-500/0 to-blue-500/10 w-auto border-white/10 border rounded-full pt-2 pr-8 pb-2 pl-2 relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-2xl gap-x-4 gap-y-4 items-center overflow-hidden">

                <div className="absolute inset-0 rounded-full" style={{"WebkitMask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", "WebkitMaskComposite": "xor", "maskComposite": "exclude", "padding": "1px", "pointerEvents": "none"}}>
                  <div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#5E5CE6_360deg)]"></div>
                </div>

                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5E5CE6] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_10px_rgba(94,92,230,0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" viewBox="0 0 24 24" data-icon="lucide:zap" className="iconify iconify--lucide">
                    <path fill="currentColor" stroke="none" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" className=""></path>
                  </svg>
                </div>
                <span className="relative z-10 text-lg font-medium text-white tracking-tight">
                  Start Automating
                </span>
              </button>
            </div>


            <div className="hidden lg:block glass-card w-72 rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute top-[15%] left-[10%]" style={{"animation": "aura-float-1 8s ease-in-out infinite"}}>
              <div className="flex mb-4 items-center justify-between">
                <span className="text-xs font-medium text-neutral-400">
                  Trigger Source
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              </div>
              <div className="w-full bg-neutral-900/50 border border-indigo-500/30 rounded-lg p-2.5 flex items-center justify-between mb-3 shadow-[0_0_15px_-3px_rgba(99,102,241,0.1)]">
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:webhook" className="iconify text-indigo-400 iconify--lucide">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                      <path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                      <path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                    </g>
                  </svg>
                  <span className="text-sm text-white font-medium">Webhook Event</span>
                </div>
                <span className="text-xs font-mono text-neutral-500">POST</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:mail" className="iconify text-neutral-400 iconify--lucide">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g>
                  </svg>
                  <span className="text-sm font-medium">New Email</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:database" className="iconify text-neutral-400 iconify--lucide">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                      <path d="M3 12a9 3 0 0 0 18 0"></path>
                    </g>
                  </svg>
                  <span className="text-sm font-medium">Row Created</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:clock" className="iconify text-neutral-500 iconify--lucide">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                  <span className="text-sm font-medium">Scheduled</span>
                </div>
              </div>
            </div>


            <div className="hidden lg:block absolute right-[10%] top-[20%] w-64 glass-card rounded-2xl p-1.5 space-y-1" style={{"animation": "aura-float-2 9s ease-in-out infinite 1s"}}>

              <div className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-violet-500/30 transition-all cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/10 group-hover:text-violet-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:brain-circuit" className="iconify iconify--lucide">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="">
                      <path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2" className=""></path>
                      <circle cx="16" cy="13" r=".5"></circle>
                      <circle cx="18" cy="3" r=".5"></circle>
                      <circle cx="20" cy="21" r=".5"></circle>
                      <circle cx="20" cy="8" r=".5"></circle>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Analyze Sentiment</span>
                  <span className="text-[10px] text-neutral-500">LLM-v4-Turbo</span>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-pink-500/30 transition-all cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5 group-hover:bg-pink-500/10 group-hover:text-pink-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:file-text" className="iconify iconify--lucide">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Extract Data</span>
                  <span className="text-[10px] text-neutral-500">Vision Model</span>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-blue-500/30 transition-all cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:message-square" className="iconify iconify--lucide">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Draft Reply</span>
                  <span className="text-[10px] text-neutral-500">Context Aware</span>
                </div>
              </div>
            </div>


            <div className="hidden lg:block glass-card w-72 rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute bottom-[5%] left-[12%]" style={{"animation": "10s ease-in-out 2s infinite normal none running aura-float-3"}}>


              <div className="relative z-10 flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-neutral-900 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:git-branch" className="iconify text-neutral-400 iconify--lucide">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M6 3v12"></path>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </g>
                </svg>
                <span className="text-sm font-medium">Conditional Route</span>
              </div>


              <div className="pl-4 py-2 space-y-2 relative">

                <div className="absolute left-[29px] top-0 bottom-6 w-px bg-white/10"></div>


                <div className="relative flex items-center">

                  <div className="w-4 h-6 border-b border-l border-white/10 rounded-bl-xl absolute -left-[3px] -top-3"></div>

                  <div className="ml-6 w-full relative group">
                    <div className="text-[10px] uppercase font-bold text-indigo-500/80 mb-1 tracking-wider ml-1">
                      If High Priority
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg border border-indigo-500/30 bg-indigo-950/20">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:bell-ring" className="iconify text-indigo-400 iconify--lucide">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.268 21a2 2 0 0 0 3.464 0M22 8c0-2.3-.8-4.3-2-6M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326M4 2C2.8 3.7 2 5.7 2 8"></path>
                        </svg>
                        <span className="text-sm font-medium text-indigo-100">
                          Slack Alert
                        </span>
                      </div>
                    </div>


                    <div className="absolute -right-3 top-8 z-50" style={{"animation": "cursor-move-path 8s ease-in-out infinite"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                        <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#F5F5F5" stroke="black" strokeWidth="1.5" strokeLinejoin="round" className=""></path>
                      </svg>
                      <div className="absolute left-4 top-4 bg-violet-600 text-white text-xs font-semibold px-2 py-1 rounded-full border border-white/10 whitespace-nowrap shadow-lg">
                        Auto-GPT
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative flex items-center pt-2">

                  <div className="w-4 h-6 border-b border-l border-white/10 rounded-bl-xl absolute -left-[3px] -top-3"></div>

                  <div className="ml-6 w-full">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg border border-white/5 bg-neutral-900/50 hover:bg-neutral-800 transition-colors cursor-pointer text-neutral-500">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:plus" className="iconify iconify--lucide">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14"></path>
                      </svg>
                      <span className="text-sm font-medium">Add step</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="hidden lg:block absolute right-[12%] bottom-[8%] w-80 glass-card rounded-2xl p-5" style={{"animation": "aura-float-4 11s ease-in-out infinite 0.5s"}}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="lucide:terminal" className="iconify text-neutral-400 iconify--lucide">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19h8M4 17l6-6l-6-6"></path>
                  </svg>
                  <span className="text-xs font-medium text-neutral-300">
                    Live Execution
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-emerald-500">RUNNING</span>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs max-h-32 overflow-hidden relative">

                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

                <div className="flex gap-2">
                  <span className="text-neutral-600">10:42:01</span>
                  <span className="text-blue-400">info</span>
                  <span className="text-neutral-300">Trigger received: webhook_01</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neutral-600">10:42:02</span>
                  <span className="text-purple-400">processing</span>
                  <span className="text-neutral-300">Analyzing payload...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neutral-600">10:42:03</span>
                  <span className="text-yellow-400">decision</span>
                  <span className="text-neutral-300">Priority &gt; 0.8: True</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neutral-600">10:42:04</span>
                  <span className="text-emerald-400">success</span>
                  <span className="text-neutral-300">Action executed: Slack Alert</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-neutral-500">
                  Latency:
                  <span className="text-neutral-300">240ms</span>
                </div>
                <div className="text-xs text-neutral-500">
                  Cost:
                  <span className="text-neutral-300">$0.002</span>
                </div>
              </div>
            </div>
          </main>


          <section className="md:px-10 overflow-hidden bg-neutral-950 w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
            <div className="-translate-x-1/2 z-0 pointer-events-none select-none text-center w-full absolute top-24 left-1/2" style={{"maskImage": "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)", "WebkitMaskImage": "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)"}}>
              <span className="text-[12vw] lg:text-[15rem] leading-none whitespace-nowrap font-bold text-white/5 tracking-tighter font-manrope">
                Features
              </span>
            </div>

            <div className="flex flex-col lg:flex-row text-left z-10 mb-20 relative gap-x-8 gap-y-8 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

              <div className="max-w-2xl lg:text-left">
                <h2 className="leading-[1.05] md:text-6xl text-5xl font-bold text-white tracking-tight">
                  Our AI Capabilities
                </h2>
              </div>


              <div className="max-w-md lg:text-right">
                <p className="md:text-lg leading-relaxed text-base font-light text-neutral-400">
                  Discover the cutting-edge capabilities of our AI solutions designed
                  to transform your business operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 mt-32 pt-0 relative gap-x-8 gap-y-6">

              <div className="group flex flex-col transition-all duration-500 overflow-hidden shadow-black/50 bg-gradient-to-r from-white/10 to-white/0 h-[540px] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-md [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll" style={{"position": "relative", "--border-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>




                <div className="overflow-hidden flex-1 bg-gradient-to-br from-black/10 to-black/0 w-full rounded-xl mb-4 relative" style={{"position": "relative", "--border-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "12px"}}>
                  <div className="overflow-hidden w-full h-full relative" style={{"maskImage": "linear-gradient(90deg, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(90deg, transparent, black 0%, black 80%, transparent)"}}>

                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 border border-white/10 rounded-full text-xs text-white shadow-xl backdrop-blur-sm z-20 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                      <span className="">Risk: 42%</span>
                    </div>


                    <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-black/70 border border-white/10 rounded-2xl text-[11px] text-white shadow-xl backdrop-blur-md z-20">
                      Possible high
                    </div>


                    <div className="absolute bottom-[12%] right-[16%] translate-y-1/2 px-4 py-2 bg-black/70 border border-white/10 rounded-2xl text-[11px] text-white shadow-xl backdrop-blur-md z-20">
                      Possible low
                    </div>


                    <svg className="absolute top-0 right-0 bottom-0 left-0 w-[364px] h-[422px]" viewBox="0 0 500 260" preserveAspectRatio="none" strokeWidth="2" data-icon-replaced="true" style={{"width": "364px", "height": "422px", "color": "rgb(212, 212, 212)"}}>

                      <g stroke="#636b7a" strokeWidth="0.5" opacity="0.15" className="">
                        <path d="M0 40 H500" className=""></path>
                        <path d="M0 80 H500" className=""></path>
                        <path d="M0 120 H500" className=""></path>
                        <path d="M0 160 H500"></path>
                        <path d="M0 200 H500"></path>
                        <path d="M60 0 V260" className=""></path>
                        <path d="M150 0 V260"></path>
                        <path d="M240 0 V260"></path>
                        <path d="M330 0 V260"></path>
                        <path d="M420 0 V260" className=""></path>
                      </g>


                      <path d="M0,210 C80,195 130,180 190,185 C250,190 300,215 360,210 C420,205 460,195 500,197" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" opacity="0.22" className=""></path>


                      <path d="M0,195 C80,185 140,165 210,170 C280,175 340,200 400,195 C450,190 480,178 500,175" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" opacity="0.28"></path>


                      <path d="M0,180 
                 C80,165 150,130 220,125 
                 C290,120 340,130 390,148 
                 C440,160 470,182 500,188 
                 L500,260 L0,260 Z" fill="#6366f1" fillOpacity="0.15" className="animate-chart-fill"></path>


                      <path d="M0,180 
                 C80,165 150,130 220,125 
                 C290,120 340,130 390,148 
                 C440,160 470,182 500,188" fill="none" stroke="#818cf8" strokeWidth="2.5" className="animate-draw-line"></path>


                      <circle cx="220" cy="125" r="4" fill="#ffffff" className="animate-pulse animate-chart-fill"></circle>
                      <circle cx="390" cy="148" r="4" fill="#ffffff" className="animate-chart-fill"></circle>
                    </svg>
                  </div>
                </div>


                <div className="z-20 pt-4 pr-4 pb-4 pl-4 relative">
                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                    Predictive Intelligence
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    Proprietary transformer models forecast market outcomes with
                    unprecedented temporal accuracy.
                  </p>
                </div>
              </div>


              <div className="group flex flex-col transition-all duration-500 overflow-hidden shadow-black/50 bg-gradient-to-r from-white/10 to-white/0 h-[540px] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-md [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll" style={{"position": "relative", "--border-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>

                <div className="flex-1 overflow-y-auto custom-scrollbar bg-neutral-950/40 rounded-lg pt-4 pr-4 pb-4 pl-4" style={{"position": "relative", "--border-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "8px"}}>

                  <div className="relative flex flex-col items-center w-full max-w-md mx-auto">

                    <div className="flex gap-3 transition-all duration-200 hover:border-white/20 bg-gradient-to-b from-black/10 to-black/0 w-full border-white/10 border rounded-xl px-4 py-3 relative shadow-lg gap-x-3 gap-y-3 items-center">
                      <div className="w-10 h-10 rounded-xl bg-neutral-700 flex items-center justify-center text-neutral-300 border border-white/10">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radio-receiver">
                          <path d="M5 16v2"></path>
                          <path d="M19 16v2"></path>
                          <rect width="20" height="8" x="2" y="8" rx="2"></rect>
                          <path d="M12 2v6" className=""></path>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                          Step 1
                        </span>
                        <span className="text-base font-medium text-white">
                          Ingest Signal
                        </span>
                      </div>
                    </div>


                    <div className="flex w-full mt-4 mb-4 relative justify-center">

                      <div className="absolute inset-y-0 w-px bg-white/10"></div>

                      <button className="z-10 w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center text-white shadow-md shadow-indigo-500/30 ring-2 ring-neutral-800/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                    </div>


                    <div className="flex gap-3 transition-all duration-200 hover:border-indigo-400/50 bg-gradient-to-b from-black/10 to-black/0 w-full border-indigo-500/30 border rounded-xl px-4 py-3 relative shadow-lg gap-x-3 gap-y-3 items-center">

                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-300 border border-indigo-600/30 relative z-10">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                          <path d="M5 3v4"></path>
                          <path d="M9 3v4"></path>
                          <path d="M3 5h4"></path>
                          <path d="M3 9h4"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col relative z-10">
                        <span className="text-xs uppercase tracking-[0.18em] text-indigo-300/70">
                          Neural Core
                        </span>
                        <span className="text-base font-medium text-white">
                          Chain of Thought
                        </span>
                      </div>
                    </div>


                    <div className="flex w-full mt-4 mb-4 relative justify-center">

                      <div className="absolute inset-y-0 w-px bg-white/10"></div>

                      <button className="z-10 w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center text-white shadow-md shadow-indigo-500/30 ring-2 ring-neutral-800/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                    </div>


                    <div className="flex transition-all duration-200 hover:border-white/20 bg-gradient-to-b from-black/10 to-black/0 w-full border-white/10 border rounded-xl px-4 py-3 relative shadow-lg gap-x-3 gap-y-3 items-center">
                      <div className="w-10 h-10 rounded-xl bg-neutral-700 flex items-center justify-center text-neutral-200 border border-white/10">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" className=""></path>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                          Step 3
                        </span>
                        <span className="text-base font-medium text-white">
                          Auto-Remediate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="z-20 mt-2 pt-4 pr-4 pb-4 pl-4 relative">
                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                    Autonomous Orchestration
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    Self-correcting workflows that plan, execute, and verify logic
                    chains across your entire stack.
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-6 h-[540px] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">



                <div className="group flex flex-col transition-all duration-500 overflow-hidden shadow-black/50 bg-gradient-to-r from-white/10 to-white/0 h-[540px] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                  <div className="flex-1 overflow-y-auto custom-scrollbar bg-neutral-950/40 rounded-lg pt-4 pr-4 pb-4 pl-4" style={{"position": "relative", "--border-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "8px"}}>

                    <div className="grid grid-cols-3 z-10 border-0 rounded-none pt-0 pr-0 pb-0 pl-0 relative gap-x-2.5 gap-y-2.5">
                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>
                      <div className="aspect-[3/2] rounded-lg border border-white/10 bg-white/[0.02] flex flex-col justify-center px-2.5 py-2 gap-1.5">
                        <div className="h-0.5 w-3 bg-neutral-600 rounded-full"></div>
                        <div className="h-0.5 w-full bg-neutral-700/50 rounded-full"></div>
                        <div className="h-0.5 w-4/5 bg-neutral-700/50 rounded-full"></div>
                      </div>
                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>

                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>
                      <div className="relative aspect-[3/2] rounded-lg border border-white/20 bg-white/[0.06] flex flex-col justify-center px-2.5 py-2 gap-1.5 shadow-[0_0_20px_-8px_rgba(255,255,255,0.2)]">
                        <div className="h-0.5 w-3 bg-neutral-400 rounded-full"></div>
                        <div className="h-0.5 w-full bg-neutral-600 rounded-full"></div>
                        <div className="h-0.5 w-3/4 bg-neutral-600 rounded-full"></div>

                        <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-neutral-800 rounded-full border border-white/10 flex items-center justify-center shadow-lg z-20 hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>

                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>
                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>
                      <div className="aspect-[3/2] rounded-lg border border-white/5 bg-white/[0.01]"></div>

                      <div className="aspect-[3/2] border-white/5 border rounded-lg"></div>
                      <div className="aspect-[3/2] flex flex-col gap-1.5 border-white/10 border rounded-lg pt-2 pr-2.5 pb-2 pl-2.5 gap-x-1.5 gap-y-1.5 justify-center">
                        <div className="h-0.5 w-3 bg-neutral-600 rounded-full"></div>
                        <div className="h-0.5 w-full bg-neutral-700/50 rounded-full"></div>
                        <div className="h-0.5 w-1/2 bg-neutral-700/50 rounded-full"></div>
                      </div>
                      <div className="aspect-[3/2] flex flex-col gap-1.5 border-white/10 border rounded-lg pt-2 pr-2.5 pb-2 pl-2.5 gap-x-1.5 gap-y-1.5 justify-center">
                        <div className="h-0.5 w-3 bg-neutral-600 rounded-full"></div>
                        <div className="h-0.5 w-full bg-neutral-700/50 rounded-full"></div>
                        <div className="h-0.5 w-1/2 bg-neutral-700/50 rounded-full"></div>
                      </div>
                      <div className="aspect-[3/2] border-white/5 border rounded-lg"></div>
                      <div className="aspect-[3/2] border-white/5 border rounded-lg"></div>
                      <div className="aspect-[3/2] border-white/5 border rounded-lg"></div>
                    </div>
                  </div>
                  <div className="z-20 mt-2 pt-4 pr-4 pb-4 pl-4 relative">
                    <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                      Semantic Intelligence
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      Context-aware natural language understanding that detects nuance
                      and intent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="overflow-hidden md:px-10 md:pb-0 bg-neutral-950 w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

            <div className="-translate-x-1/2 z-0 pointer-events-none select-none text-center w-full absolute top-24 left-1/2" style={{"maskImage": "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)", "WebkitMaskImage": "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)"}}>
              <span className="text-[10vw] lg:text-[12rem] leading-none whitespace-nowrap font-bold text-white/5 tracking-tighter font-manrope">
                Integrations
              </span>
            </div>

            <div className="z-10 relative">

              <div className="z-10 flex flex-col lg:flex-row gap-8 text-left mb-20 relative gap-x-8 gap-y-8 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                <div className="max-w-2xl">
                  <h2 className="md:text-6xl leading-tight text-5xl font-semibold text-white tracking-tight">
                    Connect Effortlessly
                  </h2>
                </div>
                <div className="max-w-md">
                  <p className="leading-relaxed text-lg font-light text-neutral-400">
                    Our AI solutions are designed to integrate smoothly with your
                    current technology stack.
                  </p>
                </div>
              </div>




              <section className="overflow-visible max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">



                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full"></div>
                </div>


                <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center z-10">

                  <div className="relative z-20 mb-20 md:mb-28 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
                    <div className="px-8 py-3 rounded-full bg-[#0F0F0F] border border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] flex items-center justify-center relative backdrop-blur-sm">
                      <span className="text-neutral-300 font-medium text-sm tracking-wide">
                        Fueled by
                      </span>


                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 shadow-[0_0_5px_rgba(255,255,255,0.2)]"></div>
                        <div className="w-1 h-1 rounded-full bg-neutral-600 shadow-[0_0_5px_rgba(255,255,255,0.2)]"></div>
                        <div className="w-1 h-1 rounded-full bg-neutral-600 shadow-[0_0_5px_rgba(255,255,255,0.2)]"></div>
                      </div>
                    </div>
                  </div>


                  <svg className="absolute top-[48px] left-0 w-full h-[120px] z-0 pointer-events-none overflow-visible hidden md:block" preserveAspectRatio="none" viewBox="0 0 1200 120">
                    <defs>

                      <linearGradient id="grad-left" gradientUnits="userSpaceOnUse" x1="600" y1="0" x2="200" y2="120">
                        <stop offset="0" stopColor="#3b82f6" stopOpacity="0"></stop>
                        <stop offset="0.5" stopColor="#a855f7"></stop>
                        <stop offset="1" stopColor="#0ACF83" stopOpacity="0"></stop>
                      </linearGradient>


                      <linearGradient id="grad-center" gradientUnits="userSpaceOnUse" x1="600" y1="0" x2="600" y2="120">
                        <stop offset="0" stopColor="#f59e0b" stopOpacity="0"></stop>
                        <stop offset="0.5" stopColor="#f59e0b"></stop>
                        <stop offset="1" stopColor="#ffffff" stopOpacity="0"></stop>
                      </linearGradient>


                      <linearGradient id="grad-right" gradientUnits="userSpaceOnUse" x1="600" y1="0" x2="1000" y2="120">
                        <stop offset="0" stopColor="#ec4899" stopOpacity="0"></stop>
                        <stop offset="0.5" stopColor="#ec4899"></stop>
                        <stop offset="1" stopColor="#ea4c89" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>


                    <path d="M 600 0 C 600 60, 200 60, 200 120" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5"></path>
                    <path d="M 600 0 L 600 120" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5"></path>
                    <path d="M 600 0 C 600 60, 1000 60, 1000 120" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5"></path>



                    <path d="M 600 0 C 600 60, 200 60, 200 120" fill="none" stroke="url(#grad-left)" strokeWidth="2" className="animate-flow-line" strokeLinecap="round"></path>

                    <path d="M 600 0 L 600 120" fill="none" stroke="url(#grad-center)" strokeWidth="2" className="animate-flow-line" strokeLinecap="round" style={{"animationDelay": "1s"}}></path>

                    <path d="M 600 0 C 600 60, 1000 60, 1000 120" fill="none" stroke="url(#grad-right)" strokeWidth="2" className="animate-flow-line" strokeLinecap="round" style={{"animationDelay": "2s"}}></path>
                  </svg>


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 md:px-0 w-full pr-4 pl-4 relative gap-x-6 gap-y-6">

                    <div className="glass-panel rounded-2xl p-6 relative group transition-all duration-300 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">

                      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-100 transition-opacity duration-500"></div>

                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 384" className="w-[24px] h-[24px]" fill="none" data-logos="figma" data-icon-set="logos" data-icon-replaced="true" strokeWidth="2" style={{"color": "rgb(212, 212, 212)", "width": "24px", "height": "24px"}}>
                            <path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"></path>
                            <path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"></path>
                            <path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"></path>
                            <path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"></path>
                            <path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">Figma</h3>
                      </div>

                      <p className="text-neutral-500 text-sm leading-relaxed font-normal">
                        Sync design tokens and assets directly into your production
                        codebase.
                      </p>
                    </div>


                    <div className="glass-panel rounded-2xl p-6 relative group transition-all duration-300 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">

                      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-100 transition-opacity duration-500"></div>

                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-[24px] h-[24px]" fill="white" data-logos="dribbble-icon" data-icon-set="logos" data-icon-replaced="true" strokeWidth="2" style={{"color": "rgb(212, 212, 212)", "width": "24px", "height": "24px"}}>
                            <path fill="#E74D89" d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2S8.6 193.8 8.6 127.9S62 8.5 128 8.5" className=""></path>
                            <path fill="#B2215A" d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8s-57.4 127.9-128 127.9m107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7c14.3 39.2 20.1 71.2 21.2 77.8c24.6-16.5 42.1-42.7 46.9-73.1m-65.2 83.2c-1.6-9.6-8-43-23.3-82.8c-.2.1-.5.2-.7.2c-61.7 21.5-83.8 64.2-85.8 68.2c18.5 14.4 41.8 23 67.1 23c15.1.1 29.6-3 42.7-8.6M46.8 201c2.5-4.2 32.5-53.8 88.9-72.1c1.4-.5 2.9-.9 4.3-1.3c-2.7-6.2-5.7-12.4-8.9-18.5c-54.6 16.3-107.6 15.6-112.4 15.5c0 1.1-.1 2.2-.1 3.3c.1 28.1 10.7 53.7 28.2 73.1M21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2C50.9 43.6 28.1 71.8 21 105.6m81.4-83.8c3 4 22.9 31 40.8 63.9c38.9-14.6 55.3-36.6 57.3-39.4c-19.3-17.1-44.7-27.5-72.5-27.5c-8.8 0-17.4 1.1-25.6 3m110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1c2.5 5.2 5 10.5 7.3 15.8c.8 1.9 1.6 3.8 2.4 5.6c36.4-4.6 72.5 2.8 76.1 3.5c-.3-25.7-9.5-49.4-24.8-68" className=""></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">Dribbble</h3>
                      </div>

                      <p className="leading-relaxed text-sm font-normal text-neutral-500">
                        Automatically update your portfolio when new projects ship.
                      </p>
                    </div>


                    <div className="glass-panel rounded-2xl p-6 relative group transition-all duration-300 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll">

                      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-100 transition-opacity duration-500"></div>

                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex transition-colors bg-neutral-800/50 w-12 h-12 border-white/5 border rounded-lg items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M4 4h16v16H4z" className=""></path>
                            <path d="M9 7v10" className=""></path>
                            <path d="M9 7l6 10V7" className=""></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">Notion</h3>
                      </div>

                      <p className="leading-relaxed text-sm font-normal text-neutral-500">
                        Bidirectional sync for documentation and project specs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>


            </div>
          </section>
          <section className="md:px-10 overflow-hidden bg-neutral-950 w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
            <div className="-translate-x-1/2 z-0 pointer-events-none select-none text-center w-full absolute top-24 left-1/2" style={{"maskImage": "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)", "WebkitMaskImage": "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)"}}>
              <span className="text-[10vw] lg:text-[12rem] leading-none whitespace-nowrap font-bold text-white/5 tracking-tighter font-manrope">
                Testimonials
              </span>
            </div>

            <div className="z-10 flex flex-col lg:flex-row gap-8 text-left mb-20 relative gap-x-8 gap-y-8 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              <div className="max-w-2xl">
                <h2 className="leading-[1.05] md:text-6xl text-5xl font-bold text-white tracking-tight">
                  Trusted by Visionaries
                </h2>
              </div>
              <div className="max-w-md">
                <p className="md:text-lg leading-relaxed text-base font-light text-neutral-400">
                  See how forward-thinking enterprises are achieving autonomy with our
                  neural infrastructure and self-healing agents.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 mt-32 relative gap-x-6 gap-y-6 h-[800px] overflow-hidden [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll" style={{"maskImage": "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"}}>



              <div className="relative w-full h-full overflow-hidden">
                <div className="animate-marquee-up flex flex-col">

                  <div className="flex flex-col gap-6 pb-6">
                    <div className="group transition-all duration-500 hover:border-white/10 shadow-black/50 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "The self-healing capabilities have completely eliminated our
                        midnight paging alerts. The system detects and patches
                        workflow interruptions autonomously before we even notice."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Sarah Chen
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            CTO, Nexus Systems
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group relative p-8 rounded-2xl bg-black/30 border border-white/5 transition-all duration-500 hover:border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "We deployed three custom agents to handle our inbound leads.
                        Conversion rates jumped 40% because the response time is now
                        instant and context-aware."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Marcus Thorne
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            VP Growth, Apex Digital
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 pb-6">
                    <div className="group transition-all duration-500 hover:border-white/10 shadow-black/50 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "The self-healing capabilities have completely eliminated our
                        midnight paging alerts. The system detects and patches
                        workflow interruptions autonomously before we even notice."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Sarah Chen
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            CTO, Nexus Systems
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group relative p-8 rounded-2xl bg-black/30 border border-white/5 transition-all duration-500 hover:border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "We deployed three custom agents to handle our inbound leads.
                        Conversion rates jumped 40% because the response time is now
                        instant and context-aware."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Marcus Thorne
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            VP Growth, Apex Digital
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="relative w-full h-full overflow-hidden">
                <div className="animate-marquee-down flex flex-col">

                  <div className="flex flex-col gap-6 pb-6">
                    <div className="group relative p-8 rounded-2xl bg-black/30 border border-white/5 transition-all duration-500 hover:border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "The observability features give us granular insight into
                        every decision the AI makes. It's the first 'black box'
                        technology that actually feels transparent and controllable."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Elena Rodriguez
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Head of Data, FinStream
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group transition-all duration-500 hover:border-white/10 shadow-black/50 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "Automating our compliance reporting saved us hundreds of
                        hours. The AI parses thousands of documents and flags risks
                        with higher accuracy than our manual review."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            David Park
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Compliance Director, TrustCorp
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 pb-6">
                    <div className="group relative p-8 rounded-2xl bg-black/30 border border-white/5 transition-all duration-500 hover:border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "The observability features give us granular insight into
                        every decision the AI makes. It's the first 'black box'
                        technology that actually feels transparent and controllable."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Elena Rodriguez
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Head of Data, FinStream
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group transition-all duration-500 hover:border-white/10 shadow-black/50 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "Automating our compliance reporting saved us hundreds of
                        hours. The AI parses thousands of documents and flags risks
                        with higher accuracy than our manual review."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            David Park
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Compliance Director, TrustCorp
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="relative w-full h-full overflow-hidden">
                <div className="animate-marquee-up flex flex-col">

                  <div className="flex flex-col gap-6 pb-6">
                    <div className="group transition-all duration-500 hover:border-white/10 shadow-black/50 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" className=""></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "Scaling our operations used to mean hiring more headcount.
                        Now we just spin up more agent instances. It's transformed how
                        we think about unit economics."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            James Wilson
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            COO, ScaleUp Inc.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group relative p-8 rounded-2xl bg-black/30 border border-white/5 transition-all duration-500 hover:border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "The natural language interface for building workflows is a
                        game changer. Our non-technical product managers are now
                        building complex logic chains without engineering help."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Priya Patel
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Product Lead, Innovate
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 pb-6">
                    <div className="group transition-all duration-500 hover:border-white/10 shadow-black/50 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" className=""></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "Scaling our operations used to mean hiring more headcount.
                        Now we just spin up more agent instances. It's transformed how
                        we think about unit economics."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            James Wilson
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            COO, ScaleUp Inc.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group relative p-8 rounded-2xl bg-black/30 border border-white/5 transition-all duration-500 hover:border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white mb-6 opacity-80">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      </svg>
                      <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                        "The natural language interface for building workflows is a
                        game changer. Our non-technical product managers are now
                        building complex logic chains without engineering help."
                      </p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="">
                          <h4 className="text-white font-semibold tracking-tight">
                            Priya Patel
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Product Lead, Innovate
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>




          <footer className="overflow-hidden md:px-10 bg-neutral-950 w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto mb-12 ml-auto px-10 relative">

            <div className="md:pt-24 md:pb-12 flex overflow-hidden w-full border-white/5 border-b pt-16 pb-8 items-center justify-center">
              <h1 className="text-[13vw] md:text-[200px] leading-[0.8] whitespace-nowrap select-none text-4xl font-semibold text-white/10 tracking-tighter font-manrope [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                start building
              </h1>
            </div>


            <div className="px-6 pt-16 pb-12 md:px-4 relative z-10 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
              <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-12">

                <div className="lg:w-1/2 max-w-2xl flex flex-col items-start justify-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
                    <span className="text-neutral-500">Ready to deploy</span>
                    <span className="text-white block">intelligent agents?</span>
                  </h2>
                  <p className="text-neutral-400 text-lg mb-8 max-w-md">
                    Orchestrate your business logic with self-healing workflows and
                    autonomous systems.
                  </p>
                  <div className="flex gap-4">
                    <button className="group inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]">
                      <span>Start automating</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-2 bg-neutral-900 border border-white/10 hover:border-white/20 text-white px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300">
                      <span>Contact Sales</span>
                    </button>
                  </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 lg:mr-10">

                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-sm font-semibold">Platform</h3>
                    <nav className="flex flex-col gap-3">
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Agents
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Workflows
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Observability
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Security
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Enterprise
                      </a>
                    </nav>
                  </div>


                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-sm font-semibold">Resources</h3>
                    <nav className="flex flex-col gap-3">
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Documentation
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        API Reference
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Community
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Blog
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Changelog
                      </a>
                    </nav>
                  </div>


                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-sm font-semibold">Company</h3>
                    <nav className="flex flex-col gap-3">
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        About
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Customers
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Careers
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Legal
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        Contact
                      </a>
                    </nav>
                  </div>
                </div>
              </div>


              <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium gap-6 md:gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-neutral-300">All systems operational</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="text-center md:text-right">
                  <p>© 2025 Neural Inc.</p>
                </div>
              </div>
            </div>


            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full"></div>
          </footer>
    </div>
  );
}