import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,

} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Images from '../../../Assets/Images/Index'
import colors from '../../../Assets/Colors/Index'
import Fonts from '../../../Assets/Fonts/Index'
import Notification_Reminders from '../../../Components/Norification_Reminder'


const remindersData = [
    {
        id: '1',
        title: 'Delivery',
        desc: 'Review the order requirements now and make your first impression!',
    },
    {
        id: '2',
        title: 'Profile Completion',
        desc: 'Please complete your profile.',
    },
    {
        id: '3',
        title: 'New Jobs',
        desc: '30 New Jobs',
    },
]


const Reminders = ({ navigation }) => {

    const [visibility, setVisibility] = useState([true, false])

    const { token } = useSelector(state => state.Auth)

    // useEffect(async () => {

    //     if (visibility[0]) {
    //         const config = {
    //             method: 'GET',
    //             headers: { 'Authorization': `Bearer ${token}` }
    //         };

    //         try {
    //             const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/personal_details', config)
    //             const registerResult = await response.json();

    //             if (registerResult?.data == null) {
    //                 setVisibility([false, true])
    //             }

    //         } catch (error) {
    //         }

    //     }

    // }, [])

    const listHeaderComponent = () => {
        return (

            <FlatList
                data={remindersData}
                ListHeaderComponent={() => {
                    return (
                        <Text style={styles.reminderTitle}>{'Unread'}</Text>
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <Text style={[styles.reminderTitle, { marginTop: 25 }]}>{'Read'}</Text>
                    )
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={(item) => renderItem(item)}
                style={{ width: '100%' }}
                contentContainerStyle={{ paddingBottom: 70 }}
                ItemSeparatorComponent={() =>
                    <View style={{ height: 10 }}>

                    </View>
                }
            />
        )
    }

    const renderItem = ({ item }) => {
        return (
            <Notification_Reminders Item={item} />
        )
    }



    useEffect(() => {
        //API TO CHECK EXISTING DATA
        //IN CASE DATA IS EMPTY
        // setTimeout(()=>{
        //     setVisibility(true)
        // }, 1000)
    })

    return (
        <View style={styles.mainContainer}>


            <FlatList
                data={remindersData}
                ListHeaderComponent={listHeaderComponent}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={(item) => renderItem(item)}
                style={{ width: '100%' }}
                contentContainerStyle={{ paddingBottom: 70 }}
                ItemSeparatorComponent={() =>
                    <View style={{ height: 10 }}>

                    </View>
                }
            />
        </View>
    )
}

export default Reminders;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.White,
        paddingTop: 25
    },
    detailContainer: {
        paddingHorizontal: 25
    },
    reminderTitle: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.Secondary,
        fontFamily: Fonts.SemiBold,
        marginBottom: 6
    },
})