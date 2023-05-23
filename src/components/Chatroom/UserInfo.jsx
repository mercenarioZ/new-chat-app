import { Avatar, Button, Typography } from 'antd'
import { auth } from '../../firebase/config'

const { Text } = Typography

const UserInfo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid whitesmoke', height: '4vh', alignItems: 'center' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    margin: '0 10px',
                }}
            >
                <Avatar src=''>N</Avatar>
                <Text strong style={{fontSize: '1rem'}} level={4}>Logged in user</Text>
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
