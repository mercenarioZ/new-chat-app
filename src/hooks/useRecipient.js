import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase/config"
import { collection, query, where } from "firebase/firestore"
import { useCollection } from 'react-firebase-hooks/firestore'
import { getRecipientEmail } from "../utils/getRecipientEmail"

export const useRecipient = (conversationUsers) => {
    const [user] = useAuthState(auth)

    // get recipient email
    const recipientEmail = getRecipientEmail(conversationUsers, user)

    // get recipient avatar
    const queryRecipient = query(collection(db, 'users'), where('email', '==', recipientEmail))
    const [recipientSnapshot] = useCollection(queryRecipient)

    // recipient snapshot
    const recipient = recipientSnapshot?.docs[0]?.data()
    
}