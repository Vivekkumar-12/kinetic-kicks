import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    image: shoe1,
    name: "Air Velocity Pro",
    category: "Running",
    price: "$159",
  },
  {
    image: shoe2,
    name: "Court Dominator",
    category: "Basketball",
    price: "$189",
  },
  {
    image: shoe3,
    name: "Urban Explorer",
    category: "Lifestyle",
    price: "$139",
  },
];

const FeaturedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl lg:text-7xl font-black mb-6"
          >
            <span className="text-foreground">FEATURED </span>
            <span className="bg-gradient-ocean bg-clip-text text-transparent">COLLECTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium footwear designed for peak performance
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
