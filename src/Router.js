import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import ViewScreen from './screen/ViewScreen';
import { View, Image } from 'react-native';
import UIBasicScreen from './screen/UIBasicScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Ini Icon di Tab Navigationnya
const IconTab = (props, image) => {
    const imageFocus = { tintColor: 'grey' }
    const { focused } = props
    let styleImage = focused ? {} : imageFocus
    return (
        <View>
            <Image source={image} style={styleImage} />
        </View>
    )
}

const StackNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="UIBasicScreen" component={UIBasicScreen} />
    </Stack.Navigator>
)

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: 'black',
                style: { height: 70, paddingBottom: 10 } // Ketinggian Tab
            }}>
                <Tab.Screen
                    name="Home" // ID Tab
                    component={HomeScreen} // Nama File Screen
                    options={{
                        tabBarLabel: "Beranda", // Nama Tab,
                        tabBarIcon: (props) => (
                            IconTab(props, require('../src/assets/image/ic_home.png')) // Icon Tab Diatas
                        )
                    }}
                />
                <Tab.Screen
                    name="View"
                    component={StackNavigation}
                    options={{
                        tabBarLabel: "View", // Nama Tab,
                        tabBarIcon: (props) => (
                            IconTab(props, require('../src/assets/image/ic_view.png')) // Icon Tab Diatas
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router