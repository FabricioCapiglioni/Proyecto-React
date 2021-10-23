import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    doc,
    Timestamp,
    writeBatch,
    query,
    where
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)

export const getProducts = (key, operator, value) => {

    return new Promise((resolve, reject) => {
        const queryCollection = key && operator && value ? query(collection(db, 'Products'), where(key, operator, value)) : collection(db, 'Products')

        getDocs(queryCollection).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            resolve(products)
        }).catch((error) => {
            reject(console.log('Error searching intems', error))
        })
    })
}


export const newOrder = (order) => {

    return new Promise ((resolve, reject) => {
        order = {...order,
        date: Timestamp.fromDate(new Date()) 
        }
    const batch = writeBatch(db)
    const outOfStock = []

    order.items.forEach((prod, i) => {
        getDoc(doc(db, 'Products', prod.id)).then(DocumentSnapshot => {
            if(DocumentSnapshot.data().stock >= order.items[i].quantity) {
                batch.update(doc(db, 'Products', DocumentSnapshot.id), {
                    stock: DocumentSnapshot.data().stock - order.items[i].quantity
                })
            } else {
                outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
            }   
        })
    })

    if(outOfStock.length === 0) {
        addDoc(collection(db, 'orders'), order).then(() => {
            batch.commit().then(() => {
                resolve("Your purchase was successful")
            })
        }).catch((error) => {
            reject("Something went wrong, try again", error)
        })
    }})
}


export const newContact = (contact) => {

    return new Promise ((resolve, reject) => {
        contact = {...contact,
        date: Timestamp.fromDate(new Date()) 
        }
    const batch = writeBatch(db)

    addDoc(collection(db, 'contact'), contact).then(() => {
        batch.commit().then(() => {
            resolve("Thank you for communicating, we will contact you shortly")
        })
    }).catch((error) => {
        reject("Something went wrong, try again", error)
    })
    })

}



