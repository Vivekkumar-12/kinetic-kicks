import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

interface CollectionSectionProps {
  title: string;
  subtitle: string;
  products: Array<{
    image: string;
    name: string;
    category: string;
    price: string;
  }>;
  gradientClass: string;
}

const CollectionSection = ({ title, subtitle, products, gradientClass }: CollectionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl lg:text-7xl font-black mb-6">
            <span className="text-foreground">{title} </span>
            <span className={`${gradientClass} bg-clip-text text-transparent`}>DEALS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
