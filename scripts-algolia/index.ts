import activitiesSearch from "./activitiesSearch";
import { listIndexes } from "./algolia-utils";
import artistsSearch from "./artistsSearch";
import festivalSearch from "./festivalSearch";
import mediaSearch from "./mediaSearch";
import networkSearch from "./networkSearch";
import newsSearch from "./newsSearch";

(async () => {
  const start = Date.now();
  const indexes = await listIndexes();
  const defaultLocale = "it";
  const locales = ["it", "en"];
  console.info("INDEXES", indexes);

  // MEDIA SEARCH
  await mediaSearch(defaultLocale, locales, indexes);

  // artists SEARCH
  await artistsSearch(defaultLocale, locales, indexes);

  // NEWS SEARCH
  await newsSearch(defaultLocale, locales, indexes);

  // ACTIVITIES SEARCH
  await activitiesSearch(defaultLocale, locales, indexes);

  // FESTIVAL SEARCH
  await festivalSearch(defaultLocale, locales, indexes);

  // NETWORK SEARCH
  await networkSearch(defaultLocale, locales, indexes);

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
