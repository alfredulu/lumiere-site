import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Hydra-Glow Moisturizer',
    price: '$48.00',
    reviews: 284,
    image: '/images/product-moisturizer.png',
    alt: 'Hydra-Glow Moisturizer bottle',
  },
  {
    id: 2,
    name: 'Vitamin C Serum',
    price: '$62.00',
    reviews: 392,
    image: '/images/product-serum.png',
    alt: 'Vitamin C Serum bottle',
  },
  {
    id: 3,
    name: 'Rosehip Face Oil',
    price: '$54.00',
    reviews: 217,
    image: '/images/product-oil.png',
    alt: 'Rosehip Face Oil bottle',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="bg-white px-6 lg:px-20 py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif font-light text-charcoal text-[clamp(40px,4.5vw,56px)] tracking-[0.12em]">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="gsap-product-card product-card-hover border border-border bg-white"
              style={{ '--card-index': index } as React.CSSProperties}
            >
              {/* Product image */}
              <div
                className="relative w-full h-[360px] lg:h-[420px] overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #faf8f5 0%, #f5f1eb 100%)',
                }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-contain object-center p-6"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Product info */}
              <div className="p-7 lg:p-8">
                <h3 className="font-serif font-normal text-charcoal text-2xl mb-2 tracking-[0.02em]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gold text-sm tracking-wide">
                    ★★★★★
                  </span>
                  <span className="text-xs text-muted/80">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-gold font-medium text-xl my-4">
                  {product.price}
                </div>
                <button className="add-to-cart-hover w-full border border-charcoal text-charcoal text-[12px] font-medium tracking-[0.12em] uppercase py-[14px]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
