import Image from 'next/image';

export function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2"
      aria-label="L&S Flex Home"
    >
      <Image
        src="https://i.imgur.com/j1f4EYW.png"
        alt="L&S Flex Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="text-xl font-bold tracking-tight text-foreground">
        L&S Flex
      </span>
    </a>
  );
}
