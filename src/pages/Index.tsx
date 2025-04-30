
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import USPSection from '../components/USPSection';
import OrderSection from '../components/OrderSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Setup scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);
  
  // For a real implementation, you would set up analytics here
  useEffect(() => {
    // This would be Google Analytics 4 setup
    console.log('Setting up analytics...');
    // Example GA4 code would go here
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <USPSection />
      <OrderSection />
      <GallerySection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
