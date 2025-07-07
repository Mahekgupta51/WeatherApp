import { GEODB_API_KEY } from '../utils/config';

export const fetchCitySuggestions = async (query: string) => {
  if (query.length < 2) return [];
  const response = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=5`,
    {
      headers: {
        'x-rapidapi-key': GEODB_API_KEY,
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    }
  );
  const data = await response.json();
  return data.data || [];
};