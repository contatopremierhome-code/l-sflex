import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Package, Truck, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Chame no WhatsApp',
    description:
      'Entre em contato conosco pelo WhatsApp para solicitar a coleta.',
    step: 1,
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'Coletamos os pedidos',
    description:
      'Seus envios são coletados por nossos entregadores em seu endereço.',
    step: 2,
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Entregamos no mesmo dia',
    description: 'Seus clientes recebem os produtos no mesmo dia até às 21h.',
    step: 3,
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'Pagamento Quinzenal',
    description: 'Você acerta o pagamento de suas entregas a cada 15 dias.',
    step: 4,
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
            Processo simples e eficiente para suas entregas no Mercado Livre,
            Shopee e Magalu
          </p>
        </div>
        <div className="mt-20">
          <div className="relative">
            {/* Solid line for desktop */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-5 hidden w-full md:block"
            >
              <div className="relative mx-auto h-0.5 w-[calc(100%-12rem)] bg-border"></div>
            </div>

            <div className="relative grid grid-cols-1 gap-16 md:grid-cols-4 md:gap-8">
              {steps.map((step) => (
                <div key={step.step} className="relative text-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg z-10 ring-8 ring-background">
                    {step.step}
                  </div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full mt-6">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
