import React, { ReactNode } from "react";
import { StatusBar, View, useColorScheme } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface IPageContainer {
    children: ReactNode,
    safeArea?: boolean
};

export default function PageContainer({ children, safeArea }: IPageContainer) {
    const { colors } = useTheme();
    const colorScheme = useColorScheme();

    const SelectedView = safeArea ? SafeAreaView : View;
    const barStyle = colorScheme === 'dark' ? 'light-content' : 'dark-content';
    return (
        <SelectedView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar barStyle={barStyle} />
            {children}
        </SelectedView>
    );
}