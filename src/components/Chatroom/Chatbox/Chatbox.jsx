/* eslint-disable react/prop-types */
import { Avatar } from 'antd'
import './Chatbox.css'

export const Chatbox = ({chatName}) => {
    return (
        <div
            onClick={() => {
                console.log('Clicked on chatbox')
            }}
            className='chat-box'
        >
            <Avatar className='chat-avatar' src={null}>
                {chatName?.charAt(0)?.toUpperCase()}
            </Avatar>
            <p className='chat-name'>{chatName}</p>
        </div>
    )
}

