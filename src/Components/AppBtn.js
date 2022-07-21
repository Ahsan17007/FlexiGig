import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
//import LinearGradient from 'react-native-linear-gradient';


import colors from '../Assets/Colors/Index'
import Loader from './Loader'

const AppButton = (props) => {

    const { style, gradient, onPress, labelStyle, label } = props
    return (
        
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.4}
                style={[styles.mainContainer, style]} >
                <Text style={[styles.btnText,labelStyle]}>{label}</Text>
            </TouchableOpacity>

    )
}

export default AppButton

const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 10,
        flexDirection: 'row',
    },
    btnText: {
        color: colors.Light,
        fontSize: 15,
    },
    btnImage: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: colors.Light,
        marginRight: 12
    }
})
