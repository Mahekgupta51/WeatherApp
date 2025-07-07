import { fetchWeather } from '../src/services/weatherService';
import { API_KEY, BASE_URL } from '../src/utils/config';

// Mock modules
jest.mock('../src/utils/config', () => ({
  API_KEY: 'mocked-api-key',
  BASE_URL: 'https://api.openweathermap.org/data/2.5/weather'
}));

describe('WeatherService Integration Test', () => {
  // Mock global fetch
  global.fetch = jest.fn();
  
  beforeEach(() => {
    fetch.mockClear();
  });
  
  it('should fetch weather data correctly using the actual module', async () => {
    // Create mock weather data
    const mockWeatherData = {
      name: 'Berlin',
      weather: [{ main: 'Clear', icon: '01d' }],
      main: { temp: 22.5, humidity: '55' },
      wind: { speed: 3.5, deg: 120 }
    };
    
    // Set up the mock implementation
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockWeatherData
    });
    
    // Call the actual fetchWeather function
    const result = await fetchWeather('Berlin');
    
    // Check that fetch was called correctly
    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}?q=Berlin&appid=${API_KEY}&units=metric`
    );
    
    // Verify we got back the expected data
    expect(result).toEqual(mockWeatherData);
  });
  
  it('should throw an error for invalid cities', async () => {
    // Mock a failed response
    fetch.mockResolvedValueOnce({
      ok: false
    });
    
    // Verify the error is thrown
    await expect(fetchWeather('InvalidCity')).rejects.toThrow(
      'City not found Error from Weather Map Api'
    );
  });
});
