import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../../screens/DetailsScreen';
import { HomeScreen } from '../../screens/HomeScreen';



const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeStack;