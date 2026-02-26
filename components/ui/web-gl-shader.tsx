"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: any
    animationId: number | null
  }>({ scene: null, camera: null, renderer: null, mesh: null, uniforms: null, animationId: null })

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() { gl_Position = vec4(position, 1.0); }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        // Fio 1 — amarelo puro #ffd600, mais rápido
        float f1 = 0.018 / abs(p.y + sin((p.x + time * 1.0) * xScale) * yScale);
        vec3 c1 = vec3(1.0, 0.839, 0.0) * f1;

        // Fio 2 — dourado #ffaa00, levemente deslocado em fase e amplitude
        float f2 = 0.015 / abs(p.y + sin((p.x + time * 0.85) * xScale * 0.9) * yScale * 1.15 - 0.04);
        vec3 c2 = vec3(1.0, 0.667, 0.0) * f2;

        // Fio 3 — âmbar escuro #cc8800, mais lento e mais baixo
        float f3 = 0.012 / abs(p.y + sin((p.x + time * 0.7) * xScale * 1.1) * yScale * 0.9 + 0.05);
        vec3 c3 = vec3(0.8, 0.533, 0.0) * f3;

        // Soma dos 3 fios
        vec3 color = c1 + c2 + c3;

        // Onde a intensidade é muito alta, puxa para branco (pico de luz)
        float brightness = dot(color, vec3(0.333));
        color = mix(color, vec3(1.0, 0.97, 0.85), clamp(brightness - 1.2, 0.0, 1.0));

        // Cap para não saturar demais
        color = clamp(color, 0.0, 1.5);

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
      refs.renderer.setClearColor(new THREE.Color(0x000000), 0)
      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      refs.uniforms = {
        resolution: { value: [window.innerWidth, window.innerHeight] },
        time:       { value: 0.0 },
        xScale:     { value: 1.2 },
        yScale:     { value: 0.38 },
        distortion: { value: 0.0 },
      }

      const position = [-1,-1,0, 1,-1,0, -1,1,0, 1,-1,0, -1,1,0, 1,1,0]
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(position), 3))

      const material = new THREE.RawShaderMaterial({
        vertexShader, fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)
      handleResize()
    }

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.008
      if (refs.renderer && refs.scene && refs.camera)
        refs.renderer.render(refs.scene, refs.camera)
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      refs.renderer.setSize(window.innerWidth, window.innerHeight, false)
      refs.uniforms.resolution.value = [window.innerWidth, window.innerHeight]
    }

    initScene()
    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) refs.mesh.material.dispose()
      }
      refs.renderer?.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ display: "block" }} />
}
