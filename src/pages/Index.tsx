
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
    // Enhanced scroll reveal animation with more fluid transitions and higher threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Add staggered animation for child elements with improved timing
            const childElements = entry.target.querySelectorAll('.stagger');
            childElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, 120 * index); // Slightly faster staggering for more snappy feel
            });
          }
        });
      },
      { 
        threshold: 0.18, // Slightly higher threshold for earlier animation trigger
        rootMargin: '0px 0px -40px 0px' // Show animations slightly earlier
      }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    // Initialize staggered elements with enhanced initial state
    const staggerElements = document.querySelectorAll('.stagger');
    staggerElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(18px)'; // Slightly less initial offset for subtler animation
      (el as HTMLElement).style.transition = 'opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // More sophisticated easing
    });
    
    // Enhanced smooth scrolling for anchor links with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            // Add a small delay for any menu closing animations
            setTimeout(() => {
              window.scrollTo({
                top: (targetEl as HTMLElement).offsetTop - 70, // Account for fixed header
                behavior: 'smooth'
              });
            }, 50);
          }
        }
      });
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
