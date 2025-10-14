import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-image');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl font-headline">
          Entregas rápidas e inteligentes para seu e-commerce.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Coletamos na sua porta e entregamos no mesmo dia para clientes do
          Mercado Livre e Shopee em São Paulo.
        </p>
        <Button
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Quero Vender Mais
        </Button>
      </div>
    </section>
  );
}
