import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';


const experienceData = [
    {
        id: '1',
        role: 'Designer',
        place: 'ABC',
        duration: '1.2 Years'
    },
    {
        id: '2',
        role: 'Developer',
        place: 'XYZ',
        duration: '6 Months'
    },
    {
        id: '3',
        role: 'Software Engineer',
        place: 'ABC',
        duration: '5 Years'
    },

]
const Experience = ({ navigation }) => {

    const renderKin = ({ item }) => {
        return (
            <View style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#e6e8e6' }}>
                <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                    <Text style={styles.title}>{'Role:'}</Text>
                    <Text style={styles.desc}>{item.role}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                    <Text style={styles.title}>{'Place of work:'}</Text>
                    <Text style={styles.desc}>{item.place}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <Text style={styles.title}>{'Duration:'}</Text>
                    <Text style={styles.desc}>{item.duration}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>

            <View style={styles.detailContainer}>

                <FlatList
                    data={experienceData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={(item) => renderKin(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />



            </View>

        </View>
    )
}

export default Experience;

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