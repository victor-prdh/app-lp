import { Text, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

export function Title({ title }) {
    const [loaded] = useFonts({
        Beaufort: require('../../../assets/fonts/Beaufort-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <Text style={style.title}>{title}</Text>
    )
}

const style = StyleSheet.create({
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 38,
        fontFamily: 'Beaufort'
    },

});