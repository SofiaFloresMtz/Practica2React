import firebase from 'firebase/app';
import 'firebase/database';

const config={
    // your information from the firebase database
    apiKey: "AIzaSyDExzdXrSUzhqZkldjVlJwCJ-pgOMoxY1c",
    authDomain: "menureact-725da.firebaseapp.com",
    databaseURL: "https://menureact-725da.firebaseio.com",
    projectId: "menureact-725da",
    storageBucket: "menureact-725da.appspot.com",
    messagingSenderId: "383379214610",
    appId: "1:383379214610:web:83d38b5f69c5ce7ba763cb",
    measurementId: "G-CVMNJ055H1"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;