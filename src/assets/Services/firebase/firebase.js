import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyA3KKwMwSPln-sGbv1IVpWDMX5n_i4TxcE",
  
    authDomain: "coderphone-reactproyect.firebaseapp.com",
  
    projectId: "coderphone-reactproyect",
  
    storageBucket: "coderphone-reactproyect.appspot.com",
  
    messagingSenderId: "900581026767",
  
    appId: "1:900581026767:web:9ecb4e78266bb5634940ba"
  
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)
  