
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
    // Enhanced scroll reveal animation with more fluid transitions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Add staggered animation for child elements
            const childElements = entry.target.querySelectorAll('.stagger');
            childElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, 150 * index);
            });
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    // Initialize staggered elements
    const staggerElements = document.querySelectorAll('.stagger');
    staggerElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initialize menu item animations
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(el => {
      (el as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Initialize gallery item animations
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(el => {
      (el as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
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
