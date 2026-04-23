import AboutHero from "./_components/about-hero";
import AboutContent from "./_components/about-content";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pb-16">
      <AboutHero />
      <AboutContent />
    </main>
  );
}