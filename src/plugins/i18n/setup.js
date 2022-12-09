import { datetimeFormats } from "@/plugins/i18n/datetimeFormats.js";
import { numberFormats } from "@/plugins/i18n/numberFormats.js";

export const SUPPORT_LOCALES = ["en", "de", "fr", "it"];
export const FALLBACK_LOCALE = ["en"];

import { createI18n } from "vue-i18n";

export function setupI18n() {
  const options = {
    locale: getUserPreferredLocales(SUPPORT_LOCALES, FALLBACK_LOCALE),
    legacy: false,
    datetimeFormats,
    numberFormats,
  };
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

function getUserPreferredLocales(supported, fallback) {
  const UserPreferredLocales = [
    ...new Set(
      window.navigator.languages.map((language) => language.split(/-|_/)[0])
    ),
  ];
  const supportedLocales = new Set(supported);

  for (const preferredLocale of UserPreferredLocales) {
    if (supportedLocales.has(preferredLocale)) {
      return preferredLocale;
    }
  }

  return fallback;
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector("html").setAttribute("lang", locale);
}

const i18n = setupI18n();

export default i18n;
