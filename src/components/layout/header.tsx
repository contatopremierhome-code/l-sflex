import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/logo';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#precos', label: 'Preços' },
  { href: '#areas-cobertura', label: 'Cobertura' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#trabalhe-conosco', label: 'Trabalhe Conosco' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <a
              href="https://api.whatsapp.com/send/?phone=5511993801750&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais%21%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Fale Conosco
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Logo />
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511993801750&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais%21%21&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappIcon className="mr-2 h-5 w-5" />
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
