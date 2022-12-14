import React from "react";
import { Text, Image, View, ScrollView } from "react-native";
import Style from "../Style";
import { LikeButton } from "./Button/LikeButton";
import { DescCard } from "./Card/DescCard";
import { Title } from "./Text/Title";


export function DisplayInfos({ champion }) {

    for (const key in champion) {
        champion = champion[key]
        champion.banner = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(champion.id).concat('_0.jpg')
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: "#061c25" }}>
            <Image source={{ uri: champion.banner }}
                style={{ width: '100%', aspectRatio: 16 / 9 }} />
            <ScrollView style={{ padding: 10 }}>
                <Title title={champion.name}>
                    <LikeButton champion={champion} />
                </Title>
                <Text style={Style.subTitle}>{champion.title}</Text>
                <DescCard lore={champion.lore} />
            </ScrollView>


        </View>
    )
}
