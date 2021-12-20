
const fs = require('fs');
const _ = require('lodash');



const getConfig = async () => {
  const q = `
  query config {
    configuration {
      theme
      logo {
        url
      }
      country {
        zoneCode
        title
      }
      locale {
        title
        code
      }
      availabilityShowThreshold
      maxPromptDeliveryHours
      showFees
      cssOverrides
      gtmCode
    }
    locales: allLocales {
      code
      title
    }
    snippets: allInjectSnippets{
      id
      friendlyName
      snippetType
      body
    }
  }
    `;
  return doQuery(q);
};

const stylePath = 'stylesheets/_style.sass';
const outPath = 'data/config.json';
const updateConfig = async () => {
  const data = await getConfig();
  // console.log(data);
  if (data) {
    const json = JSON.stringify(
      { projectName: PROJECT_NAME, ...data },
      null,
      2
    );
    fs.writeFileSync(outPath, json);
    fs.writeFileSync(
      stylePath,
      `@import '${data.configuration.theme}/application'`
    );
    console.log('Config Updated');
  }
};

// (async () => {
//   await updateConfig();
// })();

module.exports = updateConfig;
