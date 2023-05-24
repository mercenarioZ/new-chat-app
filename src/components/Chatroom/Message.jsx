/* eslint-disable react/prop-types */
import { Avatar, Typography } from 'antd'

const { Text } = Typography

const Message = ({ message, displayName, time, photoURL }) => {
    return (
        <div>
            <div
                className='message-info'
                style={{
                    padding: '10px',
                    margin: '7px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Avatar style={{ marginRight: '8px' }} src={photoURL}>
                    N
                </Avatar>
                <Text style={{ fontSize: '1rem', marginRight: '5px' }} strong>
                    {displayName}
                </Text>
                <Text style={{color: '#a7a7a7'}}>{time}</Text>
            </div>

            <div className='message-content'>
                <Text style={{ margin: '10px', fontSize: '1.1rem', padding: '7px' }}>
                    {message}
                </Text>
            </div>
        </div>
    )
}

export default Message
