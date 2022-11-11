import { FlatList, Text } from "react-native";
import { ChampCards } from "../Card/ChampCards";

export function ListChampions({ champions }) {

    var data = []
    for (const key in champions.data) {
        var item = {
            id: champions.data[key].id,
            name: champions.data[key].name,
            title: champions.data[key].title,
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/'.concat(champions.data[key].image.full).concat('?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1668056949653'),
        }

        data.push(item)
    }

    return (
        <>
            {
                champions.data ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ChampCards champion={item} />}
                        numColumns={1}
                    />
                    : <Text>Erreur</Text>
            }
        </>
    )
}