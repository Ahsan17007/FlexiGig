import { StyleSheet } from 'react-native'
import Fonts from '../../../Assets/Fonts/Index'
import colors from '../../../Assets/Colors/Index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
    },
    rightEclipse: {
        height: 320,
        width: 320,
        position: 'absolute',
        top: -25,
        alignSelf: 'flex-end',
        resizeMode: 'contain'
    },
    back: {
        marginTop: 20,
        marginLeft: 12,
        height: 35,
        width: 35,
        zIndex: 1
    },
    arrow: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        tintColor: colors.mediumGrey
    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 17,
        paddingBottom:15
    },
    otp: {
        color: colors.textPrimary,
        fontSize: 28,
        fontFamily: Fonts.Medium,
        marginTop: 20,
    },
    otpGuide: {
        color: colors.textSecondary,
        fontSize: 17,
        fontFamily: Fonts.Medium,
        marginTop: 5,
    },
    authenticationIcon: {
        height: 225,
        width: 225,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    authenticationIconTwo: {
        height: 205,
        width: 205,
        marginTop:20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    code: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: Fonts.Regular,
    },
    btnStyle: {
        marginTop: 60,
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    },
    sendAgain: {
        color: colors.textPrimary,
        fontSize: 12,
        fontFamily: Fonts.Bold,
    },
    verifiedView: {
        height: 137,
        width: 137,
        borderRadius: 137,
        backgroundColor: colors.textInput,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerView: {
        height: 70,
        width: 70,
        borderRadius: 70,
        backgroundColor: colors.textPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checked:{
        height:35,
        width:35,
        resizeMode:'contain'
    }

})
export default styles

