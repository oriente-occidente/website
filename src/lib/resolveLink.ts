import type { ResolveLinkProps } from "@/types";
import config from "@/data/config";

export function t(section: string, locale: string) {
  if (locale === config.defaultLocale) return section;
  const key = (config.translations as any)[section];
  return key?.[locale] ?? section;
}

export default function resolveLink({
  slug,
  _modelApiKey,
  section,
  locale,
}: ResolveLinkProps): string {
  //language prefix
  const lp = locale === config.defaultLocale ? "" : `/${locale}`;
  //page section?
  const s = section?.toLowerCase() || "";
  //localized section, used for pages section
  const ls = s ? t(`${s}`, locale) : "";
  if (!_modelApiKey) {
    return "#";
  }
  switch (_modelApiKey) {
    case "page":
      if (!s || s === "-") {
        return `${lp}/${slug}`;
      } else if (s === "festival") {
        return `${lp}/${ls}/p/${slug}`;
      } else {
        return `${lp}/${ls}/${slug}`;
      }
    case "festival_edition":
      return `${lp}/${t(`festival`, locale)}/${slug}`;
    case "education_page":
      return `${lp}/studio/${t(`formazione`, locale)}/`;
    case "workshop_category":
      return `${lp}/studio/${t(`formazione`, locale)}/c/${slug}`;
    case "workshop":
      return `${lp}/studio/${t(`formazione`, locale)}/${slug}`;
    case "artistic_residencies_index":
      return `${lp}/studio/${t(`residenze-artistiche`, locale)}/`;
    case "artistic_residecy":
      return `${lp}/studio/${t(`artisti`, locale)}/${slug}`;
    case "artists_index":
      return `${lp}/studio/${t(`artisti-associati`, locale)}/`;
    case "artist":
      return `${lp}/studio/${t(`artisti`, locale)}/${slug}`;
    case "company":
      return `${lp}/studio/${t(`compagnie`, locale)}/${slug}`;
    case "events_index":
      return `${lp}/people/${t(`eventi`, locale)}/`;
    case "event":
      return `${lp}/people/${t(`eventi`, locale)}/${slug}`;
    case "projects_index":
      return `${lp}/people/${t(`progetti`, locale)}/`;
    case "project":
      return `${lp}/people/${t(`progetti`, locale)}/${slug}`;
    case "networks_index":
      return `${lp}/people/${t(`reti`, locale)}/`;
    case "network":
      return `${lp}/people/${t(`reti`, locale)}/${slug}`;
    case "news_index":
      return `${lp}/${t(`news`, locale)}/`;
    case "news":
      return `${lp}/${t(`news`, locale)}/${slug}`;
    case "videos_index":
      return `${lp}/${t(`video`, locale)}/`;
    case "audios_index":
      return `${lp}/${t(`audio`, locale)}/`;
    case "publication":
      return `${lp}/${t(`pubblicazioni`, locale)}/${slug}`;
    case "media_photo":
      return `${lp}/${t(`foto`, locale)}/${slug}`;
    case "media_video":
      return `${lp}/${t(`video`, locale)}/${slug}`;
    case "media_document":
      return `${lp}/${t(`doc`, locale)}/${slug}`;
    case "media_audio":
      return `${lp}/${t(`audio`, locale)}/${slug}`;
    case "artists_companies_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`artisti-compagnie`, locale)}`;
    case "activities_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`attivita`, locale)}`;
    case "festival_editions_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`festival`, locale)}`;
    case "media_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`media`, locale)}`;
    case "news_publications_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(
        `news-pubblicazioni`,
        locale
      )}`;
    case "partners_networks_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`partner-reti`, locale)}`;
    case "years_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`timeline`, locale)}`;
    default:
      return `${lp}/${slug ? slug : ""}`;
  }
}
