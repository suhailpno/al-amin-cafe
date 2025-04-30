
import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/indian-biryani-with-yogurt-sauce.jpg",
    alt: "Flavorful biryani with yogurt sauce",
  },
  {
    id: 2,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-naan.jpg",
    alt: "Freshly prepared naan bread with garlic",
  },
  {
    id: 3,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/traditional-south-indian-dosa-with-chutney.jpg",
    alt: "Traditional South Indian dosa with chutney",
  },
  {
    id: 4,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/indian-curry-with-prawns.jpg",
    alt: "Rich and flavorful Indian curry with prawns",
  },
  {
    id: 5,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2020/05/indian-sweet-gulab-jamun.jpg",
    alt: "Sweet gulab jamun dessert",
  },
  {
    id: 6,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegetarian-curry-with-tofu.jpg",
    alt: "Vegetarian curry with tofu",
  },
  {
    id: 7,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/08/indian-chicken-tikka-skewers.jpg",
    alt: "Spicy chicken tikka skewers",
  },
  {
    id: 8,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2015/03/indian-vegetarian-food-platter.jpg",
    alt: "Indian vegetarian food platter",
  },
  {
    id: 9,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/01/white-rice.jpg",
    alt: "Perfectly cooked basmati rice",
  },
  {
    id: 10,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2021/01/spicy-thai-noodle-soup.jpg",
    alt: "Flavorful spicy soup with noodles",
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
            
            // Staggered animation for gallery items
            const galleryItems = entry.target.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add('active');
              }, 100 * index);
            });
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
              className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg gallery-item opacity-0 transform translate-y-8 transition-all duration-500 ease-out group ${
                index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
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
