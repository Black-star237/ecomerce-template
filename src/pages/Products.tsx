
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: 750000,
    originalPrice: 850000,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    badge: "Populaire"
  },
  {
    id: 2,
    name: "MacBook Pro M2 16\"",
    price: 1500000,
    rating: 4.8,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    badge: "New"
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    price: 150000,
    originalPrice: 180000,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    badge: "Sale"
  }
];

const newArrivals = [
  {
    id: 7,
    name: "Samsung Galaxy S23",
    price: 580000,
    rating: 4.6,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    badge: "New"
  },
  {
    id: 8,
    name: "PlayStation 5",
    price: 320000,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
  },
  {
    id: 9,
    name: "Apple Watch Series 8",
    price: 220000,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nos Produits</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits technologiques de haute qualité, 
            soigneusement sélectionnés pour répondre à tous vos besoins.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Produits Vedettes</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Nouveautés</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Offres Spéciales</h2>
          <p className="text-xl mb-6">Jusqu'à 40% de réduction sur une sélection de produits</p>
          <a href="/shop" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voir les offres
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
