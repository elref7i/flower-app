import LoginDialog from "@/components/features/auth/auth-dialog";
import ServiceFeatures from '../../components/features/features/feature';
import Banner from '@/components/features/banner/banner';
import Occasions from "../../components/features/occasions/occasions";

export default async function HomePage() {
  return (<>
    <div className="px-20 py-10">
      <main className="space-y-6">
        <Banner />
        <Occasions />
        <ServiceFeatures />
        <LoginDialog />
      </main>
    </div>
  </>
  );
}
