import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import CollectionSection from "@/components/CollectionSection";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import ChatBot from "@/components/ChatBot";
import men1 from "@/assets/men-1.jpg";
import men2 from "@/assets/men-2.jpg";
import women1 from "@/assets/women-1.jpg";
import women2 from "@/assets/women-2.jpg";
import kids1 from "@/assets/kids-1.jpg";
import shoe1 from "@/assets/shoe-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const flipkartDeals = [
  { image: men1, name: "Velocity Runner", category: "Running", price: "₹10,999" },
  { image: women1, name: "Grace Runner", category: "Women's", price: "₹9,999" },
  { image: kids1, name: "Junior Flash", category: "Kids", price: "₹4,999" },
];

const amazonDeals = [
  { image: men2, name: "Elite Champion", category: "Basketball", price: "₹13,499" },
  { image: women2, name: "Aurora Sprint", category: "Running", price: "₹11,999" },
  { image: shoe1, name: "Air Flow Pro", category: "Training", price: "₹10,499" },
];

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    const lenis = {
      scrollTo: (target: number) => {
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      },
    };

    // Update ScrollTrigger on scroll
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StarsBackground />
      <Navigation />
      <Hero />
      <FeaturedSection />
      <CollectionSection
        title="FLIPKART"
        subtitle="Exclusive online deals curated just for you"
        products={flipkartDeals}
        gradientClass="bg-gradient-ocean"
      />
      <CollectionSection
        title="AMAZON"
        subtitle="Prime picks with unbeatable prices and fast delivery"
        products={amazonDeals}
        gradientClass="bg-gradient-fire"
      />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
