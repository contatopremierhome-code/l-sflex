'use client';

import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown, MapPin } from 'lucide-react';
import Image from 'next/image';

const regions = [
  'Centro',
  'Leste 1',
  'Leste 2',
  'Leste 3',
  'Leste 4',
  'Leste 5',
  'Norte 1',
  'Norte 2',
  'Norte 3',
  'Oeste 1',
  'Oeste 2',
  'Oeste 3',
  'Sul 1',
  'Sul 2',
  'Sul 3',
  'Carapicuíba',
  'Cotia',
  'Diadema',
  'Embu 1',
  'Embu 2',
  'Guarulhos 1',
  'Guarulhos 2',
  'Guarulhos 3',
  'Guarulhos 4',
  'Itaquaquecetuba',
  'Mauá',
  'Osasco 1',
  'Osasco 2',
  'Osasco 3',
  'Santo André 1',
  'Santo André 2',
  'Santo André 3',
  'São Bernardo 1',
  'São Bernardo 2',
  'São Caetano',
  'Taboão',
  'Cotia Leste',
  'Cotia Central',
  'Cotia Norte',
  'Cotia Sudoeste',
  'Jandira',
  'Itapevi',
  'Cajamar',
  'Caieiras',
  'Franco da Rocha',
  'Francisco Morato',
  'Mairiporã',
  'Arujá',
  'Suzano',
];

const visibleRegions = regions.slice(0, 6);
const hiddenRegions = regions.slice(6);

export default function AttendedRegions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-card py-12 lg:py-24" id="regioes-atendidas">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            Regiões Atendidas
          </h2>
        </div>
        <div className="mt-8 flex flex-col gap-12 items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {visibleRegions.map((region) => (
                <div
                  key={region}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{region}</span>
                </div>
              ))}
            </div>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {hiddenRegions.map((region) => (
                    <div
                      key={region}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{region}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
              <div className="flex justify-center mt-6">
                <CollapsibleTrigger asChild>
                  <Button variant="outline">
                    <ChevronsUpDown className="mr-2 h-4 w-4" />
                    {isOpen ? 'Mostrar Menos' : 'Mostrar Mais'}
                  </Button>
                </CollapsibleTrigger>
              </div>
            </Collapsible>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://http2.mlstatic.com/storage/cx-support-fcm-api/fcm-pub-os-prod/cx-support-mario-frontend/andrdiaz/mapa%20sao%20paulo_mlb.png"
              alt="Mapa de regiões atendidas em São Paulo"
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
