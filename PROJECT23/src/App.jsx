import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",
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
    "content": "\n      document.addEventListener(\"DOMContentLoaded\", () => {\n          gsap.registerPlugin(ScrollTrigger);\n          const headline = document.getElementById('hero-headline');\n          if (headline) {\n              const words = headline.innerText.trim().split(/\\s+/);\n              headline.innerHTML = '';\n              words.forEach(word => {\n                  const wordContainer = document.createElement('span');\n                  wordContainer.className = 'inline-block overflow-hidden align-top leading-[1.05] pb-[0.1em] -mb-[0.1em] mr-[0.25em]';\n                  const innerWord = document.createElement('span');\n                  innerWord.className = 'inline-block reveal-word will-change-transform';\n                  innerWord.innerText = word;\n                  wordContainer.appendChild(innerWord);\n                  headline.appendChild(wordContainer);\n              });\n              gsap.to('.reveal-word', {\n                  y: 0,\n                  duration: 1.2,\n                  stagger: 0.04,\n                  ease: \"power4.out\",\n                  scrollTrigger: {\n                      trigger: headline,\n                      start: \"top 85%\",\n                  }\n              });\n          }\n          const canvas = document.getElementById('mesh-canvas');\n          const gl = canvas.getContext('webgl');\n          if (gl) {\n              const resizeCanvas = () => {\n                  const rect = canvas.parentElement.getBoundingClientRect();\n                  canvas.width = rect.width * window.devicePixelRatio;\n                  canvas.height = rect.height * window.devicePixelRatio;\n                  gl.viewport(0, 0, canvas.width, canvas.height);\n              };\n              window.addEventListener('resize', resizeCanvas);\n              resizeCanvas();\n              const vsSource = `\n                  attribute vec2 position;\n                  varying vec2 vUv;\n                  void main() {\n                      vUv = position * 0.5 + 0.5;\n                      gl_Position = vec4(position, 0.0, 1.0);\n                  }\n              `;\n              const fsSource = `\n                  precision highp float;\n                  varying vec2 vUv;\n                  uniform float uTime;\n                  float random(vec2 st) {\n                      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\n                  }\n                  float noise(vec2 st) {\n                      vec2 i = floor(st);\n                      vec2 f = fract(st);\n                      float a = random(i);\n                      float b = random(i + vec2(1.0, 0.0));\n                      float c = random(i + vec2(0.0, 1.0));\n                      float d = random(i + vec2(1.0, 1.0));\n                      vec2 u = f * f * (3.0 - 2.0 * f);\n                      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n                  }\n                  void main() {\n                      vec2 uv = vUv;\n                      vec2 pos = vec2(uv * 1.5);\n                      float n1 = noise(pos + uTime * 0.2);\n                      float n2 = noise(pos + vec2(n1, n1) - uTime * 0.15);\n                      float n3 = noise(pos + vec2(n2, n2) + uTime * 0.1);\n                      vec3 color1 = vec3(0.18, 0.24, 0.17);\n                      vec3 color2 = vec3(0.83, 0.55, 0.36);\n                      vec3 color3 = vec3(0.29, 0.54, 0.54);\n                      vec3 color4 = vec3(0.92, 0.90, 0.85);\n                      vec3 finalColor = mix(color4, color3, n1);\n                      finalColor = mix(finalColor, color2, smoothstep(0.3, 0.7, n2));\n                      finalColor = mix(finalColor, color1, smoothstep(0.5, 1.0, n3));\n                      gl_FragColor = vec4(finalColor, 1.0);\n                  }\n              `;\n              const compileShader = (type, source) => {\n                  const shader = gl.createShader(type);\n                  gl.shaderSource(shader, source);\n                  gl.compileShader(shader);\n                  return shader;\n              };\n              const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);\n              const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);\n              const program = gl.createProgram();\n              gl.attachShader(program, vertexShader);\n              gl.attachShader(program, fragmentShader);\n              gl.linkProgram(program);\n              gl.useProgram(program);\n              const vertices = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]);\n              const buffer = gl.createBuffer();\n              gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n              gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);\n              const positionLocation = gl.getAttribLocation(program, 'position');\n              gl.enableVertexAttribArray(positionLocation);\n              gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);\n              const timeLocation = gl.getUniformLocation(program, 'uTime');\n              let startTime = performance.now();\n              const render = (time) => {\n                  const elapsedTime = (time - startTime) * 0.001;\n                  gl.uniform1f(timeLocation, elapsedTime);\n                  gl.drawArrays(gl.TRIANGLES, 0, 6);\n                  requestAnimationFrame(render);\n              };\n              requestAnimationFrame(render);\n          }\n      });\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (() => {\n        const initViewObserver = () => {\n          const selectors = [\n            'header > div',\n            'header nav a',\n            'main > div > span',\n            'main > div > h1',\n            'main > div > p',\n            'main > div > a',\n            'main > div:nth-child(2)',\n            'section h2',\n            'section h3',\n            'section p',\n            'section form > *',\n            'section .grid > div',\n            'section .space-y-6 > div',\n            'footer > div > *'\n          ];\n\n          const targets = [...new Set(selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector))))]\n            .filter((element) => !element.closest('.fixed') && !element.closest('script, style'));\n\n          const groups = new Map();\n          targets.forEach((element) => {\n            const group = element.closest('header, main, section, footer') || document.body;\n            if (!groups.has(group)) groups.set(group, []);\n            groups.get(group).push(element);\n          });\n\n          groups.forEach((items) => {\n            items.forEach((element, index) => {\n              element.classList.add('aura-view-reveal');\n              element.style.setProperty('--aura-delay', `${Math.min(index * 55, 440)}ms`);\n\n              if (element.matches('main > div:nth-child(2), section .grid > div:nth-child(even)')) {\n                element.style.setProperty('--aura-x', '16px');\n                element.style.setProperty('--aura-y', '0px');\n              } else if (element.matches('section .grid > div:nth-child(odd)')) {\n                element.style.setProperty('--aura-x', '-16px');\n                element.style.setProperty('--aura-y', '0px');\n              }\n            });\n          });\n\n          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n          if (prefersReducedMotion || !('IntersectionObserver' in window)) {\n            targets.forEach((element) => element.classList.add('is-visible'));\n            return;\n          }\n\n          const observer = new IntersectionObserver((entries) => {\n            entries.forEach((entry) => {\n              if (entry.isIntersecting) {\n                entry.target.classList.add('is-visible');\n                observer.unobserve(entry.target);\n              }\n            });\n          }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });\n\n          targets.forEach((element) => observer.observe(element));\n        };\n\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', initViewObserver);\n        } else {\n          initViewObserver();\n        }\n      })();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-[#F6F3EC] text-[#111827] font-sans antialiased overflow-x-hidden selection:bg-[#2B3624] selection:text-[#F6F3EC]";
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
    <div className="aura-source-body bg-[#F6F3EC] text-[#111827] font-sans antialiased overflow-x-hidden selection:bg-[#2B3624] selection:text-[#F6F3EC]">
      <div className="fixed inset-0 pointer-events-none z-50 flex justify-center">
            <div className="w-full max-w-[1400px] h-full border-x border-[#2B3624]/[0.06] relative">
              <div className="absolute top-0 -left-[3px] w-1.5 h-1.5 border border-[#2B3624]/20 bg-[#F6F3EC]"></div>
              <div className="absolute top-[88px] -left-[3px] w-1.5 h-1.5 border border-[#2B3624]/20 bg-[#F6F3EC]"></div>
              <div className="absolute top-0 -right-[3px] w-1.5 h-1.5 border border-[#2B3624]/20 bg-[#F6F3EC]"></div>
              <div className="absolute top-[88px] -right-[3px] w-1.5 h-1.5 border border-[#2B3624]/20 bg-[#F6F3EC]"></div>
              <div className="absolute bottom-0 -left-[3px] w-1.5 h-1.5 border border-[#2B3624]/20 bg-[#F6F3EC]"></div>
              <div className="absolute bottom-0 -right-[3px] w-1.5 h-1.5 border border-[#2B3624]/20 bg-[#F6F3EC]"></div>
            </div>
          </div>
          <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col min-h-screen">
            <header className="flex items-center justify-between py-8 border-b border-[#2B3624]/[0.06] relative z-10">
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:code-linear" width="40" height="40" style={{"color": "#2B3624", "strokeWidth": "1.5"}}></iconify-icon>
              </div>
              <nav className="hidden md:flex items-center gap-10 text-sm text-[#4B5563] font-medium tracking-wide">
                <a href="#" className="hover:text-[#2B3624] transition-colors">
                  Solutions
                </a>
                <a href="#" className="hover:text-[#2B3624] transition-colors">
                  Platform
                </a>
                <a href="#" className="hover:text-[#2B3624] transition-colors">
                  Resources
                </a>
                <a href="#" className="hover:text-[#2B3624] transition-colors">Plans</a>
              </nav>
              <div className="flex items-center gap-6">
                <a href="#" className="hidden sm:block text-sm text-[#4B5563] font-medium hover:text-[#2B3624] transition-colors">
                  Log in
                </a>
                <a href="#" className="bg-[#2B3624] text-[#F6F3EC] text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#1f281a] transition-colors tracking-wide">
                  Start Building
                </a>
              </div>
            </header>
            <main className="flex-1 flex flex-col lg:flex-row items-center pt-16 lg:pt-24 pb-20 gap-16 lg:gap-24 relative z-10">
              <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
                <span className="text-sm text-[#6A7165] font-medium tracking-wide mb-6 uppercase">
                  Announcing next-gen engine
                </span>
                <h1 id="hero-headline" className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] text-[#2B3624] mb-8 font-light tracking-tighter">
                  Intelligent cores for autonomous systems
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-lg mb-10 font-normal">
                  The fundamental infrastructure for systems that perceive, reason,
                  and execute without intervention. Built for reliability at scale. No
                  hand-holding, no context loss, no hallucinated APIs. Just reliable
                  execution.
                </p>
                <a href="#" className="bg-[#2B3624] text-[#F6F3EC] text-sm font-medium px-6 py-3 rounded-md hover:bg-[#1f281a] transition-colors shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                  Deploy Now
                </a>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="bg-[#EBE6DA] p-4 sm:p-5 lg:p-6 rounded-sm w-full max-w-[600px] relative">
                  <div className="relative w-full aspect-square bg-gray-200 rounded-sm overflow-hidden">
                    <canvas id="mesh-canvas" className="absolute inset-0 w-full h-full object-cover" style={{"filter": "hue-rotate(35deg) saturate(0.75) brightness(0.95)"}}></canvas>
                    <div className="absolute inset-6 sm:inset-10 lg:inset-12 bg-white rounded-md p-6 sm:p-8 flex flex-col justify-between shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                      <div className="flex flex-col h-full">
                        <div className="flex gap-1.5 mb-6">
                          <div className="w-2 h-2 bg-[#2B3624] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#2B3624] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#2B3624] rounded-full"></div>
                        </div>
                        <pre className="text-[10px] sm:text-xs text-[#4B5563] font-mono whitespace-pre-wrap leading-[1.6] flex-1 overflow-hidden"><span className="text-[#8B9285]">// Core Execution Processor - Async</span>
      <span className="text-[#2B3624]">async function</span> <span className="text-[#8A7A3C]">evaluateState</span>(&#123; telemetry &#125;) &#123;
        <span className="text-[#2B3624]">if</span> (!telemetry) <span className="text-[#2B3624]">return</span> null;

        <span className="text-[#2B3624]">const</span> [state] = <span className="text-[#2B3624]">await</span> dbQuery`
          INSERT INTO active_states (metrics)
          VALUES ($&#123;telemetry&#125;)
          RETURNING id, metrics, timestamp
        `;

        <span className="text-[#2B3624]">const</span> trajectory = <span className="text-[#2B3624]">await</span> dbQuery`
          SELECT id, vectors, timestamp
          FROM historical_states
          ORDER BY timestamp DESC
        `;

        <span className="text-[#2B3624]">return</span> &#123; state, trajectory &#125;;
      &#125;</pre>
                        <div className="flex justify-end mt-4">
                          <button className="bg-[#5B6856] text-white text-[11px] font-medium px-4 py-1.5 rounded uppercase tracking-wider hover:bg-[#2B3624] transition-colors">
                            Execute
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#8B9285] font-medium tracking-widest uppercase mt-8 text-center">
                  DIAGRAM 01 - SYSTEM INITIALIZATION
                </p>
              </div>
            </main>
            <section className="pt-20 pb-16 border-t border-[#2B3624]/10 bg-[#1D2718] -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24 text-[#F6F3EC]">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-light tracking-tighter text-[#F6F3EC] mb-12">
                  Features
                </h2>
                <div className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 shadow-sm">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/[0.08] shadow-sm">
                        <iconify-icon icon="lucide:zap" width="20" height="20" style={{"color": "#E8EE9B"}}></iconify-icon>
                      </div>
                      <h3 className="font-medium text-[#F6F3EC] mb-2 text-lg">
                        Time block all the things
                      </h3>
                      <p className="text-[#D8D0B8] text-sm leading-relaxed">
                        Drag tasks into your calendar to block out the time to do the
                        work
                      </p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 shadow-sm">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/[0.08] shadow-sm">
                        <iconify-icon icon="lucide:clipboard-edit" width="20" height="20" style={{"color": "#E8EE9B"}}></iconify-icon>
                      </div>
                      <h3 className="font-medium text-[#F6F3EC] mb-2 text-lg">
                        Effortlessly keep track of notes
                      </h3>
                      <p className="text-[#D8D0B8] text-sm leading-relaxed">
                        Keep notes for every meeting with zero maintenance from you
                      </p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 shadow-sm">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/[0.08] shadow-sm">
                        <iconify-icon icon="lucide:target" width="20" height="20" style={{"color": "#E8EE9B"}}></iconify-icon>
                      </div>
                      <h3 className="font-medium text-[#F6F3EC] mb-2 text-lg">
                        Avoid interruptions and stay focused
                      </h3>
                      <div className="text-[#D8D0B8] text-sm leading-relaxed space-y-1.5 mt-3">
                        <div className="flex items-center gap-2">
                          Slack, Microsoft Teams
                          <span className="bg-[#E8EE9B]/10 text-[#E8EE9B] text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                            Soon
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          Discord
                          <span className="bg-[#E8EE9B]/10 text-[#E8EE9B] text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                            Soon
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden h-[360px] relative shadow-sm">
                      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{"backgroundImage": "radial-gradient(rgba(246,243,236,0.55) 1px, transparent 1px)", "backgroundSize": "24px 24px"}}></div>


                      <div className="absolute left-6 top-8 bottom-0 w-32 border-r border-[#2B3624]/10 flex flex-col gap-2">
                        <div className="h-16 bg-white/60 border border-[#2B3624]/10 rounded-lg p-2.5 text-[10px] text-[#6A7165] shadow-sm">
                          <div className="font-semibold text-[#2B3624] mb-0.5">
                            1:1 Maria
                          </div>
                          <div>10 - 11AM</div>
                        </div>
                        <div className="h-20 bg-[#2B3624]/5 border-l-2 border-[#2B3624] rounded-r-lg p-2.5 text-[10px] text-[#6A7165]">
                          <div className="font-semibold text-[#2B3624] flex items-center gap-1.5 mb-0.5">
                            <iconify-icon icon="lucide:users" className="text-xs"></iconify-icon>
                            Team lunch
                          </div>
                          <div>12 - 1PM</div>
                        </div>
                        <div className="h-24 bg-[#2B3624]/10 border-l-2 border-[#2B3624] rounded-r-lg p-2.5 text-[10px] text-[#2B3624]">
                          <div className="font-semibold flex items-center gap-1.5 mb-0.5">
                            <iconify-icon icon="lucide:headphones" className="text-xs"></iconify-icon>
                            Coding
                          </div>
                          <div>3 - 5PM</div>
                        </div>
                      </div>

                      <div className="absolute left-[136px] right-8 bottom-0 top-12 bg-white border border-[#2B3624]/10 rounded-t-xl shadow-lg p-5 z-10 flex flex-col">
                        <div className="flex justify-between items-center mb-5 border-b border-[#2B3624]/5 pb-3">
                          <div className="text-[10px] font-semibold text-[#6A7165] uppercase tracking-wider">
                            Tasks
                          </div>
                          <div className="bg-[#2B3624]/5 text-[#2B3624] text-[10px] px-2.5 py-1 rounded-full font-semibold border border-[#2B3624]/10">
                            Try it yourself
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-[#2B3624] mb-4 flex items-center gap-1.5">
                          <iconify-icon icon="lucide:chevron-down" className="text-[#6A7165] text-sm"></iconify-icon>
                          MY TASKS IN MY WORKSPACE
                          <span className="bg-[#2B3624]/10 text-[#2B3624] w-4 h-4 rounded-full flex items-center justify-center text-[10px] ml-1">
                            6
                          </span>
                        </div>
                        <div className="space-y-3.5">
                          <div className="flex items-center gap-3 text-xs text-[#4B5563] font-medium">
                            <div className="w-3.5 h-3.5 rounded-[3px] border border-[#2B3624]/20 flex-shrink-0"></div>
                            <iconify-icon icon="lucide:zap" className="text-[#2B3624] flex-shrink-0 text-sm"></iconify-icon>
                            Call doctor
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[#4B5563] font-medium">
                            <div className="w-3.5 h-3.5 rounded-[3px] border border-[#2B3624]/20 flex-shrink-0"></div>
                            <iconify-icon icon="lucide:zap" className="text-[#2B3624] flex-shrink-0 text-sm"></iconify-icon>
                            Work on RFC Proposal
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[#4B5563] font-medium">
                            <div className="w-3.5 h-3.5 rounded-[3px] border border-[#2B3624]/20 flex-shrink-0"></div>
                            <iconify-icon icon="lucide:zap" className="text-[#2B3624] flex-shrink-0 text-sm"></iconify-icon>
                            FW Lawyer Calls
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[#4B5563] font-medium">
                            <div className="w-3.5 h-3.5 rounded-[3px] border border-[#2B3624]/20 flex-shrink-0"></div>
                            <iconify-icon icon="lucide:zap" className="text-[#2B3624] flex-shrink-0 text-sm"></iconify-icon>
                            Reimbursement due from...
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[#4B5563] font-medium">
                            <div className="w-3.5 h-3.5 rounded-[3px] border border-[#2B3624]/20 flex-shrink-0"></div>
                            <iconify-icon icon="lucide:zap" className="text-[#2B3624] flex-shrink-0 text-sm"></iconify-icon>
                            Read: "The Future of the...
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden h-[360px] relative flex justify-center shadow-sm">
                      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{"backgroundImage": "radial-gradient(rgba(246,243,236,0.55) 1px, transparent 1px)", "backgroundSize": "24px 24px"}}></div>


                      <div className="absolute right-8 top-28 w-44 bg-white/80 border border-[#2B3624]/10 rounded-lg p-2.5 flex items-center gap-2 shadow-sm backdrop-blur-sm z-0">
                        <div className="w-4 h-4 bg-[#2B3624]/10 rounded flex items-center justify-center flex-shrink-0">
                          <iconify-icon icon="lucide:zap" className="text-[#2B3624] text-[10px]"></iconify-icon>
                        </div>
                        <div className="text-[10px] font-semibold text-[#2B3624] truncate">
                          Meet with Oguz Yag...
                        </div>
                      </div>

                      <div className="absolute w-[280px] sm:w-[320px] bottom-0 top-12 bg-white border border-[#2B3624]/10 rounded-t-xl shadow-xl p-5 z-10 flex flex-col">
                        <div className="flex justify-end gap-2 mb-5">
                          <button className="bg-[#F6F3EC] border border-[#2B3624]/5 text-[#4B5563] text-[11px] px-3 py-1.5 rounded-md font-semibold hover:bg-[#EBE6DA] transition-colors">
                            Done
                          </button>
                          <button className="bg-[#2B3624] text-[#F6F3EC] text-[11px] px-3 py-1.5 rounded-md font-semibold flex items-center gap-1.5 hover:bg-[#1f281a] transition-colors">
                            Save
                            <div className="flex gap-0.5">
                              <span className="bg-white/20 px-1 rounded-[3px] text-[9px] font-mono">
                                ⌘
                              </span>
                              <span className="bg-white/20 px-1 rounded-[3px] text-[9px] font-mono">
                                S
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className="text-sm font-semibold text-[#2B3624] mb-4 pb-3 border-b border-[#2B3624]/5">
                          Meet with Oguz Yagiz Kara
                        </div>

                        <div className="flex items-center justify-between mb-5 bg-[#F6F3EC] p-3 rounded-lg border border-[#2B3624]/5">
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#2B3624]">
                            <div className="w-4 h-4 rounded-sm bg-[#7C8D52] flex items-center justify-center relative overflow-hidden">
                              <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-0.5"></div>
                              <div className="w-1.5 h-1.5 bg-white/70 rounded-full absolute left-1.5"></div>
                              <div className="w-1.5 h-1.5 bg-white/40 rounded-full absolute left-2.5"></div>
                            </div>
                            Asana
                          </div>
                          <iconify-icon icon="lucide:external-link" className="text-[#6A7165] text-sm"></iconify-icon>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-[#6A7165] font-medium">
                              Estimate
                            </div>
                            <div className="flex gap-1 bg-[#F6F3EC] p-1 rounded-md border border-[#2B3624]/5">
                              <div className="px-2.5 py-1 text-[11px] text-[#4B5563] font-medium rounded cursor-pointer hover:bg-white/50">
                                15m
                              </div>
                              <div className="px-2.5 py-1 text-[11px] bg-white text-[#2B3624] rounded shadow-sm font-semibold border border-[#2B3624]/5">
                                30m
                              </div>
                              <div className="px-2.5 py-1 text-[11px] text-[#4B5563] font-medium rounded cursor-pointer hover:bg-white/50">
                                1hr
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-[#6A7165] font-medium">
                              Starting from
                            </div>
                            <div className="text-[11px] text-[#2B3624] font-semibold bg-[#F6F3EC] px-3 py-1.5 rounded-md border border-[#2B3624]/5 cursor-pointer hover:bg-[#EBE6DA]/50">
                              Mon 22 May
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-[#6A7165] font-medium">
                              Deadline of
                            </div>
                            <div className="text-[11px] text-[#2B3624] font-semibold bg-[#F6F3EC] px-3 py-1.5 rounded-md border border-[#2B3624]/5 cursor-pointer hover:bg-[#EBE6DA]/50">
                              Sun 16 Apr
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-4">
                          <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#6A7165] font-semibold bg-[#F6F3EC] py-2.5 rounded-lg border border-[#2B3624]/5">
                            <iconify-icon icon="lucide:zap" className="text-[#2B3624] text-xs"></iconify-icon>
                            Auto scheduled for 22 May 1PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-16 sm:py-24 border-t border-[#2B3624]/[0.06]">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-light tracking-tighter text-[#2B3624] mb-5">
                    How teams use Autonomous Systems Engine
                  </h2>
                  <p className="text-[#6A7165] text-lg sm:text-xl max-w-2xl mx-auto">
                    The engine supports all types of autonomous applications. From
                    perception and reasoning to reliable execution and state
                    replication.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="flex flex-col gap-6">
                    <div className="bg-[#EBE6DA] p-8 rounded-2xl flex flex-col h-full border border-[#2B3624]/[0.03]">
                      <div className="text-sm text-[#6A7165] mb-2 font-medium">
                        Streamline perception
                      </div>
                      <div className="text-lg font-medium text-[#2B3624] leading-snug mb-8">
                        Enable systems to quickly map complex environments without
                        worrying about sensor noise.
                      </div>
                      <div className="bg-[#F6F3EC] rounded-xl p-4 mt-auto border border-[#2B3624]/[0.04]">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <div className="px-2.5 py-1.5 bg-white rounded-md text-xs font-medium text-[#4B5563] shadow-sm border border-black/5 flex items-center gap-1.5">
                            <iconify-icon icon="solar:hashtag-linear"></iconify-icon>
                            lidar
                          </div>
                          <div className="px-2.5 py-1.5 bg-white rounded-md text-xs font-medium text-[#4B5563] shadow-sm border border-black/5 flex items-center gap-1.5">
                            <iconify-icon icon="solar:hashtag-linear"></iconify-icon>
                            camera
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-2.5 py-1.5 bg-white rounded-md text-xs font-medium text-[#4B5563] shadow-sm border border-black/5 flex items-center gap-1.5">
                            <iconify-icon icon="solar:document-linear"></iconify-icon>
                            Fusion template
                          </div>
                          <div className="px-2.5 py-1.5 bg-transparent rounded-md text-xs font-medium text-[#6A7165] flex items-center gap-1.5">
                            <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                            SLA set to 24h
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#EBE6DA] p-8 rounded-2xl flex flex-col h-full border border-[#2B3624]/[0.03]">
                      <div className="text-sm text-[#6A7165] mb-2 font-medium">
                        Standardize reasoning
                      </div>
                      <div className="text-lg font-medium text-[#2B3624] leading-snug mb-8">
                        Configure decision templates with concrete instructions,
                        constraints, and fallback logic.
                      </div>
                      <div className="bg-[#F6F3EC] rounded-xl p-5 mt-auto border border-[#2B3624]/[0.04]">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-7 h-7 bg-[#2B3624] rounded flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            A
                          </div>
                          <div className="text-sm font-semibold text-[#2B3624]">
                            Reasoning constraint
                          </div>
                        </div>
                        <div className="text-[11px] font-semibold text-[#6A7165] uppercase tracking-wider mb-3">
                          Constraints
                        </div>
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-3">
                            <div className="w-3.5 h-3.5 rounded-sm border border-[#2B3624]/20 flex items-center justify-center">
                              <div className="w-2 h-2 bg-[#2B3624] rounded-[1px]"></div>
                            </div>
                            <div className="text-xs text-[#4B5563] font-medium">
                              Safety override
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3.5 h-3.5 rounded-sm border border-[#2B3624]/20 flex items-center justify-center"></div>
                            <div className="text-xs text-[#4B5563] font-medium">
                              Thermal limit
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3.5 h-3.5 rounded-sm border border-[#2B3624]/20 flex items-center justify-center"></div>
                            <div className="text-xs text-[#4B5563] font-medium">
                              Energy conservation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="bg-[#EBE6DA] p-8 rounded-2xl flex flex-col h-full border border-[#2B3624]/[0.03]">
                      <div className="text-sm text-[#6A7165] mb-2 font-medium">
                        Build a control desk
                      </div>
                      <div className="text-lg font-medium text-[#2B3624] leading-snug mb-8">
                        Turn any anomaly log into an automated ticket by reacting with
                        a single command.
                      </div>
                      <div className="space-y-3 mt-auto">
                        <div className="bg-[#F6F3EC] p-3.5 rounded-xl border border-[#2B3624]/[0.04] shadow-sm">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                                <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-full h-full object-cover" />
                              </div>
                              <div className="text-xs font-semibold text-[#2B3624]">
                                System A
                              </div>
                            </div>
                            <div className="text-[10px] text-[#6A7165]">16:25</div>
                          </div>
                          <div className="text-xs text-[#4B5563] ml-7">
                            Actuator thermal limit reached
                          </div>
                          <div className="ml-7 mt-2 flex gap-1">
                            <span className="bg-[#EBE6DA] text-[#4B5563] text-[10px] px-1.5 py-0.5 rounded border border-[#2B3624]/[0.05] font-medium">
                              🎫 1
                            </span>
                          </div>
                        </div>
                        <div className="bg-[#F6F3EC] p-3.5 rounded-xl border border-[#2B3624]/[0.04] shadow-sm">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                                <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="w-full h-full object-cover" />
                              </div>
                              <div className="text-xs font-semibold text-[#2B3624]">
                                System B
                              </div>
                            </div>
                            <div className="text-[10px] text-[#6A7165]">13:51</div>
                          </div>
                          <div className="text-xs text-[#4B5563] ml-7">
                            Need new calibration map
                          </div>
                          <div className="ml-7 mt-2 flex gap-1">
                            <span className="bg-[#EBE6DA] text-[#4B5563] text-[10px] px-1.5 py-0.5 rounded border border-[#2B3624]/[0.05] font-medium">
                              🎫 1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#EBE6DA] p-8 rounded-2xl flex flex-col h-full border border-[#2B3624]/[0.03]">
                      <div className="text-sm text-[#6A7165] mb-2 font-medium">
                        Improve resilience
                      </div>
                      <div className="text-lg font-medium text-[#2B3624] leading-snug mb-8">
                        Add automatic failover to your most critical processes to
                        ensure continuous operation.
                      </div>
                      <div className="bg-[#F6F3EC] rounded-xl p-4 mt-auto border border-[#2B3624]/[0.04] shadow-sm">
                        <div className="text-[11px] font-semibold text-[#6A7165] uppercase tracking-wider mb-4 border-b border-[#2B3624]/[0.05] pb-2">
                          Failover Thread
                        </div>
                        <div className="flex gap-3">
                          <div className="w-7 h-7 bg-[#2B3624] rounded flex-shrink-0 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            E
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <div className="text-xs font-semibold text-[#2B3624]">
                                Execution Engine
                              </div>
                              <div className="text-[10px] text-[#6A7165]">1 min ago</div>
                            </div>
                            <div className="text-xs text-[#6A7165] font-medium mt-1 mb-2">
                              Initiated automatic failover sequence
                            </div>
                            <div className="text-xs text-[#2B3624] bg-white p-2.5 rounded border border-[#2B3624]/[0.05] shadow-sm relative">
                              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#2B3624] rounded-l"></div>
                              Node 4 unresponsive. Switching to Node 5.
                              <br />
                              <span className="text-[#6A7165] mt-1 block">
                                Process routed through secondary channel.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="bg-[#EBE6DA] p-8 rounded-2xl flex flex-col h-full border border-[#2B3624]/[0.03]">
                      <div className="text-sm text-[#6A7165] mb-2 font-medium">
                        Centralize data logs
                      </div>
                      <div className="text-lg font-medium text-[#2B3624] leading-snug mb-8">
                        Manage incoming telemetry and environmental mapping requests
                        more efficiently.
                      </div>
                      <div className="bg-[#F6F3EC] rounded-xl p-5 mt-auto border border-[#2B3624]/[0.04] shadow-sm">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-7 h-7 bg-[#2B3624] rounded flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            T
                          </div>
                          <div className="text-sm font-semibold text-[#2B3624]">
                            Telemetry sync
                          </div>
                        </div>
                        <div className="text-[11px] font-semibold text-[#6A7165] uppercase tracking-wider mb-2">
                          Request
                        </div>
                        <div className="text-xs text-[#4B5563] bg-white p-3 rounded border border-[#2B3624]/[0.05] shadow-sm">
                          I need help analyzing this diagnostic map:
                          <br />
                          <span className="text-[#2B3624] hover:underline cursor-pointer mt-1 block truncate">
                            https://engine.app/map/448-ref
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#EBE6DA] p-8 rounded-2xl flex flex-col h-full border border-[#2B3624]/[0.03]">
                      <div className="text-sm text-[#6A7165] mb-2 font-medium">
                        Manage sensitive updates
                      </div>
                      <div className="text-lg font-medium text-[#2B3624] leading-snug mb-12">
                        Create private air-gapped instances for sensitive operations
                        that only your core team can access.
                      </div>
                      <div className="mt-auto relative flex items-end justify-center pb-4">
                        <div className="w-[90%] bg-[#F6F3EC] border border-[#2B3624]/[0.06] rounded-xl p-4 flex items-center gap-3 z-30 shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#2B3624]/[0.04] shadow-sm">
                            <iconify-icon icon="solar:lock-bold" className="text-[#6A7165] text-sm"></iconify-icon>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#2B3624]">
                              Private Instance
                            </div>
                            <div className="text-[11px] text-[#6A7165] mt-0.5">
                              Secure offline deployment
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-[80%] bottom-[6px] h-12 bg-[#F6F3EC] border border-[#2B3624]/[0.06] rounded-xl z-20 shadow-sm translate-y-1"></div>
                        <div className="absolute w-[70%] bottom-[-2px] h-12 bg-[#F6F3EC] border border-[#2B3624]/[0.06] rounded-xl z-10 shadow-sm translate-y-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="my-12 py-16 sm:py-20 px-6 sm:px-10 lg:px-14 rounded-2xl border border-[#D8D0B8]/15 overflow-hidden text-[#F6F3EC] relative" style={{"background": "radial-gradient(circle at 88% 18%, rgba(124,141,82,0.9) 0%, rgba(124,141,82,0.42) 28%, transparent 45%), linear-gradient(135deg, #1D2718 0%, #35452A 55%, #12180F 100%)"}}>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-5xl font-light tracking-tighter text-[#F6F3EC] mb-6">
                    Questions before deployment?
                  </h2>
                  <p className="text-[#D8D0B8] mb-8 max-w-md leading-relaxed">
                    Tell us what you're building and our team will help you choose the
                    right deployment path, integrations, and reliability model.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 border border-[#C9D68A]/60 text-[#C9D68A] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#C9D68A] hover:text-[#1D2718] transition-colors">
                    Get Started
                    <iconify-icon icon="lucide:arrow-up-right" className="text-sm"></iconify-icon>
                  </a>
                </div>
                <div className="bg-[#0F170D]/35 backdrop-blur-sm border border-[#D8D0B8]/15 rounded-xl p-6 sm:p-8 shadow-2xl">
                  <h2 className="text-4xl font-light tracking-tighter text-[#C9D68A] mb-6 text-center">
                    Tell us what you need
                  </h2>
                  <form className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" className="w-full bg-white/5 border border-white/35 px-4 py-3 text-sm rounded-full text-[#F6F3EC] placeholder:text-white/55 focus:outline-none focus:border-[#E8EE9B]/70" />
                    <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/35 px-4 py-3 text-sm rounded-full text-[#F6F3EC] placeholder:text-white/55 focus:outline-none focus:border-[#E8EE9B]/70" />
                    <input type="tel" placeholder="Phone" className="w-full bg-white/5 border border-white/35 px-4 py-3 text-sm rounded-full text-[#F6F3EC] placeholder:text-white/55 focus:outline-none focus:border-[#E8EE9B]/70" />
                    <input type="text" placeholder="Company" className="w-full bg-white/5 border border-white/35 px-4 py-3 text-sm rounded-full text-[#F6F3EC] placeholder:text-white/55 focus:outline-none focus:border-[#E8EE9B]/70" />
                    <textarea placeholder="Write your message here" className="sm:col-span-2 w-full bg-white/5 border border-white/35 px-4 py-3 text-sm rounded-2xl text-[#F6F3EC] placeholder:text-white/55 focus:outline-none focus:border-[#E8EE9B]/70 h-28"></textarea>
                    <button className="sm:col-span-2 justify-self-center border border-[#C9D68A]/60 text-[#C9D68A] text-sm font-medium px-12 py-3 rounded-full hover:bg-[#C9D68A] hover:text-[#1D2718] transition-colors">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </section>
            <section className="py-16 border-t border-[#2B3624]/[0.06]">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-light tracking-tighter text-[#2B3624] mb-10">
                  FAQ
                </h2>
                <div className="space-y-6 text-sm">
                  <div>
                    <div className="font-medium mb-1">
                      How does the engine handle hardware failures?
                    </div>
                    <div className="text-[#4B5563]">
                      The engine uses health checks, automatic failover, and state
                      replication across nodes so workloads can continue while an
                      affected node is isolated.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      Is on-premise deployment supported?
                    </div>
                    <div className="text-[#4B5563]">
                      Yes. Fully air-gapped, containerized, and private cloud installs
                      are available for teams with strict security or compliance
                      requirements.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      What data sources can we connect?
                    </div>
                    <div className="text-[#4B5563]">
                      Telemetry streams, sensor logs, event queues, databases, and
                      internal APIs can be connected through the platform SDK.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      How do teams monitor production systems?
                    </div>
                    <div className="text-[#4B5563]">
                      Dashboards expose execution traces, node health, retries,
                      latency, and failover events with alerting hooks for your
                      existing tools.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      Can we define safety constraints?
                    </div>
                    <div className="text-[#4B5563]">
                      Yes. You can configure policy gates, fallback paths, approval
                      thresholds, and hard limits for critical autonomous actions.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      How long does implementation take?
                    </div>
                    <div className="text-[#4B5563]">
                      Most teams start with a focused pilot in a few days, then expand
                      into production after validating reliability, observability, and
                      integration needs.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="mt-24 -mx-6 sm:-mx-12 lg:-mx-24 overflow-hidden bg-[#050505] border-t border-white/5 pt-20 pb-0 relative rounded-t-2xl text-[#F6F3EC]">
              <div className="flex -translate-y-1/2 z-30 mt-16 mb-16 px-6 absolute top-0 right-0 left-0 justify-center">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-full py-3 pl-6 pr-2 flex items-center gap-4 shadow-2xl max-w-md w-full group hover:border-[#C9D68A]/50 transition-colors">
                  <input type="text" placeholder="Join the waitlist..." className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-neutral-600 font-mono focus:ring-0" />
                  <button className="w-8 h-8 bg-[#F6F3EC] text-[#10140E] rounded-full flex items-center justify-center hover:bg-[#C9D68A] transition-colors shrink-0">
                    <iconify-icon icon="lucide:arrow-right" className="text-base"></iconify-icon>
                  </button>
                </div>
              </div>

              <div className="w-full px-6 sm:px-10 lg:px-14 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
                <div className="lg:col-span-7">
                  <h2 className="text-5xl lg:text-[6rem] leading-[0.9] font-medium text-white tracking-tight mb-10">
                    Deploy.
                    <span className="text-neutral-700">Scale.</span>
                    Trust.
                  </h2>
                  <div className="flex flex-wrap gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    <span className="font-semibold tracking-tight text-xl text-white">
                      SDK
                    </span>
                    <span className="font-semibold tracking-tight text-xl text-white">
                      OBSERVE
                    </span>
                    <span className="font-semibold tracking-tight text-xl text-white">
                      FAILOVER
                    </span>
                    <span className="font-semibold tracking-tight text-xl text-white">
                      CONTROL
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex lg:justify-end items-center">
                  <div className="w-full max-w-sm bg-[#C9D68A] p-8 relative overflow-hidden group transform hover:-translate-y-2 transition-transform duration-500 rounded-sm">
                    <iconify-icon icon="lucide:code-2" className="absolute -right-4 -top-4 text-black/10 text-[8rem] rotate-12"></iconify-icon>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-[#10140E] mb-4 tracking-tight">
                        Start Building Now
                      </h3>
                      <p className="text-[#10140E]/70 text-sm font-medium leading-relaxed mb-8">
                        Deploy reliable autonomous execution with failover, state
                        replication, and observability built in.
                      </p>
                      <div className="flex items-center justify-between border-t border-black/10 pt-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#10140E]">
                          v2.0 Stable
                        </span>
                        <iconify-icon icon="lucide:arrow-up-right" className="text-xl text-[#10140E]"></iconify-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden pointer-events-none select-none pt-12">
                <h1 className="text-[16vw] leading-none font-semibold text-white/5 text-center -mb-8 tracking-tight whitespace-nowrap">
                  AUTONOMOUS
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
              </div>

              <div className="absolute bottom-6 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 z-30 px-6">
                <p className="text-[10px] text-neutral-700 font-mono uppercase tracking-widest">
                  © 2025 Autonomous Systems Engine
                </p>
                <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-neutral-700">
                  <a href="#" className="hover:text-[#C9D68A] transition-colors">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-[#C9D68A] transition-colors">Terms</a>
                  <a href="#" className="hover:text-[#C9D68A] transition-colors">Docs</a>
                </div>
              </div>
            </footer>
          </div>
    </div>
  );
}