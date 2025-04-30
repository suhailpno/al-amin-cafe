
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-0" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="section-heading mb-8 reveal">Our Story</h2>
            <p className="mb-6 reveal">
              Since our humble beginnings in 2005, Al-Amin Food Paradise has been serving authentic, 
              home-style cuisine that brings together generations of family recipes and culinary traditions.
            </p>
            <p className="mb-6 reveal">
              Our founder, Chef Amin, brought his passion for cooking from his homeland, 
              creating a place where guests can experience the true essence of our heritage through 
              carefully prepared dishes using time-honored techniques and the freshest ingredients.
            </p>
            <p className="reveal">
              Today, we continue to honor these traditions while introducing innovative flavors 
              that delight our loyal customers. Every dish tells a story, and we invite you to be 
              part of our journey through a dining experience that celebrates culture, community, and cuisine.
            </p>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] reveal">
            <div className="absolute inset-0 border-2 border-accent rounded transform translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant interior with traditional decor"
              className="w-full h-full object-cover rounded shadow-custom"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
