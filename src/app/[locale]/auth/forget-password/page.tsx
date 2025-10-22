import { AuthProvider } from "@/lib/context/auth-context";
import RenderSteps from "./_components/steppages";

export default function page() {
  return (
    <AuthProvider>
      <RenderSteps />
    </AuthProvider>
  );
}
