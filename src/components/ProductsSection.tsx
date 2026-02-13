import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import productHardwood from "@/assets/product-hardwood.jpg";
import productBriquettes from "@/assets/product-briquettes.jpg";
import productCarbon from "@/assets/product-carbon.jpg";

const products = [
  {
    name: "Hardwood Charcoal",
    image: productHardwood,
    grade: "Restaurant / BBQ Grade",
    specs: ["95%+ Fixed Carbon", "Low Ash (<3%)", "Long Burning Time", "Odorless & Smokeless"],
  },
  {
    name: "Coconut Charcoal Briquettes",
    image: productBriquettes,
    grade: "Shisha / BBQ Grade",
    specs: ["100% Coconut Shell", "2-3 Hour Burn", "Smokeless", "Uniform Shape & Size"],
  },
  {
    name: "Activated Carbon Powder",
    image: productCarbon,
    grade: "Industrial Grade",
    specs: ["High Adsorption", "Water Purification", "Air Filtration", "Pharmaceutical Grade"],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToInquiry = () => {
    document.querySelector("#inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-24 bg-card/50 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">Our Range</span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider">
            OUR <span className="text-gradient-fire">PRODUCTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-body uppercase tracking-wider text-primary bg-background/80 px-3 py-1 rounded-full">
                  {product.grade}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl uppercase tracking-wider mb-4 text-foreground">
                  {product.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToInquiry}
                  className="w-full py-3 border border-primary/50 text-primary font-heading uppercase tracking-widest text-sm rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
