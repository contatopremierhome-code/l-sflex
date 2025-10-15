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
        <Card className="mx-auto max-w-3xl text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
              Trabalhe Conosco
            </CardTitle>
            <CardDescription className="text-lg">
              Faça parte da nossa equipe de entregadores e cresça conosco!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Benefícios</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-left md:grid-cols-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Entre em Contato</h3>
              <p className="mb-4 text-muted-foreground">
                Interessado em fazer parte da nossa equipe? Entre em contato via
                WhatsApp:
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
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
