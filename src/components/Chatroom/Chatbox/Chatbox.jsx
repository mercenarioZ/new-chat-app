/* eslint-disable react/prop-types */
import { Avatar } from 'antd'
import './Chatbox.css'

export const Chatbox = ({ id, conversationUsers }) => {
    return (
        <div className='chat-box'>
            <Avatar className='chat-avatar' src={null}>
                {conversationUsers?.charAt(0)?.toUpperCase()}
            </Avatar>
            <p className='chat-name'>{conversationUsers}</p>
        </div>
    )
}
