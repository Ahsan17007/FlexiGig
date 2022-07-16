import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import InputComponent from './InputComponent'
import InputComponentDropdown from './InputComponentDropdown'
import InputComponentDate from './InputComponentDate'
import InputComponentBoxAdd from './InputComponentBoxAdd'
import InputComponentBoxFiles from './InputComponentBoxFiles'
import InputComponentBoxAddMultiple from './InputComponentBoxAddMultiple'
import { useSelector } from 'react-redux'

import { BASE_URL } from '../../../Api/config'
import Loader from '../../Loader'

// {...{
//     eduLevelName,
//     setEduLevelName,
//     eduDoocTypes,
//     setEduDocTypes,
//     selectedEduDocTypes,
//     setSelectedEduDocTypes
// }}

const Index = ({ onSubmit }) => {

    const [isLoader, setIsLoader] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [surname, setSurname] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [alternateNo, setAlternateNo] = useState('')
    const [id, setId] = useState('')
    const [idTypeName, setIdTypeName] = useState('')
    const [idTypes, setIdTypes] = useState([])
    const [idDocuments, setIdDocuments] = useState({})
    const [date, setDate] = useState(new Date())
    const [eduLevelName, setEduLevelName] = useState('')
    const [eduLevels, setEduLevels] = useState([])
    const [eduDocuments, setEduDocuments] = useState({})
    const [revAuthNo, setRevAuthNo] = useState('')
    const [revAuthCert, setRevAuthCert] = useState({})
    const [currentResidence, setCurrentResidence] = useState('')
    const [isShownDate, setIsShownDate] = useState(false)
    const [totalServices, setTotalServices] = useState([])
    const [selectedServices, setSelectedServices] = useState([])
    const [selectedServicesNames, setSelectedServicesNames] = useState('')
    const [totalRoutes, setTotalRoutes] = useState([])
    const [selectedRoutes, setSelectedRoutes] = useState([])
    const [selectedRoutesNames, setSelectedRoutesNames] = useState('')

    const firstNameRef = useRef()
    const middleNameRef = useRef()
    const surnameRef = useRef()
    const emailRef = useRef()
    const alternateNoRef = useRef()
    const idRef = useRef()
    const idTypeRef = useRef()
    const revAuthRef = useRef()
    const residRef = useRef()


    const { token } = useSelector(state => state.Auth)

    const multipleRequestsHandler = (toLoad, setToLoad) => {

        const reqFetch4 = async () => {
            console.log('Fetch 4 in chain');
            api(async () => {

                const config = {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                }
                const r = await fetch(`${BASE_URL}routes`, config)
                const response = await r.json()

                if (response?.data?.length > 0 && totalRoutes.length === 0) {
                    for (ele of response?.data) {
                        totalServices.push(ele?.attributes)
                    }
                }

            }, lastCB)
        }

        const reqFetch3 = async () => {

            console.log('Fetch 3 in chain');

            api(async () => {

                const config = {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                }
                const r = await fetch(`${BASE_URL}services`, config)
                const response = await r.json()

                if (response?.data?.length > 0  && totalServices.length === 0) {
                    for (ele of response?.data) {
                        totalServices.push(ele?.attributes)
                    }
                }

            }, reqFetch4)
        }
        const reqFetch2 = async () => {

            
            console.log('Fetch 2 in chain');

            api(async () => {

                //Request Here ID Doc Types

                const config = {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                }
                const r = await fetch(`${BASE_URL}document_types`, config)
                const response = await r.json()

                if (response?.data && idTypes.length === 0) {
                    for (key in response?.data) {
                        idTypes.push({
                            "label": response?.data[key],
                            "value": key
                        })
                    }
                }

                

            }, reqFetch3)
        }

        const reqFetch1 = () => {
            console.log('Fetch 1 in chain');
            api(async () => {

                //Request Here Education Levels

                const config = {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                }
                const r = await fetch(`${BASE_URL}education_levels`, config)
                const response = await r.json()

                if (response?.data && eduLevels.length === 0) {
                    for (key in response?.data) {
                        eduLevels.push({
                            "label": response?.data[key],
                            "value": key
                        })
                    }
                }

            }, reqFetch2)
        }

        const firstCB = reqFetch1;

        const next = (cb) => {
            cb()
        }


        const issue = (err) => {
            console.log('---------------------------------');
            console.log('Issues in Mutiple Request Handler');
            console.log('---------------------------------');
            console.log(err);
            console.log('---------------------------------');
            console.log('Over the Issues -----------------');
            console.log('---------------------------------');
            setToLoad(false)
        }

        const lastCB = () => {
            setToLoad(false)
            setEduLevels(eduLevels)
            setIdTypes(idTypes)
            setTotalRoutes(totalRoutes)
            setTotalServices(totalServices)
        }

        const api = (cb, nextReq) => {
            cb().then(() => {
                next(nextReq)
            }).catch(err => {
                issue(err)
            })
        }

        firstCB()

    }

    useEffect(() => {
        multipleRequestsHandler(isLoader, setIsLoader)
    }, [])

    const onNextPress = () => {

        const config_sample = {
            "firstname": "test werrrrr",
            "middlename": "rrrrrrr",
            "surname": "tttiriti",
            "email": "ericmmmm@gmail.com",
            "identification_doc_type": "passport",
            "identification_number": "HKS122123",
            "identification_doc": "",
            "level_of_education": "",
            "education_certificate": "",
            "revenue_authority_number": "",
            "revenue_authority_certificate": "",
            "current_residence": "Nairobi Kenya",
            "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            "routes": ["08bf7e8c-89d6-49f3-ac59-2db8e0d2032c"],
            "services": [
                "42fade7b-5650-44b9-9e33-d403e93a51be",
                "bcde708a-86b3-4ad4-86a3-ad083d02d25c",
                "fd9a3f01-de6c-4b21-b702-81c7a83c75b0"
            ]
        }

        const edu_levels_sample = [
            { label: 'High School', value: 'High School' },
            { label: 'Undergraduate', value: 'Undergraduate' },
            { label: 'Graduate', value: 'Graduate' },
            { label: 'Masters', value: 'Masters' }, ,
            { label: 'Doctorate', value: 'Doctorate' }, ,
            { label: 'Post Doctorate', value: 'Post Doctorate' },
        ]

    }

    return (
        <View style={{ backgroundColor: colors.White, padding: 8, paddingTop: 24 }}>

            <Loader visible={isLoader} />

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
                    nextRef={revAuthRef} />

                <InputComponentDropdown
                    fieldName={'ID Type'}
                    value={idTypeName}
                    setValue={setIdTypeName}
                    items={idTypes} />

                <InputComponentBoxFiles
                    fieldName={'ID Document'}
                    value={idDocuments}
                    setValue={setIdDocuments} />

                <InputComponentDate
                    date={date}
                    setDate={setDate}
                    fieldName={'Date of Birth'}
                    shown={isShownDate}
                    isShown={setIsShownDate}
                    maxDate={new Date()} />

                <InputComponentDropdown
                    value={eduLevelName}
                    setValue={setEduLevelName}
                    items={eduLevels}
                    fieldName='Education Level'
                />

                <InputComponentBoxFiles
                    fieldName={'Educational Cert.'}
                    value={eduDocuments}
                    setValue={setEduDocuments} />

                <InputComponent
                    fieldName={'Revenue Authority No.'}
                    value={revAuthNo}
                    setter={setRevAuthNo}
                    max={32}
                    ref={revAuthRef}
                    nextRef={residRef} />

                <InputComponentBoxFiles
                    fieldName={'Rev. Auth. Cert.'}
                    value={revAuthCert}
                    setValue={setRevAuthCert} />

                <InputComponent
                    fieldName={'Current Residence'}
                    value={currentResidence}
                    setter={setCurrentResidence}
                    max={128}
                    ref={residRef}
                    nextRef={firstNameRef}
                    multiline />
                {/* 
                <InputComponentBoxAdd
                    fieldName={'Services'}
                    totalData={total}
                />

                <InputComponentBoxAdd
                    fieldName={'Routes'}
                    value={routes}
                    setValue={setRoutes}
                /> */}


                <View style={{
                    marginVertical: 48,
                    flexDirection: 'row',
                    alignItems: 'center',
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
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
        elevation: 4

    }
})