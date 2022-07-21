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

const InputField = ({ value, fieldName, requiredStatus, setter, max, keyboardType }) => {
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
                backgroundColor: colors.Light
            }}
            placeholderTextColor={colors.Grey}
                value={value}
                onChangeText={setter}
                placeholder={fieldName + ((requiredStatus) ? '' : ' (Optional)')}
                maxLength={max}
                keyboardType={keyboardType}
                underlineColorAndroid={colors.Dark}
            />
        </View>

    )
}

const InputComponent = ({ fieldName, value, requiredStatus = true, setter, max = 64, keyboardType = 'default', ref, nextRef }) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 52
        }}>

            <Title text={fieldName} />
            <InputField {...{ fieldName, value, requiredStatus, setter, max, keyboardType, ref, nextRef }} />

        </View>
    )
}

export default InputComponent;