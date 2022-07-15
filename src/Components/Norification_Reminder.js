import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

import { useState, useCallback } from 'react';
// --------------------------------------------

import colors from '../Assets/Colors/Index';
import Images from '../Assets/Images/Index'
import Fonts from '../Assets/Fonts/Index';
// import Strings from '../../Assets/Strings/Index'


const Notification_Reminders = (props) => {

    const { Item } = props

    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);

    const toggleNumberOfLines = () => {
        setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length > 1);
        // console.log(e.nativeEvent.lines);
    }, []);

    return (
        <View style={styles.mainContainer}>


            <Text style={styles.Title} >{Item?.title}</Text>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 1}
                style={styles.Desc}>
                {Item?.desc}
            </Text>

            {
                lengthMore ? <Text
                    onPress={toggleNumberOfLines}
                    style={{ right: 0, marginTop: 5, alignSelf: 'flex-end', color: colors.Secondary }}>{textShown ? 'Close' : 'View Details'}</Text>
                    : null
            }
        </View>
    )
}

export default Notification_Reminders;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        // height: 65,
        borderRadius: 10,
        backgroundColor: colors.White,
        borderWidth: 0.8,
        borderColor: colors.Black,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    Title: {
        fontSize: 14,
        fontFamily: Fonts.SemiBold,
        lineHeight: 21,
        color: colors.Black,
    },
    Desc: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        lineHeight: 21,
        color: colors.Black,
    
    },

})


