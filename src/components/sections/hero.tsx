import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full bg-primary">
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
          asChild
        >
          <a href="#precos">
            Quero Vender Mais
          </a>
        </Button>
      </div>
    </section>
  );
}
