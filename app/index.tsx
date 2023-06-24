import { Link, useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Avatar, Button, Dialog, Divider, FAB, IconButton, List, Portal, ProgressBar, SegmentedButtons, Snackbar, Text, TextInput } from "react-native-paper";
import PageContainer from "../src/components/page.container";
import useVisibility from "../src/hooks/useVisibility";
import DownloadTile from "../src/components/download.tile";

type IDownloadStatus = undefined | 'complete' | 'failed' | 'running';
type IFilter = '' | 'complete' | 'running' | 'failed';
interface IDownloadTask {
    id: string,
    title: string,
    mediaType: 'video' | 'image',
    downloadedSize: number,
    totalSize: number,
    status: 'complete' | 'failed' | 'running',
    url: string,
};

const downloadTasks: IDownloadTask[] = [
    { id: '0', title: 'Task 1', mediaType: 'image', downloadedSize: 10, totalSize: 100, status: 'running', url: '' },
    { id: '2', title: 'Task 2', mediaType: 'image', downloadedSize: 20, totalSize: 100, status: 'running', url: '' },
    { id: '3', title: 'Task 3', mediaType: 'image', downloadedSize: 30, totalSize: 100, status: 'failed', url: '' },
    { id: '4', title: 'Task 4', mediaType: 'image', downloadedSize: 40, totalSize: 100, status: 'failed', url: '' },
    { id: '5', title: 'Task 5', mediaType: 'video', downloadedSize: 100, totalSize: 100, status: 'complete', url: '' },
];

const snackbarHeight = 48 + 8;// height: 48 + margin: 8 // taken from code
const filterButtons = [
    { value: '', label: 'All', icon: 'all-inbox' },
    { value: 'complete', label: 'Done', icon: 'file-download-done' },
    { value: 'running', label: 'Running', icon: 'file-download' },
    { value: 'failed', label: 'Failed', icon: 'close' }
];
export default function () {
    const router = useRouter();
    const [downloads, setDownloads] = useState<IDownloadTask[]>(downloadTasks);
    const [filter, setFilter] = useState<string>(filterButtons[0].value);
    const [dialogVisibility, showDialog, hideDialog] = useVisibility();
    const [snackbarVisibility, showSnackbar, hideSnackbar] = useVisibility();

    const clodeDialog = useCallback((value: string | undefined) => {
        hideDialog();
        if (value) router.push('/addDownload');
        // if (value) {
        //     showSnackbar();
        //     setDownloads(_downloads => [..._downloads, {
        //         id: Math.random().toString(36).substring(2, 7),
        //         title: 'new',
        //         mediaType: 'image',
        //         downloadedSize: 70,
        //         totalSize: 100,
        //         status: 'running',
        //         url: value
        //     }]);
        // }
        // hideDialog();
    }, []);

    const removeDownloadtask = useCallback((id: string) => {
        setDownloads(_downloads => _downloads.filter(_item => _item.id !== id));
    }, []);

    const filteredDownloads = useMemo(() => downloads.filter(task => filter ? task.status === filter : true), [filter, downloads]);

    return (
        <PageContainer>
            {dialogVisibility && <AddDownloadDialog visible={dialogVisibility} hideDialog={clodeDialog} />}

            <NewDownloadSnackbar visible={snackbarVisibility} hideSnackbar={hideSnackbar} />

            <Appbar.Header>
                <Appbar.Content title="Downloads" />
                <Link href={"/settings"} asChild>
                    <Appbar.Action icon="settings" />
                </Link>
            </Appbar.Header>

            <SegmentedButtons
                value={filter}
                style={{ paddingHorizontal: 8 }}
                onValueChange={setFilter}
                buttons={filterButtons} />

            <DownloadList data={filteredDownloads} removeItem={removeDownloadtask} />

            <FAB
                icon={"add"}
                label="Add"
                style={{ position: 'absolute', bottom: snackbarVisibility ? snackbarHeight + 16 : 16, right: 16 }}
                onPress={showDialog} />

        </PageContainer>
    );
}

function DownloadList({ data, removeItem }: { data: IDownloadTask[], removeItem: (id: string) => void }) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <Divider />}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (<DownloadTile  {...item} onLeftPress={(id) => removeItem(id)} />)}>
        </FlatList >
    );
}

function AddDownloadDialog({ visible, hideDialog }: { visible: boolean, hideDialog: (value: string | undefined) => void }) {
    const [url, setUrl] = useState<string>("");
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => hideDialog(undefined)} >
                <Dialog.Title>New Download</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        autoFocus
                        mode="outlined"
                        label="Instagram Post url"
                        placeholder="http://insta.com/posts/1"
                        theme={{ roundness: 8 }}
                        value={url}
                        onChangeText={setUrl} />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => hideDialog(undefined)} >Cancel</Button>
                    <Button onPress={() => hideDialog(url)} mode="contained-tonal">Add</Button>
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