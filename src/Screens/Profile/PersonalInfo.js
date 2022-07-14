import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import colors from '../../Assets/Colors/Index';
import Fonts from '../../Assets/Fonts/Index';



const PersonalInfo = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.detailContainer}>
                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Name:'}</Text>
                        <Text style={styles.desc}>{'Jack Sparrow'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Phone No:'}</Text>
                        <Text style={styles.desc}>{'+254740902556'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Alt Phone No:'}</Text>
                        <Text style={styles.desc}>{'+254740902556'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Email:'}</Text>
                        <Text style={styles.desc}>{'jack123@mail.com'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'ID No:'}</Text>
                        <Text style={styles.desc}>{'123456789'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Gender:'}</Text>
                        <Text style={styles.desc}>{'Male'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Rev.Ath No:'}</Text>
                        <Text style={styles.desc}>{'123654789'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Education Level:'}</Text>
                        <Text style={styles.desc}>{'University'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Services:'}</Text>
                        <Text style={styles.desc}>{'Designer'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Routes:'}</Text>
                        <Text style={styles.desc}>{'ABX'}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 6 }}>
                        <Text style={styles.title}>{'Joined On:'}</Text>
                        <Text style={styles.desc}>{'April 22, 2021'}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PersonalInfo;

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
        width: '40%',
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.SemiBold
    },
    desc: {
        width: '60%',
        fontSize: 14,
        color: colors.Black,
        fontFamily: Fonts.Regular
    }
})