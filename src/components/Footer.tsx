
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-secondary/95 to-secondary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto relative pt-28 pb-16 px-4 md:px-6 z-10">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and description */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-playfair text-3xl font-bold text-accent">Al-Amin</span>
                <span className="font-playfair text-xl ml-2 text-white/90">Food Paradise</span>
              </div>
              <div className="h-1 w-20 bg-accent mt-2 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-lg">
              Authentic Indian and Singaporean cuisine since 2005. Experience the rich flavors crafted 
              with care and served with love.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-2xl text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Menu</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Gallery</span>
                </a>
              </li>
              <li>
                <a href="#location" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Location</span>
                </a>
              </li>
              <li>
                <a href="#order" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Order Online</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-2xl text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  47 Holland Dr<br />
                  #01-377<br />
                  Singapore 270047
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+6591655269" className="text-gray-300 hover:text-white transition-colors">+65 9165 5269</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@alaminfood.sg" className="text-gray-300 hover:text-white transition-colors">info@alaminfood.sg</a>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-2xl text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-gray-300">Monday - Friday</span>
                </div>
                <span className="text-white">10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-gray-300">Saturday - Sunday</span>
                </div>
                <span className="text-white">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-gray-300">Public Holidays</span>
                </div>
                <span className="text-white">8:00 AM - 10:00 PM</span>
              </li>
            </ul>
            
            <div className="pt-2">
              <a 
                href="https://www.google.com/maps/place/Al-Amin+Food+Paradise/@1.3086811,103.7924029,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1a69f9d8c12f:0x9b7187f076f8937f!8m2!3d1.3086811!4d103.7924029!16s%2Fg%2F11f0w_4f02?entry=ttu"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent/90 hover:bg-accent text-secondary px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and payment methods */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">&copy; {currentYear} Al-Amin Food Paradise. All rights reserved.</p>
            
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-xs text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="bg-white/90 h-6 w-10 rounded"></div>
                <div className="bg-white/90 h-6 w-10 rounded"></div>
                <div className="bg-white/90 h-6 w-10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
