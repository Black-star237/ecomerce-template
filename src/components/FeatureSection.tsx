
import { Truck, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping in worldwide $500"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay with multiple credit cards"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "24/7 support and excellent"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 p-6">
              <div className="bg-gray-200 p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
