import { StyleSheet } from 'react-native'
import Fonts from '../../Assets/Fonts/Index';
import colors from '../../Assets/Colors/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 155,
        width: 155,
        resizeMode: 'contain'
    },
    name: {
        height: 105,
        width: 105,
        resizeMode: 'contain'
    },
    rightEclipse: {
        height: 320,
        width: 320,
        position: 'absolute',
        top: -25,
        alignSelf: 'flex-end',
        resizeMode: 'contain'
    },
    leftEclipse: {
        height: 320,
        width: 320,
        position: 'absolute',
        bottom: -25,
        alignSelf: 'flex-start',
        resizeMode: 'contain'
    },
    projectName: {
        fontSize: 50,
        fontFamily: Fonts.Rationale,
        color: colors.textPrimary,
        marginTop:30
    }
})


export default styles;