const testimonials = [
  {
    id: 1,
    initials: 'SM',
    name: 'Sarah Mitchell',
    text: '"The Hydra-Glow Moisturizer transformed my skin. I\'ve never felt so radiant and hydrated. My makeup glides on beautifully now. Worth every penny!"',
    position: 'left',
  },
  {
    id: 2,
    initials: 'ER',
    name: 'Emily Rodriguez',
    text: '"Finally, a Vitamin C serum that doesn\'t irritate my sensitive skin. My dark spots have visibly faded in just four weeks. I\'m obsessed!"',
    position: 'center',
  },
  {
    id: 3,
    initials: 'JL',
    name: 'Jessica Lee',
    text: '"The Rosehip Face Oil is pure luxury. My nighttime routine feels like a spa treatment. Clean, beautiful, and incredibly effective."',
    position: 'right',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-cream-light px-6 lg:px-20 py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif font-light text-charcoal text-[clamp(36px,4.5vw,56px)] tracking-[0.08em]">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`gsap-testimonial gsap-testimonial-${t.position} bg-white p-10 rounded-sm`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif text-lg font-medium flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, #c9a86a 0%, #b89660 100%)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[15px] text-charcoal font-semibold mb-1">
                    {t.name}
                  </p>
                  <div className="flex gap-0.5">
                    <span className="text-gold text-sm">★★★★★</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-[15px] text-[#4a4a4a] leading-[1.75] italic">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
