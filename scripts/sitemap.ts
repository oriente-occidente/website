import { generatePaths } from "./generatePaths";

(async () => {
  const paths: string[] = await generatePaths();
  console.log("locales", paths);
})();
