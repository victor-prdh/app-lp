import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraPictureOptions } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { storeImg } from '../helper/Store';



export function CameraCustom({handler, render}) {
    const isFocus = useIsFocused()

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);
    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync({
                aspect: [1, 1],
                quality: 0.5,
                base64: true
              });
            storeImg(data.base64).then((e) => {console.log(e); handler(false)})
            
        }
    }

    if (hasCameraPermission === false) {
        return <Text>Pas d'accès à la caméra</Text>;
    }

    if (render === false) {
        return;
    }
    return (
        <View style={{ flex: 1, height: '100%' }}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.camera}
                    type={type}
                    ratio={'9:16'} />
            
            <TouchableOpacity
                style={styles.swapButton}
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    );
                }}/>
            <TouchableOpacity style={styles.button} onPress={() => takePicture()} />
        </View>
    );
}
const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    camera: {
        flex: 1
    },
    button: {
        zIndex: 1,
        position: 'absolute',
        width: 70,
        height: 70,
        bottom: 30,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    swapButton: {
        zIndex: 1,
        position: 'absolute',
        width: 70,
        height: 70,
        top: 50,
        right: 20,
        borderRadius: 50,
        backgroundColor: '#fff',
    }
})
