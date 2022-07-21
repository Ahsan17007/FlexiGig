import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'

import DatePicker from 'react-native-date-picker'


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

const Dropdown = ({ date, setDate, fieldName, shown, isShown }) => {
    return (
        <>
            <TouchableOpacity onPress={isShown(true)}>
                <Text style={{
                    fontFamily: Fonts.Light,
                    color: colors.Dark,
                    textAlignVertical: 'center',
                }}>
                    {fieldName}
                </Text>
            </TouchableOpacity>
            <DatePicker
                modal
                open={shown}
                date={date}
                onConfirm={(date) => {
                    setDate(date)
                    isShown(false)
                }}
                onCancel={() => {
                    isShown(false)
                }}
            />
        </>

    )
}

const InputComponentDate = ({ date, setDate, fieldName, shown, isShown, maxDate }) => {

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginRight: 3,
            marginVertical:8
        }}>
            <View style={{ flex: 1 }}>
                <Title text={fieldName} />

            </View>


            <View style={{ flex: 2, borderBottomColor: colors.Dark, borderBottomWidth: 1, marginHorizontal: 2, marginLeft: 8 }}>

                <TouchableOpacity onPress={() => {
                    isShown(true)
                }}>

                    <View style={{ flexDirection: 'row', flex:1 }}>
                        <Text style={{
                            fontFamily: Fonts.Light,
                            color: colors.Dark,
                            textAlignVertical: 'center',
                            marginRight: 4
                        }}>
                            {'' + date.toISOString().split('T')[0]}
                        </Text>

                    </View>



                </TouchableOpacity>
                <DatePicker
                    title={fieldName}
                    modal={true}
                    open={shown}
                    date={date}
                    onConfirm={(date) => {
                        isShown(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        isShown(false)
                    }}
                    mode='date'
                    maximumDate={maxDate}
                    
                />

            </View>


        </View>
    )
}

export default InputComponentDate;