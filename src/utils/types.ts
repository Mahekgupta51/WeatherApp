export interface Weather {
  main: string;
  icon: string;
}

export interface Main {
  humidity: string;
  temp: number;
}

export interface WeatherData {
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
  weather: Weather[];
  main: Main;
}

export interface Props {
  data: WeatherData;
}