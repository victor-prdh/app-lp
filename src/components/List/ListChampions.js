import { FlatList, Image, Text, View } from "react-native";
import { ChampCards } from "../Card/ChampCards";
import { Title } from "../Text/Title";

export function ListChampions({ champions }) {

    var data = []
    for (const key in champions.data) {
        var image = null;
        if (champions?.data[key]?.image?.full) {
            image = 'https://opgg-static.akamaized.net/meta/images/lol/champion/'.concat(champions.data[key].image.full).concat('?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1668056949653')
        }
        var item = {
            id: champions.data[key].id,
            name: champions.data[key].name,
            title: champions.data[key].title,
            image: image,
        }

        data.push(item)
    }

    return (
        <>
            {
                champions.data && data.length > 0 ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ChampCards champion={item} />}
                        numColumns={1}
                    />
                    : 
                        <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
                            <Image source={require('../../../assets/not-found.png')} style={{maxWidth: '80%', height: 360, alignSelf: 'center', resizeMode: 'cover'}} />
                            <Title additionalStyle={{color: 'black', textAlign: 'center'}}>Aucun champion trouvé</Title>
                        </View>
            }
        </>
    )
}