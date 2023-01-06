import { Text, StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';
import { Colors } from "../../helper/Colors";

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
        backgroundColor: Colors.backgroundLight,
        borderRadius: 12
    },
    description: {
        color: Colors.textLight,
        fontSize: 15,
        textAlign: 'justify',
    }

});