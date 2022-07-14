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
                color: colors.Black,
                textAlignVertical: 'center',
            }}>
                {text}
            </Text>
        </View>

    )
}


const Dropdown = ({ value, setValue, items }) => {

    return (

        <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => {
                setValue(itemValue)
            }}
            mode='dropdown'>
                {
                    (()=>{
                        if (value==='') {
                            return <Picker.Item label={'Select Gender'} value={''} />
                        }
                    })()
                    
                }
                {
                    items.map(e=>{
                        return <Picker.Item label={e?.label} value={e?.value} />
                    })
                }

        </Picker>

    )
}

const InputComponentDropdown = ({ value, setValue, items, fieldName }) => {

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginRight:3
        }}>
            <View style={{ flex: 1 }}>
                <Title text={fieldName} />

            </View>


            <View style={{ flex: 2, borderBottomColor: colors.Black, borderBottomWidth:2, marginHorizontal:2, marginLeft:8 }}>

                <Dropdown value={value} setValue={setValue} items={items} />

            </View>


        </View>
    )
}

export default InputComponentDropdown;