import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const InquiryForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", country: "", email: "", product: "", quantity: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("inquiries").insert({
      name: form.name,
      company: form.company || null,
      country: form.country,
      email: form.email,
      product: form.product,
      quantity: form.quantity || null,
      message: form.message || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Thank you! Your inquiry has been received. We'll get back to you shortly.");
    setForm({ name: "", company: "", country: "", email: "", product: "", quantity: "", message: "" });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const inputClass =
    "w-full bg-card border border-border rounded px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors";

  return (
    <section id="inquiry" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">Inquire</span>
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider">
            REQUEST <span className="text-gradient-fire">BULK QUOTE</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input className={inputClass} placeholder="Your Name *" required value={form.name} onChange={(e) => update("name", e.target.value)} />
            <input className={inputClass} placeholder="Company Name" value={form.company} onChange={(e) => update("company", e.target.value)} />
            <input className={inputClass} placeholder="Country *" required value={form.country} onChange={(e) => update("country", e.target.value)} />
            <input className={inputClass} type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => update("email", e.target.value)} />
            <select className={inputClass} required value={form.product} onChange={(e) => update("product", e.target.value)}>
              <option value="">Select Product *</option>
              <option>Hardwood Charcoal</option>
              <option>Coconut Charcoal Briquettes</option>
              <option>Activated Carbon Powder</option>
            </select>
            <input className={inputClass} placeholder="Quantity (MT)" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} />
          </div>
          <textarea
            className={`${inputClass} mb-6 min-h-[120px]`}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-widest rounded hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-glow disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {loading ? "Submitting..." : "Request Bulk Quote"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default InquiryForm;
