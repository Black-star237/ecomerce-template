
const categories = [
  {
    title: "Home Appliances",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "PC & Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Kitchen Appliances",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Phone & Tablet",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
    gradient: "from-teal-500 to-blue-500"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    gradient: "from-yellow-500 to-orange-500"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose your Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium products across diverse categories. Each product is carefully 
            selected for its superior quality and innovative design.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className={`relative w-full aspect-square rounded-full bg-gradient-to-br ${category.gradient} p-1 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-center font-semibold text-gray-800">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
