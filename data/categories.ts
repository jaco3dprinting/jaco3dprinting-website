export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

const categories: Category[] = [
  {
    id: "popular",
    name: "Popular Prints",
    icon: "🐉",
    description: "Our most popular 3D printed products.",
  },

  {
    id: "gifts",
    name: "Gifts & Home",
    icon: "🎁",
    description: "Personalised gifts and home décor.",
  },

  {
    id: "automotive",
    name: "Automotive",
    icon: "🚗",
    description: "Custom vehicle accessories and replacement parts.",
  },

  {
  id: "home",
  name: "Home & House Products",
  icon: "🏠",
  description: "Practical and decorative 3D printed products for your home.",
  },
  
  {
    id: "cad",
    name: "CAD Design",
    icon: "📐",
    description: "Custom CAD modelling and reverse engineering.",
  },

  {
    id: "repairs",
    name: "Printer Repairs",
    icon: "🔧",
    description: "Maintenance, servicing and repair of 3D printers.",
  },


];

export default categories;