import { useCallback, useState } from "react";
import { View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Appbar, Avatar, Button, Chip, Dialog, Divider, FAB, IconButton, List, Portal, ProgressBar, Snackbar, Text, TextInput } from "react-native-paper";
import PageContainer from "../src/components/page.container";
import useVisibility from "../src/hooks/useVisibility";

type IDownloadStatus = undefined | 'complete' | 'failed' | 'running';
interface IDownloadTask {
    title: string,
    mediaType: 'video' | 'image',
    downloadedSize: number,
    totalSize: number,
    status: 'complete' | 'failed' | 'running',
    url: string,
};

const downloadTasks: IDownloadTask[] = [
    { title: 'Task 1', mediaType: 'image', downloadedSize: 10, totalSize: 100, status: 'running', url: '' },
    { title: 'Task 2', mediaType: 'image', downloadedSize: 20, totalSize: 100, status: 'running', url: '' },
    { title: 'Task 3', mediaType: 'image', downloadedSize: 30, totalSize: 100, status: 'failed', url: '' },
    { title: 'Task 4', mediaType: 'image', downloadedSize: 40, totalSize: 100, status: 'failed', url: '' },
    { title: 'Task 5', mediaType: 'image', downloadedSize: 100, totalSize: 100, status: 'complete', url: '' },
];

const snackbarHeight = 48 + 8;// height: 48 + margin: 8 // taken from code

export default function () {
    const [filter, setFilter] = useState<IDownloadStatus>();
    const [dialogVisibility, showDialog, hideDialog] = useVisibility();
    const [snackbarVisibility, showSnackbar, hideSnackbar] = useVisibility();

    const clodeDialog = useCallback((value: string | undefined) => {
        if (value) showSnackbar();
        hideDialog();
    }, []);

    return (
        <PageContainer>
            <AddDownloadDialog visible={dialogVisibility} hideDialog={clodeDialog} />

            <NewDownloadSnackbar visible={snackbarVisibility} hideSnackbar={hideSnackbar} />

            <Appbar.Header mode="center-aligned">
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Downloads" />
                <Appbar.Action icon="settings" />
            </Appbar.Header>

            <FilterBar filter={filter} setFilter={setFilter} />

            <DownloadList data={downloadTasks.filter(task => filter ? task.status === filter : true)} />

            <FAB
                icon={"add"}
                label="Addd"
                variant="tertiary"
                style={{ position: 'absolute', bottom: snackbarVisibility ? snackbarHeight + 16 : 16, right: 16 }}
                onPress={showDialog} />
        </PageContainer>
    );
}

function FilterBar({ filter, setFilter }: { filter: IDownloadStatus | undefined, setFilter: (value: IDownloadStatus) => void }) {
    return (
        <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0 }} showsHorizontalScrollIndicator={false}>
            <View style={{ padding: 4, gap: 4, flexDirection: 'row' }}>
                <Chip children={"All"} selected={!filter} onPress={() => setFilter(undefined)} />
                <Chip icon={"check"} children={"Complete"} selected={filter === 'complete'} onPress={() => setFilter('complete')} />
                <Chip icon={"close"} children={"Failed"} selected={filter === 'failed'} onPress={() => setFilter('failed')} />
                <Chip icon={"play-arrow"} children={"Running"} selected={filter === 'running'} onPress={() => setFilter('running')} />
            </View>
        </ScrollView>
    );
}

function DownloadList({ data }: { data: IDownloadTask[] }) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <Divider />}
            data={data}
            renderItem={({ item }) => (
                <List.Item
                    title={item.title}
                    left={params => <Avatar.Icon {...params} size={48} icon={"image"} color="white" />}
                    right={params => <IconButton {...params} icon="close" onPress={() => { }} />}
                    onPress={() => { }}
                    description={
                        params => (
                            <View {...params} style={{ paddingVertical: 4 }}>
                                <ProgressBar progress={item.downloadedSize / item.totalSize} />
                                <Text>
                                    {item.downloadedSize * 100 / item.totalSize}% •
                                    {item.downloadedSize} KB/ {item.totalSize} MB •
                                    {item.status}
                                </Text>
                            </View>
                        )
                    }
                />
            )}>
        </FlatList>
    );
}

function AddDownloadDialog({ visible, hideDialog }: { visible: boolean, hideDialog: (value: string | undefined) => void }) {
    const [url, setUrl] = useState<string>("");
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => hideDialog(undefined)} >
                <Dialog.Title>Add Download</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        mode="outlined"
                        placeholder="post url"
                        theme={{ roundness: 8 }}
                        value={url}
                        onChangeText={setUrl} />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => hideDialog(undefined)}>Cancel</Button>
                    <Button onPress={() => hideDialog(url)}>Add</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

function NewDownloadSnackbar({ visible, hideSnackbar }: { visible: boolean, hideSnackbar: () => void }) {
    return (
        <Snackbar visible={visible} onDismiss={hideSnackbar} >
            New download task added
        </Snackbar>
    );
}