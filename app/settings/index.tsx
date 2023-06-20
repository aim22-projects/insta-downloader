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
                        right={params => <List.Icon {...params} icon='chevron-right' />}
                        title='Download location'
                        description='sdcard/Downloads'
                        onPress={() => { }}
                    />
                    <List.Item
                        left={params => <List.Icon {...params} icon='brightness-medium' />}
                        right={params => <List.Icon {...params} icon='chevron-right' />}
                        title="Dark mode"
                        description="Enabled"
                        onPress={() => { }}
                    />
                    <List.Item
                        left={params => <List.Icon {...params} icon='info' />}
                        right={params => <List.Icon {...params} icon='chevron-right' />}
                        title='About'
                        description='App version, Auther'
                        onPress={() => { }} />
                </List.Section>
            </ScrollView>
        </PageContainer>
    );
}