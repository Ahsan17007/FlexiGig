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
        paddingBottom: 15
    },
    resetPassText: {
        color: colors.textPrimary,
        fontSize: 28,
        fontFamily: Fonts.Medium,
        marginTop: 20,
    },
    reset_guide: {
        color: colors.darkGrey,
        fontSize: 18,
        fontFamily: Fonts.Regular,
        marginTop: 5,
    },
    ResetpasswordIcon: {
        height: 170,
        width: 170,
        resizeMode: 'contain',
        marginTop: 25,
        alignSelf: 'center'
    },
    forgotText: {
        color: colors.textPrimary,
        fontSize: 13,
        fontFamily: Fonts.Medium,
        marginTop: 15,
        alignSelf: 'flex-end'
    },
    btnStyle: {
        marginTop: 57,
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
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
    checked: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    }

})
export default styles

