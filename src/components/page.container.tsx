import React, { ReactNode } from "react";
import { StatusBar, View } from "react-native";
import { useTheme } from "react-native-paper/src/core/theming";
import { SafeAreaView } from "react-native-safe-area-context";

interface IPageContainer {
    children: ReactNode,
    safeArea?: boolean
};

export default function PageContainer({ children, safeArea }: IPageContainer) {
    const { colors } = useTheme();
    const SelectedView = safeArea ? SafeAreaView : View;
    return (
        <SelectedView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar barStyle={'dark-content'} />
            {children}
        </SelectedView>
    );
}