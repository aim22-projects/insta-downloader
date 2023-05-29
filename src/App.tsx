import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

const themes = {
  lightTheme: {
    ...MD3LightTheme
  },
  darkTheme: {
    ...MD3DarkTheme
  }
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={isDarkMode ? themes.darkTheme : themes.lightTheme}>
      <HomePage />
    </PaperProvider>
  );
}

function HomePage(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? '#323232' : '#e1e1e1' };

  return (<SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
      <Text>App.tsx</Text>
    </ScrollView>
  </SafeAreaView>);
}

export default App;
