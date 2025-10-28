import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CategoryHeroProps {
  title: string;
  description: string;
  gradient: string;
}

const CategoryHero = ({ title, description, gradient }: CategoryHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 px-6 overflow-hidden"
    >
      <div className={`absolute inset-0 ${gradient} opacity-20`} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto relative z-10 text-center">
        <div ref={titleRef}>
          <h1 className="text-6xl lg:text-8xl font-black mb-6 text-foreground">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
