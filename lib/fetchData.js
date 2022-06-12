async function fetchData(q, v = null, preview = false) {
  const url = `https://graphql.datocms.com/environments/develop`;
  console.log(url);
  try {
    const response = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 6db76ba05745cba517132ef44fbf6d`,
      },
      body: JSON.stringify({ query: q, variables: v }),
    });
    // console.log('status', response?.status);
    const result = await response.json();
    if (result?.errors) {
      console.error('RESPONSE ERROR');
      throw result.errors;
    }
    console.log('DATA', JSON.stringify(result.data, null, 2));
    return result?.data;
  } catch (error) {
    console.error('QUERY ERROR', v, q);
    console.error('ERROR', error);
    throw error;
  }
}

export default fetchData;
