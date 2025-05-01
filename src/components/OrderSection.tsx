
import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Utensils } from 'lucide-react';

const OrderSection = () => {
  const [isHoverFoodpanda, setIsHoverFoodpanda] = useState(false);
  const [isHoverGrabfood, setIsHoverGrabfood] = useState(false);
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

  const trackOrderClick = (platform: string) => {
    // For real implementation, replace with actual analytics tracking
    console.log(`Order clicked: ${platform}`);
  };

  return (
    <section id="order" className="py-20 px-4 md:px-8 lg:px-0 bg-gradient-to-br from-primary/95 to-primary/80 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading text-white text-center mb-12 reveal">
          Order Online
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
        </h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-white/90 text-lg reveal">
          Enjoy our delicious food from the comfort of your home. 
          Order now through our delivery partners for a quick and convenient experience.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Foodpanda with updated image */}
          <div 
            className="reveal animate-float"
            style={{ animationDelay: "0.2s" }}
            onMouseEnter={() => setIsHoverFoodpanda(true)}
            onMouseLeave={() => setIsHoverFoodpanda(false)}
          >
            <a 
              href="https://www.foodpanda.sg" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackOrderClick('foodpanda')}
              className="block relative"
            >
              <div className={`
                bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-2xl transition-all duration-500
                ${isHoverFoodpanda ? 'scale-105 shadow-accent/20' : 'scale-100'}
              `}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-40 h-40 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Foodpanda_logo_since_2017.jpeg" 
                      alt="FOODPANDA" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#ff2b82] font-bold text-2xl">FOODPANDA</h3>
                  <p className="text-primary font-medium text-center mt-2">Order via Foodpanda</p>
                </div>
              </div>
            </a>
          </div>
          
          {/* GrabFood with updated image */}
          <div 
            className="reveal animate-float"
            style={{ animationDelay: "0.5s" }}
            onMouseEnter={() => setIsHoverGrabfood(true)}
            onMouseLeave={() => setIsHoverGrabfood(false)}
          >
            <a 
              href="https://food.grab.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackOrderClick('grabfood')}
              className="block relative"
            >
              <div className={`
                bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-2xl transition-all duration-500
                ${isHoverGrabfood ? 'scale-105 shadow-accent/20' : 'scale-100'}
              `}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-40 h-40 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://i.pinimg.com/736x/6e/9b/95/6e9b95d516082899783cfd05d7629995.jpg" 
                      alt="GRABFOOD" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#00b14f] font-bold text-2xl">GRABFOOD</h3>
                  <p className="text-primary font-medium text-center mt-2">Order via GrabFood</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
