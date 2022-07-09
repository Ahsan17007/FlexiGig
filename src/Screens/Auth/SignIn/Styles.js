import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.White,
    },
    btnStyle:{
        backgroundColor:colors.Primary,
        color:colors.Black
    },
    loginIcon:{
        width:'50%',
        height:'70%',
        alignSelf:'center'
    },
    Login:{
        fontFamily:Fonts.Bold,
        fontWeight:'700',
        fontSize:24,
        color:colors.Black
    },
    credentails:{
        color:colors.Black,
        fontFamily:Fonts.Regular,
        
    }, 
    inputtitle:{
        color:colors.Black,
        fontFamily:Fonts.Regular,
        marginVertical:4
    },
    forgot:{
        margin:4,
        marginVertical:6,
        alignSelf:'flex-end',

    },
    forgotText: {
        color:colors.Black,
        fontFamily:Fonts.Regular,
        
    }, 
    label:{
        color:colors.Black,
        fontWeight:'500',
        fontSize:16
    },
    haveAccount:{
        color:colors.Black,
        fontFamily:Fonts.Medium,
        fontSize:14
    }
   
})
export default styles