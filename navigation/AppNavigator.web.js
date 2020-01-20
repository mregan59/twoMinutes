import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from '../screens/LoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

const switchNavigator = createSwitchNavigator(
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
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
