// import { View } from "react-native";
// import { Avatar, IconButton, List, ProgressBar, Text } from "react-native-paper";

// const _DownloadTile = (item: any) => <List.Item
//     title={item.title}
//     left={params => <Avatar.Icon style={params.style} size={40} icon={item.mediaType === 'image' ? 'image' : 'movie'} />}
//     right={params => <IconButton style={params.style} icon="close" onPress={() => { item.removeItem(item.id); }} />}
//     onPress={() => { }}
//     description={params =>
//         item.status === 'complete' ? (
//             <Text>
//                 {
//                     [
//                         item.totalSize + ' MB',
//                         item.status
//                     ].join(" • ")
//                 }
//             </Text>
//         ) : (
//             <View {...params} style={{ paddingVertical: 4 }}>
//                 <ProgressBar progress={item.downloadedSize / item.totalSize} />
//                 <Text>
//                     {
//                         [
//                             item.downloadedSize * 100 / item.totalSize,
//                             item.downloadedSize + ' KB / ' + item.totalSize + ' MB ',
//                             item.status
//                         ].join(" • ")
//                     }
//                 </Text>
//             </View>
//         )
//     }
// />;

// const CompletedTile = () => { };

// const DownloadingTile = () => { };

// const FailedTile = () => { };

// const DownloadTile = {
//     Completed: CompletedTile,
//     Downloading: DownloadingTile,
//     Failed: FailedTile,
// };

// export default DownloadTile