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
import Preference from 'react-native-preference';

// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import Loader from '../../../Components/Loader';
import MsgModal from '../../../Components/MsgModal';
import { isLoggedIn } from '../../../Redux/Actions/HasSession';



const SignIn = ({ navigation }) => {

    const { registrationData } = useSelector(state => state.Auth)


    let storageEmail = Preference.get('email')
    let storagePass = Preference.get('password')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isMsgModal, setIsMsgModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch()

    useEffect(() => {
        console.log({ registrationData });
    }, [])

    const SignIn = async () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email == '' && password == '') {
            setIsMsgModal(true)
            setMsg('Write your email and password')
        } else if (email == '') {
            setIsMsgModal(true)
            setMsg('Email Required')
        } else if (reg.test(email) === false) {
            setIsMsgModal(true)
            setMsg('Invalid Email Format')
        } else if (password == '') {
            setIsMsgModal(true)
            setMsg('Password Required')
        } else if (email != registrationData.email || password != registrationData.pass) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                setIsMsgModal(true)
                setMsg('Invalid Credentials')
            }, 1500);
        } else {
            setIsLoading(true)
            dispatch(isLoggedIn({
                email: email,
                pass: password
            }))
            setTimeout(() => {
                setIsLoading(false)
                navigation.navigate('OTP', { routeName: 'SignIn' })
            }, 2000);

        }

    };


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

                <Text style={styles.signInText}>{Strings.SignIn}</Text>
                <Text style={styles.Login}>{Strings.Login}</Text>

                <Image
                    source={Images.login}
                    style={styles.loginIcon}
                />

                {/* ------------------------------Input Fields--------------------------- */}


                <InputField
                    onChangeText={val => setEmail(val)}
                    value={email}
                    leftIcon={Images.email}
                    placeholder={"Email"}
                    returnKeyType={'next'}
                    fieldRef={emailRef}
                    onSubmitEditing={() => {
                        passwordRef.current.focus()
                    }}
                    customStyle={{ marginTop: 56 }}
                />

                <InputField
                    onChangeText={val => setPassword(val)}
                    value={password}
                    leftIcon={Images.password}
                    placeholder={"Password"}
                    returnKeyType={'done'}
                    fieldRef={passwordRef}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    isRightIcon={true}
                    rightIcon={passwordVisible ? Images.show : Images.hide}
                    rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                    password={passwordVisible ? false : true}
                    customStyle={{ marginTop: 16 }}
                />
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.forgotText}>{Strings.forgot}</Text>
                </TouchableOpacity>



                <AppButton
                    gradient={true}
                    label={"SIGNIN"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                    onPress={() => SignIn()}
                />

                <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                    <Text style={styles.haveAccount}>{Strings.no_Account}</Text>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {
                            Keyboard.dismiss()
                            navigation.goBack()
                        }}>
                        <Text style={styles.signIn}>{Strings.Signup}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.OR}>{Strings.OR}</Text>
                <Text style={styles.social}>{Strings.Social}</Text>

                <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'center' }}>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Image
                                source={Images.google}
                                style={styles.socialIcon}
                            />
                        </View>
                    </View>

                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Image
                                source={Images.facebook}
                                style={styles.socialIcon}
                            />
                        </View>
                    </View>

                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Image
                                source={Images.apple}
                                style={styles.socialIcon}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <Loader
                visible={isLoading}
            />
            <MsgModal
                visible={isMsgModal}
                msg={msg}
                onPress={() => {
                    setIsMsgModal(false)
                }}
            />
        </SafeAreaView>


    )
}

export default SignIn

