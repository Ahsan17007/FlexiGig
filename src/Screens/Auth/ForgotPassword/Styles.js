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
    forgotTitle: {
        color: colors.textPrimary,
        fontSize: 28,
        fontFamily: Fonts.Medium,
        marginTop: 20,
    },
    forgotGuide: {
        color: colors.textSecondary,
        fontSize: 17,
        fontFamily: Fonts.Medium,
        marginTop: 5,
    },
    ForgotPasswordIcon: {
        height: 195,
        width: 195,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 40
    },
    btnStyle: {
        marginTop: 95,
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    },

})
export default styles

