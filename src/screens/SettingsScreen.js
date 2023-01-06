import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { CameraCustom } from '../components/CameraCustom';
import Header from '../components/Header';
import { Title } from '../components/Text/Title';
import { Colors } from '../helper/Colors';
import { getImg, removeImg } from '../helper/Store';
import Style from '../Style';

export function SettingsScreen() {

    const [seeCamera, setSeeCamera] = useState(false);
    const [img, setImg] = useState(null);

    useEffect(() => {
        console.log('seeCam:', seeCamera);
        // console.log('img',img);
        getImg().then(value => {setImg(value); console.log(img === value ? 'equal' : 'no-equal');})
        console.log('------------');
    }, [seeCamera])

    // useEffect(() => {
    //     getImg().then(value => setImg(value))
    // }, [])

    if (seeCamera) {
        return <CameraCustom handler={setSeeCamera} render={seeCamera} />;
    }
    return (

        <SafeAreaView style={Style.container}>
            <Header title={"Paramètres"}></Header>
            {
                img ? 
                <>

                    <Image source={{ uri: img }} style={styles.img} />
                    <TouchableOpacity onPress={() => setSeeCamera(true)}>
                        <Title>
                            Changer de photo
                        </Title>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {removeImg(); setImg(null)}}>
                        <Title>Retirer l'image</Title>
                    </TouchableOpacity>
                </>
                :
                <>
                    <Image source={require('../../assets/not-found.png')} style={styles.img} />
                    <TouchableOpacity onPress={() => setSeeCamera(true)}>
                        <Title>
                            Changer de photo
                        </Title>
                    </TouchableOpacity>
                </>
            }
            
        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    img: { 
        width: 300, 
        height: 300,
        backgroundColor: Colors.backgroundLighter,
        padding: 5,
        borderRadius: '300%',
        borderColor: Colors.backgroundLight,
        borderWidth: 8,
    }
})
