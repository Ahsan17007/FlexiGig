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

    const { token, loginUserData } = useSelector(state => state.Auth)
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
                setTimeout(() => {
                    setIsloading(false)
                }, 250);
                console.log("getUserDetails-response", response);
                // console.log("getUserDetails-response", response?.data?.attributes?.services);
                // console.log("getUserDetails-response", response?.data?.attributes?.routes);
                if (response && response?.error?.message != 'Invalid token') {
                    setUserData(response?.data)
                }
                else {
                    SimpleToast.show('Failed getting personal info')
                }
            }).catch(err => console.log("getUserDetails-err", err))

    }

    useEffect(() => {
        getUserDetails()
    }, [])
    return (
        <View style={styles.mainContainer}>
            {
                isLoading ?
                    <Loader visible={isLoading} />
                    :
                    <ScrollView>
                        <View style={styles.detailContainer}>
                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Name:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.firstname} ${userData?.attributes?.surname}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Phone No:'}</Text>
                                <Text style={styles.desc}>{`${loginUserData.phone ? loginUserData.phone : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Alt Phone No:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.altphone ? userData?.attributes?.altphone : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Email:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.email ? userData?.attributes?.email : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'ID No:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.identification_number ? userData?.attributes?.identification_number : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Gender:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.gender ? userData?.attributes?.gender : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Rev.Ath No:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.revenue_authority_number ? userData?.attributes?.revenue_authority_number : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Education Level:'}</Text>
                                <Text style={styles.desc}>{`${userData?.attributes?.education_level ? userData?.attributes?.education_level : '-'}`}</Text>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Services:'}</Text>
                                <View style={{ width: '60%', }}>
                                    {
                                        userData?.attributes?.services.length > 0 ?
                                            userData?.attributes?.services.map((item) => {
                                                return (
                                                    <Text style={styles.desc}>{item}</Text>
                                                )
                                            })
                                            :
                                            <Text style={styles.desc}>{'-'}</Text>
                                    }
                                </View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Routes:'}</Text>
                                <View style={{ width: '60%', }}>
                                    {
                                        userData?.attributes?.routes.length > 0 ?
                                            userData?.attributes?.routes.map((item) => {
                                                return (
                                                    <Text style={[styles.desc,]}>{item}</Text>
                                                )
                                            })
                                            :
                                            <Text style={styles.desc}>{'-'}</Text>
                                    }
                                </View>

                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                                <Text style={styles.title}>{'Joined On:'}</Text>
                                <Text style={styles.desc}>{'-'}</Text>
                            </View>
                        </View>
                    </ScrollView>
            }
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
        fontFamily: Fonts.Regular,
    }
})