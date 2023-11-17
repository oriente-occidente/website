// import videoSearch from "./video-search";
import { listIndexes } from "./algolia-utils";

const LANGS = ["it", "en"];
(async () => {
  const start = Date.now();
  const indexes = await listIndexes();
  console.info("INDEXES", indexes);

  // VIDEO SEARCH
  // await videoSearch(LANGS[0], indexes);
  // await videoSearch(LANGS[1], indexes);

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
