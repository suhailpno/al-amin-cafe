
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-custom py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" onClick={() => scrollToSection('hero')} className="flex items-center">
            <span className={`font-playfair text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Al-Amin
            </span>
            <span className={`font-playfair text-sm ml-2 ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              Food Paradise
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'menu', 'gallery', 'location'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize cursor-pointer font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#order" 
              onClick={() => scrollToSection('order')}
              className={`btn-primary !py-2 !px-4`}
            >
              Order Now
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu} 
            className={`md:hidden p-2 rounded-full ${
              isScrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/10 text-white'
            }`}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 z-50 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full bg-white/10 text-white"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {['about', 'menu', 'gallery', 'location', 'order'].map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white text-2xl font-playfair capitalize cursor-pointer hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
