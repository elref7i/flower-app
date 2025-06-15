import ReactQueryProvider from "./components/react-query-provider";
import { ThemeProvider } from "./components/theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    // Add Next auth and next intel provider and delete this comment eng Ehab
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
