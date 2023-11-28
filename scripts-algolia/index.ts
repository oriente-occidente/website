import search from "./sampleSearch";
import { listIndexes } from "./algolia-utils";

(async () => {
  const start = Date.now();
  const indexes = await listIndexes();
  console.info("INDEXES", indexes);

  // VIDEO SEARCH
  await search("it", indexes);
  await search("en", indexes);

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
