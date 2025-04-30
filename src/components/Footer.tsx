
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="font-playfair text-3xl font-bold text-accent">Al-Amin</span>
              <span className="font-playfair text-xl ml-2 text-white/90">Food Paradise</span>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Experience the rich flavors and traditional recipes that have been
              crafted with care and served with love since 2005.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-playfair font-bold text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Gallery</a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Location</a>
              </li>
              <li>
                <a href="#order" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Order Online</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-playfair font-bold text-xl mb-6 text-accent">Visit Us</h4>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <span className="text-gray-300">
                123 Yishun Avenue 5, #01-23<br />
                Northpoint City<br />
                Singapore 768543
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-gray-300">+65 9165 5269</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Al-Amin Food Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
