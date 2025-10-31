import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Atom, Brain, Gauge } from "lucide-react";

const concepts = [
  {
    icon: Atom,
    title: "Quantum AI",
    description: "Next-generation quantum-inspired algorithms for exponential compute.",
  },
  {
    icon: Brain,
    title: "Autonomous Agents",
    description: "Self-learning systems that adapt and evolve without human intervention.",
  },
  {
    icon: Gauge,
    title: "Async Optimization",
    description: "Revolutionary approaches to parallel processing and distributed intelligence.",
  },
];

export const Labs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="labs" ref={ref} className="py-32 relative overflow-hidden">
      {/* Nebula background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text">AsyncBit Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Engineering tomorrow's intelligence today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-md"
              >
                <Icon className="w-12 h-12 mb-6 text-primary animate-float" />
                <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
                <p className="text-muted-foreground">{concept.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join the Labs</h3>
          <p className="text-muted-foreground mb-8">
            Get early access to experimental features and shape the future of async intelligence.
          </p>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="your@email.com"
              className="bg-background border-border focus:border-primary"
            />
            <Button variant="hero" className="whitespace-nowrap">
              Request Access
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
