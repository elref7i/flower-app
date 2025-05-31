import NextAuthProvider from "./components/next-auth-providers";
import ReactQueryProvider from "./components/react-query-provider";
import { ThemeProvider } from "./components/theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactQueryProvider>
        <NextAuthProvider>{children}</NextAuthProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
