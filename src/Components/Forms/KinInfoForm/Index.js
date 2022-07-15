import React, { useRef, useState } from 'react'
import { Touchable, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import InputComponent from './InputComponent'

const Index = ({ onSubmit }) => {

    const [firstName, setFirstName] = useState('')
    const [relationship, setRelationship] = useState('')
    const [alternateNo, setAlternateNo] = useState('')

    const firstNameRef = useRef()
    const relationshipRef = useState()
    const alternateNoRef = useState()

    const onNextPress = () => {

    }

    const onAddMorePress = () => {

    }

    return (
        <View style={{ backgroundColor: colors.White, padding: 8, paddingTop: 24 }}>

            <KeyboardAwareScrollView>

                <InputComponent
                    fieldName={'Name'}
                    value={firstName}
                    setter={setFirstName}
                    max={16}
                    ref={firstNameRef}
                    nextRef={relationshipRef} />

                <InputComponent
                    fieldName={'Relationship'}
                    value={relationship}
                    setter={setRelationship}
                    max={16}
                    ref={relationshipRef}
                    nextRef={alternateNoRef}
                />


                <InputComponent
                    fieldName={'Phone No.'}
                    value={alternateNo}
                    setter={setAlternateNo}
                    max={13}
                    ref={alternateNoRef}
                    keyboardType='phone-pad' />


                <View style={{
                    marginVertical: 48,
                    marginHorizontal: 32,
                    flexDirection:'row',
                    justifyContent:'space-between'

                }}>

                    <TouchableOpacity onPress={onAddMorePress} style={styles.btn}>
                        <Text style={styles.btnText}>
                            Add More
                        </Text>
                    </TouchableOpacity>

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