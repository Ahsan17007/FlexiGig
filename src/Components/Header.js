import React, { useState, useRef } from 'react'
import {

    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Keyboard,
    Image,
    StyleSheet

} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast'
// import { useSelector, useDispatch } from 'react-redux'
// -------------------------------------
import Images from '../Assets/Images/Index'
import colors from '..//Assets/Colors/Index'
import Fonts from '../Assets/Fonts/Index'


const Header = (props) => {

    const { headerTitle, leftIcon, leftIconStyle, rightIcon, rightIconOnPress, onLeftIconPress } = props

    return (

        <View style={styles.mainContainer}>
            {headerTitle &&
                <Text style={styles.title}>{headerTitle}</Text>
            }
            {
                rightIcon &&
                <TouchableOpacity style={styles.rightIcon} onPress={rightIconOnPress}>
                    <Image source={Images.notification}
                        resizeMode='contain'
                        style={{ height: 21, width: 21, }} />
                </TouchableOpacity>
            }

            {
                leftIcon &&
                <TouchableOpacity style={{ position: 'absolute', left: 23, }} activeOpacity={0.4} onPress={onLeftIconPress}>
                    <Image source={leftIcon}
                        resizeMode='contain'
                        style={[styles.leftIcon, leftIconStyle]} />
                </TouchableOpacity>
            }
        </View>


    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 23,
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.Medium,
        color: colors.white
    },
    rightIcon: {
        position: 'absolute',
        right: 23,
    },
    leftIcon: {
        height: 21,
        width: 21,
        tintColor: colors.white
    },
})

export default Header;

