import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';
import Loader from '../../Components/Loader';
import { BASE_URL } from '../../Api/config'
import SimpleToast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';

const renderKin = ({ item }) => {
    item = item?.attributes
    return (
        <View style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#e6e8e6' }}>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Name:'}</Text>
                <Text style={styles.desc}>{item.name}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Phone No:'}</Text>
                <Text style={styles.desc}>{item.phone_number}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', }}>
                <Text style={styles.title}>{'Relationship:'}</Text>
                <Text style={styles.desc}>{item.relationship}</Text>
            </View>
        </View>
    )
}
const KinInfo = ({ navigation }) => {

    const [kinData, setKinData] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    const { token } = useSelector(state => state.Auth)


    useEffect(() => {
        const met = async () => {

            const config = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            }
            const r = await fetch(`${BASE_URL}nextofkins`, config)
            const response = await r.json()

            if (response && response?.error?.message != 'Invalid token') {
                if (response?.data) {
                    SimpleToast.show('Got Kins')
                    setKinData(response?.data)
                    setIsLoad(false)
                }

            }
            else if (response?.data?.attributes.length == 0) {
                SimpleToast.show('No kin exists')
                setIsLoad(false)
            }
            else {
                SimpleToast.show('Failed Getting Kin-info')
                setIsLoad(false)
            }


        }

        met()
    }, [])

    return (
        <View style={styles.mainContainer}>

            <View style={styles.detailContainer}>

                <FlatList
                    data={kinData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => '--'+index}
                    renderItem={(item) => renderKin(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ItemSeparatorComponent={() =>
                        <View style={{ height: 1 }}>

                        </View>
                    }
                />

            </View>

            <Loader visible={isLoad} />

        </View>
    )
}

export default KinInfo;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0.71,
        backgroundColor: colors.White,
        paddingTop: 25
    },
    detailContainer: {
        paddingHorizontal: 25
    },
    title: {
        width: '35%',
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.SemiBold
    },
    desc: {
        width: '65%',
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.Regular
    }
})