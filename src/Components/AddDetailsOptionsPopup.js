import React from 'react'
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../Assets/Colors/Index'
import Fonts from '../Assets/Fonts/Index'


const AddDetailsOptionPopup = ({
    visibility = false,
    setVisibility,
    message = 'Do you know by populating your Personal Details you stand a chance of getting better jobs?',
    onCancelBtnClick = () => {
        setVisibility(false)
    }, onContinueBtnClick }) => {


    return (
        <Modal visible={visibility} style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }} animationType='fade'
            presentationStyle='overFullScreen'>
            <View style={styles.mainView}>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.buttonsContainer}>

                    <TouchableOpacity style={styles.button} onPress={() => { onCancelBtnClick() }}>
                        <Text style={styles.btnText}>
                            {'Cancel'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        setVisibility(false)
                        onContinueBtnClick()
                    }}>
                        <Text style={styles.btnText}>
                            {'Continue'}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>

    )


}

export default AddDetailsOptionPopup;

const styles = StyleSheet.create({
    mainView: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 16,
        backgroundColor: colors.PrimaryContainer,
        borderWidth: 1,
        borderColor: colors.Primary,
        flexDirection: 'column',
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontFamily: Fonts.Medium,
        color: colors.Black,

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
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 8
    }
})