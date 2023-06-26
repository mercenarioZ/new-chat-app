import { Avatar, Button, Typography } from 'antd'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { auth } from '../../firebase/config'

const { Text } = Typography

const UserInfo = () => {
    const {
        user: { photoURL, displayName },
    } = useContext(AuthContext)

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '3px solid whitesmoke',
                height: '5vh',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    margin: '0 10px',
                }}
            >
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Text strong style={{ fontSize: '.8rem', wordBreak: 'break-all', padding: '2px' }} level={4}>
                    {displayName}
                </Text>
            </div>

            <Button
                onClick={() => {
                    auth.signOut()
                }}
                style={{ fontWeight: 'bold', margin: '5px 10px' }}
            >
                Log out
            </Button>
        </div>
    )
}

export default UserInfo
