import React, { useRef, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import InputComponent from './InputComponent'
import InputComponentDropdown from './InputComponentDropdown'
import InputComponentDate from './InputComponentDate'
import InputComponentBoxAdd from './InputComponentBoxAdd'
import InputComponentBoxFiles from './InputComponentBoxFiles'

const Index = ({ onSubmit }) => {

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [surname, setSurname] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [alternateNo, setAlternateNo] = useState('')
    const [id, setId] = useState('')
    const [idType, setIdType] = useState('')
    const [idDocuments, setIdDocuments] = useState([])
    const [date, setDate] = useState(new Date())
    const [eduLevel, setEduLevel] = useState('')
    const [eduDocuments, setEduDocuments] = useState([])
    const [revAuthNo, setRevAuthNo] = useState('')
    const [isShownDate, setIsShownDate] = useState(false)
    const [services, setServices] = useState([])
    const [routes, setRoutes] = useState([])

    const firstNameRef = useRef()
    const middleNameRef = useState()
    const surnameRef = useState()
    const emailRef = useState()
    const alternateNoRef = useState()
    const idRef = useState()
    const idTypeRef = useState()
    const revAuthRef = useState()

    const onNextPress = () => {

        const config_sample = {
            "firstname": "test werrrrr",
            "middlename":"rrrrrrr",
            "surname": "tttiriti",
            "email": "ericmmmm@gmail.com",
            "identification_doc_type":  "passport",
            "identification_number": "HKS122123",
            "identification_doc":  "",
            "level_of_education":  "",
            "education_certificate":  "",
            "revenue_authority_number":  "",
            "revenue_authority_certificate":  "",
            "current_residence":  "Nairobi Kenya",
            "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            "routes": ["08bf7e8c-89d6-49f3-ac59-2db8e0d2032c"],
            "services": [
                "42fade7b-5650-44b9-9e33-d403e93a51be",
                "bcde708a-86b3-4ad4-86a3-ad083d02d25c",
                "fd9a3f01-de6c-4b21-b702-81c7a83c75b0"
            ]
        }

    }

    return (
        <View style={{ backgroundColor: colors.White, padding: 8, paddingTop: 24 }}>

            <KeyboardAwareScrollView>

                <InputComponent
                    fieldName={'First Name'}
                    value={firstName}
                    setter={setFirstName}
                    max={16}
                    ref={firstNameRef}
                    nextRef={middleNameRef} />

                <InputComponent
                    fieldName={'Middle Name'}
                    value={middleName}
                    setter={setMiddleName}
                    max={16}
                    requiredStatus={false}

                    ref={middleNameRef}
                    nextRef={surnameRef} />

                <InputComponent
                    fieldName={'Surname'}
                    value={surname}
                    setter={setSurname}
                    max={16}
                    ref={surnameRef}
                    nextRef={emailRef}
                />

                <InputComponentDropdown
                    value={gender}
                    setValue={setGender}
                    items={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' }
                    ]}
                    fieldName='Gender'
                />

                <InputComponent
                    fieldName={'Email'}
                    value={email}
                    setter={setEmail}
                    keyboardType='email-address'
                    ref={emailRef}
                    nextRef={alternateNoRef} />

                <InputComponent
                    fieldName={'Alternate Phone No.'}
                    value={alternateNo}
                    setter={setAlternateNo}
                    max={13}
                    ref={alternateNoRef}
                    nextRef={idRef}
                    keyboardType='phone-pad' />


                <InputComponent
                    fieldName={'Id Number'}
                    value={id}
                    setter={setId}
                    max={32}
                    ref={idRef}
                    nextRef={idRef} />

                <InputComponent
                    fieldName={'Id Doc. Type'}
                    value={idType}
                    setter={setIdType}
                    max={16}
                    ref={idTypeRef}
                    nextRef={revAuthRef} />

                <InputComponentBoxFiles 
                    fieldName={'Id Documents'}
                    value={idDocuments}
                    setValue={setIdDocuments}/>

                <InputComponentDate
                    date={date}
                    setDate={setDate}
                    fieldName={'Date of Birth'}
                    shown={isShownDate}
                    isShown={setIsShownDate}
                    maxDate= {new Date()} />

                <InputComponentDropdown
                    value={eduLevel}
                    setValue={setEduLevel}
                    items={[
                        { label: 'High School', value: 'High School' },
                        { label: 'Undergraduate', value: 'Undergraduate' },
                        { label: 'Graduate', value: 'Graduate' },
                        { label: 'Masters', value: 'Masters' }, ,
                        { label: 'Doctorate', value: 'Doctorate' }, ,
                        { label: 'Post Doctorate', value: 'Post Doctorate' },

                    ]}
                    fieldName='Education Level'
                />

                <InputComponentBoxFiles 
                    fieldName={'Edu. Docs.'}
                    value={eduDocuments}
                    setValue={setEduDocuments}/>

                <InputComponent
                    fieldName={'Revenue Authority No.'}
                    value={revAuthNo}
                    setter={setRevAuthNo}
                    max={32}
                    ref={revAuthRef}
                    nextRef={idRef} />
                
                <InputComponentBoxAdd
                    fieldName={'Services'}
                    value={services}
                    setValue={setServices}
                />

                <InputComponentBoxAdd
                    fieldName={'Routes'}
                    value={routes}
                    setValue={setRoutes}
                />


                <View style={{
                    marginVertical: 48,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'center'

                }}>

                    <TouchableOpacity onPress={onNextPress} style={styles.btn}>
                        <Text style={styles.btnText}>
                            Next
                        </Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAwareScrollView>

        </View>
    )
}

export default Index;


const styles = StyleSheet.create({
    btnText: {
        color: colors.Black,
        fontFamily: Fonts.Regular
    },
    btn: {
        padding: 4,
        borderColor: colors.Secondary,
        borderWidth: 1,
        width: 96,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.White,
        elevation: 4

    }
})