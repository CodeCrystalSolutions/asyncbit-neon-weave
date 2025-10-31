import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/asyncbit-logo.png";

export const Footer = () => {
  return (
    <footer id="footer" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="AsyncBit" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Building the architecture of intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AetherCompute
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  BitStack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AsyncHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  NeuroKit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>
                <a href="mailto:hello@asyncbit.io" className="hover:text-primary transition-colors">
                  hello@asyncbit.io
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 AsyncBit. Engineered Asynchronously.</p>
        </div>
      </div>
    </footer>
  );
};
