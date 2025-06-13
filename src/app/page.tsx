import { Input } from "@/components/ui/input";
import ServiceFeatures from './../components/features/features/feature';
import Banner from './../components/features/banner/banner';
import Occasions from "@/components/features/occasions/occasions";

export default function Home() {
  return (
    <div className="p-20">
      <main className="space-y-4">
        <Banner/>
        <Occasions/>
        <ServiceFeatures />
      </main>
    </div>
  );
}
