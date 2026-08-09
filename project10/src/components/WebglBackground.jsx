import React, { useEffect, useRef } from 'react';

export default function WebglBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    let animationFrameId;
    let startTime = Date.now();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() { gl_Position = aVertexPosition; }
    `;

    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < 4; i++) {
              value += amplitude * noise(st);
              st *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          uv = uv * 2.0 - 1.0;
          uv.x *= u_resolution.x / u_resolution.y;

          vec3 color = vec3(0.02, 0.01, 0.01);
          float dist = abs(uv.x);
          
          float core = 0.001 / (dist + 0.001);
          vec3 coreColor = vec3(1.0, 0.8, 0.6) * core * 1.5;

          float halo = 0.015 / (dist + 0.005);
          vec3 haloColor = vec3(1.0, 0.3, 0.0) * halo * 0.5;

          vec2 smokeUV = uv * 2.0 + vec2(0.0, u_time * -0.2);
          float n = fbm(smokeUV + u_time * 0.1);
          
          float smokeMask = smoothstep(0.8, 0.0, dist);
          vec3 smokeColor = vec3(0.8, 0.2, 0.0) * n * smokeMask * 0.3;

          vec2 screenPos = gl_FragCoord.xy;
          int x = int(mod(screenPos.x, 4.0));
          int y = int(mod(screenPos.y, 4.0));
          float ditherVal = 0.0;
          
          float m[16];
          m[0]=0.0; m[1]=8.0; m[2]=2.0; m[3]=10.0;
          m[4]=12.0; m[5]=4.0; m[6]=14.0; m[7]=6.0;
          m[8]=3.0; m[9]=11.0; m[10]=1.0; m[11]=9.0;
          m[12]=15.0; m[13]=7.0; m[14]=13.0; m[15]=5.0;
          
          int index = y * 4 + x;
          for(int i=0; i<16; i++) { 
            if(i==index) ditherVal = m[i]/16.0; 
          }
          
          vec3 finalColor = color + haloColor + smokeColor;
          
          float lum = dot(finalColor, vec3(0.299, 0.587, 0.114));
          if (lum < 0.1 && core < 0.5) {
              finalColor += (ditherVal - 0.5) * 0.03; 
          }

          finalColor += coreColor;

          float vignette = length(uv) * 0.4;
          finalColor *= 1.0 - vignette;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fsSource);
    
    if (!vertexShader || !fragmentShader) return;

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0]), gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    gl.enableVertexAttribArray(vertexPosition);
    gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(shaderProgram, 'u_resolution');
    const uTime = gl.getUniformLocation(shaderProgram, 'u_time');

    const render = () => {
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, (Date.now() - startTime) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(shaderProgram);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}