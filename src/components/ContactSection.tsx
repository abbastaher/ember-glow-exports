import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card/50 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">Reach Out</span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider">
            CONTACT <span className="text-gradient-fire">US</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">B.M Exports<br />Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">info@bmexports.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            Export support available Monday – Saturday, 9:00 AM – 7:00 PM IST
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
