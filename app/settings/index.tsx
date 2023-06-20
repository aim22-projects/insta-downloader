import { ScrollView } from "react-native-gesture-handler";
import { Appbar, List } from "react-native-paper";
import AppbarBackAction from "../../src/components/appbar.backaction";
import PageContainer from "../../src/components/page.container";

export default function () {
    return (
        <PageContainer>
            <Appbar.Header>
                <AppbarBackAction />
                <Appbar.Content title="Settings" />
            </Appbar.Header>
            <ScrollView>
                <List.Section title="App settings">
                    <List.Item
                        left={params => <List.Icon {...params} icon='folder' />}
                        right={params => <List.Icon {...params} icon='edit' />}
                        title='Download location'
                        description='sdcard/Downloads'
                        onPress={() => { }}
                    />
                    <List.Item
                        left={params => <List.Icon {...params} icon='brightness-medium' />}
                        right={params => <List.Icon {...params} icon='edit' />}
                        title="Dark mode"
                        description="Enabled"
                    />
                </List.Section>
            </ScrollView>
        </PageContainer>
    );
}