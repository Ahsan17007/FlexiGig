import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../Screens/Auth/SignIn/Index'
import SignUp from '../Screens/Auth/SignUp/Index'
// import OTP from '../Screens/Auth/OTP/Index'
import ForgotPassword from '../Screens/Auth/ForgotPassword/Index'
// import ResetPassword from '../Screens/Auth/ResetPassword/Index'

const Stack = createStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            {/* 
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}

        </Stack.Navigator>
    )
}

export default AuthStack;
