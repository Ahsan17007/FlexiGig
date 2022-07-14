import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import CountrySelector from '../../../Components/CountrySelector/Index'
import AddDetailsOptionPopup from '../../../Components/AddDetailsOptionsPopup'



const Universe = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>

            <Text>Testing Components On Universe</Text>
            
        </View>
    )
}

export default Universe;
