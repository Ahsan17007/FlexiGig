import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AddExperience from './AddExperience'
import AddKinInfo from './AddKinInfo'
import AddPersonalInfo from './AddPersonalInfo'
import colors from '../../Assets/Colors/Index'
import Fonts from '../../Assets/Fonts/Index'
import MyTabBar from '../../Components/MyTabBar'

const TopTabbar = createMaterialTopTabNavigator()

const Index = () => {
    return (
        <View style={{ width: '100%', height: '100%', }}>

            <TopTabbar.Navigator screenOptions={{
                tabBarActiveTintColor: colors.Secondary,
                tabBarInactiveTintColor: colors.Dark,
                tabBarPressColor: colors.Secondary

            }} style={{

            }} tabBar={({ state, navigation }) => <MyTabBar state={state} navigation={navigation}/>}>

                <TopTabbar.Screen name='Personal Info' component={AddPersonalInfo} />
                <TopTabbar.Screen name='Next of Kin' component={AddKinInfo} />
                <TopTabbar.Screen name='Experience' component={AddExperience} />

            </TopTabbar.Navigator>

        </View>
    )
}

export default Index;

const styles = StyleSheet.create({
    tabBarTouchable: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        height: 56,
        justifyContent: 'flex-end',
        paddingHorizontal: 2
    }
})