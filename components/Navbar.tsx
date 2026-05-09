'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`sticky top-0 z-50 bg-white border-b border-border transition-shadow duration-500 ${
        scrolled ? 'nav-scrolled' : ''
      }`}
    >
      <div className="px-6 lg:px-20 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="font-serif text-2xl lg:text-[28px] font-light tracking-[0.25em] text-charcoal">
          LUMIÈRE
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 lg:gap-12 list-none">
          {['Home', 'Shop', 'About', 'Journal', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm text-charcoal font-normal tracking-[0.03em] hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button
            aria-label="Cart"
            className="hidden md:block text-charcoal hover:text-gold transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[22px] h-[22px] stroke-current fill-none"
              strokeWidth={1.5}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-charcoal"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current fill-none"
              strokeWidth={1.5}
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6">
          <ul className="flex flex-col gap-5 list-none">
            {['Home', 'Shop', 'About', 'Journal', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-charcoal font-normal tracking-[0.03em]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
