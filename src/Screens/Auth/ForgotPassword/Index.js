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



const ForgotPassword = ({ navigation }) => {


    const [phone, setPhone] = useState('')


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

    const sendCode = async () => {
        //call-api 
        //handle
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



                    <Text style={styles.Login}>{'Forgot Password'}</Text>
                    <Text style={styles.credentails}>{'Please enter your number to reset your password.'}</Text>

                    <View style={{
                        marginVertical: 24
                    }}>

                        <Text style={styles.inputtitle}>{'Phone Number'}</Text>
                        <InputField
                            value={phone}
                            onChangeText={(val) => setPhone(val)}
                            leftIcon={Images.phone}
                            returnKeyType={'done'}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                            }}
                            keyBoardType={'phone-pad'}
                            customStyle={{}}
                        />





                    </View>

                    <AppButton
                        label={"Send Code"}
                        style={styles.btnStyle}
                        labelStyle={styles.label}
                        onPress={() => sendCode()}
                    />


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

export default ForgotPassword;

