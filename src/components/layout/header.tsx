import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/logo';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <Button asChild>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className="mr-2 h-5 w-5" />
            Fale Conosco
          </a>
        </Button>
      </div>
    </header>
  );
}
