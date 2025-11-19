import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import ChatBot from "@/components/ChatBot";

gsap.registerPlugin(ScrollTrigger);

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
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
