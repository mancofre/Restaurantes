import { firebaseApp } from './firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore(firebaseApp);

export const isUserLogger = () => {
    let isLooged = false;
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLooged = true)
    });

    return isLooged;
}
