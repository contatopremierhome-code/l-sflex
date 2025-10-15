import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image
        src="https://i.imgur.com/SNJ2wK6.png"
        alt="L&S Flex Logo"
        width={150}
        height={60}
        className="h-14 w-auto"
      />
    </a>
  );
}
