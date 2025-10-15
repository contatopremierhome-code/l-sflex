import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function PackageSize() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <Card className="mx-auto max-w-2xl text-center shadow-lg">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Package className="h-10 w-10 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
              Tamanho Máximo de Encomenda
            </CardTitle>
            <p className="mt-4 text-lg text-muted-foreground">
              Aceitamos pacotes de até 80x80cm – entregamos até pneu de moto se
              precisar.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
