import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable
} from 'react-native'
import Preference from 'react-native-preference'
import { useSelector, useDispatch } from 'react-redux'

// --------------------------------------------
import styles from './Styles'
import Images from '../../Assets/Images/Index'
import Strings from '../../Assets/Strings/Index'


const Splash = ({ navigation }) => {

    const { loginUserData } = useSelector(state => state.Auth)


    const checkAuthentication = async () => {


    }
    useEffect(() => {

        console.log(loginUserData);
        if (loginUserData) {
            console.log("if");
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeStack' }],
                })
            }, 1500);
        } else {
            navigation.replace('OnBoarding')
        }
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Image
                source={Images.RightEllipse}
                style={styles.rightEclipse}
            />
            <Image
                source={Images.logo}
                style={styles.logo}
            />
            {/* <Pressable onPress={() => navigation.navigate('OnBoarding')}>
                <Image
                    source={Images.name}
                    style={styles.name}
                />
            </Pressable> */}
            <Pressable onPress={() => navigation.navigate('OnBoarding')}>
                <Text style={styles.projectName}>{Strings.Project}</Text>
            </Pressable>

            <Image
                source={Images.LeftEllipse}
                style={styles.leftEclipse}
            />
        </View>
    )
}

export default Splash;
