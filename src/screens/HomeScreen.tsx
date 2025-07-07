import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text, Switch, FlatList, TouchableOpacity } from 'react-native';

import { useWeather } from '../hooks/useWeather';
import WeatherCard from '../components/WeatherCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';
import { setError } from '../redux/slices/weatherSlice';
import { RootState } from '../redux/store';
import styles from '../styles/common';
import { fetchCitySuggestions } from '../services/suggestionService';

export default function HomeScreen() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [userSelectedSuggestion, setUserSelectedSuggestion] = useState(false);
  const { weatherData, loading, error, getWeather } = useWeather();
  const { darkMode } = useSelector((s: RootState) => s.theme);
  const dispatch = useDispatch();

  const handleInputChange = (text: string) => {
    setInput(text);
    if (text.trim() !== input.trim()) {
      if (showWeather) {
        setShowWeather(false);
      }
      if (error) {
        dispatch(setError(null));
      }
      // Reset userSelectedSuggestion when text changes
      if (userSelectedSuggestion) {
        setUserSelectedSuggestion(false);
      }
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (input.trim().length >= 3) {
        setLoadingSuggestions(true);
        try {
          const results = await fetchCitySuggestions(input);
          setSuggestions(results);
          setShowSuggestions(results.length > 0);
          if (input.trim().length >= 5 && !userSelectedSuggestion) {
            getWeather(input.trim());
            setShowWeather(true);
          }
        } catch (error) {
          console.error('Error fetching city suggestions:', error);
          setSuggestions([]);
          setShowSuggestions(false);
        } finally {
          setLoadingSuggestions(false);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [input]);

  const handleSelectCity = (city: any) => {
    const cityName = city.city || city.name;
    setInput(cityName);
    setShowSuggestions(false);
    setSuggestions([]);
    getWeather(cityName);
    setShowWeather(true);
    setUserSelectedSuggestion(true);
  };

  return (
    <View style={[
      styles.container,
      darkMode && styles.darkContainer,
      styles.mainContainer
    ]}>
      <View style={styles.darkModeToggle}>
        <Text style={[styles.darkModeText, { color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={() => { dispatch(toggleTheme()); }} />
      </View>

      <Text style={[
        styles.appTitle,
        darkMode ? styles.darkAppTitle : styles.lightAppTitle
      ]}>
        Weather App
      </Text>
      <View style={[styles.searchContainer, styles.searchContainerCustom]}>
        <TextInput
          style={[styles.input, darkMode && styles.darkInput]}
          value={input}
          onChangeText={handleInputChange}
          placeholder="Enter city"
          placeholderTextColor={darkMode ? '#aaa' : '#555'}
        />
        {loadingSuggestions && (
          <View style={styles.suggestionLoading}>
            <ActivityIndicator size="small" color={darkMode ? "#fff" : "#000"} />
          </View>
        )}
        {showSuggestions && !loadingSuggestions && !showWeather && (
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => `${item.id || ''}${item.city || item.name || ''}${item.countryCode || ''}_${index}`}
            style={[
              styles.suggestionsList,
              darkMode && styles.darkSuggestionsList,
              styles.suggestionListCustom,
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectCity(item)}
                style={[
                  styles.suggestionItem,
                  darkMode && styles.darkSuggestionItem
                ]}
              >
                <Text style={darkMode ? styles.darkCityNameText : styles.cityNameText}>
                  {item.city || item.name}, {item.countryCode}
                </Text>
                <Text style={[
                  styles.regionText,
                  darkMode ? styles.darkRegionText : styles.lightRegionText
                ]}>
                  {item.region}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
        {!showSuggestions && !loadingSuggestions && input.trim().length > 0 && input.trim().length < 3 && (
          <Text style={[
            styles.smallText,
            darkMode ? styles.darkSmallText : styles.lightSmallText
          ]}>
            Type at least 3 characters to show suggestions
          </Text>
        )}
      </View>
      {!showWeather && (
        <View style={[
          styles.buttonContainerOutside,
          showSuggestions && !showWeather ?
            { marginTop: Math.min(suggestions.length * 45, 200) + 10 } :
            { marginTop: 10 }
        ]}>
          <Button
            title="Get Weather"
            disabled={input.trim().length < 3}
            onPress={() => {
              if (input.trim()) {
                getWeather(input.trim());
                setShowWeather(true);
                setShowSuggestions(false);
                setSuggestions([]);
                setUserSelectedSuggestion(true);
              }
            }}
          />
        </View>)}
      {loading && <ActivityIndicator />}
      {error && <Text style={styles.error}>{error}</Text>}
      {showWeather && weatherData && !error && <WeatherCard data={weatherData} />}
    </View>
  );
}