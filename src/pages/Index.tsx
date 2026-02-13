import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalExportSection from "@/components/GlobalExportSection";
import InquiryForm from "@/components/InquiryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <GlobalExportSection />
      <InquiryForm />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
