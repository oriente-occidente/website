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
  console.info("INDEXES", indexes);

  // artists SEARCH
  await artistsSearch("it", indexes);
  await artistsSearch("en", indexes);

  // MEDIA SEARCH
  await mediaSearch("it", indexes);
  await mediaSearch("en", indexes);

  // NEWS SEARCH
  await newsSearch("it", indexes);
  await newsSearch("en", indexes);

  // ACTIVITIES SEARCH
  await activitiesSearch("it", indexes);
  await activitiesSearch("en", indexes);

  // FESTIVAL SEARCH
  // await festivalSearch("it", indexes);
  // await festivalSearch("en", indexes);

  // network SEARCH
  await networkSearch("it", indexes);
  await networkSearch("en", indexes);

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
