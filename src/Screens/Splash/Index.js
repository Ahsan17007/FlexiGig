import React, { useEffect } from 'react'
import {
    View,
    Image
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { countriesData } from '../../Redux/Actions/CountriesList'

import { idDocument, eduDocument, revDocument } from '../../Redux/Actions/CapturedDocument'
import { setSelectedServices, setSelectedRoutes } from '../../Redux/Actions/ServicesRoutesSelection'
import { onLogout } from '../../Redux/Actions/HasSession'
import styles from './Styles'
import Images from '../../Assets/Images/Index'
import SimpleToast from 'react-native-simple-toast'

const Splash = ({ navigation }) => {

    const { token } = useSelector(state => state.Auth)
    const dispatch = useDispatch()


    useEffect(() => {

        try {
            dispatch(idDocument(null))
            dispatch(eduDocument(null))
            dispatch(revDocument(null))
            dispatch(setSelectedServices([]))
            dispatch(setSelectedRoutes([]))
        }
        catch(e){
            dispatch(onLogout())
        }

        
        

        const mod = async () => {

            console.log('In Use Effect Splash');

            const req = await fetch('https://flexigig-api.herokuapp.com/api/v1/countries')
            const res = await req.json()

            console.log(res?.data);
            return res?.data
        }

        mod().then((data) => {
            console.log('In Use Effect Then of Splash');
            dispatch(countriesData(data))
            if (token) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeStack' }],
                })
            } else {
                navigation.replace('OnBoarding')
            }
        }).catch((err) => {
            console.log('In Use Effect Catch of Splash');
            console.log(err);
            SimpleToast.show('There\'s a problem getting app data')
            navigation.reset({
                index: 0,
                routes: [{ name: 'Splash' }],
            })
        })


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
