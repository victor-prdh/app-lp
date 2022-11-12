import { Text, StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';

export function DescCard({ lore }) {
    const [loaded] = useFonts({
        Beaufort: require('../../../assets/fonts/Beaufort-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={style.descriptionBox}>
            <Text style={style.description}>
                {lore}
            </Text>
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