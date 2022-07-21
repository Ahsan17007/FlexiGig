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
    //const [selectedServices, setSelectedServices] = useState(null)
    const [selectedServicesNames, setSelectedServicesNames] = useState('')
    const [totalRoutes, setTotalRoutes] = useState([])
    //const [selectedRoutes, setSelectedRoutes] = useState(null)
    const [selectedRoutesNames, setSelectedRoutesNames] = useState('')


    // const firstNameRef = useRef()
    // const middleNameRef = useRef()
    // const surnameRef = useRef()
    // const emailRef = useRef()
    // const alternateNoRef = useRef()
    // const idRef = useRef()
    // const revAuthRef = useRef()
    // const residRef = useRef()


    const { token } = useSelector(state => state.Auth)
    const { selectedServices, selectedRoutes } = useSelector(state => state.SerRouSel)
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
                email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) &&
                wrap(alternateNo) &&
                wrap(id) &&
                wrap(idTypeName) &&
                (idDoc || idDocuments) &&
                date &&
                wrap(eduLevelName) &&
                (eduDoc || eduDocuments) &&
                wrap(revAuthNo) &&
                (revDoc || revAuthCert) &&
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
                "gender": gender,
                "email": email,
                "alt_phone": alternateNo,
                "identification_doc_type": idTypeName,
                "identification_number": id,
                "identification_doc": (idDocuments) ? idDocuments?.uri : idDoc?.uri,
                "dob": date,
                "level_of_education": eduLevelName,
                "education_certificate": (eduDocuments) ? eduDocuments?.uri : eduDoc?.uri,
                "revenue_authority_number": revAuthNo,
                "revenue_authority_certificate": (revAuthCert) ? revAuthCert?.uri : revDoc?.uri,
                "current_residence": currentResidence,
                "avatar": "",
                "routes": selectedRoutes,
                "services": selectedServices,
                
            }

            console.log(data_body);

            onSubmit(data_body)

        }
    }

    const onGetSelectedServices = (selectedNamesString) => {
        setSelectedServicesNames(selectedNamesString)
        
        setTimeout(()=> {
            setIsLoader(false)
        }, 1000)
    }

    const onGetSelectedRoutes = (selectedNamesString) => {
        setSelectedRoutesNames(selectedNamesString)
        console.log("SS ROUTES");
        console.log(selectedRoutes);
        setTimeout(()=> {
            setIsLoader(false)
        }, 1000)
    }

    return (
        <View style={{ backgroundColor: colors.Light, padding: 8, paddingTop: 24 }}>

            <Loader visible={isLoader} />

            <KeyboardAwareScrollView>

                <InputComponent
                    fieldName={'First Name'}
                    val={firstName}
                    setter={setFirstName}
                    max={16}/>

                <InputComponent
                    fieldName={'Middle Name'}
                    val={middleName}
                    setter={setMiddleName}
                    max={16}
                    requiredStatus={false}/>

                <InputComponent
                    fieldName={'Surname'}
                    val={surname}
                    setter={setSurname}
                    max={16}
                />

                <InputComponentDropdown
                    val={gender}
                    setValue={setGender}
                    items={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' }
                    ]}
                    fieldName='Gender'
                />

                <InputComponent
                    fieldName={'Email'}
                    val={email}
                    setter={setEmail}
                    keyboardType='email-address'
                    
                    />

                <InputComponent
                    fieldName={'Alternate Phone No.'}
                    val={alternateNo}
                    setter={setAlternateNo}
                    max={13}
                    keyboardType='phone-pad' />


                <InputComponent
                    fieldName={'Id Number'}
                    val={id}
                    setter={setId}
                    max={32} />

                <InputComponentDropdown
                    fieldName={'ID Type'}
                    val={idTypeName}
                    setValue={setIdTypeName}
                    items={idTypes} />

                <InputComponentBoxFiles
                    fieldName={'ID Document'}
                    val={(idDocuments) ? idDocuments : idDoc}
                    setValue={setIdDocuments} 
                    onCamOn={()=>{
                        navigation.navigate("ICamera", {
                            type: 'I' 
                         })
                    }}
                    />

                <InputComponentDate
                    date={date}
                    setDate={setDate}
                    fieldName={'Date of Birth'}
                    shown={isShownDate}
                    isShown={setIsShownDate}
                    maxDate={d} />

                <InputComponentDropdown
                    val={eduLevelName}
                    setValue={setEduLevelName}
                    items={eduLevels}
                    fieldName='Education Level'
                />

                <InputComponentBoxFiles
                    fieldName={'Educational Cert.'}
                    val={(eduDocuments) ? eduDocuments : eduDoc}
                    setValue={setEduDocuments} 
                    onCamOn={()=>{
                        navigation.navigate('ICamera', {
                           type: 'E' 
                        })
                    }}/>

                <InputComponent
                    fieldName={'Revenue Authority No.'}
                    val={revAuthNo}
                    setter={setRevAuthNo}
                    max={32}/>

                <InputComponentBoxFiles
                    fieldName={'Rev. Auth. Cert.'}
                    val={(revAuthCert) ? revAuthCert : revDoc}
                    setValue={setRevAuthCert} 
                    onCamOn={()=>{
                        navigation.navigate('ICamera', {
                            type: 'R' 
                         })
                    }}/>

                <InputComponent
                    fieldName={'Current Residence'}
                    val={currentResidence}
                    setter={setCurrentResidence}
                    max={128}
                    multiline />

                <InputComponentBoxAddMultiple
                    fieldName={'Services'}
                    totalData={totalServices}
                    onGetSelectedValues={onGetSelectedServices}
                    selectedDataNames={selectedServicesNames}
                    type='S'
                    setIsLoader={setIsLoader}

                />

                <InputComponentBoxAddMultiple
                    fieldName={'Routes'}
                    totalData={totalRoutes}
                    onGetSelectedValues={onGetSelectedRoutes}
                    selectedDataNames={selectedRoutesNames}
                    type='R'
                    setIsLoader={setIsLoader}

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
        color: colors.Dark,
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
        backgroundColor: colors.Light,
        elevation: 4

    }
})