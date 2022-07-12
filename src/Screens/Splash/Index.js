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
import { countriesData } from '../../Redux/Actions/CountriesList'

import styles from './Styles'
import Images from '../../Assets/Images/Index'
import colors from '../../Assets/Colors/Index'
import { getAllCountries } from 'react-native-country-picker-modal'

const Splash = ({ navigation }) => {

    const { token } = useSelector(state => state.Auth)
    // const { countries } = useSelector(state => state.CountriesList)

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(countriesData([]))
        fetch('https://flexigig-api.herokuapp.com/api/v1/countries')
            .then(r => r.json())
            .then(res => {

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

/*
                const newArr = []
                let finalObj = ''
                res.data.map(a => {
                    getAllCountries().then((offlineCountries) => {
                        const country = offlineCountries.find((b) => (b.name === a.attributes.name));
                        console.log('country', country);

                        newArr.push(country.cca2)

                        if (newArr.length == res.data.length) {
                            dispatch(countriesData(newArr))
                            if (token) {
                                setTimeout(() => {
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'HomeStack' }],
                                    })
                                }, 1000);
                            } else {
                                setTimeout(() => {
                                    navigation.replace('OnBoarding')
                                }, 500);
                            }
                        }

                    })

                })

                */
            })



    }, [])

    return (
        <View style={styles.mainContainer}>

            <Image
                source={Images.Logo}
                style={styles.logo}
            />

            {/* <Image
                source={Images.LeftEllipse}
                style={styles.leftEclipse}
            /> */}
        </View>
    )
}

export default Splash;
