import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://unpkg.com/lucide@latest",
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
    "content": "\n/*\nSequence animation on scroll when visible. Requires Animation Keyframe. Usage:\n1) Insert this code in the <head> along with the Animation Keyframe code.\n2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll\n*/\n(function () {\n// Inject CSS for paused/running states\nconst style = document.createElement(\"style\");\nstyle.textContent = `\n/* Default: paused */\n.animate-on-scroll { animation-play-state: paused !important; }\n/* Activated by JS */\n.animate-on-scroll.animate { animation-play-state: running !important; }\n`;\ndocument.head.appendChild(style);\nconst once = true;\nif (!window.__inViewIO) {\nwindow.__inViewIO = new IntersectionObserver((entries) => {\nentries.forEach((entry) => {\nif (entry.isIntersecting) {\nentry.target.classList.add(\"animate\");\nif (once) window.__inViewIO.unobserve(entry.target);\n}\n});\n}, { threshold: 0.2, rootMargin: \"0px 0px -10% 0px\" });\n}\nwindow.initInViewAnimations = function (selector = \".animate-on-scroll\") {\ndocument.querySelectorAll(selector).forEach((el) => {\nwindow.__inViewIO.observe(el); // observing twice is a no-op\n});\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => initInViewAnimations());\n})();\n"
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js\",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();\n        "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        (function() {\n          const testimonials = [\n            {\n              quote: \"\\\"I've watched 36 MasterClasses by tuning in while eating and doing chores around the house. I've learned how to live with passion, grit, humility, and a process that makes my life journey something to savor.\\\"\",\n              author: \"Clarissa\",\n              role: \"Founder & Teacher\",\n              image: \"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/649a17f7-ce90-412e-bc8c-6227953b3ba4_1600w.webp\"\n            },\n            {\n              quote: \"\\\"Luminous has completely transformed how I approach social media. The automated insights allow me to focus on creating while the platform handles the engagement strategy perfectly.\\\"\",\n              author: \"David Chen\",\n              role: \"Digital Artist\",\n              image: \"https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80\"\n            },\n            {\n              quote: \"\\\"The growth velocity metrics are insane. I went from struggling to get 100 views to consistently hitting 50k+ on every reel within just two weeks of using the autopilot features.\\\"\",\n              author: \"Sarah Jenkins\",\n              role: \"Lifestyle Vlogger\",\n              image: \"https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80\"\n            }\n          ];\n\n          let currentIndex = 0;\n\n          window.nextTestimonial = function() {\n            currentIndex = (currentIndex + 1) % testimonials.length;\n            updateTestimonial();\n          };\n\n          window.prevTestimonial = function() {\n            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;\n            updateTestimonial();\n          };\n\n          function updateTestimonial() {\n            const data = testimonials[currentIndex];\n            const quoteEl = document.getElementById('t-quote');\n            const authorEl = document.getElementById('t-author');\n            const roleEl = document.getElementById('t-role');\n            const imageEl = document.getElementById('t-image');\n\n            // Fade out\n            [quoteEl, authorEl, roleEl, imageEl].forEach(el => el.style.opacity = '0');\n\n            setTimeout(() => {\n              // Update content\n              quoteEl.innerText = data.quote;\n              authorEl.innerText = data.author;\n              // Reset role with flag element\n              roleEl.innerHTML = `${data.role} <span class=\"inline-block w-4 h-3 rounded-[1px] bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-sm opacity-80\"></span>`;\n              imageEl.src = data.image;\n\n              // Fade in\n              [quoteEl, authorEl, roleEl, imageEl].forEach(el => el.style.opacity = '1');\n            }, 300);\n          }\n        })();\n      "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        (function() {\n          const plans = {\n            creator: {\n              title: \"Creator\",\n              price: \"$29.00\",\n              desc: \"Ideal for solo creators looking to automate daily posts and engagement.\",\n              features: [\n                \"AI Trend Analysis\",\n                \"Auto-Reply Bot\",\n                \"3 Platform Connections\",\n                \"Weekly Performance Report\",\n                \"Viral Score Predictor\"\n              ],\n              cta: \"Start Growing\"\n            },\n            pro: {\n              title: \"Pro Growth\",\n              price: \"$79.00\",\n              desc: \"Perfect for scaling teams needing advanced analytics and collaboration.\",\n              features: [\n                \"Everything in Creator\",\n                \"Team Collaboration\",\n                \"10 Platform Connections\",\n                \"Competitor Analysis\",\n                \"Priority Support\"\n              ],\n              cta: \"Scale Now\"\n            },\n            agency: {\n              title: \"Agency\",\n              price: \"$199.00\",\n              desc: \"Ultimate power for agencies managing multiple client brands.\",\n              features: [\n                \"Everything in Pro\",\n                \"White Label Reports\",\n                \"Unlimited Connections\",\n                \"API Access\",\n                \"Dedicated Account Manager\"\n              ],\n              cta: \"Contact Sales\"\n            }\n          };\n\n          const activeBtnClass = \"relative w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20\";\n          const inactiveBtnClass = \"w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left\";\n\n          window.selectPlan = function(planKey) {\n            // 1. Update Buttons\n            ['creator', 'pro', 'agency'].forEach(key => {\n              const btn = document.getElementById('btn-' + key);\n              const icon = btn.querySelector('svg');\n\n              if (key === planKey) {\n                btn.className = activeBtnClass;\n                // Ensure text color inside is white\n                const textSpan = btn.querySelector('span');\n                textSpan.className = \"text-xl font-sans\";\n                // Set icon color\n                icon.classList.remove('text-neutral-500');\n                if(key === 'creator') icon.classList.add('fill-white/20'); // Keep creator specific icon style\n\n                // Move Dot\n                const dot = document.getElementById('active-dot');\n                btn.appendChild(dot);\n              } else {\n                btn.className = inactiveBtnClass;\n                const textSpan = btn.querySelector('span');\n                textSpan.className = \"text-xl group-hover:text-white font-sans\";\n                icon.classList.add('text-neutral-500');\n                icon.classList.remove('fill-white/20');\n              }\n            });\n\n            // 2. Update Lines\n            ['creator', 'pro', 'agency'].forEach(key => {\n              const path = document.getElementById('path-' + key);\n              if (key === planKey) {\n                path.setAttribute('stroke', '#f97316');\n                path.setAttribute('class', 'animate-flow shadow-[0_0_15px_rgba(249,115,22,0.5)]');\n                path.setAttribute('stroke-dasharray', '8 8');\n              } else {\n                path.setAttribute('stroke', '#525252');\n                path.setAttribute('class', 'opacity-20');\n                path.setAttribute('stroke-dasharray', '6 6');\n              }\n            });\n\n            // 3. Update Content\n            const data = plans[planKey];\n            const titleEl = document.getElementById('plan-title');\n            const priceEl = document.getElementById('plan-price');\n            const descEl = document.getElementById('plan-desc');\n            const featuresEl = document.getElementById('plan-features');\n            const ctaEl = document.getElementById('plan-cta');\n\n            // Simple fade out/in effect\n            const elements = [titleEl, priceEl, descEl, featuresEl, ctaEl];\n            elements.forEach(el => el.style.opacity = '0');\n            elements.forEach(el => el.style.transition = 'opacity 0.2s ease');\n\n            setTimeout(() => {\n              titleEl.textContent = data.title;\n              priceEl.textContent = data.price;\n              descEl.textContent = data.desc;\n\n              // Rebuild features\n              featuresEl.innerHTML = data.features.map(feat => `\n                <div class=\"flex items-center gap-4 group/item\">\n                  <div class=\"flex-none transition-transform group-hover/item:translate-x-1\">\n                    <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"#f97316\" class=\"text-orange-500\"><path d=\"M22 12 6 22V2z\" stroke=\"none\"></path></svg>\n                  </div>\n                  <span class=\"text-white text-sm font-sans\">${feat}</span>\n                </div>\n              `).join('');\n\n              ctaEl.innerHTML = `\n                ${data.cta}\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-lucide=\"arrow-right-circle\" class=\"lucide lucide-arrow-right-circle w-5 h-5 text-white/80 transition-transform group-hover/btn:translate-x-1\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m12 16 4-4-4-4\"></path><path d=\"M8 12h8\"></path></svg>\n              `;\n\n              elements.forEach(el => el.style.opacity = '1');\n            }, 200);\n          }\n        })();\n      "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      lucide.createIcons();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "min-h-screen overflow-x-hidden selection:bg-orange-500/30 text-white bg-[#050505] relative";
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
    <div className="aura-source-body min-h-screen overflow-x-hidden selection:bg-orange-500/30 text-white bg-[#050505] relative">
      <div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
            <div className="stars absolute inset-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-950/20 blur-[100px] rounded-full"></div>
          </div>


          <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-white/5 animate-entry delay-75">

            <div className="flex gap-2 gap-x-2 gap-y-2 items-center">
              <div className="relative flex items-center justify-center w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="asterisk" className="lucide lucide-asterisk text-white w-8 h-8 absolute rotate-45">
                  <path d="M12 6v12"></path>
                  <path d="M17.196 9 6.804 15"></path>
                  <path d="m6.804 9 10.392 6"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="asterisk" className="lucide lucide-asterisk absolute w-[32px] h-[32px]" data-icon-replaced="true" style={{"width": "32px", "height": "32px", "color": "rgb(249, 115, 22)"}}>
                  <path d="M12 6v12"></path>
                  <path d="M17.196 9 6.804 15"></path>
                  <path d="m6.804 9 10.392 6"></path>
                </svg>
              </div>
              <span className="text-xl text-white font-sans">Luminous</span>
            </div>


            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1 backdrop-blur-md">
              <a href="#" className="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white flex items-center gap-2 border border-white/5 shadow-inner font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Home
              </a>
              <a href="#" className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans">
                About Us
              </a>
              <a href="#" className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans">
                Pricing
              </a>
              <button className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1 font-sans">
                Features
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down w-3 h-3">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <a href="#" className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans">
                Resources
              </a>
            </div>


            <a href="#" className="hidden md:block hover:brightness-110 transition-all text-sm text-white bg-gradient-to-b from-orange-400 to-orange-600 border-white/20 rounded-full border-t pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)] font-sans">
              Get Started
            </a>
          </nav>


          <main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-20 pl-6 relative items-center">
            <div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
              <div data-us-project="AhqzKk9mZE0EnlENMQDi" className="absolute w-full h-full left-0 top-0 -z-10"></div>

            </div>

            <div className="lg:col-span-7 flex flex-col relative items-start z-10">

              <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles w-3 h-3 text-orange-400">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                <span className="font-sans">Social Growth, Autopilot Mode</span>
              </div>


              <h1 className="text-5xl lg:text-[76px] leading-[1.05] text-white mb-6 font-bricolage font-light tracking-tight animate-entry delay-150" style={{"transition": "outline 0.1s ease-in-out"}}>
                SOCIAL REACH
                <span className="inline-flex align-middle mx-1"></span>
                AUTOMATED
                <br />
                GROWTH VIRAL
                <br />
                RESULTS
              </h1>


              <p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-sans animate-entry delay-200">
                Stop guessing what works. Luminous analyzes trends and automates your
                content strategy for maximum engagement across every platform.
              </p>


              <div className="flex flex-wrap gap-4 mb-20 gap-x-4 gap-y-4 items-center animate-entry delay-300">
                <button className="group relative flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-t from-yellow-200 via-orange-400 to-orange-500 px-8 py-3 text-lg font-medium text-[#2c1306] shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)] ring-1 ring-inset ring-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(249,115,22,0.8)] font-sans">
                  <span className="font-sans">Explore design</span>
                </button>

                <button className="px-8 py-3 rounded-full bg-white text-black text-lg hover:bg-neutral-200 transition-colors font-sans">
                  View Features
                </button>
              </div>
            </div>


            <div className="lg:col-span-5 flex lg:justify-end lg:mt-0 mt-0 relative justify-center z-10 animate-entry delay-500">

              <div className="relative w-[360px] bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>


                <div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8 flex flex-col items-start overflow-hidden">

                  <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent"></div>


                  <div className="flex justify-between w-full items-start mb-6 relative">
                    <span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5 font-sans">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      Viral Result
                    </span>
                  </div>

                  <h3 className="text-xl text-white mb-2 font-sans">
                    Growth Velocity
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-sans">
                    Automated engagement hitting viral peaks.
                  </p>


                  <div className="w-full mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                        +842%
                      </span>
                      <span className="text-xs text-orange-500 flex items-center bg-orange-500/10 px-1.5 py-0.5 rounded font-sans">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up mr-0.5">
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        vs last week
                      </span>
                    </div>


                    <div className="w-full h-16 relative mt-4">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 280 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"></stop>
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <path d="M0 50 C 40 50, 60 30, 100 35 C 140 40, 160 10, 200 15 C 240 20, 260 5, 280 0 V 60 H 0 Z" fill="url(#chartGradient)" className=""></path>
                        <path d="M0 50 C 40 50, 60 30, 100 35 C 140 40, 160 10, 200 15 C 240 20, 260 5, 280 0" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" vector-effect="non-scaling-stroke" className=""></path>

                        <circle cx="280" cy="0" r="3" fill="#fff" stroke="#f97316" strokeWidth="2"></circle>
                      </svg>
                    </div>
                  </div>


                  <button className="hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 w-full border-white/20 rounded-full border-t mb-8 pt-3 pb-3 shadow-[0_4px_15px_rgba(249,115,22,0.4)] font-sans">
                    Analyze Trends
                  </button>


                  <div className="space-y-4 w-full mb-8">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3 text-neutral-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-4 h-4 text-orange-500">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span className="font-sans">Total Impressions</span>
                      </div>
                      <span className="text-white font-sans">2.4M</span>
                    </div>
                  </div>


                  <div className="relative w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-6 flex items-center justify-center">
                    <span className="bg-[#0A0A0A] px-2 text-[10px] text-neutral-400 uppercase font-sans">
                      AI Powered Scale
                    </span>
                  </div>


                  <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-sans">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-3.5 h-3.5 text-white fill-white">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                      </svg>
                      Auto-Optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>


          <section className="-mt-4 lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto pt-0 px-2.5 lg:px-0 pb-24 relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-orange-600/20 blur-[100px] rounded-full z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

              <div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] backdrop-blur-sm">

                <div className="-top-10 -right-10 bg-orange-500/10 w-56 h-56 rounded-full absolute blur-3xl"></div>


                <div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-neutral-400">
                    <a href="#" className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-sans">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-orange-500">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      Luminous OS
                    </a>
                    <span className="opacity-40 font-sans">/</span>
                    <span className="text-white font-sans">Growth</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 text-[11px] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-neutral-500">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                      <input type="text" placeholder="Search trends..." className="bg-transparent text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none w-48" />
                    </div>
                    <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white/5 text-white text-xs ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition font-sans">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Export
                    </button>
                  </div>
                </div>


                <div className="grid grid-cols-12">

                  <aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-white/5 border-white/5 border-r">
                    <div className="px-4 py-4">
                      <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-900/20 text-sm hover:brightness-110 transition-all px-3 py-2 border border-white/10 font-sans">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        New Campaign
                      </button>
                    </div>

                    <nav className="px-3 pb-4 space-y-6 overflow-y-auto">

                      <div className="">
                        <div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans">
                          Platform
                        </div>
                        <ul className="space-y-1">
                          <li className="">
                            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid">
                                <rect width="7" height="7" x="3" y="3" rx="1" className=""></rect>
                                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                              </svg>
                              Dashboard
                            </a>
                          </li>
                          <li className="">
                            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10 shadow-inner font-sans">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-orange-400">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                              </svg>
                              Growth Velocity
                            </a>
                          </li>
                          <li className="">
                            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              </svg>
                              Audience
                            </a>
                          </li>
                        </ul>
                      </div>


                      <div className="">
                        <div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans">
                          Content AI
                        </div>
                        <ul className="space-y-1">
                          <li className="">
                            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                              </svg>
                              Generation
                            </a>
                          </li>
                          <li className="">
                            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-clock">
                                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                <path d="M16 2v4"></path>
                                <path d="M8 2v4"></path>
                                <path d="M3 10h5"></path>
                                <path d="M17.5 17.5 16 16.25V14"></path>
                                <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path>
                              </svg>
                              Scheduler
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </aside>


                  <main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-black/20">

                    <div className="px-4 sm:px-6 py-3 border-b border-white/5 overflow-x-auto">
                      <div className="flex items-center gap-6 min-w-max">
                        <button className="text-sm text-white border-b-2 border-orange-500 pb-3 -mb-3.5 font-sans">
                          Overview
                        </button>
                        <button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans">
                          Real-time
                        </button>
                        <button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans">
                          Competitors
                        </button>
                        <button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans">
                          Alerts
                        </button>
                      </div>
                    </div>


                    <div className="px-4 sm:px-6 py-6 border-b border-white/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <h3 className="text-white text-2xl font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                            Viral Velocity
                          </h3>
                          <span className="text-[11px] rounded-md bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 uppercase font-sans">
                            Trending
                          </span>
                        </div>
                        <div className="text-xs text-neutral-500 flex items-center gap-1.5 font-sans">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                          </span>
                          Updating live
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-neutral-400 font-sans">
                        Cross-platform engagement is scaling •
                        <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-sans">
                          View detailed report
                        </a>
                      </div>
                    </div>


                    <div className="px-4 sm:px-6 py-6 space-y-4">

                      <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="">
                              <div className="text-sm text-white font-sans">
                                Engagement Spike Detected
                              </div>
                              <div className="text-xs text-neutral-500 mt-0.5 font-sans">
                                Avg reach 245k • +42% from last week • 98% sentiment
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] rounded-md bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 font-sans">
                            VIRAL
                          </span>
                        </div>
                        <div className="mt-4 bg-black/40 rounded-lg ring-1 ring-white/5 p-3 font-mono text-xs">
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-neutral-500 font-sans">
                              → Impressions:
                              <span className="text-orange-400 ml-1 font-sans">
                                2.4M
                              </span>
                            </div>
                            <div className="text-neutral-500 font-sans">
                              → Shares:
                              <span className="text-orange-400 ml-1 font-sans">
                                14.2K
                              </span>
                            </div>
                            <div className="text-neutral-500 font-sans">
                              → Save Rate:
                              <span className="text-orange-400 ml-1 font-sans">
                                8.4%
                              </span>
                            </div>
                            <div className="text-neutral-500 font-sans">
                              → Velocity:
                              <span className="text-orange-400 ml-1 font-sans">
                                High
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="rounded-xl ring-1 ring-orange-500/20 bg-gradient-to-b from-orange-500/5 to-transparent p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="">
                              <div className="text-sm text-white font-sans">
                                Generating Content Variations
                              </div>
                              <div className="text-xs text-neutral-500 mt-0.5 font-sans">
                                Batch #847 • 3 Platforms • Est. time 45s
                              </div>
                            </div>
                          </div>
                          <div className="text-[11px] text-orange-400 font-sans">
                            00:45
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-xs text-neutral-500 font-sans">
                            Processing
                          </span>
                          <div className="flex-1 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                            <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                          </div>
                          <span className="text-xs text-white font-sans">
                            67%
                          </span>
                          <button className="text-[10px] rounded hover:bg-white/10 text-neutral-400 px-2 py-1 transition-colors font-sans">
                            STOP
                          </button>
                        </div>
                      </div>


                      <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="">
                              <div className="text-sm text-white font-sans">
                                Competitor Trend Alert
                              </div>
                              <div className="text-xs text-neutral-500 mt-0.5 font-sans">
                                Topic: "AI Agents" • Rising fast • 28m ago
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] rounded-md bg-white/5 text-neutral-300 ring-1 ring-white/10 px-2 py-0.5 font-sans">
                            OPPORTUNITY
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <button className="text-xs rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition-colors font-sans">
                            Generate Response
                          </button>
                          <button className="text-xs rounded-md text-neutral-400 hover:text-white px-3 py-1.5 transition-colors font-sans">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>


                  <aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white/5 border-l border-white/5 min-h-[520px]">
                    <div className="px-4 sm:px-5 py-4 space-y-4">

                      <div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
                        <div className="text-xs text-neutral-500 mb-3 uppercase font-sans">
                          Live Metrics
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                            <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                              Reach/hr
                            </div>
                            <div className="text-lg text-white font-sans">
                              84.3K
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                            <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                              Avg Retention
                            </div>
                            <div className="text-lg text-white font-sans">
                              12s
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                            <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                              Conv. Rate
                            </div>
                            <div className="text-lg text-white font-sans">
                              3.4%
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
                            <div className="text-[10px] text-neutral-400 mb-1 font-sans">
                              Viral Score
                            </div>
                            <div className="text-lg text-orange-400 font-sans">
                              9.2
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
                        <div className="text-xs text-neutral-500 mb-2 uppercase font-sans">
                          Connected Accounts
                        </div>
                        <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                          Active on 4 platforms. All scheduling queues are healthy.
                        </p>
                        <div className="mt-3 text-xs text-neutral-500 mb-2 font-sans">
                          Platforms
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                          </span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </span>
                        </div>
                      </div>


                      <div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
                        <div className="text-xs text-neutral-500 mb-3 uppercase font-sans">
                          Autopilot
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-300 font-sans">
                              Auto-repost
                            </span>
                            <button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-500/20 ring-1 ring-orange-500/30">
                              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-orange-400 translate-x-4 transition-transform shadow-sm"></span>
                              <span className="sr-only font-sans">toggle</span>
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-300 font-sans">
                              Smart Reply
                            </span>
                            <button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-500/20 ring-1 ring-orange-500/30">
                              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-orange-400 translate-x-4 transition-transform shadow-sm"></span>
                              <span className="sr-only font-sans">toggle</span>
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-300 font-sans">
                              Trend Watch
                            </span>
                            <button aria-pressed="false" className="relative inline-flex h-5 w-9 items-center rounded-full bg-white/10 ring-1 ring-white/10">
                              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 translate-x-0 transition-transform shadow-sm"></span>
                              <span className="sr-only font-sans">toggle</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>


          <section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative mx-2.5 lg:mx-auto" style={{"position": "relative", "--border-gradient": "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "24px"}}>

            <div className="flex mb-0 items-center justify-between">
              <div className="flex flex-col text-left">
                <div className="flex flex-col lg:flex-row gap-4 mb-3 gap-x-4 gap-y-4 items-start lg:items-center">
                  <span className="text-8xl text-white/5 font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                    01.
                  </span>
                  <div className="space-y-2">
                    <h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                      Scale your reach instantly
                    </h2>
                    <p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans">
                      Luminous analyzes millions of data points to predict trends,
                      automate engagement, and schedule content when your audience is
                      most active.
                    </p>
                    <button className="lg:hidden mt-6 w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans">
                      Start Growing Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans">
                  Start Growing Now
                </button>
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12 gap-x-8 gap-y-8">

              <div className="md:p-10 flex flex-col overflow-hidden group/card hover:border-white/20 transition-colors duration-500 bg-[#0A0A0A] border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between">

                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover/card:opacity-100"></div>


                <div className="grid grid-cols-3 gap-4 mb-12 relative z-10">

                  <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                      </svg>
                    </div>
                    <span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                      Generate Content
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                      </svg>
                    </div>
                    <span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                      Auto-Engage
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans">
                      Predict Trends
                    </span>
                  </div>
                </div>


                <div className="mb-10 relative z-10">
                  <div className="grid grid-cols-4 text-sm font-medium text-white mb-4 px-2">
                    <div className="col-span-2 font-sans">Trending Topic</div>
                    <div className="text-right text-neutral-400 font-sans">
                      Reach
                    </div>
                    <div className="text-right text-neutral-400 font-sans">
                      Velocity
                    </div>
                  </div>

                  <div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 hover:bg-white/[0.02] transition-colors rounded-lg">
                    <div className="col-span-2 text-neutral-300 flex items-center gap-2 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                      #GenerativeAI
                    </div>
                    <div className="text-right font-sans">842k</div>
                    <div className="text-right text-neutral-500 font-sans">
                      Medium
                    </div>
                  </div>

                  <div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 relative overflow-hidden rounded-lg group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="col-span-2 text-white flex items-center gap-2 relative z-10 font-sans">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      #FutureTech
                    </div>
                    <div className="text-right text-white relative z-10 font-sans">
                      2.1M
                    </div>
                    <div className="text-right text-orange-400 relative z-10 font-sans">
                      Viral
                    </div>
                  </div>
                </div>


                <div className="bg-neutral-900/40 border border-white/10 rounded-xl p-2 pl-4 flex justify-between items-center relative z-10 backdrop-blur-sm group hover:border-orange-500/30 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded flex items-center justify-center bg-[#1877F2]/20 text-[#1877F2]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm font-sans">
                      Connect Facebook Ads
                    </span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 group-hover:bg-orange-500 group-hover:text-white border border-white/5 flex items-center justify-center text-neutral-400 transition-colors text-xs font-sans">
                    Connect
                  </div>
                </div>
              </div>


              <div className="overflow-hidden min-h-[450px] flex items-center justify-center bg-[#0A0A0A] border-white/10 border rounded-3xl relative group/orbit">

                <div className="opacity-80 absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15)_0%,_rgba(0,0,0,0)_70%)]"></div>


                <div className="flex md:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center">

                  <div className="absolute flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-[180px] h-[180px] rounded-full border border-orange-500/30"></div>
                  </div>
                  <div className="absolute flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-[340px] h-[340px] rounded-full border border-orange-500/20"></div>
                  </div>
                  <div className="absolute flex items-center justify-center pointer-events-none opacity-10">
                    <div className="w-[500px] h-[500px] rounded-full border border-orange-500/10"></div>
                  </div>


                  <div className="relative w-24 h-24 rounded-full bg-[#120a05] border border-orange-500/50 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(249,115,22,0.5)] z-20">
                    <div className="animate-ping opacity-20 border-orange-500 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-asterisk text-orange-500">
                      <path d="M12 6v12"></path>
                      <path d="M17.196 9 6.804 15"></path>
                      <path d="m6.804 9 10.392 6"></path>
                    </svg>
                  </div>


                  <div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">



                    <div className="absolute top-1/2 left-1/2 z-10" style={{"transform": "translate(-50%, -50%) rotate(0deg) translateY(-170px) rotate(0deg)"}}>
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </div>
                    </div>


                    <div className="absolute top-1/2 left-1/2 z-10" style={{"transform": "translate(-50%, -50%) rotate(60deg) translateY(-170px) rotate(-60deg)"}}>
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                    </div>


                    <div className="absolute top-1/2 left-1/2 z-10" style={{"transform": "translate(-50%, -50%) rotate(120deg) translateY(-170px) rotate(-120deg)"}}>
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                    </div>


                    <div className="absolute top-1/2 left-1/2 z-10" style={{"transform": "translate(-50%, -50%) rotate(180deg) translateY(-170px) rotate(-180deg)"}}>
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="text-white w-5 h-5">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.46a6.33 6.33 0 0 0 10.86 3.1 5.6 5.6 0 0 0 1.06-2.7V10.4a8.36 8.36 0 0 0 4.69 1.48V8.35a4.86 4.86 0 0 1-2.02-1.66z"></path>
                        </svg>
                      </div>
                    </div>


                    <div className="absolute top-1/2 left-1/2 z-10" style={{"transform": "translate(-50%, -50%) rotate(240deg) translateY(-170px) rotate(-240deg)"}}>
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                      </div>
                    </div>


                    <div className="absolute top-1/2 left-1/2 z-10" style={{"transform": "translate(-50%, -50%) rotate(300deg) translateY(-170px) rotate(-300deg)"}}>
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">

              <div className="flex flex-col items-start group">
                <div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h3 className="text-xl text-white mb-3 font-sans">
                  Precision Targeting
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
                  Identify and engage your ideal audience segments with AI-driven
                  behavioral analysis and lookalike modeling.
                </p>
              </div>

              <div className="flex flex-col items-start group">
                <div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
                <h3 className="text-xl text-white mb-3 font-sans">
                  Automated Workflows
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
                  Set up complex engagement triggers and response sequences that run
                  on autopilot while you sleep.
                </p>
              </div>

              <div className="flex flex-col group items-start">
                <div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <h3 className="text-xl text-white mb-3 font-sans">
                  Brand Safety
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans">
                  Advanced sentiment analysis ensures your automated interactions
                  always align with your brand voice and values.
                </p>
              </div>
            </div>
          </section>
          <section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative mx-2.5 lg:mx-auto" style={{"position": "relative", "--border-gradient": "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "24px"}}>

            <div className="flex flex-col mb-16">
              <div className="flex mb-0 items-center justify-between">
                <div className="flex flex-col text-left">
                  <div className="flex gap-4 mb-3 gap-x-4 gap-y-4 flex-col lg:flex-row items-start lg:items-center">
                    <span className="text-8xl text-white/5 font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                      02.
                    </span>
                    <div className="space-y-2">
                      <h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                        Real Results. Real Growth.
                      </h2>
                      <p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans">
                        Hear directly from the creators and brands who have used
                        Luminous to drastically increase their engagement and reach.
                      </p>
                      <button className="lg:hidden mt-6 w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans">
                        Start Growing Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans">
                    Start Growing Now
                  </button>
                </div>
              </div>
            </div>


            <div className="flex gap-4 md:gap-8 relative gap-x-4 gap-y-4 items-center justify-between">
              <button data-aura-onclick="window.prevTestimonial()" className="hidden md:flex w-12 h-12 rounded-xl border border-white/10 bg-[#0F0F0F] text-neutral-400 items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 z-30 group shrink-0 shadow-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left group-hover:-translate-x-0.5 transition-transform">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
              </button>

              <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 group/carousel">
                <div className="lg:col-span-6 lg:col-start-1 relative z-20">
                  <div className="overflow-hidden group/card hover:border-white/20 transition-colors duration-300 md:p-12 bg-[#0A0A0A]/50 w-full lg:w-[620px] border-white/10 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="mb-8 text-orange-500 relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
                      </svg>
                    </div>

                    <blockquote id="t-quote" className="text-xl md:text-2xl leading-relaxed text-neutral-200 mb-10 relative z-10 font-bricolage font-light tracking-tight transition-opacity duration-300" style={{"transition": "outline 0.1s ease-in-out"}}>
                      "I've watched 36 MasterClasses by tuning in while eating and
                      doing chores around the house. I've learned how to live with
                      passion, grit, humility, and a process that makes my life
                      journey something to savor."
                    </blockquote>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="flex flex-col">
                        <span id="t-author" className="text-white text-lg font-sans transition-opacity duration-300">
                          Clarissa
                        </span>
                        <span id="t-role" className="text-neutral-500 text-xs uppercase flex items-center gap-2 mt-1 font-sans transition-opacity duration-300">
                          Founder &amp; Teacher
                          <span className="inline-block w-4 h-3 rounded-[1px] bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-sm opacity-80" title="France"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden border border-white/5 ring-1 ring-white/5 shadow-2xl transition-transform duration-500 group-hover/carousel:scale-[1.01]">
                  <div className="bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
                  <img id="t-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/649a17f7-ce90-412e-bc8c-6227953b3ba4_1600w.webp" alt="Member" className="w-full h-full object-cover transition-opacity duration-300" />

                  <div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white flex items-center gap-2 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Active Creator
                  </div>
                </div>
              </div>

              <button data-aura-onclick="window.nextTestimonial()" className="hidden md:flex w-12 h-12 rounded-xl border border-white/10 bg-[#0F0F0F] text-neutral-400 items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 z-30 group shrink-0 shadow-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>


          </section>


          <section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-10 pb-12 pl-10 relative mx-2.5 lg:mx-auto" style={{"position": "relative", "--border-gradient": "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "24px"}}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative gap-x-12 gap-y-12 items-center">


              <div className="lg:col-span-5 flex flex-col justify-center">

                <div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-center">
                  <span className="text-6xl text-white/5 font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                    03.
                  </span>
                  <div className="space-y-2">
                    <h2 className="md:text-4xl text-4xl text-white font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                      Unlock Viral Growth
                    </h2>
                  </div>
                </div>


                <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg font-sans">
                  Choose the perfect plan to automate your social presence, analyze
                  trends in real-time, and grow your audience on autopilot.
                </p>


                <div className="flex flex-col gap-4 w-full relative z-10 max-w-md">

                  <button id="btn-creator" data-aura-onclick="selectPlan('creator')" className="relative w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20">
                    <span className="text-xl font-sans">Creator</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap w-6 h-6 fill-white/20">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>


                    <div id="active-dot" className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full translate-x-1/2 ring-4 ring-[#050505]"></div>
                  </button>


                  <button id="btn-pro" data-aura-onclick="selectPlan('pro')" className="w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left">
                    <span className="text-xl group-hover:text-white font-sans">
                      Pro Growth
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="rocket" className="lucide lucide-rocket w-6 h-6 text-neutral-500 group-hover:text-white transition-colors">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </button>


                  <button id="btn-agency" data-aura-onclick="selectPlan('agency')" className="w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left">
                    <span className="text-xl group-hover:text-white font-sans">
                      Agency
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="globe" className="lucide lucide-globe w-6 h-6 text-neutral-500 group-hover:text-white transition-colors">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </button>
                </div>
              </div>


              <div className="hidden lg:block lg:col-span-2 h-[400px] z-10 relative translate-y-16 gap-x-12 gap-y-12">
                <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 200 400" preserveAspectRatio="none">

                  <path id="path-creator" d="M-50 160 C 80 160, 80 200, 180 200 L 240 200" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="8 8" className="animate-flow shadow-[0_0_15px_rgba(249,115,22,0.5)]"></path>


                  <path id="path-pro" d="M-50 250 C 80 250, 80 200, 180 200 L 240 200" fill="none" stroke="#525252" strokeWidth="2" strokeDasharray="6 6" className="opacity-20"></path>


                  <path id="path-agency" d="M-50 340 C 80 340, 80 200, 180 200 L 240 200" fill="none" stroke="#525252" strokeWidth="2" strokeDasharray="6 6" className="opacity-20"></path>


                  <path d="M230 195 L 240 200 L 230 205" stroke="#f97316" strokeWidth="2" fill="none"></path>
                  <circle cx="240" cy="200" r="2" fill="#f97316"></circle>
                </svg>
              </div>


              <div className="lg:col-span-5 relative h-full">
                <div className="relative w-full h-full bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden group">

                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>


                  <div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8 lg:p-10 flex flex-col overflow-hidden">

                    <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>


                    <div className="flex items-center justify-between mb-2 relative z-10">
                      <h3 id="plan-title" className="text-3xl text-white font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                        Creator
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span id="plan-price" className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                          $29.00
                        </span>
                        <span className="text-sm text-orange-500/80 font-sans">
                          /month
                        </span>
                      </div>
                    </div>


                    <p id="plan-desc" className="text-neutral-400 mt-6 mb-8 text-sm leading-relaxed border-b border-white/10 pb-8 relative z-10 font-sans">
                      Ideal for solo creators looking to automate daily posts and
                      engagement.
                    </p>


                    <div id="plan-features" className="space-y-6 mb-10 relative z-10 flex-grow font-sans">

                      <div className="flex items-center gap-4 group/item">
                        <div className="flex-none transition-transform group-hover/item:translate-x-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" className="text-orange-500">
                            <path d="M22 12 6 22V2z" stroke="none"></path>
                          </svg>
                        </div>
                        <span className="text-white text-sm font-sans">
                          AI Trend Analysis
                        </span>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="flex-none transition-transform group-hover/item:translate-x-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" className="text-orange-500">
                            <path d="M22 12 6 22V2z" stroke="none"></path>
                          </svg>
                        </div>
                        <span className="text-white text-sm font-sans">
                          Auto-Reply Bot
                        </span>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="flex-none transition-transform group-hover/item:translate-x-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" className="text-orange-500">
                            <path d="M22 12 6 22V2z" stroke="none"></path>
                          </svg>
                        </div>
                        <span className="text-white text-sm font-sans">
                          3 Platform Connections
                        </span>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="flex-none transition-transform group-hover/item:translate-x-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" className="text-orange-500">
                            <path d="M22 12 6 22V2z" stroke="none"></path>
                          </svg>
                        </div>
                        <span className="text-white text-sm font-sans">
                          Weekly Performance Report
                        </span>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="flex-none transition-transform group-hover/item:translate-x-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" className="text-orange-500">
                            <path d="M22 12 6 22V2z" stroke="none"></path>
                          </svg>
                        </div>
                        <span className="text-white text-sm font-sans">
                          Viral Score Predictor
                        </span>
                      </div>
                    </div>


                    <button id="plan-cta" className="w-full py-4 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:brightness-110 text-white transition-all shadow-[0_8px_30px_-5px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 group/btn relative z-10 hover:shadow-[0_8px_40px_-5px_rgba(249,115,22,0.6)] border-t border-white/20 font-sans">
                      Start Growing
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right-circle" className="lucide lucide-arrow-right-circle w-5 h-5 text-white/80 transition-transform group-hover/btn:translate-x-1">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m12 16 4-4-4-4"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </section>


          <footer className="bg-center animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_1600w.jpg)] max-w-7xl bg-cover rounded-3xl mt-24 mr-auto mb-12 ml-auto pt-24 pr-6 pb-6 pl-6 relative" style={{"position": "relative", "--border-gradient": "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))", "--border-radius-before": "24px"}}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="z-10 text-center max-w-4xl mr-auto mb-24 ml-auto pr-6 pl-6 relative">
              <h2 className="text-2xl md:text-3xl text-white mb-3 font-bricolage font-light tracking-tight" style={{"transition": "outline 0.1s ease-in-out"}}>
                Join our newsletter
              </h2>
              <p className="text-neutral-400 max-w-lg mx-auto mb-8 text-base leading-relaxed font-sans">
                Join our newsletter for exclusive insights, announcements, and special
                offers delivered directly to your inbox.
              </p>

              <div className="relative max-w-xs mx-auto">
                <form className="flex items-center rounded-lg bg-[#050505] border border-white/10 focus-within:border-white/20 transition-all">
                  <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-none text-sm text-white pl-4 pr-1 py-3 focus:outline-none placeholder:text-neutral-600 font-sans h-10 rounded-l-lg" />
                  <button className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-r-lg text-sm transition-colors h-10 shadow-lg flex items-center gap-2 flex-shrink-0 font-sans">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 max-w-7xl mx-auto px-6">
              <div className="lg:col-span-2 col-span-full">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex gap-2 gap-x-2 gap-y-2 items-center">
                    <div className="relative flex items-center justify-center w-8 h-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="asterisk" className="lucide lucide-asterisk text-white w-8 h-8 absolute rotate-45">
                        <path d="M12 6v12"></path>
                        <path d="M17.196 9 6.804 15"></path>
                        <path d="m6.804 9 10.392 6"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="asterisk" className="lucide lucide-asterisk absolute w-[32px] h-[32px]" data-icon-replaced="true" style={{"width": "32px", "height": "32px", "color": "rgb(249, 115, 22)"}}>
                        <path d="M12 6v12"></path>
                        <path d="M17.196 9 6.804 15"></path>
                        <path d="m6.804 9 10.392 6"></path>
                      </svg>
                    </div>
                    <span className="text-xl text-white font-sans">
                      Luminous
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 209" style={{"color": "rgb(255, 255, 255)", "width": "18px", "height": "18px"}} className="lucide lucide-twitter w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" data-logos="twitter" data-icon-set="logos" data-icon-replaced="true" strokeWidth="2">
                        <path fill="#ffffff" d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" style={{"color": "rgb(255, 255, 255)", "width": "18px", "height": "18px"}} className="lucide lucide-x-square w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" data-logos="instagram-icon" data-icon-set="logos" data-icon-replaced="true" strokeWidth="2">
                        <path fill="#ffffff" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" style={{"color": "rgb(255, 255, 255)", "width": "18px", "height": "18px"}} className="lucide lucide-linkedin w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" data-logos="linkedin-icon" data-icon-set="logos" data-icon-replaced="true" strokeWidth="2">
                        <path fill="#ffffff" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-white mb-4 text-sm font-sans">Product</h4>
                <ul className="space-y-3 text-sm text-neutral-500">
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Product
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Integrations
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-white mb-4 text-sm font-sans">Developers</h4>
                <ul className="space-y-3 text-sm text-neutral-500">
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Docs
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Discord server
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-white mb-4 text-sm font-sans">Company</h4>
                <ul className="space-y-3 text-sm text-neutral-500">
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      About
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors font-sans">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-start gap-4 text-xs text-neutral-600 font-sans">
              <p className="font-sans">
                © 2025 AINest INC. All rights reserved.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f97316]/20 blur-3xl opacity-50 pointer-events-none"></div>
          </footer>
    </div>
  );
}