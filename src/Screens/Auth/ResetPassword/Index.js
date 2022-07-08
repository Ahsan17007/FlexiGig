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
import InputField from '../../../Components/InputField'
import Strings from '../../../Assets/Strings/Index';




const ResetPassword = ({ navigation }) => {


    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const passwordRef = useRef();
    const confirmPasswordRef = useRef();


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

                <Text style={styles.resetPassText}>{loading ? Strings.passChange : Strings.resetPass}</Text>
                <Text style={styles.reset_guide}>{loading ? Strings.passChangeMsg : Strings.reset_guide}</Text>
                {
                    loading ?
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '49.6%'
                        }}>
                            <View style={styles.verifiedView}>
                                <View style={styles.innerView}>
                                    <Image
                                        source={Images.tick}
                                        style={styles.checked}
                                    />
                                </View>
                            </View>
                        </View>
                        :
                        <>
                            <Image
                                source={Images.Resetpassword}
                                style={styles.ResetpasswordIcon}
                            />

                            {/* ------------------------------Input Fields--------------------------- */}




                            <InputField
                                onChangeText={val => setPassword(val)}
                                value={password}
                                leftIcon={Images.password}
                                placeholder={"Password"}
                                returnKeyType={'next'}
                                fieldRef={passwordRef}
                                onSubmitEditing={() => {
                                    confirmPasswordRef.current.focus()
                                }}
                                isRightIcon={true}
                                rightIcon={passwordVisible ? Images.show : Images.hide}
                                rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                                password={passwordVisible ? false : true}
                                customStyle={{ marginTop: 53 }}
                            />

                            <InputField
                                onChangeText={val => setConfirmPassword(val)}
                                value={confirmPassword}
                                leftIcon={Images.password}
                                placeholder={"Confirm Password"}
                                returnKeyType={'done'}
                                fieldRef={confirmPasswordRef}
                                onSubmitEditing={() => {
                                    Keyboard.dismiss()
                                }}
                                isRightIcon={true}
                                rightIcon={confirmPasswordVisible ? Images.show : Images.hide}
                                rightIconOnPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                password={confirmPasswordVisible ? false : true}
                                customStyle={{ marginTop: 16 }}
                            />
                        </>
                }


                <AppButton
                    gradient={true}
                    label={"Confirm"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                    onPress={() => {
                        setTimeout(() => {
                            setLoading(!loading)
                        }, 1000);
                        setTimeout(() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'OnBoarding' }],
                            })
                        }, 2000);
                    }}
                />

            </KeyboardAwareScrollView>
        </SafeAreaView>


    )
}

export default ResetPassword

