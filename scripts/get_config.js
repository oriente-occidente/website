const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');
const KEY = process.env.NEXT_PUBLIC_DATO_API_TOKEN;
const PROJECT_NAME = process.env.PROJECT_NAME;
const ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? '';

const doQuery = async (q, v) => {
  const url = `https://graphql.datocms.com${ENV ? '/environments/' + ENV : ''}`;

  try {
    const response = await axios({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${KEY}`,
      },
      data: { query: q, variables: v },
    });
    console.log('status', response?.status);
    if (response?.data?.errors) {
      console.log('response ERROR', response?.data?.errors);
      throw response.data.errors;
    }
    return response?.data?.data;
  } catch (error) {
    console.log('QUERY ERROR', error, 'on query', q);
    throw error;
  }
};

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
