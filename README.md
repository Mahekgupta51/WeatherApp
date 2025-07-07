# Weather App

A modern, responsive weather application built with React Native and Expo. This app allows users to search for cities, view real-time weather data, and toggle between light and dark modes.

## Features

- **City Search**: Find cities as you type with auto-suggestions (starting at 3 characters)
- **Auto Weather Fetch**: Automatically fetches weather data after typing 5 characters
- **Real-time Weather Data**: View current temperature, conditions, humidity, and wind speed
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Works across different device sizes
- **Enhanced UI/UX**: Smooth transitions, appropriate loading states, and error handling
- **Comprehensive Tests**: Unit tests for services, Redux, and utility functions

## Screenshots

(Screenshots will be added here)

## Technologies Used

- React Native
- Expo
- TypeScript
- Redux for state management
- OpenWeatherMap API for weather data
- Custom styling with React Native's StyleSheet

## Project Structure

```
src/
  ├── components/        # Reusable UI components
  ├── hooks/             # Custom React hooks
  ├── redux/             # Redux store, actions, and reducers
  │   └── slices/        # Redux toolkit slices
  ├── screens/           # App screens
  ├── services/          # API and utility services
  ├── styles/            # Global styles
  ├── types/             # TypeScript type definitions
  └── utils/             # Utility functions and configs
```

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/Mahekgupta51/WeatherApp.git
   ```

2. Navigate to the project directory:
   ```
   cd WeatherApp
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the Expo development server:
   ```
   npx expo start
   ```

5. Follow the instructions in the terminal to open the app on your device or emulator.

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
OPENWEATHER_API_KEY=your_api_key_here
```

## Features in Detail

### City Search with Auto-suggestions
- Suggestions appear after typing at least 3 characters
- Debounced API calls to prevent excessive requests
- Results displayed in a dropdown with city name and country

### Weather Display
- Clean, card-based design showing essential weather information
- Weather icon from OpenWeatherMap
- Temperature in Celsius
- Current weather condition
- Humidity and wind speed information

### Dark Mode
- Complete dark mode implementation
- Toggle switch in the top-right corner
- Persisted preference using Redux

## Testing

This project uses Jest and React Testing Library for unit and component testing. 

### Running Tests

To run all tests:
```
npm test
```

To run tests in watch mode:
```
npm run test:watch
```

To generate test coverage reports:
```
npm run test:coverage
```

### Test Structure


### Tests

This project includes unit tests for:

1. **Weather Service Tests**: Testing the weather API service
2. **Suggestion Service Tests**: Testing the city suggestion service

To run tests:

```bash
# Run all tests
npm test

# Run a specific test file
npm test -- tests/weather-service.test.js
```

The tests are designed to run independently of React Native or Expo internals, making them reliable and fast.

## Future Enhancements

- Weather forecast for upcoming days
- Location-based weather detection
- Additional weather metrics
- Unit conversion (Celsius/Fahrenheit)
- Weather alerts and notifications

## License

MIT

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap
