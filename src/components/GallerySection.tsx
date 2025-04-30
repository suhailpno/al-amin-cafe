
import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Rich and aromatic lamb curry",
    span: "span 2"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Freshly prepared naan bread with garlic",
    span: "span 1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    alt: "Colorful variety of spices used in our dishes",
    span: "span 1"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1631292784649-4dff096d0c85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Chef preparing a traditional dish in the kitchen",
    span: "span 2"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Fresh salad with seasonal vegetables",
    span: "span 1"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Staff serving customers with a smile",
    span: "span 1"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight' && selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    } else if (e.key === 'ArrowLeft' && selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-0" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">Our Food Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg reveal`}
              onClick={() => openLightbox(image.id)}
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 z-10 flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-xl">View</span>
              </div>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-4 right-4 text-white text-xl p-2"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            {galleryImages.map((image) => (
              selectedImage === image.id && (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )
            ))}
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIndex].id);
                }}
                aria-label="Previous image"
              >
                &lt;
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIndex].id);
                }}
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
