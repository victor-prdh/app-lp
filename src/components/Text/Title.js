import { Text, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

export function Title({ title, children, additionalStyle }) {
    const [loaded] = useFonts({
        Beaufort: require('../../../assets/fonts/Beaufort-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <Text style={{...style.title, ...additionalStyle}}>{title} {children}</Text>
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