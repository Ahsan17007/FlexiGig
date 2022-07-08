import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


import colors from '../Assets/Colors/Index'
import Loader from './Loader'

const AppButton = (props) => {

    const { style, gradient, onPress, labelStyle, label } = props
    return (

        gradient ?
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.4}
                style={[styles.mainContainer, style]} >
                <LinearGradient
                    onPress={() => alert('hi')}
                    colors={[colors.gradientOne, colors.gradientTwo]}
                    start={{ x: 0.9, y: 0.1 }} end={{ x: 0, y: 0 }}
                    // useAngle={true}
                    // angle={45}
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={labelStyle}>{label}</Text>
                </LinearGradient>
            </TouchableOpacity>
            :
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.4}
                style={[styles.mainContainer, style]} >
                <Text style={labelStyle}>{label}</Text>
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
        borderRadius: 10,
        flexDirection: 'row',
    },
    btnText: {
        color: colors.white,
        fontSize: 15,
    },
    btnImage: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: colors.white,
        marginRight: 12
    }
})
