
import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Rich and aromatic lamb curry",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Freshly prepared naan bread with garlic",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    alt: "Colorful variety of spices used in our dishes",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1631292784649-4dff096d0c85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Chef preparing a traditional dish in the kitchen",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Fresh salad with seasonal vegetables",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Staff serving customers with a smile",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1589309736404-a037e5ed3c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Authentic biryani with tender meat and aromatic rice",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1626777553635-be342a887072?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional tandoori chicken served with garnish",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Delicious masala dosa with chutney and sambar",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1567188040759-fb8a254b3128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Variety of Indian street food on rustic wooden table",
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
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-0 bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">Our Food Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg reveal group ${
                index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-start p-4">
                <span className="text-white text-lg font-medium">{image.alt}</span>
              </div>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-6 right-6 text-white text-xl p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            {galleryImages.map((image) => (
              selectedImage === image.id && (
                <div key={image.id} className="text-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                  <p className="text-white text-lg mt-4">{image.alt}</p>
                </div>
              )
            ))}
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-colors"
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
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-colors"
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
