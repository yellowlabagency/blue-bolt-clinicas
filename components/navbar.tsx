"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { getWhatsAppLink } from "@/lib/whatsapp"

const MENU_LINKS = [
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "SOBRE", href: "#sobre" },
]

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/yellowlab.agency" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/yellowlabagency/about/" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // GSAP animation
  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current || !linksRef.current) return

    const links = linksRef.current.querySelectorAll(".sidebar-link")
    const extras = linksRef.current.querySelectorAll(".sidebar-extra")

    if (isOpen) {
      document.body.style.overflow = "hidden"
      gsap.set(sidebarRef.current, { display: "flex" })
      gsap.fromTo(overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: "power2.out" }
      )
      gsap.fromTo(sidebarRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.6, ease: "power4.out" }
      )
      gsap.fromTo(links,
        { yPercent: 80, opacity: 0, rotate: 5 },
        { yPercent: 0, opacity: 1, rotate: 0, duration: 0.5, stagger: 0.08, delay: 0.25, ease: "power3.out" }
      )
      gsap.fromTo(extras,
        { opacity: 0, yPercent: 20 },
        { opacity: 1, yPercent: 0, duration: 0.4, stagger: 0.06, delay: 0.45, ease: "power2.out" }
      )
      gsap.to(iconRef.current, { rotate: 45, duration: 0.4, ease: "power2.out" })
    } else {
      document.body.style.overflow = ""
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3 })
      gsap.to(sidebarRef.current, {
        xPercent: 100, duration: 0.5, ease: "power3.in",
        onComplete: () => { if (sidebarRef.current) gsap.set(sidebarRef.current, { display: "none" }) }
      })
      gsap.to(iconRef.current, { rotate: 0, duration: 0.4, ease: "power2.out" })
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <div ref={containerRef}>
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#000000]/95 border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}>
        <div className="flex items-center justify-between px-6 md:px-16 h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-display text-2xl md:text-3xl text-[#ffffff] tracking-tight hover:text-[#ffd600] transition-colors">
            YELLOW LAB
          </a>

          {/* Centered tag */}
          <div className={`absolute left-1/2 -translate-x-1/2 hidden md:block transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
            <span className="font-mono text-xs uppercase tracking-widest text-white">
              ◆ ESTÚDIO CRIATIVO & TECNOLOGIA
            </span>
          </div>

          {/* Menu button */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-[#ffffff] hover:text-[#ffd600] transition-colors group"
          >
            <span>{isOpen ? "FECHAR" : "MENU"}</span>
            <div ref={iconRef} className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z" fill="currentColor"/>
                <path d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"/>
              </svg>
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="fixed inset-0 z-[60] bg-[#000000]/70 backdrop-blur-sm"
        style={{ opacity: 0, visibility: "hidden" }}
      />

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[#0d0d0d] border-l border-[#1a1a1a] flex-col justify-between px-10 py-10 overflow-y-auto"
        style={{ display: "none" }}
      >
        {/* Header sidebar */}
        <div className="flex items-center justify-between mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white">
            ◆ YELLOW LAB
          </span>
          <button
            onClick={closeMenu}
            className="font-mono text-xs uppercase tracking-widest text-white hover:text-[#ffd600] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Links principais */}
        <div ref={linksRef} className="flex-1 flex flex-col justify-center gap-2">
          {/* Nav links */}
          <div className="border-b border-[#1a1a1a] pb-8 mb-8">
            {MENU_LINKS.map((link) => (
              <div key={link.href} className="sidebar-link overflow-hidden">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block font-display text-6xl md:text-7xl text-[#ffffff] hover:text-[#ffd600] transition-colors leading-tight py-1"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <div className="sidebar-extra">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 font-mono font-semibold text-sm bg-[#ffd600] text-[#000000] rounded-full px-8 py-4 hover:brightness-110 hover:scale-105 transition-all"
            >
              FALAR COM O LAB →
            </a>
          </div>

          {/* Redes sociais */}
          <div className="sidebar-extra flex gap-6 mt-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-mono text-xs uppercase tracking-widest text-white hover:text-[#ffd600] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer sidebar */}
        <div className="sidebar-extra mt-12 pt-8 border-t border-[#1a1a1a]">
          <p className="font-mono text-xs text-[#ffffff]/30 uppercase tracking-widest">
            © 2026 YELLOW LAB
          </p>
        </div>
      </div>
    </div>
  )
}
