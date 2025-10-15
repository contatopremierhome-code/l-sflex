import { CircleDollarSign, MapPin, Plug, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Rastreamento em Tempo Real',
    description:
      'Acompanhe suas entregas do início ao fim com nosso sistema de rastreamento preciso.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Segurança e Confiança',
    description:
      'Sua mercadoria é nossa prioridade. Cuidamos de cada pacote com a máxima atenção.',
  },
  {
    icon: <CircleDollarSign className="h-8 w-8" />,
    title: 'Tarifas Competitivas',
    description:
      'Oferecemos os melhores preços para entregas flex, otimizando seu custo de frete.',
  },
  {
    icon: <Plug className="h-8 w-8" />,
    title: 'Integração Fácil',
    description:
      'Nossa plataforma se integra perfeitamente com Mercado Livre e Shopee.',
  },
];

export default function Benefits() {
  return (
    <section className="bg-card py-12 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Vantagens de Enviar com a L&S Flex
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tudo que você precisa para escalar suas vendas online.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
