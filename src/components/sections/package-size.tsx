import { Package } from 'lucide-react';

export default function PackageSize() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Package className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
          Tamanho Máximo de Encomenda
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Aceitamos pacotes de até 80x80cm – entregamos até pneu de moto se
          precisar.
        </p>
      </div>
    </section>
  );
}
