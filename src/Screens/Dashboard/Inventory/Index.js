import React, { useEffect } from 'react'
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
// import Strings from '../../Assets/Strings/Index'


const Inventory = ({ navigation }) => {




    return (
        <View style={styles.mainContainer}>

            <Text>Inventory</Text>
        </View>
    )
}

export default Inventory;
