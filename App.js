import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';

import * as firebase from 'firebase';
var config = {
    apiKey: 'AIzaSyA3KYRNTPSGcb1t9CA0A4uzFL5LjYP15vQ',
    authDomain: 'two-minutes-1123e.firebaseapp.com',
    databaseURL: 'https://two-minutes-1123e.firebaseio.com',
    projectId: 'two-minutes-1123e',
    storageBucket: 'two-minutes-1123e.appspot.com',
    messagingSenderId: '807919601390',
    appId: '1:807919601390:web:176a2c456077e527fb95ff',
    measurementId: 'G-R85BQ8XGJB',
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // useEffect(() => {
    //     console.log('mount');
    //     console.log(isLoadingComplete);
    //     setLoadingComplete(false);
    //     return () => {
    //         console.log('here');
    //         console.log(isLoadingComplete);
    //         setLoadingComplete(false);
    //     };
    // }, []);
    // console.log(isLoadingComplete);
    if (!isLoadingComplete) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppNavigator />
            </View>
        );
    }
}

async function loadResourcesAsync() {
    console.log('HERE HERE');
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    // setTimeout(() => {
    setLoadingComplete(true);
    // }, 5000);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
