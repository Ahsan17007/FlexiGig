import React from 'react'
import { View } from 'react-native'
import colors from '../../Assets/Colors/Index';
import PersonalDetailsForm from '../../Components/Forms/PersonalDetailsForm/Index';



const AddPersonalInfo = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.White }}>
            <PersonalDetailsForm onSubmit={(data) => {

            }} />
        </View>
    )
}

export default AddPersonalInfo;