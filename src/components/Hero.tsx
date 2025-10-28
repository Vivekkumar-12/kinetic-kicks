import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroShoe from "@/assets/hero-shoe.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shoeRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animations
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(shoeRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -15,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Parallax scroll effect
      gsap.to(shoeRef.current, {
        y: 100,
        rotation: 5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-fire opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-semibold tracking-wide">NEW RELEASE</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-none">
              <span className="block text-foreground">IGNITE</span>
              <span className="block bg-gradient-fire bg-clip-text text-transparent">
                YOUR RUN
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience unmatched comfort and performance with our latest innovation. 
              Engineered for athletes who demand excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-fire hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full font-bold group"
              >
                Shop Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full font-bold"
              >
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Shoe Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-fire opacity-30 blur-3xl rounded-full" />
            <img
              ref={shoeRef}
              src={heroShoe}
              alt="Featured Shoe"
              className="relative w-full h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
