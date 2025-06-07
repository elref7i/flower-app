import ReactQueryProvider from "./components/react-query-provider";
import { ThemeProvider } from "./components/theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    // TODO: Add NextAuth and NextIntl providers here.
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
