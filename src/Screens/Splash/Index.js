import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Styles'
import Images from '../../Assets/Images/Index'
import colors from '../../Assets/Colors/Index'

const Splash = ({ navigation }) => {

    // const { loginUserData } = useSelector(state => state.Auth)


    useEffect(() => {


        // if (loginUserData) {
        //     console.log("if");
        //     setTimeout(() => {
        //         navigation.reset({
        //             index: 0,
        //             routes: [{ name: 'HomeStack' }],
        //         })
        //     }, 1500);
        // } else {
        //     navigation.replace('OnBoarding')
        // }

        setTimeout(() => {
            navigation.replace('OnBoarding')
        }, 1500);
    }, [])

    return (
        <View style={styles.mainContainer}>

            <Image
                source={Images.Logo}
                style={styles.logo}
            />

            {/* <Image
                source={Images.LeftEllipse}
                style={styles.leftEclipse}
            /> */}
        </View>
    )
}

export default Splash;
