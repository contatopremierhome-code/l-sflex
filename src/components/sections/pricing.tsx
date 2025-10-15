import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { MercadoLivreLogo } from '../icons/mercadolivre-logo';
import { ShopeeLogo } from '../icons/shopee-logo';
import Image from 'next/image';

const tiers = [
  {
    name: 'Mercado Livre Flex',
    price: 'R$ 13',
    features: [
      'Entrega no mesmo dia',
      'Rastreamento em tempo real',
      'Retirada na porta (opcional)',
      'Sem quantidade mínima',
    ],
    buttonText: 'Contratar Agora',
    href: 'https://wa.me/5511993801750?text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+contratar+o+plano+Mercado+Livre+Flex%21',
    logo: <MercadoLivreLogo className="h-6 text-foreground" />,
  },
  {
    name: 'Magalu',
    price: 'R$ 13',
    features: [
      'Entrega no mesmo dia',
      'Rastreamento em tempo real',
      'Retirada na porta (opcional)',
      'Sem quantidade mínima',
    ],
    buttonText: 'Contratar Agora',
    href: 'https://wa.me/5511993801750?text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+contratar+o+plano+Magalu%21',
    logo: (
      <Image
        src="https://i.imgur.com/U7qEiqW.png"
        alt="Mercado Livre Logo"
        width={140}
        height={35}
        className="h-9 w-auto"
      />
    ),
  },
  {
    name: 'Shopee',
    price: 'R$ 8',
    features: [
      'Entrega no mesmo dia',
      'Rastreamento em tempo real',
      'Retirada na porta (opcional)',
      'Sem quantidade mínima',
    ],
    buttonText: 'Contratar Agora',
    href: 'https://wa.me/5511993801750?text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+contratar+o+plano+Shopee%21',
    logo: <ShopeeLogo className="h-10 text-foreground" />,
  },
];

export default function Pricing() {
  return (
    <section className="py-12 lg:py-24" id="precos">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Preços Transparentes
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Oferecemos preços competitivos para suas entregas, sejam do Mercado
            Livre, Shopee ou Magalu. Sem taxas ocultas, sem surpresas, sem
            quantidade mínima de pacotes.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className="flex flex-col rounded-lg border-2 border-primary/50 shadow-lg transition-transform hover:scale-105"
            >
              <CardHeader className="items-center">
                <div className="flex items-center gap-4 h-10">{tier.logo}</div>
                <CardTitle className="text-2xl font-semibold mt-4">
                  {tier.name}
                </CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" asChild>
                  <a href={tier.href} target="_blank" rel="noopener noreferrer">
                    {tier.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}