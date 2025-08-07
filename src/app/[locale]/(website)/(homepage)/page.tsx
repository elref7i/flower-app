import GiftsSection from "@/components/features/banner/gifts-section";
import AboutSection from "./_components/about-section";
import CompaniesSection from "./_components/companies-section";
import GallerySection from "./_components/gallery-section";
import ServiceFeatures from "@/components/features/features/feature";
import Occasions from "@/components/features/occasions/occasions";
import MostPopular from "./_components/mostpopular/most-popular";
import BestSelling from "./_components/bestselling";
import { fetchOccasions } from "@/lib/api/occasions.api";
import { fetchPopularProducts } from "@/lib/api/products.api";
import TestimonialSection from "./_components/testmonials/testmonial-section";
import  ChartSection  from "@/components/features/charts/chart-section";

export default async function page({ searchParams }: { searchParams: { occasion?: string } }) {
  // Variables
  const occasions = await fetchOccasions();
  const currentOccasionId = searchParams.occasion || null;
  const popularProducts = await fetchPopularProducts(currentOccasionId || undefined);

  return (
    <div>
      <div className="container">
        <ChartSection/>
        {/* Gifts Section */}
        <GiftsSection />

        {/* Occasions Section */}
        <Occasions />

        {/* Service Features */}
        <ServiceFeatures />
        {/* Best Selling */}
        <BestSelling />

        {/* <ModeToggle /> */}
        <MostPopular
          occasions={occasions}
          products={popularProducts}
          currentSelectedOccasion={currentOccasionId}
        />
        {/* About Section */}
        <AboutSection />

        {/* Gallery Section */}
        <GallerySection />
      </div>
      {/* Testimonials */}
      <TestimonialSection />

      {/* Companies Section */}
      <CompaniesSection />
    </div>
  );
}
