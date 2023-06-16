import { useState } from "react";
import { View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Appbar, Chip, Divider, FAB, IconButton, List, ProgressBar, Text, useTheme } from "react-native-paper";
import PageContainer from "../src/components/page.container";

export default function () {
    const [filter, setFilter] = useState(0);
    const { colors } = useTheme();
    return (
        <PageContainer>
            <Appbar.Header mode="center-aligned">
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Downloads" />
                <Appbar.Action icon="cog" />
            </Appbar.Header>
            {/* <StatusBar backgroundColor={colors.elevation.level3} /> */}
            <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={{ padding: 4, gap: 4, flexDirection: 'row' }}>
                    <Chip children={"All"} selected={filter === 0} onPress={() => setFilter(0)} />
                    <Chip icon={"check"} children={"Complete"} selected={filter === 1} onPress={() => setFilter(1)} />
                    <Chip icon={"close"} children={"Failed"} selected={filter === 2} onPress={() => setFilter(2)} />
                    <Chip icon={"play"} children={"Running"} selected={filter === 3} onPress={() => setFilter(3)} />
                    <Chip icon={"stop"} children={"Stopped"} selected={filter === 4} onPress={() => setFilter(4)} />
                </View>
            </ScrollView>

            <FlatList
                ItemSeparatorComponent={() => <Divider />}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
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

            <FAB icon={"plus"} style={{ position: 'absolute', bottom: 16, right: 16 }} />
        </PageContainer>
    );
}