import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../../screens/DetailsScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import { LikedChampScreen } from '../../screens/LikedChampScreen';



const Stack = createNativeStackNavigator();

const LikedStack = () => {

    return (
        <Stack.Navigator initialRouteName='Liked'>
            <Stack.Screen name="Liked" component={LikedChampScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default LikedStack;