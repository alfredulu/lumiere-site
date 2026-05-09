const shopLinks = ['All Products', 'Bestsellers', 'New Arrivals', 'Gift Sets', 'Bundles']
const aboutLinks = ['Our Story', 'Ingredients', 'Sustainability', 'Journal', 'Press']
const supportLinks = ['Contact Us', 'Shipping & Returns', 'Track Order', 'FAQ', 'Terms & Privacy']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 lg:px-20 pt-16 lg:pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl font-light tracking-[0.25em] mb-4">
              LUMIÈRE
            </div>
            <p className="text-sm text-white/60 leading-[1.75] mb-6 max-w-xs">
              Premium skincare rooted in nature, refined by science. Clean
              ingredients for radiant skin.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <button
                aria-label="Facebook"
                className="social-icon-hover w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white/60 fill-none" strokeWidth={1.5}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              {/* Instagram */}
              <button
                aria-label="Instagram"
                className="social-icon-hover w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white/60 fill-none" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </button>
              {/* Twitter/X */}
              <button
                aria-label="Twitter"
                className="social-icon-hover w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white/60 fill-none" strokeWidth={1.5}>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[0.12em] uppercase mb-5 text-white/90">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[0.12em] uppercase mb-5 text-white/90">
              About
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[0.12em] uppercase mb-5 text-white/90">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center text-[13px] text-white/40">
          <p>© 2026 Lumière Skincare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
