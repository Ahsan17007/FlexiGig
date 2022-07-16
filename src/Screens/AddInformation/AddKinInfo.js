import React from 'react'
import { View } from 'react-native'
import colors from '../../Assets/Colors/Index';
import KinInfoForm from '../../Components/Forms/KinInfoForm/Index';

import { useSelector } from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import { BASE_URL } from '../../Api/config';

const AddPersonalInfo = ({ navigation }) => {


    const { token } = useSelector(state => state.Auth)


    return (
        <View style={{ flex: 1 }}>
            <KinInfoForm onSubmit={async (data, setIsAdding, setFirstName, setRelationship, setAlternateNo) => {

                const config = {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
                const r = await fetch(`${BASE_URL}nextofkins`, config)
                const response = await r.json()

                console.log('Kin Response');
                console.log(response);

                if (response && response?.error?.message != 'Invalid token') {
                    setFirstName('')
                    setAlternateNo('')
                    setRelationship('')
                    setIsAdding(false)
                    SimpleToast.show('Kin Added Successfully')
                }
                else {
                    SimpleToast.show('Failed Adding Experience')
                    setIsLoad(false)
                }

            }} {...{ navigation }} />
        </View>
    )
}

export default AddPersonalInfo;