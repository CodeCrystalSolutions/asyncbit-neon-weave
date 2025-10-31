import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/asyncbit-logo.png";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AsyncBit" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("labs")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Labs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("ecosystem")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
        </div>

        <ThemeToggle />
      </nav>
    </motion.header>
  );
};
