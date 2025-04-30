
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "6591655269";
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] p-4 rounded-full shadow-xl hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
