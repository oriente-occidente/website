import type { ResolveLinkProps } from "@/types";
import config from "@/data/config";

export function t(section: string, locale: string) {
  if (locale === config.defaultLocale) return section;
  const key = (config.translations as any)[section];
  return key?.[locale] ?? section;
}

export default function resolveLink({
  slug,
  apiKey,
  section,
  locale,
}: ResolveLinkProps): string {
  //language prefix
  const lp = locale === config.defaultLocale ? "" : `/${locale}`;
  //page section?
  const s = section?.toLowerCase() || "";
  //localized section, used for pages section
  const ls = s ? t(`${s}`, locale) : "";

  switch (apiKey) {
    case "page":
      if (!s) {
        return `${lp}/${slug}`;
      } else if (s === "festival") {
        return `${lp}/${ls}/p/${slug}`;
      } else {
        return `${lp}/${ls}/${slug}`;
      }
    case "festival_edition":
      return `${lp}/${t(`festival`, locale)}/${slug}`;
    case "education_page":
      return `${lp}/${t(`formazione`, locale)}/`;
    case "workshops_category":
      return `${lp}/${t(`formazione`, locale)}/c/${slug}`;
    case "workshop":
      return `${lp}/${t(`formazione`, locale)}/${slug}`;
    case "artistic_residencies_index":
      return `${lp}/${t(`residenze-artistiche`, locale)}/`;
    case "artistic_residecy":
      return `${lp}/${t(`residenze-artistiche`, locale)}/${slug}`;
    case "artists_index":
      return `${lp}/${t(`artisti-associati`, locale)}/`;
    case "artist":
      return `${lp}/${t(`artisti-associati`, locale)}/${slug}`;
    case "company":
      return `${lp}/${t(`compagnie`, locale)}/${slug}`;
    case "events_index":
      return `${lp}/${t(`eventi`, locale)}/`;
    case "event":
      return `${lp}/${t(`eventi`, locale)}/${slug}`;
    case "projects_index":
      return `${lp}/${t(`progetti`, locale)}/`;
    case "project":
      return `${lp}/${t(`progetti`, locale)}/${slug}`;
    case "networks_index":
      return `${lp}/${t(`reti`, locale)}/`;
    case "network":
      return `${lp}/${t(`reti`, locale)}/${slug}`;
    case "news_index":
      return `${lp}/${t(`news`, locale)}/`;
    case "news":
      return `${lp}/${t(`news`, locale)}/${slug}`;
    case "videos_index":
      return `${lp}/${t(`video`, locale)}/`;
    case "audios_index":
      return `${lp}/${t(`audio`, locale)}/`;
    case "publication":
      return `${lp}/${t(`pubblicazioni`, locale)}/`;
    case "photo":
      return `${lp}/${t(`foto`, locale)}/${slug}`;
    case "video":
      return `${lp}/${t(`video`, locale)}/${slug}`;
    case "document":
      return `${lp}/${t(`doc`, locale)}/${slug}`;
    case "audio":
      return `${lp}/${t(`audio`, locale)}/${slug}`;
    case "files_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`files`, locale)}`;
    case "festival_editions_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`files`, locale)}`;
    case "artist_companies_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`files`, locale)}`;
    case "activities_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`files`, locale)}`;
    case "news-publications_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`files`, locale)}`;
    case "partners-networks_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`files`, locale)}`;
    case "years_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`timeline`, locale)}`;
    default:
      return "/";
  }
}
