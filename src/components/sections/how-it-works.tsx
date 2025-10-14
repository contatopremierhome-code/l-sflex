import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, PackageCheck, Smile, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: 'Agende a Coleta',
    description:
      'Você agenda o melhor horário e nós vamos até você para retirar as encomendas.',
  },
  {
    icon: <PackageCheck className="h-10 w-10 text-primary" />,
    title: 'Preparamos o Envio',
    description:
      'Etiquetamos e preparamos seus pacotes com cuidado para garantir a segurança.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Entrega Expressa',
    description:
      'Nossa frota realiza as entregas no mesmo dia, com rastreamento em tempo real.',
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: 'Cliente Satisfeito',
    description:
      'Seus clientes recebem os produtos rapidamente, aumentando a satisfação e as avaliações.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Como Funciona
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Nosso processo é simples, rápido e transparente.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  {step.title}
                </CardTitle>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
