import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import { useSelector } from 'react-redux';

import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';
import Loader from '../../Components/Loader';


const PersonalInfo = ({ navigation }) => {

    const { token } = useSelector(state => state.Auth)
    const [isLoading, setIsloading] = useState(true)
    const [userData, setUserData] = useState('')


    const getUserDetails = async () => {
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await fetch('https://flexigig-api.herokuapp.com/api/v1/personal_details', config)
            .then(res => res.json())
            .then(response => {
                setIsloading(false)
                console.log("getUserDetails-response", response);
                setUserData(response?.data)
                // if (response && response?.error?.message != 'Invalid token') {
                //     setResp(response?.data)
                //     console.log(resp);
                // }
                // else {
                //     SimpleToast.show('Failed Getting Experiences')
                // }
            }).catch(err => console.log("getUserDetails-err", err))

    }

    useEffect(() => {
        getUserDetails()
    }, [])
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.detailContainer}>
                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Name:'}</Text>
                        <Text style={styles.desc}>{'Jack Sparrow'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Phone No:'}</Text>
                        <Text style={styles.desc}>{'+254740902556'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Alt Phone No:'}</Text>
                        <Text style={styles.desc}>{'+254740902556'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Email:'}</Text>
                        <Text style={styles.desc}>{'jack123@mail.com'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'ID No:'}</Text>
                        <Text style={styles.desc}>{'123456789'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Gender:'}</Text>
                        <Text style={styles.desc}>{'Male'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Rev.Ath No:'}</Text>
                        <Text style={styles.desc}>{'123654789'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Education Level:'}</Text>
                        <Text style={styles.desc}>{'University'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Services:'}</Text>
                        <Text style={styles.desc}>{'Designer'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Routes:'}</Text>
                        <Text style={styles.desc}>{'ABX'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Joined On:'}</Text>
                        <Text style={styles.desc}>{'April 22, 2021'}</Text>
                    </View>
                </View>
            </ScrollView>
            <Loader visible={isLoading} />
        </View>
    )
}

export default PersonalInfo;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0.71,
        backgroundColor: colors.White,
        paddingTop: 25
    },
    detailContainer: {
        paddingHorizontal: 25
    },
    title: {
        width: '40%',
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.SemiBold
    },
    desc: {
        width: '60%',
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.Regular
    }
})