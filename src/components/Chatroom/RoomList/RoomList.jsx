import { Typography } from 'antd'
import { useContext, useMemo } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import useFirestore from '../../../hooks/useFirestore'
import './RoomList.css'


const RoomList = () => {
    const {
        user: { email },
    } = useContext(AuthContext)

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'users',
            operator: 'array-contains',
            compareValue: email,
        }
    }, [email])

    const rooms = useFirestore('rooms', roomsCondition)

    return rooms.map((room) => (
        <Typography.Link className='room-list' key={room.id}>
            {room.name}
        </Typography.Link>
    ))
}
export default RoomList
