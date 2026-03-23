"use client"
import { useEffect, useRef } from "react"

const VERT_SRC = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG_SRC = `
  precision highp float;
  uniform vec2 u_res;
  uniform float u_time;
  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_res) / min(u_res.x, u_res.y);
    float xScale = 1.2;
    float yScale = 0.38;
    float f1 = 0.018 / abs(p.y + sin((p.x + u_time * 1.0) * xScale) * yScale);
    vec3 c1 = vec3(0.102, 0.337, 0.859) * f1;
    float f2 = 0.015 / abs(p.y + sin((p.x + u_time * 0.85) * xScale * 0.9) * yScale * 1.15 - 0.04);
    vec3 c2 = vec3(0.039, 0.165, 0.431) * f2;
    float f3 = 0.012 / abs(p.y + sin((p.x + u_time * 0.7) * xScale * 1.1) * yScale * 0.9 + 0.05);
    vec3 c3 = vec3(0.2, 0.4, 0.9) * f3;
    vec3 color = c1 + c2 + c3;
    float brightness = dot(color, vec3(0.333));
    color = mix(color, vec3(0.85, 0.92, 1.0), clamp(brightness - 1.2, 0.0, 1.0));
    color = clamp(color, 0.0, 1.5);
    gl_FragColor = vec4(color, 1.0);
  }
`

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "high-performance" })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT_SRC))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG_SRC))
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
