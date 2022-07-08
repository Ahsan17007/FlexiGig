import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
// --------------------------------------------------------
import Splash from '../Screens/Splash/Index'
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';



const Stack = createStackNavigator()
const MainStack = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;
