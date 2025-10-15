import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import Benefits from '@/components/sections/benefits';
import Partners from '@/components/sections/partners';
import Pricing from '@/components/sections/pricing';
import Cta from '@/components/sections/cta';
import AttendedRegions from '@/components/sections/attended-regions';
import ImageGallery from '@/components/sections/image-gallery';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <ImageGallery />
        <Benefits />
        <Partners />
        <Pricing />
        <AttendedRegions />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
