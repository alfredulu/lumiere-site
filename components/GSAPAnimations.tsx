'use client'

import { useEffect } from 'react'

export default function GSAPAnimations() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const init = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')

      gsap.registerPlugin(ScrollTrigger)

      // ── Luxury easing ──────────────────────────────────────────────
      const silkEase = 'power2.out'
      const silkEaseSlow = 'power3.out'

      // ── HERO — timeline on page load ────────────────────────────────
      const hero = gsap.timeline({
        defaults: { ease: silkEaseSlow, clearProps: 'all' },
      })

      hero
        .from('#hero-eyebrow', { opacity: 0, y: 16, duration: 0.9 })
        .from('#hero-heading', { opacity: 0, y: 28, duration: 1.1 }, '-=0.5')
        .from('#hero-subtitle', { opacity: 0, y: 18, duration: 0.9 }, '-=0.65')
        .from('#hero-buttons', { opacity: 0, y: 16, duration: 0.9 }, '-=0.65')
        .from(
          '#hero-image',
          { opacity: 0, x: 24, duration: 1.3, ease: silkEase },
          '-=0.9',
        )

      // ── NAVBAR — subtle fade in ─────────────────────────────────────
      gsap.from('#navbar', {
        opacity: 0,
        y: -10,
        duration: 0.8,
        ease: silkEase,
        delay: 0.1,
      })

      // ── PRODUCTS — stagger one by one on scroll ─────────────────────
      gsap.from('.gsap-product-card', {
        scrollTrigger: {
          trigger: '#products',
          start: 'top 82%',
        },
        opacity: 0,
        y: 44,
        duration: 0.85,
        stagger: 0.18,
        ease: silkEase,
        clearProps: 'all',
      })

      // ── WHY LUMIÈRE — icons fade up with stagger ────────────────────
      gsap.from('.gsap-benefit-card', {
        scrollTrigger: {
          trigger: '#why',
          start: 'top 82%',
        },
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.2,
        ease: silkEase,
        clearProps: 'all',
      })

      // ── ABOUT — image slides in from left, content from right ───────
      gsap.from('.gsap-about-image', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 82%',
        },
        opacity: 0,
        x: -44,
        duration: 1.1,
        ease: silkEase,
        clearProps: 'all',
      })

      gsap.from('.gsap-about-content', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 82%',
        },
        opacity: 0,
        x: 44,
        duration: 1.1,
        ease: silkEase,
        delay: 0.15,
        clearProps: 'all',
      })

      // ── TESTIMONIALS — left slides from left, center fades up, right from right
      gsap.from('.gsap-testimonial-left', {
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 82%',
        },
        opacity: 0,
        x: -52,
        duration: 1.0,
        ease: silkEase,
        clearProps: 'all',
      })

      gsap.from('.gsap-testimonial-center', {
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 82%',
        },
        opacity: 0,
        y: 36,
        duration: 1.0,
        ease: silkEase,
        delay: 0.15,
        clearProps: 'all',
      })

      gsap.from('.gsap-testimonial-right', {
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 82%',
        },
        opacity: 0,
        x: 52,
        duration: 1.0,
        ease: silkEase,
        delay: 0.3,
        clearProps: 'all',
      })

      // ── NEWSLETTER — graceful fade in on scroll ─────────────────────
      gsap.from('.gsap-newsletter', {
        scrollTrigger: {
          trigger: '#newsletter',
          start: 'top 85%',
        },
        opacity: 0,
        y: 28,
        duration: 1.1,
        ease: silkEase,
        clearProps: 'all',
      })
    }

    init()

    return () => {
      // Cleanup on unmount
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      })
    }
  }, [])

  return null
}
