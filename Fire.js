import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD-wqUQb0GeAGspW2rkQhVUAllcvkVTtk",
  authDomain: "todoapp-1f38a.firebaseapp.com",
  projectId: "todoapp-1f38a",
  storageBucket: "todoapp-1f38a.appspot.com",
  messagingSenderId: "888898366253",
  appId: "1:888898366253:web:6b6ae1611424a1c833c1a4"
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        callback(null, user);
      } else {
        // User is signed out, sign in anonymously
        firebase.auth()
          .signInAnonymously()
          .catch((error) => {
            // Handle the error here
            callback(error);
          });
      }
    });
  }
}

export default Fire;
