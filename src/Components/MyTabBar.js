import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../Assets/Colors/Index';
import Fonts from '../Assets/Fonts/Index';

function MyTabBar({ state, navigation }) {
    return (
        <View style={{
            flexDirection: "row",
            width: "100%",
            elevation: 2,
            backgroundColor: colors.Light
        }}>
            {
                state.routeNames.map(ele => {
                    return (
                        <TouchableOpacity
                            style={styles.tabBarTouchable}
                            onPress={() => { navigation.navigate(ele) }}>
                            <Text style={{
                                fontFamily: (state.index === state.routeNames.indexOf(ele)) ? Fonts.SemiBold : Fonts.Regular,
                                fontSize:16,
                                color: (state.index === state.routeNames.indexOf(ele)) ? colors.Secondary : colors.Dark
                            }}>{ele}</Text>

                            <View style={{
                                width: '100%',
                                height: 3,
                                marginHorizontal: 4,
                                backgroundColor: (state.index === state.routeNames.indexOf(ele)) ? colors.Secondary : 'transparent',
                                display: (state.index === state.routeNames.indexOf(ele)) ? 'flex' : 'none'
                            }} />
                        </TouchableOpacity>
                    )
                })
            }

        </View>

    )
}

export default MyTabBar


const styles = StyleSheet.create({
    tabBarTouchable: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        height: 56,
        justifyContent: 'flex-end',
        paddingHorizontal: 2
    }
})