#!/usr/bin/env zx
const { promises: fsPromises } = require("fs");
const ROOT_FOLDER = "./src/app";
const BASE_FOLDER = "./src/app/(base)";

let labels = null;
async function getConfig() {
  const json = await fs.readFile("./src/data/config.json", "utf8");
  labels = JSON.parse(json);
}
await getConfig();
const { translations, defaultLocale, locales } = labels;
const langs = locales.filter((l) => l != defaultLocale);

//Replace locale in files
async function replaceInFile(sourceFile, destFile, locale, defaultLocale) {
  try {
    const contents = await fsPromises.readFile(sourceFile, "utf-8");
    const re = new RegExp(`"${defaultLocale}"`, "g");
    let replaced = contents.replace(re, `'${locale}'`);
    await fsPromises.writeFile(destFile, replaced);
  } catch (err) {
    console.error(err);
  }
}
//UTILS
function getTranslation(source, lang) {
  const chunks = source.split("/");
  const file = chunks.slice(-1)[0];
  const folders = chunks.slice(0, chunks.length - 1);

  const translatedPath = folders.reduce((str, name) => {
    const translation = translations[name] ? translations[name][lang] : name;
    return (str += translation + "/");
  }, "");

  const fileName = file.replace(".tsx", "");
  const translatedFile = translations[fileName]
    ? translations[fileName][lang]
    : fileName;
  return { folder: translatedPath, file: `${translatedFile}.tsx`, source };
}

//START
// console.info(chalk.blue("Hello routes generator!"));
// let lang = await question(
//   `What language do you want generate? ${langs.join("|")} : `
// );
// if (!langs.includes(lang)) {
//   console.info(chalk.red("Language not found!"));
//   process.exit(1);
// }

//MOVE TO PAGES DIRECTORY

await cd(BASE_FOLDER);
const pwd = await $`pwd`;
await $`echo Current folder is ${pwd}.`;

within(async () => {
  for (let lang of langs) {
    console.info(
      chalk.blue("GENERATING ROUTES FOR "),
      chalk.green(lang.toUpperCase())
    );

    console.info(chalk.blue("Removing previous " + lang + " folder..."));
    try {
      await $`rm -fr ${lang}`;
    } catch (error) {
      console.info(error);
    }

    //GET ROUTE FILES of root
    let allfiles = await glob([
      "**/*",
      // "!**/api",
      // `!${lang}/*`,
      // "!layout.tsx",
      // "!not-found.tsx",
      // "!error.tsx",
    ]);
    // console.info('allfiles', allfiles);
    const destinations = allfiles.map((f) => getTranslation(f, lang));
    console.info("destinations", destinations);

    try {
      //CREATE LANG FOLDER
      console.info(chalk.blue("Generating new " + lang + " folder..."));
      try {
        await $`mkdir ${lang}`;
      } catch (error) {
        //ignore
      }

      //CREATE TRANSLATED FOLDERS
      console.info(chalk.blue("Creating translated folders..."));
      const folderPromises = destinations.map(({ folder }) => {
        return $`mkdir -p ${lang}/${folder}`;
      });
      await Promise.all(folderPromises);

      //CREATE FILES
      console.info(chalk.blue("Generating page files..."));
      const generateFiles = destinations.map((destination) => {
        const { folder, file, source } = destination;
        const dest = `${lang}/${folder}/${file}`;

        return replaceInFile(source, dest, lang, defaultLocale);

        // await $`touch ${dest}`;
        // await fs.copy(source, dest);
        // return fs.writeFile(dest, templateStr);
      });
      await Promise.all(generateFiles);
    } catch (error) {
      console.info(error);
    }
    console.info(chalk.blue("Done!"));
  }
  console.info(chalk.blue("The End."));
});
