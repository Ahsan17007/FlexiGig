import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Loader from '../../Loader'
import SimpleToast from 'react-native-simple-toast'


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

const InputComponentBoxAddMultiple = ({
    fieldName,
    totalData,
    onGetSelectedValues,
    selectedDataNames
}) => {

    const [visible, setVisible] = useState(false)
    const [selectedNewData, setSelectedNewData] = useState([])
    const [isLoader, setIsLoader] = useState(false)

    const newData = []

    const onAddValues = () => {

        setIsLoader(true)

        const selectedNamesArrayTemp = []
        const selectedIDsData = []

        
        selectedNewData.forEach(i => {
            let ele = totalData.find((product) => {
                return product?.id == i?.id
            });

            selectedIDsData.push(i?.id)
            selectedNamesArrayTemp.push(ele ? ele.name : '')
        })

        setIsLoader(false)
        console.log('Selected IDs');
        console.log(selectedIDsData);
        console.log('Selected Names');
        console.log(selectedNamesArrayTemp);
        onGetSelectedValues(selectedIDsData, (selectedNamesArrayTemp.length===selectedNewData.length)? selectedNamesArrayTemp.join(', '): '')
        setVisible(false)
    }

    if (newData.length === 0) {
        for (let index = 0; index < totalData.length; index++) {
            const element = totalData[index];
            newData.push({
                "id": element?.id,
                "item": element?.name
            })
        }
    }

    function onMultiChange() {
        return (item) => setSelectedNewData(xorBy(selectedNewData, [item], 'id'))
    }

    const mainColor = colors.Primary

    if (selectedNewData.length > 4) {
        SimpleToast.show('You can select a maximum of 5 '+fieldName)
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

                    <Text style={{
                        textAlignVertical: 'center',
                        padding: 8,
                        color: colors.Black,
                        fontFamily: Fonts.Regular,
                        borderWidth: 1,
                        borderColor: colors.Black,
                        borderRadius: 4
                    }}>

                        {selectedDataNames}

                    </Text>

                </View>

                <Modal visible={visible}>
                    <View style={{ padding: 8, flex: 1 }}>

                        <SelectBox
                            label={"Select up to 5 " + fieldName}
                            options={newData}
                            selectedValues={selectedNewData}
                            onMultiSelect={onMultiChange()}
                            onTapClose={onMultiChange()}
                            isMulti
                            labelStyle={{
                                fontFamily: Fonts.SemiBold,
                                color: colors.Primary,
                                marginVertical: 8,
                                fontSize: 18
                            }}
                            multiOptionContainerStyle={{
                                backgroundColor: mainColor
                            }}
                            multiOptionsLabelStyle={{
                                fontFamily: Fonts.Regular,
                                fontSize: 12
                            }}
                            optionsLabelStyle={{
                                fontFamily: Fonts.Light
                            }}
                            toggleIconColor={mainColor}
                            searchIconColor={mainColor}
                            arrowIconColor={mainColor}
                            containerStyle={{
                            }}
                        />

                        <Loader visible={isLoader} />

                        <View style={{
                            marginVertical:16
                        }}>

                        {
                            (selectedNewData.length < 5 && selectedNewData.length > 0)
                                ?
                                <TouchableOpacity onPress={onAddValues} style={[styles.button, {
                                    alignSelf: 'center',
                                    margin: 32
                                }]}>
                                    <Text style={styles.addSkillButtonText}>
                                        {`Add ${fieldName}`}
                                    </Text>
                                </TouchableOpacity>
                                : <></>
                        }

                        <TouchableOpacity onPress={()=> {
                            setVisible(false)
                        }} style={[styles.button, {
                                    alignSelf: 'center',
                                    elevation:2,
                                    backgroundColor: colors.White
                                }]}>
                                    <Text style={[styles.addSkillButtonText,{
                                        color:colors.Black
                                    }]}>
                                        {`Go back to Personal Details`}
                                    </Text>
                                </TouchableOpacity>

                        </View>

                        


                    </View>
                </Modal>


            </View>

            <TouchableOpacity onPress={() => {
                setVisible(true)
            }} style={styles.btn}>
                <Text style={[styles.addSkillButtonText,{
                    color: colors.Black,
                    fontFamily:Fonts.Regular
                }]}>
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
        
        padding: 8,
        borderColor: colors.Primary,
        backgroundColor: colors.Primary,
        borderWidth: 1,
        borderRadius: 8,
        width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        alignSelf: 'flex-end',
        marginHorizontal: 4,
        marginVertical:16
    },
    addSkillButtonText: {
        color: colors.White,
        fontFamily: Fonts.SemiBold
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
        alignSelf: 'flex-end',
        marginHorizontal: 4

    }
})