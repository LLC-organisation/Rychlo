import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
