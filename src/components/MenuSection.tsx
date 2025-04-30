
import { useState, useEffect, useRef } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/indian-biryani-with-yogurt-sauce.jpg"
  },
  {
    id: 2,
    name: "Lamb Curry",
    description: "Tender pieces of lamb simmered in a rich, spiced curry sauce",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/indian-curry-with-prawns.jpg"
  },
  {
    id: 3,
    name: "Garlic Naan",
    description: "Freshly baked flatbread topped with garlic and butter",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-naan.jpg"
  },
  {
    id: 4,
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-with-guacamole-sandwiches.jpg"
  },
  {
    id: 5,
    name: "Butter Chicken",
    description: "Grilled chicken in a rich, creamy tomato sauce",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/fresh-salad-with-grilled-halloumi-cheese.jpg"
  },
  {
    id: 6,
    name: "Vegetable Biryani",
    description: "Fragrant rice cooked with seasonal vegetables and spices",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2015/03/indian-vegetarian-food-platter.jpg"
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2017/07/roasted-chicken-with-potatoes.jpg"
  },
  {
    id: 8,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango and cardamom",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2019/01/dreamy-flatwhite-coffee-with-perfect-latte-art.jpg"
  },
  {
    id: 9,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach sauce",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2016/05/summer-juicy-beef-burger.jpg"
  },
  {
    id: 10,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/traditional-south-indian-dosa-with-chutney.jpg"
  },
  {
    id: 11,
    name: "Gulab Jamun",
    description: "Sweet milk solids balls soaked in rose flavored syrup",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2020/05/indian-sweet-gulab-jamun.jpg"
  },
  {
    id: 12,
    name: "Chicken Tikka",
    description: "Boneless chicken pieces marinated and grilled to perfection",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2019/08/indian-chicken-tikka-skewers.jpg"
  },
  {
    id: 13,
    name: "Prawn Curry",
    description: "Succulent prawns in a flavorful coconut curry sauce",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2021/01/spicy-thai-noodle-soup.jpg"
  },
  {
    id: 14,
    name: "Vegetable Korma",
    description: "Mixed vegetables in a rich, creamy cashew and yogurt sauce",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegetarian-curry-with-tofu.jpg"
  },
  {
    id: 15,
    name: "Jeera Rice",
    description: "Basmati rice flavored with cumin seeds",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2019/01/white-rice.jpg"
  },
  {
    id: 16,
    name: "Raita",
    description: "Yogurt mixed with cucumber and mild spices",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2019/01/bowl-with-yoghurt-and-granola.jpg"
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
            
            // Add staggered animation for menu items
            const menuItems = entry.target.querySelectorAll('.menu-item');
            menuItems.forEach((item, index) => {
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

  return (
    <section id="menu" className="py-20 px-4 md:px-8 lg:px-0 bg-gradient-to-br from-softYellow/70 to-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">
          Menu Highlights
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
        </h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 reveal">
          Experience the rich flavors of traditional cuisine with our carefully crafted dishes, 
          made with authentic spices and fresh ingredients.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-custom overflow-hidden card-hover menu-item opacity-0 transform translate-y-8 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
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
