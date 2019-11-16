import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from "../../utils/config";

firebase.initializeApp(firebaseConfig);

export const firebaseApp =  firebase;
