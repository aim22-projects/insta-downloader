import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';
import { Button, Dialog, MD3DarkTheme, MD3LightTheme, PaperProvider, Portal, Text } from 'react-native-paper';
import useDarkMode from './hooks/useDarkMode';

const themes = {
  lightTheme: {
    ...MD3LightTheme
  },
  darkTheme: {
    ...MD3DarkTheme
  }
};

function App(): JSX.Element {
  const isDarkMode = useDarkMode();

  return (
    <PaperProvider theme={isDarkMode ? themes.darkTheme : themes.lightTheme}>
      <HomePage />
    </PaperProvider>
  );
}

function HomePage(): JSX.Element {
  const isDarkMode = useDarkMode();
  const backgroundStyle = { backgroundColor: isDarkMode ? '#323232' : '#e1e1e1' };
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (<SafeAreaView style={backgroundStyle}>
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
      <Text>App.tsx</Text>
      <Button onPress={showDialog}>Show Dialog</Button>
    </ScrollView>
  </SafeAreaView>);
}

export default App;
