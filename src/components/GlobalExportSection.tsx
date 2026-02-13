import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

const regions = [
  { name: "Asia", countries: "UAE, Saudi Arabia, Japan, South Korea" },
  { name: "Middle East", countries: "Qatar, Kuwait, Oman, Bahrain" },
  { name: "Europe", countries: "Germany, UK, France, Netherlands" },
  { name: "Africa", countries: "South Africa, Nigeria, Kenya, Egypt" },
];

const GlobalExportSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="global" className="py-24 bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Decorative globe glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(25 100% 50% / 0.3), transparent)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">Reach</span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider mb-6">
            GLOBAL <span className="text-gradient-fire">EXPORTS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Serving buyers across Asia, Middle East, Europe & Africa with reliable supply and premium quality.
          </p>
        </motion.div>

        {/* Animated globe icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center relative animate-pulse-glow">
            <Globe className="w-16 h-16 text-primary" />
            {/* Orbiting dots */}
            {[0, 90, 180, 270].map((deg, i) => (
              <div
                key={deg}
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{
                  top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: 0.6 + i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="text-center p-6 rounded-lg border border-border bg-card/80"
            >
              <h3 className="font-heading text-xl uppercase tracking-wider text-primary mb-2">{region.name}</h3>
              <p className="text-muted-foreground text-sm">{region.countries}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalExportSection;
