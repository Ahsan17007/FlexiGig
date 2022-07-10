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
// import MsgModal from '../../../Components/MsgModal';


const OTP = ({ navigation, route }) => {

    const userId = route?.params?.userId
    const userPhone = route?.params?.userPhone

    let randomOTP = '090078'
    const [otp, setOtp] = useState('')
    const [isMsgModal, setIsMsgModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isVerified, setIsVerified] = useState(false)


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
            try {
                setIsLoading(true)
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/verify_user_code', config)
                console.log(response.status);
                const verifyResult = await response.json();
                console.log("verifyOTP-response", verifyResult);
                if (response.status === 200) {
                    setIsLoading(false)
                    SimpleToast.show(verifyResult?.message)
                    setTimeout(() => {
                        navigation.replace('SignIn', {userPhone: userPhone})
                    }, 300);
                } else {
                    setIsLoading(false)
                    SimpleToast.show(verifyResult?.message)

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
                    <Text style={styles.credentails}>{`Please enter the code below, we sent on ${userPhone}`}</Text>

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
            <Loader
                visible={isLoading}
            />

        </SafeAreaView>


    )
}

export default OTP

