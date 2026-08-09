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
    "content": "\n      lucide.createIcons({\n        attrs: {\n          \"stroke-width\": 1.6\n        }\n      });\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        document.querySelectorAll(\"[data-slider]\").forEach((slider) => {\n          const before = slider.querySelector(\"[data-before]\");\n          const line = slider.querySelector(\"[data-line]\");\n          const handle = slider.querySelector(\"[data-handle]\");\n\n          let isDragging = false;\n\n          const setPosition = (clientX) => {\n            const rect = slider.getBoundingClientRect();\n            const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);\n            const percent = (x / rect.width) * 100;\n\n            before.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;\n      line.style.left = `${percent}%`;\n      handle.style.left = `${percent}%`;\n          };\n\n          const startDragging = (event) => {\n            isDragging = true;\n            const clientX = event.touches ? event.touches[0].clientX : event.clientX;\n            setPosition(clientX);\n          };\n\n          const drag = (event) => {\n            if (!isDragging) return;\n            const clientX = event.touches ? event.touches[0].clientX : event.clientX;\n            setPosition(clientX);\n          };\n\n          const stopDragging = () => {\n            isDragging = false;\n          };\n\n          slider.addEventListener(\"mousedown\", startDragging);\n          slider.addEventListener(\"touchstart\", startDragging, { passive: true });\n\n          window.addEventListener(\"mousemove\", drag);\n          window.addEventListener(\"touchmove\", drag, { passive: true });\n\n          window.addEventListener(\"mouseup\", stopDragging);\n          window.addEventListener(\"touchend\", stopDragging);\n        });\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function() {\n        function initAnimations() {\n          const observer = new IntersectionObserver((entries, obs) => {\n            entries.forEach(entry => {\n              if (entry.isIntersecting) {\n                entry.target.classList.add('animate-in');\n                obs.unobserve(entry.target);\n              }\n            });\n          }, { threshold: 0.1 });\n          document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));\n        }\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', initAnimations);\n        } else {\n          initAnimations();\n        }\n      })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n(function () {\n  function playVideo(video) {\n    var promise = video.play();\n    if (promise && typeof promise.catch === \"function\") {\n      promise.catch(function () {});\n    }\n  }\n\n  function setupVideo(video) {\n    if (video.__auraVideoReady === true) return;\n    video.__auraVideoReady = true;\n    video.removeAttribute(\"data-aura-video-ready\");\n    video.removeAttribute(\"data-aura-video-played\");\n    video.muted = true;\n    video.playsInline = true;\n\n    var preset = video.dataset.auraVideoPreset || \"loop-in-view\";\n    if (preset === \"hover\") {\n      video.addEventListener(\"mouseenter\", function () {\n        playVideo(video);\n      });\n      video.addEventListener(\"mouseleave\", function () {\n        video.pause();\n        video.currentTime = 0;\n      });\n      return;\n    }\n\n    if (!(\"IntersectionObserver\" in window)) {\n      playVideo(video);\n      return;\n    }\n\n    var observer = new IntersectionObserver(function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          if (preset === \"play-once\" && video.__auraVideoPlayed === true) {\n            return;\n          }\n          playVideo(video);\n        } else {\n          video.pause();\n        }\n      });\n    }, { threshold: 0.35 });\n\n    if (preset === \"play-once\") {\n      video.addEventListener(\"ended\", function () {\n        video.__auraVideoPlayed = true;\n      }, { once: true });\n    }\n\n    observer.observe(video);\n  }\n\n  function setupVideos() {\n    document\n      .querySelectorAll(\"video[data-aura-video-preset]\")\n      .forEach(setupVideo);\n  }\n\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", setupVideos);\n  } else {\n    setupVideos();\n  }\n})();"
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "min-h-screen overflow-x-hidden";
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
    <div className="aura-source-body min-h-screen overflow-x-hidden">
      <header className="w-full">
            <nav className="mx-auto flex max-w-[1510px] items-center justify-between gap-6 px-6 py-7 sm:px-8 lg:px-12 xl:px-14">

              <a href="#" className="font-logo shrink-0 text-[1.95rem] font-medium tracking-[0.20em] text-[#171411] sm:text-[2.15rem]">
                ATELIER AI
              </a>


              <div className="hidden items-center gap-10 text-[15px] font-semibold tracking-[-0.02em] text-[#2c2722] lg:flex xl:gap-14">
                <a href="#" className="transition hover:text-[#98704a]">How It Works</a>
                <a href="#" className="transition hover:text-[#98704a]">Styles</a>
                <a href="#" className="transition hover:text-[#98704a]">Pricing</a>
                <a href="#" className="transition hover:text-[#98704a]">Inspiration</a>
                <a href="#" className="transition hover:text-[#98704a]">
                  For Professionals
                </a>
              </div>


              <div className="flex items-center gap-5 sm:gap-7">
                <a href="#" className="hidden text-[15px] font-semibold text-[#2c2722] transition hover:text-[#98704a] sm:inline-flex">
                  Log in
                </a>

                <a href="#" className="inline-flex h-[54px] items-center justify-center rounded-[12px] bg-[#171614] px-7 text-[15px] font-bold text-white shadow-[0_18px_42px_rgba(25,21,18,0.16)] transition hover:bg-[#29231e]">
                  Get Started
                </a>
              </div>
            </nav>
          </header>

          <main>

            <section className="pb-16 pt-8 lg:pb-20">
              <div className="mx-auto max-w-[1510px] pl-6 sm:pl-8 lg:pl-12 xl:pl-14">
                <div className="grid items-stretch gap-14 lg:grid-cols-[0.76fr_1.24fr] xl:gap-20">

                  <div className="hero-side flex min-h-[735px] flex-col justify-center pr-6 sm:pr-8 lg:pr-0 xl:min-h-[760px]">
                    <div className="max-w-[700px] reveal-on-scroll delay-300">

                      <h1 className="font-display max-w-[780px] text-[4.2rem] font-normal leading-[0.9] tracking-[-0.078em] text-[#151310] sm:text-[5.25rem] md:text-[5.95rem] lg:text-[5rem] xl:text-[5.9rem] 2xl:text-[6.25rem] reveal-on-scroll">
                        <span className="whitespace-nowrap">See the room</span>
                        <br />
                        before you
                        <br />
                        redesign it.
                      </h1>


                      <div className="mt-8 h-px w-[4.1rem] bg-[#9f7851] reveal-on-scroll delay-150"></div>


                      <p className="mt-7 max-w-[39rem] text-[1.15rem] font-medium leading-[1.72] tracking-[-0.025em] text-[#3a332d] sm:text-[1.22rem]">
                        Upload your room, explore multiple styles, and generate
                        polished interior concepts in minutes with
                        <span className="font-bold text-[#9a744d]">Atelier AI.</span>
                      </p>


                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 reveal-on-scroll delay-500">
                        <a href="#" className="inline-flex h-[66px] items-center justify-center gap-4 rounded-[12px] bg-[#171614] px-8 text-[1rem] font-bold text-white shadow-[0_24px_54px_rgba(28,22,17,0.18)] transition hover:-translate-y-0.5 hover:bg-[#29231f] sm:min-w-[250px]">
                          <i data-lucide="upload" className="h-6 w-6"></i>
                          Upload Your Room
                        </a>

                        <a href="#" className="inline-flex h-[66px] items-center justify-center gap-4 rounded-[12px] border border-[#d1c4b7] bg-[#f1ebe3] px-8 text-[1rem] font-bold text-[#1c1915] shadow-[0_12px_28px_rgba(88,72,58,0.055)] transition hover:-translate-y-0.5 hover:border-[#c6b49f] hover:bg-[#f8f2ea] sm:min-w-[250px]">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1d1a16]">
                            <i data-lucide="play" className="ml-0.5 h-4 w-4"></i>
                          </span>
                          See How It Works
                        </a>
                      </div>


                      <div className="mt-10 reveal-on-scroll delay-700">
                        <div className="flex flex-wrap items-center gap-y-6 text-[#181511] lg:flex-nowrap">

                          <div className="flex shrink-0 items-center gap-3.5 pr-5 xl:pr-6">
                            <i data-lucide="users-round" className="h-8 w-8 shrink-0 text-[#9d7650]"></i>
                            <div>
                              <div className="whitespace-nowrap text-[0.8rem] font-semibold text-[#756b60]">
                                Rooms Designed
                              </div>
                              <div className="mt-2 text-[1.02rem] font-extrabold leading-none tracking-[-0.02em]">
                                50K+
                              </div>
                            </div>
                          </div>

                          <div className="hidden h-12 w-px shrink-0 bg-[#d9cfc4] sm:block"></div>


                          <div className="flex shrink-0 items-center gap-3.5 px-5 xl:px-6">
                            <i data-lucide="badge-check" className="h-8 w-8 shrink-0 text-[#9d7650]"></i>
                            <div>
                              <div className="whitespace-nowrap text-[0.8rem] font-semibold text-[#756b60]">
                                User Rating
                              </div>
                              <div className="mt-2 text-[1.02rem] font-extrabold leading-none tracking-[-0.02em]">
                                4.9/5
                              </div>
                            </div>
                          </div>

                          <div className="hidden h-12 w-px shrink-0 bg-[#d9cfc4] sm:block"></div>


                          <div className="flex shrink-0 items-center gap-3.5 pl-5 xl:pl-6">
                            <i data-lucide="shield-check" className="h-8 w-8 shrink-0 text-[#9d7650]"></i>
                            <div>
                              <div className="whitespace-nowrap text-[0.8rem] font-semibold text-[#756b60]">
                                Trusted by
                              </div>
                              <div className="mt-2 whitespace-nowrap text-[1.02rem] font-extrabold leading-none tracking-[-0.02em] text-[#181511]">
                                Design Pros
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="mt-7 text-[0.96rem] font-medium tracking-[-0.02em] text-[#94897d]">
                          Loved by homeowners, designers, and real estate
                          professionals.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="hero-side hero-visual-bleed relative flex min-h-[735px] items-center xl:min-h-[760px] lg:mr-[calc((1510px-100vw)/2)]">
                    <div className="hero-image-frame relative h-[735px] w-full overflow-visible rounded-tl-[1.35rem] rounded-bl-[1.35rem] rounded-tr-none rounded-br-none xl:h-[760px] reveal-on-scroll delay-500">

                      <div className="relative h-full w-full overflow-hidden rounded-tl-[1.35rem] rounded-bl-[1.35rem] rounded-tr-none rounded-br-none border border-r-0 border-[#dfd4c8] bg-[#d7cabc] shadow-[0_34px_90px_rgba(71,56,42,0.17)] reveal-on-scroll delay-150">
                        <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/66a84ecf-0972-40f3-8a4c-15b11d3aee0a/1779500363762-9c8dfe0b-f52e-462c-ab07-46cb6e1859e9.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" muted="" playsInline="" preload="metadata" loop="" aria-label="Warm editorial living room with stone fireplace, organic textures, cream sofa, wood shelving, and soft daylight" className="h-full w-full object-cover object-center"></video>

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,240,231,0.10)_0%,rgba(246,240,231,0.00)_34%,rgba(24,18,14,0.04)_100%)]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#211913]/26 via-[#211913]/7 to-transparent"></div>
                      </div>


                      <div className="premium-panel absolute -left-[70px] top-8 z-20 w-[172px] rounded-[15px] p-1.5 sm:w-[185px] lg:-left-[58px] xl:-left-[70px] reveal-on-scroll delay-300">
                        <div className="relative overflow-hidden rounded-[11px] border border-[#e2d5c8] bg-[#f7f1e9] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7c127b-e2ce-4fbc-af38-233509c064a3_800w.png" alt="Before empty room" className="h-[122px] w-full object-cover grayscale-[12%] saturate-[0.78] sm:h-[132px]" />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1712]/42 via-transparent to-white/8"></div>

                          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-[#d8c9b8] bg-[#eee5da] px-3.5 py-2 text-[0.82rem] font-extrabold tracking-[-0.02em] text-[#2b241d] shadow-[0_10px_22px_rgba(42,31,22,0.16),inset_0_1px_0_rgba(255,255,255,0.68)]">
                            <span className="h-2 w-2 rounded-full bg-[#f8f3ec] shadow-[inset_0_0_0_1px_rgba(166,123,79,0.18)]"></span>
                            Before
                          </div>
                        </div>
                      </div>


                      <svg className="pointer-events-none absolute left-[95px] top-[155px] z-20 hidden h-32 w-44 text-white/95 drop-shadow-[0_3px_10px_rgba(0,0,0,0.20)] sm:block lg:left-[105px] lg:top-[160px]" viewBox="0 0 180 130" fill="none" aria-hidden="true">
                        <path d="M8 9C72 18 126 48 151 102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 7"></path>
                        <path d="M137 94L153 105L158 86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>


                      <aside className="premium-panel absolute right-6 top-[18.5%] z-20 w-[238px] rounded-[1.25rem] p-3.5 sm:right-7 sm:w-[246px] xl:right-8 reveal-on-scroll delay-500">
                        <div className="mb-3.5 flex items-center justify-between">
                          <h2 className="text-[0.9rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                            Explore Styles
                          </h2>

                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                            <i data-lucide="sparkles" className="h-3.5 w-3.5 text-[#9d7650]"></i>
                          </span>
                        </div>

                        <div className="space-y-2.5">

                          <button className="group flex w-full items-center gap-2.5 rounded-[10px] border border-[#ad8356] bg-[#f3eadf] p-2 text-left shadow-[0_12px_25px_rgba(115,82,50,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_320w.png" alt="" className="h-[54px] w-[62px] rounded-[8px] object-cover shadow-[0_6px_14px_rgba(46,35,27,0.14)]" />
                            <span className="min-w-0 flex-1 text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                              Editorial Luxe
                            </span>
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#a77f53] bg-[#efe1d1] text-[#8d653e] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                              <i data-lucide="check" className="h-3 w-3"></i>
                            </span>
                          </button>


                          <button className="group relative flex w-full items-center gap-2.5 overflow-hidden rounded-[10px] border border-[#e2d5c8] bg-[#f7f1e9] p-2 text-left shadow-[0_8px_18px_rgba(70,54,42,0.055),inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 hover:-translate-y-0.5 hover:border-[#cdb8a3] hover:bg-[#faf4ed] hover:shadow-[0_12px_24px_rgba(70,54,42,0.09),inset_0_1px_0_rgba(255,255,255,0.78)]">
                            <span className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[#b38a5f]/0 transition group-hover:bg-[#b38a5f]/70"></span>
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="" className="h-[54px] w-[62px] rounded-[8px] object-cover opacity-78 saturate-[0.72] shadow-[0_5px_12px_rgba(46,35,27,0.10)] transition duration-300 group-hover:opacity-95 group-hover:saturate-[0.92]" />
                            <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                              <span className="text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#302922]">
                                Japandi
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#c9b9a6] transition group-hover:bg-[#a77f53]"></span>
                            </span>
                          </button>


                          <button className="group relative flex w-full items-center gap-2.5 overflow-hidden rounded-[10px] border border-[#e2d5c8] bg-[#f7f1e9] p-2 text-left opacity-95 shadow-[0_8px_18px_rgba(70,54,42,0.045),inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 hover:-translate-y-0.5 hover:border-[#cdb8a3] hover:bg-[#faf4ed] hover:opacity-100 hover:shadow-[0_12px_24px_rgba(70,54,42,0.09),inset_0_1px_0_rgba(255,255,255,0.78)]">
                            <span className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[#b38a5f]/0 transition group-hover:bg-[#b38a5f]/70"></span>
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa4a07b-8f7b-407d-83bb-124126fea659_320w.png" alt="" className="h-[54px] w-[62px] rounded-[8px] object-cover opacity-68 saturate-[0.68] shadow-[0_5px_12px_rgba(46,35,27,0.10)] transition duration-300 group-hover:opacity-92 group-hover:saturate-[0.9]" />
                            <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                              <span className="text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#4b4036]">
                                Modern Organic
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#c9b9a6] transition group-hover:bg-[#a77f53]"></span>
                            </span>
                          </button>


                          <button className="group relative flex w-full items-center gap-2.5 overflow-hidden rounded-[10px] border border-[#e2d5c8] bg-[#f7f1e9] p-2 text-left opacity-88 shadow-[0_8px_18px_rgba(70,54,42,0.035),inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 hover:-translate-y-0.5 hover:border-[#cdb8a3] hover:bg-[#faf4ed] hover:opacity-100 hover:shadow-[0_12px_24px_rgba(70,54,42,0.09),inset_0_1px_0_rgba(255,255,255,0.78)]">
                            <span className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[#b38a5f]/0 transition group-hover:bg-[#b38a5f]/70"></span>
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa4a07b-8f7b-407d-83bb-124126fea659_320w.png" alt="" className="h-[54px] w-[62px] rounded-[8px] object-cover opacity-58 saturate-[0.62] shadow-[0_5px_12px_rgba(46,35,27,0.10)] transition duration-300 group-hover:opacity-90 group-hover:saturate-[0.9]" />
                            <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                              <span className="text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#5a4d41]">
                                Soft Minimal
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#c9b9a6] transition group-hover:bg-[#a77f53]"></span>
                            </span>
                          </button>
                        </div>

                        <a href="#" className="mt-4 flex items-center justify-between rounded-[9px] px-1.5 py-1 text-[0.74rem] font-bold tracking-[-0.02em] text-[#75695e] transition hover:bg-[#f7f1e9] hover:text-[#1c1814]">
                          View all styles
                          <i data-lucide="chevron-right" className="h-4 w-4"></i>
                        </a>
                      </aside>


                      <div className="premium-panel absolute bottom-5 left-5 z-20 w-[min(74%,36rem)] rounded-[1.25rem] px-4 py-3.5 sm:px-5 reveal-on-scroll delay-700">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <span className="material-dot h-[50px] w-[50px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                            <span className="material-dot h-[50px] w-[50px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                            <span className="material-dot h-[50px] w-[50px] rounded-full border border-white/45 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(255,255,255,0.06)]"></span>
                            <span className="material-dot h-[50px] w-[50px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                            <span className="material-dot hidden h-[50px] w-[50px] rounded-full border border-white/45 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)] sm:inline-block"></span>
                            <span className="material-dot hidden h-[50px] w-[50px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)] sm:inline-block"></span>
                          </div>

                          <div className="hidden h-11 w-px bg-[#cec0b1] sm:block"></div>

                          <div className="flex min-w-[132px] items-center justify-between gap-3">
                            <div>
                              <div className="text-[0.76rem] font-extrabold tracking-[-0.02em] text-[#1d1915]">
                                AI Curated
                              </div>
                              <div className="mt-1 text-[0.72rem] font-semibold tracking-[-0.02em] text-[#74695e]">
                                Materials Palette
                              </div>
                            </div>

                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                              <i data-lucide="sparkles" className="h-3.5 w-3.5 text-[#9d7650]"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="pb-16 pt-10 lg:pb-20 lg:pt-14">
              <div className="mx-auto max-w-[1510px] px-6 sm:px-8 lg:px-12 xl:px-14">
                <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] xl:gap-20">

                  <div className="py-6 lg:py-12 reveal-on-scroll delay-300">

                    <div className="mb-5 flex flex-col items-start gap-3 text-[0.95rem] font-bold tracking-[-0.02em] text-[#9a744d] reveal-on-scroll">
                      <span>Our Philosophy</span>
                      <span className="h-px w-12 bg-[#9f7851]"></span>
                    </div>


                    <h2 className="font-display max-w-[720px] text-[3.75rem] font-normal leading-[0.98] tracking-[-0.055em] text-[#151310] sm:text-[4.75rem] md:text-[5.35rem] lg:text-[4.9rem] xl:text-[5.55rem] reveal-on-scroll delay-150">
                      Beautiful spaces
                      <br />
                      begin with better
                      <br />
                      direction.
                    </h2>


                    <p className="mt-7 max-w-[39rem] text-[1rem] font-medium leading-[1.75] tracking-[-0.025em] text-[#3a332d] sm:text-[1.06rem]">
                      Atelier AI exists to bring clarity to the creative process.
                      Upload your room, explore curated styles, and see polished
                      concepts in minutes—so you can move from uncertainty to a vision
                      you can trust.
                    </p>


                    <div className="mt-10 max-w-[500px] rounded-[1.25rem] border border-[#d8c9b8] bg-[#eee5da] px-8 py-7 shadow-[0_26px_70px_rgba(42,31,22,0.14),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-500">
                      <div className="flex gap-5">
                        <span className="font-display -mt-3 text-[4.6rem] leading-none text-[#9d7650]">
                          “
                        </span>

                        <div>
                          <p className="font-display text-[1.82rem] font-normal leading-[1.12] tracking-[-0.045em] text-[#191511]">
                            AI should sharpen taste,
                            <br />
                            not replace it.
                          </p>

                          <p className="mt-5 text-[0.86rem] font-bold tracking-[-0.02em] text-[#9a744d]">
                            — Atelier AI
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="mt-14 w-full max-w-[760px] reveal-on-scroll delay-700">
                      <div className="flex items-start">

                        <div className="flex w-[235px] shrink-0 gap-2 pr-7">
                          <i data-lucide="crosshair" className="mt-0.5 h-9 w-9 shrink-0 text-[#9d7650]"></i>

                          <div>
                            <h3 className="whitespace-nowrap text-[0.98rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                              Clarity First
                            </h3>

                            <p className="mt-2 text-[0.78rem] font-semibold leading-[1.48] tracking-[-0.02em] text-[#756b60]">
                              Turn guesswork into a clear creative direction.
                            </p>
                          </div>
                        </div>


                        <div className="mx-4 h-[84px] w-px shrink-0 bg-[#d8cdc1]"></div>


                        <div className="flex w-[250px] shrink-0 gap-2 px-1">
                          <i data-lucide="bookmark" className="mt-0.5 h-9 w-9 shrink-0 text-[#9d7650]"></i>

                          <div>
                            <h3 className="whitespace-nowrap text-[0.98rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                              Design, Refined
                            </h3>

                            <p className="mt-2 text-[0.78rem] font-semibold leading-[1.48] tracking-[-0.02em] text-[#756b60]">
                              Curated styles and materials, chosen with intention.
                            </p>
                          </div>
                        </div>


                        <div className="mx-4 h-[84px] w-px shrink-0 bg-[#d8cdc1]"></div>


                        <div className="flex w-[255px] shrink-0 gap-2 pl-1">
                          <i data-lucide="shield-check" className="mt-0.5 h-9 w-9 shrink-0 text-[#9d7650]"></i>

                          <div>
                            <h3 className="whitespace-nowrap text-[0.98rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                              Trusted Results
                            </h3>

                            <p className="mt-2 text-[0.78rem] font-semibold leading-[1.48] tracking-[-0.02em] text-[#756b60]">
                              Beautiful, buildable ideas you can feel confident in.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="relative min-h-[760px] lg:min-h-[730px] xl:min-h-[740px] xl:-mr-4">

                    <div className="absolute left-[22%] -top-10 z-10 h-[285px] w-[330px] overflow-hidden rounded-[13px] border border-[#e3d6c9] bg-[#d8c8b8] shadow-[0_28px_74px_rgba(62,48,37,0.16)] xl:left-[20%] reveal-on-scroll">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.62),transparent_30%),radial-gradient(circle_at_74%_72%,rgba(116,91,67,0.24),transparent_40%),linear-gradient(135deg,#e1d4c4,#b99d82_46%,#eadfce)]"></div>
                    </div>


                    <div className="absolute left-[-8%] top-[72px] z-10 h-[520px] w-[370px] overflow-hidden rounded-[13px] border border-[#d8c9b8] bg-[#d7cabc] shadow-[0_38px_92px_rgba(49,37,28,0.24)] xl:left-[-20%] reveal-on-scroll delay-150">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="Organic modern interior concept" className="h-full w-full object-cover object-center" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,16,12,0.18),rgba(22,16,12,0.03)_46%,rgba(255,246,235,0.05))]"></div>
                    </div>


                    <div className="premium-panel absolute right-[0%] top-[58px] z-30 w-[292px] overflow-hidden rounded-[1.2rem] bg-[#eee5da] p-0 shadow-[0_30px_76px_rgba(49,37,28,0.18),inset_0_1px_0_rgba(255,255,255,0.68)] xl:right-[1%] reveal-on-scroll delay-300">

                      <div className="flex items-center justify-between px-6 py-4">
                        <span className="text-[0.94rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                          AI Guidance
                        </span>

                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <i data-lucide="sparkles" className="h-4 w-4 text-[#9d7650]"></i>
                        </span>
                      </div>


                      <div className="border-t border-[#d7c9bc] px-6 py-4">
                        <div className="flex items-center gap-4">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                            <i data-lucide="scan-search" className="h-4 w-4 text-[#9d7650]"></i>
                          </span>

                          <div>
                            <p className="text-[0.78rem] font-extrabold tracking-[-0.02em] text-[#1c1814]">
                              Style Signals
                            </p>
                            <p className="mt-1 text-[0.72rem] font-semibold leading-[1.25] text-[#74695e]">
                              Warm minimalism
                            </p>
                          </div>
                        </div>
                      </div>


                      <div className="border-t border-[#d7c9bc] px-6 py-4">
                        <div className="flex items-center gap-4">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                            <i data-lucide="palette" className="h-4 w-4 text-[#9d7650]"></i>
                          </span>

                          <div>
                            <p className="text-[0.78rem] font-extrabold tracking-[-0.02em] text-[#1c1814]">
                              Palette Match
                            </p>
                            <p className="mt-1 text-[0.72rem] font-semibold leading-[1.25] text-[#74695e]">
                              Earthy neutrals
                            </p>
                          </div>
                        </div>
                      </div>


                      <div className="border-t border-[#d7c9bc] px-6 py-4">
                        <div className="flex items-center gap-4">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                            <i data-lucide="layout-dashboard" className="h-4 w-4 text-[#9d7650]"></i>
                          </span>

                          <div>
                            <p className="text-[0.78rem] font-extrabold tracking-[-0.02em] text-[#1c1814]">
                              Spatial Balance
                            </p>
                            <p className="mt-1 text-[0.72rem] font-semibold leading-[1.25] text-[#74695e]">
                              Open, calm, and inviting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="premium-panel absolute left-[-15%] bottom-[270px] z-55 w-[190px] rounded-[1.05rem] bg-[#eee5da] p-4 shadow-[0_28px_70px_rgba(49,37,28,0.17),inset_0_1px_0_rgba(255,255,255,0.68)] xl:left-[-28%] reveal-on-scroll delay-500">
                      <div className="grid grid-cols-2 gap-3">
                        <span className="h-[66px] rounded-[8px] bg-[linear-gradient(135deg,#efe6d8,#c7b49e)] shadow-[0_8px_16px_rgba(46,35,27,0.09),inset_0_1px_0_rgba(255,255,255,0.6)]"></span>
                        <span className="h-[66px] rounded-[8px] bg-[radial-gradient(circle_at_30%_20%,#eee5d8,#bfa68d)] shadow-[0_8px_16px_rgba(46,35,27,0.09),inset_0_1px_0_rgba(255,255,255,0.6)]"></span>
                        <span className="h-[66px] rounded-[8px] bg-[linear-gradient(135deg,#8a6d52,#4f3828)] shadow-[0_8px_16px_rgba(46,35,27,0.09),inset_0_1px_0_rgba(255,255,255,0.25)]"></span>
                        <span className="h-[66px] rounded-[8px] bg-[radial-gradient(circle_at_30%_20%,#343434,#101010)] shadow-[0_8px_16px_rgba(46,35,27,0.09),inset_0_1px_0_rgba(255,255,255,0.14)]"></span>
                      </div>
                    </div>


                    <div className="premium-panel absolute bottom-0 right-[-10%] z-40 w-[min(100%,570px)] rounded-[1.25rem] bg-[#eee5da] p-5 shadow-[0_36px_92px_rgba(49,37,28,0.20),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-700">

                      <div className="mb-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-1 text-[0.88rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                        <span>Before</span>

                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <i data-lucide="arrow-right" className="h-4 w-4 text-[#9d7650]"></i>
                        </span>

                        <span>After: Organic Modern</span>
                      </div>


                      <div className="grid grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-[11px] border border-[#e2d5c8] bg-[#f7f1e9] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7c127b-e2ce-4fbc-af38-233509c064a3_800w.png" alt="Before empty room" className="h-[220px] w-full rounded-[8px] object-cover object-center shadow-[0_12px_26px_rgba(46,35,27,0.12)]" />
                        </div>

                        <div className="overflow-hidden rounded-[11px] border border-[#e2d5c8] bg-[#f7f1e9] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="After organic modern room" className="h-[220px] w-full rounded-[8px] object-cover object-center shadow-[0_12px_26px_rgba(46,35,27,0.12)]" />
                        </div>
                      </div>


                      <div className="mt-5 flex items-center gap-5 px-2 pb-0.5">
                        <span className="whitespace-nowrap text-[0.76rem] font-extrabold tracking-[-0.02em] text-[#302922]">
                          Confidence Match
                        </span>

                        <span className="h-2 flex-1 overflow-hidden rounded-full bg-[#dfd3c8] shadow-[inset_0_1px_1px_rgba(70,54,42,0.08)]">
                          <span className="block h-full w-[78%] rounded-full bg-[#9d7650]"></span>
                        </span>

                        <span className="text-[0.76rem] font-extrabold tracking-[-0.02em] text-[#302922]">
                          92%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="pb-16 pt-10 lg:pb-20 lg:pt-14">
              <div className="mx-auto max-w-[1510px] px-6 sm:px-8 lg:px-12 xl:px-14">
                <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] xl:gap-20">

                  <div className="py-6 lg:py-12 reveal-on-scroll delay-300">

                    <div className="mb-5 flex flex-col items-start gap-3 text-[0.95rem] font-bold tracking-[-0.02em] text-[#9a744d] reveal-on-scroll">
                      <span>Style Library</span>
                      <span className="h-px w-12 bg-[#9f7851]"></span>
                    </div>


                    <h2 className="font-display max-w-[820px] text-[3.75rem] font-normal leading-[0.98] tracking-[-0.055em] text-[#151310] sm:text-[4.75rem] md:text-[5.25rem] lg:text-[4.65rem] xl:text-[5.25rem] 2xl:text-[5.55rem] reveal-on-scroll delay-150">
                      <span className="whitespace-nowrap">Explore signature</span>
                      <br />
                      <span className="whitespace-nowrap">design directions.</span>
                    </h2>


                    <p className="mt-7 max-w-[34rem] text-[1rem] font-medium leading-[1.75] tracking-[-0.025em] text-[#3a332d] sm:text-[1.06rem]">
                      Curated aesthetics, timeless ideas, and refined interior
                      languages designed to help you find the direction that feels
                      like home.
                    </p>


                    <a href="#" className="mt-9 inline-flex items-center gap-3 text-[0.98rem] font-extrabold tracking-[-0.02em] text-[#9a744d] transition hover:text-[#171411] reveal-on-scroll delay-500">
                      View all styles
                      <i data-lucide="arrow-right" className="h-4 w-4"></i>
                    </a>


                    <div className="premium-panel mt-14 max-w-[380px] rounded-[1.25rem] bg-[#eee5da] p-6 shadow-[0_26px_70px_rgba(42,31,22,0.13),inset_0_1px_0_rgba(255,255,255,0.68)] lg:mt-16 reveal-on-scroll delay-700">
                      <p className="text-[0.92rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                        Curated Materials Palette
                      </p>

                      <div className="mt-7 flex items-center gap-3">
                        <span className="material-dot h-[42px] w-[42px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                        <span className="material-dot h-[42px] w-[42px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                        <span className="material-dot h-[42px] w-[42px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                        <span className="material-dot h-[42px] w-[42px] rounded-full border border-white/45 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(255,255,255,0.06)]"></span>
                        <span className="material-dot h-[42px] w-[42px] rounded-full border border-white/60 shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_0_0_1px_rgba(80,65,50,0.08)]"></span>
                        <span className="hidden h-[42px] w-[42px] rounded-full border border-white/50 bg-[radial-gradient(circle_at_30%_25%,#6b5d36,#302b1c)] shadow-[0_5px_12px_rgba(46,35,27,0.10),inset_0_1px_0_rgba(255,255,255,0.16)] sm:inline-block"></span>
                      </div>

                      <div className="my-6 h-px w-full bg-[#d8cdc1]"></div>

                      <p className="max-w-[18rem] text-[0.8rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                        Natural textures, considered finishes, and tonal materials for
                        refined room concepts.
                      </p>
                    </div>
                  </div>


                  <div className="relative">
                    <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] xl:gap-6">

                      <div className="flex flex-col gap-5">

                        <article className="premium-panel group overflow-hidden rounded-[1.25rem] bg-[#eee5da] shadow-[0_28px_76px_rgba(49,37,28,0.16),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll">
                          <div className="relative h-[250px] overflow-hidden border-b border-[#d8c9b8]">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="Editorial Luxe interior direction" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/16 via-transparent to-transparent"></div>
                          </div>

                          <div className="flex items-end justify-between gap-5 p-5">
                            <div className="min-w-0">
                              <div className="flex items-center gap-3">
                                <h3 className="font-display whitespace-nowrap text-[1.78rem] font-normal leading-none tracking-[-0.045em] text-[#171411]">
                                  Editorial Luxe
                                </h3>

                                <span className="rounded-full border border-[#d8c9b8] bg-[#f7efe6] px-3 py-1 text-[0.68rem] font-extrabold tracking-[-0.02em] text-[#9a744d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                                  Popular
                                </span>
                              </div>

                              <p className="mt-3 max-w-[22rem] text-[0.86rem] font-semibold leading-[1.5] tracking-[-0.02em] text-[#756b60]">
                                Refined materials, layered textures, and a sense of
                                quiet opulence.
                              </p>
                            </div>

                            <a href="#" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition group-hover:translate-x-0.5 group-hover:border-[#ad8356]">
                              <i data-lucide="arrow-right" className="h-4 w-4"></i>
                            </a>
                          </div>
                        </article>


                        <article className="premium-panel group overflow-hidden rounded-[1.25rem] bg-[#eee5da] shadow-[0_28px_76px_rgba(49,37,28,0.15),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-150">
                          <div className="relative h-[250px] overflow-hidden border-b border-[#d8c9b8]">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="Soft Minimal interior direction" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/10 via-transparent to-transparent"></div>
                          </div>

                          <div className="flex items-end justify-between gap-5 p-5">
                            <div>
                              <h3 className="font-display text-[1.78rem] font-normal leading-none tracking-[-0.045em] text-[#171411]">
                                Soft Minimal
                              </h3>

                              <p className="mt-3 max-w-[22rem] text-[0.86rem] font-semibold leading-[1.5] tracking-[-0.02em] text-[#756b60]">
                                Understated, serene, intentional. Beauty in
                                simplicity.
                              </p>
                            </div>

                            <a href="#" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition group-hover:translate-x-0.5 group-hover:border-[#ad8356]">
                              <i data-lucide="arrow-right" className="h-4 w-4"></i>
                            </a>
                          </div>
                        </article>
                      </div>


                      <div className="flex flex-col gap-5">

                        <article className="premium-panel group overflow-hidden rounded-[1.15rem] bg-[#eee5da] shadow-[0_24px_64px_rgba(49,37,28,0.13),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-300">
                          <div className="relative h-[145px] overflow-hidden border-b border-[#d8c9b8]">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="Japandi interior direction" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                          </div>

                          <div className="flex items-end justify-between gap-5 p-5">
                            <div>
                              <h3 className="font-display text-[1.45rem] font-normal leading-none tracking-[-0.045em] text-[#171411]">
                                Japandi
                              </h3>

                              <p className="mt-3 max-w-[18rem] text-[0.82rem] font-semibold leading-[1.5] tracking-[-0.02em] text-[#756b60]">
                                Japanese calm meets Scandinavian simplicity and
                                function.
                              </p>
                            </div>

                            <a href="#" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition group-hover:translate-x-0.5 group-hover:border-[#ad8356]">
                              <i data-lucide="arrow-right" className="h-4 w-4"></i>
                            </a>
                          </div>
                        </article>


                        <article className="premium-panel group overflow-hidden rounded-[1.15rem] bg-[#eee5da] shadow-[0_24px_64px_rgba(49,37,28,0.13),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-500">
                          <div className="relative h-[145px] overflow-hidden border-b border-[#d8c9b8]">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_320w.png" alt="Modern Organic interior direction" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                          </div>

                          <div className="flex items-end justify-between gap-5 p-5">
                            <div>
                              <h3 className="font-display text-[1.45rem] font-normal leading-none tracking-[-0.045em] text-[#171411]">
                                Modern Organic
                              </h3>

                              <p className="mt-3 max-w-[18rem] text-[0.82rem] font-semibold leading-[1.5] tracking-[-0.02em] text-[#756b60]">
                                Earthy materials, fluid forms, and spaces that feel
                                alive.
                              </p>
                            </div>

                            <a href="#" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition group-hover:translate-x-0.5 group-hover:border-[#ad8356]">
                              <i data-lucide="arrow-right" className="h-4 w-4"></i>
                            </a>
                          </div>
                        </article>


                        <article className="premium-panel group overflow-hidden rounded-[1.15rem] bg-[#eee5da] shadow-[0_24px_64px_rgba(49,37,28,0.13),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-700">
                          <div className="relative h-[145px] overflow-hidden border-b border-[#d8c9b8]">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa4a07b-8f7b-407d-83bb-124126fea659_320w.png" alt="Warm Contemporary interior direction" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                          </div>

                          <div className="flex items-end justify-between gap-5 p-5">
                            <div>
                              <h3 className="font-display text-[1.45rem] font-normal leading-none tracking-[-0.045em] text-[#171411]">
                                Warm Contemporary
                              </h3>

                              <p className="mt-3 max-w-[18rem] text-[0.82rem] font-semibold leading-[1.5] tracking-[-0.02em] text-[#756b60]">
                                Modern lines, warmth, and texture designed for real
                                life.
                              </p>
                            </div>

                            <a href="#" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition group-hover:translate-x-0.5 group-hover:border-[#ad8356]">
                              <i data-lucide="arrow-right" className="h-4 w-4"></i>
                            </a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="pb-16 pt-10 lg:pb-24 lg:pt-14">
              <div className="mx-auto max-w-[1510px] px-6 sm:px-8 lg:px-12 xl:px-14">

                <div className="max-w-[760px] reveal-on-scroll delay-300">

                  <div className="mb-5 flex flex-col items-start gap-3 text-[0.95rem] font-bold tracking-[-0.02em] text-[#9a744d] reveal-on-scroll">
                    <span>How It Works</span>
                    <span className="h-px w-12 bg-[#9f7851]"></span>
                  </div>


                  <h2 className="font-display max-w-[760px] text-[3.75rem] font-normal leading-[0.98] tracking-[-0.055em] text-[#151310] sm:text-[4.75rem] md:text-[5.25rem] lg:text-[4.85rem] xl:text-[5.45rem] reveal-on-scroll delay-150">
                    From room photo
                    <br />
                    to refined concept.
                  </h2>


                  <p className="mt-7 max-w-[39rem] text-[1rem] font-medium leading-[1.75] tracking-[-0.025em] text-[#3a332d] sm:text-[1.06rem]">
                    Atelier AI transforms your space in four simple steps—turning
                    inspiration into polished, personalized designs.
                  </p>
                </div>


                <div className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-10 reveal-on-scroll delay-500">

                  <div className="relative reveal-on-scroll">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b8956d] bg-[#f7efe6] text-[0.78rem] font-extrabold text-[#9a744d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        1
                      </span>

                      <div>
                        <h3 className="text-[0.95rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                          Upload Your Room
                        </h3>

                        <p className="mt-3 max-w-[15.5rem] text-[0.82rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Upload a photo of your space. Good lighting helps our AI
                          capture every detail.
                        </p>
                      </div>
                    </div>

                    <svg className="absolute left-[calc(100%-5rem)] top-[0px] hidden h-8 w-[7rem] text-[#b8956d]/70 lg:block" viewBox="0 0 180 32" fill="none" aria-hidden="true">
                      <path d="M2 16C52 16 104 16 160 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 5"></path>
                      <path d="M153 9L162 16L153 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>


                  <div className="relative reveal-on-scroll delay-150">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b8956d] bg-[#f7efe6] text-[0.78rem] font-extrabold text-[#9a744d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        2
                      </span>

                      <div>
                        <h3 className="text-[0.95rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                          Choose a Style Direction
                        </h3>

                        <p className="mt-3 max-w-[15.5rem] text-[0.82rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Explore curated styles and materials to shape the mood and
                          vision of your space.
                        </p>
                      </div>
                    </div>

                    <svg className="absolute left-[calc(100%-5rem)] top-[0px] hidden h-8 w-[7rem] text-[#b8956d]/70 lg:block" viewBox="0 0 180 32" fill="none" aria-hidden="true">
                      <path d="M2 16C52 16 104 16 160 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 5"></path>
                      <path d="M153 9L162 16L153 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>


                  <div className="relative reveal-on-scroll delay-300">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b8956d] bg-[#f7efe6] text-[0.78rem] font-extrabold text-[#9a744d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        3
                      </span>

                      <div>
                        <h3 className="text-[0.95rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                          Generate Concepts
                        </h3>

                        <p className="mt-3 max-w-[15.5rem] text-[0.82rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Our AI generates multiple high-quality concepts tailored to
                          your room and style.
                        </p>
                      </div>
                    </div>

                    <svg className="absolute left-[calc(100%-5rem)] top-[0px] hidden h-8 w-[7rem] text-[#b8956d]/70 lg:block" viewBox="0 0 180 32" fill="none" aria-hidden="true">
                      <path d="M2 16C52 16 104 16 160 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 5"></path>
                      <path d="M153 9L162 16L153 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>


                  <div>
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b8956d] bg-[#f7efe6] text-[0.78rem] font-extrabold text-[#9a744d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        4
                      </span>

                      <div>
                        <h3 className="text-[0.95rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                          Refine and Export
                        </h3>

                        <p className="mt-3 max-w-[15.5rem] text-[0.82rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Customize details, finalize your favorite, and export in
                          high resolution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="mt-8 grid gap-6 lg:grid-cols-4">

                  <article className="premium-panel flex h-[450px] flex-col overflow-hidden rounded-[1.25rem] bg-[#eee5da] shadow-[0_28px_76px_rgba(49,37,28,0.14),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll">
                    <div className="p-5">
                      <h3 className="text-[0.88rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                        Upload Your Room
                      </h3>

                      <div className="mt-5 rounded-[0.95rem] border border-dashed border-[#d5c4b2] bg-[#f7f1e9] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <span className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650]">
                          <i data-lucide="cloud-upload" className="h-4.5 w-4.5"></i>
                        </span>

                        <p className="mt-3 text-[0.72rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                          Drag and drop or click to upload
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-auto h-[230px] overflow-hidden border-t border-[#d8c9b8]">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7c127b-e2ce-4fbc-af38-233509c064a3_800w.png" alt="Uploaded empty room" className="h-full w-full object-cover object-center" />

                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-[0.7rem] border border-[#d8c9b8] bg-[#eee5da] px-3 py-2 text-[0.72rem] font-extrabold tracking-[-0.02em] text-[#2b241d] shadow-[0_10px_22px_rgba(42,31,22,0.16),inset_0_1px_0_rgba(255,255,255,0.68)]">
                        <i data-lucide="check-circle-2" className="h-4 w-4 text-[#9d7650]"></i>
                        IMG_9421.jpg
                        <i data-lucide="chevron-down" className="h-3.5 w-3.5 text-[#9d7650]"></i>
                      </div>
                    </div>
                  </article>


                  <article className="premium-panel flex h-[450px] flex-col overflow-hidden rounded-[1.25rem] bg-[#eee5da] p-5 shadow-[0_28px_76px_rgba(49,37,28,0.14),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-150">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-[0.88rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                        Explore Styles
                      </h3>

                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <i data-lucide="sparkles" className="h-3.5 w-3.5 text-[#9d7650]"></i>
                      </span>
                    </div>

                    <div className="space-y-3 flex-1">

                      <button className="group flex w-full items-center gap-3 rounded-[11px] border border-[#ad8356] bg-[#f3eadf] p-2 text-left shadow-[0_12px_25px_rgba(115,82,50,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_320w.png" alt="" className="h-[56px] w-[68px] rounded-[8px] object-cover shadow-[0_6px_14px_rgba(46,35,27,0.14)]" />

                        <span className="min-w-0 flex-1 text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                          Editorial Luxe
                        </span>

                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#a77f53] bg-[#efe1d1] text-[#8d653e]">
                          <i data-lucide="check" className="h-3 w-3"></i>
                        </span>
                      </button>


                      <button className="group relative flex w-full items-center gap-3 overflow-hidden rounded-[11px] border border-[#e2d5c8] bg-[#f7f1e9] p-2 text-left shadow-[0_8px_18px_rgba(70,54,42,0.055),inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <span className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[#b38a5f]/0 transition group-hover:bg-[#b38a5f]/70"></span>
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="" className="h-[56px] w-[68px] rounded-[8px] object-cover opacity-78 saturate-[0.72]" />
                        <span className="text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#302922]">
                          Japandi
                        </span>
                      </button>


                      <button className="group relative flex w-full items-center gap-3 overflow-hidden rounded-[11px] border border-[#e2d5c8] bg-[#f7f1e9] p-2 text-left shadow-[0_8px_18px_rgba(70,54,42,0.045),inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <span className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[#b38a5f]/0 transition group-hover:bg-[#b38a5f]/70"></span>
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa4a07b-8f7b-407d-83bb-124126fea659_320w.png" alt="" className="h-[56px] w-[68px] rounded-[8px] object-cover opacity-68 saturate-[0.68]" />
                        <span className="text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#4b4036]">
                          Modern Organic
                        </span>
                      </button>


                      <button className="group relative flex w-full items-center gap-3 overflow-hidden rounded-[11px] border border-[#e2d5c8] bg-[#f7f1e9] p-2 text-left shadow-[0_8px_18px_rgba(70,54,42,0.035),inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <span className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-[#b38a5f]/0 transition group-hover:bg-[#b38a5f]/70"></span>
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="" className="h-[56px] w-[68px] rounded-[8px] object-cover opacity-58 saturate-[0.62]" />
                        <span className="text-[0.76rem] font-extrabold tracking-[-0.025em] text-[#5a4d41]">
                          Soft Minimal
                        </span>
                      </button>
                    </div>

                    <a href="#" className="mt-5 flex items-center justify-between rounded-[9px] px-1.5 py-1 text-[0.74rem] font-bold tracking-[-0.02em] text-[#75695e] transition hover:bg-[#f7f1e9] hover:text-[#1c1814]">
                      View all styles
                      <i data-lucide="chevron-right" className="h-4 w-4"></i>
                    </a>
                  </article>


                  <article className="premium-panel flex h-[450px] flex-col overflow-hidden rounded-[1.25rem] bg-[#eee5da] shadow-[0_28px_76px_rgba(49,37,28,0.14),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-300">
                    <div className="relative min-h-0 flex-1 overflow-hidden border-b border-[#d8c9b8] bg-[#d7cabc]">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="Generated room concept" className="h-full w-full object-cover object-center" />

                      <span className="absolute left-3 top-3 rounded-[0.7rem] border border-[#d8c9b8] bg-[#eee5da] px-3 py-2 text-[0.72rem] font-extrabold tracking-[-0.02em] text-[#2b241d] shadow-[0_10px_22px_rgba(42,31,22,0.16),inset_0_1px_0_rgba(255,255,255,0.68)]">
                        Concept 01
                      </span>

                      <button className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[0_10px_22px_rgba(42,31,22,0.16),inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <i data-lucide="chevron-left" className="h-4 w-4"></i>
                      </button>

                      <button className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[0_10px_22px_rgba(42,31,22,0.16),inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <i data-lucide="chevron-right" className="h-4 w-4"></i>
                      </button>

                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                        <span className="h-2 w-2 rounded-full bg-white/55"></span>
                        <span className="h-2 w-2 rounded-full bg-white/55"></span>
                        <span className="h-2 w-2 rounded-full bg-white/55"></span>
                        <span className="h-2 w-2 rounded-full bg-white/55"></span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2.5 px-4 pb-4">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_320w.png" alt="" className="h-[66px] w-full rounded-[0.65rem] border border-[#ad8356] object-cover shadow-[0_8px_18px_rgba(70,54,42,0.08)]" />
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa4a07b-8f7b-407d-83bb-124126fea659_320w.png" alt="" className="h-[66px] w-full rounded-[0.65rem] border border-[#e2d5c8] object-cover shadow-[0_8px_18px_rgba(70,54,42,0.05)]" />
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="" className="h-[66px] w-full rounded-[0.65rem] border border-[#e2d5c8] object-cover shadow-[0_8px_18px_rgba(70,54,42,0.05)]" />
                    </div>
                  </article>


                  <article className="premium-panel flex h-[450px] flex-col overflow-hidden rounded-[1.25rem] bg-[#eee5da] shadow-[0_28px_76px_rgba(49,37,28,0.14),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-500">
                    <div className="flex items-center justify-between border-b border-[#d8c9b8] px-5 py-4">
                      <button className="inline-flex items-center gap-2 rounded-[0.7rem] border border-[#e2d5c8] bg-[#f7f1e9] px-3 py-2 text-[0.72rem] font-extrabold tracking-[-0.02em] text-[#302922] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        Final Concept
                        <i data-lucide="chevron-down" className="h-3.5 w-3.5 text-[#9d7650]"></i>
                      </button>

                      <button className="inline-flex items-center gap-2 rounded-[0.7rem] border border-[#ad8356] bg-[#f7efe6] px-3 py-2 text-[0.72rem] font-extrabold tracking-[-0.02em] text-[#9a744d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <i data-lucide="upload" className="h-3.5 w-3.5"></i>
                        Share
                      </button>
                    </div>

                    <div className="relative min-h-0 flex-1 overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="Final exported concept" className="h-full w-full object-cover object-center" />

                      <div className="premium-panel absolute bottom-5 right-5 w-[180px] rounded-[1rem] bg-[#eee5da] p-4 shadow-[0_24px_64px_rgba(49,37,28,0.20),inset_0_1px_0_rgba(255,255,255,0.68)]">
                        <p className="text-[0.76rem] font-extrabold tracking-[-0.02em] text-[#1c1814]">
                          Export Options
                        </p>

                        <div className="mt-4 space-y-2.5">
                          <button className="flex w-full items-center justify-between rounded-[0.65rem] border border-[#e2d5c8] bg-[#f7f1e9] px-3 py-2 text-[0.68rem] font-bold text-[#756b60]">
                            High Resolution
                            <i data-lucide="chevron-down" className="h-3.5 w-3.5"></i>
                          </button>

                          <button className="flex w-full items-center justify-between rounded-[0.65rem] border border-[#e2d5c8] bg-[#f7f1e9] px-3 py-2 text-[0.68rem] font-bold text-[#756b60]">
                            PDF Presentation
                            <i data-lucide="chevron-down" className="h-3.5 w-3.5"></i>
                          </button>

                          <button className="mt-1 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[0.75rem] bg-[#171614] text-[0.72rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_18px_42px_rgba(25,21,18,0.18)]">
                            <i data-lucide="download" className="h-3.5 w-3.5"></i>
                            Export Image
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3 border-t border-[#d8c9b8] bg-[#eee5da] px-6 py-4">
                      <button className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650]">
                        <i data-lucide="heart" className="h-4 w-4"></i>
                      </button>
                      <button className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650]">
                        <i data-lucide="folder" className="h-4 w-4"></i>
                      </button>
                      <button className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650]">
                        <i data-lucide="bookmark" className="h-4 w-4"></i>
                      </button>
                      <button className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650]">
                        <i data-lucide="ellipsis" className="h-4 w-4"></i>
                      </button>
                    </div>
                  </article>
                </div>


                <div className="mx-auto mt-12 max-w-[920px] rounded-[1rem] border border-[#d8c9b8] bg-[#eee5da] px-6 py-4 shadow-[0_18px_46px_rgba(49,37,28,0.10),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-700">
                  <div className="flex flex-col items-start gap-3 text-[0.9rem] font-semibold tracking-[-0.02em] text-[#756b60] sm:flex-row sm:items-center sm:justify-center sm:gap-6">
                    <div className="flex items-center gap-3 text-[#1c1814]">
                      <i data-lucide="shield-check" className="h-6 w-6 text-[#9d7650]"></i>
                      <span className="font-extrabold">Your privacy, our priority</span>
                    </div>

                    <span className="hidden h-6 w-px bg-[#d8cdc1] sm:block"></span>

                    <span>
                      Your images are secure and never shared. We use them only to
                      generate your designs.
                    </span>
                  </div>
                </div>
              </div>
            </section>


            <section className="pb-16 pt-10 lg:pb-24 lg:pt-14">
              <div className="mx-auto max-w-[1510px] px-6 sm:px-8 lg:px-12 xl:px-14">
                <div className="grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr] xl:gap-18">

                  <div className="py-6 lg:py-12 reveal-on-scroll delay-300">

                    <div className="mb-5 flex flex-col items-start gap-3 text-[0.95rem] font-bold tracking-[-0.02em] text-[#9a744d] reveal-on-scroll">
                      <span>AI Intelligence</span>
                      <span className="h-px w-12 bg-[#9f7851]"></span>
                    </div>


                    <h2 className="font-display max-w-[720px] text-[3.75rem] font-normal leading-[0.98] tracking-[-0.055em] text-[#151310] sm:text-[4.75rem] md:text-[5.25rem] lg:text-[4.65rem] xl:text-[5.2rem] 2xl:text-[5.45rem] reveal-on-scroll delay-150">
                      <span className="whitespace-nowrap">Intelligence</span>
                      <br />
                      <span className="whitespace-nowrap">behind every</span>
                      <br />
                      <span className="whitespace-nowrap">design concept.</span>
                    </h2>


                    <p className="mt-8 max-w-[35rem] text-[1rem] font-medium leading-[1.75] tracking-[-0.025em] text-[#3a332d] sm:text-[1.06rem]">
                      Atelier AI reads your room, interprets your style intent,
                      curates materials, and proposes spatial improvements —
                      instantly.
                    </p>


                    <div className="mt-9 space-y-5 reveal-on-scroll delay-500">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <i data-lucide="scan-search" className="h-4 w-4"></i>
                        </span>
                        <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                          Understands your space
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <i data-lucide="palette" className="h-4 w-4"></i>
                        </span>
                        <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                          Matches your style
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <i data-lucide="clipboard-check" className="h-4 w-4"></i>
                        </span>
                        <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                          Curates with intention
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                          <i data-lucide="sparkles" className="h-4 w-4"></i>
                        </span>
                        <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                          Optimizes every detail
                        </span>
                      </div>
                    </div>
                  </div>


                  <div className="relative">
                    <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_315px]">

                      <div className="premium-panel relative h-[700px] overflow-hidden rounded-l-[1.35rem] rounded-r-none bg-[#d7cabc] shadow-[0_34px_90px_rgba(71,56,42,0.18)] reveal-on-scroll">

                        <div className="ai-slider relative h-full w-full overflow-hidden" data-slider="">

                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="AI generated interior concept" className="absolute inset-0 h-full w-full object-cover object-center" />


                          <div className="ai-slider-before absolute inset-0 overflow-hidden" data-before="" style={{"clipPath": "inset(0 50% 0 0)"}}>
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7c127b-e2ce-4fbc-af38-233509c064a3_800w.png" alt="Original room before AI concept" className="absolute inset-0 h-full w-full object-cover object-center" />
                          </div>


                          <div className="ai-slider-line absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-white/80 shadow-[0_0_18px_rgba(0,0,0,0.22)]" data-line=""></div>


                          <button type="button" className="ai-slider-handle absolute left-1/2 top-1/2 z-30 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#f7efe6] text-[#9d7650] shadow-[0_18px_48px_rgba(35,27,20,0.24),inset_0_1px_0_rgba(255,255,255,0.72)]" data-handle="" aria-label="Drag to compare before and AI concept">
                            <i data-lucide="chevrons-left-right" className="h-5 w-5"></i>
                          </button>


                          <div className="absolute left-5 top-5 z-30 rounded-[0.7rem] border border-white/30 bg-[#171614]/55 px-4 py-2 text-[0.78rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                            Before
                          </div>


                          <div className="absolute right-5 top-5 z-30 rounded-[0.7rem] border border-[#d8c9b8] bg-[#eee5da] px-4 py-2 text-[0.78rem] font-extrabold tracking-[-0.02em] text-[#1c1814] shadow-[0_12px_28px_rgba(49,37,28,0.16),inset_0_1px_0_rgba(255,255,255,0.68)]">
                            AI Concept
                          </div>


                          <div className="absolute inset-x-6 bottom-5 z-30 flex items-center justify-between rounded-[0.95rem] border border-[#d8c9b8] bg-[#eee5da] px-5 py-4 text-[0.78rem] font-extrabold tracking-[-0.02em] text-[#2b241d] shadow-[0_18px_42px_rgba(42,31,22,0.18),inset_0_1px_0_rgba(255,255,255,0.68)]">
                            <span className="inline-flex items-center gap-2 whitespace-nowrap">
                              Warm Minimal
                            </span>

                            <span className="hidden sm:inline-flex items-center gap-2 text-[#5f554c]">
                              Improved flow
                              <span className="h-1 w-1 rounded-full bg-[#b89a78]"></span>
                              Natural light
                              <span className="h-1 w-1 rounded-full bg-[#b89a78]"></span>
                              Textural balance
                            </span>
                          </div>
                        </div>
                      </div>


                      <aside className="relative z-30 flex h-[700px] flex-col rounded-r-[1.35rem] bg-[#171614] px-5 pb-5 pt-5 text-white shadow-[0_34px_90px_rgba(20,16,12,0.30)] reveal-on-scroll delay-150">

                        <div className="mb-5 flex items-center justify-between">
                          <h3 className="text-[1rem] font-extrabold tracking-[-0.025em] text-white">
                            Atelier AI Analysis
                          </h3>

                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[#caa57c]">
                            <i data-lucide="sparkles" className="h-4 w-4"></i>
                          </span>
                        </div>


                        <div className="space-y-3">

                          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center gap-3">
                              <i data-lucide="scan-line" className="h-6 w-6 shrink-0 text-[#caa57c]"></i>

                              <div className="min-w-0 flex-1">
                                <p className="text-[0.82rem] font-extrabold tracking-[-0.02em] text-white">
                                  Room Scan
                                </p>
                                <p className="mt-1 text-[0.7rem] font-semibold text-white/62">
                                  21.4 m² · Natural Light: Good
                                </p>
                              </div>

                              <i data-lucide="check-circle-2" className="h-5 w-5 shrink-0 text-[#caa57c]"></i>
                            </div>
                          </div>


                          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center gap-3">
                              <i data-lucide="blend" className="h-6 w-6 shrink-0 text-[#caa57c]"></i>

                              <div className="min-w-0 flex-1">
                                <p className="text-[0.82rem] font-extrabold tracking-[-0.02em] text-white">
                                  Style Match
                                </p>
                                <p className="mt-1 text-[0.7rem] font-semibold text-white/62">
                                  Warm Minimal · 92% Match
                                </p>
                              </div>

                              <i data-lucide="check-circle-2" className="h-5 w-5 shrink-0 text-[#caa57c]"></i>
                            </div>
                          </div>


                          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center gap-3">
                              <i data-lucide="sparkles" className="h-6 w-6 shrink-0 text-[#caa57c]"></i>

                              <div className="min-w-0 flex-1">
                                <p className="text-[0.82rem] font-extrabold tracking-[-0.02em] text-white">
                                  Materials Palette
                                </p>

                                <div className="mt-2 flex items-center gap-1.5">
                                  <span className="h-6 w-6 rounded-full border border-white/30 bg-[#ddd7cd]"></span>
                                  <span className="h-6 w-6 rounded-full border border-white/30 bg-[#a8784d]"></span>
                                  <span className="h-6 w-6 rounded-full border border-white/30 bg-[#252729]"></span>
                                  <span className="h-6 w-6 rounded-full border border-white/30 bg-[#d2cabd]"></span>
                                  <span className="h-6 w-6 rounded-full border border-white/30 bg-[#8b8379]"></span>
                                </div>
                              </div>

                              <i data-lucide="check-circle-2" className="h-5 w-5 shrink-0 text-[#caa57c]"></i>
                            </div>
                          </div>


                          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center gap-3">
                              <i data-lucide="lightbulb" className="h-6 w-6 shrink-0 text-[#caa57c]"></i>

                              <div className="min-w-0 flex-1">
                                <p className="text-[0.82rem] font-extrabold tracking-[-0.02em] text-white">
                                  Lighting Analysis
                                </p>
                                <p className="mt-1 text-[0.7rem] font-semibold text-white/62">
                                  Recommend: Layered Warm
                                </p>
                              </div>

                              <i data-lucide="check-circle-2" className="h-5 w-5 shrink-0 text-[#caa57c]"></i>
                            </div>
                          </div>


                          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center gap-3">
                              <i data-lucide="sofa" className="h-6 w-6 shrink-0 text-[#caa57c]"></i>

                              <div className="min-w-0 flex-1">
                                <p className="text-[0.82rem] font-extrabold tracking-[-0.02em] text-white">
                                  Furniture Zoning
                                </p>
                                <p className="mt-1 text-[0.7rem] font-semibold text-white/62">
                                  Flow Score: 94 / 100
                                </p>
                              </div>

                              <i data-lucide="check-circle-2" className="h-5 w-5 shrink-0 text-[#caa57c]"></i>
                            </div>
                          </div>


                          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center gap-3">
                              <i data-lucide="wallet-cards" className="h-6 w-6 shrink-0 text-[#caa57c]"></i>

                              <div className="min-w-0 flex-1">
                                <p className="text-[0.82rem] font-extrabold tracking-[-0.02em] text-white">
                                  Budget Range
                                </p>
                                <p className="mt-1 text-[0.7rem] font-semibold text-white/62">
                                  Estimated: $8,200 - $11,400
                                </p>
                              </div>

                              <i data-lucide="check-circle-2" className="h-5 w-5 shrink-0 text-[#caa57c]"></i>
                            </div>
                          </div>
                        </div>


                        <div className="mt-auto pt-5">
                          <a href="#" className="inline-flex w-full items-center justify-center gap-3 rounded-[0.95rem] bg-[#f7efe6] px-5 py-4 text-[0.86rem] font-extrabold tracking-[-0.02em] text-[#171411] shadow-[0_18px_42px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:bg-white">
                            View Full Report
                            <i data-lucide="arrow-right" className="h-4 w-4"></i>
                          </a>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>


                <div className="premium-panel mt-10 rounded-[1.15rem] bg-[#eee5da] px-8 py-6 shadow-[0_24px_64px_rgba(49,37,28,0.12),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-700">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">

                    <div className="flex items-center gap-4">
                      <i data-lucide="database" className="h-9 w-9 shrink-0 text-[#9d7650]"></i>
                      <p className="text-[0.92rem] font-semibold leading-[1.35] tracking-[-0.02em] text-[#3a332d]">
                        Trained on millions
                        <br className="hidden xl:block" />
                        of real interiors
                      </p>
                    </div>

                    <div className="hidden h-12 w-px bg-[#d8cdc1] lg:block"></div>


                    <div className="flex items-center gap-4">
                      <i data-lucide="sparkles" className="h-9 w-9 shrink-0 text-[#9d7650]"></i>
                      <p className="text-[0.92rem] font-semibold leading-[1.35] tracking-[-0.02em] text-[#3a332d]">
                        Design logic meets
                        <br className="hidden xl:block" />
                        artificial intelligence
                      </p>
                    </div>

                    <div className="hidden h-12 w-px bg-[#d8cdc1] lg:block"></div>


                    <div className="flex items-center gap-4">
                      <i data-lucide="refresh-cw" className="h-9 w-9 shrink-0 text-[#9d7650]"></i>
                      <p className="text-[0.92rem] font-semibold leading-[1.35] tracking-[-0.02em] text-[#3a332d]">
                        Continuously learning
                        <br className="hidden xl:block" />
                        and improving
                      </p>
                    </div>

                    <div className="hidden h-12 w-px bg-[#d8cdc1] lg:block"></div>


                    <div className="flex items-center gap-4">
                      <i data-lucide="user-round" className="h-9 w-9 shrink-0 text-[#9d7650]"></i>
                      <p className="text-[0.92rem] font-semibold leading-[1.35] tracking-[-0.02em] text-[#3a332d]">
                        Your vision,
                        <br className="hidden xl:block" />
                        intelligently realized
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="pb-16 pt-10 lg:pb-24 lg:pt-14">
              <div className="mx-auto max-w-[1510px] px-6 sm:px-8 lg:px-12 xl:px-14">
                <div className="grid items-start gap-12 lg:grid-cols-[0.52fr_1.48fr] xl:gap-16">

                  <div className="py-6 lg:py-12 reveal-on-scroll delay-300">

                    <div className="mb-5 flex flex-col items-start gap-3 text-[0.95rem] font-bold tracking-[-0.02em] text-[#9a744d] reveal-on-scroll">
                      <span>Pricing</span>
                      <span className="h-px w-12 bg-[#9f7851]"></span>
                    </div>


                    <h2 className="font-display max-w-[520px] text-[3.35rem] font-normal leading-[0.98] tracking-[-0.055em] text-[#151310] sm:text-[4.2rem] md:text-[4.65rem] lg:text-[3.85rem] xl:text-[4.35rem] 2xl:text-[4.65rem] reveal-on-scroll delay-150">
                      <span className="whitespace-nowrap">Choose the plan</span>
                      <br />
                      <span className="whitespace-nowrap">that fits your</span>
                      <br />
                      <span className="whitespace-nowrap">next project.</span>
                    </h2>


                    <p className="mt-8 max-w-[29rem] text-[1rem] font-medium leading-[1.75] tracking-[-0.025em] text-[#3a332d] sm:text-[1.06rem]">
                      From personal makeovers to full-scale projects, pick the plan
                      that gives you the right tools, credits, and support.
                    </p>
                  </div>


                  <div className="relative reveal-on-scroll delay-500">

                    <div className="mb-14 flex flex-col items-center justify-center gap-3 reveal-on-scroll delay-150">
                      <div className="premium-panel inline-flex rounded-[0.95rem] bg-[#eee5da] p-1.5 shadow-[0_18px_46px_rgba(49,37,28,0.11),inset_0_1px_0_rgba(255,255,255,0.68)]">
                        <button className="inline-flex h-11 items-center justify-center rounded-[0.75rem] px-8 text-[0.9rem] font-extrabold tracking-[-0.02em] text-[#6f6257] transition hover:text-[#171411]">
                          Monthly
                        </button>

                        <button className="inline-flex h-11 items-center justify-center rounded-[0.75rem] bg-[#171614] px-8 text-[0.9rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_14px_30px_rgba(25,21,18,0.18)]">
                          Annual
                        </button>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c9b8] bg-[#f3eadf] px-4 py-2 text-[0.76rem] font-extrabold tracking-[-0.02em] text-[#9a744d] shadow-[0_12px_28px_rgba(70,54,42,0.08),inset_0_1px_0_rgba(255,255,255,0.72)]">
                        <i data-lucide="sparkles" className="h-3.5 w-3.5"></i>
                        Save up to 20%
                      </div>
                    </div>


                    <div className="grid items-stretch gap-5 lg:grid-cols-3 xl:gap-6">

                      <article className="premium-panel flex min-h-[720px] flex-col rounded-[1.35rem] bg-[#eee5da] p-7 shadow-[0_28px_76px_rgba(49,37,28,0.13),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll">
                        <h3 className="font-display text-[2.15rem] font-normal leading-none tracking-[-0.055em] text-[#171411]">
                          Home
                        </h3>


                        <div className="mt-7 overflow-hidden rounded-[1rem] border border-[#d8c9b8] bg-[#d7cabc] shadow-[0_16px_36px_rgba(49,37,28,0.12)]">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0141fd7-e67a-4967-b6eb-a5ad3dd479e8_320w.png" alt="Home plan interior preview" className="h-[128px] w-full object-cover object-center" />

                          <div className="flex items-center justify-center gap-2 bg-[#eee5da] px-3 py-3">
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/45 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/45 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                          </div>
                        </div>

                        <p className="mt-6 min-h-[3.5rem] text-[0.88rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Perfect for personal projects and single-room
                          transformations.
                        </p>

                        <div className="mt-5">
                          <div className="flex items-end gap-1.5">
                            <span className="font-display text-[2.65rem] font-normal leading-none tracking-[-0.055em] text-[#171411]">
                              $19
                            </span>
                            <span className="mb-1 text-[0.88rem] font-extrabold tracking-[-0.02em] text-[#171411]">
                              /mo
                            </span>
                          </div>

                          <p className="mt-2 text-[0.78rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                            Billed annually
                            <span className="ml-1 text-[#9b8f82] line-through">$228</span>
                            <span className="ml-1 font-extrabold text-[#9a744d]">
                              $156
                            </span>
                          </p>
                        </div>

                        <div className="my-6 h-px w-full bg-[#d8cdc1]"></div>

                        <ul className="space-y-3.5">
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            20 AI renders / month
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            10 style explorations / month
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            High-resolution exports
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Custom material palette
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Standard support
                          </li>
                        </ul>

                        <a href="#" className="mt-auto inline-flex w-full items-center justify-center rounded-[0.8rem] border border-[#bfa994] bg-[#f7efe6] px-5 py-4 text-[0.88rem] font-extrabold tracking-[-0.02em] text-[#171411] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:border-[#9d7650] hover:bg-white">
                          Start with Home
                        </a>
                      </article>


                      <article className="premium-panel relative flex min-h-[720px] -translate-y-5 flex-col rounded-[1.35rem] border-[#ad8356] bg-[#eee5da] p-7 shadow-[0_40px_100px_rgba(93,63,35,0.20),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-150">

                        <div className="absolute left-1/2 top-0 min-w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ad8356] bg-[#a77f53] px-7 py-2 text-center text-[0.75rem] font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_16px_36px_rgba(93,63,35,0.20)] whitespace-nowrap">
                          Most Popular
                        </div>

                        <h3 className="font-display text-[2.15rem] font-normal leading-none tracking-[-0.055em] text-[#171411]">
                          Studio
                        </h3>


                        <div className="mt-7 overflow-hidden rounded-[1rem] border border-[#d8c9b8] bg-[#d7cabc] shadow-[0_16px_36px_rgba(49,37,28,0.12)]">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_320w.png" alt="Studio plan interior preview" className="h-[128px] w-full object-cover object-center" />

                          <div className="flex items-center justify-center gap-2 bg-[#eee5da] px-3 py-3">
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/45 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/45 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                          </div>
                        </div>

                        <p className="mt-6 min-h-[3.5rem] text-[0.88rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Ideal for designers and makers managing multiple client
                          spaces.
                        </p>

                        <div className="mt-5">
                          <div className="flex items-end gap-1.5">
                            <span className="font-display text-[2.65rem] font-normal leading-none tracking-[-0.055em] text-[#171411]">
                              $49
                            </span>
                            <span className="mb-1 text-[0.88rem] font-extrabold tracking-[-0.02em] text-[#171411]">
                              /mo
                            </span>
                          </div>

                          <p className="mt-2 text-[0.78rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                            Billed annually
                            <span className="ml-1 text-[#9b8f82] line-through">$588</span>
                            <span className="ml-1 font-extrabold text-[#9a744d]">
                              $468
                            </span>
                          </p>
                        </div>

                        <div className="my-6 h-px w-full bg-[#d8cdc1]"></div>

                        <ul className="space-y-3.5">
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            60 AI renders / month
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Unlimited style explorations
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            High-resolution exports
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Custom material palette
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Project folders &amp; organization
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Priority support
                          </li>
                        </ul>

                        <a href="#" className="mt-auto inline-flex w-full items-center justify-center rounded-[0.8rem] bg-[#171614] px-5 py-4 text-[0.88rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_18px_42px_rgba(25,21,18,0.18)] transition hover:bg-[#29231f]">
                          Start with Studio
                        </a>
                      </article>


                      <article className="premium-panel flex min-h-[720px] flex-col rounded-[1.35rem] bg-[#eee5da] p-7 shadow-[0_28px_76px_rgba(49,37,28,0.13),inset_0_1px_0_rgba(255,255,255,0.68)] reveal-on-scroll delay-300">
                        <h3 className="font-display text-[2.15rem] font-normal leading-none tracking-[-0.055em] text-[#171411]">
                          Pro
                        </h3>


                        <div className="mt-7 overflow-hidden rounded-[1rem] border border-[#d8c9b8] bg-[#d7cabc] shadow-[0_16px_36px_rgba(49,37,28,0.12)]">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa4a07b-8f7b-407d-83bb-124126fea659_320w.png" alt="Pro plan interior preview" className="h-[128px] w-full object-cover object-center" />

                          <div className="flex items-center justify-center gap-2 bg-[#eee5da] px-3 py-3">
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/60 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/45 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                            <span className="material-dot h-8 w-8 rounded-full border border-white/45 shadow-[0_4px_10px_rgba(46,35,27,0.10)]"></span>
                          </div>
                        </div>

                        <p className="mt-6 min-h-[3.5rem] text-[0.88rem] font-semibold leading-[1.55] tracking-[-0.02em] text-[#756b60]">
                          Built for professionals and teams delivering at scale.
                        </p>

                        <div className="mt-5">
                          <div className="flex items-end gap-1.5">
                            <span className="font-display text-[2.65rem] font-normal leading-none tracking-[-0.055em] text-[#171411]">
                              $99
                            </span>
                            <span className="mb-1 text-[0.88rem] font-extrabold tracking-[-0.02em] text-[#171411]">
                              /mo
                            </span>
                          </div>

                          <p className="mt-2 text-[0.78rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                            Billed annually
                            <span className="ml-1 text-[#9b8f82] line-through">
                              $1,188
                            </span>
                            <span className="ml-1 font-extrabold text-[#9a744d]">
                              $948
                            </span>
                          </p>
                        </div>

                        <div className="my-6 h-px w-full bg-[#d8cdc1]"></div>

                        <ul className="space-y-3.5 pb-6">
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            120 AI renders / month
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Unlimited style explorations
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            High-resolution exports
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Custom material palette
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Team members up to 5
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Advanced controls
                          </li>
                          <li className="flex items-center gap-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#3a332d]">
                            <i data-lucide="check-circle-2" className="h-4.5 w-4.5 shrink-0 text-[#9d7650]"></i>
                            Priority support
                          </li>
                        </ul>

                        <a href="#" className="mt-auto inline-flex w-full items-center justify-center rounded-[0.8rem] border border-[#bfa994] bg-[#f7efe6] px-5 py-4 text-[0.88rem] font-extrabold tracking-[-0.02em] text-[#171411] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:border-[#9d7650] hover:bg-white">
                          Start with Pro
                        </a>
                      </article>
                    </div>


                    <div className="premium-panel mt-8 rounded-[1.15rem] bg-[#eee5da] px-7 py-5 shadow-[0_24px_64px_rgba(49,37,28,0.11),inset_0_1px_0_rgba(255,255,255,0.68)]">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-5">
                          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6c5b2] bg-[#f7efe6] text-[#9d7650] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                            <i data-lucide="users-round" className="h-6 w-6"></i>
                          </span>

                          <div>
                            <p className="text-[0.95rem] font-extrabold tracking-[-0.025em] text-[#1c1814]">
                              Designing for clients or managing a team?
                            </p>
                            <p className="mt-1 text-[0.82rem] font-semibold leading-[1.5] tracking-[-0.02em] text-[#756b60]">
                              Our Pro plan includes tools built for collaboration and
                              scale.
                            </p>
                          </div>
                        </div>

                        <a href="#" className="inline-flex items-center justify-center gap-3 rounded-[0.85rem] border border-[#d6c5b2] bg-[#f7efe6] px-7 py-4 text-[0.88rem] font-extrabold tracking-[-0.02em] text-[#171411] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:border-[#9d7650] hover:bg-white">
                          Explore for Professionals
                          <i data-lucide="arrow-right" className="h-4 w-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="relative overflow-hidden pt-10 lg:pt-14 reveal-on-scroll delay-300 delay-500 delay-700">

              <div className="absolute inset-0 z-0">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/545b052a-b0c2-4ec1-aeac-c36a8f948a5d_3840w.png" alt="Warm editorial living room interior" className="h-full w-full object-cover object-center" />


                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,9,0.72)_0%,rgba(18,13,9,0.38)_42%,rgba(18,13,9,0.52)_100%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,238,215,0.14),transparent_38%)]"></div>
                <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#171411] via-[#171411]/62 to-transparent"></div>
              </div>

              <div className="relative z-10 mx-auto max-w-[1510px] px-6 pb-14 pt-20 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28 xl:px-14">

                <div className="mx-auto max-w-[720px] rounded-[1.45rem] border border-[#e2d5c8] bg-[#f3eee7]/95 px-7 py-8 shadow-[0_38px_110px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-[2px] sm:px-10 sm:py-10 lg:px-12 lg:py-12">

                  <h2 className="font-display mx-auto max-w-[620px] text-center text-[3.25rem] font-normal leading-[0.98] tracking-[-0.06em] text-[#151310] sm:text-[4.25rem] md:text-[4.85rem] lg:text-[5.15rem] reveal-on-scroll delay-150">
                    Design the next
                    <br />
                    version of your
                    <br />
                    room with clarity.
                  </h2>


                  <div className="mx-auto mt-7 h-px w-14 bg-[#9f7851]"></div>


                  <p className="mx-auto mt-7 max-w-[35rem] text-center text-[1rem] font-medium leading-[1.75] tracking-[-0.025em] text-[#3a332d] sm:text-[1.06rem]">
                    Upload your room and explore multiple styles, materials, and
                    layouts in minutes. Make confident design decisions before you
                    commit.
                  </p>


                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="#" className="inline-flex h-[62px] w-full items-center justify-center gap-4 rounded-[12px] bg-[#171614] px-8 text-[0.98rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_24px_54px_rgba(28,22,17,0.22)] transition hover:-translate-y-0.5 hover:bg-[#29231f] sm:w-auto sm:min-w-[245px]">
                      <i data-lucide="upload" className="h-5 w-5"></i>
                      Upload Your Room
                    </a>

                    <a href="#" className="inline-flex h-[62px] w-full items-center justify-center gap-4 rounded-[12px] border border-[#d1c4b7] bg-[#f7f1e9] px-8 text-[0.98rem] font-extrabold tracking-[-0.02em] text-[#1c1915] shadow-[0_12px_28px_rgba(88,72,58,0.07),inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:-translate-y-0.5 hover:border-[#c6b49f] hover:bg-white sm:w-auto sm:min-w-[220px]">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1d1a16]">
                        <i data-lucide="play" className="ml-0.5 h-4 w-4"></i>
                      </span>
                      Book a Demo
                    </a>
                  </div>


                  <div className="mt-9 rounded-[1rem] border border-[#ded1c4] bg-[#eee5da]/82 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="grid gap-5 sm:grid-cols-3 sm:divide-x sm:divide-[#d6c8ba]">
                      <div className="flex items-center justify-center gap-3 sm:px-4">
                        <i data-lucide="users-round" className="h-7 w-7 shrink-0 text-[#9d7650]"></i>
                        <div>
                          <p className="text-[0.78rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                            Loved by
                          </p>
                          <p className="mt-1 text-[0.9rem] font-extrabold tracking-[-0.02em] text-[#171411]">
                            50K+ homeowners
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3 sm:px-4">
                        <i data-lucide="shield-check" className="h-7 w-7 shrink-0 text-[#9d7650]"></i>
                        <div>
                          <p className="text-[0.78rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                            Trusted by
                          </p>
                          <p className="mt-1 text-[0.9rem] font-extrabold tracking-[-0.02em] text-[#171411]">
                            Design Pros
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3 sm:px-4">
                        <i data-lucide="badge-check" className="h-7 w-7 shrink-0 text-[#9d7650]"></i>
                        <div>
                          <p className="text-[0.78rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                            User Rating
                          </p>
                          <p className="mt-1 text-[0.9rem] font-extrabold tracking-[-0.02em] text-[#171411]">
                            4.9/5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="mx-auto mt-16 max-w-[1040px] rounded-[1.25rem] border border-[rgba(202,165,124,0.26)] bg-[rgba(23,20,17,0.82)] px-7 py-7 text-white shadow-[0_34px_90px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(202,165,124,0.08)] backdrop-blur-md sm:px-8">
                  <div className="grid gap-0 lg:grid-cols-4 lg:items-center">

                    <div className="px-2 text-left lg:pr-8">
                      <p className="font-display text-[1.35rem] font-normal leading-[1.18] tracking-[-0.045em] text-white/90">
                        “Atelier AI helps us show
                        <br className="hidden sm:block" />
                        clients what’s possible —
                        <br className="hidden sm:block" />
                        before we lift a hammer.”
                      </p>

                      <p className="mt-5 text-[0.84rem] font-bold tracking-[-0.02em] text-[#caa57c]">
                        — Interior Designer
                      </p>
                    </div>


                    <div className="flex flex-col items-center border-t border-[rgba(202,165,124,0.24)] px-6 pt-7 text-center lg:border-l lg:border-t-0 lg:pt-0">
                      <i data-lucide="user-round" className="h-8 w-8 shrink-0 text-[#caa57c]"></i>

                      <p className="mt-4 text-[0.95rem] font-extrabold tracking-[-0.02em] text-white">
                        For Homeowners
                      </p>

                      <p className="mt-2 max-w-[12rem] text-[0.82rem] font-semibold leading-[1.48] tracking-[-0.02em] text-white/66">
                        Design with confidence before you renovate.
                      </p>
                    </div>


                    <div className="flex flex-col items-center border-t border-[rgba(202,165,124,0.24)] px-6 pt-7 text-center lg:border-l lg:border-t-0 lg:pt-0">
                      <i data-lucide="briefcase-business" className="h-8 w-8 shrink-0 text-[#caa57c]"></i>

                      <p className="mt-4 text-[0.95rem] font-extrabold tracking-[-0.02em] text-white">
                        For Designers
                      </p>

                      <p className="mt-2 max-w-[12rem] text-[0.82rem] font-semibold leading-[1.48] tracking-[-0.02em] text-white/66">
                        Present ideas faster and beautifully.
                      </p>
                    </div>


                    <div className="flex flex-col items-center border-t border-[rgba(202,165,124,0.24)] px-6 pt-7 text-center lg:border-l lg:border-t-0 lg:pt-0">
                      <i data-lucide="building-2" className="h-8 w-8 shrink-0 text-[#caa57c]"></i>

                      <p className="mt-4 text-[0.95rem] font-extrabold tracking-[-0.02em] text-white">
                        For Real Estate Pros
                      </p>

                      <p className="mt-2 max-w-[13rem] text-[0.82rem] font-semibold leading-[1.48] tracking-[-0.02em] text-white/66">
                        Help buyers see the true potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <footer className="relative overflow-hidden border-t border-[#ded1c4] bg-[#f5f0e9] text-[#171411]">

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(255,255,255,0.72),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(221,211,198,0.36),transparent_34%)]"></div>
              </div>

              <div className="relative z-10 mx-auto max-w-[1510px] px-6 py-12 sm:px-8 lg:px-12 xl:px-14">

                <div className="grid gap-10 border-b border-[#d8cdc1] pb-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.95fr]">

                  <div>
                    <a href="#" className="font-logo text-[2rem] font-medium tracking-[0.20em] text-[#171411]">
                      ATELIER AI
                    </a>

                    <p className="mt-5 max-w-[24rem] text-[0.94rem] font-semibold leading-[1.65] tracking-[-0.02em] text-[#756b60]">
                      AI-assisted interior direction for homeowners, designers, and
                      real estate teams who want clearer design decisions.
                    </p>
                  </div>


                  <div>
                    <h3 className="text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-[#9a744d]">
                      Product
                    </h3>

                    <ul className="mt-5 space-y-3.5 text-[0.9rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          How It Works
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          Style Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          AI Intelligence
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>


                  <div>
                    <h3 className="text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-[#9a744d]">
                      For Teams
                    </h3>

                    <ul className="mt-5 space-y-3.5 text-[0.9rem] font-semibold tracking-[-0.02em] text-[#756b60]">
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          Interior Designers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          Real Estate Pros
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          Studios
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition hover:text-[#171411]">
                          Book a Demo
                        </a>
                      </li>
                    </ul>
                  </div>


                  <div>
                    <h3 className="text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-[#9a744d]">
                      Stay Updated
                    </h3>

                    <p className="mt-5 max-w-[22rem] text-[0.9rem] font-semibold leading-[1.6] tracking-[-0.02em] text-[#756b60]">
                      Get new style drops, product updates, and practical design
                      workflow ideas.
                    </p>

                    <form className="premium-panel mt-5 flex overflow-hidden rounded-[0.95rem] bg-[#eee5da] p-1.5 shadow-[0_18px_46px_rgba(49,37,28,0.10),inset_0_1px_0_rgba(255,255,255,0.68)]">
                      <input type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-3 text-[0.86rem] font-semibold text-[#171411] placeholder:text-[#9b8f82] focus:outline-none" />

                      <button type="submit" className="inline-flex h-10 shrink-0 items-center justify-center rounded-[0.7rem] bg-[#171614] px-5 text-[0.82rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_14px_30px_rgba(25,21,18,0.16)] transition hover:bg-[#29231f]">
                        Join
                      </button>
                    </form>
                  </div>
                </div>


                <div className="flex flex-col gap-4 pt-7 text-[0.82rem] font-semibold tracking-[-0.02em] text-[#8c8176] sm:flex-row sm:items-center sm:justify-between">
                  <p>© 2026 Atelier AI. All rights reserved.</p>

                  <div className="flex flex-wrap items-center gap-5">
                    <a href="#" className="transition hover:text-[#171411]">Privacy</a>
                    <a href="#" className="transition hover:text-[#171411]">Terms</a>
                    <a href="#" className="transition hover:text-[#171411]">Security</a>
                  </div>
                </div>
              </div>
            </footer>
          </main>
    </div>
  );
}