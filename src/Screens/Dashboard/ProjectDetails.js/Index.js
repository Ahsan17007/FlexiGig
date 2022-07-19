import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,

} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import SimpleToast from 'react-native-simple-toast'
import moment from 'moment'

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import Loader from '../../../Components/Loader'
import Project from '../../../Components/Project'
import { onLogout } from '../../../Redux/Actions/HasSession'





const ProjectDetails = ({ navigation, route }) => {

    const Id = route?.params?.projectId
    const username = route?.params?.username


    const [projectDetails, setProjectDetails] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()


    const { token } = useSelector(state => state.Auth)

    const getProjectDetails = async () => {
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await fetch(`https://flexigig-api.herokuapp.com/api/v1//projects/${Id}`, config)
            .then(res => res.json())
            .then(response => {
                setIsLoading(false)
                console.log("getProjectDetails-response", response);
                setProjectDetails(response?.data)
                // if (response && response?.error?.message != 'Invalid token') {
                // }
                // else {
                //     SimpleToast.show('Failed getting personal info')
                // }
            }).catch(err => console.log("getProjectDetails-err", err))

    }

    useEffect(() => {
        getProjectDetails()
    }, [])

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
                            <Text style={styles.name}>{username}</Text>
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

                {
                    isLoading ?
                        <Loader visible={isLoading} />
                        :
                        <View style={styles.projectDetailContainer}>
                            <ScrollView showsVerticalScrollIndicator={false} >
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.title}>
                                        {'Industry: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.attributes?.description}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'Project Type: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.type}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'Start Date: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.attributes?.start_date}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'End Date: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.attributes?.end_date}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'Days: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.attributes?.days ? projectDetails?.attributes?.days : '----------'}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'Start Time: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {moment(projectDetails?.attributes?.start_time).format('hh:mm:ss')}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'End Time: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {moment(projectDetails?.attributes?.end_time).format('hh:mm:ss')}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'Callage: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.attributes?.callage ? projectDetails?.attributes?.callage : '----------'}
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>
                                        {'Target: '}
                                    </Text>
                                    <Text
                                        style={styles.desc}>
                                        {projectDetails?.attributes?.target ? projectDetails?.attributes?.target : '----------'}
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
                            </ScrollView>
                        </View>
                }



            </View>

        </View>
    )
}

export default ProjectDetails;
