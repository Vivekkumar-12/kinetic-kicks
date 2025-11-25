import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  index: number;
}

const ProductCard = ({ image, name, category, price, originalPrice, index }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `${name}-${index}`,
      image,
      name,
      category,
      price,
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-fire opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Quick add button - appears on hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full font-bold"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
          {category}
        </p>
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-black text-primary">{price}</p>
          {originalPrice && (
            <p className="text-xl text-muted-foreground line-through">{originalPrice}</p>
          )}
        </div>
      </div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-fire opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProductCard;
