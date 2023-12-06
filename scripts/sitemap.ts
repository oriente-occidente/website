import { generatePaths } from "./generatePaths";

(async () => {
  const locales = await generatePaths();
  console.log("locales", locales);
})();
