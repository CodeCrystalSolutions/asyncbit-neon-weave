import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  "Python",
  "Go",
  "Rust",
  "TensorFlow",
  "PyTorch",
  "Docker",
  "Kubernetes",
  "LangChain",
  "WebGPU",
  "WebGL",
];

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="neon-text">Asynchronous Intelligence</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 
                transition-all duration-300 hover:shadow-glow-sm font-mono text-sm"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            <p className="relative text-xl font-mono text-primary">
              Everything. Asynchronously Engineered.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
