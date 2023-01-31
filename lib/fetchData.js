const ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? '';
const API_KEY = process.env.NEXT_PUBLIC_DATO_API_KEY;
const PREVIEW_ENABLED = process.env.NEXT_PUBLIC_PREVIEW || false;
console.log('ENV', ENV);
console.log('API_KEY', API_KEY);

async function fetchData(q, v = null, preview = false) {
  const baseUrl = `https://graphql.datocms.com${
    ENV ? '/environments/' + ENV : ''
  }`;
  const url = `${baseUrl}${PREVIEW_ENABLED || preview ? '/preview' : ''}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ query: q, variables: v }),
    });
    console.log(url, 'status', response?.status);
    const result = await response.json();
    if (result?.errors) {
      console.error('RESPONSE ERROR');
      throw result.errors;
    }
    return result?.data;
  } catch (error) {
    console.error('QUERY ERROR', v, q);
    console.error('ERROR', error);
    throw error;
  }
}

export default fetchData;
