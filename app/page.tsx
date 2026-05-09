import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BrandStrip from '@/components/BrandStrip'
import Products from '@/components/Products'
import WhyLumiere from '@/components/WhyLumiere'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import GSAPAnimations from '@/components/GSAPAnimations'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStrip />
      <Products />
      <WhyLumiere />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
      <GSAPAnimations />
    </main>
  )
}
