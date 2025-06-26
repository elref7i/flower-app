import { AuthProvider } from "@/lib/context/auth-context";

export default function ForgotPasswordLayout({ chidren }: { chidren: React.ReactNode }) {
  return <AuthProvider>{chidren}</AuthProvider>;
}
