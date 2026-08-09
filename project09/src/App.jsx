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
    "src": "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js",
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
    "defer": true,
    "content": ""
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    // Main Balance Chart with beautiful white gradient\n    const mainCanvas = document.getElementById('mainChart');\n    if (mainCanvas) {\n      const ctx = mainCanvas.getContext('2d');\n      \n      // Create beautiful white gradient with low opacity\n      const whiteGradient = ctx.createLinearGradient(0, 0, 0, mainCanvas.height || 200);\n      whiteGradient.addColorStop(0, 'rgba(255,255,255,0.12)');\n      whiteGradient.addColorStop(0.3, 'rgba(255,255,255,0.08)');\n      whiteGradient.addColorStop(0.7, 'rgba(255,255,255,0.04)');\n      whiteGradient.addColorStop(1, 'rgba(255,255,255,0.01)');\n\n      const labels = ['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'];\n      const data = [14000,14800,15200,16000,16500,17700,18300,18600,19100,19800,20500,22193];\n\n      new Chart(ctx, {\n        type: 'line',\n        data: {\n          labels,\n          datasets: [{\n            label: 'Balance',\n            data,\n            borderColor: 'rgba(255,255,255,0.85)',\n            backgroundColor: whiteGradient,\n            pointRadius: 2,\n            pointBackgroundColor: 'rgba(255,255,255,0.95)',\n            pointBorderColor: 'rgba(255,255,255,0.95)',\n            pointBorderWidth: 1,\n            pointHoverRadius: 6,\n            pointHoverBackgroundColor: '#ffffff',\n            pointHoverBorderColor: 'rgba(16,185,129,0.8)',\n            pointHoverBorderWidth: 2,\n            tension: 0.4,\n            fill: true,\n            borderWidth: 2.5\n          }]\n        },\n        options: {\n          responsive: true,\n          maintainAspectRatio: false,\n          interaction: { intersect: false, mode: 'index' },\n          plugins: {\n            legend: { display: false },\n            tooltip: {\n              backgroundColor: 'rgba(17,24,39,0.95)',\n              borderColor: 'rgba(255,255,255,0.2)',\n              borderWidth: 1,\n              titleColor: '#fff',\n              bodyColor: '#e2e8f0',\n              cornerRadius: 12,\n              padding: 16,\n              displayColors: false,\n              callbacks: {\n                label: (ctx) => `€${ctx.parsed.y.toLocaleString()}`\n              }\n            }\n          },\n          scales: {\n            x: {\n              grid: { \n                color: 'rgba(255,255,255,0.08)', \n                borderDash: [2, 4],\n                drawBorder: false\n              },\n              ticks: { \n                color: 'rgba(255,255,255,0.6)', \n                font: { size: 11 }\n              },\n              border: { display: false }\n            },\n            y: {\n              grid: { \n                color: 'rgba(255,255,255,0.08)', \n                borderDash: [2, 4],\n                drawBorder: false\n              },\n              ticks: { \n                color: 'rgba(255,255,255,0.5)', \n                callback: v => `€${v/1000}k`, \n                font: { size: 11 }\n              },\n              border: { display: false }\n            }\n          }\n        }\n      });\n    }\n\n    // Beautiful Pie Chart with white gradient theme\n    const pieEl = document.getElementById('pieChart');\n    if (pieEl) {\n      const pieCtx = pieEl.getContext('2d');\n      \n      // Create gradients for each segment\n      const whiteGradient1 = pieCtx.createLinearGradient(0, 0, 0, 200);\n      whiteGradient1.addColorStop(0, 'rgba(255,255,255,0.95)');\n      whiteGradient1.addColorStop(0.5, 'rgba(255,255,255,0.75)');\n      whiteGradient1.addColorStop(1, 'rgba(255,255,255,0.6)');\n      \n      const whiteGradient2 = pieCtx.createLinearGradient(0, 0, 200, 0);\n      whiteGradient2.addColorStop(0, 'rgba(255,255,255,0.8)');\n      whiteGradient2.addColorStop(0.5, 'rgba(255,255,255,0.5)');\n      whiteGradient2.addColorStop(1, 'rgba(255,255,255,0.3)');\n\n      new Chart(pieCtx, {\n        type: 'doughnut',\n        data: {\n          labels: ['Bitcoin','Ethereum','USDC','Others'],\n          datasets: [{\n            data: [45.2, 32.8, 14.7, 7.3],\n            backgroundColor: [\n              whiteGradient1,\n              whiteGradient2,\n              'rgba(107,114,128,0.9)',\n              'rgba(75,85,99,0.7)'\n            ],\n            borderColor: [\n              'rgba(255,255,255,0.4)',\n              'rgba(255,255,255,0.3)',\n              'rgba(107,114,128,0.6)',\n              'rgba(75,85,99,0.4)'\n            ],\n            borderWidth: 1,\n            hoverOffset: 8,\n            hoverBorderColor: 'rgba(255,255,255,0.8)',\n            hoverBorderWidth: 2\n          }]\n        },\n        options: {\n          responsive: true,\n          maintainAspectRatio: false,\n          plugins: {\n            legend: { display: false },\n            tooltip: {\n              backgroundColor: 'rgba(17,24,39,0.95)',\n              borderColor: 'rgba(255,255,255,0.1)',\n              borderWidth: 1,\n              titleColor: '#fff',\n              bodyColor: '#e2e8f0',\n              cornerRadius: 8,\n              padding: 12,\n              displayColors: true,\n              callbacks: {\n                label: (ctx) => `${ctx.label}: ${ctx.parsed}%`\n              }\n            }\n          },\n          cutout: '65%',\n          elements: {\n            arc: {\n              borderRadius: 4\n            }\n          },\n          animation: {\n            animateRotate: true,\n            animateScale: true,\n            duration: 1000\n          }\n        }\n      });\n    }\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    (function() {\n      const section = document.getElementById('aura-emfikcwfj');\n      const svg = section.querySelector('#connection-svg');\n      const path = section.querySelector('#connection-path');\n      const startDot = section.querySelector('#connection-start');\n      const endDot = section.querySelector('#connection-end');\n      const midDot = section.querySelector('#node-mid');\n\n      function setCircle(circle, x, y) {\n        circle.setAttribute('cx', x);\n        circle.setAttribute('cy', y);\n      }\n\n      function drawConnector() {\n        const rect = section.getBoundingClientRect();\n        const a = section.querySelector('#anchor-a').getBoundingClientRect();\n        const b = section.querySelector('#anchor-b').getBoundingClientRect();\n\n        const sx = a.left + a.width / 2 - rect.left;\n        const sy = a.top + a.height / 2 - rect.top + 6; // nudge below\n        const ex = b.left + b.width / 2 - rect.left;\n        const ey = b.top + b.height / 2 - rect.top - 6; // nudge above\n\n        // Control points to form a smooth S-shaped dashed connector with rounded corners\n        const dx = Math.abs(ex - sx);\n        const dy = Math.abs(ey - sy);\n        const offsetX = Math.max(120, dx * 0.3);\n        const offsetY = Math.max(100, dy * 0.35);\n\n        const c1x = sx;\n        const c1y = sy + offsetY;\n        const c2x = sx + offsetX;\n        const c2y = sy + offsetY;\n        const c3x = ex - offsetX;\n        const c3y = ey - offsetY;\n        const c4x = ex;\n        const c4y = ey - offsetY;\n\n        const d = `M ${sx},${sy} C ${c1x},${c1y} ${c2x},${c2y} ${(sx+ex)/2},${(sy+ey)/2}\n                   S ${c4x},${c4y} ${ex},${ey}`;\n        path.setAttribute('d', d);\n\n        // Position nodes\n        setCircle(startDot, sx, sy);\n        setCircle(endDot, ex, ey);\n        setCircle(midDot, (sx + ex) / 2, (sy + ey) / 2);\n      }\n\n      // Initial draw + on resize\n      window.addEventListener('load', drawConnector, { passive: true });\n      window.addEventListener('resize', drawConnector, { passive: true });\n      // If fonts cause reflow, redraw shortly after\n      setTimeout(drawConnector, 200);\n    })();\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function() {\n        const section = document.getElementById('aura-emfms84tu');\n        \n        // Elements\n        const billingToggle = section.querySelector('#billingToggle');\n        const cardToggles = section.querySelectorAll('[data-card-toggle]');\n        const prices = section.querySelectorAll('.price');\n        const billingLabels = section.querySelectorAll('.billing-label');\n        const segPersonal = section.querySelector('#seg-personal');\n        const segBusiness = section.querySelector('#seg-business');\n\n        // State\n        let isYearly = false;\n        let currentSegment = 'personal';\n\n        // Pricing data\n        const pricingData = {\n          personal: {\n            mini: { monthly: 'US$9', yearly: 'US$7' },\n            basic: { monthly: 'US$20', yearly: 'US$16' },\n            pro: { monthly: 'US$41', yearly: 'US$33' }\n          },\n          business: {\n            mini: { monthly: 'US$19', yearly: 'US$15' },\n            basic: { monthly: 'US$49', yearly: 'US$39' },\n            pro: { monthly: 'US$99', yearly: 'US$79' }\n          }\n        };\n\n        function updatePricing() {\n          const data = pricingData[currentSegment];\n          const period = isYearly ? 'yearly' : 'monthly';\n          \n          prices.forEach((el, index) => {\n            const planNames = ['mini', 'basic', 'pro'];\n            const planName = planNames[index];\n            if (data[planName]) {\n              el.textContent = data[planName][period];\n              el.setAttribute(`data-${period}`, data[planName][period]);\n            }\n          });\n        }\n\n        function updateBillingLabels() {\n          const label = isYearly ? 'Yearly' : 'Monthly';\n          billingLabels.forEach(el => {\n            el.textContent = label;\n          });\n        }\n\n        function setBilling(yearly) {\n          isYearly = yearly;\n          \n          // Update knob positions\n          const knobPos = yearly ? 'translateX(26px)' : 'translateX(4px)';\n          const cardKnobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';\n          \n          // Header toggle\n          const headerKnob = billingToggle.querySelector('span.z-10');\n          if (headerKnob) {\n            headerKnob.style.transform = yearly ? 'translateX(26px)' : 'translateX(4px)';\n          }\n          \n          // Card toggles\n          cardToggles.forEach(btn => {\n            const knob = btn.querySelector('span.z-10');\n            if (knob) {\n              knob.style.transform = yearly ? 'translateX(22px)' : 'translateX(4px)';\n            }\n          });\n          \n          billingToggle.setAttribute('aria-pressed', yearly ? 'true' : 'false');\n          updatePricing();\n          updateBillingLabels();\n        }\n\n        function setSegment(segment) {\n          currentSegment = segment;\n          \n          // Update button styles\n          if (segment === 'personal') {\n            segPersonal.className = 'px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200';\n            segBusiness.className = 'px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200';\n          } else {\n            segBusiness.className = 'px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200';\n            segPersonal.className = 'px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200';\n          }\n          \n          updatePricing();\n        }\n\n        // Event listeners\n        billingToggle.addEventListener('click', () => {\n          setBilling(!isYearly);\n        });\n\n        cardToggles.forEach(btn => {\n          btn.addEventListener('click', (e) => {\n            e.stopPropagation();\n            setBilling(!isYearly);\n          });\n        });\n\n        segPersonal.addEventListener('click', () => {\n          setSegment('personal');\n        });\n\n        segBusiness.addEventListener('click', () => {\n          setSegment('business');\n        });\n\n        // Initialize\n        setBilling(false);\n        setSegment('personal');\n      })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    (function() {\n      const section = document.getElementById('aura-emflrsdvz');\n      const billingToggle = section.querySelector('#billingToggle');\n      const cardToggles = section.querySelectorAll('[data-card-toggle]');\n      const prices = section.querySelectorAll('.price');\n\n      function setBilling(yearly) {\n        prices.forEach(el => {\n          el.textContent = yearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');\n        });\n        // move knobs\n        const knobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';\n        const proKnobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';\n        // header toggle\n        const headerKnob = billingToggle.querySelector('span.z-10');\n        headerKnob && (headerKnob.style.transform = yearly ? 'translateX(26px)' : 'translateX(4px)');\n        // card toggles\n        cardToggles.forEach(btn => {\n          const k = btn.querySelector('span.z-10');\n          if (k) k.style.transform = yearly ? 'translateX(22px)' : 'translateX(4px)';\n        });\n        billingToggle.setAttribute('aria-pressed', yearly ? 'true' : 'false');\n      }\n\n      // init\n      setBilling(false);\n\n      billingToggle.addEventListener('click', () => {\n        const isYearly = billingToggle.getAttribute('aria-pressed') !== 'true';\n        setBilling(isYearly);\n      });\n\n      cardToggles.forEach(btn => {\n        btn.addEventListener('click', () => {\n          const isYearly = billingToggle.getAttribute('aria-pressed') !== 'true';\n          setBilling(!isYearly);\n        });\n      });\n    })();\n  "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      // Initialize Lucide icons\n      if (window.lucide) {\n        lucide.createIcons();\n      }\n\n      // Add scroll-based animations\n      const observerOptions = {\n        threshold: 0.1,\n        rootMargin: '0px 0px -50px 0px'\n      };\n\n      const observer = new IntersectionObserver((entries) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.style.animationPlayState = 'running';\n          }\n        });\n      }, observerOptions);\n\n      // Observe all animated elements\n      document.querySelectorAll('[class*=\"animate-\"]').forEach(el => {\n        if (el.classList.contains('opacity-0')) {\n          observer.observe(el);\n        }\n      });\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "min-h-screen bg-[#0b0f0d] text-slate-200 antialiased relative overflow-x-hidden";
const sourceBodyStyle = "font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;";
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
    <div className="aura-source-body min-h-screen bg-[#0b0f0d] text-slate-200 antialiased relative overflow-x-hidden" style={{"fontFamily": "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"}}>
      <div className="pointer-events-none fixed inset-0 z-10" style={{"background": "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, transparent 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)"}}></div>


          <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full opacity-40 blur-[140px]" style={{"background": "radial-gradient(closest-side, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.4) 30%, rgba(16,185,129,0.15) 60%, transparent 100%)"}}></div>
          </div>


          <div className="pointer-events-none fixed inset-0 z-5" style={{"background": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.04) 100%)"}}></div>


          <header className="fixed top-0 left-0 right-0 z-40 animate-fadeInUp opacity-0 border-0 backdrop-blur-3xl" style={{"animationDelay": "0.2s", "animationPlayState": "running"}}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex pt-5 pb-5 items-center justify-between">
                <div className="flex items-center gap-3">

                <span className="text-2xl font-semibold text-white tracking-tight mix-blend-screen invert-0">Cryptix</span>
              </div>
                <nav className="hidden md:flex items-center gap-8 text-[14.5px] text-neutral-300">
                  <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">Security</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">Trading</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">API</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">Enterprise</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">About</a>
                </nav>
                <div className="flex items-center gap-3">
                  <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13.5px] font-medium text-white/90 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="download" className="lucide lucide-download h-3.5 w-3.5"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                    Download App
                  </button>
                  <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/[0.08] backdrop-blur-sm transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="menu" className="lucide lucide-menu h-5 w-5 text-white/80"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </header>


          <section className="relative overflow-hidden z-20">

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-[10%] h-full opacity-30">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent animate-pulse" style={{"animation": "fallDown 10s ease-out infinite", "animationDelay": "0s"}}></div>
              </div>
              <div className="absolute top-0 left-[25%] h-full opacity-40">
                <div className="w-px h-40 bg-gradient-to-b from-transparent via-emerald-400/80 to-transparent" style={{"animation": "fallDown 10s ease-out infinite", "animationDelay": "0s"}}></div>
              </div>
              <div className="absolute top-0 left-[40%] h-full opacity-25">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" style={{"animation": "fallDown 10s ease-out infinite", "animationDelay": "1s"}}></div>
              </div>
              <div className="absolute top-0 left-[60%] h-full opacity-50">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/70 to-transparent" style={{"animation": "fallDown 10s ease-out infinite", "animationDelay": "1s"}}></div>
              </div>
              <div className="absolute top-0 left-[75%] h-full opacity-35">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent" style={{"animation": "fallDown 10s ease-out infinite", "animationDelay": "1s"}}></div>
              </div>
              <div className="absolute top-0 left-[90%] h-full opacity-20">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" style={{"animation": "fallDown 10s ease-out infinite", "animationDelay": "0s"}}></div>
              </div>
            </div>


            <div className="pointer-events-none absolute inset-0" style={{"background": "radial-gradient(ellipse 65% 55% at 50% 50%, transparent 0%, transparent 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.9) 95%)"}}></div>

            <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="animate-fadeInUp delay-100 sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl font-semibold text-white tracking-tight opacity-0 my-10" style={{"animationPlayState": "running"}}>Professional Grade  Management<br className="hidden sm:block" /><span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300" id="aura-emfmsid2u">Digital Asset</span></h1>
                <p className="opacity-0 animate-fadeInUp delay-200 mt-6 text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{"animationPlayState": "running"}}>
                  Experience institutional-grade security, lightning-fast transactions, and advanced portfolio analytics. 
                  Join over 2.3 million traders who trust CryptoVault with their digital assets.
                </p>
                <div className="opacity-0 animate-fadeInUp delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{"animationPlayState": "running"}}>
                  <a href="#contact" className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-green-400/60 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_40px_80px_rgba(16,185,129,0.18)] cursor-pointer uppercase text-base font-semibold text-white tracking-tight rounded-full pt-3 pr-3 pb-3 pl-3 shadow-2xl blur-none backdrop-blur-2xl" style={{"--main-color": "rgb(46, 213, 115)", "--main-bg-color": "rgba(46, 213, 116, 0.36)", "--pattern-color": "rgba(46, 213, 116, 0.073)", "filter": "hue-rotate(0deg)", "letterSpacing": "0.5rem", "backgroundSize": "cover, 15px 15px, 15px 15px", "backgroundPosition": "center center, center center, center center", "borderImage": "radial-gradient(circle, var(--main-color) 0%, rgba(0, 0, 0, 0) 100%) 1", "borderWidth": "1px 0px", "borderStyle": "solid", "color": "var(--main-color)", "padding": "1rem 3rem", "fontWeight": "700", "fontSize": "1.5rem"}} data-aura-onmouseover="this.style.backgroundSize = 'cover, 10px 10px, 10px 10px'" data-aura-onmouseout="this.style.backgroundSize = 'cover, 15px 15px, 15px 15px'" data-aura-onmousedown="this.style.filter = 'hue-rotate(250deg)'" data-aura-onmouseup="this.style.filter = 'hue-rotate(0deg)'">
          <span className="relative z-[1] text-sm">Get started</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right relative z-[1] w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" data-icon-replaced="true" style={{"color": "var(--main-color)"}}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-fadeInUp" style={{"animationPlayState": "running"}}></span>
          <span aria-hidden="true" className="pointer-events-none absolute inset-[1px] rounded-full" style={{"background": "radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 60%)"}}></span>
      </a>
                  <button className="group inline-flex gap-2 hover:bg-white/10 transition-all duration-300 hover:border-white/20 text-sm font-medium text-white/90 bg-white/25 mix-blend-overlay border-white/10 border rounded-full pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur-3xl items-center relative overflow-hidden" style={{"width": "auto", "height": "auto", "cursor": "pointer"}}>
        <span className="text relative z-10">Watch Demo</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="play" className="lucide lucide-play w-4 h-4 group-hover:scale-110 transition-transform duration-200 relative z-10"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>


        <div className="a l pointer-events-none absolute"></div>
        <div className="a r pointer-events-none absolute"></div>
        <div className="a t pointer-events-none absolute"></div>
        <div className="a b pointer-events-none absolute"></div>


      </button>
                </div>
                <div className="opacity-0 animate-fadeInUp delay-400 mt-12 flex flex-col items-center gap-4 text-sm text-slate-400" style={{"animationPlayState": "running"}}>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check w-4 h-4 text-emerald-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      <span className="">Bank-Grade Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap w-4 h-4 text-emerald-400"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                      <span className="">Instant Settlement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="users" className="lucide lucide-users w-4 h-4 text-emerald-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      <span className="">2.3M+ Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Trusted by professionals worldwide</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star w-4 h-4 fill-amber-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star w-4 h-4 fill-amber-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star w-4 h-4 fill-amber-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star w-4 h-4 fill-amber-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star w-4 h-4 fill-amber-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                      <span className="ml-2 font-medium">4.9/5</span>
                      <span className="text-slate-500">(12,847 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="relative sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4">
        <div className="animate-blurIn delay-500 relative overflow-hidden bg-gradient-to-br from-[#0e1311]/95 to-[#0b0f0d]/10 border-white/15 border rounded-2xl shadow-[0_0_80px_rgba(16,185,129,0.25)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 -top-1 h-10 rounded-t-2xl" style={{"background": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.4) 40%, rgba(16,185,129,0.1) 80%, transparent 100%)"}}></div>
          <div className="pointer-events-none absolute inset-x-4 top-1 h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6 lg:p-6 pt-4 pr-4 pb-4 pl-4" style={{"background": "rgba(255,255,255,0.05)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(255,255,255,0.1)", "borderRadius": "16px", "boxShadow": "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"}}>
            <aside className="xl:col-span-3 2xl:col-span-2">
              <div className="lg:p-5 bg-black/40 h-full border-white/15 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-inner backdrop-blur-sm" style={{"boxShadow": "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(0,0,0,0.3)"}}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-emerald-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-white">CryptoTrade</p>
              <p className="text-xs text-slate-400">Trading Suite</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1.5 text-sm">
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 bg-white/15 text-white font-medium backdrop-blur-sm shadow-sm border border-white/10 transition-all duration-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
            Dashboard
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:text-white transition-colors duration-200"><path d="M3 3v5l7-7"></path><path d="m14 5 4 4L7 20l-4-4"></path></svg>
            Trading
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:text-white transition-colors duration-200"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
            Portfolio
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:text-white transition-colors duration-200"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
            Analytics
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:text-white transition-colors duration-200"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
            History
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:text-white transition-colors duration-200"><path d="M9 12l2 2 4-4"></path><path d="M21 12c-.714 0-1.263-.008-1.263 0 0 4.5-3.5 7.5-7.66 8.95a1 1 0  1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v6"></path></svg>
            Security
          </a>
        </nav>

        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="ring-2 ring-emerald-400/40 flex w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40430c9b-2a63-4dcf-b77b-a5d18739f948_320w.jpg)] bg-cover rounded-full items-center justify-center">

            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">john@example.com</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Account Status</span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-emerald-400 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.8)]"></div>
                <span className="text-emerald-300">Pro</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">2FA Status</span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-300">Active</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Last Sync</span>
              <span className="text-slate-300">2 min ago</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 group-hover:text-emerald-400 transition-colors duration-200">
                <path d="M9 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16,17 21,12 16,7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
              Sign Out
            </button>
          </div>
        </div>
            </div></aside>

            <main className="xl:col-span-9 2xl:col-span-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span>Trading</span>
                    <span>/</span>
                    <span>Dashboard</span>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">Main Dashboard</h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    <input className="w-full sm:w-48 lg:w-64 rounded-lg border border-white/15 bg-white/10 pl-9 pr-4 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm transition-all duration-200" placeholder="Search..." />
                  </div>
                  <button className="rounded-lg p-2.5 hover:bg-white/10 backdrop-blur-sm transition-colors duration-200 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-300"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full animate-pulse"></span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm relative overflow-hidden shadow-lg" style={{"boxShadow": "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 30px rgba(16,185,129,0.1)"}}>
                  <div className="pointer-events-none absolute inset-1 rounded-lg" style={{"background": "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(16,185,129,0.12), transparent 70%)"}}></div>

                  <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="">
                      <p className="text-sm text-slate-400 font-medium">Balance</p>
                      <div className="mt-2 flex flex-wrap items-baseline gap-3">
                        <span className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">€22,193.05</span>
                        <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">+47.3%</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="hidden sm:flex items-center gap-2">
                        <button className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10">1D</button>
                        <button className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10">7D</button>
                        <button className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10">1M</button>
                        <button className="rounded-lg px-3 py-2 text-sm bg-white text-black border border-white/10">1Y</button>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <div className="relative h-48 lg:h-56">
                      <canvas id="mainChart" className="w-full h-full" width="1172" height="448" style={{"display": "block", "boxSizing": "border-box", "height": "224px", "width": "586px"}}></canvas>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
                      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <p className="text-slate-400">High</p>
                        <p className="mt-1 text-white font-medium">€25,400</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <p className="text-slate-400">Low</p>
                        <p className="mt-1 text-white font-medium">€14,800</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <p className="text-slate-400">Avg. Monthly</p>
                        <p className="mt-1 text-white font-medium">+3.9%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-white/15 bg-black/40 p-5 backdrop-blur-sm shadow-lg" style={{"boxShadow": "inset 0 1px 0 rgba(255,255,255,0.1)"}}>
                  <h3 className="text-base font-semibold tracking-tight text-white mb-5">Portfolio Distribution</h3>
                  <div className="relative h-48">
                    <canvas id="pieChart" className="w-full h-full" width="528" height="384" style={{"display": "block", "boxSizing": "border-box", "height": "192px", "width": "264px"}}></canvas>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{"background": "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.6) 100%)"}}></div>
                        <span className="text-sm text-slate-300">Bitcoin</span>
                      </div>
                      <span className="text-sm text-white font-medium">45.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{"background": "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 100%)"}}></div>
                        <span className="text-sm text-slate-300">Ethereum</span>
                      </div>
                      <span className="text-sm text-white font-medium">32.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                        <span className="text-sm text-slate-300">USDC</span>
                      </div>
                      <span className="text-sm text-white font-medium">14.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                        <span className="text-sm text-slate-300">Others</span>
                      </div>
                      <span className="text-sm text-white font-medium">7.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>


      </div>
          </section>


          <section className="relative overflow-hidden z-20">

        <div className="pointer-events-none absolute inset-0" style={{"backgroundImage": "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),\n      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", "backgroundSize": "260px 260px"}}></div>


        <div className="pointer-events-none absolute inset-0 z-10" style={{"background": "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.8) 100%)"}}></div>


        <svg id="connection-svg" className="pointer-events-none absolute inset-0 w-full h-full z-20" aria-hidden="true">
          <defs>

          </defs>
          <path id="connection-path" d="M 613.328125,861.9296875 C 613.328125,961.9296875 773.32890625,961.9296875 879.99609375,962.49609375
                         S 1146.6640625,963.0625 1146.6640625,1063.0625" fill="none" stroke="rgba(16,185,129,0.28)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 8" filter="url(#soft-glow)"></path>

          <circle id="connection-start" r="4" cx="613.328125" cy="861.9296875" fill="rgba(16,185,129,0.9)" opacity="0.9"></circle>
          <circle id="node-mid" r="3.5" cx="879.99609375" cy="962.49609375" fill="rgba(16,185,129,0.7)"></circle>
          <circle id="connection-end" r="4" cx="1146.6640625" cy="1063.0625" fill="rgba(16,185,129,0.9)" opacity="0.9"></circle>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-24 space-y-24 z-30">

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="5" r="2"></circle>
                <path d="M12 7v4"></path>
              </svg>
              How It Works
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Deploy anywhere. <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300" id="aura-emfmsi6g5">Access everywhere.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
              Choose your deployment model and access your secure vault from any environment, whether self-hosted or managed cloud.
            </p>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12" role="region" aria-labelledby="feature-1-heading">

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-[0_0_60px_rgba(16,185,129,0.15)]">

                <div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60"></span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-white/60 font-mono">vaultic-deploy.local</span>
                  </div>
                </div>


                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full h-full pt-10"><video src="https://cdn.midjourney.com/video/02265b95-7302-4fb0-bcef-44fde128e554/0.mp4" autoPlay="" loop="" muted="" playsInline="" className="absolute inset-0 w-full h-full object-cover"></video>

                  <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{"backgroundImage": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),\n                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", "backgroundSize": "34px 34px"}}></div>


                  <svg viewBox="0 0 1200 700" className="absolute inset-0 w-[24px] h-[24px]" aria-hidden="true" strokeWidth="2" data-icon-replaced="true" style={{"width": "24px", "height": "24px", "color": "rgb(226, 232, 240)"}}>
                    <defs>

                    </defs>


                    <line x1="600" y1="70" x2="600" y2="630" stroke="rgba(110,231,183,0.15)" strokeWidth="2" strokeDasharray="6 12"></line>


                    <g transform="translate(320,330)">
                      <g filter="url(#soft-glow)">
                        <rect x="-160" y="-140" width="240" height="240" rx="24" fill="none" stroke="rgba(110,231,183,0.28)" strokeWidth="2"></rect>
                        <rect x="-140" y="-120" width="200" height="200" rx="20" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="2"></rect>
                      </g>

                      <g>
                        <polygon points="-40,-50 40,-10 40,70 -40,30" fill="rgba(16,185,129,0.18)" stroke="rgba(110,231,183,0.55)"></polygon>
                        <polygon points="-40,-50 0,-70 80,-30 40,-10" fill="rgba(16,185,129,0.18)" stroke="rgba(110,231,183,0.55)"></polygon>
                        <polygon points="40,-10 80,-30 80,50 40,70" fill="rgba(16,185,129,0.12)" stroke="rgba(110,231,183,0.45)"></polygon>
                      </g>

                      <g opacity="0.8">
                        <rect x="-110" y="90" width="160" height="8" rx="4" fill="rgba(110,231,183,0.25)"></rect>
                        <rect x="-110" y="110" width="120" height="8" rx="4" fill="rgba(110,231,183,0.18)"></rect>
                        <rect x="-110" y="130" width="90" height="8" rx="4" fill="rgba(110,231,183,0.12)"></rect>
                      </g>

                      <text x="0" y="180" text-anchor="middle" fill="rgba(110,231,183,0.9)" font-size="18" font-weight="500">Self-Hosted</text>
                    </g>


                    <g transform="translate(880,340)" filter="url(#soft-glow)">
                      <path d="M-80 30a70 70 0 1 1 130-50a55 55 0 0 1 20 105h-140a45 45 0 0 1 -10 -55z" fill="rgba(16,185,129,0.15)" stroke="rgba(110,231,183,0.45)" strokeWidth="2"></path>

                      <circle cx="-40" cy="20" r="10" fill="rgba(16,185,129,0.8)"></circle>
                      <circle cx="20" cy="10" r="10" fill="rgba(16,185,129,0.8)"></circle>
                      <circle cx="-5" cy="50" r="10" fill="rgba(16,185,129,0.8)"></circle>

                      <line x1="-40" y1="20" x2="20" y2="10" stroke="rgba(110,231,183,0.45)" strokeWidth="2"></line>
                      <line x1="-5" y1="50" x2="20" y2="10" stroke="rgba(110,231,183,0.45)" strokeWidth="2"></line>
                      <line x1="-5" y1="50" x2="-40" y2="20" stroke="rgba(110,231,183,0.45)" strokeWidth="2"></line>

                      <text x="0" y="150" text-anchor="middle" fill="rgba(110,231,183,0.9)" font-size="18" font-weight="500">Managed Cloud</text>
                    </g>


                    <g stroke="rgba(110,231,183,0.22)" strokeWidth="2" fill="none">
                      <path d="M480 330 C 560 330 640 330 720 330" strokeDasharray="6 10"></path>
                      <path d="M480 360 C 560 360 640 360 720 360" strokeDasharray="6 10"></path>
                      <path d="M480 390 C 560 390 640 390 720 390" strokeDasharray="6 10"></path>
                    </g>


                    <g transform="translate(600,200)">
                      <text x="0" y="-10" text-anchor="middle" fill="rgba(110,231,183,0.8)" font-size="16" font-weight="500">Choose Your Deployment</text>
                      <path d="M-30 20 L30 20 M25 15 L30 20 L25 25" stroke="rgba(110,231,183,0.6)" strokeWidth="2" fill="none"></path>
                    </g>
                  </svg>


                  <div id="anchor-a" className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-2">
                    <span className="block h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:col-span-5">
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                Self Hosted or Cloud
              </div>
              <h3 id="feature-1-heading" className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                You choose where data lives
              </h3>
              <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Deploy Vaultic on your own infrastructure for complete control, or use our secure managed cloud for zero-maintenance convenience. Your data, your choice.
              </p>

              <ul className="mt-8 space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300">Docker-ready deployment in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300">Cloud sync with isolated vault instances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300">Built-in updates with CLI auto-sync</span>
                </li>
              </ul>


              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  <span className="text-slate-400">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                  <span className="text-slate-400">&lt; 100ms Sync</span>
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12" role="region" aria-labelledby="feature-2-heading">

            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 17l6-6-6-6"></path>
                  <path d="M12 19h8"></path>
                </svg>
                Built for CLI &amp; Dev Environments
              </div>
              <h3 id="feature-2-heading" className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                Designed for developers, not users
              </h3>
              <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Interact with Vaultic entirely via terminal, scripts, or API. Built by developers who understand that the best tools stay out of your way.
              </p>

              <ul className="mt-8 space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300">Full-featured CLI interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300">Secure secrets in shell scripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300">RESTful API with SDK support</span>
                </li>
              </ul>


              <div className="text-sm font-mono bg-black/40 border-white/10 border rounded-lg mt-8 pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm overflow-hidden" style={{"height": "120px", "position": "relative"}}>


        <div style={{"animation": "scrollText 8s linear infinite", "position": "absolute", "whiteSpace": "nowrap"}} className="">
          <div className="flex gap-2 mb-2 items-center">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="text-slate-400 text-xs">Terminal</span>
        </div><div className="text-emerald-300 mb-1">
            <span className="text-slate-500">$</span> vault get api-key --env production
          </div>
          <div className="text-slate-400 mb-1">
            sk-proj-abc123...xyz789
          </div>
          <div className="text-emerald-300 mb-1">
            <span className="text-slate-500">$</span> vault set db-password --secure
          </div>
          <div className="text-slate-400 mb-1">
            Password stored securely
          </div>
          <div className="text-emerald-300 mb-1">
            <span className="text-slate-500">$</span> vault sync --all
          </div>
          <div className="text-slate-400 mb-1">
            ✓ Synced 42 secrets across 3 environments
          </div>
          <div className="text-emerald-300 mb-1">
            <span className="text-slate-500">$</span> vault backup create
          </div>
          <div className="text-slate-400 mb-1">
            Backup created: vault-backup-2024-01-15.enc
          </div>
        </div>


      </div>
            </div>


            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-[0_0_60px_rgba(16,185,129,0.15)]">

                <div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60"></span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-white/60 font-mono">terminal — zsh — 120x40</span>
                  </div>
                </div>


                <div className="relative aspect-[16/10] sm:aspect-[16/9] pt-10"><video src="https://cdn.midjourney.com/video/b684a978-25aa-4f71-9a00-4b906ffa9e86/0.mp4" autoPlay="" loop="" muted="" playsInline="" className="absolute inset-0 w-full h-full object-cover"></video>

                  <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{"backgroundImage": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),\n                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", "backgroundSize": "34px 34px"}}></div>


                  <svg viewBox="0 0 1200 700" className="absolute inset-0 w-[24px] h-[24px]" aria-hidden="true" strokeWidth="2" data-icon-replaced="true" style={{"width": "24px", "height": "24px", "color": "rgb(226, 232, 240)"}}>
                    <defs>

                    </defs>


                    <g transform="translate(250,220)" filter="url(#soft-glow)" className="">
                      <rect x="-120" y="-60" width="420" height="180" rx="18" fill="rgba(16,185,129,0.10)" stroke="rgba(110,231,183,0.35)" strokeWidth="2" className=""></rect>
                      <text x="-90" y="-10" fill="rgba(110,231,183,0.9)" font-size="44" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" letter-spacing="0.5">vault sync</text>
                      <text x="-90" y="40" fill="rgba(110,231,183,0.7)" font-size="28" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace">&gt; Syncing...</text>
                      <text x="-90" y="80" fill="rgba(110,231,183,0.5)" font-size="20" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace">✓ Connected to vault</text>
                    </g>


                    <g transform="translate(640,360)" filter="url(#soft-glow)">
                      <circle r="34" fill="rgba(16,185,129,0.25)" stroke="rgba(110,231,183,0.55)" strokeWidth="2"></circle>
                      <text x="-12" y="10" fill="rgba(110,231,183,0.95)" font-size="28" font-family="ui-monospace">API</text>
                    </g>


                    <g stroke="rgba(110,231,183,0.45)" strokeWidth="2">
                      <line x1="640" y1="360" x2="900" y2="260"></line>
                      <line x1="640" y1="360" x2="940" y2="380"></line>
                      <line x1="640" y1="360" x2="880" y2="510"></line>
                    </g>


                    <g filter="url(#soft-glow)" className="">
                      <g transform="translate(940,250)">
                        <rect x="-60" y="-25" width="120" height="50" rx="25" fill="rgba(16,185,129,0.15)" stroke="rgba(110,231,183,0.4)" strokeWidth="2"></rect>
                        <text x="0" y="5" text-anchor="middle" fill="rgba(110,231,183,0.9)" font-size="16" font-weight="500">Scripts</text>
                      </g>
                      <g transform="translate(1000,380)">
                        <rect x="-60" y="-25" width="120" height="50" rx="25" fill="rgba(16,185,129,0.15)" stroke="rgba(110,231,183,0.4)" strokeWidth="2"></rect>
                        <text x="0" y="5" text-anchor="middle" fill="rgba(110,231,183,0.9)" font-size="16" font-weight="500">Webhooks</text>
                      </g>
                      <g transform="translate(940,520)" className="">
                        <rect x="-60" y="-25" width="120" height="50" rx="25" fill="rgba(16,185,129,0.15)" stroke="rgba(110,231,183,0.4)" strokeWidth="2" className=""></rect>
                        <text x="0" y="5" text-anchor="middle" fill="rgba(110,231,183,0.9)" font-size="16" font-weight="500">CI/CD</text>
                      </g>
                    </g>
                  </svg>


                  <div id="anchor-b" className="absolute left-1/2 -translate-x-1/2 top-0 mt-2">
                    <span className="block h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="text-center py-12">
            <div className="inline-flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 hover:bg-emerald-400 transition-colors text-sm font-medium rounded-full pt-3 pr-6 pb-3 pl-6 relative overflow-hidden" style={{"--green": "#1BFD9C", "fontSize": "15px", "padding": "0.7em 2.7em", "letterSpacing": "0.06em", "position": "relative", "fontFamily": "inherit", "borderRadius": "2.6em", "overflow": "hidden", "lineHeight": "1.4em", "border": "2px solid var(--green)", "background": "linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%)", "color": "var(--green)", "boxShadow": "rgba(27, 253, 156, 0.4) 0px 0px 10px inset, rgba(27, 253, 156, 0.1) 0px 0px 9px 3px"}} data-aura-onmouseover="this.style.color='#82ffc9'; this.style.boxShadow='inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2)'; this.querySelector('.sweep-effect').style.transform='translateX(15em)';" data-aura-onmouseout="this.style.color='var(--green)'; this.style.boxShadow='inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1)'; this.querySelector('.sweep-effect').style.transform='translateX(-4em)';">
        <span className="sweep-effect" style={{"content": "&quot", "position": "absolute", "left": "-4em", "width": "4em", "height": "100%", "top": "0px", "background": "linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%, rgba(27, 253, 156, 0.1) 60%, transparent 100%)", "pointerEvents": "none"}}></span>
        Try Vaultic Now
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-300 border border-white/15 hover:bg-white/5 transition-colors">
                View Documentation
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-[16px] h-[16px]" filllinecap="round" data-icon-replaced="true" style={{"width": "16px", "height": "16px", "color": "rgb(203, 213, 225)"}}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
      </div>



      </section><section className="relative overflow-hidden z-20">
            <div className="relative max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">


        <div className="relative text-center">
          <h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">
            Why developers actually switch.
          </h2>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            Built for speed &amp; privacy. Everything else just… isn't.
          </p>
        </div>


        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 pt-2 pr-5 pb-2 pl-2 space-x-4 items-stretch">

          <div className="pointer-events-none hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <div className="relative h-full flex flex-col items-center">
              <span className="h-12 w-px rounded bg-emerald-400/25"></span>
              <div className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/40 text-sm font-medium text-emerald-300 tracking-tight">
                VS
              </div>
              <span className="flex-1 w-px rounded bg-emerald-400/20"></span>
            </div>
          </div>


          <div className="lg:col-span-6">
            <div className="relative sm:p-8 lg:p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-emerald-400/40 hover:bg-black/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:scale-[1.02] group bg-black/40 h-full border-emerald-400/20 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">

              <div className="pointer-events-none absolute inset-x-8 top-2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-emerald-400/40 transition-all duration-500"></div>
              <div className="pointer-events-none absolute inset-1 rounded-[22px] group-hover:shadow-[inset_0_0_0_2px_rgba(16,185,129,0.25)] transition-all duration-500" style={{"boxShadow": "inset 0 0 0 1px rgba(16,185,129,0.12)"}}></div>


              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{"background": "radial-gradient(circle at 50% 20%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)"}}></div>

              <div className="relative z-10 inline-flex gap-3 group-hover:bg-emerald-400/20 group-hover:ring-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-500 bg-emerald-400/10 ring-emerald-400/40 ring-1 rounded-2xl pt-2 pr-4 pb-2 pl-4 items-center group-hover:scale-105">

                <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-500">Vaultic</span>
              </div>

              <ul className="relative z-10 mt-8 space-y-5">
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Zero-knowledge encryption</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Instant cross-device sync</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" style={{"width": "14px", "height": "14px", "color": "rgb(52, 211, 153)"}}><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Terminal-first experience</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-200">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" style={{"width": "14px", "height": "14px", "color": "rgb(52, 211, 153)"}}><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Lightweight &amp; scalable</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-300">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Self-host or managed vault</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-[400ms]">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Usage-based fair pricing</span>
                </li>
              </ul>
            </div>
          </div>


          <div className="lg:col-span-6">
            <div className="relative sm:p-8 lg:p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-emerald-400/40 hover:bg-black/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:scale-[1.02] group bg-black/40 h-full border-emerald-400/20 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">

              <div className="pointer-events-none absolute inset-x-8 top-2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-emerald-400/40 transition-all duration-500"></div>
              <div className="pointer-events-none absolute inset-1 rounded-[22px] group-hover:shadow-[inset_0_0_0_2px_rgba(16,185,129,0.25)] transition-all duration-500" style={{"boxShadow": "inset 0 0 0 1px rgba(16,185,129,0.12)"}}></div>


              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{"background": "radial-gradient(circle at 50% 20%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)"}}></div>

              <div className="relative z-10 inline-flex gap-3 group-hover:bg-emerald-400/20 group-hover:ring-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-500 bg-emerald-400/10 ring-emerald-400/40 ring-1 rounded-2xl pt-2 pr-4 pb-2 pl-4 items-center group-hover:scale-105">

                <span className="text-2xl font-semibold text-white tracking-tight group-hover:text-emerald-50 transition-colors duration-500">Other</span>
              </div>

              <ul className="relative z-10 mt-8 space-y-5">
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="circle" className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Limited encryption</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="circle" className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Slow sync / laggy updates</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="circle" className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Bloated UIs, no CLI</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-200">
                  <span className="inline-flex items-center justify-center group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 bg-emerald-400/20 w-6 h-6 ring-emerald-400/40 ring-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="circle" className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Heavy, resource-hungry</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-300">
                  <span className="inline-flex items-center justify-center group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 bg-emerald-400/20 w-6 h-6 ring-emerald-400/40 ring-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="circle" className="lucide lucide-circle w-[14px] h-[14px]" data-icon-replaced="true" style={{"width": "14px", "height": "14px", "color": "rgb(52, 211, 153)"}}><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Cloud-only, no self-hosting</span>
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-[400ms]">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="circle" className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Overpriced per-seat models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section><section className="relative overflow-hidden z-20">


        <div className="relative max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="aura-emfms84tu">

          <div className="relative text-center max-w-4xl mx-auto">
            <h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">
              Pricing
            </h2>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
              Use Vaultic for free. Upgrade to connect a custom domain, unlock advanced features, and raise your limits.
            </p>


            <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
              <button id="seg-personal" className="px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200">
                Personal
              </button>
              <button id="seg-business" className="px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200">
                Business
              </button>
            </div>


            <div className="mt-6 flex items-center justify-center gap-3 text-sm">
              <span className="text-slate-400">Monthly</span>
              <button id="billingToggle" className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm transition-colors cursor-pointer" aria-pressed="false">
                <span className="absolute inset-0 rounded-full" style={{"background": "linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.25))"}}></span>
                <span className="z-10 inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300" style={{"transform": "translateX(4px)"}}></span>
              </button>
              <div className="inline-flex items-center gap-2">
                <span className="text-white">Yearly</span>
                <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-300 border border-emerald-400/30 bg-emerald-400/10">Save 20%</span>
              </div>
            </div>
          </div>


          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

            <div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-black/50 group cursor-pointer">
              <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-75" style={{"background": "radial-gradient(120% 100% at 0% 0%, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 60%)"}}></div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">Mini</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="uppercase billing-label">Monthly</span>
                    <button data-card-toggle="" className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/15">
                      <span className="absolute inset-0 rounded-full" style={{"background": "linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.2))"}}></span>
                      <span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{"transform": "translateX(4px)"}}></span>
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Landing pages are</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                    <span className="price" data-monthly="US$9" data-yearly="US$7">US$9</span>
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">2 pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10&nbsp;GB bandwidth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">Custom domain</span>
                  </li>
                </ul>

                <button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
                  Get started
                </button>
              </div>
            </div>


            <div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-black/50 group cursor-pointer">
              <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-75" style={{"background": "radial-gradient(120% 100% at 0% 0%, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 60%)"}}></div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">Basic</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="uppercase billing-label">Monthly</span>
                    <button data-card-toggle="" className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/15">
                      <span className="absolute inset-0 rounded-full" style={{"background": "linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.2))"}}></span>
                      <span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{"transform": "translateX(4px)"}}></span>
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Basic sites are</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                    <span className="price" data-monthly="US$20" data-yearly="US$16">US$20</span>
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">1,000 pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">50&nbsp;GB bandwidth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">Password protect</span>
                  </li>
                </ul>

                <button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
                  Get started
                </button>
              </div>
            </div>


            <div className="relative rounded-3xl border border-emerald-400/30 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer">
              <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{"background": "radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)"}}></div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">Pro</h3>
                    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-900 bg-emerald-300/95 shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">Popular</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="uppercase billing-label">Monthly</span>
                    <button data-card-toggle="" className="relative inline-flex h-5 w-9 items-center rounded-full border border-emerald-400/40 bg-emerald-400/20 cursor-pointer transition-colors duration-200 hover:bg-emerald-400/25">
                      <span className="absolute inset-0 rounded-full" style={{"background": "linear-gradient(90deg, rgba(16,185,129,0.45), rgba(110,231,183,0.35))"}}></span>
                      <span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{"transform": "translateX(4px)"}}></span>
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Growing sites are</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                    <span className="price" data-monthly="US$41" data-yearly="US$33">US$41</span>
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10,000 pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">100&nbsp;GB bandwidth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" className="lucide lucide-check w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>
                    </span>
                    <span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10 CMS collections</span>
                  </li>
                </ul>

                <button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-emerald-400/95 hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  Get started
                </button>
              </div>
            </div>
          </div>



        </div>



      </section>


          <footer className="relative overflow-hidden bg-black/10 border-white/10 border-t backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
            <div className="pointer-events-none absolute inset-0 backdrop-blur-xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-semibold text-white tracking-tight">Cryptix</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Professional-grade digital asset management platform trusted by millions of users worldwide. 
                    Secure, fast, and built for the modern crypto economy.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </a>
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                      </svg>
                    </a>
                  </div>
                </div>


                <div className="">
                  <h3 className="text-white font-medium mb-4">Product</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Enterprise</a></li>
                  </ul>
                </div>


                <div className="">
                  <h3 className="text-white font-medium mb-4">Resources</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Status</a></li>
                  </ul>
                </div>


                <div className="">
                  <h3 className="text-white font-medium mb-4">Company</h3>
                  <ul className="space-y-3 text-sm">
                    <li className=""><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm">
                  © 2024 Cryptix. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    All systems operational
                  </span>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">Status</a>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}