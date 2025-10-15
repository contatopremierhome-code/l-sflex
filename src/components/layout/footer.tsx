import { Instagram, MapPin, Phone } from 'lucide-react';
import { Logo } from '../icons/logo';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Entregas rápidas e inteligentes para o Mercado Livre, Shopee e
              Magalu em toda a região de São Paulo.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5511993801750" className="hover:text-primary">
                  (11) 99380-1750
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com/lesflexentregas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @lesflexentregas
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 08:00 - 21:00</li>
              <li>Sábado: 08:00 - 21:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Endereço do Galpão</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
              <p>São Paulo - SP (Entre em contato para o endereço exato)</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 L&S Flex. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
