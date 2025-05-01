
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
      <div className="absolute -top-10 right-0 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </div>
      <MessageSquare className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
