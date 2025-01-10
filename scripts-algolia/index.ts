import activitiesSearch from "./activitiesSearch";
import { listIndexes } from "./algolia-utils";
import artistsSearch from "./artistsSearch";
import festivalSearch from "./festivalSearch";
import mediaSearch from "./mediaSearch";
import networkSearch from "./networkSearch";
import newsSearch from "./newsSearch";
import { promises as fs } from "fs";
import path from "path";

const FOLDER = path.resolve("./src/data");

(async () => {
  const start = Date.now();
  const indexes = await listIndexes();
  const defaultLocale = "it";
  const locales = ["it", "en"];
  console.info("INDEXES", indexes);

  // MEDIA SEARCH
  const mediaCounter = await mediaSearch(defaultLocale, locales, indexes);

  // artists SEARCH
  const artistsCounter = await artistsSearch(defaultLocale, locales, indexes);

  // NEWS SEARCH
  const newsCounter = await newsSearch(defaultLocale, locales, indexes);

  // ACTIVITIES SEARCH
  const activitiesCounter = await activitiesSearch(
    defaultLocale,
    locales,
    indexes
  );

  // FESTIVAL SEARCH
  const festivalCounter = await festivalSearch(defaultLocale, locales, indexes);

  // NETWORK SEARCH
  const networkCouner = await networkSearch(defaultLocale, locales, indexes);

  const timelineCounters = {
    media: mediaCounter,
    artists: artistsCounter,
    network: networkCouner,
    news: newsCounter,
    activities: activitiesCounter,
    festival: festivalCounter,
  };
  console.info("Write timeline counters Json");
  await fs.writeFile(
    `${FOLDER}/timeline_counters.json`,
    JSON.stringify(timelineCounters, null, 2)
  );

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
