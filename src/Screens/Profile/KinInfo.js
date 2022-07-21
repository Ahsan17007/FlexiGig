import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';
import Loader from '../../Components/Loader';
import { BASE_URL } from '../../Api/config'
import SimpleToast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
import Images from '../../Assets/Images/Index';

const renderKin = ({ item }) => {
    item = item?.attributes
    return (
        <View style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#e6e8e6' }}>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Name:'}</Text>
                <Text style={styles.desc}>{item?.name}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Phone No:'}</Text>
                <Text style={styles.desc}>{item?.phone_number}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', }}>
                <Text style={styles.title}>{'Relationship:'}</Text>
                <Text style={styles.desc}>{item?.relationship}</Text>
            </View>
        </View>
    )
}
const KinInfo = ({ navigation }) => {

    const [kinData, setKinData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { token } = useSelector(state => state.Auth)


    useEffect(() => {
        const met = async () => {

            const config = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            }
            const r = await fetch(`${BASE_URL}nextofkins`, config)
            const response = await r.json()
            console.log('****************', response);

            setIsLoading(false)
            if (response && response?.error?.message != 'Invalid token') {
                if (response?.data.length > 0) {
                    SimpleToast.show('Got Kins')
                    setKinData(response?.data)
                }

            }
            else if (response?.data?.attributes.length == 0) {
                // SimpleToast.show('No kin exists')
                setIsLoading(false)
            }
            else {
                SimpleToast.show('Failed Getting Kin-info')
                setIsLoading(false)
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
                    keyExtractor={(item, index) => '--' + index}
                    renderItem={(item) => renderKin(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20, }}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ marginTop: '50%', alignItems: 'center' }}>
                                <Text style={styles.emptyList}>{'No Kins Found'}</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('AddKinInfo')}
                                >
                                    <Image source={Images.Add} style={{ height: 25, width: 25, marginTop: 5 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    ItemSeparatorComponent={() =>
                        <View style={{ height: 1 }}>

                        </View>
                    }
                />

            </View>

            {/* <Loader visible={isLoading} /> */}

        </View>
    )
}

export default KinInfo;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0.71,
        backgroundColor: colors.Light,
        paddingTop: 25
    },
    detailContainer: {
        paddingHorizontal: 25
    },
    title: {
        width: '35%',
        fontSize: 14,
        color: colors.Dark,
        fontFamily: Fonts.SemiBold
    },
    desc: {
        width: '65%',
        fontSize: 14,
        color: colors.Dark,
        fontFamily: Fonts.Regular
    },
    emptyList: {
        fontSize: 14,
        color: colors.Dark,
        fontFamily: Fonts.Regular,
        alignSelf: 'center'
    }
})