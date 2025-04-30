
import { useEffect, useRef } from 'react';

const LocationSection = () => {
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
    <section id="location" className="py-20 px-4 md:px-8 lg:px-0 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">Find Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal h-full">
            <div className="aspect-auto h-full rounded-lg overflow-hidden shadow-custom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7881961273446!2d103.7898279788258!3d1.3086810618240507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a69f9d8c12f%3A0x9b7187f076f8937f!2sAl-Amin%20Food%20Paradise!5e0!3m2!1sen!2ssg!4v1714615001091!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen={true}
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-custom h-full reveal glass-card">
              <h3 className="font-playfair font-bold text-2xl mb-6 text-primary">Al-Amin Food Paradise</h3>
              
              <div className="mb-8">
                <p className="font-medium text-lg mb-3 text-secondary">Address:</p>
                <p className="text-gray-600 text-lg">
                  123 Yishun Avenue 5<br />
                  #01-23 Northpoint City<br />
                  Singapore 768543
                </p>
              </div>
              
              <div className="mb-6">
                <p className="font-medium text-lg mb-3 text-secondary">Contact:</p>
                <p className="text-gray-600 text-lg">
                  Phone: +65 9165 5269
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=Al-Amin Food Paradise Singapore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
