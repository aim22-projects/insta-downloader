import { View } from "react-native";
import { Avatar, IconButton, List, ProgressBar, Text } from "react-native-paper";

interface IDownloadTile {
    id: string,
    title: string,
    mediaType: 'video' | 'image',
    downloadedSize: number,
    totalSize: number,
    status: 'complete' | 'failed' | 'running',
    url: string,
    onLeftPress: (id: string) => void
};

export default function DownloadTile(item: IDownloadTile) {
    return (
        <List.Item
            title={item.title}
            left={params => <Avatar.Icon style={params.style} size={40} icon={item.mediaType === 'image' ? 'image' : 'movie'} />}
            right={params => <IconButton style={params.style} icon="close" onPress={() => { item.onLeftPress(item.id); }} />}
            onPress={() => { }}
            description={params => item.status === 'complete'
                ? (
                    <Text>
                        {[
                            item.totalSize + ' MB',
                            item.status
                        ].join(" • ")}
                    </Text>
                )
                : (
                    <View {...params} style={{ paddingVertical: 4 }}>
                        <ProgressBar progress={item.downloadedSize / item.totalSize} />
                        <Text>
                            {[
                                item.downloadedSize * 100 / item.totalSize,
                                item.downloadedSize + ' KB / ' + item.totalSize + ' MB ',
                                item.status
                            ].join(" • ")}
                        </Text>
                    </View>
                )}
        />
    );
}