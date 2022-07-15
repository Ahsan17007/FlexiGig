import React, { useEffect } from 'react'
import {
    View,
    Image
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { countriesData } from '../../Redux/Actions/CountriesList'

import styles from './Styles'
import Images from '../../Assets/Images/Index'

const Splash = ({ navigation }) => {

    const { token } = useSelector(state => state.Auth)
    const dispatch = useDispatch()


    useEffect(() => {


        (async () => {


            const req = await fetch('https://flexigig-api.herokuapp.com/api/v1/countries')
            const res = await req.json()

            dispatch(countriesData(res?.data))

            if (token) {
                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'HomeStack' }],
                    })
                }, 500);
            } else {
                setTimeout(() => {
                    navigation.replace('OnBoarding')
                }, 500);
            }

        })()


    }, [])




    return (
        <View style={styles.mainContainer}>

            <Image
                source={Images.Logo}
                style={styles.logo}
            />

        </View>
    )
}

export default Splash;
