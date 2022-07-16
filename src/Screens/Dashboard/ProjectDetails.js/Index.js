import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,

} from 'react-native'

import Loader from '../../../Components/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { onLogout } from '../../../Redux/Actions/HasSession'
import SimpleToast from 'react-native-simple-toast'

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import Project from '../../../Components/Project'






const ProjectDetails = ({ navigation }) => {

    const [industry, setIndustry] = useState('ABC')
    const [type, setType] = useState('Inventory')
    const [startDate, setStartDate] = useState('July 16,2022')
    const [endDate, setEndDate] = useState('July 26,2022')
    const [days, setDays] = useState('10')
    const [startTime, setStartTime] = useState('05:00 pm')
    const [endTime, setEndTime] = useState('12:00 pm')
    const [callage, setCallAge] = useState('1 Outlet')
    const [target, setTarget] = useState('2 Cases')

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()


    const { token } = useSelector(state => state.Auth)

    // useEffect(() => {

    // }, [])

    const renderItem = ({ item }) => {
        return (
            <Project Item={item} />
        )
    }





    return (
        <View style={styles.mainContainer}>

            <View style={styles.innerContainer}>
                <View style={styles.topHeaderContainer}>
                    <View style={styles.userInfoContainer}>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.profilePic}
                            onPress={() => {
                                navigation.navigate('Profile')
                            }}>
                            <Image source={Images.DummyUser} style={styles.profilePic} />
                        </TouchableOpacity>

                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.welcomeText}>{'Welcome'}</Text>
                            <Text style={styles.name}>{'Jack Sparrow'}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.navigate('Notifications')
                        }}>
                        <Image source={Images.Notification} style={styles.bellIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.projectDetailContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Industry: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {industry}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Project Type: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {type}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Start Date: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {startDate}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'End Date: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {endDate}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Days: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {days}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Start Time: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {startTime}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'End Time: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {endTime}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Callage: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {callage}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>
                            {'Target: '}
                        </Text>
                        <Text
                            style={styles.desc}>
                            {target}
                        </Text>
                    </View>

                    <View style={styles.BtnContainer}>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Text style={styles.btnText}>
                                {'Dismiss'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionBtn}>
                            <Text style={styles.btnText}>
                                {'Join'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </View>
    )
}

export default ProjectDetails;
