import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Chame no WhatsApp',
    description:
      'Entre em contato conosco pelo WhatsApp para solicitar a coleta.',
    step: 1,
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Coletamos os pedidos',
    description:
      'Seus envios são coletados por nossos entregadores em seu endereço.',
    step: 2,
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: 'Entregamos no mesmo dia',
    description: 'Seus clientes recebem os produtos no mesmo dia até às 21h.',
    step: 3,
  },
];

export default function HowItWorksFlow() {
  return (
    <section className="py-12 lg:py-24" id="como-funciona">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            🎯 Como Funciona Nosso Serviço
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Processo simples e eficiente para suas entregas no Mercado Livre e
            Shopee
          </p>
        </div>
        <div className="mt-16">
          <div className="relative">
            {/* Dotted line for desktop */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
            >
              <div className="relative mx-auto h-0.5 w-[calc(100%-10rem)] bg-transparent">
                <div className="absolute inset-0 h-full w-full bg-repeat-x [background-image:linear-gradient(to_right,hsl(var(--border))_40%,transparent_0%)] [background-size:1rem_1px]"></div>
              </div>
            </div>

            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
              {steps.map((step) => (
                <Card
                  key={step.step}
                  className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl relative bg-card"
                >
                  <CardHeader>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg z-10">
                      {step.step}
                    </div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mt-6">
                      {step.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">
                      {step.title}
                    </CardTitle>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
