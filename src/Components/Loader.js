import React, { useState } from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import colors from "../Assets/Colors/Index";


const Loader = ({ visible }) => {

    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)' }}>
                <ActivityIndicator
                    size={'large'}
                    color={colors.iconPrimary}
                />
            </View>
        </Modal>
    )
}


export default Loader;


