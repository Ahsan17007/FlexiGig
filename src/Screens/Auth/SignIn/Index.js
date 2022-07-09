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
import axios from 'axios';
// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import Loader from '../../../Components/Loader';
import colors from '../../../Assets/Colors/Index';
import { client } from '../../../Api/config';



const SignIn = ({ navigation }) => {


    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isMsgModal, setIsMsgModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const phoneRef = useRef();
    const passwordRef = useRef();

    // const dispatch = useDispatch()

    // const SignIn = async () => {

    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (email == '' && password == '') {
    //         setIsMsgModal(true)
    //         setMsg('Write your email and password')
    //     } else if (email == '') {
    //         setIsMsgModal(true)
    //         setMsg('Email Required')
    //     } else if (reg.test(email) === false) {
    //         setIsMsgModal(true)
    //         setMsg('Invalid Email Format')
    //     } else if (password == '') {
    //         setIsMsgModal(true)
    //         setMsg('Password Required')
    //     } else if (email != registrationData.email || password != registrationData.pass) {
    //         setIsLoading(true)
    //         setTimeout(() => {
    //             setIsLoading(false)
    //             setIsMsgModal(true)
    //             setMsg('Invalid Credentials')
    //         }, 1500);
    //     } else {
    //         setIsLoading(true)
    //         dispatch(isLoggedIn({
    //             email: email,
    //             pass: password
    //         }))
    //         setTimeout(() => {
    //             setIsLoading(false)
    //             navigation.navigate('OTP', { routeName: 'SignIn' })
    //         }, 2000);

    //     }

    // };

    const loginBtnClick = async () => {
        //call-api 
        //handle
        navigation.navigate('HomeStack')
    }

    const loginUser = async () => {

        let bodyData = {
            phone_number: phone,
            password: password,
        }

        // const data = new FormData();
        // data.append('phone_number', phone);
        // data.append('password', password);
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }

        if (phone == '' && password == '') {
            SimpleToast.show('All fields are mandatory')
        } else if (phone == '') {
            SimpleToast.show('Phone Number Required')
        } else if (password == '') {
            SimpleToast.show('Password Required')
        } else {
            setIsLoading(true)

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone_number: phone,
                    password: password,
                })
            };
            fetch('https://flexigig-api.herokuapp.com/api/v1/signin', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))


            // const response = await axios.post('https://flexigig-api.herokuapp.com/api/v1/signin', bodyData, { headers })
            //     .then(response => {
            //         setIsLoading(false)
            //         console.log('loginUser-responseJson', response)

            //     }).catch(error => {
            //         setIsLoading(false)
            //         SimpleToast.show('Something went wrong')
            //         console.log('loginUser-error', error)
            //     })

            // client.post('signin', {
            //     phone_number: phone,
            //     password: password,
            // }).then(response => {
            //     console.log('loginUser-responseJson', response)
            //     if (response.data.status == 200) {
            //         Keyboard.dismiss()
            //         SimpleToast.show('Verify your email')
            //         dispatch(onRegister({
            //             name: name,
            //             email: email,
            //             password: password,
            //             confirm_password: confirmPass,
            //             phone_number: number,
            //             address: address,
            //             state: state,
            //             city: city,
            //             country: country,
            //             zip: zip,
            //             dob: dob
            //         }))
            //         setTimeout(() => {
            //             navigation.navigate('OTP')
            //         }, 300);
            //     } else {
            //         Keyboard.dismiss()
            //         setAlertMessage(response.data.messgae)
            //         setTimeout(() => {
            //             setAlertModal(true)
            //         }, 300);
            //     }
            // }).catch(error => {
            //     SimpleToast.show('Something went wrong')
            //     console.log('loginUser-error', error)
            // }).finally(() => {
            //     setIsLoading(false)
            // })
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



                    <Text style={styles.Login}>{'Login'}</Text>
                    <Text style={styles.credentails}>{'Please enter your credentials'}</Text>

                    <View style={{
                        marginVertical: 24
                    }}>

                        <Text style={styles.inputtitle}>{'Phone Number'}</Text>
                        <InputField
                            onChangeText={val => setPhone(val)}
                            value={phone}
                            leftIcon={Images.phone}
                            returnKeyType={'next'}
                            fieldRef={phoneRef}
                            onSubmitEditing={() => {
                                passwordRef.current.focus()
                            }}
                            keyBoardType={'phone-pad'}
                            customStyle={{}}
                        />

                        <Text style={[styles.inputtitle, {
                            marginTop: 16
                        }]}>{'Password'}</Text>

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
                        gradient={true}
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

