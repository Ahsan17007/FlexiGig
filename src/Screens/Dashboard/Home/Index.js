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

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import EarningHistory from '../../../Components/EarningHistory'
import AddDetailsOptionPopup from '../../../Components/AddDetailsOptionsPopup'


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

    const { token } = useSelector(state => state.Auth)

    useEffect(async () => {

        if (visibility[0]) {
            const config = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            };

            try {
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/personal_details', config)
                const registerResult = await response.json();

                if (registerResult?.data == null) {
                    setVisibility([false, true])
                }

            } catch (error) {
            }

        }

    }, [])

    const renderItem = ({ item }) => {
        return (
            <EarningHistory Item={item} />
        )
    }


    const listHeaderComponent = () => {
        return (
            <>
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

                <View style={[styles.recordsContainer]}>
                    <Text style={styles.recordTitle}>{'Projects'}</Text>
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

    useEffect(() => {
        //API TO CHECK EXISTING DATA
        //IN CASE DATA IS EMPTY
        // setTimeout(()=>{
        //     setVisibility(true)
        // }, 1000)
    })

    return (
        <View style={styles.mainContainer}>

            <View style={styles.innerContainer}>
                <FlatList
                    data={earningHistory}
                    ListHeaderComponent={listHeaderComponent}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={(item) => renderItem(item)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ItemSeparatorComponent={() =>
                        <View style={{ height: 12 }}>

                        </View>
                    }
                />
            </View>

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
