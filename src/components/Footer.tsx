const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-gradient-fire flex items-center justify-center">
          <span className="font-display text-xs text-primary-foreground">BM</span>
        </div>
        <span className="font-display text-lg tracking-widest text-foreground">B.M EXPORTS</span>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} B.M Exports. Premium Charcoal Manufacturer & Exporter — Rajasthan, India.
      </p>
    </div>
  </footer>
);

export default Footer;
