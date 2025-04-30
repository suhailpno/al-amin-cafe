
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Al-Amin Food Paradise</h3>
            <p className="text-gray-300 mb-4">
              Experience the rich flavors and traditional recipes that have been
              crafted with care and served with love.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors">Location</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Yishun Avenue 5, #01-23</li>
              <li>Singapore 768543</li>
              <li>Phone: +65 9165 5269</li>
              <li>Email: info@alaminparadise.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates, promotions, and special offers.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 text-white placeholder:text-gray-400 px-4 py-2 rounded-l focus:outline-none w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent text-secondary px-4 py-2 rounded-r font-medium hover:bg-accent/90 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
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
