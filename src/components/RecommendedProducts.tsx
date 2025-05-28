
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const recommendedProducts = [
  {
    id: 1,
    name: "Smart Phone 12",
    price: 559900,
    originalPrice: 699900,
    rating: 4.5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    badge: "New"
  },
  {
    id: 2,
    name: "Xiaomi Microwave Oven",
    price: 129900,
    originalPrice: 159900,
    rating: 4.8,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=300&h=300&fit=crop",
    badge: "Sale"
  },
  {
    id: 3,
    name: "Oryza Blender",
    price: 59900,
    originalPrice: 79900,
    rating: 4.3,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300&h=300&fit=crop"
  },
  {
    id: 4,
    name: "LG Fyre",
    price: 129900,
    originalPrice: 159900,
    rating: 4.7,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
  }
];

const RecommendedProducts = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Hautement Recommandés</h2>
            <p className="text-gray-600">
              Explorez nos produits recommandés sélectionnés pour leur qualité et leur valeur dans chaque catégorie.
            </p>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="hidden md:block">
              Voir tout
            </Button>
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  {product.badge && (
                    <span className={`absolute top-3 left-3 z-10 px-2 py-1 text-xs font-semibold rounded ${
                      product.badge === 'New' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
                </Link>
                
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
