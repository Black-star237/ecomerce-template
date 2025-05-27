
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    title: "Latest Opad with keyboard",
    subtitle: "Devices",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "And then their eyes were opened",
    subtitle: "Devices",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Modern & style headphone",
    subtitle: "Gadgets",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    gradient: "from-orange-500 to-red-600"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient} text-white group cursor-pointer transform hover:scale-105 transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-between">
                <div>
                  <p className="text-sm opacity-80 mb-2">{product.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                </div>
                
                <div className="flex justify-between items-end">
                  <Button variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black">
                    Shop Now
                  </Button>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
