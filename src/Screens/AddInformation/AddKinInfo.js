import React from 'react'
import { View } from 'react-native'
import colors from '../../Assets/Colors/Index';
import KinInfoForm from '../../Components/Forms/KinInfoForm/Index';



const AddPersonalInfo = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <KinInfoForm onSubmit={(data) => {

            }} onAddMore={()=> {

            }}/>
        </View>
    )
}

export default AddPersonalInfo;