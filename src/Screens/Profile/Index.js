import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Experience from './Experience'
import KinInfo from './KinInfo'
import PersonalInfo from './PersonalInfo'
import colors from '../../Assets/Colors/Index'
import Images from '../../Assets/Images/Index'
import Fonts from '../../Assets/Fonts/Index'
import MyTabBar from '../../Components/MyTabBar'

const TopTabbar = createMaterialTopTabNavigator()

const Profile = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topHeaderContainer}>
                <Text style={styles.Title}>{'My Profile'}</Text>
                <Image source={Images.Notification} style={styles.bellIcon} />
            </View>
            <View style={{ marginTop: 25, alignItems:'center', alignSelf: 'center' }}>
                <Image source={Images.DummyUser} style={styles.profilePic} />
                <Text style={styles.name}>{'Jack Sparrow'}</Text>
            </View>


            <View style={{ width: '100%', height: '100%', }}>
                <TopTabbar.Navigator screenOptions={{
                    tabBarActiveTintColor: colors.Secondary,
                    tabBarInactiveTintColor: colors.Black,
                    tabBarPressColor: colors.Secondary

                }} style={{

                }} tabBar={({ state, navigation }) => <MyTabBar state={state} navigation={navigation} />}>

                    <TopTabbar.Screen name='Personal Info' component={PersonalInfo} />
                    <TopTabbar.Screen name='Next Of Kin' component={KinInfo} />
                    <TopTabbar.Screen name='Experience' component={Experience} />

                </TopTabbar.Navigator>

            </View>
        </View>

    )
}


export default Profile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.White
    },
    topHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        // marginBottom: 28,
        backgroundColor: colors.White
    },
    bellIcon: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
        position: 'absolute',
        right: 16
    },
    Title: {
        fontSize: 15,
        color: colors.Black,
        fontFamily: Fonts.SemiBold
    },
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    name: {
        fontSize: 15.38,
        color: colors.Black,
        opacity: 0.5,
        fontFamily: Fonts.Regular,
        marginTop:5
    },
})