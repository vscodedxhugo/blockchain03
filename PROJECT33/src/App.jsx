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
    "src": "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
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
    "content": "\n        (function() {\n            const root = document.currentScript.parentElement;\n            const counter = root.querySelector('[data-counter]');\n            if (!counter) return;\n            \n            const observer = new IntersectionObserver(entries => {\n                if (entries[0].isIntersecting) {\n                    let start = 0;\n                    const end = 128;\n                    const duration = 2000;\n                    const startTime = performance.now();\n                    \n                    function step(now) {\n                        const elapsed = now - startTime;\n                        const progress = Math.min(elapsed / duration, 1);\n                        const ease = 1 - Math.pow(1 - progress, 4); // Quartic ease-out\n                        \n                        counter.textContent = Math.floor(start + (end - start) * ease);\n                        \n                        if (progress < 1) requestAnimationFrame(step);\n                    }\n                    requestAnimationFrame(step);\n                    observer.disconnect();\n                }\n            });\n            observer.observe(root);\n        })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n            function switchBilling(plan) {\n              const btnMonthly = document.getElementById('billing-monthly');\n              const btnYearly = document.getElementById('billing-yearly');\n              const priceStarter = document.getElementById('price-starter');\n              const pricePro = document.getElementById('price-pro');\n              const periodStarter = document.getElementById('period-starter');\n              const periodPro = document.getElementById('period-pro');\n              \n              const activeClass = \"text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-blue-500/25\";\n              const inactiveClass = \"text-zinc-400 hover:text-white bg-transparent shadow-none\";\n\n              if (plan === 'monthly') {\n                btnMonthly.className = \"relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-geist \" + activeClass;\n                btnYearly.className = \"relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-geist \" + inactiveClass;\n                \n                // Animate values\n                priceStarter.innerText = \"$49\";\n                pricePro.innerText = \"$149\";\n                periodStarter.innerText = \"/MONTH\";\n                periodPro.innerText = \"/MONTH\";\n                \n              } else {\n                btnMonthly.className = \"relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-geist \" + inactiveClass;\n                btnYearly.className = \"relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-geist \" + activeClass;\n                \n                priceStarter.innerText = \"$39\";\n                pricePro.innerText = \"$119\";\n                periodStarter.innerText = \"/MONTH\";\n                periodPro.innerText = \"/MONTH\";\n              }\n            }\n          "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      // ─── IntersectionObserver for .animate-on-scroll ───\n      (function() {\n        const io = new IntersectionObserver((entries) => {\n          entries.forEach(e => {\n            if (e.isIntersecting) { e.target.classList.add('animate'); io.unobserve(e.target); }\n          });\n        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });\n        document.addEventListener('DOMContentLoaded', () => {\n          document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));\n        });\n      })();\n\n      // ─── THREE.JS DIGITAL TERRAIN (NEON OVERHAUL) ───\n      (function() {\n        'use strict';\n\n        const canvas = document.getElementById('three-canvas');\n        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });\n        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        // Darker fog for high contrast neon\n        renderer.setClearColor(0x050505, 1);\n\n        const scene = new THREE.Scene();\n        scene.fog = new THREE.FogExp2(0x050505, 0.02);\n\n        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);\n        camera.position.set(0, 18, 45);\n        camera.lookAt(0, 0, 0);\n\n        // Store initial camera state for scroll animation\n        const cameraStart = { x: 0, y: 18, z: 45, lookY: 0 };\n        const cameraEnd   = { x: 0, y: 4, z: -15, lookY: -8 };\n\n        // ─── NEON SHADER MATERIAL ───\n        const vertexShader = `\n          uniform float uTime;\n          uniform float uScrollSpeed;\n          uniform float uTurbulence;\n          varying float vElevation;\n          varying vec2 vUv;\n          varying float vDistFromCenter;\n\n          vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }\n          vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }\n          vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }\n          vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\n          float snoise(vec3 v) {\n            const vec2 C = vec2(1.0/6.0, 1.0/3.0);\n            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n            vec3 i  = floor(v + dot(v, C.yyy));\n            vec3 x0 = v - i + dot(i, C.xxx);\n            vec3 g  = step(x0.yzx, x0.xyz);\n            vec3 l  = 1.0 - g;\n            vec3 i1 = min(g.xyz, l.zxy);\n            vec3 i2 = max(g.xyz, l.zxy);\n            vec3 x1 = x0 - i1 + C.xxx;\n            vec3 x2 = x0 - i2 + C.yyy;\n            vec3 x3 = x0 - D.yyy;\n            i = mod289(i);\n            vec4 p = permute(permute(permute(\n                      i.z + vec4(0.0, i1.z, i2.z, 1.0))\n                    + i.y + vec4(0.0, i1.y, i2.y, 1.0))\n                    + i.x + vec4(0.0, i1.x, i2.x, 1.0));\n            float n_ = 0.142857142857;\n            vec3 ns = n_ * D.wyz - D.xzx;\n            vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);\n            vec4 x_ = floor(j * ns.z);\n            vec4 y_ = floor(j - 7.0 * x_);\n            vec4 x  = x_ * ns.x + ns.yyyy;\n            vec4 y  = y_ * ns.x + ns.yyyy;\n            vec4 h  = 1.0 - abs(x) - abs(y);\n            vec4 b0 = vec4(x.xy, y.xy);\n            vec4 b1 = vec4(x.zw, y.zw);\n            vec4 s0 = floor(b0) * 2.0 + 1.0;\n            vec4 s1 = floor(b1) * 2.0 + 1.0;\n            vec4 sh = -step(h, vec4(0.0));\n            vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n            vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\n            vec3 p0 = vec3(a0.xy, h.x);\n            vec3 p1 = vec3(a0.zw, h.y);\n            vec3 p2 = vec3(a1.xy, h.z);\n            vec3 p3 = vec3(a1.zw, h.w);\n            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));\n            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;\n            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n            m = m * m;\n            return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n          }\n\n          void main() {\n            vUv = uv;\n            vec3 pos = position;\n\n            float t = uTime * 0.2; // Faster for high energy\n            float turb = 1.0 + uTurbulence * 3.0; // More intense turbulence\n\n            float noise1 = snoise(vec3(pos.x * 0.06, pos.z * 0.06 + t, t * 0.3)) * 5.5 * turb;\n            float noise2 = snoise(vec3(pos.x * 0.12, pos.z * 0.12 + t * 1.5, t * 0.5 + 10.0)) * 2.5 * turb;\n            \n            float elevation = noise1 + noise2;\n            pos.y += elevation;\n            vElevation = elevation;\n\n            float dx = pos.x;\n            float dz = pos.z;\n            vDistFromCenter = sqrt(dx * dx + dz * dz);\n\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n          }\n        `;\n\n        const fragmentShader = `\n          uniform float uTime;\n          uniform float uIntensity;\n          varying float vElevation;\n          varying vec2 vUv;\n          varying float vDistFromCenter;\n\n          void main() {\n            // High Energy Palette: Neon Turquoise (#00f7ff) to Deep Electric Blue (#2563eb)\n            vec3 cyanColor  = vec3(0.0, 0.97, 1.0); \n            vec3 blueColor  = vec3(0.15, 0.39, 0.92); \n            vec3 deepSpace  = vec3(0.02, 0.02, 0.05);\n\n            float elevNorm = clamp((vElevation + 5.0) / 14.0, 0.0, 1.0);\n            \n            // Mix base color based on elevation\n            vec3 terrainColor = mix(blueColor, cyanColor, elevNorm * elevNorm);\n\n            // Distance fade\n            float distFade = 1.0 - smoothstep(10.0, 60.0, vDistFromCenter);\n            \n            // Grid pulse logic\n            float gridPulse = 0.8 + 0.4 * sin(uTime * 2.0 + vElevation * 3.0);\n            \n            // Final Color composition\n            vec3 finalColor = terrainColor * gridPulse * uIntensity;\n            \n            // Intense peak glow\n            float peakGlow = smoothstep(0.65, 1.0, elevNorm);\n            finalColor += cyanColor * peakGlow * 1.5;\n\n            // Alpha logic - Thicker lines\n            // Base alpha higher (0.5) for thicker feel\n            float alpha = distFade * uIntensity * (0.4 + 0.6 * elevNorm);\n            alpha = clamp(alpha, 0.0, 1.0);\n\n            gl_FragColor = vec4(finalColor, alpha);\n          }\n        `;\n\n        const uniforms = {\n          uTime:        { value: 0 },\n          uScrollSpeed: { value: 0 },\n          uTurbulence:  { value: 0 },\n          uIntensity:   { value: 0.8 } // Start higher\n        };\n\n        const terrainMat = new THREE.ShaderMaterial({\n          vertexShader,\n          fragmentShader,\n          uniforms,\n          wireframe: true,\n          transparent: true,\n          blending: THREE.AdditiveBlending, // GLOW EFFECT\n          depthWrite: false, // Important for additive blending overlap\n          side: THREE.DoubleSide\n        });\n\n        const segments = 160;\n        const planeGeo = new THREE.PlaneBufferGeometry(120, 120, segments, segments);\n        planeGeo.rotateX(-Math.PI * 0.5);\n\n        const terrain = new THREE.Mesh(planeGeo, terrainMat);\n        terrain.position.set(0, -4, -10);\n        scene.add(terrain);\n\n        // Second layer for depth/complexity\n        const terrainMat2 = terrainMat.clone();\n        terrainMat2.uniforms = {\n          uTime:        { value: 0 },\n          uScrollSpeed: { value: 0 },\n          uTurbulence:  { value: 0 },\n          uIntensity:   { value: 0.3 }\n        };\n        const terrain2 = new THREE.Mesh(planeGeo, terrainMat2);\n        terrain2.position.set(0, -12, -10);\n        terrain2.scale.set(1.5, 0.5, 1.5);\n        scene.add(terrain2);\n\n        // ─── NEON PARTICLES ───\n        const particleCount = 250;\n        const pPositions = new Float32Array(particleCount * 3);\n        const pSizes = new Float32Array(particleCount);\n        \n        for (let i = 0; i < particleCount; i++) {\n          pPositions[i * 3]     = (Math.random() - 0.5) * 120;\n          pPositions[i * 3 + 1] = Math.random() * 40 - 5;\n          pPositions[i * 3 + 2] = (Math.random() - 0.5) * 120;\n          pSizes[i] = Math.random();\n        }\n        \n        const pGeo = new THREE.BufferGeometry();\n        pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));\n        pGeo.setAttribute('size', new THREE.BufferAttribute(pSizes, 1));\n        \n        const pMat = new THREE.PointsMaterial({ \n          color: 0x00f7ff, // Neon Cyan\n          size: 0.25, \n          transparent: true, \n          opacity: 0.8,\n          blending: THREE.AdditiveBlending \n        });\n        const particles = new THREE.Points(pGeo, pMat);\n        scene.add(particles);\n\n        // ─── GLITCH ORB CURSOR ───\n        const cursorLight = new THREE.PointLight(0x00f7ff, 2, 40);\n        scene.add(cursorLight);\n\n        const orbGeo = new THREE.IcosahedronGeometry(0.8, 1);\n        const orbMat = new THREE.MeshBasicMaterial({ \n          color: 0x00ffff, \n          wireframe: true,\n          transparent: true,\n          opacity: 0.3,\n          blending: THREE.AdditiveBlending\n        });\n        const cursorOrb = new THREE.Mesh(orbGeo, orbMat);\n        scene.add(cursorOrb);\n\n        const mouse = new THREE.Vector2(0, 0);\n        const raycaster = new THREE.Raycaster();\n        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 10); // Plane at z=-10 for projection\n\n        window.addEventListener('mousemove', (e) => {\n          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;\n          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;\n        });\n\n        // ─── GSAP SCROLL LOGIC ───\n        gsap.registerPlugin(ScrollTrigger);\n\n        const heroSection = document.getElementById('hero-section');\n        const dashboardContainer = document.getElementById('dashboard-container');\n        const progressBar = document.getElementById('scroll-progress');\n\n        let scrollProgress = 0;\n        let scrollVelocity = 0;\n        let lastScroll = 0;\n        let targetTurbulence = 0;\n        let currentTurbulence = 0;\n\n        const scrollTL = gsap.timeline({\n          scrollTrigger: {\n            trigger: heroSection,\n            start: 'top top',\n            end: 'bottom top',\n            scrub: 1.2,\n            onUpdate: (self) => {\n              scrollProgress = self.progress;\n              const currentScroll = self.scroll();\n              scrollVelocity = Math.abs(currentScroll - lastScroll);\n              lastScroll = currentScroll;\n              targetTurbulence = Math.min(scrollVelocity / 50, 1.5);\n            }\n          }\n        });\n\n        // Camera Flythrough\n        scrollTL.to(camera.position, {\n          x: cameraEnd.x,\n          y: cameraEnd.y,\n          z: cameraEnd.z,\n          ease: 'none',\n          onUpdate: () => {\n            const lookY = cameraStart.lookY + (cameraEnd.lookY - cameraStart.lookY) * scrollProgress;\n            camera.lookAt(0, lookY, camera.position.z - 30);\n          }\n        }, 0);\n\n        // INTENSITY BOOST on scroll: 0.8 -> 1.8\n        scrollTL.to(uniforms.uIntensity, { value: 1.8, ease: 'power1.inOut' }, 0);\n        \n        ScrollTrigger.create({\n          trigger: document.body,\n          start: 'top top',\n          end: 'bottom bottom',\n          onUpdate: (self) => {\n            progressBar.style.transform = `scaleX(${self.progress})`;\n          }\n        });\n\n        // Dashboard Reveal\n        const dashRevealCards = document.querySelectorAll('.dashboard-reveal');\n        ScrollTrigger.create({\n          trigger: dashboardContainer,\n          start: 'top 85%',\n          end: 'top 30%',\n          onEnter: () => {\n            dashRevealCards.forEach((card) => {\n              const delay = parseFloat(card.dataset.revealDelay || 0);\n              gsap.to(card, {\n                opacity: 1,\n                y: 0,\n                scale: 1,\n                filter: 'blur(0px)',\n                duration: 1.0,\n                delay: delay,\n                ease: 'power3.out'\n              });\n            });\n          },\n          onLeaveBack: () => {\n            dashRevealCards.forEach((card) => {\n              gsap.to(card, {\n                opacity: 0,\n                y: 60,\n                scale: 0.95,\n                filter: 'blur(12px)',\n                duration: 0.5,\n                ease: 'power2.in'\n              });\n            });\n          }\n        });\n\n        // ─── ANIMATION LOOP ───\n        const clock = new THREE.Clock();\n        let elapsedSmooth = 0;\n        const targetPos = new THREE.Vector3();\n\n        function animate() {\n          requestAnimationFrame(animate);\n\n          const delta = clock.getDelta();\n          const elapsed = clock.getElapsedTime();\n\n          // Turbulence smoothing\n          currentTurbulence += (targetTurbulence - currentTurbulence) * 0.05;\n          targetTurbulence *= 0.95;\n\n          // Time uniform\n          elapsedSmooth += delta * (1.0 + scrollVelocity * 0.05);\n\n          uniforms.uTime.value = elapsedSmooth;\n          uniforms.uTurbulence.value = currentTurbulence;\n          uniforms.uScrollSpeed.value = scrollVelocity;\n\n          terrainMat2.uniforms.uTime.value = elapsedSmooth * 0.8;\n          terrainMat2.uniforms.uTurbulence.value = currentTurbulence * 0.5;\n\n          // Rotation\n          terrain.rotation.z = Math.sin(elapsed * 0.1) * 0.03;\n\n          // Particle Flicker & Drift\n          const pArr = pGeo.attributes.position.array;\n          for (let i = 0; i < particleCount; i++) {\n            pArr[i * 3 + 1] += Math.sin(elapsed + i) * 0.01;\n          }\n          pGeo.attributes.position.needsUpdate = true;\n          // Flicker\n          pMat.opacity = 0.6 + 0.4 * Math.sin(elapsed * 10.0);\n\n          // Cursor Logic (Glitch Orb)\n          raycaster.setFromCamera(mouse, camera);\n          const rayDir = raycaster.ray.direction;\n          const rayOrigin = raycaster.ray.origin;\n          \n          // Project onto a plane roughly where the terrain is\n          // Simplified projection since we don't need perfect intersection\n          const distance = -10 - rayOrigin.z / rayDir.z; \n          // Smooth follow\n          const targetX = rayOrigin.x + rayDir.x * 20; // 20 units distance\n          const targetY = rayOrigin.y + rayDir.y * 20;\n          const targetZ = rayOrigin.z + rayDir.z * 20;\n\n          cursorLight.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);\n          cursorOrb.position.copy(cursorLight.position);\n          \n          // Glitch Effect on Orb\n          if (Math.random() > 0.9) {\n             cursorOrb.scale.setScalar(0.8 + Math.random() * 0.5);\n          } else {\n             cursorOrb.scale.lerp(new THREE.Vector3(1, 1, 1), 0.2);\n          }\n          cursorOrb.rotation.x += 0.05;\n          cursorOrb.rotation.y += 0.05;\n\n          renderer.render(scene, camera);\n        }\n        animate();\n\n        // Resize\n        let resizeTimer;\n        window.addEventListener('resize', () => {\n          clearTimeout(resizeTimer);\n          resizeTimer = setTimeout(() => {\n            const w = window.innerWidth;\n            const h = window.innerHeight;\n            camera.aspect = w / h;\n            camera.updateProjectionMatrix();\n            renderer.setSize(w, h);\n            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n          }, 100);\n        });\n      })();"
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "antialiased text-zinc-100 bg-neutral-950 overflow-x-hidden";
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
    <div className="aura-source-body antialiased text-zinc-100 bg-neutral-950 overflow-x-hidden">
      <canvas id="three-canvas" width="3638" height="2356" style={{"width": "1819px", "height": "1178px"}} className=""></canvas>
          <div className="terrain-overlay"></div>
          <div className="scroll-progress" id="scroll-progress" style={{"transform": "scaleX(0.61627)"}}></div>

          <div className="content-layer">

            <nav className="fixed z-50 top-0 right-0 left-0" style={{"animation": "fadeSlideIn 0.8s ease-out 0.1s both"}}>
              <div className="fixed -translate-x-1/2 z-50 w-[min(100%-1rem,1100px)] pointer-events-none top-4 left-1/2">
                <div className="dark:bg-neutral-900/70 supports-[backdrop-filter]:backdrop-blur-2xl backdrop-saturate-150 dark:backdrop-brightness-90 pointer-events-auto border-white/15 border rounded-full ring-white/15 ring-1 pr-2 pl-6 relative shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                  <span aria-hidden="true" className="pointer-events-none dark:bg-neutral-900/75 rounded-full absolute top-0 right-0 bottom-0 left-0"></span>
                  <span aria-hidden="true" className="pointer-events-none opacity-[0.06] rounded-full absolute top-0 right-0 bottom-0 left-0" style={{"backgroundImage": "url('data:image/svg+xml", "svg xmlns=%22http": "//www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt", "backgroundSize": "300px 300px"}}></span>
                  <div className="relative">
                    <div className="flex h-14 items-center justify-between">
                      <div className="flex items-center gap-8">
                        <a href="#" className="text-white font-semibold text-sm tracking-tight font-geist">
                          DesignFlow
                        </a>
                        <nav className="hidden md:flex items-center gap-6 text-sm">
                          <a href="#features" className="text-zinc-300 hover:text-white transition font-geist">
                            Features
                          </a>
                          <a href="#pricing" className="text-zinc-300 hover:text-white transition font-geist">
                            Pricing
                          </a>
                          <a href="#testimonials" className="text-zinc-300 hover:text-white transition font-geist">
                            Testimonials
                          </a>
                        </nav>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="hidden sm:inline-flex group relative items-center justify-center min-w-[120px] px-5 py-2.5 text-sm font-semibold tracking-tight cursor-pointer overflow-hidden rounded-full border border-white/15 bg-white/10 text-neutral-100 transition-all duration-[900ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white">
                          <span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0 font-geist">
                            Sign In
                          </span>
                          <span className="absolute inset-0 z-10 flex items-center justify-center font-medium opacity-0 transition-all duration-500 ease-out translate-y-full group-hover:translate-y-0 group-hover:opacity-100 font-geist">
                            Sign In
                          </span>
                          <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70 blur-[2px]"></span>
                          <span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
                        </button>
                        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 border border-white/20 text-zinc-100 hover:bg-white/20">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4 6h16M4 12h16M4 18h16"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>


            <section className="min-h-screen flex overflow-hidden pt-24 pr-4 pb-0 pl-4 relative items-center justify-center" id="hero-section">
              <div className="w-full max-w-7xl z-10 mx-auto relative top-24">
                <div className="text-center max-w-4xl mr-auto ml-auto">
                  <div className="inline-flex [animation:animationIn_0.8s_ease-out_0.2s_both] text-xs text-zinc-400 font-geist bg-zinc-800/50 border-zinc-700/50 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" style={{"animation": "fadeSlideIn 0.8s ease-out 0.1s both"}}>
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>
                    Ship 10x faster with AI-powered code generation
                  </div>
                  <h1 className="sm:text-6xl lg:text-7xl [animation:animationIn_0.8s_ease-out_0.2s_both] text-5xl font-light text-zinc-100 tracking-tighter font-geist mb-6" style={{"animation": "fadeSlideIn 0.8s ease-out 0.2s both"}}>
                    Transform designs into
                    <br />
                    production-ready code
                  </h1>
                  <p className="sm:text-xl [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg text-zinc-400 font-geist max-w-2xl mr-auto mb-10 ml-auto">
                    Convert Figma, Sketch, and Adobe XD designs into clean, responsive
                    code instantly. Built for developers who ship fast.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{"animation": "fadeSlideIn 0.8s ease-out 0.4s both"}}>
                    <button className="[animation:animationIn_0.8s_ease-out_0.4s_both] group inline-flex min-w-[180px] cursor-pointer overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] text-base font-medium text-white h-[48px] rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_2px_8px_rgba(255,255,255,0.25),_inset_0_-3px_8px_rgba(0,0,0,0.35),_0_4px_10px_rgba(0,0,0,0.4)] items-center justify-center" style={{"background": "linear-gradient(45deg, #06b6d4, #3b82f6, #2563eb)"}}>
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-transform duration-500 ease-out group-hover:translate-y-8">
                        <span className="block font-geist">Generate My Code</span>
                      </span>
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-all duration-500 ease-out -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="block font-geist">Generate My Code</span>
                      </span>
                    </button>
                    <button className="[animation:animationIn_0.8s_ease-out_0.5s_both] group inline-flex min-w-[180px] cursor-pointer overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white text-base font-medium text-neutral-300 tracking-tight bg-white/5 h-[48px] border-white/15 border rounded-full pt-3 pr-6 pb-3 pl-6 relative items-center justify-center">
                      <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70 blur-[2px]"></span>
                      <span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-transform duration-500 ease-out group-hover:translate-y-8">
                        <span className="block font-geist">Watch Demo</span>
                      </span>
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-all duration-500 ease-out -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="block font-geist">Watch Demo</span>
                      </span>
                    </button>
                  </div>
                </div>


                <div className="sm:px-6 lg:px-8 [animation:animationIn_0.8s_ease-out_0.6s_both] mt-24 mb-24 pr-4 pl-4" id="dashboard-container">
                  <div className="sm:p-3 bg-neutral-950 border-neutral-800 border ring-0 rounded-3xl pt-2 pr-2 pb-2 pl-2 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 relative">

                      <aside className="dashboard-reveal lg:col-span-3 flex flex-col bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl p-4" data-reveal-delay="0" style={{"filter": "blur(0px)", "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1"}}>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium tracking-tight font-geist">
                            DesignFlow
                          </span>
                          <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-neutral-800 transition text-neutral-300 ring-1 ring-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M4 12h16"></path>
                              <path d="M4 6h16"></path>
                              <path d="M4 18h16"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57ff8f09-a1ef-4c2d-a129-c6e65a08af58_320w.jpg" alt="Avatar" className="w-8 h-8 object-cover ring-neutral-700 ring-1 rounded-full" />
                          <div className="">
                            <p className="text-white text-sm font-medium tracking-tight font-geist">
                              Alex Chen
                            </p>
                            <p className="text-neutral-400 text-xs font-geist">
                              Lead Developer
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center gap-2 bg-neutral-900 ring-1 ring-neutral-800 rounded-xl px-3 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <circle cx="11" cy="11" r="8"></circle>
                              <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            <input type="text" placeholder="Search designs..." className="w-full bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" />
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-geist">
                            Navigation
                          </p>
                          <nav className="space-y-1">
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition font-geist" href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                              </svg>
                              Dashboard
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-100 bg-neutral-800 ring-1 ring-neutral-700 font-geist" href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                              </svg>
                              Code Generator
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition font-geist" href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2 2 7l10 5 10-5z"></path>
                                <path d="m2 17 10 5 10-5"></path>
                                <path d="m2 12 10 5 10-5"></path>
                              </svg>
                              Components
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition font-geist" href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                              </svg>
                              Integrations
                            </a>
                          </nav>
                        </div>
                        <div className="mt-6">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-geist">
                            Recent Projects
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
                              E-commerce dashboard redesign
                            </li>
                            <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
                              SaaS landing page template
                            </li>
                            <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
                              Mobile app UI conversion
                            </li>
                          </ul>
                        </div>
                        <div className="mt-auto pt-4">
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4">
                            <div className="absolute inset-x-0 -top-6 h-14 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
                            <p className="text-sm text-white font-medium tracking-tight font-geist">
                              Upgrade to Pro
                            </p>
                            <p className="text-xs text-neutral-400 mt-1 font-geist">
                              Unlock advanced features and ship 10x faster
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                              <button className="ml-auto inline-flex items-center gap-2 text-xs text-white bg-blue-500 hover:bg-blue-400 transition rounded-full px-3 py-1.5 ring-1 ring-blue-400 font-geist">
                                Upgrade now
                              </button>
                            </div>
                          </div>
                        </div>
                      </aside>


                      <main className="dashboard-reveal lg:col-span-6 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden flex flex-col" style={{"filter": "blur(0px)"}}>



        <header className="flex items-start justify-between mb-4 flex-shrink-0 z-10">
          <div>
            <h2 className="text-xl sm:text-2xl text-white font-geist font-light tracking-tight">AI Code Generator</h2>
            <p className="text-sm text-neutral-400 mt-1 font-geist">Interactive design-to-code engine</p>
          </div>
          <button className="w-8 h-8 rounded-lg ring-1 ring-neutral-800 hover:bg-neutral-800 text-neutral-300 inline-flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
          </button>
        </header>


        <div className="flex-1 rounded-2xl bg-gradient-to-b from-neutral-900/50 to-neutral-950/50 ring-1 ring-neutral-800/50 relative overflow-hidden flex flex-col">

          <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[320px] relative z-0">

              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{"backgroundImage": "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", "backgroundSize": "20px 20px"}}></div>


              <div className="flex items-start gap-3 relative z-10">
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22v-4a6 6 0 0 0-12 0v4"></path><rect width="4" height="4" x="10" y="10" rx="1"></rect></svg>
                   </div>
                   <div className="bg-neutral-800/80 ring-1 ring-white/5 text-neutral-200 text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] font-geist">
                      Ready to code. Upload a design or describe your component.
                   </div>
              </div>


              <div className="flex flex-row-reverse items-start gap-3 relative z-10 animate-enter delay-1000">
                   <div className="w-8 h-8 rounded-lg bg-neutral-700 ring-1 ring-white/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                   </div>
                   <div className="bg-blue-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-md shadow-blue-900/20 max-w-[85%] font-geist">
                      Generate a responsive Analytics Dashboard card with a chart and stats.
                   </div>
              </div>


              <div className="animate-typing flex items-start gap-3 relative z-10">
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"></path><rect width="4" height="4" x="10" y="10" rx="1"></rect><path d="M22 22v-4a6 6 0 0 0-12 0v4"></path></svg>
                   </div>
                   <div className="bg-neutral-800/80 ring-1 ring-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 h-10">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" style={{"animation": "dot-bounce 1.4s infinite ease-in-out both"}}></span>
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" style={{"animation": "dot-bounce 1.4s infinite ease-in-out both 0.2s"}}></span>
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" style={{"animation": "dot-bounce 1.4s infinite ease-in-out both 0.4s"}}></span>
                   </div>
              </div>


              <div className="flex items-start gap-3 relative z-10 animate-enter delay-3500">
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"></path><rect width="4" height="4" x="10" y="10" rx="1"></rect><path d="M22 22v-4a6 6 0 0 0-12 0v4"></path></svg>
                   </div>
                   <div className="flex-1 min-w-0 bg-neutral-900 ring-1 ring-neutral-800 rounded-2xl rounded-tl-sm overflow-hidden shadow-lg">
                      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800/50 border-b border-neutral-800">
                          <span className="text-xs text-neutral-400 font-medium font-geist">AnalyticsCard.tsx</span>
                          <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 ring-1 ring-red-500/50"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 ring-1 ring-yellow-500/50"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 ring-1 ring-green-500/50"></div>
                          </div>
                      </div>
                      <div className="p-4 overflow-x-auto">
                          <pre className="font-mono text-[11px] leading-relaxed"><span className="text-purple-400">export</span> <span className="text-blue-400">default</span> <span className="text-purple-400">function</span> <span className="text-yellow-200">AnalyticsCard</span>(&#123; <span className="text-orange-300">data</span> &#125;) &#123;
        <span className="text-purple-400">return</span> (
          <span className="text-neutral-500">&lt;</span><span className="text-red-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"bg-white p-6 rounded-xl shadow-sm"</span><span className="text-neutral-500">&gt;</span>
            <span className="text-neutral-500">&lt;</span><span className="text-red-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"flex justify-between items-center mb-4"</span><span className="text-neutral-500">&gt;</span>
              <span className="text-neutral-500">&lt;</span><span className="text-red-400">h3</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"text-lg font-semibold"</span><span className="text-neutral-500">&gt;</span>Total Revenue<span className="text-neutral-500">&lt;/</span><span className="text-red-400">h3</span><span className="text-neutral-500">&gt;</span>
              <span className="text-neutral-500">&lt;</span><span className="text-yellow-200">TrendUp</span> <span className="text-blue-300">value</span>=<span className="text-green-300">"+12.5%"</span> /<span className="text-neutral-500">&gt;</span>
            <span className="text-neutral-500">&lt;/</span><span className="text-red-400">div</span><span className="text-neutral-500">&gt;</span>
            <span className="text-neutral-500">&lt;</span><span className="text-red-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"h-32 mt-4"</span><span className="text-neutral-500">&gt;</span>
              <span className="text-neutral-500">&lt;</span><span className="text-yellow-200">AreaChart</span> <span className="text-blue-300">data</span>=&#123;data&#125; <span className="text-blue-300">color</span>=<span className="text-green-300">"blue"</span> /<span className="text-neutral-500">&gt;</span>
            <span className="text-neutral-500">&lt;/</span><span className="text-red-400">div</span><span className="text-neutral-500">&gt;</span>
          <span className="text-neutral-500">&lt;/</span><span className="text-red-400">div</span><span className="text-neutral-500">&gt;</span>
        );
      &#125;</pre>
                      </div>
                   </div>
              </div>

          </div>


          <div className="p-4 bg-neutral-900/80 border-t border-neutral-800 z-20">
            <div className="flex items-end gap-3">
              <div className="flex-1 bg-neutral-950 ring-1 ring-neutral-800 rounded-xl px-3 py-2.5 flex items-center gap-2 focus-within:ring-blue-500/50 transition-all">
                <button className="text-neutral-500 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                </button>
                <input type="text" placeholder="Describe component logic..." className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-neutral-500 font-geist" />
              </div>
              <button className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 ring-1 ring-blue-400 text-white flex items-center justify-center transition-all shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
               <p className="text-[10px] text-neutral-500 font-geist">AI-generated code may need refinement.</p>
               <div className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-500 font-geist px-1.5 py-0.5 rounded bg-neutral-800 ring-1 ring-neutral-700">React</span>
                  <span className="text-[10px] text-neutral-500 font-geist px-1.5 py-0.5 rounded bg-neutral-800 ring-1 ring-neutral-700">Tailwind</span>
               </div>
            </div>
          </div>
        </div>
      </main>


                      <aside className="dashboard-reveal lg:col-span-3 flex flex-col bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl p-4" data-reveal-delay="0.3" style={{"filter": "blur(0px)", "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1"}}>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-xs text-blue-200 bg-blue-900/40 rounded-full px-3 py-1 ring-1 ring-blue-700 font-geist">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                            DesignFlow Pro
                          </span>
                          <button className="w-8 h-8 inline-flex items-center justify-center rounded-lg ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M12 3v18"></path>
                              <path d="M3 12h18"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="mt-4 flex items-center gap-6">
                          <button className="relative text-sm text-white">
                            <span className="font-geist">EXPORTS</span>
                            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></span>
                          </button>
                          <button className="text-sm text-neutral-500 font-geist">
                            SETTINGS
                          </button>
                        </div>
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-sm text-neutral-300 font-medium tracking-tight font-geist">
                              Active Conversions
                            </p>
                            <span className="inline-flex items-center text-[11px] text-black bg-cyan-400 rounded-full px-2 py-0.5 ring-1 ring-cyan-300 font-geist">
                              Live
                            </span>
                          </div>
                          <div className="space-y-2">
                            <label className="flex items-start gap-3 p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer">
                              <span className="relative w-4 h-4 rounded-md ring-1 ring-neutral-700 bg-neutral-900"></span>
                              <p className="text-sm text-neutral-200 font-geist">
                                Landing page components
                              </p>
                            </label>
                            <div className="p-3 rounded-xl ring-1 ring-blue-700 bg-blue-900/20">
                              <label className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="relative w-4 h-4 rounded-md ring-1 ring-blue-600 bg-blue-500/20">
                                    <span className="absolute inset-0.5 rounded-[3px] bg-blue-400"></span>
                                  </span>
                                  <p className="text-sm text-neutral-200 font-geist">
                                    Dashboard UI Kit
                                  </p>
                                </div>
                              </label>
                              <ul className="mt-3 space-y-2 text-sm text-neutral-400 pl-7 list-disc">
                                <li className="font-geist">
                                  React components with hooks
                                </li>
                                <li className="font-geist">Responsive Tailwind styles</li>
                              </ul>
                            </div>
                            <label className="flex items-start gap-3 p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer">
                              <span className="relative w-4 h-4 rounded-md ring-1 ring-neutral-700 bg-neutral-900"></span>
                              <p className="text-sm text-neutral-200 font-geist">
                                Mobile app screens
                              </p>
                            </label>
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-neutral-300 font-medium tracking-tight font-geist">
                            Export Formats
                          </p>
                          <div className="mt-3 space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
                              <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <polyline points="16 18 22 12 16 6"></polyline>
                                  <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <div className="">
                                  <p className="text-sm text-neutral-200 font-geist">
                                    React + TypeScript
                                  </p>
                                  <p className="text-xs text-neutral-500 font-geist">
                                    Modern component library
                                  </p>
                                </div>
                              </div>
                              <div className="relative w-10 h-6 rounded-full bg-blue-900/30 ring-1 ring-blue-600">
                                <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-blue-400"></span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
                              <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                  <polyline points="14,2 14,8 20,8"></polyline>
                                </svg>
                                <div className="">
                                  <p className="text-sm text-neutral-200 font-geist">
                                    HTML + Tailwind
                                  </p>
                                  <p className="text-xs text-neutral-500 font-geist">
                                    Vanilla JavaScript included
                                  </p>
                                </div>
                              </div>
                              <div className="relative w-10 h-6 rounded-full bg-neutral-800 ring-1 ring-neutral-700">
                                <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-neutral-500"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="sm:px-6 lg:px-8 sm:py-24 animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="features">
              <div className="border-gradient sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 rounded-3xl pt-12 pr-12 pb-12 pl-12">
                <div className="mb-12 relative animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.2s both"}}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 gap-x-6 gap-y-6 items-start">
                    <div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/[0.03]">
                        <span className="text-[11px] font-medium tracking-widest text-zinc-300 font-geist">
                          01
                        </span>
                        <span className="h-3 w-px bg-white/10"></span>
                        <span className="text-[11px] tracking-wide text-zinc-400 font-geist">
                          Features
                        </span>
                      </span>
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter">
                        Powerful features,
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter">
                          simple workflow
                        </span>
                      </h2>
                      <p className="sm:text-base text-sm text-zinc-400 font-geist max-w-2xl mt-4">
                        DesignFlow turns ideas into production-ready UI — generate,
                        tweak, and ship with a clean developer experience.
                      </p>
                    </div>
                    <div className="lg:col-span-3 lg:justify-end flex flex-col sm:flex-row gap-2 sm:items-center">
                      <button className="group inline-flex min-w-[180px] cursor-pointer overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white text-base font-medium text-neutral-300 tracking-tight bg-white/5 h-[48px] border-white/15 border rounded-full pt-3 pr-6 pb-3 pl-6 relative items-center justify-center">
                        <span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                          Get Started
                        </span>
                        <span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 absolute inset-0 font-geist">
                          Try For Free
                        </span>
                        <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70 blur-[2px]"></span>
                        <span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <section className="max-w-7xl mx-auto relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">

        <div className="lg:col-span-2 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 animate-on-scroll bg-neutral-900/60 ring-white/10 ring-1 rounded-2xl relative backdrop-blur" style={{"animation": "fadeSlideIn 0.8s ease-out 0.1s both"}}>
          <div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
            <h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter">
              Component Generator
            </h3>
            <p className="text-sm text-neutral-400 mt-1 font-geist">
              Create production-ready UI components from prompts or designs.
            </p>
            <div className="mt-4 relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-zinc-950/80">


              <div className="flex border-white/5 border-b pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between backdrop-blur-sm bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-blue-200 bg-blue-900/30 rounded-full px-2.5 py-0.5 ring-1 ring-blue-700/50 font-geist font-medium shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Active
                  </span>
                  <span className="text-[11px] text-neutral-500 font-geist tracking-wide">•</span>
                  <span className="text-[11px] text-neutral-400 font-geist">DF-Gen v3</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
              </div>

              <div className="px-4 py-4 space-y-4 h-52 overflow-hidden relative">

                <div className="flex items-start gap-3 anim-cycle-1 absolute w-[90%] left-4 top-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/10 flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] items-center justify-center flex text-[10px] font-bold text-white">AI</div>
                  <div className="rounded-2xl rounded-tl-sm bg-neutral-900 ring-1 ring-white/10 px-3.5 py-2 text-xs text-neutral-200 font-geist leading-relaxed shadow-sm">
                    Describe a component + props. I'll return typed code.
                  </div>
                </div>


                <div className="flex justify-end anim-cycle-2 absolute w-[90%] right-4 top-16">
                  <div className="rounded-2xl rounded-tr-sm px-3.5 py-2 text-xs text-white ring-1 ring-blue-400/50 font-geist leading-relaxed shadow-[0_2px_10px_rgba(59,130,246,0.15)]" style={{"background": "linear-gradient(135deg,#06b6d4,#3b82f6)"}}>
                    PricingCard with title, price, features[], CTA
                  </div>
                </div>



                <div className="flex items-start gap-3 anim-cycle-typing absolute left-4 top-28">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/10 flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] items-center justify-center flex text-[10px] font-bold text-white">AI</div>
                  <div className="rounded-2xl rounded-tl-sm bg-neutral-900 ring-1 ring-white/10 px-3 py-2.5 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-neutral-400" style={{"animation": "dot-bounce 1s infinite 0s"}}></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-400" style={{"animation": "dot-bounce 1s infinite 0.2s"}}></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-400" style={{"animation": "dot-bounce 1s infinite 0.4s"}}></span>
                  </div>
                </div>


                <div className="flex items-start gap-3 anim-cycle-3 absolute left-4 top-28 w-[90%]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/10 flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] items-center justify-center flex text-[10px] font-bold text-white">AI</div>
                  <div className="w-full rounded-2xl rounded-tl-sm bg-neutral-900 ring-1 ring-white/10 overflow-hidden shadow-lg shadow-black/20">
                    <div className="px-3.5 py-2 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                        <span className="text-[11px] text-neutral-400 font-geist font-medium">PricingCard.tsx</span>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-geist">TypeScript</span>
                    </div>
                    <div className="p-3 bg-neutral-950/50">
                      <pre className="font-mono text-[10px] leading-relaxed text-neutral-300 whitespace-pre-wrap font-geist"><span className="text-purple-400">export</span> <span className="text-blue-400">function</span> <span className="text-yellow-200">PricingCard</span>(&#123; title, price &#125;) &#123;
        <span className="text-purple-400">return</span> (
          <span className="text-neutral-500">&lt;</span><span className="text-emerald-400">div</span> <span className="text-cyan-300">className</span>=<span className="text-orange-300">"p-6 border rounded-xl"</span><span className="text-neutral-500">&gt;</span>
            <span className="text-neutral-500">&lt;</span><span className="text-emerald-400">h3</span><span className="text-neutral-500">&gt;</span>&#123;title&#125;<span className="text-neutral-500">&lt;/</span><span className="text-emerald-400">h3</span><span className="text-neutral-500">&gt;</span>
            <span className="text-neutral-500">&lt;</span><span className="text-emerald-400">div</span><span className="text-neutral-500">&gt;</span>&#123;price&#125;<span className="text-neutral-500">&lt;/</span><span className="text-emerald-400">div</span><span className="text-neutral-500">&gt;</span>
          <span className="text-neutral-500">&lt;/</span><span className="text-emerald-400">div</span><span className="text-neutral-500">&gt;</span>
        )</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 border-t border-white/5 flex items-center gap-2.5 bg-neutral-900/40 relative z-10">
                <div className="flex-1 flex items-center gap-2 bg-neutral-950 rounded-full ring-1 ring-white/10 px-3.5 py-2 text-xs text-neutral-400 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <input className="bg-transparent outline-none flex-1 placeholder-neutral-600 text-neutral-200" placeholder="Ask follow-up..." value="" />
                </div>
                <button className="p-2 rounded-full text-white ring-1 ring-white/10 bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-all font-geist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="overflow-hidden transition-all duration-300 hover:-translate-y-1.5 animate-on-scroll bg-neutral-900/60 ring-white/10 ring-1 rounded-2xl relative backdrop-blur" style={{"animation": "fadeSlideIn 0.8s ease-out 0.2s both"}}>

          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter">Code Optimizer</h3>
              <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full ring-1 ring-blue-500/40 bg-blue-500/10 text-blue-200 font-geist">⚡ +32%</span>
            </div>
            <p className="text-sm text-neutral-400 mt-1 font-geist">Refactor to cleaner, faster code.</p>
            <div className="mt-4 rounded-xl overflow-hidden ring-1 ring-white/10 bg-zinc-950/80">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-900/70">
                <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                <span className="ml-3 text-[11px] text-neutral-400 font-geist">optimize.ts</span>
              </div>
              <div className="p-3 font-mono text-[11px] leading-5">
                <pre className="whitespace-pre-wrap"><span className="text-neutral-500 font-geist">04</span> <span className="text-neutral-400 font-geist">// Before</span>
      <span className="text-neutral-500 font-geist">05</span> <span className="px-1 rounded bg-rose-500/10 text-rose-300 font-geist">- useEffect(() =&gt; fetchData(), [])</span>
      <span className="text-neutral-500 font-geist">06</span> <span className="text-neutral-400 font-geist">// After</span>
      <span className="text-neutral-500 font-geist">07</span> <span className="px-1 rounded bg-emerald-500/10 text-emerald-300 font-geist">+ const data = await api.get('/data')</span>
      <span className="text-neutral-500 font-geist">08</span> <span className="px-1 rounded bg-emerald-500/10 text-emerald-300 font-mono typing-effect">+ useMemo(() =&gt; renderList(data), [data])</span></pre>
              </div>
              <div className="px-3 py-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-neutral-400 font-geist">Analyzed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-300 font-geist">-190ms</span>
                  <div className="h-1 w-14 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 rounded-full px-3 py-1.5 text-xs text-white ring-1 ring-blue-400 font-geist" style={{"background": "linear-gradient(45deg,#06b6d4,#3b82f6,#2563eb)"}}>Apply fix</button>
              <button className="flex-1 rounded-full px-3 py-1.5 text-xs text-neutral-200 ring-1 ring-white/10 bg-white/5 font-geist">Copy patch</button>
            </div>
          </div>
        </div>


        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.3s both"}}>
          <div className="p-4 sm:p-5">
            <h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter">Theme Control</h3>
            <p className="text-sm text-neutral-400 mt-1 font-geist">Adjust styles with one click.</p>
            <div className="mt-4 rounded-xl bg-zinc-950/80 ring-1 ring-white/10 p-3 relative overflow-hidden">

              <p className="text-[11px] uppercase tracking-wide text-blue-200 mb-2 font-geist">Select Theme</p>

              <div className="space-y-2 relative">

                <div className="absolute left-0 top-0 w-full h-8 bg-white/5 rounded-lg border border-white/5 anim-active-indicator transition-transform"></div>


                <div className="flex items-center gap-2 h-8 px-2 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
                  <span className="text-sm text-white font-geist">Dark</span>
                </div>


                <div className="flex items-center gap-2 opacity-70 h-8 px-2 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="text-sm text-neutral-300 font-geist">Light</span>
                </div>


                <div className="flex items-center gap-2 opacity-70 h-8 px-2 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="text-sm text-neutral-300 font-geist">System</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                <span className="text-[11px] px-2 py-1 rounded-full ring-1 ring-white/10 bg-white/5 text-neutral-300 font-geist">Rounded</span>
                <span className="text-[11px] px-2 py-1 rounded-full ring-1 ring-white/10 bg-white/5 text-neutral-300 font-geist">Glass</span>
                <span className="text-[11px] px-2 py-1 rounded-full ring-1 ring-blue-400/50 bg-blue-500/10 text-blue-200 font-geist">Accent: Blue</span>
              </div>
            </div>
          </div>
        </div>


        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.4s both"}}>
          <div className="p-4 sm:p-5">
            <h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter">Team Collaboration</h3>
            <p className="text-sm text-neutral-400 mt-1 font-geist">Review and approve changes faster.</p>
            <div className="mt-4 rounded-xl bg-zinc-950/80 ring-1 ring-white/10 p-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-6 h-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=120&amp;q=80" alt="" />
                  <img className="w-6 h-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop" alt="" />
                </div>
                <span className="ml-1 text-xs text-neutral-400 font-geist">Alex • Dana</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full ring-1 ring-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-geist animate-pulse">2 new</span>
              </div>
              <div className="mt-3 rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3 text-sm text-neutral-200 font-geist relative overflow-hidden">

                <div className="anim-comment">
                  Can we refactor this grid to a reusable <span className="text-blue-300">Card</span> component?
                </div>
                <div className="anim-response absolute inset-0 p-3 bg-neutral-900 text-emerald-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Changes approved!
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button className="flex-1 rounded-full px-3 py-1.5 text-xs text-neutral-200 ring-1 ring-white/10 bg-white/5 font-geist hover:bg-white/10 transition">Reply</button>
                <button className="flex-1 overflow-hidden relative rounded-full px-3 py-1.5 text-xs text-white ring-1 ring-blue-400 font-geist" style={{"background": "linear-gradient(45deg,#06b6d4,#3b82f6,#2563eb)"}}>

                   <span className="relative z-10 anim-btn-click block">Approve</span>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.5s both"}}>
          <div className="p-4 sm:p-5">
            <h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter">Template Library</h3>
            <p className="text-sm text-neutral-400 mt-1 font-geist">Start with curated, reusable patterns.</p>
            <div className="mt-4 space-y-2">


              <div className="rounded-xl ring-1 p-3 flex items-center gap-3 anim-hover-1 transition-colors">
                <div className="flex-1">
                  <p className="text-sm text-neutral-200 font-geist">Pricing Section</p>
                  <p className="text-[11px] text-neutral-500 font-geist">2 columns • CTA</p>
                </div>
                <button className="inline-flex items-center gap-1 text-[11px] text-blue-200 bg-blue-900/30 rounded-full px-2 py-0.5 ring-1 ring-blue-700 font-geist hover:bg-blue-800/50 transition">Add</button>
              </div>

              <div className="rounded-xl ring-1 p-3 flex items-center gap-3 anim-hover-2 transition-colors">
                <div className="flex-1">
                  <p className="text-sm text-neutral-200 font-geist">Feature Grid</p>
                  <p className="text-[11px] text-neutral-500 font-geist">3x3 cards</p>
                </div>
                <button className="inline-flex items-center gap-1 text-[11px] text-blue-200 bg-blue-900/30 rounded-full px-2 py-0.5 ring-1 ring-blue-700 font-geist hover:bg-blue-800/50 transition">Use</button>
              </div>
            </div>
          </div>
        </div>
      </div>
                </section>
              </div>
            </section><section className="sm:px-6 lg:px-8 sm:py-24 animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="features">
              <div className="border-gradient sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 rounded-3xl pt-12 pr-12 pb-12 pl-12">
        <div className="mb-16 relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.2s both"}}>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-cyan-500/30 bg-cyan-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
            <span className="text-[11px] font-medium tracking-widest text-cyan-200 font-geist uppercase">How it Works</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter mb-6">
            From setup to automation in
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter">
              3 simple steps
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-geist">
            Streamline your development workflow. Connect your design tools, automate code generation, and track performance in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:ring-white/20 animate-on-scroll flex flex-col bg-neutral-900/40 h-full ring-white/10 ring-1 rounded-2xl relative" style={{"animation": "fadeSlideIn 0.8s ease-out 0.3s both"}}>

        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

        <div className="flex flex-col h-full relative">
          <div className="flex flex-1 overflow-hidden bg-[#05030F] w-full rounded-t-2xl relative items-center justify-center min-h-[200px]">
            <div className="opacity-60 absolute inset-0" style={{"backgroundImage": "radial-gradient(rgba(30,41,59,0.6) 1px, transparent 0)", "backgroundSize": "18px 18px"}}></div>

            <div className="relative z-10 w-56 h-56 scale-90">

              <div className="absolute inset-2 rounded-full border border-slate-900/60"></div>
              <div className="absolute inset-2 rounded-full border-t-2 border-t-cyan-400/80 border-l-0 border-r-0 border-b-0">
              </div>
              <div className="absolute inset-10 rounded-full border border-slate-900/60"></div>
              <div className="absolute inset-10 rounded-full border-t-2 border-t-blue-500/80 border-l-0 border-r-0 border-b-0">
              </div>


              <div className="absolute inset-[86px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-600 shadow-[0_0_80px_rgba(59,130,246,0.6)] flex items-center justify-center z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                   <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                   <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>


              <div className="absolute inset-0 z-10 pointer-events-none" style={{"animation": "orbit 40s linear infinite"}}>

                <div className="absolute -left-1 top-16 h-9 w-9 rounded-full border border-white/20 overflow-hidden bg-[#0F172A] flex items-center justify-center pointer-events-auto shadow-lg shadow-black/50 backdrop-blur-sm" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 14.5v-3h3v3a1.5 1.5 0 0 1-3 0Z" fill="#0ACF83"></path><path d="M5.5 8.5v-3h3v3h-3Z" fill="#A259FF"></path><path d="M8.5 5.5h3v3h-3z" fill="#F24E1E"></path><path d="M11.5 5.5h3v3a1.5 1.5 0 0 1-3 3v-3Z" fill="#FF7262"></path><path d="M11.5 14.5a1.5 1.5 0 0 1-3 0v-3h3v3Z" fill="#1ABCFE"></path></svg>
                </div>

                <div className="absolute right-2 top-6 h-9 w-9 rounded-full border border-white/20 overflow-hidden bg-[#0F172A] flex items-center justify-center pointer-events-auto shadow-lg shadow-black/50 backdrop-blur-sm" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>

                <div className="absolute -right-1 bottom-10 h-9 w-9 rounded-full border border-white/20 overflow-hidden bg-[#0F172A] flex items-center justify-center pointer-events-auto shadow-lg shadow-black/50 backdrop-blur-sm" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-white"><rect width="8" height="8" x="13" y="2" rx="1.5"></rect><path d="M13 10V3a2 2 0 0 1 2-2h4"></path><rect width="8" height="8" x="3" y="14" rx="1.5"></rect><path d="M11 14v7a2 2 0 0 1-2 2H5"></path><rect width="8" height="8" x="14" y="13" rx="1.5"></rect><path d="M14 13h7a2 2 0 0 1 2 2v4"></path><rect width="8" height="8" x="2" y="3" rx="1.5"></rect><path d="M10 3H3a2 2 0 0 0-2 2v4"></path></svg>
                </div>

                <div className="absolute left-5 bottom-3 h-9 w-9 rounded-full border border-white/20 overflow-hidden bg-[#0F172A] flex items-center justify-center pointer-events-auto shadow-lg shadow-black/50 backdrop-blur-sm" style={{"animation": "orbit-reverse 40s linear infinite"}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 bg-neutral-950/30 border-white/5 border-t pt-6 pr-6 pb-6 pl-6 relative">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 ring-1 ring-cyan-500/20 font-geist">
              Step 1
            </div>
            <h3 className="text-xl text-zinc-100 font-medium tracking-tight mb-2 font-geist">Connect your existing tools</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-geist">We integrate with your stack instantly. Connect Figma,
              GitHub, and Slack without complex setup.</p>
          </div>
        </div>
      </div>


          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-white/20 animate-on-scroll">


          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

          <div className="flex flex-col h-full relative justify-between">

            <div className="flex flex-col h-64 p-6 space-y-3 justify-center">


              <div className="animate-step-cycle delay-0 w-full flex items-center justify-between p-3 rounded-xl ring-1 ring-white/5 relative overflow-hidden bg-neutral-900 transition-all duration-500">
                <div className="animate-content-cycle delay-0 absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                <div className="flex items-center gap-3 pl-1.5">
                  <span className="text-sm text-white font-medium font-geist">Analysis Engine</span>
                  <span className="animate-content-cycle delay-0 text-[10px] font-medium text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-900/50 uppercase tracking-wide">Running</span>
                </div>
                <div className="relative w-4 h-4 flex items-center justify-center">
                    <div className="animate-content-cycle delay-0 absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                </div>
              </div>


              <div className="animate-step-cycle delay-1 w-full flex items-center justify-between p-3 rounded-xl ring-1 ring-white/5 relative overflow-hidden bg-neutral-900 transition-all duration-500">
                <div className="animate-content-cycle delay-1 absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                <div className="flex items-center gap-3 pl-1.5">
                  <span className="text-sm text-white font-medium font-geist">Code Generation</span>
                  <span className="animate-content-cycle delay-1 text-[10px] font-medium text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-900/50 uppercase tracking-wide">Running</span>
                </div>
                <div className="relative w-4 h-4 flex items-center justify-center">
                    <div className="animate-content-cycle delay-1 absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                </div>
              </div>


              <div className="animate-step-cycle delay-2 w-full flex items-center justify-between p-3 rounded-xl ring-1 ring-white/5 relative overflow-hidden bg-neutral-900 transition-all duration-500">
                 <div className="animate-content-cycle delay-2 absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                 <div className="flex items-center gap-3 pl-1.5">
                  <span className="text-sm text-white font-medium font-geist">Optimization</span>
                  <span className="animate-content-cycle delay-2 text-[10px] font-medium text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-900/50 uppercase tracking-wide">Running</span>
                </div>
                <div className="relative w-4 h-4 flex items-center justify-center">
                    <div className="animate-content-cycle delay-2 absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                </div>
              </div>

            </div>


            <div className="bg-neutral-950/30 border-white/5 border-t p-6 relative">
               <div className="mb-4 inline-flex items-center gap-1.5 rounded bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 ring-1 ring-cyan-500/20 font-geist">
                 Step 2
               </div>
               <h3 className="text-xl text-zinc-100 font-medium tracking-tight mb-2 font-geist">Automate daily workflows</h3>
               <p className="text-sm text-zinc-400 leading-relaxed font-geist">Create streamlined processes that remove repetitive tasks. Let AI handle the heavy lifting.</p>
            </div>
          </div>
        </div>


          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-white/20 animate-on-scroll">




          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

          <div className="flex flex-col h-full relative justify-between">

              <div className="flex flex-col h-64 pt-6 pr-6 pb-6 pl-6 relative">
                  <div className="flex items-start justify-between z-10">
                      <div className="">
                          <div className="flex items-baseline gap-3">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" style={{"animation": "fadeIn 0.8s ease-out forwards"}}></span>
                              <span data-counter="" className="text-5xl text-white font-geist font-light tracking-tighter">0</span>
                          </div>
                          <p className="text-xs text-neutral-400 mt-2 font-geist tracking-wide uppercase font-medium opacity-0" style={{"animation": "fadeIn 0.8s ease-out 0.2s forwards"}}>Active Components</p>
                      </div>
                  </div>


                  <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
                      <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full text-neutral-700" style={{"overflow": "visible"}}>
                          <defs>
                              <linearGradient id="graph-gradient-fill" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.1"></stop>
                                  <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0"></stop>
                              </linearGradient>
                              <linearGradient id="line-shine" x1="0" y1="0" x2="1" y2="0">
                                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5"></stop>
                                  <stop offset="50%" stopColor="#fff" stopOpacity="1"></stop>
                                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5"></stop>
                              </linearGradient>
                               <filter id="glow-marker" x="-50%" y="-50%" width="200%" height="200%">
                                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                                  <feMerge>
                                      <feMergeNode in="coloredBlur"></feMergeNode>
                                      <feMergeNode in="SourceGraphic"></feMergeNode>
                                  </feMerge>
                              </filter>
                          </defs>


                          <path d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,70 C250,70 250,20 300,20 V100 H0 Z" fill="url(#graph-gradient-fill)" className="opacity-0" style={{"animation": "fadeIn 1.5s ease-out 0.5s forwards"}}></path>


                          <path d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,70 C250,70 250,20 300,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="600" strokeDashoffset="600" style={{"animation": "drawWave 2.5s ease-out forwards"}}></path>


                          <path d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,70 C250,70 250,20 300,20" fill="none" stroke="url(#line-shine)" strokeWidth="2" strokeDasharray="600" strokeDashoffset="600" style={{"animation": "drawWave 2.5s ease-out forwards"}}></path>


                          <g style={{"offsetPath": "path('M0,80 C50,80 50,40 100,40 C150,40 150,70 200,70 C250,70 250,20 300,20')", "animation": "markerTravel 6s linear infinite"}}>
                              <g style={{"animation": "markerBounce 2s ease-in-out infinite"}}>
                                   <circle r="4" fill="#22d3ee" filter="url(#glow-marker)"></circle>
                                   <circle r="1.5" fill="white"></circle>
                              </g>
                          </g>
                      </svg>
                  </div>
              </div>


              <div className="p-6 relative bg-neutral-950/30 border-t border-white/5">
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400 ring-1 ring-cyan-500/20 font-geist">
                      Step 3
                  </div>
                  <h3 className="text-xl text-zinc-100 font-medium tracking-tight mb-2 font-geist">Track everything in real time</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-geist">Monitor performance, spot bottlenecks early, and optimize your component library usage.</p>
              </div>
          </div>
      </div>
        </div>
      </div>
            </section>


            <section className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="testimonials">
              <div className="border-gradient sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 rounded-3xl pt-12 pr-12 pb-12 pl-12">
                <div className="mb-12 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.1s both"}}>
                    <div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/[0.03]">
                        <span className="text-[11px] font-medium tracking-widest text-zinc-300 font-geist">
                          02
                        </span>
                        <span className="h-3 w-px bg-white/10"></span>
                        <span className="text-[11px] tracking-wide text-zinc-400 font-geist">
                          Testimonials
                        </span>
                      </span>
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter">
                        Loved by designers,
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter">
                          trusted by teams
                        </span>
                      </h2>
                      <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl font-geist">
                        Real results from real teams — faster reviews, cleaner
                        handoff, and a smoother path from idea to shipped UI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden sm:rounded-3xl bg-zinc-950 border-zinc-900 border rounded-2xl relative animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.2s both"}}>
                  <div className="overflow-hidden sm:py-8 group pt-6 pr-6 pb-6 pl-6 relative" style={{"maskImage": "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)", "WebkitMaskImage": "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)"}}>

        <div className="flex gap-4 sm:gap-6 w-max animate-[marquee-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">


          <article className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl ring-1 ring-zinc-900 bg-zinc-900/50 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl sm:text-5xl text-zinc-700 leading-none font-geist font-light tracking-tighter">
                "
              </span>
              <div className="w-14 h-14 rounded-xl ring-1 ring-white/10 overflow-hidden bg-neutral-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg" alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-geist">
              "As a digital artist, showcasing my work beautifully is
              everything. DesignFlow's dark UI and subtle neon accents
              make my portfolio pop."
            </p>
            <div className="mt-6">
              <p className="text-xs text-neutral-500 font-geist">
                CEO of Capital Agency
              </p>
              <p className="text-sm text-neutral-300 mt-1 font-geist">
                G. Alexander
              </p>
            </div>
          </article>

          <article className="w-[320px] sm:w-[400px] shrink-0 sm:p-8 p-6 flex flex-col justify-between rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950 hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl sm:text-5xl text-zinc-600 leading-none font-geist font-light tracking-tighter">
                "
              </span>
              <div className="w-14 h-14 rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a34e7279-3582-477a-8b2b-d9e9789eb63c_1600w.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-neutral-100 text-lg sm:text-xl leading-relaxed font-geist">
              "DesignFlow was exactly what our startup needed. We launched
              our production website in days, not months — critical for
              early market entry."
            </p>
            <div className="mt-6">
              <p className="text-xs text-neutral-400 font-geist">
                CEO of Orix Agency
              </p>
              <p className="text-sm text-neutral-200 mt-1 font-geist">
                J. Amander
              </p>
            </div>
          </article>

          <article className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl ring-1 ring-zinc-900 bg-zinc-900/50 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl sm:text-5xl text-zinc-700 leading-none font-geist font-light tracking-tighter">
                "
              </span>
              <div className="w-14 h-14 rounded-xl ring-1 ring-white/10 overflow-hidden bg-neutral-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dadd731-6120-4637-ada0-dcaa8dbc507e_1600w.jpg" alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-geist">
              "The perfect balance of stunning aesthetics and real-world
              functionality. If you want high-impact results without the
              custom build hassle, this is it."
            </p>
            <div className="mt-6">
              <p className="text-xs text-neutral-500 font-geist">
                CEO of Creative Agency
              </p>
              <p className="text-sm text-neutral-300 mt-1 font-geist">
                A. Levine
              </p>
            </div>
          </article>


          <article className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl ring-1 ring-zinc-900 bg-zinc-900/50 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl sm:text-5xl text-zinc-700 leading-none font-geist font-light tracking-tighter">
                "
              </span>
              <div className="w-14 h-14 rounded-xl ring-1 ring-white/10 overflow-hidden bg-neutral-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg" alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-geist">
              "As a digital artist, showcasing my work beautifully is
              everything. DesignFlow's dark UI and subtle neon accents
              make my portfolio pop."
            </p>
            <div className="mt-6">
              <p className="text-xs text-neutral-500 font-geist">
                CEO of Capital Agency
              </p>
              <p className="text-sm text-neutral-300 mt-1 font-geist">
                G. Alexander
              </p>
            </div>
          </article>

          <article className="w-[320px] sm:w-[400px] shrink-0 sm:p-8 p-6 flex flex-col justify-between rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950 hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl sm:text-5xl text-zinc-600 leading-none font-geist font-light tracking-tighter">
                "
              </span>
              <div className="w-14 h-14 rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a34e7279-3582-477a-8b2b-d9e9789eb63c_1600w.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-neutral-100 text-lg sm:text-xl leading-relaxed font-geist">
              "DesignFlow was exactly what our startup needed. We launched
              our production website in days, not months — critical for
              early market entry."
            </p>
            <div className="mt-6">
              <p className="text-xs text-neutral-400 font-geist">
                CEO of Orix Agency
              </p>
              <p className="text-sm text-neutral-200 mt-1 font-geist">
                J. Amander
              </p>
            </div>
          </article>

          <article className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl ring-1 ring-zinc-900 bg-zinc-900/50 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl sm:text-5xl text-zinc-700 leading-none font-geist font-light tracking-tighter">
                "
              </span>
              <div className="w-14 h-14 rounded-xl ring-1 ring-white/10 overflow-hidden bg-neutral-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dadd731-6120-4637-ada0-dcaa8dbc507e_1600w.jpg" alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-geist">
              "The perfect balance of stunning aesthetics and real-world
              functionality. If you want high-impact results without the
              custom build hassle, this is it."
            </p>
            <div className="mt-6">
              <p className="text-xs text-neutral-500 font-geist">
                CEO of Creative Agency
              </p>
              <p className="text-sm text-neutral-300 mt-1 font-geist">
                A. Levine
              </p>
            </div>
          </article>

        </div>
      </div>
                </div>
              </div>
            </section>


            <section className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="pricing">
              <div className="border-gradient sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 rounded-3xl pt-12 pr-12 pb-12 pl-12" style={{"animation": "fadeSlideIn 0.8s ease-out 0.1s both"}}>
                <div className="mb-12 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 gap-x-6 gap-y-6 items-start">
                    <div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/[0.03]">
                        <span className="text-[11px] font-medium tracking-widest text-zinc-300 font-geist">
                          03
                        </span>
                        <span className="h-3 w-px bg-white/10"></span>
                        <span className="text-[11px] tracking-wide text-zinc-400 font-geist">
                          Pricing
                        </span>
                      </span>
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter">
                        Simple plans,
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter">
                          built for growth
                        </span>
                      </h2>
                      <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl font-geist">
                        Choose a plan that fits your workflow — from individual
                        creators to growing teams.
                      </p>
                    </div>
                    <div className="lg:col-span-3 flex lg:justify-end items-center">
                      <div className="inline-flex items-center p-1 rounded-full bg-neutral-900 ring-1 ring-white/10 relative">
                        <button id="billing-monthly" className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-blue-500/25 font-geist" data-aura-onclick="switchBilling('monthly')">
                          Monthly
                        </button>
                        <button className="transition-all duration-300 hover:text-white text-sm font-medium text-zinc-400 font-geist rounded-full pt-2 pr-5 pb-2 pl-5 relative" data-aura-onclick="switchBilling('yearly')" id="billing-yearly">
                          Yearly <span className="text-[10px] text-emerald-400 ml-1 font-normal">-20%</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden ring-0 rounded-none relative">
                  <div className="absolute -right-20 -top-24 h-72 w-72 bg-gradient-to-tr from-blue-500/20 to-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="sm:px-0 sm:pt-0 sm:pb-0 pt-6 pr-6 pb-6 pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">

                      <div className="overflow-hidden sm:px-8 sm:py-8 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl ring-0 pt-6 pr-5 pb-6 pl-5 relative" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))", "--border-radius-before": "24px"}}>
                        <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{"backgroundImage": "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", "backgroundSize": "18px 18px"}}></div>
                        <div className="relative">
                          <div className="flex items-end gap-3">
                            <p id="price-starter" className="bg-clip-text sm:text-6xl text-5xl font-light text-transparent tracking-tighter font-geist bg-[#ffffff]">
                              $49
                            </p>
                            <span id="period-starter" className="text-[11px] uppercase text-neutral-400 mb-1 font-geist">
                              /month
                            </span>
                          </div>
                          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-geist">
                            Start transforming designs into code instantly with
                            AI-powered generation.
                          </p>
                          <div className="mt-6">
                            <button className="group relative inline-flex w-full h-12 cursor-pointer overflow-hidden rounded-full items-center justify-center text-base font-medium text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.25),_inset_0_-3px_8px_rgba(0,0,0,0.35),_0_4px_10px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] hover:-translate-y-[3px]" style={{"background": "linear-gradient(45deg, #06b6d4, #3b82f6, #2563eb)"}}>
                              <span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0 font-geist">
                                Start Free Trial
                              </span>
                              <span className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 font-geist">
                                Start Free Trial
                              </span>
                            </button>
                          </div>
                          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-3 font-geist">
                              <span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                              50 design conversions per month
                            </li>
                            <li className="flex items-start gap-3 font-geist">
                              <span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                              React, Vue &amp; HTML output
                            </li>
                          </ul>
                          <div className="mt-6 h-px bg-white/10"></div>
                          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-2 font-geist">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 12l2 2 4-4"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              Figma &amp; Adobe XD integration
                            </li>
                            <li className="flex items-start gap-2 font-geist">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 12l2 2 4-4"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              Production-ready, clean code
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="sm:px-8 sm:py-8 overflow-hidden bg-gradient-to-br from-white/10 to-white/0 rounded-3xl ring-0 pt-6 pr-5 pb-6 pl-5 relative" style={{"position": "relative", "--border-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))", "--border-radius-before": "24px"}}>
                        <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{"backgroundImage": "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", "backgroundSize": "18px 18px"}}></div>
                        <div className="relative">
                          <div className="flex items-end gap-3">
                            <p id="price-pro" className="bg-clip-text sm:text-6xl text-5xl font-light text-transparent tracking-tighter font-geist bg-[#ffffff]">
                              $149
                            </p>
                            <span id="period-pro" className="text-[11px] uppercase text-neutral-400 mb-1 font-geist">
                              /month
                            </span>
                          </div>
                          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-geist">
                            Ship faster with unlimited conversions and advanced team
                            collaboration features.
                          </p>
                          <div className="mt-6">
                            <button className="group relative inline-flex items-center justify-center w-full h-12 px-6 py-3 text-sm font-semibold tracking-tight cursor-pointer overflow-hidden rounded-full border border-white/15 bg-white/5 text-neutral-300 transition-all duration-[1000ms] hover:-translate-y-[3px] hover:text-white">
                              <span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                                Start Free Trial
                              </span>
                              <span className="absolute inset-0 z-10 flex items-center justify-center font-medium opacity-0 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-geist">
                                Start Free Trial
                              </span>
                              <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70 blur-[2px]"></span>
                              <span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
                            </button>
                          </div>
                          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-3 font-geist">
                              <span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                              Unlimited design conversions
                            </li>
                            <li className="flex items-start gap-3 font-geist">
                              <span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                              Advanced component library
                            </li>
                          </ul>
                          <div className="mt-6 h-px bg-white/10"></div>
                          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                            <li className="flex items-start gap-2 font-geist">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 12l2 2 4-4"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              Priority support &amp; code reviews
                            </li>
                            <li className="flex items-start gap-2 font-geist">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 12l2 2 4-4"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              API access &amp; custom integrations
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>


            <footer className="z-10 border-zinc-800 mt-20 relative animate-on-scroll" style={{"animation": "fadeSlideIn 0.8s ease-out 0.2s both"}}>
              <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
                <div className="overflow-hidden bg-zinc-900/60 ring-1 ring-white/10 rounded-3xl relative backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10 pointer-events-none"></div>
                  <div className="sm:p-12 lg:p-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                      <div className="lg:col-span-4 space-y-4 max-w-md">
                        <h3 className="text-3xl text-white font-geist font-light tracking-tighter">
                          DesignFlow
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                          Creative developer tools for designers who build.
                        </p>
                        <p className="text-sm text-zinc-500 font-geist">
                          548 Market St, San Francisco, CA 94104
                        </p>
                        <a href="mailto:hello@designflow.ai" className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-white ring-1 ring-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition font-geist">
                          Contact Us
                          <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M5 12h14M13 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                      <nav className="lg:col-span-4">
                        <div className="grid grid-cols-2 gap-8">
                          <ul className="space-y-2">
                            <li className="text-xs uppercase tracking-wide text-zinc-500 font-geist">
                              Product
                            </li>
                            <li>
                              <a href="#features" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                                Features
                              </a>
                            </li>
                            <li>
                              <a href="#pricing" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                                Pricing
                              </a>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="text-xs uppercase tracking-wide text-zinc-500 font-geist">
                              Company
                            </li>
                            <li className="">
                              <a href="#" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                                About
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                                Careers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <div className="lg:col-span-4 w-full max-w-md lg:justify-self-end">
                        <h4 className="text-zinc-100 font-semibold text-lg tracking-tight font-geist">
                          Stay updated
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1 mb-5 font-geist">
                          Monthly updates, templates, and tips. No spam.
                        </p>
                        <form className="flex items-center gap-3">
                          <input type="email" required="" placeholder="you@company.com" className="flex-1 rounded-full bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none ring-1 ring-white/10 focus:ring-blue-400/60 transition" />
                          <button type="submit" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition font-geist">
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <p className="text-xs text-zinc-500 font-geist">
                        © 2025 DesignFlow. All rights reserved.
                      </p>
                      <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                          GitHub
                        </a>
                        <a href="#" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                          Twitter
                        </a>
                        <a href="#" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                          LinkedIn
                        </a>
                        <a href="#" className="text-sm text-zinc-300 hover:text-white transition font-geist">
                          Discord
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
    </div>
  );
}