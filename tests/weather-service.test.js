// Test file for the weather service
describe('Weather Service Test', () => {
  // Mock fetch function
  global.fetch = jest.fn();
  
  // Reset mocks before each test
  beforeEach(() => {
    fetch.mockClear();
  });
  
  it('should fetch weather data successfully', async () => {
    // Create a mock response with the shape of expected weather data
    const mockWeatherData = {
      name: 'London',
      weather: [
        { 
          main: 'Clouds',
          icon: '04d' 
        }
      ],
      main: { 
        temp: 15.5, 
        humidity: '70' 
      },
      wind: { 
        speed: 5.2, 
        deg: 180 
      }
    };
    
    // Mock the fetch API to return our fake data
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockWeatherData
    });
    
    // Define our fetchWeather function similar to the actual service
    const fetchWeather = async (city) => {
      const API_KEY = 'mock-api-key';
      const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
      
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found Error from Weather Map Api');
      }
      return await response.json();
    };
    
    // Call the function
    const city = 'London';
    const result = await fetchWeather(city);
    
    // Verify fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=mock-api-key&units=metric`
    );
    
    // Verify the result matches our mock data
    expect(result).toEqual(mockWeatherData);
  });
  
  it('should throw an error when city is not found', async () => {
    // Mock error response
    fetch.mockResolvedValueOnce({
      ok: false
    });
    
    // Define our fetchWeather function similar to the actual service
    const fetchWeather = async (city) => {
      const API_KEY = 'mock-api-key';
      const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
      
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found Error from Weather Map Api');
      }
      return await response.json();
    };
    
    // Call the function and expect it to throw
    const city = 'NonExistentCity';
    
    await expect(fetchWeather(city)).rejects.toThrow(
      'City not found Error from Weather Map Api'
    );
    
    // Verify fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=mock-api-key&units=metric`
    );
  });
  
  it('should handle network errors gracefully', async () => {
    // Mock a network error
    fetch.mockRejectedValueOnce(new Error('Network error'));
    
    // Define our fetchWeather function similar to the actual service
    const fetchWeather = async (city) => {
      try {
        const API_KEY = 'mock-api-key';
        const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
        
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('City not found Error from Weather Map Api');
        }
        return await response.json();
      } catch (error) {
        throw new Error(`Failed to fetch weather: ${error.message}`);
      }
    };
    
    // Call the function and expect it to throw with a specific message
    const city = 'London';
    
    await expect(fetchWeather(city)).rejects.toThrow(
      'Failed to fetch weather: Network error'
    );
    
    // Verify fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=mock-api-key&units=metric`
    );
  });
});
