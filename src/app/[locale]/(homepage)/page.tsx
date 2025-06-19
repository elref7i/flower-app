import AboutSection from "./_components/about-section";
import CompaniesSection from "./_components/companies-section";
import GallerySection from "./_components/gallery-section";

export default function page() {
  return (
    <div className="container">
      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />
      {/* Companies Section */}
      <CompaniesSection />
    </div>
  );
}
