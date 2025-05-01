
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.788659913726!2d103.78993537578979!3d1.3086857616265717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a69f9d8c12f%3A0x9b7187f076f8937f!2sAl-Amin%20Food%20Paradise!5e0!3m2!1sen!2ssg!4v1714786868810!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al-Amin Food Paradise Location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-custom h-full reveal glass-card">
              <h3 className="font-playfair font-bold text-2xl mb-6 text-primary">Al-Amin Food Paradise</h3>
              
              <div className="mb-8">
                <p className="font-medium text-lg mb-3 text-secondary">Address:</p>
                <p className="text-gray-600 text-lg">
                  15 Woodlands Loop<br />
                  #01-59<br />
                  Singapore 738322
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
                  href="https://www.google.com/maps/place/Al-Amin+Food+Paradise/@1.3086811,103.7924029,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1a69f9d8c12f:0x9b7187f076f8937f!8m2!3d1.3086811!4d103.7924029!16s%2Fg%2F11f0w_4f02?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
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
