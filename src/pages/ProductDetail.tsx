
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Simuler les données du produit basées sur l'ID
  const product = {
    id: parseInt(id || '1'),
    name: "iPhone 14 Pro",
    price: 650000,
    originalPrice: 750000,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567320421013-4f76e5b1f5db?w=600&h=600&fit=crop"
    ],
    description: "Le nouvel iPhone 14 Pro offre des performances exceptionnelles avec la puce A16 Bionic, un système de caméras Pro avancé et un écran Super Retina XDR de 6,1 pouces.",
    features: [
      "Écran Super Retina XDR de 6,1 pouces",
      "Puce A16 Bionic ultra-rapide",
      "Système de caméras Pro 48 Mpx",
      "Jusqu'à 23 heures de lecture vidéo",
      "Résistant à l'eau (IP68)"
    ],
    specifications: {
      "Écran": "6,1 pouces Super Retina XDR",
      "Processeur": "Puce A16 Bionic",
      "Stockage": "128 Go",
      "Caméra": "48 Mpx Principal, 12 Mpx Ultra grand-angle",
      "Batterie": "Jusqu'à 23h de lecture vidéo",
      "Couleur": "Noir sidéral"
    },
    inStock: true
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const handleAddToCart = () => {
    console.log(`Ajout au panier: ${product.name} x${quantity}`);
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images du produit */}
          <div>
            <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`Vue ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Détails du produit */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} avis)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              {product.inStock ? (
                <span className="text-green-600 font-medium">En stock</span>
              ) : (
                <span className="text-red-600 font-medium">Rupture de stock</span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Caractéristiques principales</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ajouter au panier
              </Button>
            </div>

            <div className="flex space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favoris
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Spécifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
