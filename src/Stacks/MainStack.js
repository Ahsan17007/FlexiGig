import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

// --------------------------------------------------------
import Splash from '../Screens/Splash/Index'
import OnBoarding from '../Screens/OnBoarding/Index';
import SignIn from '../Screens/Auth/SignIn/Index';
import SignUp from '../Screens/Auth/SignUp/Index';
import ForgotPassword from '../Screens/Auth/ForgotPassword/Index';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import OTP from '../Screens/Auth/OTP/Index';
import AddInformation from '../Screens/AddInformation/Index';
import AddKinInfo from '../Screens/AddInformation/AddKinInfo';
import AddExperience from '../Screens/AddInformation/AddExperience';
import Profile from '../Screens/Profile/Index';


const Stack = createStackNavigator()

const MainStack = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }} initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="OTP" component={OTP} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

                <Stack.Screen name="AddInformation" component={AddInformation} />
                <Stack.Screen name="AddKinInfo" component={AddKinInfo} />
                <Stack.Screen name="AddExperience" component={AddExperience} />
                <Stack.Screen name="Profile" component={Profile} />

                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="HomeStack" component={HomeStack} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;
