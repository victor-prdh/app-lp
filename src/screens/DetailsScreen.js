import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, TouchableOpacity } from "react-native";
import { fetchOne } from "../helper/FetchLol";
import { StyleSheet } from "react-native";
import Style from "../Style";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { DisplayInfos } from "../components/DisplayInfos";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../helper/Colors";

export function DetailScreen(nav) {
    const navigation = useNavigation()
    const [champion, setChampion] = useState(false)

    useEffect(() => {
        fetchOne(nav.route.params.champ.id).then(res => setChampion(res.data))
    }, [])

    return (
        <SafeAreaView style={Style.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={style.backPopup}
            >
                <Ionicons name="arrow-back" color={Colors.textLight} size="30" />
            </TouchableOpacity>
            {champion ? (
                <DisplayInfos champion={champion} />
            ) : (
                <ActivityIndicator size={"large"} />
            )}
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    backPopup: {
        zIndex: 10000,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: Colors.backgroundLight,
        position: 'absolute',
        top: '10%',
        left: '5%'
    }
});