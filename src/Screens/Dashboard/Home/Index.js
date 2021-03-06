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
import SimpleToast from 'react-native-simple-toast'

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import EarningHistory from '../../../Components/EarningHistory'
import AddDetailsOptionPopup from '../../../Components/AddDetailsOptionsPopup'
import { onLogout } from '../../../Redux/Actions/HasSession'
import { onGoing, Past, Active } from '../../../Redux/Actions/ProjectsList'


const earningHistory = [
    {
        id: '1',
        image: Images.DummyUser,
        jobName: 'Bug Fixes',
        desc: 'I want to resolve the bugs in my app',
        price: '$80',
        date: '07 July, 2022'
    },
    {
        id: '2',
        image: Images.DummyUser,
        jobName: 'Develop App',
        desc: 'I want to create an app in react native, the idea is very simple',
        price: '$80',
        date: '07 July, 2022'
    }, {
        id: '3',
        image: Images.DummyUser,
        jobName: 'Bug Fixes',
        desc: 'I want to resolve the bugs in my app',
        price: '$80',
        date: '07 July, 2022'
    },
]


const Home = ({ navigation }) => {

    const [visibility, setVisibility] = useState([true, false])

    const [isLoading, setIsLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(null)
    const [totalOnGoing, setTotalOnGoing] = useState('')
    const [totalActive, setTotalActive] = useState('')
    const [totalPast, setTotalPast] = useState('')
    const dispatch = useDispatch()

    const { token } = useSelector(state => state.Auth)

    const getOnGoingProjects = async () => {
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await fetch('https://flexigig-api.herokuapp.com/api/v1/projects?status=ongoing', config)
            .then(res => res.json())
            .then(async (response) => {
                // console.log("getOnGoingProjects-response", response);
                setTotalOnGoing(response?.data?.length)
                dispatch(onGoing(response?.data))
                await getActiveProjects()
                await getPastProjects()
                setIsLoading(false)
            }).catch(err => console.log("getOnGoingProjects-err", err))

    }

    const getActiveProjects = async () => {
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await fetch('https://flexigig-api.herokuapp.com/api/v1/projects?status=active', config)
            .then(res => res.json())
            .then(response => {
                // console.log("getActiveProjects-response", response?.data);
                setTotalActive(response?.data?.length)
                dispatch(Active(response?.data))
            }).catch(err => console.log("getActiveProjects-err", err))

    }

    const getPastProjects = async () => {
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await fetch('https://flexigig-api.herokuapp.com/api/v1/projects?status=past', config)
            .then(res => res.json())
            .then(response => {
                // console.log("getPastProjects-response", response?.data);
                setTotalPast(response?.data?.length)
                dispatch(Past(response?.data))
            }).catch(err => console.log("getOnGoingProjects-err", err))

    }

    useEffect(() => {
        (async () => {

            if (visibility[0]) {
                const config = {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                };

                try {
                    const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/personal_details', config)
                    const details = await response.json();
                    console.log("personal details", details);

                    if (details?.error?.message === 'Invalid token') {
                        SimpleToast.show('Session Expired! Login Again')
                        dispatch(onLogout());
                        setTimeout(() => {

                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'SignIn' }],
                            });
                        }, 250);
                    }

                    else {
                        setUserDetails(details?.data)
                        if (details?.data == null) {
                            if (!isLoading) {
                                setVisibility([false, true])

                            }
                        }
                    }

                } catch (error) {
                }

            }

        })()
    }, [isLoading])

    useEffect(() => {
        getOnGoingProjects()

    }, [])

    const renderItem = ({ item }) => {
        return (
            <EarningHistory Item={item} />
        )
    }


    const listHeaderComponent = () => {

        const username = (userDetails?.attributes?.firstname) ? `${userDetails?.attributes?.firstname} ${userDetails?.attributes?.surname}` : null
        return (
            <>
                <View style={styles.topHeaderContainer}>
                    <View style={styles.userInfoContainer}>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.profilePic}
                            onPress={() => {
                                navigation.navigate('Profile', { username: username })
                            }}>
                            <Image source={Images.DummyUser} style={styles.profilePic} />
                        </TouchableOpacity>

                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.welcomeText}>{'Welcome'}</Text>

                            {
                                (userDetails?.attributes) ?
                                    <Text style={styles.name}>{`${userDetails?.attributes?.firstname} ${userDetails?.attributes?.surname}`}</Text>
                                    :
                                    <></>
                            }

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

                <View style={[styles.recordsContainer]}>
                    <Text style={styles.recordTitle}>{'Projects'}</Text>
                    <View style={styles.projectsContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={() => navigation.navigate('OnGoingProjects', { username: userDetails?.attributes ? (`${userDetails?.attributes?.firstname} ${userDetails?.attributes?.surname}`) : '' })}
                                style={styles.noOfProjectsContainer}>
                                <Text style={styles.noOfProjects}>{totalOnGoing}</Text>
                            </TouchableOpacity>
                            <Text style={styles.projectCat}>{'Ongoing'}</Text>
                        </View>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                style={styles.noOfProjectsContainer}
                                onPress={() => navigation.navigate('ActiveProjects', { username: userDetails?.attributes ? (`${userDetails?.attributes?.firstname} ${userDetails?.attributes?.surname}`) : '' })}
                            >
                                <Text style={styles.noOfProjects}>{totalActive}</Text>
                            </TouchableOpacity>
                            <Text style={styles.projectCat}>{'Active'}</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                style={styles.noOfProjectsContainer}
                                onPress={() => navigation.navigate('PastProjects', { username: userDetails?.attributes ? (`${userDetails?.attributes?.firstname} ${userDetails?.attributes?.surname}`) : '' })}
                            >
                                <Text style={styles.noOfProjects}>{totalPast}</Text>
                            </TouchableOpacity>
                            <Text style={styles.projectCat}>{'Past'}</Text>
                        </View>

                    </View>
                </View>

                {/* -------------------------------------- */}

                <View style={[styles.recordsContainer, { marginTop: 16 }]}>
                    <Text style={styles.recordTitle}>{'Performance'}</Text>
                    <View style={styles.projectsContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.noOfProjectsContainer}>
                                <Text style={styles.noOfProjects}>{'5'}</Text>
                            </View>
                            <Text style={styles.projectCat}>{'Ongoing'}</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.noOfProjectsContainer}>
                                <Text style={styles.noOfProjects}>{'2'}</Text>
                            </View>
                            <Text style={styles.projectCat}>{'Active'}</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.noOfProjectsContainer}>
                                <Text style={styles.noOfProjects}>{'4'}</Text>
                            </View>
                            <Text style={styles.projectCat}>{'Past'}</Text>
                        </View>
                    </View>
                </View>

                {/* -------------------------------------- */}

                <View style={[styles.recordsContainer, { marginTop: 16 }]}>
                    <Text style={styles.recordTitle}>{'My Ratings'}</Text>
                    <View style={styles.projectsContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>{'90%'}</Text>
                            </View>
                            <Text style={[styles.ratingCat, { marginTop: 11 }]}>{'Achieving'}</Text>
                            <Text style={styles.ratingCat}>{'Targets'}</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>{'80%'}</Text>
                            </View>
                            <Text style={[styles.ratingCat, { marginTop: 11 }]}>{'Reports'}</Text>
                            <Text style={styles.ratingCat}>{'on time'}</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>{'100%'}</Text>
                            </View>
                            <Text style={[styles.ratingCat, { marginTop: 11 }]}>{'Jobs'}</Text>
                            <Text style={styles.ratingCat}>{'completion'}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.historyTitleContainer}>
                    <Text style={styles.commonTextStyle}>{'Earning History'}</Text>
                    <Text style={styles.commonTextStyle}>{'See All'}</Text>
                </View>
            </>
        )
    }


    return (
        <View style={styles.mainContainer}>

            {
                isLoading ?
                    <Loader visible={isLoading} />
                    :
                    <View style={styles.innerContainer}>
                        <FlatList
                            data={earningHistory}
                            ListHeaderComponent={listHeaderComponent}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={(item) => renderItem(item)}
                            style={{ width: '100%' }}
                            contentContainerStyle={{ paddingBottom: 20, paddingTop: 30 }}
                            ItemSeparatorComponent={() =>
                                <View style={{ height: 12 }}>

                                </View>
                            }
                        />
                    </View>
            }



            <AddDetailsOptionPopup
                visibility={visibility[1]}
                setVisibility={setVisibility}
                onContinueBtnClick={() => {
                    navigation.navigate('AddInformation')
                }} />


        </View>
    )
}

export default Home;
