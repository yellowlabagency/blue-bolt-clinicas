"use client"
import { useEffect, useRef } from "react"

// Worker code runs the WebGL loop entirely off the main thread via OffscreenCanvas
const WORKER_CODE = `
'use strict';

let gl, uRes, uTime, time = 0;

const vertSrc = \`
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
\`;

const fragSrc = \`
  precision highp float;
  uniform vec2 u_res;
  uniform float u_time;
  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_res) / min(u_res.x, u_res.y);
    float xScale = 1.2;
    float yScale = 0.38;
    float f1 = 0.018 / abs(p.y + sin((p.x + u_time * 1.0) * xScale) * yScale);
    vec3 c1 = vec3(1.0, 0.839, 0.0) * f1;
    float f2 = 0.015 / abs(p.y + sin((p.x + u_time * 0.85) * xScale * 0.9) * yScale * 1.15 - 0.04);
    vec3 c2 = vec3(1.0, 0.667, 0.0) * f2;
    float f3 = 0.012 / abs(p.y + sin((p.x + u_time * 0.7) * xScale * 1.1) * yScale * 0.9 + 0.05);
    vec3 c3 = vec3(0.8, 0.533, 0.0) * f3;
    vec3 color = c1 + c2 + c3;
    float brightness = dot(color, vec3(0.333));
    color = mix(color, vec3(1.0, 0.97, 0.85), clamp(brightness - 1.2, 0.0, 1.0));
    color = clamp(color, 0.0, 1.5);
    gl_FragColor = vec4(color, 1.0);
  }
\`;

function compile(type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

function loop() {
  time += 0.008;
  gl.uniform1f(uTime, time);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(loop);
}

self.onmessage = function(e) {
  if (e.data.type === 'init') {
    const canvas = e.data.canvas;
    gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'high-performance' });
    if (!gl) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    uRes = gl.getUniformLocation(prog, 'u_res');
    uTime = gl.getUniformLocation(prog, 'u_time');
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    requestAnimationFrame(loop);
  } else if (e.data.type === 'resize') {
    if (!gl) return;
    gl.canvas.width = e.data.w;
    gl.canvas.height = e.data.h;
    gl.viewport(0, 0, e.data.w, e.data.h);
    gl.uniform2f(uRes, e.data.w, e.data.h);
  }
};
`

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const supportsOffscreen =
      typeof OffscreenCanvas !== "undefined" &&
      typeof canvas.transferControlToOffscreen === "function"

    if (supportsOffscreen) {
      try {
        const offscreen = canvas.transferControlToOffscreen()
        const blob = new Blob([WORKER_CODE], { type: "application/javascript" })
        const url = URL.createObjectURL(blob)
        const worker = new Worker(url)
        URL.revokeObjectURL(url)

        worker.postMessage({ type: "init", canvas: offscreen }, [offscreen])

        const ro = new ResizeObserver(() => {
          worker.postMessage({ type: "resize", w: canvas.offsetWidth, h: canvas.offsetHeight })
        })
        ro.observe(canvas)

        return () => {
          worker.terminate()
          ro.disconnect()
        }
      } catch {
        // fall through to main-thread fallback
      }
    }

    // Main-thread fallback (Safari / older browsers)
    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "high-performance" })
    if (!gl) return

    const vertSrc = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `
    const fragSrc = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - u_res) / min(u_res.x, u_res.y);
        float xScale = 1.2;
        float yScale = 0.38;
        float f1 = 0.018 / abs(p.y + sin((p.x + u_time * 1.0) * xScale) * yScale);
        vec3 c1 = vec3(1.0, 0.839, 0.0) * f1;
        float f2 = 0.015 / abs(p.y + sin((p.x + u_time * 0.85) * xScale * 0.9) * yScale * 1.15 - 0.04);
        vec3 c2 = vec3(1.0, 0.667, 0.0) * f2;
        float f3 = 0.012 / abs(p.y + sin((p.x + u_time * 0.7) * xScale * 1.1) * yScale * 0.9 + 0.05);
        vec3 c3 = vec3(0.8, 0.533, 0.0) * f3;
        vec3 color = c1 + c2 + c3;
        float brightness = dot(color, vec3(0.333));
        color = mix(color, vec3(1.0, 0.97, 0.85), clamp(brightness - 1.2, 0.0, 1.0));
        color = clamp(color, 0.0, 1.5);
        gl_FragColor = vec4(color, 1.0);
      }
    `

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]), gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "u_res")
    const uTime = gl.getUniformLocation(prog, "u_time")

    let time = 0
    let rafId: number

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
      gl.uniform2f(uRes, w, h)
    }

    const loop = () => {
      rafId = requestAnimationFrame(loop)
      time += 0.008
      gl.uniform1f(uTime, time)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    resize()
    window.addEventListener("resize", resize)
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      gl.deleteProgram(prog)
      gl.deleteBuffer(buf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
      style={{ willChange: "transform" }}
    />
  )
}
