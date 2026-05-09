import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 lg:px-20 py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="gsap-about-image relative h-[420px] lg:h-[550px] rounded-lg overflow-hidden order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80"
            alt="Natural botanical skincare ingredients"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="gsap-about-content order-1 lg:order-2">
          <h2 className="font-serif font-light text-charcoal text-[clamp(40px,4.5vw,56px)] leading-[1.1] tracking-[0.02em] mb-7">
            Rooted in
            <br />
            nature.
          </h2>
          <p className="text-base lg:text-[16px] text-muted leading-[1.85] mb-5 tracking-[0.02em]">
            We believe that the most effective skincare starts with pure, potent
            botanicals. Every formula is crafted with plant-based actives,
            responsibly sourced and backed by science.
          </p>
          <p className="text-base lg:text-[16px] text-muted leading-[1.85] mb-5 tracking-[0.02em]">
            Our mission is simple: to create products that nourish your skin
            while honoring the earth. Clean, effective, and luxurious.
          </p>
          <p className="text-base lg:text-[16px] text-muted leading-[1.85] mb-8 tracking-[0.02em]">
            From seed to serum, we&apos;re committed to transparency,
            sustainability, and results you can see and feel.
          </p>
          <a
            href="#"
            className="btn-primary-hover inline-block bg-charcoal text-white px-11 py-4 text-[13px] font-medium tracking-[0.12em] uppercase"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
