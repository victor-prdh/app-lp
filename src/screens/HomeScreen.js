import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { fecthAllChamps } from "../helper/FetchLol";
import { ListChampions } from "../components/List/ListChampions";
import Style from "../Style";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import { Colors } from "../helper/Colors";

export function HomeScreen() {
    const [champions, setChampions] = useState(null)
    const [allChampions, setAllChampions] = useState(null)

    useEffect(() => {
        fecthAllChamps().then(res => {setChampions(res), setAllChampions(res)})
    }, [])



    return (
        <SafeAreaView style={Style.container}>
            <View style={{height: "16%", backgroundColor: Colors.background, zIndex: 100}}>
                <Header title={"Liste des champions"}> 
                    <Search set={setChampions} allChampions={allChampions}/>
                </Header>
            </View>
            <View style={{height: "86%"}}>
                {champions ? (
                    <ListChampions champions={champions}></ListChampions>
                ) : (
                    <ActivityIndicator size={"large"} />
                )}
            </View>
        </SafeAreaView>
    )
}