import { Dimensions, StyleSheet } from 'react-native'
import Fonts from '../../../Assets/Fonts/Index';
import colors from '../../../Assets/Colors/Index';

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.Light
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 30,
        backgroundColor: colors.Light
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
        color: colors.Dark,
        fontFamily: Fonts.Bold
    },
    name: {
        fontSize: 15.38,
        // fontWeight:'bold',
        color: colors.Dark,
        opacity: 0.5,
        fontFamily: Fonts.Regular
    },
    bellIcon: {
        width: 23,
        height: 23,
        resizeMode: 'contain'
    },
    projectDetailContainer: {
        width: '100%',
        // height: 85,
        //maxHeight: height / 1.35,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: colors.Light,
        borderWidth: 1,
        borderColor: colors.Primary,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    title: {
        width: '30%',
        fontSize: 14,
        color: colors.Dark,
        fontFamily: Fonts.SemiBold
    },
    desc: {
        width: '70%',
        fontSize: 14,
        color: colors.Dark,
        fontFamily: Fonts.Regular
    },
    BtnContainer: {
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 35
    },
    actionBtn: {
        height: 30,
        width: 100,
        borderRadius: 100,
        backgroundColor: colors.Primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 14,
        color: colors.Light,
        fontFamily: Fonts.Medium
    }

})


export default styles;