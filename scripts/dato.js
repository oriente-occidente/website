const axios = require('axios');
const { SiteClient } = require('datocms-client');
const _ = require('lodash');

const ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? '';
const API_KEY = process.env.NEXT_PUBLIC_DATO_API_KEY;
const options = ENV ? { environment: ENV } : null;
const client = new SiteClient(API_KEY, options);

const sleep = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

async function getItemTypesByApiKey() {
  return (await client.itemTypes.all()).reduce(
    (acc, it) => ({ ...acc, [it.apiKey]: it }),
    {}
  );
}

//GRAPHQL
const doQuery = async (q, v) => {
  let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };
  if (ENV) {
    headers['X-Environment'] = ENV;
  }
  console.log('doQuery', 'ENV', ENV);
  try {
    const response = await axios({
      url: `https://graphql.datocms.com`,
      method: 'POST',
      headers,
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

// const getGroupedVariants = (code) => {
//   const pattern = `${code}_*`;
//   const q = `query variantGroup($code: String!) {
//   allProductVariants(filter: {skuCode: {matches: {pattern: $code}}}, orderBy: skuCode_ASC) {
//     id
//     skuCode
//   }
// }
// `;
//   return doQuery(q, {
//     code: pattern,
//   });
// };

//RECORDS

async function createRecordWithDelay(data) {
  try {
    await sleep(2000);
    await client.items.create(data);
    // console.log("SUCCESS");
  } catch (error) {
    console.log('ERROR');
    console.log(error);
    // throw new Error(error);
  }
}

async function createRecord(data) {
  try {
    const record = await client.items.create(data);
    // console.log("SUCCESS");
    // console.log(record);
    return record;
  } catch (error) {
    console.log('ERROR');
    console.log(error);
    // throw new Error(error);
  }
}

const allRecords = (type = 'product') => {
  return client.items.all(
    {
      filter: {
        type,
      },
    },
    {
      allPages: true,
    }
  );
};

const getRecordById = (itemId) => {
  client.items
    .find(itemId, {
      nested: 'true',
      version: 'published',
    })
    .then((item) => {
      console.log(item);
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

const findRecord = async (type, fields) => {
  const results = await client.items.all({
    filter: {
      type,
    },
    fields,
  });
  return results && results.length > 0 ? results[0] : null;
};

const findRecords = async (type, fields) => {
  const search = {
    filter: {
      type,
    },
    fields,
  };
  console.log(search);
  const results = await client.items.all(search);
  return results;
};

// FIELDS
const createField = (modelIdOrApiKey, fieldConfig) => {
  return client.fields
    .create(modelIdOrApiKey, fieldConfig)
    .then((field) => {
      console.log(field);
      return field;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

const listModelFields = (modelIdOrApiKey) => {
  return client.fields
    .all(modelIdOrApiKey)
    .then((fields) => {
      // fields.forEach((field) => {
      //   console.log(field);
      // });
      return fields;
    })
    .catch((error) => {
      console.error(error);
    });
};

//MODELS

const createModel = (modelData) => {
  return client.itemTypes
    .create(modelData)
    .then((itemType) => {
      console.log('SUCCESS');
      console.log(itemType);
      return itemType;
    })
    .catch((error) => {
      console.log('ERROR');
      console.error(error);
      return null;
    });
};

const getModelId = (apiKey = 'product') => {
  return client.itemTypes
    .find(apiKey)
    .then((model) => {
      console.log(model);
      return model?.id;
    })
    .catch((error) => {
      console.error(error);
    });
};

const getModel = (apiKey = 'product') => {
  return client.itemTypes
    .find(apiKey)
    .then((model) => {
      // console.log(model);
      return model;
    })
    .catch((error) => {
      console.error(error);
    });
};

//destroy

const destroyRecord = async (itemId) => {
  const response = await client.items.destroy(itemId);
  // console.log('destroy response', response);
  return response;
};

//UPLOAD

/*
 imgPath is a string and could be both
 an url 'http://i.giphy.com/NXOF5rlaSXdAc.gif'
 ...or a local file: './image.png'
 */

const createUpload = async (imgPath, uploadProps = {}) => {
  // upload file using URL:
  const path = await client.createUploadPath(imgPath);
  // you can then use the returned path to create a new upload:
  const upload = await client.uploads.create({
    path,
    ...uploadProps,
  });
  console.log(upload);
  return upload;
};

//POPULATE

const bulkInsert = async (modelName, items) => {
  const modelId = await getModelId(modelName);
  const list = items.map((item) => {
    return {
      itemType: modelId,
      ...item,
    };
  });
  const promises = list.map((item) => createRecord(item));
  await Promise.all(promises);
};

//INSERT PRODUCT RECORD

async function updateRecord(itemId, data) {
  try {
    console.log(JSON.stringify(data, null, 2));
    await client.items.update(itemId, data);
    console.log('ok');
  } catch (error) {
    console.error(error);
  } finally {
    console.log('done ');
  }
}

module.exports = {
  allRecords,
  updateRecord,
  createRecord,
  getModelId,
  listModelFields,
  bulkInsert,
  createRecordWithDelay,
  findRecord,
  findRecords,
  createUpload,
  destroyRecord,
  doQuery,
  getItemTypesByApiKey,
};
