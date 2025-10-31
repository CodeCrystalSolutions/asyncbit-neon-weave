import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Products } from "@/components/landing/Products";
import { Labs } from "@/components/landing/Labs";
import { TechStack } from "@/components/landing/TechStack";
import { Footer } from "@/components/landing/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Ecosystem />
      <Products />
      <Labs />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
