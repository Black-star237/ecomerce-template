
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">Clasy</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-gray-300 transition-colors">Shop</Link>
            <Link to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search..." 
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
