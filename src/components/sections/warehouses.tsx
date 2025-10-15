import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Warehouse } from 'lucide-react';

const warehouses = [
  {
    name: 'Galpão Centro',
    description: 'Centro logístico para distribuição eficiente',
  },
  {
    name: 'Galpão Zona Norte',
    description: 'Centro logístico para distribuição eficiente',
  },
  {
    name: 'Galpão Zona Leste',
    description: 'Centro logístico para distribuição eficiente',
  },
  {
    name: 'Galpão Zona Oeste',
    description: 'Centro logístico para distribuição eficiente',
  },
  {
    name: 'Galpão Zona Sul',
    description: 'Centro logístico para distribuição eficiente',
  },
];

export default function Warehouses() {
  return (
    <section className="bg-card py-12 lg:py-24" id="areas-cobertura">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Áreas de Cobertura
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Atendemos uma área extensa de São Paulo e região metropolitana, com
            5 galpões estrategicamente localizados para melhor atender você:
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {warehouses.map((warehouse) => (
            <Card
              key={warehouse.name}
              className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Warehouse className="h-10 w-10 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  {warehouse.name}
                </CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {warehouse.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
