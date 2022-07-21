import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.Light,
    },
    btnStyle: {
        backgroundColor: colors.Primary,
        color: colors.Dark
    },
    loginIcon: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    Login: {
        fontFamily: Fonts.SemiBold,
        fontSize: 24,
        color: colors.Dark
    },
    credentails: {
        color: colors.Dark,
        fontFamily: Fonts.Regular,

    },
    inputtitle: {
        color: colors.Dark,
        fontFamily: Fonts.Regular,
        marginVertical: 4
    },
    forgot: {
        margin: 4,
        marginVertical: 6,
        alignSelf: 'flex-end',

    },
    forgotText: {
        color: colors.Dark,
        fontFamily: Fonts.Regular,

    },
    label: {
        fontWeight: '500',
        fontSize: 16
    },
    haveAccount: {
        color: colors.Dark,
        fontFamily: Fonts.Medium,
        fontSize: 14
    }

})
export default styles