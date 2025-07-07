import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../../utils/types';

interface WeatherState {
  city: string;
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  city: '',
  weatherData: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setWeatherData(state, action: PayloadAction<WeatherData>) {
      state.weatherData = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setCity, setWeatherData, setLoading, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
