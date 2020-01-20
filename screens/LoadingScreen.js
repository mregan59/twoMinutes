import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as firebase from 'firebase';

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Auth');
        });
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <Text>Loading</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
