import { recurseQuery, fetchData } from "../scripts-algolia/dato-utils";
import translate from "../src/lib/locales/index";

// QUERIES
// Locales
const localeQuery: string = `query localeQuery {
    _site {
      locales
    }
  }`;
// Main menu
const menuQuery: string = `query menuQuery($locale: SiteLocale) {
   allMenuItems(locale: $locale, filter: {parent: {exists: "false"}}) {
     slug
     children {
       slug
       link {
         ... on PageRecord {
           id
         }
       }
       children {
         slug
       }
     }
   }
 }`;

// Workshops cat
const workshopsCatQuery: string = `query workshopsCat($locale: SiteLocale) {
   allWorkshopCategories(locale: $locale) {
     slug
   }
 }`;

export async function generatePaths() {
  let paths = ["/", "/404", "/500"];
  const localesData = await fetchData(localeQuery);
  for (const locale of localesData._site?.locales || []) {
    let prefix: string = "/";
    if (locale != "it") {
      prefix = `/${locale}/`;
      paths.push(`/${locale}`);
    }

    //  MAIN NAVIGATION PATHS
    const mainMenu = await fetchData(menuQuery, { locale });
    let path: string = "";
    for (const menu of mainMenu.allMenuItems || []) {
      if (menu.slug) {
        path = `${prefix}${menu.slug}`;
        paths.push(path);
      }
      for (const children of menu.children || []) {
        if (children.slug) {
          if (menu.slug == "festival" && children.link.id) {
            path = `${prefix}${menu.slug}/p/${children.slug}`;
          } else {
            path = `${prefix}${menu.slug}/${children.slug}`;
          }
          paths.push(path);
        }
      }
    }

    //  CATEGORIE FORMAZIONE
    const workshopsCat = await fetchData(workshopsCatQuery, { locale });
    //  console.log("t", translate(`formazione`, "en"));
  }

  return paths;
}
