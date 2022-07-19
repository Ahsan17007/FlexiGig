import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import InputComponent from './InputComponent'
import InputComponentDropdown from './InputComponentDropdown'
import InputComponentDate from './InputComponentDate'
import InputComponentBoxFiles from './InputComponentBoxFiles'
import InputComponentBoxAddMultiple from './InputComponentBoxAddMultiple'
import { useSelector } from 'react-redux'

import { BASE_URL } from '../../../Api/config'
import Loader from '../../Loader'
import SimpleToast from 'react-native-simple-toast'

const d = new Date()
d.setFullYear(d.getFullYear()-18)

const Index = ({ navigation, onSubmit }) => {

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
    const [idDocuments, setIdDocuments] = useState(null)
    const [date, setDate] = useState(d)
    const [eduLevelName, setEduLevelName] = useState('')
    const [eduLevels, setEduLevels] = useState([])
    const [eduDocuments, setEduDocuments] = useState(null)
    const [revAuthNo, setRevAuthNo] = useState('')
    const [revAuthCert, setRevAuthCert] = useState(null)
    const [currentResidence, setCurrentResidence] = useState('')
    const [isShownDate, setIsShownDate] = useState(false)
    const [totalServices, setTotalServices] = useState([])
    const [selectedServices, setSelectedServices] = useState(null)
    const [selectedServicesNames, setSelectedServicesNames] = useState('')
    const [totalRoutes, setTotalRoutes] = useState([])
    const [selectedRoutes, setSelectedRoutes] = useState(null)
    const [selectedRoutesNames, setSelectedRoutesNames] = useState('')


    const [isCam, setIsCam] = useState(false)

    const firstNameRef = useRef()
    const middleNameRef = useRef()
    const surnameRef = useRef()
    const emailRef = useRef()
    const alternateNoRef = useRef()
    const idRef = useRef()
    const revAuthRef = useRef()
    const residRef = useRef()


    const { token } = useSelector(state => state.Auth)
    const { idDoc, eduDoc, revDoc } = useSelector(state => state.DocFileReducer)

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
                        totalRoutes.push(ele?.attributes)
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

                if (response?.data?.length > 0 && totalServices.length === 0) {
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

    const wrap = (string) => {
        return string.length > 0
    }

    const onNextPress = () => {

        const areRequiredFieldsAvailable =
            (
                wrap(firstName) &&
                wrap(surname) &&
                wrap(gender) &&
                wrap(email) &&
                wrap(id) &&
                wrap(idTypeName) &&
                (idDocuments.uri) &&
                date &&
                wrap(eduLevelName) &&
                (eduDocuments.uri) &&
                wrap(revAuthNo) &&
                (revAuthCert.uri) &&
                wrap(currentResidence) &&
                wrap(selectedServices) &&
                wrap(selectedRoutes)
            )

        console.log('Fields Data Input Valid ' + areRequiredFieldsAvailable);

        const areFieldsAccordingToLength = true

        if (!areRequiredFieldsAvailable || !areFieldsAccordingToLength) {
            if (!areRequiredFieldsAvailable) {
                SimpleToast.show('Please put all the required fields carefully')
            }
            else {
                SimpleToast.show('Please fill all the required fields in right format')
            }
        }
        else {
            const data_body = {
                "firstname": firstName,
                "middlename": middleName,
                "surname": surname,
                "email": email,
                "identification_doc_type": idTypeName,
                "identification_number": id,
                "identification_doc": (idDocuments) ? idDocuments?.uri : idDoc,
                "level_of_education": eduLevelName,
                "education_certificate": (eduDocuments) ? eduDocuments?.uri : eduDoc,
                "revenue_authority_number": revAuthNo,
                "revenue_authority_certificate": (revAuthCert) ? revAuthCert?.uri : revDoc,
                "current_residence": currentResidence,
                "avatar": "",
                "routes": [],
                "services": [],
                
            }

            onSubmit(data_body)

        }
    }

    const onGetSelectedServices = (data, selectedNamesString) => {
        
        setSelectedServicesNames(selectedNamesString)

        console.log('Selected Services are in f');
        console.log(selectedServices);
    }

    const onGetSelectedRoutes = (data, selectedNamesString) => {
        
        setSelectedRoutesNames(selectedNamesString)
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
                    requiredStatus={false}
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
                    value={(idDocuments) ? idDocuments : idDoc}
                    setValue={setIdDocuments} 
                    onCamOn={()=>{
                        navigation.navigate("ICamera", {
                            type: 'I' 
                         })
                    }}
                    />

                <InputComponentDate
                    date={d}
                    setDate={setDate}
                    fieldName={'Date of Birth'}
                    shown={isShownDate}
                    isShown={setIsShownDate}
                    maxDate={d} />

                <InputComponentDropdown
                    value={eduLevelName}
                    setValue={setEduLevelName}
                    items={eduLevels}
                    fieldName='Education Level'
                />

                <InputComponentBoxFiles
                    fieldName={'Educational Cert.'}
                    value={(eduDocuments) ? eduDocuments : eduDoc}
                    setValue={setEduDocuments} 
                    onCamOn={()=>{
                        navigation.navigate('ICamera', {
                           type: 'E' 
                        })
                    }}
                    // {...{
                    //     isCam,
                    //     setIsCam
                    // }}
                    />

                <InputComponent
                    fieldName={'Revenue Authority No.'}
                    value={revAuthNo}
                    setter={setRevAuthNo}
                    max={32}
                    ref={revAuthRef}
                    nextRef={residRef} />

                <InputComponentBoxFiles
                    fieldName={'Rev. Auth. Cert.'}
                    value={(revAuthCert) ? revAuthCert : revDoc}
                    setValue={setRevAuthCert} 
                    onCamOn={()=>{
                        navigation.navigate('ICamera', {
                            type: 'R' 
                         })
                    }}
                    // {...{
                    //     isCam,
                    //     setIsCam
                    // }}
                    />

                <InputComponent
                    fieldName={'Current Residence'}
                    value={currentResidence}
                    setter={setCurrentResidence}
                    max={128}
                    ref={residRef}
                    nextRef={firstNameRef}
                    multiline />

                <InputComponentBoxAddMultiple
                    fieldName={'Services'}
                    totalData={totalServices}
                    onGetSelectedValues={onGetSelectedServices}
                    selectedDataNames={selectedServicesNames}
                    ss={setSelectedServices}

                />

                <InputComponentBoxAddMultiple
                    fieldName={'Routes'}
                    totalData={totalRoutes}
                    onGetSelectedValues={onGetSelectedRoutes}
                    selectedDataNames={selectedRoutesNames}
                    ss={setSelectedRoutes}

                />


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