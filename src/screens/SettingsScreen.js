import { SafeAreaView, Text } from "react-native";
import Header from "../components/Header";
import Style from "../Style";

export function SettingsScreen() {
    return (
        <SafeAreaView style={Style.container}>
            <Text>Settings</Text>
        </SafeAreaView>
    )
}