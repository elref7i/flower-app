import ContactHero from "./_components/contact-hero";
import ContactInfoCards from "./_components/contact-info-cards";
import ContactFormSection from "./_components/contact-form-section";

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pb-16">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
    </main>
  );
}