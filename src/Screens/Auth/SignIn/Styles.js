import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
// import Fonts from '../../../Assets/Fonts/Index'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.White,
    },
    btnStyle:{
        backgroundColor:colors.Primary
    },
    loginIcon:{
        width:200,
        height:200
    },
    Login:{
        fontFamily:Fonts.Bold,
        fontWeight:'600',
        fontSize:24,
        color:colors.Black
    },
    credentails:{
        color:colors.Black,
        fontFamily:Fonts.Regular,
        
    }
   
})
export default styles