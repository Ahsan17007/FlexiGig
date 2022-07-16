import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import { Picker } from '@react-native-picker/picker';
import InputField from '../../InputField'


const Title = ({ text }) => {
    return (
        <View style={{
            flex: 1,
            margin: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                fontFamily: Fonts.SemiBold,
                color: colors.Black,
                textAlignVertical: 'center',
            }}>
                {text}
            </Text>
        </View>
    )
}

const Mod = ({ visible, setVisible, value, setValue, fieldName, onAddBtnClick, onCancelBtnClick }) => {

    const [val, setVal] = useState('')


    return (
        <Modal
            visible={visible}
            style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}

            animationType='fade'
            transparent={true}
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.25)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.mainView}>
                    <Text style={styles.message}>{'Enter Your ' + fieldName}</Text>

                    <TextInput value={val} onChangeText={(t) => setVal(t)} placeholder='Single Value' />

                    <View style={styles.buttonsContainer}>

                        <TouchableOpacity onPress={()=> {
                            console.log('Cancel Button');
                            onCancelBtnClick()
                        }} style={styles.button} >
                            <Text style={styles.btnText}>
                                {'Cancel'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={()=> {
                            onAddBtnClick(val)
                            setVal('')
                            }}>
                            <Text style={styles.btnText}>
                                {'Add'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </Modal>
    )
}

const ValCom = ({ visible, setVisible, value, setValue, fieldName, onAddBtnClick, onCancelBtnClick  }) => {

    const itemsCSV = value.join(', ')

    return (

        <View>

            <Mod setVisible={setVisible} {...{ visible, value, setValue, fieldName, onAddBtnClick, onCancelBtnClick  }} />

            <Text style={{
                textAlignVertical: 'center',
                padding: 4,
                color: colors.Black,
                fontFamily: Fonts.Light,
                borderWidth: 1,
                borderColor: colors.Black,
                borderRadius: 4
            }}>

                {itemsCSV}

            </Text>

        </View>

    )
}

const InputComponentBoxAddMultiple = ({ fieldName, totalData, setTotalData, selectedData, setSelectedData, selectedNames, setSelectedNames }) => {

    const [visible, setVisible] = useState(false)


    const onAddBtnClick = (val) => {

        if (val != '') {
            setValue([...value, val])
        }

        setVisible(false)

    }

    const onCancelBtnClick = () => {
        setVisible(false)
    }


    return (

        <>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginRight: 3,
                marginVertical: 4
            }}>
                <View style={{ flex: 1, margin: 1 }}>
                    <Title text={fieldName} />

                </View>


                <View style={{ flex: 2, margin: 1 }}>

                    <ValCom setVisible={setVisible}  {...{ visible, value, setValue, fieldName, onAddBtnClick, onCancelBtnClick }} />

                </View>


            </View>

            <TouchableOpacity onPress={()=> {
                setVisible(true)
            }} style={styles.btn}>
                <Text style={styles.addSkillButtonText}>
                    {`Add`}
                </Text>
            </TouchableOpacity>
        </>

    )
}

export default InputComponentBoxAddMultiple;

const styles = StyleSheet.create({
    mainView: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 16,
        backgroundColor: colors.White,
        elevation: 2,
        borderWidth: 1,
        borderColor: colors.Primary,
        flexDirection: 'column',
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    },
    message: {
        fontFamily: Fonts.SemiBold,
        color: colors.Black,
        marginVertical: 16

    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginVertical: 2,
        marginTop: 8
    },
    btnText: {
        fontFamily: Fonts.SemiBold,
        color: colors.White,
    },
    button: {
        backgroundColor: colors.Primary,
        borderRadius: 16,
        paddingHorizontal: 32,
        paddingVertical: 4,
        marginHorizontal: 8
    },
    addSkillButtonText: {
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
        elevation: 1,
        alignSelf:'flex-end',
        marginHorizontal:4

    }
})