import React, { useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import Loader from '../../../Components/Loader'
import { useSelector } from 'react-redux'


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
                <Text style={styles.desc}>{(item?.attributes?.start_date.split('T'))[0] +' ~ '+(item?.attributes?.end_date.split('T'))[0]}</Text>
            </View>
        </View>
    )
}

const ShowExperience = ({ isNeedToPutDetails, setIsNeedToPutDetails, needToFetch, setNeedToFetch, resp, setResp }) => {


    const { token } = useSelector(state => state.Auth)

    useEffect(()=> {
        (async () => {
            if (needToFetch) {

            const config = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            }
            fetch('https://flexigig-api.herokuapp.com/api/v1/work_experiences', config)
                .then(res => res.json())
                .then(response => {
                    console.log(response);
    
                    if (response && response?.error?.message != 'Invalid token') {
                        setResp(response?.data)
                        console.log(resp);
                    }
                    else {
                        SimpleToast.show('Failed Getting Experiences')
                    }
                    setNeedToFetch(false)
                })
                .catch(err => console.log(err))
        }
    
        })()
    
    },[])
    return (
        <View style={{ flex: 1, backgroundColor: colors.Light, flexDirection: 'column' }}>

            <TouchableOpacity onPress={() => {
                setIsNeedToPutDetails(true)
            }} style={styles.btn}>
                <Text style={styles.addSkillButtonText}>
                    {`Add Experience`}
                </Text>
            </TouchableOpacity>

            <FlatList
                data={resp}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => '-'+index}
                renderItem={(item) => renderKin(item)}
                style={{ width: '100%', margin:8 }}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            <Loader visible={needToFetch} />


        </View>
    )
}

export default ShowExperience;

const styles = StyleSheet.create({
    addSkillButtonText: {
        color: colors.Dark,
        fontFamily: Fonts.Regular
    },
    btn: {
        padding: 4,
        borderColor: colors.Secondary,
        borderWidth: 1,
        width: 128,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Light,
        elevation: 1,
        alignSelf: 'flex-end',
        marginHorizontal: 4,
        marginHorizontal: 4,
        marginVertical: 8

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
    }
})