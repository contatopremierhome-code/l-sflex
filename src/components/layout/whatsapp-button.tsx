import { WhatsappIcon } from '../icons/whatsapp-icon';

export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5511993801750&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais%21%21&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-3 shadow-lg animate-pulse-whatsapp"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8 text-white" />
    </a>
  );
}
