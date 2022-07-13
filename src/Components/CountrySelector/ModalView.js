import React from "react";
import { Text, TouchableOpacity, View, FlatList, StyleSheet, Modal, Image } from "react-native";
import colors from '../../Assets/Colors/Index';
import Fonts from "../../Assets/Fonts/Index";
import CountryView from "./CountryView";

const ModalView = ({ visibility, setVisibility, data, onCountryItemClick, setDisplayObject }) => {


    return (
        <Modal visible={visibility} style={{ height: '100%', width: '100%' }} animationType='slide'>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                margin: 8
            }}>

                <View style={{ flex: 1, flexDirection:'row', alignItems:'center' }}>

                    <View style={{ flex: 5, paddingLeft:4 }}>

                        <Text style={{
                            fontFamily:Fonts.Bold,
                            color:colors.Black,
                            fontSize:18,

                        }}>
                            {`Select Your Country`}
                        </Text>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <TouchableOpacity onPress={() => {
                            setVisibility(false)
                        }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginHorizontal: 8 }}>

                            <Image source={require('../../Assets/Images/cross.png')} style={{ width: 14, height: 14 }} />

                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{ flex: 9, justifyContent: 'flex-start' }}>

                    <FlatList data={data ? data : []} renderItem={
                        ({ item, index }) => {
                            return (
                                <CountryView
                                    countryData={item}
                                    arrow={false}
                                    clickable={true}
                                    elevated={false}
                                    isCallingCodeVisible={true}
                                    onCountryItemClick={(displayObject) => {
                                        setDisplayObject(displayObject)
                                        onCountryItemClick(displayObject)
                                        setVisibility(false)
                                    }} />
                            )
                        }
                    } keyExtractor={(item, index) => {
                        return 'item-' + index
                    }} />

                </View>






            </View>


        </Modal>
    )
}


export default ModalView;

const styles = StyleSheet.create({
    mainContainer: {
        height: 52,
        margin: 8,
        backgroundColor: colors.PrimaryContainer,
        flexDirection: 'row',
        alignItems: 'center'
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4
    },
    countryClickable: {

    },
    flagImage: {
        margin: 2
    },
    countryNameText: {
        marginHorizontal: 4,
        fontFamily: Fonts.SemiBold,
        color: colors.Black,
        textAlignVertical: 'center'
    },
    countryCodeText: {
        marginHorizontal: 2,
        fontFamily: Fonts.Regular,
        textAlignVertical: 'center',
        fontSize: 10
    },
    noCountryText: {
        marginHorizontal: 4,
        fontFamily: Fonts.Light,
        color: colors.Black,
        textAlignVertical: 'center'
    }
})