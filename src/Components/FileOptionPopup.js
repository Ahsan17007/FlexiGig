import React from 'react'
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../Assets/Colors/Index'
import Fonts from '../Assets/Fonts/Index'


const FileOptionPopup = ({
    visibility = false,
    setVisibility,
    message = 'From where do you want to upload the document?',
    onFilesMenuClick,
    onCameraButtonClick }) => {


    return (
        <Modal
            visible={visibility}
            style={{
                alignSelf: 'center',
                justifyContent: 'center', 
                alignItems: 'center',
            }}

            animationType='fade'
            transparent={true}>

            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.25)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.mainView}>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonsContainer}>

                        <TouchableOpacity style={styles.button} onPress={() => { 
                            onFilesMenuClick() 
                            setVisibility(false)
                        }}>
                            <Text style={styles.btnText}>
                                {'Files'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => {
                            setVisibility(false)
                            onCameraButtonClick()
                        }}>
                            <Text style={styles.btnText}>
                                {'Camera'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </Modal>
    )


}

export default FileOptionPopup;

const styles = StyleSheet.create({
    mainView: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 1,
        backgroundColor: colors.White,
        elevation: 1,
        borderWidth: 0.5,
//        borderColor: colors.Primary,
        flexDirection: 'column',
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    },
    message: {
        fontFamily: Fonts.Medium,
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
        color: colors.Black,
        textAlign:'center'
    },
    button: {
        backgroundColor: colors.White,
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 8,
        width:94,
        borderWidth:1
    }
})