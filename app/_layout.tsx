import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function () {
    return (
        <PaperProvider
            settings={{ icon: props => <MaterialIcons {...props} /> }} >
            <Stack screenOptions={{ headerShown: false }} />
        </PaperProvider>
    );
}