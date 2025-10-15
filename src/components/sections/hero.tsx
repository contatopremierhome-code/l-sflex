import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="bg-background py-12 lg:py-24">
      <div className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline">
            Entregas Flex Rápidas e Inteligentes para Mercado Livre, Shopee e
            Magalu
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Atendemos São Paulo com agilidade, rastreamento em tempo real e
            retirada no local. Sem quantidade mínima de pacotes!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="#precos">Ver Preços</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#regioes-atendidas">Áreas de Cobertura</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {heroImage && (
            <Image
              src="https://s2-techtudo.glbimg.com/fEQaGUxtX2k6y5CgZJ1oYxvPDMs=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/n/A/1GeIM7ReyhPjlLIW7ijA/entregador-mercado-livre-2.jpg"
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
