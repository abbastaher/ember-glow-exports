import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Leaf, Globe, Award } from "lucide-react";

const stats = [
  { icon: Flame, label: "High Carbon Content", desc: "95%+ fixed carbon in our premium range" },
  { icon: Leaf, label: "Eco-Friendly", desc: "Sustainable sourcing & green production" },
  { icon: Globe, label: "Global Supply", desc: "Bulk exports to 20+ countries" },
  { icon: Award, label: "Export Quality", desc: "International quality certifications" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">About Us</span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider mb-6">
            B.M <span className="text-gradient-fire">EXPORTS</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Based in Rajasthan, India — B.M Exports is a leading manufacturer and exporter of
            premium charcoal products. We deliver high carbon content, low ash charcoal
            with eco-friendly production to global markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg uppercase tracking-wider mb-2 text-foreground">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
