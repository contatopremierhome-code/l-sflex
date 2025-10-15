import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Clock,
  DoorOpen,
  MapPin,
  PackageSearch,
  Smile,
  Warehouse,
  Waypoints,
} from 'lucide-react';

const benefits = [
  {
    icon: <DoorOpen className="h-10 w-10 text-primary" />,
    title: 'Retirada na Porta',
    description:
      'Retiramos seus pacotes diretamente na sua porta, sem que você precise sair de casa.',
  },
  {
    icon: <Warehouse className="h-10 w-10 text-primary" />,
    title: 'Entrega no Galpão',
    description:
      'Prefere trazer até nós? Temos um galpão disponível para receber suas encomendas.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Rastreamento em Tempo Real',
    description:
      'Acompanhe em tempo real a localização do seu pacote até a entrega.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Horário Estendido',
    description:
      'Atendimento de Segunda a Sábado das 08:00 às 21:00 para sua conveniência.',
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: 'Profissionalismo',
    description:
      'Entregadores uniformizados e sorrindo, levando uma boa experiência ao cliente.',
  },
  {
    icon: <Waypoints className="h-10 w-10 text-primary" />,
    title: 'Ampla Cobertura',
    description: 'Alcançamos diversas regiões de São Paulo e cidades vizinhas.',
  },
  {
    icon: <PackageSearch className="h-10 w-10 text-primary" />,
    title: 'Suporte Rápido',
    description:
      'Atendimento rápido via WhatsApp para resolver qualquer questão.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 lg:py-24" id="beneficios">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Nossos Benefícios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tudo que você precisa para escalar suas vendas online com tranquilidade.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {benefit.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  {benefit.title}
                </CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
