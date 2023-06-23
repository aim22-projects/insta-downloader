import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function () {
    const colorScheme = useColorScheme();
    const darkMode = colorScheme === 'dark';
    const theme = darkMode ? MD3DarkTheme : MD3LightTheme;
    return (
        <PaperProvider theme={theme}
            settings={{ icon: props => <MaterialIcons {...props} /> }} >
            <Stack screenOptions={{ headerShown: false }} />
        </PaperProvider>
    );
}