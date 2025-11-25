import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import ProductCard from "@/components/ProductCard";
import StarsBackground from "@/components/StarsBackground";
import women1 from "@/assets/women-1.jpg";
import women2 from "@/assets/women-2.jpg";
import women3 from "@/assets/women-3.jpg";

const products = [
  { image: women1, name: "Grace Runner", category: "Running", price: "₹12,999" },
  { image: women2, name: "Aurora Sprint", category: "Running", price: "₹13,899" },
  { image: women3, name: "Elegance Walk", category: "Lifestyle", price: "₹12,199" },
  { image: women1, name: "Flex Motion", category: "Training", price: "₹11,399" },
  { image: women2, name: "Power Stride", category: "Running", price: "₹14,699" },
  { image: women3, name: "Urban Chic", category: "Lifestyle", price: "₹12,699" },
];

const Women = () => {
  return (
    <div className="min-h-screen bg-background">
      <StarsBackground />
      <Navigation />
      <CategoryHero
        title="WOMEN'S"
        description="Empowered performance meets elegant design."
        gradient="bg-gradient-fire"
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

export default Women;
