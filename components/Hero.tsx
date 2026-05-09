import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-cream to-cream-light px-6 lg:px-20 py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle gold radial glow */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,168,106,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto">
        {/* Content */}
        <div id="hero-content" className="gsap-hero-content">
          <p
            id="hero-eyebrow"
            className="text-xs font-medium tracking-[0.2em] text-gold uppercase mb-6"
          >
            Premium Skincare
          </p>
          <h1
            id="hero-heading"
            className="font-serif font-light text-charcoal leading-[1.05] mb-6 text-[clamp(56px,7vw,92px)] tracking-[0.01em]"
          >
            Glow from
            <br />
            within.
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg lg:text-xl text-muted leading-relaxed mb-10 tracking-[0.02em] max-w-md"
          >
            Skincare rooted in nature, refined by science.
          </p>
          <div id="hero-buttons" className="flex gap-5 flex-wrap">
            <a
              href="#products"
              className="btn-primary-hover bg-charcoal text-white px-11 py-4 text-[13px] font-medium tracking-[0.12em] uppercase"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="btn-secondary-hover border border-charcoal text-charcoal px-11 py-4 text-[13px] font-medium tracking-[0.12em] uppercase"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          id="hero-image"
          className="gsap-hero-image relative h-[440px] sm:h-[520px] lg:h-[600px] rounded-lg overflow-hidden"
        >
          <Image
            src="/images/hero.jpg"
            alt="Woman with glowing skin applying Lumière skincare"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
