import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import { Picker } from '@react-native-picker/picker';


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
            }}>
                {text}
            </Text>
        </View>

    )
}


const Dropdown = ({ val, setValue, items, fieldName }) => {

    return (

        <Picker

            selectedValue={val}
            onValueChange={(itemValue, itemIndex) => {
                setValue(itemValue)
            }}
            style={{
                marginHorizontal: -10,
                color:colors.Dark
            }}
            dropdownIconColor={colors.Dark}
            mode='dropdown'>
            {
                (() => {
                    if (val === '') {
                        return <Picker.Item label={'Select ' + fieldName} value='' />
                    }
                })()

            }
            {
                items.map(e => {
                    return <Picker.Item label={e?.label} value={e?.value} />
                })
            }



        </Picker>

    )
}

const InputComponentDropdown = ({ val, setValue, items, fieldName }) => {

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginRight: 3
        }}>
            <View style={{ flex: 1, margin: 1 }}>
                <Title text={fieldName} />

            </View>


            <View style={{ flex: 2, borderBottomColor: colors.Dark, borderBottomWidth: 1, margin: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>

                <Dropdown {...{ val, setValue, items, fieldName }} />

            </View>


        </View>
    )
}

export default InputComponentDropdown;