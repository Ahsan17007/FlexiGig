import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import Preference from 'react-native-preference';

// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import colors from '../../../Assets/Colors/Index';
import { TextInput } from 'react-native-gesture-handler';
import { CountryModalProvider } from 'react-native-country-picker-modal';
import CountryPicker from 'react-native-country-picker-modal'



const SignUp = ({ navigation }) => {


    const [countryCode, setCountryCode] = useState('+254')
    const [country, setCountry] = useState('KE')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [referalCode, setReferalCode] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [popupVisibility, setPopupVisibility] = useState(false)
    const [isMsgModal, setIsMsgModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const phoneRef = useRef();
    const passwordRef = useRef();
    const referalCodeRef = useRef();

    const registerBtnClick = async () => {
        //call-api 
        //handle
        const phoneNumber = countryCode.concat(phone)
    }

    const onCountrySelect = (country) => {
        console.log(country);
        setCountryCode("+" + country.callingCode)
        setCountry(country.cca2)
    }

    const registerUser = () => {

        let bodyData = {

            phone_number: phone,
            password: password,
            country_id: '319962a1-bedd-48ea-b371-5aaef626a2dc',
        }

        if (phone == '' && password == '') {
            SimpleToast.show('All fields are mandatory')
        } else if (phone == '') {
            SimpleToast.show('Phone Number Required')
        } else if (password == '') {
            SimpleToast.show('Password Required')
        } else if (password.length < 6) {
            SimpleToast.show('Password should be 8 characters')
        } else {
            setIsLoading(true)
            // return false
            client.post('/signup', bodyData).then(response => {
                console.log('registerUser-responseJson', response.data)
                // if (response.data.status == 200) {
                //     Keyboard.dismiss()
                //     SimpleToast.show('Verify your email')
                //     dispatch(onRegister({
                //         name: name,
                //         email: email,
                //         password: password,
                //         confirm_password: confirmPass,
                //         phone_number: number,
                //         address: address,
                //         state: state,
                //         city: city,
                //         country: country,
                //         zip: zip,
                //         dob: dob
                //     }))
                //     setTimeout(() => {
                //         navigation.navigate('OTP')
                //     }, 300);
                // } else {
                //     Keyboard.dismiss()
                //     setAlertMessage(response.data.messgae)
                //     setTimeout(() => {
                //         setAlertModal(true)
                //     }, 300);
                // }
            }).catch(error => {
                SimpleToast.show('Something went wrong')
                console.log('registerUser-error', error)
            }).finally(() => {
                setIsLoading(false)
            })
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

                                <CountryModalProvider>
                                    <CountryPicker
                                        countryCode={country}
                                        countryCodes={['KE', 'PK']}
                                        withFilter={true}
                                        withFlag={true}
                                        withCountryNameButton={false}
                                        withCallingCodeButton={true}
                                        withAlphaFilter={true}
                                        withCallingCode={true}
                                        withEmoji={true}
                                        onSelect={onCountrySelect}
                                        visible={popupVisibility}
                                        onOpen={() => setPopupVisibility(true)}
                                        onClose={() => {
                                            setPopupVisibility(false)
                                        }}

                                    />
                                </CountryModalProvider>

                            </View>

                            {/* <View style={{ marginLeft: 8, backgroundColor:'pink' }}>

                                <TextInput
                                    value={phone}
                                    onChangeText={(val) => setPhone(val)}
                                    returnKeyType={'next'}
                                    fieldRef={phoneRef}
                                    onSubmitEditing={() => {
                                        passwordRef.current.focus()
                                    }}
                                    keyboardType={'phone-pad'}
                                />
                            </View> */}


                        </View>

                        <Text style={styles.inputtitle}>{'Phone Number'}</Text>
                        {/* <TextInput
                            value={phone}
                            onChangeText={(val) => setPhone(val)}
                            returnKeyType={'next'}
                            fieldRef={phoneRef}
                            onSubmitEditing={() => {
                                passwordRef.current.focus()
                            }}
                            keyboardType={'phone-pad'}
                        /> */}

                        <InputField
                            onChangeText={val => setPhone(val)}
                            value={phone}
                            returnKeyType={'next'}
                            fieldRef={phoneRef}
                            onSubmitEditing={() => {
                                passwordRef.current.focus()
                            }}
                            keyBoardType={'number-pad'}
                        />
                        {/* <Text style={styles.non_editable}>
                            {countryCode.concat(phone)}
                        </Text> */}



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
                            customStyle={{}}
                        />

                    </View>

                    <AppButton
                        gradient={true}
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

