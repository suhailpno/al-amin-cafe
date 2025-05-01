
import { useState, useEffect, useRef } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Updated menu items based on Al-Amin's Food Panda menu
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Briyani",
    description: "Fragrant basmati rice cooked with marinated chicken and aromatic spices",
    image: "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg"
  },
  {
    id: 2,
    name: "Mutton Briyani",
    description: "Traditional rice dish with tender mutton pieces and signature spice blend",
    image: "https://img.freepik.com/free-photo/mutton-gosht-biryani-with-basmati-rice-garnished-with-fried-onion-mint-leaves_466689-74145.jpg"
  },
  {
    id: 3,
    name: "Fish Briyani",
    description: "Flavorful rice cooked with marinated fish and traditional herbs",
    image: "https://img.freepik.com/free-photo/seafood-biryani-bowl-food-photography_53876-91341.jpg"
  },
  {
    id: 4,
    name: "Vegetable Briyani",
    description: "Aromatic rice with seasonal vegetables and special spice blend",
    image: "https://img.freepik.com/premium-photo/top-view-traditional-vegetable-biryani-with-raita_466689-29633.jpg"
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor",
    image: "https://img.freepik.com/free-photo/traditional-indian-tandoori-chicken_1147-192.jpg"
  },
  {
    id: 6,
    name: "Butter Chicken",
    description: "Tender chicken pieces in a rich tomato, butter and cream sauce",
    image: "https://img.freepik.com/free-photo/chicken-makhani-butter-chicken-curry-indian-food-white-background_55610-3749.jpg"
  },
  {
    id: 7,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach gravy",
    image: "https://img.freepik.com/premium-photo/palak-paneer-indian-dish-with-spinach-cheese-white-background-isolated_987802-173.jpg"
  },
  {
    id: 8,
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic and butter, baked in tandoor",
    image: "https://img.freepik.com/free-photo/indian-naan-bread_1147-155.jpg"
  },
  {
    id: 9,
    name: "Chicken Tikka",
    description: "Boneless chicken pieces marinated and grilled to perfection",
    image: "https://img.freepik.com/free-photo/chicken-tikka-kebab-white-plate-with-sauce-generated-by-ai_188544-13265.jpg"
  },
  {
    id: 10,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with sweet mango pulp",
    image: "https://img.freepik.com/free-photo/mango-lassi-mango-smoothie-white-background_123827-22643.jpg"
  },
  {
    id: 11,
    name: "Plain Teh",
    description: "Freshly brewed tea served hot",
    image: "https://img.freepik.com/free-photo/cup-tea-with-vintage-kettle_144627-27155.jpg"
  },
  {
    id: 12,
    name: "Teh Tarik",
    description: "Pulled milk tea, a popular Malaysian drink",
    image: "https://img.freepik.com/free-photo/teh-tarik-popular-malaysian-drink-black-background_505751-2741.jpg"
  },
  {
    id: 13,
    name: "Egg Prata",
    description: "Flaky flatbread with egg, served with curry",
    image: "https://img.freepik.com/premium-photo/asian-roti-prata-with-curry-sauce_1339-156426.jpg"
  },
  {
    id: 14,
    name: "Plain Prata",
    description: "Traditional flaky flatbread served with curry",
    image: "https://img.freepik.com/premium-photo/chapati-also-known-as-indian-flat-bread-roti-fulka-with-green-salad-generative-ai_92742-2951.jpg"
  },
  {
    id: 15,
    name: "Roti John",
    description: "Singapore-style omelette sandwich with minced meat",
    image: "https://img.freepik.com/free-photo/sandwich-with-chicken-tomato-lettuce-cheese-french-fries_2829-19986.jpg"
  },
  {
    id: 16,
    name: "Murtabak Special",
    description: "Stuffed folded prata with meat, eggs and onions",
    image: "https://img.freepik.com/premium-photo/popular-asian-food-murtabak-mutabbaq-filled-with-eggs-onion-beef-flour-flat-lay_492154-1926.jpg"
  }
];

const MenuSection = () => {
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
    <section id="menu" className="py-20 px-4 md:px-8 lg:px-0 bg-gradient-to-br from-softYellow/70 to-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">
          Menu Highlights
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
        </h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 reveal">
          Experience the rich flavors of authentic Indian and Singaporean cuisine with our carefully crafted dishes, 
          made with traditional spices and fresh ingredients.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-custom overflow-hidden card-hover reveal group">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#order"
            className="btn-primary inline-block"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
