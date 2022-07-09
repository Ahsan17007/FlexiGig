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

    const { token } = useSelector(state => state.Auth)


    useEffect(() => {


        if (token) {
            console.log(token);
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeStack' }],
                })
            }, 1000);
        } else {
            setTimeout(() => {
                navigation.replace('OnBoarding')
            }, 1000);
        }
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
