import './RoomList.css'
import { Chatbox } from '../Chatbox/Chatbox'
import useFirestore from '../../../hooks/useFirestore'
import { useContext, useMemo } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const RoomList = () => {
    const {
        user: { email },
    } = useContext(AuthContext)

    const convsCondition = useMemo(() => {
        return {
            fieldName: 'users',
            operator: 'array-contains',
            compareValue: email
        }
    }, [email])

    const conversations = useFirestore('conversations', convsCondition)

    return (
        <div className='room-list'>
            {conversations.map((conversation) => (
                <Chatbox id={conversation.id} key={conversation.id} conversationUsers={conversation.users[1]} />
            ))}
        </div>
    )
}
export default RoomList
