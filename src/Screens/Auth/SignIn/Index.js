import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    Keyboard,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import Preference from 'react-native-preference';
import { useDispatch, useSelector } from 'react-redux';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal'
import { CountryModalProvider } from 'react-native-country-picker-modal';
// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import Loader from '../../../Components/Loader';
import { client } from '../../../Api/config';
import { userToken, loggedInData, loggedInNumber } from '../../../Redux/Actions/HasSession';



const SignIn = ({ navigation, route }) => {

    const { countries } = useSelector(state => state.CountriesList)
    const { loginNumber } = useSelector(state => state.LoginNumber)

    const [phone, setPhone] = useState('')
    const [storagePhone, setStoragePhone] = useState(loginNumber ? loginNumber : '')
    const [countryCode, setCountryCode] = useState('+254')
    const [popupVisibility, setPopupVisibility] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isMsgModal, setIsMsgModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const phoneRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch()


    useEffect(() => {
        console.log("countries list...", countries);
        console.log("Login Number from store...", loginNumber);
    }, [])

    const loginBtnClick = async () => {
        //call-api 
        //handle
        navigation.navigate('HomeStack')
    }

    const loginUser = async () => {

        const newNumber = countryCode.concat(phone)

        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone_number: storagePhone.length > 0 ? storagePhone : newNumber,
                password: password,
            })
        };

        if ((phone && storagePhone == '') && password == '') {
            SimpleToast.show('All fields are mandatory')
        } else if (phone == '' && storagePhone == '') {
            SimpleToast.show('Phone Number Required')
        } else if (password == '') {
            SimpleToast.show('Password Required')
        } else {
            try {
                setIsLoading(true)
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/signin', config)
                const loginResult = await response.json();
                console.log("loginUser-response", response);
                if (response.status === 200) {
                    dispatch(userToken(loginResult?.token))
                    dispatch(loggedInData(loginResult?.data))
                    dispatch(loggedInNumber(phone ? newNumber : storagePhone))
                    setIsLoading(false)
                    SimpleToast.show("Login Successfull")
                    setTimeout(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'HomeStack' }],
                        })
                    }, 300);
                } else if (response.status === 401) {
                    setIsLoading(false)
                    SimpleToast.show(loginResult?.error?.message)
                } else {
                    setIsLoading(false)
                    SimpleToast.show("Something went wrong. " + loginResult.message)
                }
                // .then(response => response.json())
                // .then(data => console.log(data))

            } catch (error) {
                setIsLoading(false)
                console.log("loginUser-error", error);
            }

        }

    };

    const onCountrySelect = (country) => {
        setCountryCode("+" + country.callingCode)
        // setCountry(country.cca2)
        // phoneRef.current.focus();
    }
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



                    <Text style={styles.Login}>{'Login'}</Text>
                    <Text style={styles.credentails}>{'Please enter your credentials'}</Text>

                    {/* ---------------------------------------- */}

                    {
                        storagePhone.length == 0 ?
                            <>
                                <Text style={[styles.inputtitle, { marginTop: 30 }]}>{'Country Code'}</Text>
                                <View style={[styles.non_editable, {
                                    flex: 1,
                                    flexDirection: 'row',
                                }]}>

                                    <View style={{ justifyContent: 'center' }}>


                                        <CountryModalProvider>
                                            <CountryPicker
                                                // countryCode={route?.params?.countries[0]}
                                                countryCode={countries}
                                                // countryCodes={route?.params?.countries}
                                                countryCodes={countries}
                                                withFilter={true}
                                                withFlag={true}
                                                withCountryNameButton={true}
                                                withCallingCodeButton={false}
                                                withAlphaFilter={true}
                                                withCallingCode={true}
                                                withEmoji={true}
                                                onSelect={onCountrySelect}
                                                visible={popupVisibility}
                                                onOpen={() => setPopupVisibility(true)}
                                                onClose={() => {
                                                    setPopupVisibility(false)
                                                    phoneRef.current.focus()
                                                }}

                                            />
                                        </CountryModalProvider>
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
                                            style={{ ...styles.credentails, textAlignVertical: 'center', height: '100%', borderBottomColor: 'transparent', borderBottomWidth: 0 }}
                                        />
                                    </View>

                                </View>


                            </>
                            :
                            <>
                                <Text style={styles.inputtitle}>{'Phone Number'}</Text>
                                <InputField
                                    onChangeText={val => setStoragePhone(val)}
                                    value={storagePhone}
                                    leftIcon={Images.phone}
                                    returnKeyType={'next'}
                                    fieldRef={phoneRef}
                                    onSubmitEditing={() => {
                                        passwordRef.current.focus()
                                    }}
                                    keyBoardType={'phone-pad'}
                                    customStyle={{}}
                                />
                            </>
                    }

                    <View>



                        <Text style={[styles.inputtitle,]}>{'Password'}</Text>

                        <InputField
                            onChangeText={val => setPassword(val)}
                            value={password}
                            returnKeyType={'done'}
                            fieldRef={passwordRef}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                            }}
                            isRightIcon={true}
                            rightIcon={passwordVisible ? Images.Show : Images.Hide}
                            rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                            password={passwordVisible ? false : true}
                        />
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => navigation.navigate('ForgotPassword')}
                            style={styles.forgot}
                        >
                            <Text style={styles.forgotText}>{'Forgot Password?'}</Text>
                        </TouchableOpacity>

                    </View>

                    <AppButton
                        label={"Login"}
                        style={styles.btnStyle}
                        labelStyle={styles.label}
                        onPress={() => loginUser()}
                    />

                    <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                        <Text style={styles.haveAccount}>{`Don't have an account?`}</Text>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                Keyboard.dismiss()
                                navigation.navigate('SignUp')
                            }}>
                            <Text style={styles.haveAccount}>{` Register`}</Text>
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
            <Loader visible={isLoading} />
        </SafeAreaView>


    )
}

export default SignIn

