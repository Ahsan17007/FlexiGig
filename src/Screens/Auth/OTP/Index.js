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
import { loggedInNumber } from '../../../Redux/Actions/HasSession';
// import MsgModal from '../../../Components/MsgModal';


const OTP = ({ navigation, route }) => {

    const userId = route?.params?.userId
    const userPhone = route?.params?.userPhone

    let randomOTP = '090078'
    const [otp, setOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const dispatch = useDispatch()


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

            //verifyResult?.data[0]?.verification_status Because On Verification Still Not Getting Response 200 //Ahsan Iqbal
            if (response.status === 200) {
                setIsLoading(false)
                SimpleToast.show(verifyResult?.message)
                setTimeout(() => {
                        dispatch(loggedInNumber(userPhone))
                        navigation.replace('SignIn', { userPhone: userPhone })
                    }, 200);
                
            } else {
                
                SimpleToast.show((verifyResult?.message == 'Wrong User_id or verification code') ? 'Wrong Verification Code' : verifyResult?.message)
                setIsLoading(false)
            }

        }

    };

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
                    <Text style={styles.Verify}>{'Verify OTP'}</Text>
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



                </KeyboardAwareScrollView>

            </View>


        </SafeAreaView>


    )
}

export default OTP

