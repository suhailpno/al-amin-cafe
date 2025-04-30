
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "6591655269";
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] p-4 rounded-full shadow-xl hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110 hover:rotate-12 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageSquare className="h-6 w-6 text-white" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
