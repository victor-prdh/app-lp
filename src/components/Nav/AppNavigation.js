import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsScreen } from '../../screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeStack from './HomeStack';


export default function AppNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Tab.Navigator>
                <Tab.Screen name="HomeStack" component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        )
                    }}
                />

                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Paramètres',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings" color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
