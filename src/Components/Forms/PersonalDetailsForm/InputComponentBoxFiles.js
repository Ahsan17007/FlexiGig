import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import { Picker } from '@react-native-picker/picker';
import InputField from '../../InputField'
import DocumentPicker from 'react-native-document-picker';


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

const ValCom = ({ value  }) => {

    var vals = ''

    value.forEach(element => {
        vals += (element?.name + ', ')
    });

    return (

        <View>
            <Text style={{
                textAlignVertical: 'center',
                padding: 4,
                color: colors.Black,
                fontFamily: Fonts.Light,
                borderWidth: 1,
                borderColor: colors.Black,
                borderRadius: 4
            }}>

                {vals}

            </Text>

        </View>

    )
}

const InputComponentBoxFiles = ({ value, setValue, fieldName }) => {

    return (

        <>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginRight: 3,
                marginVertical: 4
            }}>
                <View style={{ flex: 1, margin: 1 }}>
                    <Title text={fieldName} />

                </View>


                <View style={{ flex: 2, margin: 1 }}>

                    <ValCom {...{ value }} />

                </View>


            </View>

            <TouchableOpacity onPress={()=> {
                DocumentPicker.pickMultiple({
                    allowMultiSelection: true,
                }).then(res=>{
                    setValue(res)
                })
            }} style={styles.btn}>
                <Text style={styles.addSkillButtonText}>
                    {`Upload`}
                </Text>
            </TouchableOpacity>
        </>

    )
}

export default InputComponentBoxFiles;

const styles = StyleSheet.create({
    mainView: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 16,
        backgroundColor: colors.White,
        elevation: 2,
        borderWidth: 1,
        borderColor: colors.Primary,
        flexDirection: 'column',
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    },
    message: {
        fontFamily: Fonts.SemiBold,
        color: colors.Black,
        marginVertical: 16

    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginVertical: 2,
        marginTop: 8
    },
    btnText: {
        fontFamily: Fonts.SemiBold,
        color: colors.White,
    },
    button: {
        backgroundColor: colors.Primary,
        borderRadius: 16,
        paddingHorizontal: 32,
        paddingVertical: 4,
        marginHorizontal: 8
    },
    addSkillButtonText: {
        color: colors.Black,
        fontFamily: Fonts.Regular
    },
    btn: {
        padding: 4,
        borderColor: colors.Secondary,
        borderWidth: 1,
        width: 96,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
        elevation: 1,
        alignSelf:'flex-end',
        marginHorizontal:4

    }
})