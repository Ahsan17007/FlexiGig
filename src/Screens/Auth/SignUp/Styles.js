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
    signupText: {
        color: colors.textPrimary,
        fontSize: 28,
        fontFamily: Fonts.Medium,
        marginTop: 20,
    },
    create: {
        color: colors.darkGrey,
        fontSize: 18,
        fontFamily: Fonts.Regular,
        marginTop: 5,
    },
    btnStyle: {
        marginTop: 21,
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    },
    haveAccount: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: Fonts.Light,
    },
    signIn: {
        color: colors.textPrimary,
        fontSize: 12,
        fontFamily: Fonts.Bold,
    },
    OR: {
        color: colors.textSecondary,
        fontSize: 17,
        fontFamily: Fonts.Regular,
        marginTop: 13,
        alignSelf: 'center'
    },
    social: {
        color: '#323232',
        fontSize: 12,
        fontFamily: Fonts.Light,
        marginTop: 2,
        alignSelf: 'center'
    },
    outer: {
        height: 55,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        height: 50,
        width: 50,
        borderRadius: 45,
        backgroundColor: colors.textInput,
        justifyContent:'center',
        alignItems:'center'
    },
    socialIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
})
export default styles

