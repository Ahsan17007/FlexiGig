import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    TextInput
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import Preference from 'react-native-preference';

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import InputField from '../../../Components/InputField'
import colors from '../../../Assets/Colors/Index';
import { CountryModalProvider } from 'react-native-country-picker-modal';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal'

import Loader from '../../../Components/Loader';



const SignUp = ({ navigation }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])
    const [needToFetch, setNeedToFetch] = useState(true)

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

    useEffect(()=>{
        phoneRef.current.focus();
    },[])

    if (needToFetch) {
        fetch('https://flexigig-api.herokuapp.com/api/v1/countries')
            .then(r => r.json())
            .then(res => {

                res.data.map(v=>{
                    getAllCountries().then((countries) => {
                        const country = countries.find((c) => (c.name === v.attributes.name));
                        console.log('country', country);
                        setFetchedCountries([...fetchedCountries, country.cca2])
                    });
                    
                })

                setNeedToFetch(false)
            })
    }
    else {
        console.log(fetchedCountries);
    }

    const registerBtnClick = async () => {
        //call-api 
        //handle
        const phoneNumber = countryCode.concat(phone)
    }

    const onCountrySelect = (country) => {
        console.log(country);
        setCountryCode("+" + country.callingCode)
        setCountry(country.cca2)
        phoneRef.current.focus();
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
                    <Text style={styles.Login}>{'Signup'}</Text>
                    <Text style={styles.credentails}>{'Please fill the details to create your account'}</Text>

                    <View style={{
                        marginVertical: 24
                    }}>


                        <Text style={styles.inputtitle}>{'Country Code'}</Text>


                        <View style={[styles.non_editable, {
                            flex: 1,
                            flexDirection: 'row',
                        }]}>

                            <View style={{ justifyContent: 'center' }}>

                                {
                                    fetchedCountries.length>0 ? 
                                        <CountryModalProvider>
                                            <CountryPicker
                                                countryCode={fetchedCountries[0]}
                                                countryCodes={fetchedCountries}
                                                withFilter={true}
                                                withFlag={true}
                                                withCountryNameButton={true}
                                                withCallingCodeButton={false}
                                                withAlphaFilter={true}
                                                withCallingCode={true}
                                                withEmoji={true}
                                                onSelect={onCountrySelect}
                                                visible={popupVisibility}
                                                onOpen={() => setPopupVisibility(true)}
                                                onClose={() => {
                                                    setPopupVisibility(false)
                                                }}

                                            />
                                        </CountryModalProvider>

                                        : 

                                        <View></View>
                                    }
                                



                            </View>

                            {/* <View style={{ marginLeft: 8, backgroundColor:'pink' }}>

                                <TextInput
                                    value={phone}
                                    onChangeText={(val) => setPhone(val)}
                                    returnKeyType={'next'}
                                    fieldRef={phoneRef}
                                    onSubmitEditing={() => {
                                        passwordRef.current.focus()
                                    }}
                                    keyboardType={'phone-pad'}
                                />
                            </View> */}


                        </View>

                        <Text style={styles.inputtitle}>{'Phone Number'}</Text>

                        <View style={[styles.non_editable, {
                            flex: 1,
                            flexDirection: 'row',
                            alignItems:'center'
                        }]}>

                            <View style={{  }}>
                                <TextInput style={styles.credentails} editable={false}>{countryCode}</TextInput>                                
                            </View>

                            <View style={{ marginLeft: 2, height:'100%', flexDirection:'column', justifyContent:'center'}}>

                                <TextInput
                                    value={phone}
                                    onChangeText={(val) => setPhone(val)}
                                    returnKeyType={'next'}
                                    ref={phoneRef}
                                    onSubmitEditing={() => {
                                        passwordRef.current.focus()
                                    }}
                                    keyboardType={'phone-pad'}
                                    style={{...styles.credentails, textAlignVertical:'center', height:'100%', borderBottomColor:'transparent', borderBottomWidth:0}}
                                />
                            </View>

                        </View>

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

                    <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                        <Text style={styles.haveAccount}>{`Already have an account?`}</Text>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                Keyboard.dismiss()
                                navigation.navigate('SignIn')
                            }}>
                            <Text style={styles.haveAccount}>{` SignIn`}</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAwareScrollView>

            </View>

            <Loader visible={needToFetch}/>






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

