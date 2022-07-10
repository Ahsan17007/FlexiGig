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

    // const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(countriesData([]))
        fetch('https://flexigig-api.herokuapp.com/api/v1/countries')
            .then(r => r.json())
            .then(res => {

                const newArr = []

                res.data.map(v => {
                    getAllCountries().then((offlineCountries) => {
                        const country = offlineCountries.find((c) => (c.name === v.attributes.name));
                        console.log('country', country);

                        newArr.push(country.cca2)

                        if (newArr.length == res.data.length) {
                            if (token) {
                                setTimeout(() => {
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'HomeStack' }],
                                    })
                                }, 1000);
                            } else {
                                setTimeout(() => {
                                    navigation.replace('OnBoarding', {countries: newArr})
                                }, 500);
                            }
                        }

                        // dispatch(countriesData([...countries, country.cca2]))
                    })

                })
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
