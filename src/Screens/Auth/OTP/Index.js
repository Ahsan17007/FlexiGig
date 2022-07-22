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
import { useDispatch, useSelector } from 'react-redux'

// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import OTPInput from '../../../Components/OTPInput'
import colors from '../../../Assets/Colors/Index'
// import Strings from '../../../Assets/Strings/Index';
import Loader from '../../../Components/Loader';
import { userToken, loggedInData, loggedInNumber } from '../../../Redux/Actions/HasSession';
import AlertModal from '../../../Components/AlertModal';


const OTP = ({ navigation, route }) => {

    const userId = route?.params?.userId
    const userPhone = route?.params?.userPhone
    const Route = route?.params?.route

    const [timer, setTimer] = useState(0)
    const [otp, setOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)


    const dispatch = useDispatch()

    const timerFunc = () => {
        setTimer(60);
        let interval = setInterval(() => {
            setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && (
                    clearInterval(interval)
                )
                return lastTimerCount - 1;

            });
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    };

    const verifyOTP = async () => {

        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: userId,
                verification_code: otp
            })
        };

        if (otp == '' || otp.length < 4) {
            SimpleToast.show('Enter complete verification code')
        } else {

            setIsLoading(true)
            const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/verify_user_code', config)
            console.log('Verification Response Code ' + response.status);
            const verifyResult = await response.json();
            console.log("verifyOTP-response", verifyResult);


            if (response.status === 200) {
                setIsLoading(false)
                if (Route?.name === 'SignIn') {
                    console.log("If");
                    dispatch(loggedInNumber(verifyResult?.data?.phone))
                    dispatch(userToken(verifyResult?.token))
                    dispatch(loggedInData(verifyResult?.data))
                } else {
                    console.log("else");
                    dispatch(loggedInNumber(userPhone))
                }
                setTimeout(() => {
                    setIsModalVisible(true)
                }, 350);
            } else {
                SimpleToast.show((verifyResult?.message == 'Wrong User_id or verification code') ? 'Wrong Verification Code' : verifyResult?.message)
                setIsLoading(false)
            }

        }

    };

    const resendCode = async () => {
        timerFunc()
        try {
            const login_data = {
                user_id: userId,
            };

            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(login_data)
            };
            const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/resend_code', config)
            const resendCodeResult = await response.json();
            if (response.status === 200) {
                SimpleToast.show('OTP Resent')
            } else if (response.status === 401) {
                SimpleToast.show(resendCodeResult?.errors?.user_authentication)
            } else {
                setIsLoading(false)
                SimpleToast.show("Something went wrong. " + resendCodeResult.message)
            }

        } catch (error) {
            setIsLoading(false)
            console.log("resendCode-error", error);
        }



    };

    useEffect(() => {
        timerFunc()
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Loader
                visible={isLoading}
            />


            <View style={{
                paddingHorizontal: 20,
                paddingBottom: 20
            }}>

                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps='always'
                    showsVerticalScrollIndicator={false} >
                    <Image
                        source={Images.Logo}
                        style={styles.loginIcon}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.Verify}>{'Verify OTP'}</Text>
                        <Text style={styles.credentails}>{timer > 0 ? timer : ''}</Text>
                    </View>
                    <Text style={styles.credentails}>{`Please enter the code below, we sent on your phone`}</Text>

                    <OTPInput
                        onComplete={(code) => {
                            setOtp(code)
                        }}
                    />

                    <AppButton
                        label={"Verify"}
                        style={styles.btnStyle}
                        labelStyle={styles.label}
                        onPress={() => verifyOTP()}
                    />

                    {
                        timer == 0 &&

                        <AppButton
                            label={"RESEND OTP"}
                            style={[styles.btnStyle, { backgroundColor: colors.Dark }]}
                            onPress={() => {
                                resendCode()
                            }}
                            labelStyle={styles.label}
                        // loading={loading}
                        />
                    }



                </KeyboardAwareScrollView>

            </View>

            <AlertModal
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(false)
                    Route?.name === 'SignIn' ?
                        (
                            setTimeout(() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'HomeStack' }],
                                })
                            }, 300)
                        )
                        :
                        (
                            setTimeout(() => {
                                navigation.replace('SignIn')
                            }, 200)
                        )
                }}
                msg={Route?.name === 'SignIn' ? 'Your number is verified' : 'Your account has been created'}
            />
        </SafeAreaView>


    )
}

export default OTP

