import mediaSearch from "./mediaSearch";
import { listIndexes } from "./algolia-utils";

(async () => {
  const start = Date.now();
  const indexes = await listIndexes();
  console.info("INDEXES", indexes);

  // VIDEO SEARCH
  await mediaSearch("it", indexes);
  await mediaSearch("en", indexes);

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
