import { NextIntlClientProvider, useLocale, useMessages, useNow, useTimeZone } from "next-intl";
import NextAuthProvider from "./components/next-auth-providers";
import ReactQueryProvider from "./components/react-query-provider";
import { ThemeProvider } from "./components/theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  const locale = useLocale();
  const now = useNow();
  const timeZone = useTimeZone();
  const messages = useMessages();

  return (
    // TODO: Add NextAuth and NextIntl providers here.
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ReactQueryProvider>
        <NextIntlClientProvider locale={locale} now={now} timeZone={timeZone} messages={messages}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </NextIntlClientProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
