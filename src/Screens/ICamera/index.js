import { useIsFocused } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useDispatch } from 'react-redux'
import { idDocument, eduDocument, revDocument } from '../../Redux/Actions/CapturedDocument'

import colors from '../../Assets/Colors/Index'
import Images from '../../Assets/Images/Index'
import styles from './styles'
import { useEffect } from 'react'

const pictureOptions = {
    pauseAfterCapture: true,
    quality: 720,
    mirrorImage: false,
    orientation: 'portrait',

}
const ICamera = ({ navigation, route }) => {

    const cameraRef = useRef(null)
    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    const [isCamera, setIsCamera] = useState(true)
    const [isFlashOn, setIsFlashOn] = useState(false)
    const [isBack, setIsBack] = useState(true)

    const docType = route?.params?.type

    useEffect(() => {

    }, [])

    const takePictures = async () => {
        try {
            const pictureResponse = await cameraRef.current.takePictureAsync(pictureOptions)
            console.log("takePictures", { pictureResponse });

            const u = pictureResponse?.uri.split('/');

            const imgObj = {
                ...pictureResponse,
                name: u[u.length-1]
            };

            if (docType === 'I') {
                dispatch(idDocument(imgObj))
            }

            else if (docType === 'E') {
                dispatch(eduDocument(imgObj))
            }

            else if (docType === 'R') {
                dispatch(revDocument(imgObj))
            }


            setTimeout(() => {
                navigation.goBack()
            }, 300);

        } catch (error) {
            console.log("takePictures-error", error);
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {isFocused &&
                <RNCamera
                    style={{ flex: 1 }}
                    ref={cameraRef}
                    flashMode={isFlashOn ? 'torch' : 'off'}
                    type={isBack ? 'back' : 'front'}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}

                />
            }
            <View style={StyleSheet.absoluteFill}>
                <View style={styles.iconsview}>
                    <TouchableOpacity
                        style={styles.flashLight}
                        onPress={() => {
                            setIsFlashOn(!isFlashOn)
                        }}>
                        <Image source={Images.FlashLight} style={{ width: 24, height: 24, }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.ChangeCamera}
                        onPress={() => {
                            setIsBack(!isBack)
                        }}>
                        <Image source={Images.ChangeCamera} style={{ width: 24, height: 24, }} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        console.log("capture photo")
                        takePictures()
                    }}

                    style={styles.startVideo}>

                    <Image source={Images.CameraButton}
                        style={{ height: 60, width: 60, }}
                    />


                </TouchableOpacity>

                {/* <View style={[styles.imgvideotext, { alignSelf: isCamera ? 'flex-start' : 'flex-end' }]}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsCamera(true)
                        }}
                        style={[
                            styles.videoButton, {
                                backgroundColor: 'transparent',
                                marginRight: 30
                            }
                        ]}>
                        <Text style={{ color: colors.White }}>
                            CAMERA
                        </Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={[styles.imgvideotext, { alignSelf: 'center' }]}>
                    <TouchableOpacity
                        disabled
                        style={styles.videoButton}>
                        <Text style={{ color: colors.Black }} >
                            CAMERA
                        </Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </SafeAreaView>
    )
}

export default ICamera

