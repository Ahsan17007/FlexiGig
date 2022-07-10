import { StyleSheet } from 'react-native'
// import Fonts from '../../Assets/Fonts/Index';
import colors from '../../../Assets/Colors/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.White
    },
    btnStyle: {
        backgroundColor: colors.Primary,
        color: colors.Black,
        position: 'absolute',
        bottom: 20
    },
    label: {
        fontWeight: '500',
        fontSize: 16,
    },
})


export default styles;