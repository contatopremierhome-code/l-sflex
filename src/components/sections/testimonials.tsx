import { Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

const testimonials = [
  {
    quote: 'Nunca mais entrego sem a L&S Flex. Rápidos demais!',
    name: 'Amanda',
    location: 'Zona Leste',
  },
  {
    quote: 'O rastreio em tempo real me salvou de perder cliente.',
    name: 'Marcelo',
    location: 'Guarulhos',
  },
  {
    quote: 'Levei no galpão e já saiu pra entrega na mesma hora!',
    name: 'Fernanda',
    location: 'Cotia',
  },
  {
    quote: 'Serviço excepcional! Entregadores sempre educados e profissionais.',
    name: 'Ricardo',
    location: 'São Bernardo',
  },
  {
    quote:
      'Preços justos e entregas pontuais. Recomendo para todos os vendedores online.',
    name: 'Patrícia',
    location: 'Santo André',
  },
  {
    quote:
      'Minha taxa de avaliação no Mercado Livre melhorou muito desde que comecei a usar a L&S Flex.',
    name: 'João',
    location: 'Osasco',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-card py-12 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja o que vendedores e parceiros falam sobre a experiência com a L&S
            Flex.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="font-semibold">
                  <p>{testimonial.name}</p>
                  <p className="text-sm font-normal text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
