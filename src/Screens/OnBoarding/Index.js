import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'

import styles from './Styles'
import Images from '../../Assets/Images/Index'
import colors from '../../Assets/Colors/Index'
import AppButton from '../../Components/AppBtn'

const OnBoarding = ({ navigation, route }) => {

    return (
        <View style={styles.mainContainer}>

            <Image
                source={Images.Logo}
                style={styles.logo}
            />

            <Text style={styles.welcome}>{'Welcome'}</Text>

            <AppButton
                label={"Login"}
                style={[styles.btnStyle, { marginTop: 55 }]}
                labelStyle={styles.label}
                onPress={() => navigation.navigate('SignIn')}
            />
            <AppButton
                label={"Sign up"}
                style={[styles.btnStyle, { marginTop: 16 }]}
                labelStyle={styles.label}
                onPress={() => navigation.navigate('SignUp')}
            />

            {/* <Image
                source={Images.LeftEllipse}
                style={styles.leftEclipse}
            /> */}
        </View>
    )
}

export default OnBoarding;
