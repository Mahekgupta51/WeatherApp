import { useDispatch, useSelector } from 'react-redux';
import { setCity, setWeatherData, setLoading, setError } from '../redux/slices/weatherSlice';
import { fetchWeather } from '../services/weatherService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState, AppDispatch } from '../redux/store';

export const useWeather = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { city, weatherData, loading, error } = useSelector((state: RootState) => state.weather);

  const loadLastCity = async () => {
    const savedCity = await AsyncStorage.getItem('lastCity');
    if (savedCity) {
      dispatch(setCity(savedCity));
      getWeather(savedCity);
    }
  };

  const getWeather = async (cityName: string) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const data = await fetchWeather(cityName);
      dispatch(setWeatherData(data));
      dispatch(setCity(cityName));
      await AsyncStorage.setItem('lastCity', cityName);
    } catch (err) {
      dispatch(setError((err as Error).message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    city,
    weatherData,
    loading,
    error,
    getWeather,
    loadLastCity,
  };
};
