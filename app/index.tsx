import { useState } from "react";
import { View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Appbar, Avatar, Button, Chip, Dialog, Divider, FAB, IconButton, List, Portal, ProgressBar, Text, TextInput } from "react-native-paper";
import PageContainer from "../src/components/page.container";
import useVisibility from "../src/hooks/useVisibility";

export default function () {
    const [filter, setFilter] = useState(0);
    const [dialogVisibility, showDialog, hideDialog] = useVisibility();

    return (
        <PageContainer>
            <AddDownloadDialog visible={dialogVisibility} hideDialog={hideDialog} />

            <Appbar.Header mode="center-aligned">
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Downloads" />
                <Appbar.Action icon="settings" />
            </Appbar.Header>

            <FilterBar filter={filter} setFilter={setFilter} />

            <DownloadList />

            <FAB
                icon={"add"}
                label="Add"
                style={{ position: 'absolute', bottom: 16, right: 16 }}
                onPress={showDialog} />
        </PageContainer>
    );
}

function FilterBar({ filter, setFilter }: { filter: number, setFilter: (value: number) => void }) {
    return (
        <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0 }} showsHorizontalScrollIndicator={false}>
            <View style={{ padding: 4, gap: 4, flexDirection: 'row' }}>
                <Chip children={"All"} selected={filter === 0} onPress={() => setFilter(0)} />
                <Chip icon={"check"} children={"Complete"} selected={filter === 1} onPress={() => setFilter(1)} />
                <Chip icon={"close"} children={"Failed"} selected={filter === 2} onPress={() => setFilter(2)} />
                <Chip icon={"play-arrow"} children={"Running"} selected={filter === 3} onPress={() => setFilter(3)} />
            </View>
        </ScrollView>
    );
}

function DownloadList() {
    return (
        <FlatList
            ItemSeparatorComponent={() => <Divider />}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            renderItem={({ item }) => (
                <List.Item
                    title={`item ${item}`}
                    left={params => <Avatar.Icon {...params} size={48} icon={"image"} color="white" />}
                    right={params => <IconButton {...params} icon="close" onPress={() => { }} />}
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
    );
}

function AddDownloadDialog({ visible, hideDialog }: { visible: boolean, hideDialog: () => void }) {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} >
                <Dialog.Title>Add Download</Dialog.Title>
                <Dialog.Content>
                    <TextInput mode="outlined" placeholder="post url" theme={{ roundness: 8 }} />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Cancel</Button>
                    <Button onPress={hideDialog}>Add</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}