import React, { useState } from 'react'
import { View, BackHandler, StyleSheet, Image, KeyboardAwareScrollView, TouchableOpacity, Text } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import InputComponent from '../../../Components/Forms/Experience/InputComponent'
import DatePicker from 'react-native-date-picker'
import SimpleToast from 'react-native-simple-toast'

import { BASE_URL } from '../../../Api/config'

import Loader from '../../../Components/Loader'

import { useSelector } from 'react-redux'

const AddExperience = ({ isNeedToPutDetails, setIsNeedToPutDetails, needToFetch, setNeedToFetch }) => {
    const [role, setRole] = useState('')
    const [placeOfWork, setPlaceOfWork] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [shownStartDate, setShownStartDate] = useState(false)
    const [shownEndDate, setShownEndDate] = useState(false)
    const [isLoad, setIsLoad] = useState(false)

    const { token } = useSelector(state => state.Auth)

    const onGoBack = () => {
        setIsNeedToPutDetails(false)
    }

    const onsubmit = async () => {

        const sDateString = (startDate.toISOString().split('T'))[0];
        const eDateString = (endDate.toISOString().split('T'))[0];

        if (role === '' || placeOfWork === '' || description === '') {
            SimpleToast.show('All fields are mandatory')
        }

        else if (sDateString === eDateString) {
            SimpleToast.show('Select Proper Dates')
        }

        else {
            setIsLoad(true)
            const config = {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "role": role,
                    "company": placeOfWork,
                    "start_date": sDateString,
                    "end_date": eDateString,
                    "description": description
                })
            }
            const r = await fetch(`${BASE_URL}work_experiences`, config)
            const response = await r.json()

            console.log('I am response');
            console.log(response);

            if (response && response?.error?.message != 'Invalid token') {
                setIsLoad(false)
                setNeedToFetch(true)
                setIsNeedToPutDetails(false)
                setRole('')
                setPlaceOfWork('')
                setDescription('')
            }
            else {
                SimpleToast.show('Failed Adding Experience')
                setIsLoad(false)
            }
        }


        console.log((startDate.toISOString().split('T'))[0]);
    }

    BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
            setIsNeedToPutDetails(false)
        }
    );

    return (
        <View style={{ backgroundColor: colors.White, padding: 8, paddingTop: 24 }}>

            <Loader visible={isLoad} />
            <InputComponent
                fieldName={'Role'}
                value={role}
                setter={setRole}
                max={16} />

            <InputComponent
                fieldName={'Place of Work'}
                value={placeOfWork}
                setter={setPlaceOfWork}
                max={16}
            />

            <InputComponent
                fieldName={'Job Description'}
                value={description}
                setter={setDescription}
                max={256}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginVertical: 32
            }}>


                <Text style={{
                    fontFamily: Fonts.Medium,
                    color: colors.Black
                }}>
                    From

                </Text>
                <TouchableOpacity onPress={() => {
                    setShownStartDate(true)
                }}>
                    <Image source={require('../../../Assets/Images/calendar.png')} style={styles.img} />
                    <DatePicker
                        title={'Start Date'}
                        modal={true}
                        open={shownStartDate}
                        date={startDate}
                        onConfirm={(date) => {
                            setShownStartDate(false)
                            setStartDate(date)
                        }}
                        maximumDate={endDate}
                        onCancel={() => {
                            setShownStartDate(false)
                        }}
                        mode='date'
                    />
                </TouchableOpacity>

                <Text style={{
                    fontFamily: Fonts.Medium,
                    color: colors.Black
                }}>
                    To

                </Text>
                <TouchableOpacity onPress={() => {
                    setShownEndDate(true)
                }}>
                    <Image source={require('../../../Assets/Images/calendar.png')} style={styles.img} />
                    <DatePicker
                        title={'End Date'}
                        modal={true}
                        open={shownEndDate}
                        date={endDate}
                        minimumDate={startDate}
                        onConfirm={(date) => {
                            setShownEndDate(false)
                            setEndDate(date)
                        }}
                        onCancel={() => {
                            setShownEndDate(false)
                        }}
                        mode='date' />
                </TouchableOpacity>

            </View>


            <View style={{
                marginVertical: 48,
                marginHorizontal: 32,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16

            }}>


                <TouchableOpacity onPress={onGoBack} style={styles.btn}>
                    <Text style={styles.btnText}>
                        Go Back
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={onsubmit} style={styles.btn}>
                    <Text style={styles.btnText}>
                        Submit
                    </Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default AddExperience

const styles = StyleSheet.create({
    btnText: {
        color: colors.Black,
        fontFamily: Fonts.Regular
    },
    btn: {
        padding: 4,
        borderColor: colors.Secondary,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.White,
        elevation: 4,


    },
    img: {
        width: 32,
        height: 32
    }
})