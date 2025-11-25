import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import ProductCard from "@/components/ProductCard";
import StarsBackground from "@/components/StarsBackground";
import men1 from "@/assets/men-1.jpg";
import men2 from "@/assets/men-2.jpg";
import men3 from "@/assets/men-3.jpg";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";

const products = [
  { image: men1, name: "Velocity Runner", category: "Running", price: "₹13,899" },
  { image: men2, name: "Elite Champion", category: "Basketball", price: "₹16,299" },
  { image: men3, name: "Power Trainer", category: "Training", price: "₹12,199" },
  { image: shoe1, name: "Air Flow Pro", category: "Running", price: "₹12,999" },
  { image: shoe2, name: "Court Master", category: "Basketball", price: "₹15,499" },
  { image: shoe3, name: "Urban Edge", category: "Lifestyle", price: "₹11,399" },
];

const Men = () => {
  return (
    <div className="min-h-screen bg-background">
      <StarsBackground />
      <Navigation />
      <CategoryHero
        title="MEN'S"
        description="Engineered for peak performance. Designed for champions."
        gradient="bg-gradient-ocean"
      />
      <section className="py-20 px-6">
        <div className="container mx-auto">
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

export default Men;
