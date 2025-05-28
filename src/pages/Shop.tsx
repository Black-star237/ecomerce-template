
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 650000,
    originalPrice: 750000,
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "Smartphones",
    badge: "New"
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: 1200000,
    originalPrice: 1400000,
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    category: "Laptops",
    badge: "Sale"
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    price: 180000,
    originalPrice: 220000,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    category: "Audio"
  },
  {
    id: 4,
    name: "Samsung 4K TV",
    price: 450000,
    originalPrice: 550000,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
    category: "TVs"
  },
  {
    id: 5,
    name: "iPad Air",
    price: 380000,
    originalPrice: 450000,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=300&fit=crop",
    category: "Tablets"
  },
  {
    id: 6,
    name: "Nintendo Switch",
    price: 180000,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    category: "Gaming"
  }
];

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', 'Smartphones', 'Laptops', 'Audio', 'TVs', 'Tablets', 'Gaming'];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory, sortBy);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterProducts(searchTerm, selectedCategory, sort);
  };

  const filterProducts = (search: string, category: string, sort: string) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (sort === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-gray-600">Découvrez notre large sélection de produits technologiques</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Rechercher</h3>
              <Input
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Catégories</h3>
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'Toutes les catégories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Trier par</h3>
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nom</SelectItem>
                  <SelectItem value="price-low">Prix croissant</SelectItem>
                  <SelectItem value="price-high">Prix décroissant</SelectItem>
                  <SelectItem value="rating">Note</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} produits trouvés</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
