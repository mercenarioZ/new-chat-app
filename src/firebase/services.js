// import { db } from './config'
// import { doc, setDoc } from 'firebase/firestore'

// export const addDocument = async (collection, data) => {
//       const query = db.collection(collection);

//       query.add({
//         ...data,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       });

// }

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './config'

export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: serverTimestamp(),
        })
        console.log('Document written with ID: ', docRef.id)
    } catch (error) {
        console.error('Error adding document: ', error)
    }
}
