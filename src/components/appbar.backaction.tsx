import { useRouter } from "expo-router";
import React from "react";
import { Appbar } from "react-native-paper";

export default function AppbarBackAction() {
    const router = useRouter();
    return (
        <Appbar.BackAction onPress={() => router.back()} />
    );
}