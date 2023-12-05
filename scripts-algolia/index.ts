import { listIndexes } from "./algolia-utils";
import mediaSearch from "./mediaSearch";
import newsSearch from "./newsSearch";

(async () => {
  const start = Date.now();
  const indexes = await listIndexes();
  console.info("INDEXES", indexes);

  // VIDEO SEARCH
  await mediaSearch("it", indexes);
  await mediaSearch("en", indexes);
  // NEWS SEARCH
  await newsSearch("it", indexes);
  await newsSearch("en", indexes);

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
