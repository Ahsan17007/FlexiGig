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
import Loader from '../../../Components/Loader';


const ForgotPassword = ({ navigation }) => {


    const [phone, setPhone] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    // const dispatch = useDispatch()

    const sendCode = async () => {

        if (phone == '') {
            SimpleToast.show('Phone No required')
        } else {
            try {
                setIsLoading(true)
                const login_data = {
                    phone_number: phone
                };

                const config = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(login_data)
                };
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/forgot_password', config)
                const sendCodeResult = await response.json();
                console.log(response.status);
                console.log({ sendCodeResult });
                if (response.status === 200) {
                    setIsLoading(false)
                    SimpleToast.show('OTP sent')
                    navigation.replace('ResetPassword')
                } else if (response.status === 401) {
                    setIsLoading(false)
                    SimpleToast.show(sendCodeResult?.errors?.user_authentication)
                } else {
                    setIsLoading(false)
                    SimpleToast.show("Something went wrong. " + sendCodeResult.message)
                }
            } catch (error) {
                setIsLoading(false)
                console.log("sendCode-error", error);
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
                            maxLength={13}
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

            <Loader visible={isLoading} />

        </SafeAreaView>


    )
}

export default ForgotPassword;

