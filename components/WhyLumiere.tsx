const benefits = [
  {
    id: 1,
    title: 'Clean Ingredients',
    description:
      'Every formula is free from parabens, sulfates, and synthetic fragrances. Only the purest botanicals.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-gold fill-none" strokeWidth={1.5}>
        <path d="M12 22V2M17 8.5a5 5 0 0 0-10 0c0 3 2 5 5 8 3-3 5-5 5-8z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Dermatologist Tested',
    description:
      'Clinically proven formulas developed with leading dermatologists for all skin types.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-gold fill-none" strokeWidth={1.5}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Sustainable Packaging',
    description:
      'Our bottles are made from recycled glass and fully recyclable. Beauty that cares for the planet.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-gold fill-none" strokeWidth={1.5}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
]

export default function WhyLumiere() {
  return (
    <section
      id="why"
      className="bg-cream-light px-6 lg:px-20 py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif font-light text-charcoal text-[clamp(40px,4.5vw,56px)] tracking-[0.12em]">
            Why Lumière
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="gsap-benefit-card text-center"
            >
              <div className="w-20 h-20 mx-auto mb-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="font-serif font-normal text-charcoal text-2xl mb-3 tracking-[0.02em]">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted leading-[1.75] max-w-xs mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
