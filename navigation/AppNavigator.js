import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from '../screens/LoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            AuthLoading: LoadingScreen,
            Auth: AuthStack,
            Main: MainTabNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);
