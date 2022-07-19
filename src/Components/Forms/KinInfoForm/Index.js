import React, { useRef, useState } from 'react'
import {  View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import InputComponent from './InputComponent'
import { useSelector } from 'react-redux'
import SimpleToast from 'react-native-simple-toast'


const Index = ({ onSubmit, navigation, need, setNeed }) => {

const { token } = useSelector(state => state.Auth)

    const [firstName, setFirstName] = useState('')
    const [relationship, setRelationship] = useState('')
    const [alternateNo, setAlternateNo] = useState('')
    const [isAdding, setIsAdding] = useState(false)

    const nameR = useRef()
    const relR = useState()
    const noR = useState()

    const onNextPress = () => {
        navigation.navigate('Experience')
    }

    const onAddMorePress = () => {


        if (firstName === '' || relationship === '' || alternateNo === '' || alternateNo.length < 10) {
            SimpleToast.show('All fields are mandatory')
        }

        else {
            setIsAdding(true)
            setNeed(true)
            onSubmit({
                "name": firstName,
                "phone_number": alternateNo,
                "relationship": relationship
            }, setIsAdding, setFirstName, setRelationship, setAlternateNo )
            
        }
    }

    return (
        <View style={{ backgroundColor: colors.White, padding: 8, paddingTop: 24 }}>

            <KeyboardAwareScrollView>

                <InputComponent
                    fieldName={'Name'}
                    value={firstName}
                    setter={setFirstName}
                    max={16}
                    ref={nameR}
                    nextRef={relR} />

                <InputComponent
                    fieldName={'Relationship'}
                    value={relationship}
                    setter={setRelationship}
                    max={16}
                    ref={relR}
                    nextRef={noR}
                />


                <InputComponent
                    fieldName={'Phone No.'}
                    value={noR}
                    setter={setAlternateNo}
                    max={13}
                    ref={nameR}
                    keyboardType='phone-pad' />


                <View style={{
                    marginVertical: 28,
                    marginHorizontal: 32,
                    flexDirection: 'row',
                    justifyContent: 'center'

                }}>

                    <TouchableOpacity onPress={onAddMorePress} style={[styles.btn, {
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',

                    }]}
                        disabled={isAdding}
                    >
                        {
                            (isAdding) ?
                                <ActivityIndicator color={colors.Secondary} />
                                :
                                <Text style={styles.btnText}>
                                    Add
                                </Text>

                        }



                    </TouchableOpacity>
{/* 
                    <TouchableOpacity onPress={onNextPress} style={styles.btn}>
                        <Text style={styles.btnText}>
                            Next
                        </Text>
                    </TouchableOpacity> */}

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
        elevation: 4,
        alignSelf:'center'

    }
})