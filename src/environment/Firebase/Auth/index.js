import {firebaseApp} from "../index";

const socialMediaProvider = {
    FACEBOOK: new firebaseApp.auth.FacebookAuthProvider(),
    GOOGLE: new firebaseApp.auth.GoogleAuthProvider(),
    MICROSOFT: new firebaseApp.auth.OAuthProvider('microsoft.com'),
};

const auth = firebaseApp.auth();

export const singInWithSocialMedia = provider => auth.signInWithPopup(socialMediaProvider[provider]);

export const singInEmailAndPassword = ({email, password}) => auth.signInWithEmailAndPassword(email, password);
