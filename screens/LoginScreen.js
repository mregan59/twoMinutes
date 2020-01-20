import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as firebase from 'firebase';

const LoginScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const signUp = () => {
        console.log('sign up');
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    const signIn = () => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password);
            firebase.auth().onAuthStateChanged(user => {
                //this.props.navigation.navigate('Main');
            });
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    return (
        <View style={{ padding: 40, paddingTop: 50 }}>
            <TextInput
                style={{
                    height: 40,
                    marginBottom: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
            />
            <TextInput
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
            />
            <Button
                title="Show Password"
                color="#f194ff"
                style={{ marginBottom: 20 }}
                onPress={() => setPasswordVisible(!passwordVisible)}
            />
            <Button
                title="Sign up"
                color="#f194ff"
                style={{ marginBottom: 20 }}
                onPress={signUp}
            />
            <Button
                title="Sign in"
                color="#f194ff"
                style={{ marginBottom: 20 }}
                onPress={signIn}
            />
        </View>
    );
};

export default LoginScreen;
