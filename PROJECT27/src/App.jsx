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
    "content": "\n/*\nSequence animation on scroll when visible. Requires Keyframe animation. Usage:\n1) Insert this code in the <head> along with the Animation Keyframe code.\n2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll\n*/\n(function () {\n// Inject CSS for paused/running states\nconst style = document.createElement(\"style\");\nstyle.textContent = `\n/* Default: paused */\n.animate-on-scroll { animation-play-state: paused !important; }\n/* Activated by JS */\n.animate-on-scroll.animate { animation-play-state: running !important; }\n`;\ndocument.head.appendChild(style);\nconst once = true;\nif (!window.__inViewIO) {\nwindow.__inViewIO = new IntersectionObserver((entries) => {\nentries.forEach((entry) => {\nif (entry.isIntersecting) {\nentry.target.classList.add(\"animate\");\nif (once) window.__inViewIO.unobserve(entry.target);\n}\n});\n}, { threshold: 0.2, rootMargin: \"0px 0px -10% 0px\" });\n}\nwindow.initInViewAnimations = function (selector = \".animate-on-scroll\") {\ndocument.querySelectorAll(selector).forEach((el) => {\nwindow.__inViewIO.observe(el); // observing twice is a no-op\n});\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => initInViewAnimations());\n})();\n"
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",
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
    "content": "\n    document.addEventListener('DOMContentLoaded', () => {\n        // Initialize ParticlesJS\n        particlesJS('particles-js', {\n            particles: {\n                number: { value: 80, density: { enable: true, value_area: 800 } },\n                color: { value: \"#ffffff\" },\n                shape: { type: \"circle\" },\n                opacity: { value: 0.5, random: false },\n                size: { value: 3, random: true },\n                line_linked: { enable: true, distance: 150, color: \"#ffffff\", opacity: 0.4, width: 1 },\n                move: { enable: true, speed: 6, direction: \"none\", random: false, straight: false, out_mode: \"out\", bounce: false }\n            },\n            interactivity: {\n                detect_on: \"canvas\",\n                events: { onhover: { enable: true, mode: \"repulse\" }, onclick: { enable: true, mode: \"push\" }, resize: true },\n                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }\n            },\n            retina_detect: true\n        });\n\n        const sections = document.querySelectorAll('.section');\n        const dots = document.querySelectorAll('.progress-dot');\n        const magneticElements = document.querySelectorAll('.magnetic');\n        let currentIndex = 0;\n        let isScrolling = false;\n        let touchStartY = 0;\n        \n        // Initialize\n        updateActiveDot(currentIndex);\n        \n        // Magnetic effect\n        magneticElements.forEach(el => {\n            el.addEventListener('mousemove', (e) => {\n                const rect = el.getBoundingClientRect();\n                const x = e.clientX - rect.left - rect.width / 2;\n                const y = e.clientY - rect.top - rect.height / 2;\n                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;\n            });\n            \n            el.addEventListener('mouseleave', () => {\n                el.style.transform = 'translate(0px, 0px)';\n            });\n        });\n        \n        // Scroll event\n        window.addEventListener('wheel', (e) => {\n            if (isScrolling) return;\n            \n            isScrolling = true;\n            if (e.deltaY > 0) {\n                if (currentIndex < sections.length - 1) {\n                    currentIndex++;\n                    changeSection(currentIndex);\n                }\n            } else {\n                if (currentIndex > 0) {\n                    currentIndex--;\n                    changeSection(currentIndex);\n                }\n            }\n            \n            setTimeout(() => {\n                isScrolling = false;\n            }, 1200);\n        });\n        \n        // Touch events\n        document.addEventListener('touchstart', (e) => {\n            touchStartY = e.touches[0].clientY;\n        });\n        \n        document.addEventListener('touchend', (e) => {\n            if (isScrolling) return;\n            \n            const touchEndY = e.changedTouches[0].clientY;\n            const diff = touchStartY - touchEndY;\n            \n            isScrolling = true;\n            if (diff > 50) {\n                if (currentIndex < sections.length - 1) {\n                    currentIndex++;\n                    changeSection(currentIndex);\n                }\n            } else if (diff < -50) {\n                if (currentIndex > 0) {\n                    currentIndex--;\n                    changeSection(currentIndex);\n                }\n            }\n            \n            setTimeout(() => {\n                isScrolling = false;\n            }, 1200);\n        });\n        \n        // Click on dots\n        dots.forEach(dot => {\n            dot.addEventListener('click', () => {\n                const index = parseInt(dot.getAttribute('data-index'));\n                currentIndex = index;\n                changeSection(currentIndex);\n            });\n        });\n        \n        function changeSection(index) {\n            sections.forEach(section => {\n                section.classList.remove('active');\n            });\n            \n            sections[index].classList.add('active');\n            updateActiveDot(index);\n            \n            const reveals = sections[index].querySelectorAll('.reveal');\n            reveals.forEach((el, i) => {\n                setTimeout(() => {\n                    el.classList.add('active');\n                }, i * 150);\n            });\n            \n            sections.forEach((section, i) => {\n                if (i !== index) {\n                    const otherReveals = section.querySelectorAll('.reveal');\n                    otherReveals.forEach(el => {\n                        el.classList.remove('active');\n                    });\n                }\n            });\n        }\n        \n        function updateActiveDot(index) {\n            dots.forEach(dot => {\n                dot.classList.remove('active');\n            });\n            dots[index].classList.add('active');\n        }\n    });\n"
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js",
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
    "content": "\n    (function () {\n    const el = document.getElementById('marketChart');\n    if (!el || !window.Chart) return;\n    const ctx = el.getContext('2d');\n    new Chart(ctx, {\n      type: 'line',\n      data: {\n        labels: ['2021', '2022', '2023', '2024', '2025'],\n        datasets: [{\n          label: 'Valuation',\n          data: [12, 18, 21, 24, 30],\n          borderColor: 'rgba(148, 163, 184, 0.9)',\n          backgroundColor: 'rgba(148, 163, 184, 0.15)',\n          fill: true,\n          tension: 0.35,\n          borderWidth: 2\n        }]\n      },\n      options: {\n        responsive: true,\n        maintainAspectRatio: false,\n        plugins: {\n          legend: { display: false },\n          tooltip: {\n            backgroundColor: 'rgba(2,6,23,0.9)',\n            titleColor: '#fff',\n            bodyColor: '#cbd5e1',\n            borderColor: 'rgba(255,255,255,0.1)',\n            borderWidth: 1,\n            displayColors: false\n          }\n        },\n        scales: {\n          x: {\n            grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },\n            ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Geist' } }\n          },\n          y: {\n            grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },\n            ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Geist' } }\n          }\n        }\n      }\n    });\n    if (window.lucide && typeof window.lucide.createIcons === 'function') {\n      window.lucide.createIcons();\n    }\n  })();\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    // Initialize lucide icons\n      window.addEventListener('DOMContentLoaded', () => {\n        lucide.createIcons();\n      });\n  "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "h-full";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "h-full bg-slate-950 text-slate-100 antialiased";
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
    <div className="aura-source-body h-full bg-slate-950 text-slate-100 antialiased" style={{"fontFamily": "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"}}>
      <div className="aura-background-component z-10 mix-blend-screen w-full h-screen absolute top-0"><div id="particles-js" className="absolute inset-0 -z-10">


      <canvas className="particles-js-canvas-el" width="3768" height="2478" style={{"width": "100%", "height": "100%"}}></canvas></div></div>
        <div className="relative h-screen overflow-hidden">

          <div className="pointer-events-none absolute inset-0 z-0">

            <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/8 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[87.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>


            <div className="absolute inset-x-0 top-[20%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-x-0 top-[60%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-x-0 top-[80%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>


          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92a4234b-15fa-4d5f-8821-48d3f9f7e2f1_3840w.jpg" alt="" className="pointer-events-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" />



          <div className="absolute top-0 right-0 bottom-0 left-0"></div>



          <header className="z-10 border-white/5 border-b relative">
            <div className="flex md:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

              <div className="flex md:gap-6 ring-white/5 ring-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-4 gap-y-4 items-center">
                <a href="#" className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full"></a>
                <nav className="hidden md:flex gap-2 gap-x-2 gap-y-2 items-center">
                  <a href="/#solutions" className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm">
                    Solutions
                  </a>
                  <a href="/#showcase" className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm">
                    Showcase
                  </a>
                  <a href="/#resources" className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm">
                    Resources
                  </a>
                </nav>
              </div>


              <div className="flex ring-white/5 ring-1 rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-2 gap-y-2 items-center">
                <a href="/#start" className="hidden sm:inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm">
                  Get Started
                </a>
                <a href="#" className="inline-flex items-center gap-2 transition hover:bg-white/15 hover:ring-white/25 ring-white/15 ring-1 [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-sm font-medium text-white/90 font-geist bg-white/10 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm">
                  Contact
                </a>
              </div>
            </div>
            <div className="" id="wrapper">
              <div className="gradient-blur">
                <div className=""></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

            </div>
          </header>


          <main className="z-10 flex h-[calc(100vh-80px)] relative items-end">
            <section className="md:px-8 md:pb-16 lg:pb-20 w-full max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">

              <div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 lg:gap-10 gap-x-8 gap-y-8 items-center">

                <div className="md:col-span-5 lg:col-span-5 relative">

                  <div className="inline-flex text-xs font-medium text-white/80 font-geist bg-white/5 ring-white/10 ring-1 rounded-full mb-5 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles h-3.5 w-3.5 text-white/80"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    Next-Gen AI Solutions
                  </div>
                  <h1 className="leading-tight sm:text-5xl md:text-5xl lg:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-4xl tracking-tighter font-geist">
                    Transform Your Business
                    <span className="block bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-white via-white to-white/70">with Intelligent AI</span>
                  </h1>
                </div>


                <div className="hidden md:block md:col-span-1 lg:col-span-1 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2">
                  </div>
                </div>


                <div className="md:col-span-4 lg:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.3s_both] relative">
                  <p className="leading-relaxed md:text-lg text-base text-white/70 font-geist">
                    We partner with forward-thinking companies to design, build, and deploy production-ready AI systems that
                    drive
                    measurable growth and competitive advantage.
                  </p>
                  <div className="border-white/10 border-t mt-6 pt-6">
                    <div className="flex gap-4 text-sm text-white/50 gap-x-4 gap-y-4 items-center">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap opacity-50" data-icon-replaced="true" style={{"width": "16px", "height": "16px", "color": "rgb(148, 163, 184)"}}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        <span className="font-geist">Fast deployment</span>
                      </div>


                    </div>
                  </div>
                </div>


                <div className="hidden lg:block lg:col-span-1 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2">
                  </div>
                </div>


                <div className="md:col-span-12 lg:col-span-2 relative">

                  <div className="flex flex-row lg:flex-col gap-x-3 gap-y-3">
                    <a href="#" className="inline-flex items-center justify-center gap-2 transition hover:bg-white/15 hover:ring-white/25 whitespace-nowrap text-sm font-medium text-white/90 font-geist bg-white/10 ring-white/15 ring-1 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both]">Case
                      Studies<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
                    <a href="#" className="inline-flex items-center justify-center gap-2 ring-1 ring-white/20 transition hover:bg-neutral-100 whitespace-nowrap [animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-neutral-900 font-geist bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4">Consultation<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar h-4 w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg></a>
                  </div>
                </div>
              </div>



            </section>
          </main>


          <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>
        </div>
        <section className="overflow-hidden lg:py-20 pt-8 pb-8 relative" id="solutions">

          <div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
            <div className="absolute inset-y-0 left-[15%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[35%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
            <div className="absolute inset-y-0 left-[65%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[85%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-x-0 top-[25%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-x-0 top-[50%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-x-0 top-[75%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>

          <div className="z-10 md:px-8 flex flex-col h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full gap-x-6 gap-y-6">

        <div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="activity" className="lucide lucide-activity w-3.5 h-3.5"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
            Real-time metrics
          </div>

          <div className="mt-4 space-y-3 flex-1 flex flex-col justify-between">
            <div className="">
              <p className="md:text-lg leading-relaxed text-base text-slate-300 font-geist">
                AI market projected to grow by
                <span className="text-orange-300 font-normal">59%</span> by 2025
              </p>


              <div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
                <div className="flex gap-2 h-24 gap-x-2 gap-y-2 items-end">
                  <div className="bg-white/10 w-4 rounded" style={{"height": "28px"}}></div>
                  <div className="bg-white/10 w-4 rounded" style={{"height": "46px"}}></div><div className="bg-white/10 w-4 rounded" style={{"height": "46px"}}></div>
                  <div className="bg-white/10 w-4 rounded" style={{"height": "54px"}}></div>

                  <div className="bg-white/10 w-4 rounded" style={{"height": "64px"}}></div><div className="bg-orange-400/70 w-4 rounded" style={{"height": "88px"}}></div>
                  <div className="bg-orange-400/80 w-4 rounded" style={{"height": "96px"}}></div><div className="bg-orange-400/80 w-4 rounded" style={{"height": "96px"}}></div><div className="bg-orange-400/70 w-4 rounded" style={{"height": "88px"}}></div><div className="bg-white/10 w-4 rounded" style={{"height": "64px"}}></div><div className="bg-white/10 w-4 rounded" style={{"height": "54px"}}></div><div className="bg-white/10 w-4 rounded" style={{"height": "28px"}}></div><div className="bg-white/10 w-4 rounded" style={{"height": "28px"}}></div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400 font-geist">
                  <span>2021</span>
                  <span className="">2025</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="text-4xl md:text-5xl font-normal tracking-tighter font-geist">$40B</div>
              <p className="text-slate-400 text-sm font-geist mt-1">Expected valuation</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 font-geist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-orange-300">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
                <span className="">Forecasted growth trajectory</span>
              </div>
            </div>
          </div>
        </div>


        <div className="overflow-hidden md:p-4 flex flex-col bg-gradient-to-b from-white/10 to-white/5 h-full ring-white/10 ring-1 rounded-3xl pt-3 pr-3 pb-3 pl-3 relative backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">


          <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 flex-1">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/863c6d3d-359c-471a-8fd8-543677b59c4c_800w.webp" alt="Face scan" className="min-h-[256px] md:min-h-[320px] w-full h-full object-cover" />
            <div className="absolute top-3 md:top-4 left-4 right-4 flex items-center justify-between">
              <span className="text-slate-100 text-sm md:text-base font-normal font-geist tracking-tighter">98%</span>
              <span className="text-[11px] md:text-xs text-slate-300/80 font-geist">Face detection</span>
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
                <span className="text-[10px] text-slate-200 font-geist">Live</span>
              </div>
            </div>
          </div>

          <div className="relative px-2 md:px-1 pt-4">
            <h3 className="md:text-xl text-lg font-normal tracking-tighter font-geist">AI Face Verification</h3>
            <p className="text-sm text-slate-400 font-geist">Identity match in milliseconds</p>
          </div>
        </div>


        <div className="md:p-6 flex flex-col bg-slate-900/60 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
          <div className="flex items-start justify-between gap-4">
            <p className="md:text-lg leading-relaxed text-base text-slate-300 font-geist">
              With a <span className="text-orange-300 font-normal">75%</span> project success rate, we help teams ship
              reliable AI to
              production.
            </p>
          </div>

          <div className="mt-6 flex-1 flex flex-col justify-between">
            <div className="">
              <p className="text-sm text-slate-400 font-geist">Delivery outcomes</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="">
                  <p className="text-slate-300 text-xs font-geist">Succeeded</p>
                  <div className="text-2xl md:text-3xl font-normal tracking-tighter font-geist">63%</div>
                </div>
                <div className="">
                  <p className="text-slate-300 text-xs font-geist">In Progress</p>
                  <div className="text-2xl md:text-3xl font-normal tracking-tighter font-geist">24%</div>
                </div>
                <div className="">
                  <p className="text-slate-300 text-xs font-geist">Failed</p>
                  <div className="text-2xl md:text-3xl font-normal tracking-tighter font-geist">13%</div>
                </div>
              </div>


              <div className="mt-5 space-y-3">

                <div className="relative h-5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                  <div className="bg-orange-400/80 absolute top-0 bottom-0 left-0" style={{"width": "63%"}}></div>
                  <div className="absolute left-[63%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow">
                  </div>
                </div>

                <div className="relative h-5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-red-500/80" style={{"width": "24%"}}></div>
                  <div className="absolute left-[24%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow">
                  </div>
                </div>

                <div className="relative h-5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-slate-300/40" style={{"width": "13%"}}></div>
                  <div className="absolute left-[13%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/80 shadow">
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-slate-400 font-geist">
                <span className="text-orange-300 font-normal">+12%</span> improvement vs. industry average
              </p>
            </div>
          </div>
        </div>


        <div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.35s_both]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="smile" className="lucide lucide-smile w-3.5 h-3.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
            Customer satisfaction
          </div>

          <div className="mt-4 flex-1 flex flex-col items-center justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full" style={{"background": "conic-gradient(rgba(163,230,53,0.85) 0% 86%, rgba(255,255,255,0.12) 86% 100%)"}}>
              </div>
              <div className="absolute inset-2 rounded-full bg-black/20 ring-1 ring-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-normal tracking-tighter font-geist">4.8</div>
              </div>
            </div>
            <p className="mt-3 text-slate-400 text-sm font-geist">CSAT • last 90 days</p>

            <div className="mt-6 w-full pt-4 border-t border-white/5">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-normal text-slate-300 font-geist">1,240</div>
                  <p className="text-xs text-slate-400 font-geist">Responses</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-normal text-slate-300 font-geist">+0.3</div>
                  <p className="text-xs text-slate-400 font-geist">vs. Last Period</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="rounded-3xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap w-3.5 h-3.5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Deployment speed
          </div>

          <div className="mt-4 flex-1 flex flex-col justify-between">
            <div className="">
              <div className="md:text-5xl text-4xl font-normal tracking-tighter font-geist">14 days</div>
              <p className="text-slate-400 text-sm font-geist">Avg. from kickoff to production</p>

              <div className="mt-5 grid grid-cols-3 items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-4 h-4 text-orange-300"><path d="M20 6 9 17l-5-5"></path></svg>
                  </div>
                  <span className="text-xs text-slate-300 font-geist">Discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-4 h-4 text-orange-300"><path d="M20 6 9 17l-5-5"></path></svg>
                  </div>
                  <span className="text-xs text-slate-300 font-geist">MVP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-4 h-4 text-orange-300"><path d="M20 6 9 17l-5-5"></path></svg>
                  </div>
                  <span className="text-xs text-slate-300 font-geist">Prod</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5">
              <div className="grid grid-cols-2 gap-3">
                <div className="">
                  <div className="text-lg font-normal text-slate-300 font-geist">98%</div>
                  <p className="text-xs text-slate-400 font-geist">On-time delivery</p>
                </div>
                <div className="">
                  <div className="text-lg font-normal text-slate-300 font-geist">24/7</div>
                  <p className="text-xs text-slate-400 font-geist">Support coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.45s_both]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock" className="lucide lucide-clock w-3.5 h-3.5"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Model latency
          </div>

          <div className="mt-4 space-y-3 flex-1 flex flex-col justify-between">
            <div className="">
              <div className="text-4xl md:text-5xl font-normal tracking-tighter font-geist">120ms</div>
              <p className="text-slate-400 text-sm font-geist">p95 response time</p>


              <div className="mt-4">
                <div className="relative h-3 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400/80 to-red-500/80" style={{"width": "60%"}}>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400 font-geist">
                  <span>0ms</span>
                  <span className="">200ms</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="grid grid-cols-2 gap-3">
                <div className="">
                  <div className="text-lg font-normal text-slate-300 font-geist">99.9%</div>
                  <p className="text-xs text-slate-400 font-geist">Uptime SLA</p>
                </div>
                <div className="">
                  <div className="text-lg font-normal text-slate-300 font-geist">50ms</div>
                  <p className="text-xs text-slate-400 font-geist">p50 latency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>


            <section className="z-10 fade-in fade-in-delay-4 sm:pb-12 sm:pt-12 pt-8 pb-8 relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]" style={{"opacity": "1", "transform": "translateY(0px)"}}>
              <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
                <div className="text-center mb-12">
                  <p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by teams at</p>
                </div>


                <div className="overflow-hidden relative" style={{"maskImage": "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", "WebkitMaskImage": "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"}}>

                  <div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{"visibility": "hidden"}}></div>



                  <div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

                    <div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-normal tracking-tighter">TechFlow</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-normal tracking-tighter">InnovateTech</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-bold tracking-tighter">FlowState</span>
                      </div>
                    </div>


                    <div className="flex items-center gap-16 shrink-0">
                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-normal tracking-tighter">TechFlow</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-normal tracking-tighter">InnovateTech</span>
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">

                        <span className="text-lg font-bold tracking-tighter">FlowState</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </section>
          </div>
        </section>
        <section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d521c037-f8b6-43a7-ae68-c6c1d0215733_3840w.webp)] bg-cover pt-16 pb-16 relative" id="showcase">

          <div className="pointer-events-none z-0 absolute inset-0">
            <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
            <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
            </div>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>


          <div className="hidden lg:block absolute right-8 top-10 z-10">
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20253914-1507-436f-a56d-f7abbc5d0c73_800w.webp" alt="Team portrait" className="w-48 h-36 object-cover" />
            </div>
            <p className="text-[11px] text-slate-400 font-geist mt-2">Mia Chen — Lead Researcher</p>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 gap-x-8 gap-y-8 items-center">

              <div className="lg:col-span-7">
                <div className="aspect-[16/11] md:aspect-[5/4] overflow-hidden rounded-3xl relative">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bad1237-d4b7-4abc-a4ff-4bb6e105b47d_1600w.png" alt="Generative systems visual" className="[animation:parallaxElement_linear_both] [animation-timeline:view()] [animation-range:entry_0%_entry_100%] w-full h-full object-cover" />

                </div>
              </div>


              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] w-fit">

                  Point of view
                </div>

                <h2 className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both] sm:text-5xl md:text-6xl md:font-normal md:tracking-tighter text-4xl font-semibold tracking-tight font-geist mt-4">
                  Outcomes, Engineered with Intention
                </h2>

                <p className="md:mt-5 md:text-lg leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both] text-base text-white/70 font-geist mt-5">
                  We design production AI that does more than impress in a demo. From high‑velocity prototypes to
                  mission‑critical deployments, our systems blend research rigor with product craft to deliver measurable
                  impact—safely, reliably, and at scale.
                </p>

                <a href="#" className="group inline-flex items-center gap-2 mt-6 text-sm font-medium font-geist text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.35s_both]">
                  Discover our work
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </section><section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c90007-7638-4902-8dda-5a6c20e92741_3840w.jpg)] bg-cover pt-16 pb-16 relative" id="resources">

        <div className="pointer-events-none z-0 absolute inset-0">
          <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
          <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

          <div className="max-w-3xl">
            <div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] font-medium text-white/70 font-geist bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">Key Features</div>
            <h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
              Experience AI-Powered Excellence
            </h2>
            <p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]">
              Our platform delivers cutting-edge capabilities designed to transform your workflow with intelligent automation and seamless integration.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 gap-x-6 gap-y-6">

            <div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">Intelligent Recording</h3>
              <p className="mt-2 text-sm text-slate-400 font-geist">
                Capture every moment with precision. Our advanced transcription technology delivers unmatched accuracy for your most important conversations.
              </p>


              <div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs text-slate-300 font-geist">
                    <svg className="w-4 h-4 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10v3"></path>
                      <path d="M6 6v11"></path>
                      <path d="M10 3v18"></path>
                      <path d="M14 8v7"></path>
                      <path d="M18 5v13"></path>
                      <path d="M22 10v3"></path>
                    </svg>
                    Live transcript
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
                    <span className="text-[10px] text-slate-200 font-geist">Recording</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="text-[11px] text-slate-300/90 font-geist">Welcome to the session</div>
                  <div className="text-[11px] text-slate-300/90 font-geist">How can we assist you today?</div>
                  <div className="text-[11px] text-slate-300/90 font-geist">Let's review the details</div>
                  <div className="text-[11px] text-slate-300/90 font-geist">Thank you for your time</div>
                </div>
              </div>
            </div>


            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
              <div className="absolute inset-0">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg" alt="Seamless connection" className="opacity-70 w-full h-full object-cover" />
                <div className="bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
              </div>
              <div className="relative p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">Seamless Collaboration</h3>
                <p className="mt-2 text-sm text-slate-200/80 font-geist">
                  Focus on what matters most. Spend less time managing tasks and more time building meaningful connections.
                </p>
              </div>
              <div className="relative p-5 md:p-6 pt-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/80 ring-1 ring-white/15 font-geist">
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                  Auto‑summaries &amp; smart insights
                </div>
              </div>
            </div>


            <div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">Customizable Templates</h3>
              <p className="mt-2 text-sm text-slate-400 font-geist">
                Built for professionals who demand flexibility. Our platform adapts to your unique workflow and documentation needs.
              </p>


              <div className="mt-5 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),rgba(2,6,23,0.6))] ring-1 ring-white/10 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-sm font-normal text-slate-200 font-geist">Professional Template</p>
                    <p className="text-[11px] text-slate-400 font-geist">Comprehensive session documentation</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300 font-geist">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span>November 21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Virtual Session</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300">Subject:</span> Strategic planning discussion initiated last week</p>
                  <p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300">Focus:</span> Implementation roadmap and key milestones</p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-10 gap-x-3 gap-y-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition">
              Start free trial
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition">
              Explore features
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
            </a>
            <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium font-geist text-white/90 underline decoration-white/30 underline-offset-4 hover:decoration-white/60">
              View security details
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </a>
          </div>
        </div>
      </section><section className="overflow-hidden lg:py-24 pt-16 pb-16 relative">

        <div className="pointer-events-none z-0 absolute inset-0">
          <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
          <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="z-10 md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] font-medium text-white/70 font-geist bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
            Pricing Plans
          </div>
          <h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
            Choose Your Plan
          </h2>
          <p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]">
            Flexible pricing designed to scale with your business. Start free, upgrade when you're ready.
          </p>
        </div>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          <div className="rounded-3xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
            <div className="flex-1">
              <h3 className="text-xl font-normal tracking-tight font-geist">Starter</h3>
              <p className="mt-2 text-sm text-slate-400 font-geist">Perfect for individuals and small teams getting started</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-normal tracking-tighter font-geist">$0</span>
                  <span className="text-slate-400 text-sm font-geist">/month</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Up to 10 recordings per month</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Basic transcription</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Standard templates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <a href="#" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition w-full">
              Get Started
            </a>
          </div>


          <div className="relative rounded-3xl overflow-hidden ring-2 ring-blue-400/50 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-400/20 ring-1 ring-blue-400/40 px-2.5 py-1 text-[10px] font-medium text-blue-200 font-geist">
                  POPULAR
                </span>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-normal tracking-tight font-geist">Professional</h3>
              <p className="mt-2 text-sm text-slate-200/80 font-geist">For growing teams that need advanced features</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-normal tracking-tighter font-geist">$49</span>
                  <span className="text-slate-300 text-sm font-geist">/month</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Unlimited recordings</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>AI-powered transcription</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Custom templates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </div>

            <a href="#" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition w-full">
              Start Free Trial
            </a>
          </div>


          <div className="rounded-3xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both]">
            <div className="flex-1">
              <h3 className="text-xl font-normal tracking-tight font-geist">Enterprise</h3>
              <p className="mt-2 text-sm text-slate-400 font-geist">Custom solutions for large organizations</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-normal tracking-tighter font-geist">Custom</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="">SLA guarantee</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-300 shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="">On-premise deployment</span>
                </li>
              </ul>
            </div>

            <a href="#" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition w-full">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
      </section><section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32b67867-f241-44ab-a57c-c87e60b99c25_3840w.webp)] bg-cover pt-16 pb-16 relative" id="start">

        <div className="pointer-events-none z-0 absolute inset-0">
          <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
          </div>
          <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
          </div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
          <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
          </div>
        </div>

        <div className="z-10 md:px-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 ring-1 ring-white/10 backdrop-blur-md">

            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
                    </path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                  Ready to get started?
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tighter font-geist">
                  Transform Your Workflow Today
                </h2>
                <p className="mt-6 text-lg text-slate-300 leading-relaxed font-geist">
                  Join thousands of teams using AI to build better products faster. Start your free trial now—no credit card
                  required.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-6 py-3 text-base font-medium font-geist hover:bg-neutral-100 transition">
                    Start Free Trial
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-6 py-3 text-base font-medium font-geist hover:bg-white/15 transition">
                    Schedule Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                  </a>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400 font-geist">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-300">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-300">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-300">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><footer className="overflow-hidden bg-slate-950 border-white/5 border-t relative">

        <div className="pointer-events-none z-0 absolute inset-0">
          <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-white/8 via-white/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
        </div>

        <div className="z-10 md:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">

            <div className="col-span-2">
              <a href="#" className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full"></a>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed font-geist max-w-xs">
                Building the future of AI-powered systems for forward-thinking teams.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>


            <div className="">
              <h3 className="text-sm font-medium text-white font-geist">Product</h3>
              <ul className="mt-4 space-y-3">
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Features</a></li>
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Pricing</a></li>
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Integrations</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Changelog</a></li>
              </ul>
            </div>


            <div className="">
              <h3 className="text-sm font-medium text-white font-geist">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">About</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Blog</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Careers</a></li>
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Contact</a></li>
              </ul>
            </div>


            <div className="">
              <h3 className="text-sm font-medium text-white font-geist">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Documentation</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Help Center</a></li>
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Community</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Status</a></li>
              </ul>
            </div>


            <div className="">
              <h3 className="text-sm font-medium text-white font-geist">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Privacy</a></li>
                <li className=""><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Terms</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Security</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Cookies</a></li>
              </ul>
            </div>
          </div>


          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 font-geist">© 2025 AI Systems. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Terms of Service</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition font-geist">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}