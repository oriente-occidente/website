import type { ResolveLinkProps } from "@/types";
import translate from "@/lib/locales";
import config from "@/data/config";

export default function resolveLink({
  slug,
  apiKey,
  section,
  locale,
}: ResolveLinkProps): string {
  const s = section?.toLowerCase() || "-";
  const localizedSection = translate(`section.${s}`, locale);
  const localePrefix = locale === config.defaultLocale ? "" : `/${locale}/`;
  const localizedModel = translate(`model.${s}`, locale);
  switch (apiKey) {
    case "page":
      if (s === "-") {
        return `${localePrefix}/${slug}`;
      } else {
        return `${localePrefix}/${localizedSection}/${slug}`;
      }
    default:
      if (slug) return `${localePrefix}/${localizedModel}/${slug}`;
      return "/";
  }
}
