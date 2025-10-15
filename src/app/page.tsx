import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import Benefits from '@/components/sections/benefits';
import Partners from '@/components/sections/partners';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';
import AttendedRegions from '@/components/sections/attended-regions';
import ImageGallery from '@/components/sections/image-gallery';
import PackageSize from '@/components/sections/package-size';
import Warehouses from '@/components/sections/warehouses';
import Faq from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <ImageGallery />
        <PackageSize />
        <Warehouses />
        <Benefits />
        <Partners />
        <Pricing />
        <AttendedRegions />
        <Faq />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
