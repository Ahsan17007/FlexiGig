import React, { useState } from 'react'
import { View } from 'react-native'
import colors from '../../Assets/Colors/Index';
import PersonalDetailsForm from '../../Components/Forms/PersonalDetailsForm/Index';
import Loader from '../../Components/Loader';

import { useSelector } from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import { BASE_URL } from '../../Api/config';

const AddPersonalInfo = ({ navigation }) => {
    const [loader, setLoader] = useState(false)
    const { token } = useSelector(state => state.Auth)

    return (
        <View style={{ flex: 1, backgroundColor: colors.White }}>
            <Loader visible={loader}/>
            <PersonalDetailsForm navigation={navigation} onSubmit={async (data) => {
                setLoader(true)

                const config = {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }

                const r = await fetch(`${BASE_URL}personal_details`, config)
                const response = await r.json()

                console.log('PersonalInfo Add Response....', response);

                if (response && response?.error?.message != 'Invalid token' && r.ok) {

                    setLoader(false)
                    SimpleToast.show('Added Successfully')

                    navigation.navigate('Next of Kin')
                }
                else {
                    SimpleToast.show('Failed Adding Personal Info')
                    setLoader(false)
                    SimpleToast.show(JSON.stringify(response))
                }
            }} />
        </View>
    )
}

export default AddPersonalInfo;