import axios from 'axios';

const http = axios.create({
  baseURL: 'https://official-joke-api.appspot.com',
});

export async function getRandomJoke(selected: string) {
  try {
    const { data } = await http.get(`/jokes/${selected}/random`);
    return data;
  } catch (error) {
    throw new Error('Error fetching joke: ', {
      cause: error,
    });
  }
}

export async function getTypesJokes() {
  const { data } = await http.get('/types');
  return data;
}
