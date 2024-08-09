import { Rocket } from '../types';
import { FAKE_API, fetchFromApi, ROCKETS_API } from './apiClient';

const cacheExpiry = 1000 * 60 * 5;

async function fetchWithCache<T>(cacheKey: string, url: string): Promise<T> {
  const cachedData = localStorage.getItem(cacheKey);
  const cacheTimestampString = localStorage.getItem(`${cacheKey}_timestamp`);
  const now = new Date().getTime();
  const cacheTimestamp = cacheTimestampString ? Number(cacheTimestampString) : 0;

  if (cachedData && cacheTimestamp && now - cacheTimestamp < cacheExpiry) {
    try {
      return JSON.parse(cachedData) as T;
    } catch (error) {
      console.error('Error parsing cached data:', error);
    }
  }

  try {
    const data = await fetchFromApi(url);
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(`${cacheKey}_timestamp`, now.toString());

    return data as T;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);

    if (cachedData) {
      return JSON.parse(cachedData) as T;
    }

    throw error;
  }
}

export async function getRockets() {
  return fetchWithCache<Rocket[]>('rocketsData', ROCKETS_API);
}

export async function getRocket(id: string) {
  const rockets = await fetchWithCache<Rocket[]>('rocketsData', ROCKETS_API);

  if (Array.isArray(rockets)) {
    return rockets.find((rocket) => rocket.id === id);
  }

  throw new Error('Fetched data is not an array of rockets');
}

export async function getTeamMembers() {
  return fetchWithCache<any[]>('teamMembersData', `${FAKE_API}/teamMembers.json`);
}

export async function getStarships() {
  return fetchWithCache<any[]>('starshipsData', `${FAKE_API}/starships.json`);
}


