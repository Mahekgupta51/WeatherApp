import { API_KEY, BASE_URL } from '../utils/config';
import { WeatherData } from '../utils/types';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('City not found Error from Weather Map Api');
  }
  return await response.json();
};
