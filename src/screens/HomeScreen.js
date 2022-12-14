import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { fecthAllChamps } from "../helper/FetchLol";
import { ListChampions } from "../components/List/ListChampions";
import Style from "../Style";
import Header from "../components/Header";

export function HomeScreen() {
    const [champions, setChampions] = useState(null)

    useEffect(() => {
        fecthAllChamps().then(res => setChampions(res))
    }, [])

    return (
        <SafeAreaView style={Style.container}>
            <Header title={"Tous les champions"} />
            {champions ? (
                <ListChampions champions={champions}></ListChampions>
            ) : (
                <ActivityIndicator size={"large"} />
            )}
        </SafeAreaView>
    )
}