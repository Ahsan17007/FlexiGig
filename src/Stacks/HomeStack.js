import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from '../Screens/Dashboard/Home/Index'
import Universe from '../Screens/Dashboard/Universe/Index'
import Inventory from '../Screens/Dashboard/Inventory/Index'
import Academy from '../Screens/Dashboard/Academy/Index';
import Menu from '../Screens/Dashboard/Menu/Index'

import Images from '../Assets/Images/Index';
import colors from '../Assets/Colors/Index';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();




const HomeStack = ({ navigation }) => {

    return (
        <Tab.Navigator

            initialRouteName="Home"
            activeColor="#fff"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => {
                const { navigation, state } = props
                return (

                   
                        <View style={{
                            flexDirection: "row",
                            height: 80,
                            width: "100%",
                            // elevation: 5,
                            backgroundColor: colors.PrimaryContainer
                        }}>
                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => { navigation.navigate("Home") }}>
                                <Image source={Images.Home}
                                    resizeMode='contain'
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: state.index === 0 ? colors.Black : '#CCCCCC'
                                    }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => { navigation.navigate("Universe") }}>
                                <Image
                                    source={Images.Universe}
                                    resizeMode='contain'
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: state.index === 1 ? colors.Black : '#CCCCCC'
                                    }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { navigation.navigate("Inventory") }}
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={Images.Inventory}
                                    resizeMode='contain'
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: state.index === 2 ? colors.Black : '#CCCCCC'
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate("Academy") }}
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={Images.Academy}
                                    resizeMode='contain'
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: state.index === 3 ? colors.Black : '#CCCCCC'
                                    }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { navigation.navigate("Menu") }}
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={Images.Menu}
                                    resizeMode='contain'
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: state.index === 4 ? colors.Black : '#CCCCCC'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                 
                )
            }}

        >

            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Universe"
                component={Universe} />
            <Tab.Screen
                name="Inventory"
                component={Inventory} />
            <Tab.Screen
                name="Academy"
                component={Academy} />
            <Tab.Screen
                name="Menu"
                component={Menu} />

        </Tab.Navigator>


    )
}



export default HomeStack;
