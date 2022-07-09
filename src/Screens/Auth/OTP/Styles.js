import { StyleSheet } from 'react-native'
import Fonts from '../../../Assets/Fonts/Index'
import colors from '../../../Assets/Colors/Index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.White,
    },
    btnStyle: {
        backgroundColor: colors.Primary,
        color: colors.Black,
        marginTop:20
    },
    loginIcon: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    Verify: {
        fontFamily: Fonts.Bold,
        fontWeight: '700',
        fontSize: 24,
        color: colors.Black
    },
    credentails: {
        color: colors.Black,
        fontFamily: Fonts.Regular,

    },
    inputtitle: {
        color: colors.Black,
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
        color: colors.Black,
        fontFamily: Fonts.Regular,

    },
    label: {
        color: colors.Black,
        fontWeight: '500',
        fontSize: 16
    },
    haveAccount: {
        color: colors.Black,
        fontFamily: Fonts.Medium,
        fontSize: 14
    },
    non_editable: {
        color: colors.Black,
        height: 52,
        width: '100%',
        backgroundColor: colors.Primary,
        padding: 8,
        textAlignVertical: 'center'
    }

})
export default styles

