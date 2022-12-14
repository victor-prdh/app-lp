import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Title } from "../Text/Title";
import { Colors } from "../../helper/Colors";

export function ChampCards({ champion }) {
    champion.banner = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(champion.id).concat('_0.jpg')
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={style.card}
            onPress={() => navigation.push('Details', { champ: champion })}
            activeOpacity={0.8}
        >
            <Image source={{ uri: champion.banner }}
                style={style.bgImage}
            />
            <View style={style.titleContainer} >
                <Title title={champion.name} />
            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        marginVertical: 20,
        width: '88%',
        borderTopRightRadius: 12,
        alignSelf: 'center',
        aspectRatio: 16 / 9,
        position: 'relative'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        aspectRatio: 1 / 1,
        borderRadius: 12
    },
    titleContainer: {
        backgroundColor: Colors.backgroundLight,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingVertical: "1%",
        paddingHorizontal: '3%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    }
});