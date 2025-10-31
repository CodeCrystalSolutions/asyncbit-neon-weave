import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers, Box, Zap, Code } from "lucide-react";

const layers = [
  {
    icon: Box,
    title: "IaaS",
    subtitle: "The Foundation",
    description: "Scalable infrastructure and compute resources powering intelligent systems.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Layers,
    title: "PaaS",
    subtitle: "The Platform",
    description: "Development platform for building and deploying ML pipelines.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Zap,
    title: "SaaS",
    subtitle: "The Suite",
    description: "Intelligent applications and tools for modern workflows.",
    color: "from-primary/30 to-primary/10",
  },
  {
    icon: Code,
    title: "DevTools",
    subtitle: "The Toolkit",
    description: "SDKs, CLIs, and APIs for seamless integration.",
    color: "from-accent/30 to-accent/10",
  },
];

export const Ecosystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="ecosystem" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="neon-text">Async Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From compute to cognition — one intelligent continuum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div
                  className={`h-full p-8 rounded-xl bg-gradient-to-br ${layer.color} 
                    border border-border hover:border-primary/50 transition-all duration-300 
                    ${hoveredIndex === index ? "shadow-glow-md scale-105" : ""}`}
                >
                  <div className="flex flex-col h-full">
                    <Icon className="w-12 h-12 mb-6 text-primary" />
                    <h3 className="text-2xl font-bold mb-2">{layer.title}</h3>
                    <p className="text-sm text-primary/80 font-semibold mb-4">{layer.subtitle}</p>
                    <p className="text-muted-foreground flex-grow">{layer.description}</p>
                  </div>

                  {/* Connecting lines animation */}
                  {hoveredIndex === index && index < layers.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary origin-left"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
