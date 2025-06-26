import GiftsSection from "@/components/features/banner/gifts-section";
import AboutSection from "./_components/about-section";
import CompaniesSection from "./_components/companies-section";
import GallerySection from "./_components/gallery-section";
import ServiceFeatures from "@/components/features/features/feature";
import Occasions from "@/components/features/occasions/occasions";
import { getServerSession } from "next-auth";

export default function page() {
  return (
    <div className="container">
      {/* Gifts Section */}
      <GiftsSection />

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
