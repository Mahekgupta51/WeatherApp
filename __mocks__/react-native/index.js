import * as ReactNative from 'react-native';

// Mock the Image component
ReactNative.Image = jest.fn().mockImplementation(() => {
  return {
    render: () => null,
    propTypes: ReactNative.Image.propTypes,
  };
});

// Mock the Alert module
ReactNative.Alert = {
  alert: jest.fn(),
};

module.exports = ReactNative;
