import React from 'react';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import useDarkMode from './hooks/useDarkMode';
import HomePage from './pages/HomePage';

const themes = {
  lightTheme: {
    ...MD3LightTheme
  },
  darkTheme: {
    ...MD3DarkTheme
  }
};

export default function App(): JSX.Element {
  const isDarkMode = useDarkMode();

  return (
    <PaperProvider theme={isDarkMode ? themes.darkTheme : themes.lightTheme}>
      <HomePage />
    </PaperProvider>
  );
}
