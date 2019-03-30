import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD5lwCu7tp7tKMy4AkQrLgfQ-32JBresqY",
    authDomain: "voicetuner-app.firebaseapp.com",
    databaseURL: "https://voicetuner-app.firebaseio.com",
    projectId: "voicetuner-app",
    storageBucket: "voicetuner-app.appspot.com",
    messagingSenderId: "413392403959"
  };
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;