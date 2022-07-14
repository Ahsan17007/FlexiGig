import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../Assets/Colors/Index'
import InputComponent from './InputComponent'
import InputComponentDropdown from './InputComponentDropdown'

const PersonalDetailsForm = ({ onSubmit }) => {

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [alternateNo, setAlternateNo] = useState('')
    const [id, setId] = useState('')
    const [idType, setIdType] = useState('')
    const [revAuthNo, setRevAuthNo] = useState('')

    const firstNameRef = useRef()
    const middleNameRef = useState()
    const surnameRef = useState()
    const emailRef = useState()
    const alternateNoRef = useState()
    const idRef = useState()
    const idTypeRef = useState()
    const revAuthRef = useState()

    const onNextPress = () => {

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

                <InputComponent
                    fieldName={'Email'}
                    value={email}
                    setter={setEmail}
                    keyboardType='email-address'
                    ref={emailRef}
                    nextRef={alternateNoRef} />

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
                    fieldName={'Alternate Phone No.'}
                    value={alternateNo}
                    setter={setAlternateNo}
                    max={13}
                    ref={alternateNoRef}
                    nextRef={idRef} 
                    keyboardType='phone-pad'/>


                <InputComponent
                    fieldName={'Id Number'}
                    value={id}
                    setter={setId}
                    max={32}
                    ref={idRef}
                    nextRef={idRef} />

                <InputComponent
                    fieldName={'Id Type'}
                    value={idType}
                    setter={setIdType}
                    max={16}
                    ref={idTypeRef}
                    nextRef={revAuthRef} />

                <InputComponent
                    fieldName={'Revenue Authority No.'}
                    value={revAuthNo}
                    setter={setRevAuthNo}
                    max={32}
                    ref={revAuthRef}
                    nextRef={idRef} />

            </KeyboardAwareScrollView>

        </View>
    )
}

export default PersonalDetailsForm;