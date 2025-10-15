import Image from 'next/image';

const partnerLogos = [
  {
    src: 'https://i.imgur.com/U7qEiqW.png',
    alt: 'Partner 1 Logo',
    width: 158,
    height: 48,
  },
  {
    src: 'https://i.imgur.com/WGCDbGk.png',
    alt: 'Partner 2 Logo',
    width: 158,
    height: 48,
  },
  {
    src: 'https://i.imgur.com/nrA4MEk.png',
    alt: 'Partner 3 Logo',
    width: 158,
    height: 48,
  },
];

export default function Partners() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground">
          Integrado com as maiores plataformas de e-commerce
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partnerLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto text-foreground/70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
