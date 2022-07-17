import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
import Images from '../../Assets/Images/Index';


const renderKin = ({ item }) => {
    return (
        <View style={{ paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: '#e6e8e6' }}>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Role:'}</Text>
                <Text style={styles.desc}>{item?.attributes?.role}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Place of work:'}</Text>
                <Text style={styles.desc}>{item?.attributes?.company}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 3 }}>
                <Text style={styles.title}>{'Description:'}</Text>
                <Text style={styles.desc}>{item?.attributes?.description}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', }}>
                <Text style={styles.title}>{'Duration:'}</Text>
                <Text style={styles.desc}>{(item?.attributes?.start_date.split('T'))[0] + ' ~ ' + (item?.attributes?.end_date.split('T'))[0]}</Text>
            </View>
        </View>
    )
}

const Experience = ({ navigation }) => {

    const [experiences, setExperiences] = useState([])
    const [needToFetch, setNeedToFetch] = useState(true)

    const { token } = useSelector(state => state.Auth)

    useEffect(() => {
        (async () => {


            const config = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            }
            fetch('https://flexigig-api.herokuapp.com/api/v1/work_experiences', config)
                .then(res => res.json())
                .then(response => {

                    if (response && response?.error?.message != 'Invalid token') {
                        setExperiences(response?.data)
                    }
                    else {
                        SimpleToast.show('Failed Getting Experiences')
                    }
                })
                .catch(err => console.log(err))
        })()

    }, [])

    return (
        <View style={styles.mainContainer}>

            <View style={styles.detailContainer}>

                <FlatList
                    data={experiences}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => '-' + index}
                    renderItem={(item) => renderKin(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ marginTop: '50%', alignItems: 'center' }}>
                                <Text style={styles.emptyList}>{'No Experience Found'}</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('AddExperience')}>
                                    <Image source={Images.Add} style={{ height: 25, width: 25, marginTop: 5 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />

                {/* <Loader visible={needToFetch}/> */}



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
    },
    emptyList: {
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.Regular,
        alignSelf: 'center'
    }
})