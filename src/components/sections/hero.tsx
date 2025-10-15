import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {heroImage && (
        <Image
          src="https://s2-techtudo.glbimg.com/fEQaGUxtX2k6y5CgZJ1oYxvPDMs=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/n/A/1GeIM7ReyhPjlLIW7ijA/entregador-mercado-livre-2.jpg"
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
          Entregas Flex Rápidas e Inteligentes para Mercado Livre, Shopee e
          Magalu
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl">
          Atendemos São Paulo com agilidade, rastreamento em tempo real e
          retirada no local. Sem quantidade mínima de pacotes!
        </p>
        <Button
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          asChild
        >
          <a href="#precos">Quero Vender Mais</a>
        </Button>
      </div>
    </section>
  );
}
