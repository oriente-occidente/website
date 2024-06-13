import type { ResolveLinkProps } from "@/types";
import config from "@/data/config";

export function t(section: string, locale: string) {
  if (locale === config.defaultLocale) return section;
  const key = (config.translations as any)[section];
  return key?.[locale] ?? section;
}

function getArchiveYear(archiveType: string = "", year: string = "") {
  let path = "";
  if (year.length > 0) {
    path = `?${archiveType}%5BrefinementList%5D%5Byears%5D%5B0%5D=${year}`;
  }
  return path;
}

export default function resolveLink({
  id,
  slug,
  slugs,
  _modelApiKey,
  section,
  locale,
  year,
  archiveType,
  switcher,
  isFestival,
  isBreadcrumbs,
}: ResolveLinkProps): string {
  //language prefix
  let lp = locale === config.defaultLocale ? "" : `/${locale}`;
  //page section?
  const s = section?.toLowerCase() || "";
  //localized section, used for pages section
  const ls = s ? t(`${s}`, locale) : "";
  //localized lslug
  let lslug = slug;
  // check redirect
  let redirect = false;
  if (slugs) {
    const item = slugs.find((e: any) => e.locale == locale);
    lslug = item?.value || slug;

    if (switcher) {
      // redirect a home
      redirect = !item?.value;
    }
  }
  if (!_modelApiKey) {
    return "#";
  }

  switch (_modelApiKey) {
    case "page":
      if (redirect) {
        return `${lp}`;
      } else if (!s || s === "-") {
        return `${lp}/${lslug}`;
      } else if (s === "festival") {
        return `${lp}/${ls}/p/${lslug}`;
      } else {
        return `${lp}/${ls}/${lslug}`;
      }
    case "festival_edition":
      return `${lp}/${t(`festival`, locale)}/${lslug}`;
    case "education_page":
      return `${lp}/studio/${t(`formazione`, locale)}/`;
    case "workshop_category":
      return `${lp}/studio/${t(`formazione`, locale)}/c/${lslug}`;
    case "workshop":
      if (redirect) {
        return `${lp}`;
      } else {
        return `${lp}/studio/${t(`formazione`, locale)}/${lslug}`;
      }
    case "artistic_residencies_index":
      return `${lp}/studio/${t(`residenze-artistiche`, locale)}/`;
    case "artistic_residecy":
      return `${lp}/studio/${t(`artisti`, locale)}/${slug}`;
    case "artists_index":
      return `${lp}/studio/${t(`artisti-associati`, locale)}/`;
    case "artist":
      return `${lp}/studio/${t(`artisti`, locale)}/${slug}`;
    case "company":
      return `${lp}/studio/${t(`compagnie`, locale)}/${lslug}`;
    case "events_index":
      return `${lp}/people/${t(`eventi`, locale)}/`;
    case "event":
      if (redirect) {
        return `${lp}`;
      } else if (isFestival && isBreadcrumbs) {
        return `${lp}/festival/${t(`programma`, locale)}/${lslug}`;
      } else {
        return `${lp}/people/${t(`eventi`, locale)}/${lslug}`;
      }
    case "projects_index":
      return `${lp}/people/${t(`progetti`, locale)}/`;
    case "project":
      return `${lp}/people/${t(`progetti`, locale)}/${lslug}`;
    case "networks_index":
      return `${lp}/people/${t(`reti`, locale)}/`;
    case "network":
      return `${lp}/people/${t(`reti`, locale)}/${lslug}`;
    case "news_index":
      return `${lp}/${t(`news`, locale)}/`;
    case "news":
      if (redirect) {
        return `${lp}`;
      } else {
        return `${lp}/${t(`news`, locale)}/${lslug}`;
      }
    case "videos_index":
      return `${lp}/${t(`video`, locale)}/`;
    case "audios_index":
      return `${lp}/${t(`audio`, locale)}/`;
    case "publication":
      return `${lp}/${t(`pubblicazioni`, locale)}/${lslug}`;
    case "media_photo":
      return `${lp}/${t(`foto`, locale)}/${id}`;
    case "media_video":
      return `${lp}/${t(`video`, locale)}/${lslug}`;
    case "media_document":
      return `${lp}/${t(`doc`, locale)}/${lslug}`;
    case "media_audio":
      return `${lp}/${t(`audio`, locale)}/${lslug}`;
    case "artists_companies_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(
        `artisti-compagnie`,
        locale
      )}${getArchiveYear(archiveType, year)}`;
    case "activities_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`attivita`, locale)}${getArchiveYear(
        archiveType,
        year
      )}`;
    case "festival_editions_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`festival`, locale)}${getArchiveYear(
        archiveType,
        year
      )}`;
    case "media_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`media`, locale)}${getArchiveYear(
        archiveType,
        year
      )}`;
    case "news_publications_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(
        `news-pubblicazioni`,
        locale
      )}${getArchiveYear(archiveType, year)}`;
    case "partners_networks_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`partner-reti`, locale)}${getArchiveYear(
        archiveType,
        year
      )}`;
    case "years_archive":
      return `${lp}/${t(`archivio`, locale)}/${t(`timeline`, locale)}`;
    default:
      return `${lp}/${lslug ? lslug : ""}`;
  }
}
