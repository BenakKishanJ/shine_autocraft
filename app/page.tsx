import { CardScrollComponent } from "@/components/CardScrollComponent";
import { GalleryDemo } from "@/components/GalleryDemo";
import { TestimonialsSectionDemo } from "@/components/TestimonialsSection";
// import HeroSection from "@/components/hero-section";
import { Contact7 } from "@/components/ui/contact-7";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { Pricing } from "@/components/ui/pricing-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <CardScrollComponent />
      <Pricing />
      <GalleryDemo />
      <TestimonialsSectionDemo />
      <Contact7 />
    </>
  );
}
