import { Truck } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Truck className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        L&S Flex
      </span>
    </a>
  );
}
