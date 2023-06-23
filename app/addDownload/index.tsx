import { useRouter } from "expo-router";
import { Appbar, SegmentedButtons } from "react-native-paper";
import AppbarBackAction from "../../src/components/appbar.backaction";
import PageContainer from "../../src/components/page.container";

export default function () {
    const router = useRouter();
    return (
        <PageContainer>
            <Appbar.Header>
                <AppbarBackAction />
                <Appbar.Content title="Add Download" />
                <Appbar.Action icon='add' />
            </Appbar.Header>
        </PageContainer>
    );
}