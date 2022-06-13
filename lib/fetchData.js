const ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? '';
const API_KEY = process.env.NEXT_PUBLIC_DATO_API_KEY;
async function fetchData(q, v = null, preview = false) {
  const url = `https://graphql.datocms.com${ENV ? '/environments/' + ENV : ''}`;
  // console.log(url);
  try {
    const response = await fetch(`${url}${preview ? '/preview' : ''}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ query: q, variables: v }),
    });
    console.log('status', response?.status);
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
