import { MercadoLivreLogo } from '@/components/icons/mercadolivre-logo';
import { ShopeeLogo } from '@/components/icons/shopee-logo';

export default function Partners() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground">
          Integrado com as maiores plataformas de e-commerce
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <MercadoLivreLogo className="h-12 w-auto text-foreground/70" />
          <ShopeeLogo className="h-12 w-auto text-foreground/70" />
        </div>
      </div>
    </section>
  );
}
