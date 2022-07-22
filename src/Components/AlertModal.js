import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, } from "react-native";
import Modal from "react-native-modal";

import colors from '../Assets/Colors/Index';
import Fonts from "../Assets/Fonts/Index";
import Images from "../Assets/Images/Index";

const deviceWidth = Dimensions.get('window').width


const AlertModal = (props) => {

    const {
        visible,
        onRequestClose,
        msg,
    } = props
    return (
        <Modal
            isVisible={visible}
            animationIn='fadeInRight'
            animationOut='fadeOutLeft'
            deviceWidth={deviceWidth}
            animationInTiming={300}
            animationOutTimixng={300}
            onBackButtonPress={onRequestClose}
            hasBackdrop={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropColor='rgba(0,0,0,0.8)'
        >


            <View style={styles.modalContainer}>

                <Image source={Images.Verified} resizeMode='contain' style={styles.tick} />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        right: 16,
                        top: 16
                    }}
                    activeOpacity={0.8}
                    onPress={onRequestClose}
                >
                    <Image source={Images.Cross} resizeMode='contain' style={styles.cross} />
                </TouchableOpacity>
                <Text style={styles.Title}>{'Congratulations!'}</Text>
                <Text style={styles.Desc}>{msg}</Text>


            </View>




        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: 230,
        justifyContent: 'center',
        backgroundColor: colors.Light,
        borderRadius: 12,
        paddingVertical: 26

    },
    tick: {
        height: 60,
        width: 60,
        alignSelf: 'center',
    },
    cross: {
        height: 17,
        width: 17,
    },
    Title: {
        fontSize: 24,
        fontFamily: Fonts.SemiBold,
        color: colors.Secondary,
        alignSelf: 'center'
    },
    Desc: {
        fontSize: 16,
        fontFamily: Fonts.Regular,
        color: colors.Dark,
        alignSelf: 'center'
    },
});

export default AlertModal;


