import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { isLikedChamp, storeLikedChamp } from "../../helper/Store";
import { useEffect, useState } from "react";

export function LikeButton({ champion }) {

    const [isLiked, setIsLiked] = useState(null)

    useEffect(() => {
        isLikedChamp(champion).then(res => setIsLiked(res))
    }, [])

    return (
        <TouchableOpacity style={style.card}
            onPress={() => {storeLikedChamp(champion).then((res) => {
                if (res) {
                    setIsLiked(!isLiked)
                }
            })}}
            activeOpacity={0.8}
        >
            <Ionicons name="heart" color={isLiked ? 'red' : 'white'} size={38} />

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        width: '10%',
        alignItems: 'center'
    },
});