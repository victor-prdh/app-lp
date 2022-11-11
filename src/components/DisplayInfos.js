import React from "react";
import { ActivityIndicator, SafeAreaView, Text, Image, View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import Style from "../Style";
import { Title } from "./Text/Title";


export function DisplayInfos({ champion }) {

    for (const key in champion) {
        champion = champion[key]
        champion.banner = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(champion.id).concat('_0.jpg')
        console.log(champion);
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: "#061c25" }}>
            <Image source={{ uri: champion.banner }}
                style={{ width: '100%', aspectRatio: 16 / 9 }} />
            <ScrollView style={{ padding: 10 }}>
                <Title title={champion.name} />
                <Text style={Style.subTitle}>{champion.title}</Text>
                <View style={style.descriptionBox}>
                    <Text style={style.description}>
                        {champion.lore}
                    </Text>
                </View>
            </ScrollView>


        </View>
    )
}


const style = StyleSheet.create({
    descriptionBox: {
        marginVertical: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ffffff33',
        borderWidth: 2
    },
    description: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'justify',
    }
});