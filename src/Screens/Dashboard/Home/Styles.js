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
    recordsContainer: {
        // height: 165,
        width: '100%',
        backgroundColor: colors.PrimaryContainer,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingVertical: 21
    },
    recordTitle: {
        fontSize: 15,
        // fontWeight:'bold',
        color: colors.Black,
        lineHeight: 21,
        fontFamily: Fonts.SemiBold
    },
    projectsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        paddingHorizontal: 17
    },
    noOfProjectsContainer: {
        height: 51,
        width: 51,
        borderRadius: 51,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noOfProjects: {
        fontSize: 18,
        lineHeight: 27,
        color: colors.Black
    },
    projectCat: {
        fontSize: 13,
        lineHeight: 18,
        color: colors.Black,
        marginTop: 11
    },
    ratingContainer: {
        height: 51,
        width: 51,
        borderRadius: 51,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.Black
    },
    rating: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.Black
    },
    ratingCat: {
        fontSize: 13,
        lineHeight: 18,
        color: colors.Black,
    },
    historyTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    commonTextStyle: {
        fontSize: 14,
        lineHeight: 21,
        color: colors.Black,
        fontFamily: Fonts.SemiBold
    }

})


export default styles;