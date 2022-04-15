import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAcq558HmKvT634aH8vDU_paoUcn7S8tdk',
  authDomain: 'vue-firebase-authenticat-2a92a.firebaseapp.com',
  projectId: 'vue-firebase-authenticat-2a92a',
  storageBucket: 'vue-firebase-authenticat-2a92a.appspot.com',
  messagingSenderId: '338199582050',
  appId: '1:338199582050:web:91096cdfb27e5b81fc883b',
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const userCollection = db.collection('users');

export { auth, db, userCollection };
