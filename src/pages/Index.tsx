
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ProductGrid from '@/components/ProductGrid';
import CategorySection from '@/components/CategorySection';
import RecommendedProducts from '@/components/RecommendedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProductGrid />
      <CategorySection />
      <RecommendedProducts />
      <Footer />
    </div>
  );
};

export default Index;
