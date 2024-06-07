import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDeFZWb41HiVikU6WRIuve5Ugp9h1CqHac',
  authDomain: 'lumina-1afaf.firebaseapp.com',
  projectId: 'lumina-1afaf',
  storageBucket: 'lumina-1afaf.appspot.com',
  messagingSenderId: '1013126651573',
  appId: '1:1013126651573:web:29cc91daee39c7426de8fc',
};

firebase.initializeApp(firebaseConfig);
export default firebase
