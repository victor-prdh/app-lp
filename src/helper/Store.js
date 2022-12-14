import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export async function storeLikedChamp(champ) {
    if (await isLikedChamp(champ)) {
        
        try {
            var actualValue = await getLikedChamps()
            delete actualValue.data[champ?.id]
            jsonValue = JSON.stringify(actualValue)
            await AsyncStorage.setItem('@likedChamp', jsonValue)
            return true
        } catch (e) {
            Alert('Erreur lors du stockage')
        }
        
    } else {
        try {
            var actualValue = await getLikedChamps()
            var jsonValue = { data: {...actualValue.data, [champ.id]: {...champ}}}
            jsonValue = JSON.stringify(jsonValue)
            await AsyncStorage.setItem('@likedChamp', jsonValue)
            return true
        } catch (e) {
            Alert('Erreur lors du stockage')
        }
    }

    return false
    
}

export async function getLikedChamps() {
    try {
        const jsonValue = await AsyncStorage.getItem('@likedChamp')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        Alert('Erreur lors du stockage')
    }
}

export async function isLikedChamp(champ) {
    try {
        if (champ?.id === null) {
            return false
        }
        const jsonValue = await AsyncStorage.getItem('@likedChamp')
        var champions = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (champions === null) {
            return false
        }

        for (const key in champions.data) {
            if (champions.data[key].id === champ.id) return true
        }

        return false
    } catch (e) {
        Alert('Erreur lors du stockage')
    }
}