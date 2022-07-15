import React, { useState } from 'react'
import {View} from 'react-native'
import ShowExperience from './Experience/ShowExperience'

import AddExperience from './Experience/AddExperience'



const AddExperienceScreen = ({navigation}) => {
    const [isNeedToPutDetails, setIsNeedToPutDetails] = useState(false)
    const [needToFetch, setNeedToFetch] = useState(true)
    const [resp, setResp] = useState([])
    
    return (isNeedToPutDetails) ? 
    <AddExperience {...{isNeedToPutDetails, setIsNeedToPutDetails, needToFetch, setNeedToFetch}}/> : 
    <ShowExperience  {...{isNeedToPutDetails, setIsNeedToPutDetails, needToFetch, setNeedToFetch, resp, setResp}}/>
}

export default AddExperienceScreen;