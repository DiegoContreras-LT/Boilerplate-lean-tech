import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from "../../env";

firebase.initializeApp(firebaseConfig);

export const firebaseApp =  firebase;
