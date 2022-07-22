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
// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import Loader from '../../../Components/Loader';
import { client } from '../../../Api/config';
import { userToken, loggedInData, loggedInNumber } from '../../../Redux/Actions/HasSession';

import CountrySelector from '../../../Components/CountrySelector/Index'



const ResetPassword = ({ navigation, route }) => {

    const { countries } = useSelector(state => state.CountriesList)
    const { loginNumber } = useSelector(state => state.LoginNumber)

    const [resetPassToken, setResetPassToken] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPassVisible, setConfirmPassVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const tokenRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();

    const dispatch = useDispatch()



    const resetPassword = async () => {

        if (resetPassToken == '' && password == '' && confirmPass == '') {
            SimpleToast.show('All fields are mandatory')
        } else if (resetPassToken == '') {
            SimpleToast.show('Token Required')
        } else if (password == '') {
            SimpleToast.show('Password Required')
        } else if (confirmPass == '') {
            SimpleToast.show('Confirm Password Required')
        } else if (password.length <= 6) {
            SimpleToast.show('Password Should be more than 6 characters')
        } else if (password != confirmPass) {
            SimpleToast.show(`Password doesn't match`)
        } else {
            try {
                setIsLoading(true)
                const reset_pass_data = {
                    verification_code: resetPassToken,
                    new_password: password
                }

                const config = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(reset_pass_data)
                };
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/reset_password', config)
                const resetPasswordResult = await response.json();
                console.log(response.status);
                console.log({ resetPasswordResult });
                if (response.status === 200) {
                    setIsLoading(false)
                    SimpleToast.show('Password Reset')
                    navigation.replace('SignIn')
                } else if (response.status === 401) {
                    setIsLoading(false)
                    SimpleToast.show(loginResult?.errors?.user_authentication)
                } else {
                    setIsLoading(false)
                    SimpleToast.show("Something went wrong. " + resetPasswordResult?.message)
                }
            } catch (error) {
                setIsLoading(false)
                console.log("resetPassword-error", error);
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



                    <Text style={styles.Reset}>{'Reset Password'}</Text>
                    <Text style={styles.credentails}>{'Please enter reset token and new password'}</Text>

                    {/* ---------------------------------------- */}

                    <View>



                        <Text style={[styles.inputtitle,]}>{'Reset Token'}</Text>
                        <InputField
                            onChangeText={val => setResetPassToken(val)}
                            value={resetPassToken}
                            returnKeyType={'next'}
                            fieldRef={tokenRef}
                            onSubmitEditing={() => {
                                passwordRef?.current?.focus()
                            }}
                            keyBoardType={'number-pad'}
                        />

                        <Text style={[styles.inputtitle,]}>{'Password'}</Text>
                        <InputField
                            onChangeText={val => setPassword(val)}
                            value={password}
                            returnKeyType={'next'}
                            fieldRef={passwordRef}
                            onSubmitEditing={() => {
                                confirmPassRef?.current?.focus()
                            }}
                            isRightIcon={true}
                            rightIcon={passwordVisible ? Images.Show : Images.Hide}
                            rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                            password={passwordVisible ? false : true}
                        />

                        <Text style={[styles.inputtitle,]}>{'Confirm Password'}</Text>
                        <InputField
                            onChangeText={val => setConfirmPass(val)}
                            value={confirmPass}
                            returnKeyType={'done'}
                            fieldRef={confirmPassRef}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                            }}
                            isRightIcon={true}
                            rightIcon={confirmPassVisible ? Images.Show : Images.Hide}
                            rightIconOnPress={() => setConfirmPassVisible(!confirmPassVisible)}
                            password={confirmPassVisible ? false : true}
                        />


                    </View>

                    <AppButton
                        label={"Reset"}
                        style={styles.btnStyle}
                        labelStyle={styles.label}
                        onPress={() => resetPassword()}
                    />



                </KeyboardAwareScrollView>

            </View>
            <Loader visible={isLoading} />
        </SafeAreaView>


    )
}

export default ResetPassword;

