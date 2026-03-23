"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [visible, setVisible] = useState(false)

  const springConfig = { stiffness: 500, damping: 28 }
  const x = useSpring(-200, springConfig)
  const y = useSpring(-200, springConfig)

  useEffect(() => {
    // Check if it's a touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [x, y, visible])

  if (isTouchDevice) return null

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor fixed pointer-events-none z-[9999] rounded-full"
      style={{
        x,
        y,
        top: 0,
        left: 0,
        translateX: "-50%",
        translateY: "-50%",
        width: hovering ? 36 : 12,
        height: hovering ? 36 : 12,
        backgroundColor: hovering ? "#1A56DB" : "#ffffff",
        mixBlendMode: hovering ? "difference" : "normal",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "width 0.2s, height 0.2s, background-color 0.2s, opacity 0.3s",
      }}
    />
  )
}
