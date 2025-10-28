import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import ProductCard from "@/components/ProductCard";
import StarsBackground from "@/components/StarsBackground";
import kids1 from "@/assets/kids-1.jpg";
import kids2 from "@/assets/kids-2.jpg";
import kids3 from "@/assets/kids-3.jpg";

const products = [
  { image: kids1, name: "Junior Flash", category: "Kids Running", price: "$79" },
  { image: kids2, name: "Youth Champion", category: "Kids Sports", price: "$89" },
  { image: kids3, name: "Little Star", category: "Kids Casual", price: "$69" },
  { image: kids1, name: "Speed Dash", category: "Kids Running", price: "$85" },
  { image: kids2, name: "Play Pro", category: "Kids Sports", price: "$79" },
  { image: kids3, name: "Fun Step", category: "Kids Casual", price: "$75" },
];

const Kids = () => {
  return (
    <div className="min-h-screen bg-background">
      <StarsBackground />
      <Navigation />
      <CategoryHero
        title="KIDS"
        description="Fun, comfort, and adventure in every step."
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

export default Kids;
