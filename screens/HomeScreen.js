import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
} from 'react-native';
import * as firebase from 'firebase';

export const HomeScreen = props => {
    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.welcomeContainer}>
                <Button title="Sign Out" color="#f194ff" onPress={signOut} />
            </View>
        </ScrollView>
    );
};

HomeScreen.navigationOptions = {
    header: null,
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: '#fff',
    },
});
