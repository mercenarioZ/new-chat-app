import './RoomList.css'
import { Chatbox } from '../Chatbox/Chatbox'
import useFirestore from '../../../hooks/useFirestore'
import { useContext, useMemo } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const RoomList = () => {
    const {
        user: { uid },
    } = useContext(AuthContext)

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        }
    }, [uid])

    const rooms = useFirestore('rooms', roomsCondition)

    return (
        <div className='room-list'>
            {rooms.map((room) => (
                <Chatbox key={room.id} chatName={room.name} />
            ))}
        </div>
    )
}
export default RoomList
