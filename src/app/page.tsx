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
import Faq from '@/components/sections/faq';
import WorkWithUs from '@/components/sections/work-with-us';
import HowItWorksFlow from '@/components/sections/how-it-works-flow';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorksFlow />
        <HowItWorks />
        <ImageGallery />
        <PackageSize />
        <Benefits />
        <Partners />
        <Pricing />
        <AttendedRegions />
        <Faq />
        <Testimonials />
        <WorkWithUs />
      </main>
      <Footer />
    </div>
  );
}
