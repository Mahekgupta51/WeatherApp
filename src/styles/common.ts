import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  darkInput: {
    backgroundColor: '#555',
    borderColor: '#777',
    color: '#fff',
  },
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 18,
  },
  icon: {
    width: 100,
    height: 100,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchContainer: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  suggestionsList: {
    maxHeight: 200,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    position: 'absolute',
    top: 50,
    zIndex: 2,
  },
  darkSuggestionsList: {
    backgroundColor: '#333',
    borderColor: '#555',
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  darkSuggestionItem: {
    borderBottomColor: '#444',
  },
  suggestionLoading: {
    padding: 10,
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 3,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 50
  },
  darkModeToggle: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  darkModeText: {
    marginRight: 8
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  darkAppTitle: {
    color: '#fff'
  },
  lightAppTitle: {
    color: '#222'
  },
  searchContainerCustom: {
    width: '90%', 
    position: 'relative', 
    zIndex: 5
  },
  suggestionListCustom: {
    zIndex: 10
  },
  smallText: {
    marginTop: 8, 
    textAlign: 'center',
    fontSize: 12
  },
  darkSmallText: {
    color: '#aaa'
  },
  lightSmallText: {
    color: '#666'
  },
  buttonContainer: {
    marginTop: 10
  },
  buttonContainerOutside: {
    width: '90%',
    marginTop: 10
  },
  suggestionPlaceholder: {
    height: 260 
  },
  cityNameText: {
    color: '#000'
  },
  darkCityNameText: {
    color: '#fff'
  },
  regionText: {
    fontSize: 12
  },
  darkRegionText: {
    color: '#aaa'
  },
  lightRegionText: {
    color: '#666'
  },
  
  // Weather Card Styles
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    width: 320,
    alignSelf: 'center'
  },
  darkWeatherCard: {
    backgroundColor: '#333',
    shadowColor: '#111',
    shadowOpacity: 0.5,
    elevation: 10
  },
  weatherCardCityName: {
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 8
  },
  darkWeatherCardCityName: {
    color: '#fff'
  },
  weatherCardIcon: {
    width: 100, 
    height: 100
  },
  weatherCardTemp: {
    fontSize: 48, 
    fontWeight: 'bold', 
    marginVertical: 8
  },
  darkWeatherCardTemp: {
    color: '#fff'
  },
  weatherCardCondition: {
    fontSize: 20, 
    color: '#666', 
    marginBottom: 8
  },
  darkWeatherCardCondition: {
    color: '#ccc'
  },
  weatherCardDetail: {
    fontSize: 16, 
    color: '#888'
  },
  darkWeatherCardDetail: {
    color: '#aaa'
  },
  
  lightShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8
  },
  darkShadow: {
    shadowColor: '#111',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
  }
});
