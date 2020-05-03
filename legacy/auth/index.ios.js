/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBNb_DRXE7IYUXG4ReLrLebkbR6MFI1FP0",
    authDomain: "authentication-43393.firebaseapp.com",
    databaseURL: "https://authentication-43393.firebaseio.com",
    projectId: "authentication-43393",
    storageBucket: "authentication-43393.appspot.com",
    messagingSenderId: "274335514896"
};

firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);