import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'

const Title = ({ text }) => {
    return (
        <View style={{
            flex: 1,
            margin: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                fontFamily: Fonts.SemiBold,
                color: colors.Dark,
                textAlignVertical: 'center',
            }}>{text}</Text>
        </View>

    )
}


const InputComponent = ({
    fieldName,
    val,
    requiredStatus = true,
    setter,
    max = 64,
    keyboardType = 'default',
    currentRef,
    onSubmit,
    multiline = false,
    error = false,
    errorTxt = 'Required'
}) => {
    return (
        <View style={{
            flexDirection: 'row',
        }}>

            <Title text={fieldName} />
            <View style={{
                flex: 2,
                margin: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <TextInput style={{
                    fontFamily: Fonts.SemiBold,
                    color: colors.Dark,
                    textAlignVertical: 'center',
                    borderBottomColor: (error) ? 'red' : colors.Dark,
                    borderBottomWidth: 1,
                    backgroundColor: colors.Light,

                }}
                    ref={currentRef}
                    onSubmitEditing={onSubmit}
                    placeholderTextColor={colors.Grey}
                    value={val}
                    onChangeText={setter}
                    placeholder={fieldName + ((requiredStatus) ? '' : ' (Not mandatory)')}
                    maxLength={max}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    //onBlur={onSubmit}
                />

                {error ?

                    <Text style={{
                        fontFamily: Fonts.Light,
                        color: 'red',
                        textAlign:'right',
                        textAlignVertical:'center'

                    }}>{`* ${errorTxt}`}</Text>

                    :
                    <></>
                }


            </View>
        </View>
    )
}

export default InputComponent;