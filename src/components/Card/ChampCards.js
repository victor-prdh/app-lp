import { Image, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export function ChampCards({ champion }) {
    return (
        <TouchableOpacity style={style.card}>
            <Image source={{ uri: champion.image }}
                style={style.bgImage}
            />
            <Text style={style.title} >{champion.name}</Text>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        width: '50%',
        aspectRatio: 1 / 1,
        position: 'relative'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        aspectRatio: 1 / 1
    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        color: '#FFF',
        width: '80%',
        fontWeight: 'bold',
        alignSelf: 'center',
        bottom: '2%',
        fontSize: 34
    }
});