import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import styles from '../styles/common';
import { Props } from '../utils/types';
import { RootState } from '../redux/store';


export default function WeatherCard({ data }: Props) {
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const { darkMode } = useSelector((s: RootState) => s.theme);
  
  return (
    <View style={[
      styles.weatherCard,
      darkMode && styles.darkWeatherCard,
      darkMode ? styles.darkShadow : styles.lightShadow
    ]}>
      <Text style={[
        styles.weatherCardCityName,
        darkMode && styles.darkWeatherCardCityName
      ]}>{data.name}</Text>
      <Image source={{ uri: icon }} style={styles.weatherCardIcon} />
      <Text style={[
        styles.weatherCardTemp,
        darkMode && styles.darkWeatherCardTemp
      ]}>{Math.round(data.main.temp)}°C</Text>
      <Text style={[
        styles.weatherCardCondition,
        darkMode && styles.darkWeatherCardCondition
      ]}>{data.weather[0].main}</Text>
      <Text style={[
        styles.weatherCardDetail,
        darkMode && styles.darkWeatherCardDetail
      ]}>Humidity: {data.main.humidity}%</Text>
      <Text style={[
        styles.weatherCardDetail,
        darkMode && styles.darkWeatherCardDetail
      ]}>Wind: {data.wind.speed} m/s</Text>
    </View>
  );
}