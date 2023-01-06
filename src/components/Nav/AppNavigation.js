import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsScreen } from '../../screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeStack from './HomeStack';
import { LikedChampScreen } from '../../screens/LikedChampScreen';
import LikedStack from './LikedStack';
import { Colors } from '../../helper/Colors';


export default function AppNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Tab.Navigator screenOptions={() => ({tabBarShowLabel: false, tabBarStyle: {backgroundColor: Colors.background}})}>
                <Tab.Screen name="HomeStack" component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => (
                            
                            <Ionicons name="home" color={focused ? Colors.navHighlight : Colors.nav} size={size} />
                        )
                    }}
                />

                <Tab.Screen name="LikedChamp" component={LikedStack}
                    options={{
                        tabBarLabel: 'LikedChamp',
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name="heart" color={focused ? Colors.navHighlight : Colors.nav} size={size} />
                        )
                    }}
                />

                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Paramètres',
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name="settings" color={focused ? Colors.navHighlight : Colors.nav} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
