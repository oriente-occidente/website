import { fetchData } from "../../scripts-algolia/dato-utils";
import { promises as fs } from "fs";
import path from "path";

const FOLDER = path.resolve("./src");

const query: string = `query indexesReference {
  news: newsIndex {
    apiKey: _modelApiKey
  }
  network: networksIndex {
  apiKey:_modelApiKey
  }
  artistic_residecy: artisticResidenciesIndex {
  apiKey: _modelApiKey
  }
  artist: artistsIndex {
  apiKey:_modelApiKey
  }
  media_audio: audiosIndex {
  apiKey: _modelApiKey
  }
  event: eventsIndex {
  apiKey:_modelApiKey
  }
  project: projectsIndex {
  apiKey:_modelApiKey
  }
  media_video: videosIndex {
  apiKey: _modelApiKey
  }
  workshop_category: educationPage {
  apiKey: _modelApiKey
  }
}`;

async function generateIndexesReference() {
  return await fetchData(query);
}

(async () => {
  const start = Date.now();
  const indexes = await generateIndexesReference();
  const content = JSON.stringify(indexes, null, 2);
  await fs.writeFile(`${FOLDER}/data/indexesReference.json`, content, "utf-8");
  const elapsed = (Date.now() - start) / 1000;
  console.info("DONE GENERATE SITEMAP in", elapsed);
})();
