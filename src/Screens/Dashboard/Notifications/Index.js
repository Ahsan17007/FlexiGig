import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,

} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Images from '../../../Assets/Images/Index'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import MyTabBar from '../../../Components/MyTabBar'
import Notifications from './Notifications'
import Reminders from './Reminder'
const TopTabbar = createMaterialTopTabNavigator()

const earningHistory = [
    {
        id: '1',
        image: Images.DummyUser,
        jobName: 'Bug Fixes',
        desc: 'I want to resolve the bugs in my app',
        price: '$80',
        date: '07 July, 2022'
    },
    {
        id: '2',
        image: Images.DummyUser,
        jobName: 'Develop App',
        desc: 'I want to create an app in react native, the idea is very simple',
        price: '$80',
        date: '07 July, 2022'
    }, {
        id: '3',
        image: Images.DummyUser,
        jobName: 'Bug Fixes',
        desc: 'I want to resolve the bugs in my app',
        price: '$80',
        date: '07 July, 2022'
    },
]


const Index = ({ navigation }) => {

    const [visibility, setVisibility] = useState([true, false])

    const { token } = useSelector(state => state.Auth)









    return (
        <View style={styles.mainContainer}>

            <View style={styles.innerContainer}>

                <>
                    <View style={styles.topHeaderContainer}>
                        <View style={styles.userInfoContainer}>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.profilePic} onPress={() => {
                                    navigation.navigate('Profile')
                                }}>
                                <Image source={Images.DummyUser} style={styles.profilePic} />
                            </TouchableOpacity>

                            <View style={{ marginLeft: 12 }}>
                                <Text style={styles.welcomeText}>{'Welcome'}</Text>
                                <Text style={styles.name}>{'Jack Sparrow'}</Text>
                            </View>
                        </View>

                    </View>
                </>

                <View style={{ width: '100%', height: '100%', }}>
                    <TopTabbar.Navigator screenOptions={{
                        tabBarActiveTintColor: colors.Secondary,
                        tabBarInactiveTintColor: colors.Black,
                        tabBarPressColor: colors.Secondary

                    }} style={{

                    }} tabBar={({ state, navigation }) => <MyTabBar state={state} navigation={navigation} />}>

                        <TopTabbar.Screen name='Notifications' component={Notifications} />
                        <TopTabbar.Screen name='Reminders' component={Reminders} />

                    </TopTabbar.Navigator>

                </View>
                
            </View>


        </View>
    )
}

export default Index;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.White
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 30,
        backgroundColor: colors.White
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    topHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 28
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePic: {
        height: 55,
        width: 55,
        borderRadius: 55
    },
    welcomeText: {
        fontSize: 12,
        color: colors.Black,
        fontFamily: Fonts.Bold
    },
    name: {
        fontSize: 15.38,
        color: colors.Black,
        opacity: 0.5,
        fontFamily: Fonts.Regular,
    },

})