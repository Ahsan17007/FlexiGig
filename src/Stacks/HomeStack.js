import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Dashboard/Home/Index'
import Notifications from '../Screens/Dashboard/Notifications/Index';
import Universe from '../Screens/Dashboard/Universe/Index'
import Inventory from '../Screens/Dashboard/Inventory/Index'
import Academy from '../Screens/Dashboard/Academy/Index';
import Menu from '../Screens/Dashboard/Menu/Index'
import OnGoingProjects from '../Screens/Dashboard/OnGoingProjects/Index';
import ProjectDetails from '../Screens/Dashboard/ProjectDetails.js/Index';
import Images from '../Assets/Images/Index';
import colors from '../Assets/Colors/Index';
import CameraComponent from '../Components/CameraComponent';
import AddInfo from '../Screens/AddInformation/Index';
import AddKinInfo from '../Screens/AddInformation/AddKinInfo';
import AddExperienceScreen from '../Screens/AddInformation/AddExperience';
import ICamera from '../Screens/ICamera';

const HomeScreenStack = createStackNavigator()
const Tab = createBottomTabNavigator();

const HomeStackScreens = () => {
    return (
        <HomeScreenStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <HomeScreenStack.Screen
                options={{
                    headerShown: false
                }} name={'HomeScreen'} component={Home} />
            <HomeScreenStack.Screen
                options={{
                    headerShown: false
                }} name={'Notifications'} component={Notifications} />
            <HomeScreenStack.Screen
                options={{
                    headerShown: false
                }} name={'OnGoingProjects'} component={OnGoingProjects} />
            <HomeScreenStack.Screen
                options={{
                    headerShown: false
                }} name={'ProjectDetails'} component={ProjectDetails} />



            <HomeScreenStack.Screen name="AddInformation" component={AddInfo} />
            <HomeScreenStack.Screen name="AddKinInfo" component={AddKinInfo} />
            <HomeScreenStack.Screen name="AddExperience" component={AddExperienceScreen} />

            
                
        </HomeScreenStack.Navigator>
    )
}


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
                const activeColor = colors.Primary
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
                                    tintColor: state.index === 0 ? activeColor : '#CCCCCC'
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
                                    tintColor: state.index === 1 ? activeColor : '#CCCCCC'
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
                                    tintColor: state.index === 2 ? activeColor : '#CCCCCC'
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
                                    tintColor: state.index === 3 ? activeColor : '#CCCCCC'
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
                                    tintColor: state.index === 4 ? activeColor : '#CCCCCC'
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                )
            }}

        >

            <Tab.Screen
                name="Home"
                component={HomeStackScreens}
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
