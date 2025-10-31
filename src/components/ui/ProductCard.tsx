import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  type: string;
  description: string;
  status: "live" | "coming-soon";
}

export const ProductCard = ({ icon: Icon, name, type, description, status }: ProductCardProps) => {
  const isComingSoon = status === "coming-soon";

  return (
    <motion.div
      whileHover={{ y: isComingSoon ? 0 : -8 }}
      className={`h-full p-8 rounded-xl bg-card border border-border transition-all duration-300
        ${isComingSoon ? "opacity-60 grayscale cursor-not-allowed" : "hover:border-primary/50 hover:shadow-glow-md"}
      `}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          {isComingSoon && (
            <Badge variant="neon" className="border-primary/50">
              Coming Soon
            </Badge>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-primary/80 font-semibold mb-4">{type}</p>
        <p className="text-muted-foreground mb-8 flex-grow">{description}</p>

        {!isComingSoon && (
          <Button
            variant="neon"
            className="w-full"
          >
            Learn More
          </Button>
        )}
      </div>
    </motion.div>
  );
};
