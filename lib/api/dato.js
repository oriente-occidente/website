const API_KEY = process.env.NEXT_PUBLIC_DATO_API_KEY;
const ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? '';

export default async function fetchData(q, v = null, preview = false) {
  const url = `https://graphql.datocms.com${ENV ? '/environments/' + ENV : ''}`;

  try {
    const response = await fetch(`${url}${preview ? '/preview' : ''}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ query: q, variables: v }),
    });
    // console.log('status', response?.status);
    const result = await response.json();
    if (result?.errors) {
      console.error('RESPONSE ERROR');
      throw result.errors;
    }
    return result?.data;
  } catch (error) {
    console.error('QUERY ERROR', v, q);
    throw error;
  }
}
