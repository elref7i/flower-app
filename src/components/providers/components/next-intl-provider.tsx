"use client";

import { NextIntlClientProvider, useLocale, useMessages, useNow, useTimeZone } from "next-intl";

export default function NextIntlProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const now = useNow();
  const timeZone = useTimeZone();
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} now={now} timeZone={timeZone} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
