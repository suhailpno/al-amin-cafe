
import { useState, useEffect, useRef } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "rice"
  },
  {
    id: 2,
    name: "Lamb Curry",
    description: "Tender pieces of lamb simmered in a rich, spiced curry sauce",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 3,
    name: "Garlic Naan",
    description: "Freshly baked flatbread topped with garlic and butter",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "bread"
  },
  {
    id: 4,
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "appetizer"
  },
  {
    id: 5,
    name: "Butter Chicken",
    description: "Grilled chicken in a rich, creamy tomato sauce",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 6,
    name: "Vegetable Biryani",
    description: "Fragrant rice cooked with seasonal vegetables and spices",
    image: "https://images.unsplash.com/photo-1593179241807-10580fb770e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "rice"
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "grill"
  },
  {
    id: 8,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango and cardamom",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "drink"
  },
  {
    id: 9,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach sauce",
    image: "https://images.unsplash.com/photo-1618360925897-365e298a6e65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 10,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling",
    image: "https://images.unsplash.com/photo-1589352753375-e42d3dddf3e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "breakfast"
  },
  {
    id: 11,
    name: "Gulab Jamun",
    description: "Sweet milk solids balls soaked in rose flavored syrup",
    image: "https://images.unsplash.com/photo-1589197331516-4d84b75b7af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "dessert"
  },
  {
    id: 12,
    name: "Chicken Tikka",
    description: "Boneless chicken pieces marinated and grilled to perfection",
    image: "https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "grill"
  },
  {
    id: 13,
    name: "Prawn Curry",
    description: "Succulent prawns in a flavorful coconut curry sauce",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 14,
    name: "Vegetable Korma",
    description: "Mixed vegetables in a rich, creamy cashew and yogurt sauce",
    image: "https://images.unsplash.com/photo-1631292784640-2b24be979735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 15,
    name: "Jeera Rice",
    description: "Basmati rice flavored with cumin seeds",
    image: "https://images.unsplash.com/photo-1596450514735-111cca0a1151?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "rice"
  },
  {
    id: 16,
    name: "Raita",
    description: "Yogurt mixed with cucumber and mild spices",
    image: "https://images.unsplash.com/photo-1589516987731-a382cabde0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "side"
  }
];

const categories = ["all", "rice", "curry", "bread", "appetizer", "grill", "drink", "breakfast", "dessert", "side"];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === category));
    }
  };

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
    <section id="menu" className="py-20 px-4 md:px-8 lg:px-0 bg-gradient-to-br from-[#FEF7CD] to-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">
          Menu Highlights
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-custom overflow-hidden card-hover reveal">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
