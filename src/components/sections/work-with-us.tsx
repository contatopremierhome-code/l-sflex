import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

const benefits = [
  'Ganhos atrativos',
  'Flexibilidade de horário',
  'Suporte constante',
  'Pagamentos semanais',
  'Oportunidade de crescimento',
];

export default function WorkWithUs() {
  return (
    <section className="py-12 lg:py-24" id="trabalhe-conosco">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Trabalhe Conosco
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Faça parte da nossa equipe de entregadores e cresça conosco!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Benefícios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Entre em Contato
              </CardTitle>
              <CardDescription>
                Interessado em fazer parte da nossa equipe?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center h-full">
              <p className="mb-6 text-muted-foreground">
                Entre em contato via WhatsApp:
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511993801750&text=Ol%C3%A1+vim+do+site+e+gostaria+de+trabalhar+com+voc%C3%AAs%21%21&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Candidate-se Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
