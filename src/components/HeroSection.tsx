import { motion } from "framer-motion";
import FireParticles from "./FireParticles";
import heroImg from "@/assets/hero-charcoal.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium charcoal" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <FireParticles />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Fire line */}
          <div className="mx-auto mb-8 h-px w-32 bg-gradient-fire animate-pulse-glow rounded-full" />

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mb-6">
            <span className="text-foreground">PREMIUM</span>{" "}
            <span className="text-gradient-fire">CHARCOAL</span>
            <br />
            <span className="text-foreground">EXPORTED</span>{" "}
            <span className="text-gradient-fire">WORLDWIDE</span>
          </h1>

          <p className="font-body text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 tracking-wide">
            Hardwood Charcoal · Coconut Briquettes · Activated Carbon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#inquiry")}
              className="px-8 py-4 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-widest rounded hover:shadow-lg transition-all duration-300 animate-pulse-glow"
            >
              Get Quote
            </button>
            <button
              onClick={() => scrollTo("#products")}
              className="px-8 py-4 border border-primary/50 text-primary font-heading text-lg uppercase tracking-widest rounded hover:bg-primary/10 transition-all duration-300"
            >
              View Products
            </button>
          </div>

          {/* Fire line bottom */}
          <div className="mx-auto mt-12 h-px w-48 bg-gradient-fire opacity-50 rounded-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
