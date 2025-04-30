
import { useState, useEffect, useRef } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
    price: "$12.90",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "rice"
  },
  {
    id: 2,
    name: "Lamb Curry",
    description: "Tender pieces of lamb simmered in a rich, spiced curry sauce",
    price: "$15.90",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 3,
    name: "Garlic Naan",
    description: "Freshly baked flatbread topped with garlic and butter",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "bread"
  },
  {
    id: 4,
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: "$5.90",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "appetizer"
  },
  {
    id: 5,
    name: "Butter Chicken",
    description: "Grilled chicken in a rich, creamy tomato sauce",
    price: "$14.90",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "curry"
  },
  {
    id: 6,
    name: "Vegetable Biryani",
    description: "Fragrant rice cooked with seasonal vegetables and spices",
    price: "$10.90",
    image: "https://images.unsplash.com/photo-1593179241807-10580fb770e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "rice"
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor",
    price: "$13.90",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "grill"
  },
  {
    id: 8,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango and cardamom",
    price: "$4.90",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "drink"
  },
];

const categories = ["all", "rice", "curry", "bread", "appetizer", "grill", "drink"];

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
    <section id="menu" className="py-20 px-4 md:px-8 lg:px-0 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">Menu Highlights</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow-sm`}
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair font-bold text-lg">{item.name}</h3>
                  <span className="font-medium text-primary">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a
            href="#order"
            className="btn-secondary inline-block"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
