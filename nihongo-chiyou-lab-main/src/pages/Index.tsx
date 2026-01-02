import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
