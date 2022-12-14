import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { ListChampions } from "../components/List/ListChampions";
import { getLikedChamps } from "../helper/Store";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';



export function LikedChampScreen() {
    const isFocused = useIsFocused();

    const [champions, setChampions] = useState(null)

    useEffect(() => {
        getLikedChamps().then(res => setChampions(res))
    }, [isFocused])

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
           {champions ? (
                <ListChampions champions={champions} fromLiked={true}></ListChampions>
            ) : (
                <ActivityIndicator size={"large"} />
            )}
        </SafeAreaView>
    )
}