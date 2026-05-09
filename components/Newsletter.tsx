'use client'

import Image from 'next/image'

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="gsap-newsletter px-6 lg:px-20 py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #4a5d4e 0%, #3d4f41 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="font-serif font-light text-white text-[clamp(40px,4.5vw,56px)] leading-[1.1] mb-5">
            Join the glow.
          </h2>
          <p className="text-base text-white/80 leading-relaxed mb-9">
            Subscribe for early access to new launches, exclusive offers, and
            expert skincare tips delivered to your inbox.
          </p>
          <form
            className="flex gap-3 flex-col sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input flex-1 px-5 py-4 text-sm text-white bg-white/10 border border-white/30 focus:outline-none focus:border-white/60 transition-colors"
            />
            <button
              type="submit"
              className="px-9 py-4 bg-white text-olive font-semibold text-[12px] tracking-[0.12em] uppercase hover:bg-cream transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="relative h-[280px] lg:h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=80"
            alt="Lumière skincare product collection"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-olive/10" />
        </div>
      </div>
    </section>
  )
}
