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
                <List.Section title="App settings" style={{ marginVertical: 0 }}>
                    <List.Item
                        left={params => <List.Icon {...params} icon='folder' />}
                        right={params => <List.Icon {...params} icon='chevron-right' />}
                        title='Download location'
                        description='sdcard/Downloads'
                        onPress={() => { }}
                    />
                </List.Section>
                <List.Section title="App info" style={{ marginVertical: 0 }}>
                    <List.Item
                        left={params => <List.Icon {...params} icon='info' />}
                        right={params => <List.Icon {...params} icon='chevron-right' />}
                        title='App version'
                        description='1.0.0-dev'
                        onPress={() => { }} />
                    <List.Item
                        left={params => <List.Icon {...params} icon='person' />}
                        right={params => <List.Icon {...params} icon='chevron-right' />}
                        title='Developer'
                        description='aim22-projects@github.com'
                        onPress={() => { }} />
                </List.Section>
            </ScrollView>
        </PageContainer>
    );
}