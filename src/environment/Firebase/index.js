import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQ5oQMfv2_YM2IfgthLJ4zd6Q_os5ocMg",
    authDomain: "boilerplate-19cdc.firebaseapp.com",
    databaseURL: "https://boilerplate-19cdc.firebaseio.com",
    projectId: "boilerplate-19cdc",
    storageBucket: "boilerplate-19cdc.appspot.com",
    messagingSenderId: "756322669727",
    appId: "1:756322669727:web:7d548c0f02c8148f853eaa",
    measurementId: "G-P6VJ7CZPJE"
};

firebase.initializeApp(firebaseConfig);

export const firebaseApp =  firebase;
