import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export default function Cta() {
  return (
    <section className="bg-card py-12 lg:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
          Pronto para otimizar suas entregas?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Deixe a L&S Flex cuidar da sua logística e foque no que realmente
          importa: vender mais.
        </p>
        <Button
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          asChild
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className="mr-2 h-5 w-5" />
            Entre em Contato Agora
          </a>
        </Button>
      </div>
    </section>
  );
}
