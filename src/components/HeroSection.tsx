
import { useState, useEffect } from 'react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Traditional spicy curry dish"
  },
  {
    url: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Aromatic rice with herbs and spices"
  },
  {
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/indian-curry-with-prawns.jpg",
    alt: "Delicious Indian curry with prawns and rice"
  },
  {
    url: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Freshly baked naan bread"
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair text-white mb-8 drop-shadow-lg tracking-wide relative inline-block">
          <span className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            Al-Amin Food Paradise
          </span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-accent animate-scale-up" style={{ animationDelay: '1000ms' }}></span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg animate-fade-in" style={{ animationDelay: '600ms' }}>
          A Taste of Tradition in Every Bite
        </p>
        <a 
          href="#order"
          className="btn-primary text-lg px-10 py-4 rounded-full hover:scale-110 animate-fade-in shadow-lg"
          style={{ animationDelay: '900ms' }}
        >
          Order Now
        </a>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-accent w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
