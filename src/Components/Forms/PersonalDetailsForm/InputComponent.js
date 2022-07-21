import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'

const Title = ({ text }) => {
    return (
        <View style={{
            flex: 1,
            margin: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                fontFamily: Fonts.SemiBold,
                color: colors.Dark,
                textAlignVertical: 'center',
            }}>{text}</Text>
        </View>

    )
}

const InputField = ({ val, fieldName, requiredStatus, setter, max, keyboardType, currentRef, nextRef, multiline }) => {
    return (
        <View style={{
            flex: 2,
            margin: 1,
            justifyContent: 'center'
        }}>
            <TextInput style={{
                fontFamily: Fonts.SemiBold,
                color: colors.Dark,
                textAlignVertical: 'center',
                borderBottomColor: colors.Dark,
                borderBottomWidth:1,
                backgroundColor: colors.Light
            }}
            placeholderTextColor={colors.Grey}
                value={val}
                onChangeText={setter}
                placeholder={fieldName + ((requiredStatus) ? '' : ' (Optional)')}
                maxLength={max}
                keyboardType={keyboardType}
                
                multiline={multiline}
                

            />
        </View>

    )
}

const InputComponent = ({ fieldName, val, requiredStatus = true, setter, max = 64, keyboardType = 'default', ref, nextRef, multiline = false }) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 52
        }}>

            <Title text={fieldName} />
            <InputField {...{ fieldName, val, requiredStatus, setter, max, keyboardType, ref, nextRef, multiline }} />

        </View>
    )
}

export default InputComponent;