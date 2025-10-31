import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Animated network visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full"
                      style={{
                        transform: `rotate(${i * 60}deg) translateY(-100px)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-primary rounded-full animate-pulse-glow"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We build the <span className="neon-text">tools</span> of intelligence.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AsyncBit develops intelligent AI and ML platforms — creating powerful tools 
              for developers, researchers, and innovators building the next generation of intelligent systems.
            </p>
            <p className="text-lg text-muted-foreground">
              We create software that empowers: <span className="text-primary font-semibold">autonomous</span>, 
              {" "}<span className="text-primary font-semibold">adaptive</span>, and{" "}
              <span className="text-primary font-semibold">asynchronous</span> development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
