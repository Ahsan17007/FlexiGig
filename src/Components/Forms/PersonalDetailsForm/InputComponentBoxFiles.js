import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import Images from '../../../Assets/Images/Index'
import DocumentPicker from 'react-native-document-picker';
import FileOptionPopup from '../../FileOptionPopup';

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

const InputComponentBoxFiles = ({ val, setValue, fieldName, onCamOn, onCancelItem }) => {

    const [visibility, setVisibility] = useState(false)

    var vals = val?.name

    return (
        <>
            <FileOptionPopup
                visibility={visibility}
                setVisibility={setVisibility}
                onCameraButtonClick={() => { onCamOn() }}
                onFilesMenuClick={() => {
                    DocumentPicker.pickSingle({
                        //allowMultiSelection: true,
                    }).then(res => {
                        setValue(res)
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

                <View style={{ flex: 2, margin: 1, height: '100%', flexDirection: 'row', alignItems: 'center' }}>

                    <View style={{
                        borderWidth: 1,
                        borderColor: colors.Dark,
                        borderRadius: 4,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            textAlignVertical: 'center',
                            padding: 4,
                            color: colors.Dark,
                            fontFamily: Fonts.Light,
                            height: '100%',
                            flex: 8
                        }}>
                            {vals}
                        </Text>

                        {
                            (val) ?
                                <TouchableOpacity onPress={onCancelItem} style={{
                                    flex: 1,
                                    backgroundColor: colors.Light,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 4,
                                }}>
                                    <Image source={Images.Cross} style={{ height: 12, width: 12, alignSelf: 'center' }} />
                                </TouchableOpacity>
                                : <></>
                        }


                    </View>


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
        backgroundColor: colors.Light,
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
        color: colors.Dark,
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
        color: colors.Light,
    },
    button: {
        backgroundColor: colors.Primary,
        borderRadius: 16,
        paddingHorizontal: 32,
        paddingVertical: 4,
        marginHorizontal: 8
    },
    addSkillButtonText: {
        color: colors.Dark,
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
        backgroundColor: colors.Light,
        elevation: 1,
        alignSelf: 'flex-end',
        marginHorizontal: 4

    },
    CameraComponent: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    }
})