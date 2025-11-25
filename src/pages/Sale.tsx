import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import ProductCard from "@/components/ProductCard";
import StarsBackground from "@/components/StarsBackground";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import men1 from "@/assets/men-1.jpg";
import women1 from "@/assets/women-1.jpg";
import kids1 from "@/assets/kids-1.jpg";

const products = [
  { image: shoe1, name: "Air Velocity Pro", category: "Running", price: "₹8,099", originalPrice: "₹12,999" },
  { image: shoe2, name: "Court Dominator", category: "Basketball", price: "₹9,799", originalPrice: "₹15,499" },
  { image: shoe3, name: "Urban Explorer", category: "Lifestyle", price: "₹7,299", originalPrice: "₹11,399" },
  { image: men1, name: "Velocity Runner", category: "Men's Running", price: "₹8,999", originalPrice: "₹13,899" },
  { image: women1, name: "Grace Runner", category: "Women's Running", price: "₹8,099", originalPrice: "₹12,999" },
  { image: kids1, name: "Junior Flash", category: "Kids Running", price: "₹4,099", originalPrice: "₹6,499" },
];

const Sale = () => {
  return (
    <div className="min-h-screen bg-background">
      <StarsBackground />
      <Navigation />
      <CategoryHero
        title="SALE"
        description="Unmissable deals on premium footwear. Limited time only!"
        gradient="bg-gradient-fire"
      />
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block px-6 py-3 bg-destructive/20 border border-destructive rounded-full">
              <span className="text-destructive font-bold text-lg">UP TO 50% OFF</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Sale;
