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
import OccasionsSection from "@/components/features/banner/occasions-section";

interface HomePageProps {
  searchParams: {
    occasion?: string;
  };
}

// Search Params in parent
export default async function page({ searchParams }: HomePageProps) {
  // Variables
  const occasions = await fetchOccasions();
  const currentOccasionId = searchParams.occasion || null;

  const popularProducts = await fetchPopularProducts(currentOccasionId || undefined);

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className=" section-padding">
        {/* Gifts Section */}
        <section className="section-margin">
          <GiftsSection />
        </section>

        {/* Occasions Section */}

        <OccasionsSection />
        {/* <section className="section-margin ">
          <Occasions occasions={occasions} />
        </section> */}


        {/* Service Features */}
        <section className="section-margin">
          <ServiceFeatures />
        </section>

        {/* Best Selling */}
        <section className="section-margin">
          <BestSelling />
        </section>

        {/* Most Popular */}
        <section className="section-margin">
          <MostPopular
            occasions={occasions}
            products={popularProducts}
            currentSelectedOccasion={currentOccasionId}
          />
        </section>

        {/* About Section */}
        <section className="section-margin">
          <AboutSection />
        </section>

        {/* Gallery Section */}
        <section className="section-margin">
          <GallerySection />
        </section>
      </main>

      {/* Testimonials */}
      <section className="section-margin">
        <TestimonialSection />
      </section>

      {/* Companies Section */}
      <section className="section-margin">
        <CompaniesSection />
      </section>
    </div>
  );
}
