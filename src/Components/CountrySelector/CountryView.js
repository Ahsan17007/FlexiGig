import { forModalPresentationIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import colors from '../../Assets/Colors/Index';
import Fonts from "../../Assets/Fonts/Index";

const CountryView = ({ countryData, clickable = false, onCountryItemClick, isCallingCodeVisible = false, arrow = false, elevated = false, selectedCountryCode }) => {

    
    
    if (!countryData) {
        return (
            <View style={styles.mainContainer}>

                <Text style={styles.noCountryText}>{'No Country'}</Text>

            </View>
        )
    }

    else {
        return (
            <View style={styles.mainContainer}>

                <TouchableOpacity onPress={() => {

                    if (clickable) {
                        onCountryItemClick(countryData)
                    }

                }} style={styles.countryClickable}>

                    <View style={{ flexDirection: 'row', padding: 4, elevation: (elevated) ? 4 : 0 }}>
                        <View style={styles.innerContainer}>

                            <Image source={{
                                uri: countryData?.attributes?.flag,
                                height: 20,
                                width: 30
                            }} 
                            style={styles.flagImage} />


                            <Text style={styles.countryNameText}>{countryData?.attributes?.name}</Text>

                            {
                                (isCallingCodeVisible) ? (
                                    <>
                                        <Text style={styles.countryCodeText}>{`(${countryData?.attributes?.country_code})`}</Text>
                                    </>
                                ) : (
                                    <>

                                    </>
                                )
                            }

                            {
                                (arrow) ? (
                                    <>
                                        <Image source={require('../../Assets/Images/arrow-down.png')} style={{
                                            height: 8, width: 8, margin: 4
                                        }} />
                                    </>
                                ) : (
                                    <>

                                    </>
                                )
                            }




                        </View>

                    </View>



                </TouchableOpacity>

            </View>
        )
    }
}

export default CountryView;

const styles = StyleSheet.create({
    mainContainer: {

    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 1,
        backgroundColor: colors.White
    },
    countryClickable: {

    },
    flagImage: {
        margin: 2,
        backgroundColor: colors.White
    },
    countryNameText: {
        marginHorizontal: 4,
        fontFamily: Fonts.SemiBold,
        color: colors.Black,
        textAlignVertical: 'center',
        backgroundColor: colors.White
    },
    countryCodeText: {
        marginHorizontal: 2,
        fontFamily: Fonts.Regular,
        textAlignVertical: 'center',
        backgroundColor: colors.White,
        fontSize: 10
    },
    noCountryText: {
        marginHorizontal: 4,
        fontFamily: Fonts.Light,
        color: colors.Black,
        textAlignVertical: 'center'
    }
})