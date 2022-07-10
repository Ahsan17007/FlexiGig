import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

// --------------------------------------------

import colors from '../Assets/Colors/Index';
import Images from '../Assets/Images/Index'
import Fonts from '../Assets/Fonts/Index';
// import Strings from '../../Assets/Strings/Index'


const EarningHistory = (props) => {

    const { Item } = props


    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.18, }}>
                <Image source={Item.image} style={styles.profilePic} />
            </View>
            <View style={{ flex: 0.82,}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.commonTextStyleOne} >{Item?.jobName}</Text>
                    <Text style={styles.commonTextStyleOne} >{Item?.price}</Text>

                </View>

                <View style={styles.descContainer}>
                    <Text numberOfLines={1} style={[styles.commonTextStyleTwo, { flex: 0.9 }]} >{Item?.desc}</Text>
                    <Text style={styles.commonTextStyleTwo} >{Item?.date}</Text>

                </View>
            </View>

        </View>
    )
}

export default EarningHistory;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        // height: 75,
        borderRadius: 10,
        backgroundColor: colors.PrimaryContainer,
        paddingHorizontal: 12,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2
    },
    commonTextStyleOne: {
        fontSize: 14,
        fontFamily: Fonts.SemiBold,
        lineHeight: 21,
        color: colors.Black
    },
    commonTextStyleTwo: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        lineHeight: 18,
        color: colors.Black
    },
    profilePic: {
        height: 48,
        width: 48,
        borderRadius: 48
    },

    name: {
        fontSize: 15.38,
        // fontWeight:'bold',
        color: colors.Black,
        opacity: 0.5,
        fontFamily: Fonts.Bold
    },




    noOfProjects: {
        fontSize: 18,
        lineHeight: 27,
        color: colors.Black
    },


})


