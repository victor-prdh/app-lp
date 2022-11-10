import { Image, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

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
            <Text style={style.title} >{champion.name}</Text>

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
        aspectRatio: 1 / 1
    },
    title: {
        backgroundColor: "#061c25",
        position: 'absolute',
        color: '#FFF',
        width: '100%',
        fontWeight: 'bold',
        alignSelf: 'center',
        bottom: 0,
        paddingVertical: "1%",
        paddingHorizontal: '3%',
        fontSize: 34
    }
});