import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';


const kinData = [
    {
        id: '1',
        name: 'Jack',
        number: '+254740902558',
        relationship: 'Father'
    },
    {
        id: '2',
        name: 'James',
        number: '+254740902559',
        relationship: 'Friend'
    },
    {
        id: '3',
        name: 'Jhon',
        number: '+254740902560',
        relationship: 'Cousin'
    },
    
]
const KinInfo = ({ navigation }) => {

    const renderKin = ({ item }) => {
        return (
            <View style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#e6e8e6' }}>
                <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                    <Text style={styles.title}>{'Name:'}</Text>
                    <Text style={styles.desc}>{item.name}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                    <Text style={styles.title}>{'Phone No:'}</Text>
                    <Text style={styles.desc}>{item.number}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <Text style={styles.title}>{'Relationship:'}</Text>
                    <Text style={styles.desc}>{item.relationship}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>

            <View style={styles.detailContainer}>

                <FlatList
                    data={kinData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={(item) => renderKin(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                // ItemSeparatorComponent={() =>
                //     <View style={{ height: 12 }}>

                //     </View>
                // }
                />



            </View>

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