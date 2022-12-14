import { TextInput, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { Colors } from "../../helper/Colors";
import { useEffect, useState } from "react";


export default function Search({set, allChampions}) {

    const [search, setSearch] = useState(null)

    const changeChamp = () => {

        if (search === null || search === '' ||  search === ' ') {
            set(allChampions)
        }

        if (allChampions === null) {
            return;
        }

        var champions = {data:{}}

        for (const key in allChampions.data) {
            var image = null;
            if (allChampions?.data[key]?.image?.full) {
                image = 'https://opgg-static.akamaized.net/meta/images/lol/champion/'.concat(allChampions.data[key].image.full).concat('?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1668056949653')
            }
            var item = {
                id: allChampions.data[key].id,
                name: allChampions.data[key].name,
                title: allChampions.data[key].title,
                image: image,
            }

            var name = item.name.toLowerCase();
            if (name.startsWith(search.toLowerCase())) {
                champions.data[key] = item
            }
        }

        set(champions)
        
    }
    

    useEffect(() => {changeChamp()}, [search])

    return (
        <View style={styles.searchContainer}>
            <Ionicons
                name='search'
                color={Colors.grey}
                size={30}
                style={styles.icon}
            />
            <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Recherche"
                placeholderTextColor={Colors.grey}
                value={search}
                onChangeText={value => setSearch(value)}
            />
        </View>             
    )

}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 3,
        borderColor: Colors.backgroundLight,
        paddingBottom: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      inputStyle: {
        flex: 1,
        color: Colors.textLight,
        height: 30,
        marginTop: 10,
        paddingLeft: 5,
        fontSize: 18
      },
      icon: {
        marginTop: 5
      }
});


