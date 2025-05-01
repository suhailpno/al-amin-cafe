
import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/indian-curry-in-copper-bowl.jpg",
    alt: "Rich and aromatic Indian curry in copper bowl",
  },
  {
    id: 2,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/07/naan-bread-dipped-in-sauce.jpg",
    alt: "Freshly prepared naan bread with curry sauce",
  },
  {
    id: 3,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/07/indian-spices-in-small-bowls.jpg",
    alt: "Colorful variety of Indian spices in small bowls",
  },
  {
    id: 4,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/paneer-curry-with-rice.jpg",
    alt: "Delicious paneer curry with rice",
  },
  {
    id: 5,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/indian-feast-on-table.jpg",
    alt: "Indian feast laid out on a festive table",
  },
  {
    id: 6,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/02/indian-street-food-vendor.jpg",
    alt: "Indian street food vendor preparing delicious snacks",
  },
  {
    id: 7,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/01/authentic-indian-biryani.jpg",
    alt: "Authentic biryani with tender meat and aromatic rice",
  },
  {
    id: 8,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/tandoori-chicken-with-garnish.jpg",
    alt: "Traditional tandoori chicken served with garnish",
  },
  {
    id: 9,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/02/masala-dosa-with-chutneys.jpg",
    alt: "Delicious masala dosa with chutney and sambar",
  },
  {
    id: 10,
    url: "https://www.foodiesfeed.com/wp-content/uploads/2019/01/indian-street-food-variety.jpg",
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
