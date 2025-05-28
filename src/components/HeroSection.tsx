
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                RÉDUCTION JUSQU'À 25% - DÉPÊCHEZ-VOUS
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Nouvelle génération
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Réalité virtuelle
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 max-w-md">
              Nous changeons votre façon d'interagir avec la technologie, avec une expérience VR 
              tout droit sortie de la science-fiction, vous emmenant dans un gaming de nouvelle génération
            </p>
            
            <div className="flex space-x-4">
              <Link to="/shop">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                  Acheter maintenant
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
                Voir la démo
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-3xl rounded-full"></div>
              <img 
                src="/lovable-uploads/cb55382d-3b6c-4b98-8f89-199fba7d1fdd.png" 
                alt="VR Headset" 
                className="relative z-10 w-96 h-auto object-contain animate-scale-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
