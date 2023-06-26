import { collection, query, where } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase/config'
import { getRecipientEmail } from '../utils/getRecipientEmail'
import { useCollection } from 'react-firebase-hooks/firestore'

export const useRecipient = (conversationUsers) => {
    const [loggedInUser] = useAuthState(auth)

    // Get recipient's email
    const recipientEmail = getRecipientEmail(conversationUsers, loggedInUser)

    // Query all the recipients' emails
    const queryGetRecipient = query(
        collection(db, 'users'),
        where('email', '==', recipientEmail)
    )

    // Get the snapshot
    const [recipientsSnapshot] = useCollection(queryGetRecipient)

    // recipient snapshot
    // recipientsSnapshot could be an empty array.
    const recipient = recipientsSnapshot?.docs[0]?.data()

    return { recipient, recipientEmail }
}
