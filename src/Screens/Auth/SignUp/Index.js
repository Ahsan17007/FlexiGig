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
import { TextInput } from 'react-native-gesture-handler';
import { CountryModalProvider } from 'react-native-country-picker-modal';
import CountryPicker from 'react-native-country-picker-modal'



const SignUp = ({ navigation }) => {


    const [countryCode, setCountryCode] = useState('+254')
    const [country, setCountry] = useState('KE')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [referalCode, setReferalCode] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [popupVisibility, setPopupVisibility] = useState(false)
    const [isMsgModal, setIsMsgModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const phoneRef = useRef();
    const passwordRef = useRef();
    const referalCodeRef = useRef();

    const registerBtnClick = async () => {
        //call-api 
        //handle
        const phoneNumber = countryCode.concat(phone)
    }

    const onCountrySelect = (country)  => {
        console.log(country);
        setCountryCode("+"+country.callingCode)
        setCountry(country.cca2)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View
                keyboardShouldPersistTaps='always'
                style={{ flex: 1, padding: 12 }}>

                <View style={{
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Image
                        source={Images.Logo}
                        style={styles.loginIcon}
                    />
                </View>

                <View style={{
                    flex: 7,
                    flexDirection: 'column',
                    alignContent: 'center',
                }}>

                    <KeyboardAwareScrollView>
                        <Text style={styles.Login}>{'Signup'}</Text>
                        <Text style={styles.credentails}>{'Please fill the details to create your account'}</Text>

                        <View style={{
                            marginVertical: 24
                        }}>


                            <Text style={styles.inputtitle}>{'Country Code'}</Text>


                            <View style={[styles.non_editable, {
                                flex:1,
                                flexDirection:'row',
                            }]}>

                                <View style={{  justifyContent:'center' }}>

                                    <CountryModalProvider>
                                        <CountryPicker
                                            
                                                countryCode = {country}
                                                withFilter = {true}
                                                withFlag = {true}
                                                withCountryNameButton = {false}
                                                withCallingCodeButton={true}
                                                withAlphaFilter = {true}
                                                withCallingCode = {true}
                                                withEmoji = {true}
                                                onSelect = {onCountrySelect}
                                                visible = {popupVisibility}
                                                onOpen = {()=> setPopupVisibility(true)}
                                                onClose = {()=> {
                                                    setPopupVisibility(false)
                                                    phoneRef.current.focus();
                                                }}
                                        
                                        />
                                    </CountryModalProvider>

                                </View>

                                <View style={{marginLeft:8}}>

                                    <TextInput
                                        value={phone}
                                        onChangeText={v=>setPhone(v)}
                                        returnKeyType={'next'}
                                        fieldRef={phoneRef}
                                        onSubmitEditing={() => {
                                            passwordRef.current.focus()
                                        }}
                                        keyboardType={'phone-pad'}
                                    />
                                </View>


                            </View>

                            <Text style={styles.inputtitle}>{'Phone Number'}</Text>
                            <Text style={styles.non_editable}>
                                {countryCode.concat(phone)}
                            </Text>



                            <Text style={[styles.inputtitle, {

                            }]}>{'Password'}</Text>

                            <InputField
                                onChangeText={val => setPassword(val)}
                                value={password}
                                returnKeyType={'next'}
                                fieldRef={passwordRef}
                                onSubmitEditing={() => {
                                    referalCodeRef.current.focus()
                                }}
                                isRightIcon={true}
                                rightIcon={passwordVisible ? Images.show : Images.hide}
                                rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                                password={passwordVisible ? false : true}
                            />

                            <Text style={styles.inputtitle}>{'Referal Code (Optional)'}</Text>
                            <InputField
                                onChangeText={val => setReferalCode(val)}
                                value={referalCode}
                                returnKeyType={'done'}
                                fieldRef={referalCodeRef}
                                onSubmitEditing={() => {
                                    Keyboard.dismiss()
                                }}
                                isRightIcon={true}
                                rightIcon={passwordVisible ? Images.show : Images.hide}
                                customStyle={{}}
                            />

                        </View>

                        <AppButton
                            gradient={true}
                            label={"Sign Up"}
                            style={styles.btnStyle}
                            labelStyle={styles.label}
                            onPress={registerBtnClick}
                        />
                    </KeyboardAwareScrollView>

                </View>




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

export default SignUp

