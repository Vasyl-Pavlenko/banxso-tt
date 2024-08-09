import axios from 'axios';

export const ROCKETS_API = 'https://api.spacexdata.com/v4/dragons';
export const FAKE_API = 'https://vasyl-pavlenko.github.io/banxso-tt/api';

export const rocketsClient = axios.create({
  baseURL: ROCKETS_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fakeApiClient = axios.create({
  baseURL: FAKE_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchFromApi(url: string) {
  try {
    const client = url.startsWith(FAKE_API) ? fakeApiClient : rocketsClient;

    const response = await client.get(url);

    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
}
