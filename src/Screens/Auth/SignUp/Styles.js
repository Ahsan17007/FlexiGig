import { StyleSheet } from 'react-native'
import Fonts from '../../../Assets/Fonts/Index'
import colors from '../../../Assets/Colors/Index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
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
        fontFamily: Fonts.Bold,
        fontWeight: '700',
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
        marginVertical: 4,
        marginTop: 16
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
    },
    non_editable: {
        color: colors.Dark,
        height: 52,
        width: '100%',
        backgroundColor: colors.PrimaryContainer,
        padding: 8,
        textAlignVertical:'center'
    }

})
export default styles

