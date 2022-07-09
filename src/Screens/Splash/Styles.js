import { StyleSheet } from 'react-native'
// import Fonts from '../../Assets/Fonts/Index';
import colors from '../../Assets/Colors/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.White,
        padding:'10%'
    },

    logo:{
        width:'100%',
        height:'40%',
    }
})


export default styles;