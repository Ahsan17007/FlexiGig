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
import InputField from '../../../Components/InputField';
import Strings from '../../../Assets/Strings/Index';




const ForgotPassword = ({ navigation, route }) => {


    const [email, setEmail] = useState('')
    const emailRef = useRef()



    return (

        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.back}
                activeOpacity={0.4}
                onPress={() => {
                    Keyboard.dismiss()
                    setTimeout(() => {
                        navigation.goBack()
                    }, 25);
                }}>
                <Image
                    onPress={() => navigation.goBack()}
                    source={Images.arrow}
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <Image
                source={Images.RightEllipse}
                style={styles.rightEclipse}
            />



            <KeyboardAwareScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollView}
                extraHeight={50}>

                <Text style={styles.forgotTitle}>{Strings.forgotTitle}</Text>
                <Text style={styles.forgotGuide}>{Strings.forgot_guide}</Text>



                <Image
                    source={Images.ForgotPassword}
                    style={styles.ForgotPasswordIcon}
                />


                <InputField
                    onChangeText={val => setEmail(val)}
                    value={email}
                    leftIcon={Images.email}
                    placeholder={"Email"}
                    returnKeyType={'done'}
                    fieldRef={emailRef}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    customStyle={{ marginTop: 34 }}
                />





                <AppButton
                    gradient={true}
                    label={"Confirm"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                    onPress={() => {
                        navigation.navigate('OTP', { routeName: 'ForgotPassword' })

                    }}
                />

            </KeyboardAwareScrollView>
        </SafeAreaView>


    )
}

export default ForgotPassword;

