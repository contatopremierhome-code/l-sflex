import Image from 'next/image';

const images = [
  {
    src: 'https://www.bitmag.com.br/wp-content/uploads/2022/05/pexels-photo-6818161.jpeg',
    alt: 'Entregador da Shopee sorrindo',
  },
  {
    src: 'https://www.belohorizonte.com.br/wp-content/uploads/2023/01/shopee-entregador.jpg',
    alt: 'Entregador organizando pacotes',
  },
  {
    src: 'https://http2.mlstatic.com/frontend-assets/growth-melinet-front-end/proposal_operational_loads_pt.svg',
    alt: 'Ilustração de logística do Mercado Livre',
  },
  {
    src: 'https://magis5.com.br/wp-content/uploads/2022/03/Magis5-se-torna-integrador-diamante-no-projeto-acelera-magalu-do-magazine-luiza-1024x576.png',
    alt: 'Integração com Magalu',
  },
];

export default function ImageGallery() {
  return (
    <section className="bg-card py-12 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
