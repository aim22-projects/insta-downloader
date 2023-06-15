import { Appbar, Chip, Divider, IconButton, List, ProgressBar, Searchbar, Text, useTheme } from "react-native-paper";
import PageContainer from "../src/components/page.container";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { StatusBar, View } from "react-native";

export default function () {
    const { colors } = useTheme();
    return (
        <PageContainer>
            <Appbar.Header>
                <Appbar.Content title="Insta Downloader" />
                <Appbar.Action icon="menu" />
            </Appbar.Header>
            {/* <StatusBar backgroundColor={colors.elevation.level3} /> */}
            <ScrollView horizontal style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={{ padding: 4, gap: 4, flexDirection: 'row' }}>
                    <Chip children={"All"} />
                    <Chip icon={"check"} children={"Complete"} />
                    <Chip icon={"close"} children={"Failed"} />
                    <Chip icon={"play"} children={"Running"} />
                    <Chip icon={"stop"} children={"Stopped"} />
                </View>
            </ScrollView>

            <List.Section>
                <List.Subheader>Downloads</List.Subheader>
                <FlatList
                    ItemSeparatorComponent={() => <Divider />}
                    data={[1, 2, 3, 4, 5, 6]}
                    renderItem={({ item }) => (
                        <List.Item
                            title={`item ${item}`}
                            left={params =>
                                <IconButton {...params} icon="play" onPress={() => { }} />
                            }
                            right={params =>
                                <IconButton {...params} icon="close" onPress={() => { }} />
                            }
                            onPress={() => { }}
                            description={
                                params => (
                                    <View {...params} style={{ paddingVertical: 4 }}>
                                        <ProgressBar progress={0.4} />
                                        <Text>
                                            11% •
                                            22 KB/2 MB •
                                            paused
                                        </Text>
                                    </View>
                                )
                            }
                        />
                    )}>
                </FlatList>
            </List.Section>
        </PageContainer>
    );
}