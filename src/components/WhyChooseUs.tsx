import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Package, Boxes, TrendingUp, DollarSign, Truck } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Export Quality Standards", desc: "Certified products meeting international benchmarks" },
  { icon: Boxes, title: "Bulk Capacity", desc: "Large-scale manufacturing to meet high-volume orders" },
  { icon: Package, title: "Custom Packaging", desc: "Branded & private-label packaging solutions" },
  { icon: TrendingUp, title: "Consistent Supply", desc: "Year-round production with reliable delivery" },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Factory-direct prices for maximum value" },
  { icon: Truck, title: "Global Shipping", desc: "Seamless logistics to ports worldwide" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">Advantages</span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider">
            WHY <span className="text-gradient-fire">CHOOSE US</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/30 bg-card/50 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase tracking-wider mb-1 text-foreground">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
