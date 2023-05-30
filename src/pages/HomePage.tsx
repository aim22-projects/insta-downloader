import { Appbar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StatusBar, Text } from "react-native";
import SampleDialog from "../components/SampleDialog";
import useDarkMode from "../hooks/useDarkMode";
import useVisibility from "../hooks/useVisibility";

export default function HomePage(): JSX.Element {
  const isDarkMode = useDarkMode();
  const backgroundStyle = { backgroundColor: isDarkMode ? '#323232' : '#e1e1e1', flex: 1 };
  const [visible, showDialog, hideDialog] = useVisibility(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Button onPress={showDialog}>Show Dialog</Button>
        <SampleDialog visible={visible} hideDialog={hideDialog} />
      </ScrollView>
    </SafeAreaView>
  );
}
