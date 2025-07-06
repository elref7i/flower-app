import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // Numbering system is used to format numbers in different page languages..
  const numberingSystem = locale === "ar" ? "arab" : "latn";
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    formats: {
      number: {
        currency: {
          style: "currency",
          currency: "EGP",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          currencyDisplay: "symbol",
          numberingSystem,
        },
        percentage: {
          style: "percent",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          numberingSystem,
        },
        plain: {
          style: "decimal",
          useGrouping: false,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          numberingSystem: locale === "ar" ? "arab" : "laten",
        },
      },
      dateTime: {
        "date-base-hours": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        },
        short: {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",

          numberingSystem,
        },
        long: {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
          numberingSystem,
        },
      },
    },
  };
});
