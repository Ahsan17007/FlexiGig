import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Modal, TouchableOpacity, Dimensions } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import DocumentPicker from 'react-native-document-picker';
import FileOptionPopup from '../../FileOptionPopup';
import CameraComponent from '../../CameraComponent';

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

const ValCom = ({ value }) => {

    // var n = [];
    // n = (value?.uri?.split('/')) ? value?.uri?.split('/') : n;

    var vals = value?.name
    return (

        <View style={{ height: '100%' }}>
            <Text style={{
                textAlignVertical: 'center',
                padding: 4,
                color: colors.Black,
                fontFamily: Fonts.Light,
                borderWidth: 1,
                borderColor: colors.Black,
                borderRadius: 4,
                height: '100%'
            }}>

                {vals}

            </Text>

        </View>

    )
}

const InputComponentBoxFiles = ({ value, setValue, fieldName, isCam, setIsCam, onCamOn }) => {

    const [visibility, setVisibility] = useState(false)

    return (
        <>
            <FileOptionPopup
                visibility={visibility}
                setVisibility={setVisibility}
                onCameraButtonClick={()=>{onCamOn()}}
                onFilesMenuClick={() => {
                    DocumentPicker.pickSingle({
                        //allowMultiSelection: true,
                    }).then(res => {
                        setValue(res)
                        console.log('-------- File URI --------');
                        console.log(res.uri);
                    })
                }}
            />


            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginRight: 3,
                marginVertical: 4
            }}>
                <View style={{ flex: 1, margin: 1 }}>
                    <Title text={fieldName} />

                </View>


                <View style={{ flex: 2, margin: 1, height: '100%' }}>

                    <ValCom {...{ value }} />

                </View>


            </View>

            <TouchableOpacity onPress={() => {

                setVisibility(true)

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
        alignSelf: 'flex-end',
        marginHorizontal: 4

    },
    CameraComponent:{
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    }
})