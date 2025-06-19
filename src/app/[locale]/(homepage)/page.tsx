import Banner from "@/components/features/banner/banner";
import AboutSection from "./_components/about-section";
import CompaniesSection from "./_components/companies-section";
import GallerySection from "./_components/gallery-section";
import ServiceFeatures from "@/components/features/features/feature";
import Occasions from "@/components/features/occasions/occasions";

export default function page() {
  return (
    <div className="container">
      {/* Carousel */}
      <Banner />

      {/* Service Features */}
      <ServiceFeatures />

      {/* Occasions Section */}
      <Occasions />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Companies Section */}
      <CompaniesSection />
    </div>
  );
}
