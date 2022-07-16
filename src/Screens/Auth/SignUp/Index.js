import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    TextInput
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import Loader from '../../../Components/Loader';
import CountrySelector from '../../../Components/CountrySelector/Index'



const SignUp = ({ navigation, route }) => {

    const { countries } = useSelector(state => state.CountriesList)


    const [countryCode, setCountryCode] = useState('')
    const [countryID, setCountryID] = useState('')
    const [select, setSelect] = useState(true)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [referalCode, setReferalCode] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const phoneRef = useRef();
    const passwordRef = useRef();
    const referalCodeRef = useRef();

    const maxLengthPhone = (countryCode.length==4) ? 9 : ((countryCode.length==3) ? 10 : ((countryCode.length==2) ? 10 : 12))

    useEffect(() => {
        if (countryCode === '' || countryID === '') {
            setSelect(true)
        }
        phoneRef.current.focus();
    }, [])


    const onCountrySelect = (country) => {
        setCountryCode(country?.attributes?.country_code)
        setCountryID(country?.id)
        console.log(countryID);
        
    }

    const registerUser = async () => {

        const phoneNumber = countryCode.concat(phone)

        if (phone == '' && password == '') {
            SimpleToast.show('All fields are mandatory')
        } else if (phone == '') {
            SimpleToast.show('Phone Number Required')
        } else if (password == '') {
            SimpleToast.show('Password Required')
        } else if (password.length <= 6) {
            SimpleToast.show('Password Should be more than 6 characters')
        } else {
            try {
                setIsLoading(true)
                const config = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        phone_number: phoneNumber,
                        password: password,
                        country_id: countryID ? countryID : '',
                        referal_code: referalCode
                    })
                };
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/signup', config)
                const registerResult = await response.json();
                console.log("registerUser-response", registerResult);
                if (response.status === 200) {
                    setIsLoading(false)
                    SimpleToast.show("Account created successfully")
                    setTimeout(() => {
                        navigation.navigate('OTP', { userId: registerResult?.data?.id, userPhone: phoneNumber })
                    }, 300);
                } else if (response.status === 401) {
                    setIsLoading(false)
                    SimpleToast.show(registerResult?.error?.message)
                } else {
                    setIsLoading(false)

                    // if (registerResult?.message == 'Phone number is already registered') {
                    //     SimpleToast.show(registerResult.message + ". Need to Verify with previous OTP")
                    //     setTimeout(() => {
                    //         navigation.navigate('OTP', { userId: registerResult?.data?.id, userPhone: phoneNumber })
                    //     }, 300);
                    // }
                    // else {
                    //     SimpleToast.show("Something went wrong. " + registerResult.message)
                    // }

                    SimpleToast.show("Something went wrong. " + registerResult.message)

                }
            } catch (error) {
                setIsLoading(false)
                console.log("registerUser-error", error);
            }

        }

    };

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{
                paddingHorizontal: 20,
                justifyContent: 'center',
                paddingBottom: 20
            }}>

                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps='always'
                    showsVerticalScrollIndicator={false} >
                    <Image
                        source={Images.Logo}
                        style={styles.loginIcon}
                    />
                    <Text style={styles.Login}>{'Signup'}</Text>
                    <Text style={styles.credentails}>{'Please fill the details to create your account'}</Text>

                    <View style={{
                        marginVertical: 24
                    }}>


                        <Text style={styles.inputtitle}>{'Country Code'}</Text>


                        <View style={[styles.non_editable, {
                            flex: 1,
                            flexDirection: 'row',
                        }]}>

                            <View style={{ justifyContent: 'center' }}>

                                <CountrySelector data={countries}
                                onCountryItemClick={(data) => {
                                    onCountrySelect(data) 
                                    
                                }} 
                                firstCountry = {(data) => {
                                    onCountrySelect(data)
                                }}
                                select = {select}
                                setSelect = {setSelect}/>

                            </View>


                        </View>

                        <Text style={styles.inputtitle}>{'Phone Number'}</Text>

                        <View style={[styles.non_editable, {
                            flexDirection: 'row',
                            alignItems: 'center',
                        }]}>

                            <View style={{}}>
                                <Text style={styles.credentails} editable={false}>{countryCode}</Text>
                            </View>

                            <View style={{ marginLeft: 2, height: 52, flexDirection: 'column', justifyContent: 'center', flex: 1 }}>

                                <TextInput
                                    value={phone}
                                    onChangeText={(val) => setPhone(val)}
                                    returnKeyType={'next'}
                                    ref={phoneRef}
                                    onSubmitEditing={() => {
                                        passwordRef.current.focus()
                                    }}
                                    keyboardType={'phone-pad'}
                                    maxLength = {maxLengthPhone}
                                    style={{ ...styles.credentails, textAlignVertical: 'center', height: '100%', borderBottomColor: 'transparent', borderBottomWidth: 0 }}
                                />
                            </View>

                        </View>

                        <Text style={[styles.inputtitle, {

                        }]}>{'Password'}</Text>

                        <InputField
                            onChangeText={val => setPassword(val)}
                            value={password}
                            returnKeyType={'next'}
                            fieldRef={passwordRef}
                            onSubmitEditing={() => {
                                referalCodeRef.current.focus()
                            }}
                            isRightIcon={true}
                            rightIcon={passwordVisible ? Images.Show : Images.Hide}
                            rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                            password={passwordVisible ? false : true}
                        />

                        <Text style={styles.inputtitle}>{'Referal Code (Optional)'}</Text>
                        <InputField
                            onChangeText={val => setReferalCode(val)}
                            value={referalCode}
                            returnKeyType={'done'}
                            fieldRef={referalCodeRef}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                            }}
                            isRightIcon={false}
                            customStyle={{}}
                        />

                    </View>

                    <AppButton
                        label={"Sign Up"}
                        style={styles.btnStyle}
                        labelStyle={styles.label}
                        onPress={() => registerUser()}
                    />

                    <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                        <Text style={styles.haveAccount}>{`Already have an account?`}</Text>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                Keyboard.dismiss()
                                navigation.navigate('SignIn')
                            }}>
                            <Text style={styles.haveAccount}>{` SignIn`}</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAwareScrollView>

            </View>

            <Loader visible={isLoading} />





            {/* <MsgModal
                visible={isMsgModal}
                msg={msg}
                onPress={() => {
                    setIsMsgModal(false)
                }}
            /> */}
        </SafeAreaView>


    )
}

export default SignUp

