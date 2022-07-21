import { StyleSheet } from 'react-native'
import Fonts from '../../Assets/Fonts/Index';
import colors from '../../Assets/Colors/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.Light,
        paddingHorizontal: 20
    },

    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    welcome: {
        fontSize: 24,
        fontFamily: Fonts.SemiBold,
        marginTop: 50,
        color: colors.Dark
    },
    btnStyle: {
        backgroundColor: colors.Primary,
    },
    label: {
        fontSize: 16,
        fontFamily: Fonts.Regular
    },
    btnContainer: {
        marginTop: 60
    }
})


export default styles;