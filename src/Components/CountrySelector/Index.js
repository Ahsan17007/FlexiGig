import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Modal } from "react-native";
import colors from '../../Assets/Colors/Index';
import Fonts from "../../Assets/Fonts/Index";
import CountryView from "./CountryView";
import ModalView from "./ModalView";


export const SampleCountryViewData = {
    "id": "9e86a9f0-653c-4d73-8dda-a4e539a1bc26",
    "type": "country",
    "attributes": {
        "id": "9e86a9f0-653c-4d73-8dda-a4e539a1bc26",
        "name": "Kenya",
        "country_code": "+254",
        "cca": "KE",
        "flag": "https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg"
    },
    "relationships": {
        "regions": {
            "data": []
        }
    }
}

const Index = ({ data, onCountryItemClick, mainContainerStyle, selectedCountryCode, select=false, setSelect, firstCountry }) => {

    const [visibility, setVisibility] = React.useState(false)
    const [displayObject, setDisplayObject] = React.useState(null)
    
    if (selectedCountryCode && data) {
        
        data.map(ele=>{
            const selectedCountryLocal = data.find((b) => (b.attributes.country_code === selectedCountryCode));
            if (selectedCountryLocal) {
                setDisplayObject(selectedCountryLocal)
            }
        })
        
    }

    const objToShow = displayObject ? displayObject : (data ? data[0] : null);

    if (select) {
        firstCountry(objToShow)
        setSelect(false)
    }

    return (visibility) ?
        (
            <View style={styles.mainContainer}>
                <ModalView visibility={visibility} setVisibility={setVisibility} data={data} onCountryItemClick={onCountryItemClick} setDisplayObject={setDisplayObject} />
            </View>
        )
        :

        (

            <View style={[{

                backgroundColor: colors.PrimaryContainer,

            }, mainContainerStyle, styles.mainContainer]}>

                <CountryView
                    countryData={objToShow}
                    clickable={true}
                    isCallingCodeVisible={false}
                    onCountryItemClick={
                        () => { setVisibility(true) }
                    }
                    arrow={true}
                    elevated={true} />

            </View>
        )
}


export default Index;

const styles = StyleSheet.create({
    mainContainer: {
        height: 52,
        margin: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2
    },
    countryClickable: {

    },
    flagImage: {
        margin: 2
    },
    countryNameText: {
        marginHorizontal: 4,
        fontFamily: Fonts.SemiBold,
        color: colors.Dark,
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
        color: colors.Dark,
        textAlignVertical: 'center'
    }
})