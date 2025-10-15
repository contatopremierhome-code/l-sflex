import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Vocês retiram na porta?',
    answer:
      'Sim! Podemos retirar os pacotes diretamente na sua porta, sem que você precise sair de casa.',
  },
  {
    question: 'Posso levar até vocês?',
    answer:
      'Sim! Temos um galpão onde você pode trazer seus pacotes para serem enviados.',
  },
  {
    question: 'Posso acompanhar a entrega em tempo real?',
    answer:
      'Sim! Oferecemos rastreamento em tempo real para que você possa acompanhar o status da sua entrega a qualquer momento.',
  },
  {
    question: 'Qual o tamanho máximo de pacote que aceitam?',
    answer:
      'Aceitamos pacotes de até 80x80cm. Isso inclui até mesmo pneus de moto, se necessário.',
  },
  {
    question: 'E se tiver problema na entrega?',
    answer:
      'Estamos disponíveis para resolver qualquer problema imediatamente pelo WhatsApp. Basta entrar em contato conosco e resolveremos o mais rápido possível.',
  },
  {
    question: 'Qual o horário de funcionamento?',
    answer:
      'Atendemos de Segunda a Sábado, das 08:00 às 21:00, para melhor atender às suas necessidades.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Trabalhamos com pagamentos via PIX, transferência bancária ou em dinheiro para sua conveniência.',
  },
];

export default function Faq() {
  return (
    <section className="py-12 lg:py-24" id="faq">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre nossos
            serviços.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
