import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';
import KinInfoForm from '../../Components/Forms/KinInfoForm/Index';

import { useSelector } from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import { BASE_URL } from '../../Api/config';

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


const AddKinInfo = ({ navigation }) => {

    const [need, setNeed] = useState(true)
    const [data, setData] = useState([])

    const { token } = useSelector(state => state.Auth)

    const met = async () => {

        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        const r = await fetch(`${BASE_URL}nextofkins`, config)
        const response = await r.json()
        console.log('****************', response);

        if (response) {
            if (response?.data.length > 0) {
                setData(response?.data)
            }
        }

        setNeed(false)
    }
    if (need) {
        met()
        console.log('MET');
        console.log(data);
    }

    return (
        <View style={{ flex: 1, flexDirection:'column', backgroundColor: colors.White }}>
            <KinInfoForm onSubmit={async (data, setIsAdding, setFirstName, setRelationship, setAlternateNo) => {

                const config = {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
                const r = await fetch(`${BASE_URL}nextofkins`, config)
                const response = await r.json()

                console.log('Kin Response');
                console.log(response);

                if (response && response?.error?.message != 'Invalid token') {
                    setFirstName('')
                    setAlternateNo('')
                    setRelationship('')
                    setIsAdding(false)
                    SimpleToast.show('Kin Added Successfully')
                }
                else {
                    SimpleToast.show('Failed Adding Kin Info')
                    setIsLoad(false)
                }

            }} {...{ navigation, need, setNeed }} />

            <View style={{marginHorizontal:16}}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => '-kin-' + index}
                renderItem={(item) => renderKin(item)}
                style={{ width: '100%' }}
                contentContainerStyle={{ paddingBottom: 20, }}
                ItemSeparatorComponent={() =>
                    <View style={{ height: 1 }}>

                    </View>
                }

            />

</View>

        </View>
    )
}

export default AddKinInfo;

const styles = StyleSheet.create({
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
    },
})