import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import EarningHistory from '../../../Components/EarningHistory'


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


    const { token } = useSelector(state => state.Auth)

    useEffect(async ()=>{
        // This is just for test 
        // Check logs by Ahsan Iqbal 10-07-2022
        // 
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}`}
        };

            try {
                const response = await fetch('https://flexigig-api.herokuapp.com/api/v1/work_experiences', config)
                const registerResult = await response.json();
                console.log("registerUser-dashboard", registerResult);
                
            } catch (error) {
                console.log("registerUser-dashboard-error", error);
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
                        <Image source={Images.DummyUser} style={styles.profilePic} />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.welcomeText}>{'Welcome'}</Text>
                            <Text style={styles.name}>{'Jack Sparrow'}</Text>
                        </View>
                    </View>

                    <Image source={Images.Notification} style={styles.bellIcon} />
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
        </View>
    )
}

export default Home;
