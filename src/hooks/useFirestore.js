import { onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection } from 'firebase/firestore'

const useFirestore = (collectionName, condition) => {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, collectionName)
        let q = collectionRef // default query is all docs

        // Condition structure
        /*
            {
                fieldName: string,
                operator: '==' for string value, 'in' for array value
                compareValue: string
            }
        */

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length)
                return

            q = query(
                collectionRef,
                where(
                    condition.fieldName,
                    condition.operator,
                    condition.compareValue
                )
            )
        }

        const unsubcribe = onSnapshot(q, (snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))

            setDocuments(documents)

            console.log({ documents })
        })

        return () => unsubcribe()
    }, [collectionName, condition])

    return documents
}

export default useFirestore
