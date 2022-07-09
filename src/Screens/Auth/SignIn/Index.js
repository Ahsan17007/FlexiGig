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
                            rightIcon={passwordVisible ? Images.show : Images.hide}
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
                        onPress={loginBtnClick}
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
        </SafeAreaView>


    )
}

export default SignIn

