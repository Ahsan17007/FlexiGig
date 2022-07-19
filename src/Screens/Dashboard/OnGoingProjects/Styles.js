import { StyleSheet } from 'react-native'
import Fonts from '../../../Assets/Fonts/Index';
import colors from '../../../Assets/Colors/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.White
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 30,
        backgroundColor: colors.White
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    topHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 28
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePic: {
        height: 55,
        width: 55,
        borderRadius: 55
    },
    welcomeText: {
        fontSize: 12,
        // fontWeight:'bold',
        color: colors.Black,
        fontFamily: Fonts.Bold
    },
    name: {
        fontSize: 15.38,
        // fontWeight:'bold',
        color: colors.Black,
        opacity: 0.5,
        fontFamily: Fonts.Regular
    },
    bellIcon: {
        width: 23,
        height: 23,
        resizeMode: 'contain'
    },
    emptyList: {
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.Regular,
        alignSelf: 'center',
        marginTop: '50%',
    }

})


export default styles;