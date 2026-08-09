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
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n// Intersection Observer for scroll animations\nconst observer = new IntersectionObserver((entries) => {\nentries.forEach((entry) => {\nif (entry.isIntersecting) {\nentry.target.classList.add(\"animate\");\nobserver.unobserve(entry.target);\n}\n});\n}, { threshold: 0.1, rootMargin: \"0px 0px -10% 0px\" });\ndocument.querySelectorAll(\".animate-on-scroll\").forEach((el) => observer.observe(el));\n// Raining Code Animation\nconst canvas = document.getElementById('rainCanvas');\nconst ctx = canvas.getContext('2d');\nfunction resizeCanvas() {\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n}\nwindow.addEventListener('resize', resizeCanvas);\nresizeCanvas();\nconst fontSize = 14;\nconst columns = canvas.width / fontSize;\nconst drops = [];\n// Initialize drops\nfor(let x = 0; x < columns; x++) {\ndrops[x] = Math.random() * -100; // Start at random positions above screen\n}\n// Binary/Hex chars\nconst chars = \"01XYABCDEF\";\nfunction draw() {\n// Trail effect\nctx.fillStyle = 'rgba(2, 2, 2, 0.05)';\nctx.fillRect(0, 0, canvas.width, canvas.height);\nctx.fillStyle = '#3b82f6'; // Blue-500\nctx.font = fontSize + 'px monospace';\nfor(let i = 0; i < drops.length; i++) {\nconst text = chars.charAt(Math.floor(Math.random() * chars.length));\n// Vary opacity for depth\nconst opacity = Math.random() > 0.5 ? 1 : 0.3;\nctx.globalAlpha = opacity;\nctx.fillText(text, i * fontSize, drops[i] * fontSize);\n// Reset drop\nif(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {\ndrops[i] = 0;\n}\ndrops[i]++;\n}\nctx.globalAlpha = 1;\n}\nsetInterval(draw, 50);\n});\n"
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "antialiased dark";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "relative min-h-screen overflow-x-hidden pt-32 selection:bg-blue-500/20 selection:text-blue-200";
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
    <div className="aura-source-body relative min-h-screen overflow-x-hidden pt-32 selection:bg-blue-500/20 selection:text-blue-200">
      <div className="fixed inset-0 pointer-events-none z-0">

            <canvas id="rainCanvas" className="absolute inset-0 opacity-20" width="1764" height="1099"></canvas>


            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>


            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-40 blur-3xl"></div>
          </div>


          <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both] animate">
            <nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/5 bg-[#050505]/80 p-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black">
                  <iconify-icon icon="solar:record-circle-linear" width="16" height="16" strokeWidth="2"></iconify-icon>
                </div>
                <span className="text-sm font-semibold tracking-tight text-white">
                  VastLabs
                </span>
              </div>

              <div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
                <a href="#" className="hover:text-white transition-colors">Data</a>
                <a href="#" className="hover:text-white transition-colors">Platform</a>
                <a href="#" className="hover:text-white transition-colors">Company</a>
              </div>

              <div className="flex items-center gap-3">
                <a href="#" className="hidden text-xs font-medium text-neutral-400 hover:text-white sm:block px-2">
                  Login
                </a>
                <button className="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800" style={{"--border-gradient": "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))", "--border-radius-before": "9999px"}}>
                  <span>Get Data</span>
                  <iconify-icon icon="solar:arrow-right-linear" width="14" className="opacity-50 transition-transform group-hover:translate-x-0.5"></iconify-icon>
                </button>
              </div>
            </nav>
          </div>


          <main className="max-w-7xl z-10 mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">

            <div className="mx-auto mb-24 max-w-4xl text-center">
              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-200 shadow-[0_0_10px_rgba(59,130,246,0.1)] animate">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Ego-Centric Dataset V4.0
              </div>

              <h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-6xl font-medium leading-[0.95] tracking-tight text-white md:text-8xl animate">
                Human Behavior.
                <br />
                <span className="text-neutral-500">Robot Intelligence.</span>
              </h1>

              <p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-neutral-400 tracking-tight animate">
                We process egocentric video through AI pipelines that extract hand poses, grasp types, and behavioral annotations—converting first-person footage into training data for manipulation learning.
              </p>

              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col items-center justify-center gap-4 sm:flex-row animate">
                <div className="flex gap-4">
                   <button className="h-11 rounded-full bg-white px-6 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
                      <iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
                      View Catalog
                    </button>
                    <button className="h-11 rounded-full border border-white/10 bg-[#0F0F0F] px-6 text-xs font-semibold text-white hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
                      Talk to Sales
                    </button>
                </div>
              </div>
              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] mt-8 flex items-center justify-center gap-6 text-xs text-neutral-500 font-mono animate">
                  <div className="flex items-center gap-1.5">
                     <iconify-icon icon="solar:video-frame-linear" className="text-neutral-600"></iconify-icon>
                     <span>30 FPS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <iconify-icon icon="solar:user-hand-up-linear" className="text-neutral-600"></iconify-icon>
                     <span>21-Point Hand Pose</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <iconify-icon icon="solar:tag-linear" className="text-neutral-600"></iconify-icon>
                     <span>Auto-Labeled</span>
                  </div>
              </div>
            </div>


            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

              <div className="absolute -left-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
                DATA_STREAM
              </div>
              <div className="absolute -right-12 top-0 hidden text-[10px] font-mono text-neutral-800 xl:block">
                REFINERY
              </div>


              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] flex flex-col gap-6 md:col-span-4 animate">
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-6 shadow-2xl transition-colors hover:border-white/10 group">

                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none z-10"></div>

                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                      <span className="flex h-2 w-2 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
                        <span className="animate-pulse h-1 w-1 rounded-full bg-red-500"></span>
                      </span>
                      Live Processing Stream
                    </div>
                    <iconify-icon icon="solar:menu-dots-linear" className="text-neutral-600"></iconify-icon>
                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400 overflow-hidden">
                         <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                         <iconify-icon icon="solar:videocamera-record-linear" width="14" className="relative z-10 text-blue-400"></iconify-icon>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-medium text-neutral-200">
                            Clip_850c95c2 (Kitchen)
                          </div>
                          <div className="text-[10px] text-neutral-600">🔴 REC</div>
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                          <span className="text-blue-500">120 frames</span> • SAM3 + MediaPipe
                        </div>
                      </div>
                    </div>


                    <div className="flex items-center gap-3 rounded-xl border border-transparent p-3 opacity-60">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400">
                        <iconify-icon icon="solar:upload-linear" width="14"></iconify-icon>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-medium text-neutral-200">
                            Batch_Upload_47
                          </div>
                          <div className="text-[10px] text-neutral-600">30s ago</div>
                        </div>
                        <div className="text-[10px] text-neutral-500">
                          55 frames with ego-hands
                        </div>
                      </div>
                    </div>


                    <div className="flex items-center gap-3 rounded-xl border border-transparent p-3 opacity-40">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400">
                        <iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-medium text-neutral-200">
                            QA Processing
                          </div>
                          <div className="text-[10px] text-neutral-600">2m ago</div>
                        </div>
                        <div className="text-[10px] text-neutral-500">Grasp: lateral_pinch 95%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] relative md:col-span-4 animate">
                <div className="flex flex-col h-full justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 transition-colors hover:border-white/10">
                  <div className="">
                    <div className="mb-2 flex items-center gap-2">
                      <iconify-icon icon="solar:eye-linear" className="text-neutral-500" width="16"></iconify-icon>
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                        Annotation Fidelity
                      </span>
                    </div>
                    <h3 className="text-3xl font-normal tracking-tight text-white">
                      Multi-Layer
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400">
                      Synchronized object segmentation, hand keypoints, and interaction labels.
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-1 h-16 opacity-80 px-2">



                    <div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{"animation": "entropy 1.8s ease-in-out infinite alternate", "animationDelay": "0.1s", "height": "40%"}}></div>
                    <div className="w-1.5 bg-neutral-700 rounded-t-sm" style={{"animation": "entropy 2.2s ease-in-out infinite alternate", "animationDelay": "0.3s", "height": "70%"}}></div>
                    <div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{"animation": "entropy 1.5s ease-in-out infinite alternate", "animationDelay": "0.5s", "height": "30%"}}></div>

                    <div className="w-1.5 bg-blue-500 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.6)]" style={{"animation": "entropy 2.5s ease-in-out infinite alternate", "animationDelay": "0.2s", "height": "90%"}}></div>
                    <div className="w-1.5 bg-neutral-600 rounded-t-sm" style={{"animation": "entropy 1.9s ease-in-out infinite alternate", "animationDelay": "0.7s", "height": "50%"}}></div>
                    <div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{"animation": "entropy 1.6s ease-in-out infinite alternate", "animationDelay": "0.4s", "height": "30%"}}></div>
                    <div className="w-1.5 bg-neutral-700 rounded-t-sm" style={{"animation": "entropy 2.1s ease-in-out infinite alternate", "animationDelay": "0.6s", "height": "60%"}}></div>
                    <div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{"animation": "entropy 2.3s ease-in-out infinite alternate", "animationDelay": "0.8s", "height": "40%"}}></div>
                    <div className="w-1.5 bg-neutral-600 rounded-t-sm" style={{"animation": "entropy 1.7s ease-in-out infinite alternate", "animationDelay": "0.1s", "height": "20%"}}></div>
                    <div className="w-1.5 bg-neutral-500 rounded-t-sm" style={{"animation": "entropy 2.0s ease-in-out infinite alternate", "animationDelay": "0.5s", "height": "55%"}}></div>
                    <div className="w-1.5 bg-neutral-800 rounded-t-sm" style={{"animation": "entropy 1.4s ease-in-out infinite alternate", "animationDelay": "0.2s", "height": "35%"}}></div>
                    <div className="w-1.5 bg-neutral-700 rounded-t-sm" style={{"animation": "entropy 1.8s ease-in-out infinite alternate", "animationDelay": "0.9s", "height": "45%"}}></div>
                  </div>
                </div>
              </div>


              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] relative md:col-span-4 animate">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-8 hover:border-white/10 transition-colors">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <iconify-icon icon="solar:cloud-storage-linear" className="text-white" width="32"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium text-white">RoboData Refinery</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      Cloud pipeline processing egocentric video with SAM3 segmentation and MediaPipe hand tracking.
                    </p>
                  </div>


                  <div className="absolute inset-0 z-0 opacity-20">
                    <svg width="100%" height="100%">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" className="text-neutral-500"></circle>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)"></rect>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>


          <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.8s_both] border-y border-white/5 bg-[#030303] relative z-10">
            <div className="mx-auto max-w-7xl px-6 py-16 text-center">
              <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                Powering the next generation of robotics
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-20">

                 <div className="text-lg font-semibold tracking-tighter text-white font-manrope">FIGURE</div>
                 <div className="text-lg font-semibold tracking-tighter text-white font-manrope">1X</div>
                 <div className="text-lg font-semibold tracking-tighter text-white font-manrope">AGILITY</div>
                 <div className="text-lg font-semibold tracking-tighter text-white font-manrope">BOSTON DYNAMICS</div>
                 <div className="text-lg font-semibold tracking-tighter text-white font-manrope">SANCTUARY</div>
              </div>
            </div>
          </div>


          <section className="relative overflow-hidden bg-[#050505] py-32 z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,20,20,1),_rgba(5,5,5,0))]"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
                  <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
                    From raw footage to
                    <br />
                    behavioral understanding.
                  </h2>
                </div>
                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both]">
                  <p className="text-lg font-light leading-relaxed text-neutral-400">
                    General-purpose robots need more than pixels—they need to understand human intent. VastLabs extracts manipulation behaviors from egocentric video at scale.
                  </p>
                  <div className="mt-8 flex gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-2xl font-semibold text-white">120</span>
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                        Frames/Clip
                      </span>
                    </div>
                    <div className="h-auto w-px bg-white/10"></div>
                    <div className="flex flex-col gap-1">
                      <span className="text-2xl font-semibold text-white">21</span>
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                        Hand Keypoints
                      </span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
                  <div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-white">
                    <iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">
                    The Egocentric Advantage
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    First-person video captures what matters: hand-object interactions from the manipulator's perspective, not a distant observer.
                  </p>
                </div>


                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
                  <div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-white">
                    <iconify-icon icon="solar:tag-linear" width="20"></iconify-icon>
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">
                    Grasp Classification
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    Every hand detection includes grasp type—power grip, precision pinch, lateral pinch—derived from finger geometry analysis.
                  </p>
                </div>


                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-colors hover:bg-white/[0.03]">
                  <div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-white">
                    <iconify-icon icon="solar:cpu-linear" width="20"></iconify-icon>
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">
                    Behavior Extraction
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    Beyond detection: we annotate hesitation moments, decision points, and task phases for richer training signal.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="relative border-t border-white/5 bg-[#030303] py-32 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03),_transparent_60%)]"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <div className="mb-20 text-center">
                <h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white md:text-5xl">
                  Data Pipeline
                </h2>
                <p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-400 font-light">
                  From egocentric video to neural network.
                </p>
              </div>
              <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] relative rounded-3xl border border-white/5 bg-[#0A0A0A] p-8 md:p-12 shadow-2xl">

                <div className="absolute top-[88px] left-0 w-full px-12 md:px-24 hidden md:block pointer-events-none z-0">
                  <div className="relative h-px w-full bg-white/5">
                    <div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]" style={{"animation": "schemaFlow 3s linear infinite"}}></div>
                    <div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]" style={{"animation": "schemaFlow 3s linear infinite 1.5s"}}></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative z-10">

                  <div className="group flex flex-col items-center text-center">
                    <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/30">
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <iconify-icon icon="solar:record-circle-linear" width="28" className="text-neutral-400 transition-colors group-hover:text-blue-400"></iconify-icon>
                      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#111] bg-red-500/20 text-red-400 backdrop-blur-md">
                        <iconify-icon icon="solar:record-minimalistic-linear" width="10"></iconify-icon>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      Capture
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                      Face-mounted cameras record POV video as humans perform manipulation tasks naturally.
                    </p>
                  </div>

                  <div className="group flex flex-col items-center text-center relative">
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/20 bg-[#0F0F0F] shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-transform duration-500 group-hover:scale-110 z-10">
                      <iconify-icon icon="solar:layers-minimalistic-linear" width="32" className="text-blue-400"></iconify-icon>
                      <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      Process &amp; Annotate
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                      SAM3 segments objects. MediaPipe extracts 21-point hand skeletons. AI labels grasp types and interactions.
                    </p>
                  </div>

                  <div className="group flex flex-col items-center text-center">
                    <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/30">
                      <div className="transition-opacity group-hover:opacity-100 bg-purple-500/5 opacity-0 rounded-2xl absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        <iconify-icon icon="solar:download-minimalistic-linear" width="28" className="text-purple-200"></iconify-icon>
      </div>

                      <iconify-icon icon="solar:chip-linear" width="28" className="text-neutral-400 transition-colors group-hover:text-purple-400"></iconify-icon>
                      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#111] bg-purple-500/20 text-purple-400 backdrop-blur-md">
                        <iconify-icon icon="solar:play-linear" width="10"></iconify-icon>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      Export &amp; Train
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                      COCO, YOLO, and behavioral JSON formats ready for imitation learning pipelines.
                    </p>
                  </div>
                </div>
                <div className="mt-12 overflow-hidden rounded-xl border border-white/5 bg-black/40 p-3 font-mono text-[10px] text-neutral-500 backdrop-blur-sm mx-auto max-w-2xl">
                  <div className="flex items-center gap-4 md:gap-8 justify-center overflow-x-auto whitespace-nowrap px-2 no-scrollbar">
                    <div className="shrink-0 text-blue-500/50">DATASET: CLIP_1B06B70B</div>
                    <div>
                      <span className="text-purple-400">task</span>
                      ="dishwashing"
                      <span className="text-purple-400">frames</span>
                      ="120"
                      <span className="text-purple-400">ego_hands</span>
                      ="55"
                    </div>
                    <div className="ml-auto text-green-500/50">VALIDATED</div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="border-t border-white/5 bg-[#020202] py-32 z-10 relative">
            <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

              <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] order-2 lg:order-1">

                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0C0C0C] shadow-2xl">

                    <div className="relative z-20 flex items-center gap-2 border-b border-white/5 bg-[#0C0C0C] px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/20"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/20"></div>
                      </div>
                      <div className="ml-4 text-[10px] font-mono text-neutral-600">
                        refinery_client.py — Python
                      </div>
                    </div>


                    <div className="relative h-[380px] overflow-hidden bg-[#0C0C0C] px-6 font-mono text-xs leading-relaxed">

                      <div className="absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#0C0C0C] to-transparent pointer-events-none"></div>
                      <div className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none"></div>

                      <div className="animate-scroll-y py-4">

                        <div className="space-y-2 pb-8">
                          <div className="text-neutral-500">import vastlabs as vl</div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Load processed clip with full annotations</div>
                          <div className="text-neutral-300">
                            clip = vl.load(<span className="text-blue-400">"1b06b70b-573c-4bbc-b3a6"</span>)
                          </div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Access ego-hand tracking data</div>
                          <div className="text-neutral-300">hands = clip.ego_hand_tracking</div>
                          <div className="text-neutral-300"><span className="text-purple-400">print</span>(f"Left hand: &#123;hands.left.totalVisibleFrames&#125; frames")</div>
                          <div className="text-neutral-300"><span className="text-purple-400">print</span>(f"Right hand: &#123;hands.right.totalVisibleFrames&#125; frames")</div>
                          <div className="text-white">&gt; Left hand: 73 frames</div>
                          <div className="text-white">&gt; Right hand: 17 frames</div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Get grasp classifications</div>
                          <div className="text-neutral-300"><span className="text-purple-400">for</span> frame in clip.ego_hands.frames:</div>
                          <div className="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> frame.leftHand:</div>
                          <div className="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">print</span>(f"Frame &#123;frame.frameIndex&#125;: &#123;frame.leftHand.grasp.graspType&#125;")</div>
                          <div className="text-white">&gt; Frame 2: lateral_pinch</div>
                          <div className="text-white">&gt; Frame 4: power_grip</div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Export for training</div>
                          <div className="text-neutral-300">clip.export(<span className="text-blue-400">"coco_keypoints"</span>, include_hands=True)</div>
                        </div>


                        <div className="space-y-2 pb-8">
                           <div className="text-neutral-500">import vastlabs as vl</div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Load processed clip with full annotations</div>
                          <div className="text-neutral-300">
                            clip = vl.load(<span className="text-blue-400">"1b06b70b-573c-4bbc-b3a6"</span>)
                          </div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Access ego-hand tracking data</div>
                          <div className="text-neutral-300">hands = clip.ego_hand_tracking</div>
                          <div className="text-neutral-300"><span className="text-purple-400">print</span>(f"Left hand: &#123;hands.left.totalVisibleFrames&#125; frames")</div>
                          <div className="text-neutral-300"><span className="text-purple-400">print</span>(f"Right hand: &#123;hands.right.totalVisibleFrames&#125; frames")</div>
                          <div className="text-white">&gt; Left hand: 73 frames</div>
                          <div className="text-white">&gt; Right hand: 17 frames</div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Get grasp classifications</div>
                          <div className="text-neutral-300"><span className="text-purple-400">for</span> frame in clip.ego_hands.frames:</div>
                          <div className="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> frame.leftHand:</div>
                          <div className="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">print</span>(f"Frame &#123;frame.frameIndex&#125;: &#123;frame.leftHand.grasp.graspType&#125;")</div>
                          <div className="text-white">&gt; Frame 2: lateral_pinch</div>
                          <div className="text-white">&gt; Frame 4: power_grip</div>
                          <div className="text-neutral-500">&nbsp;</div>
                          <div className="text-neutral-400"># Export for training</div>
                          <div className="text-neutral-300">clip.export(<span className="text-blue-400">"coco_keypoints"</span>, include_hands=True)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] order-1 lg:order-2">
                  <h2 className="mb-6 text-3xl font-medium tracking-tight text-white md:text-4xl">
                    Behavioral annotations.
                    <br />Any framework.
                  </h2>
                  <p className="mb-8 text-neutral-400 font-light leading-relaxed">
                    Don't settle for bounding boxes. VastLabs provides hand keypoints, grasp types, motion vectors, and interaction labels in standardized formats.
                  </p>
                  <ul className="space-y-4 text-sm text-neutral-300">
                    <li className="flex items-center gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-white"></iconify-icon>
                      COCO-Keypoints for hand pose
                    </li>
                    <li className="flex items-center gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-white"></iconify-icon>
                      Compatible with LeRobot &amp; Robomimic
                    </li>
                    <li className="flex items-center gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-white"></iconify-icon>
                      Full JSON with behavioral layers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          <section className="border-t border-white/5 bg-[#050505] py-24 z-10 relative">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-16 text-center">
                <h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-4 text-3xl font-medium text-white">
                  Data Access
                </h2>
                <p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] text-neutral-400">
                  Start training with richly-annotated manipulation data.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col rounded-2xl border border-white/5 bg-transparent p-6 hover:border-white/10">
                  <div className="mb-1 text-sm font-medium text-neutral-300">
                    Academic
                  </div>
                  <div className="mb-6 text-2xl font-semibold text-white">
                    $0
                  </div>
                  <ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-white"></iconify-icon>
                      Non-commercial license
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-white"></iconify-icon>
                      100 Hours of Data
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-white"></iconify-icon>
                      Object annotations only
                    </li>
                  </ul>
                  <button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/5">
                    Apply for Access
                  </button>
                </div>


                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative flex flex-col rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 shadow-2xl">
                  <div className="absolute -top-3 left-6 inline-block rounded-full border border-white/10 bg-[#0F0F0F] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                    Popular
                  </div>
                  <div className="mb-1 text-sm font-medium text-neutral-300">Startup</div>
                  <div className="mb-6 text-2xl font-semibold text-white">
                    $499
                    <span className="text-sm font-normal text-neutral-500">/mo</span>
                  </div>
                  <ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-blue-400"></iconify-icon>
                      Commercial License
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-blue-400"></iconify-icon>
                      1,000 Hours / month
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-blue-400"></iconify-icon>
                      Full behavioral annotations
                    </li>
                  </ul>
                  <button className="w-full rounded-full bg-white py-2.5 text-xs font-semibold text-black transition-transform hover:scale-[1.02]">
                    Subscribe
                  </button>
                </div>


                <div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] flex flex-col rounded-2xl border border-white/5 bg-transparent p-6 hover:border-white/10">
                  <div className="mb-1 text-sm font-medium text-neutral-300">
                    Robotics Lab
                  </div>
                  <div className="mb-6 text-2xl font-semibold text-white">Custom</div>
                  <ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-white"></iconify-icon>
                      Full Dataset Access
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-white"></iconify-icon>
                      Custom Task Collection
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-read-linear" width="14" className="text-white"></iconify-icon>
                      Dedicated annotation pipeline
                    </li>
                  </ul>
                  <button className="w-full rounded-full border border-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/5">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>


          <footer className="border-t border-white/5 bg-[#020202] pb-12 pt-24 relative z-10">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
                <div className="max-w-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <iconify-icon icon="solar:record-circle-linear" className="text-white" width="18"></iconify-icon>
                    <span className="text-lg font-bold tracking-tight text-white">
                      VastLabs
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-500">
                    Solving the annotation bottleneck for manipulation learning. Egocentric video processed into behavioral training data.
                  </p>
                </div>

                <div className="flex gap-16 text-xs text-neutral-500">
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-white">Data</span>
                    <a href="#" className="hover:text-white">Catalog</a>
                    <a href="#" className="hover:text-white">Benchmarks</a>
                    <a href="#" className="hover:text-white">Format</a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-white">Platform</span>
                    <a href="#" className="hover:text-white">Refinery</a>
                    <a href="#" className="hover:text-white">Export API</a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-white">Company</span>
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Careers</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-8">
                <p className="text-[10px] text-neutral-600">
                  © 2025 VastLabs Inc.
                </p>
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-[10px] text-neutral-500">
                    Ingestion Pipeline Active
                  </span>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}