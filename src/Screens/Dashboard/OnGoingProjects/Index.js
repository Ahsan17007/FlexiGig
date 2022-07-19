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

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import Project from '../../../Components/Project'
import SimpleToast from 'react-native-simple-toast'


const projects = [
    {
        id: '1',
        jobTitle: 'Inventory Management for a store and its maintainance',
        date: '07 July, 2022'
    },
    {
        id: '2',
        jobTitle: 'Develop App',
        date: '07 July, 2022'
    },
    {
        id: '3',
        jobTitle: 'Bug Fixes',
        date: '07 July, 2022'
    },

]




const OnGoingProjects = ({ navigation, route }) => {

    const username = route?.params?.username

    const [isLoading, setIsLoading] = useState(true)
    const [projectsList, setProjectsList] = useState([])
    const dispatch = useDispatch()


    const { token } = useSelector(state => state.Auth)

    const getOnGoingProjects = async () => {
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await fetch('https://flexigig-api.herokuapp.com/api/v1/projects', config)
            .then(res => res.json())
            .then(response => {
                setIsLoading(false)
                console.log("getOnGoingProjects-response", response?.data);
                setProjectsList(response?.data)
                // if (response && response?.error?.message != 'Invalid token') {
                // }
                // else {
                //     SimpleToast.show('Failed getting personal info')
                // }
            }).catch(err => console.log("getOnGoingProjects-err", err))

    }

    useEffect(() => {
        getOnGoingProjects()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <Project
                navigation={navigation}
                Item={item}
                username={username}
            />
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

                <FlatList
                    data={projectsList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={(item) => renderItem(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ItemSeparatorComponent={() =>
                        <View style={{ height: 12 }}>

                        </View>
                    }
                    ListEmptyComponent={() => {
                        if (isLoading) {
                            return (
                                <Loader visible={isLoading} />
                            )
                        }
                        return (
                            <Text style={styles.emptyList}>{'No Projects Found'}</Text>
                        )
                    }}
                />
            </View>


        </View>
    )
}

export default OnGoingProjects;
