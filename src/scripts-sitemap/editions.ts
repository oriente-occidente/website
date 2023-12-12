import axios from "axios";
import path from "path";
import { promises as fs } from "fs";

const FOLDER = path.resolve("./src/data");

async function getData() {
  const response = await axios.get(
    `https://orienteoccidente.progettiarchimede.it/api/archivio/ListeEdizioni/`
  );
  if (response.data) {
    await fs.writeFile(
      `${FOLDER}/edizioni-passate.json`,
      JSON.stringify(response.data, null, 2)
    );
  }
}

(async () => {
  const start = Date.now();
  await getData();
  const elapsed = (Date.now() - start) / 1000;
  console.info("GOT API in", elapsed);
})();
