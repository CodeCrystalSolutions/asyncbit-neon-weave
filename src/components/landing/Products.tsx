import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Cloud, Layers, Zap, Code2, Atom, LineChart } from "lucide-react";

const products = [
  {
    icon: Cloud,
    name: "AetherCompute",
    type: "IaaS",
    description: "Async-optimized compute and cloud architecture for AI workloads.",
    status: "live" as const,
  },
  {
    icon: Layers,
    name: "BitStack",
    type: "PaaS",
    description: "Platform for deploying, scaling, and managing ML pipelines.",
    status: "live" as const,
  },
  {
    icon: Zap,
    name: "AsyncHub",
    type: "SaaS",
    description: "Unified control center for managing AI models, data, and APIs.",
    status: "live" as const,
  },
  {
    icon: Code2,
    name: "NeuroKit",
    type: "Dev Tool",
    description: "SDK + CLI toolkit for AsyncBit integrations.",
    status: "live" as const,
  },
  {
    icon: Atom,
    name: "QuantumNode",
    type: "Labs",
    description: "Quantum-inspired asynchronous computation system.",
    status: "coming-soon" as const,
  },
  {
    icon: LineChart,
    name: "DataPulse",
    type: "SaaS",
    description: "Real-time data visualization and analytics.",
    status: "coming-soon" as const,
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Products & <span className="neon-text">Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore the AsyncBit ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
