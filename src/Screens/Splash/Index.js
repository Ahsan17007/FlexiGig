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

        const mod = async () => {


            const req = await fetch('https://flexigig-api.herokuapp.com/api/v1/countries')
            const res = await req.json()

            dispatch(countriesData(res?.data))

            if (token) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeStack' }],
                })
            } else {
                navigation.replace('OnBoarding')
            }

        }

        mod();


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
