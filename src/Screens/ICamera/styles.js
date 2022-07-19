import React from 'react';
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';
import { StyleSheet } from 'react-native';
import Images from '../../Assets/Images/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.gray700,
    },
    iconsview: {
        width: "90%",
        // height: 50,
        alignSelf: 'center',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'pink',
        alignItems:'center'
    },
    flashLight: {
        width: 30,
        height: 30,
        position:'absolute',
        right:50,
        marginTop: 10
    },
    ChangeCamera: {
        width: 30,
        height: 30,
    },
    CancelVideo: {
        width: 30,
        height: 30,
    },
    startVideo: {

        width: 60,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100

    },
    imgvideotext: {
        // width: "100%",
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
    },
    videoButton: {
        width: 85,
        height: 30,
        backgroundColor: colors.white,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraButton: {
        width: 86,
        height: 30,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center'
    }


})

export default styles;