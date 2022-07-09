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
import AppButton from '../../../Components/AppBtn'
import Loader from '../../../Components/Loader'
import { onLogout } from '../../../Redux/Actions/HasSession'

const Menu = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const logOut = () => {
        setIsLoading(true)
        dispatch(onLogout());
        setTimeout(() => {
            setIsLoading(false)
            navigation.reset({
                index: 0,
                routes: [{ name: 'SignIn' }],
            });
        }, 250);

    }

    return (
        <View style={styles.mainContainer}>

            <View style={{
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingBottom: 20
            }}>
                <AppButton
                    label={"Logout"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                    onPress={() => logOut()}
                />
            </View>

            <Loader visible={isLoading} />
        </View>
    )
}

export default Menu;
